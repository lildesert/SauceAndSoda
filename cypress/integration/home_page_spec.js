/**
 * Adds command "cy.waitForResource(name)" that checks performance entries
 * for resource that ends with the given name.
 * This command only applies to the tests in this spec file
 *
 * @see https://developers.google.com/web/tools/chrome-devtools/network/understanding-resource-timing
 */
Cypress.Commands.add('waitForResource', (name, options = {}) => {
  cy.log(`Waiting for resource ${name}`)

  const log = false // let's not log inner commands
  const timeout = options.timeout || Cypress.config('defaultCommandTimeout')

  cy.window({ log }).then(
    // note that ".then" method has options first, callback second
    // https://on.cypress.io/then
    { log, timeout },
    win => {
      return new Cypress.Promise((resolve, reject) => {
        let foundResource

        // control how long we should try finding the resource
        // and if it is still not found. An explicit "reject"
        // allows us to show nice informative message
        setTimeout(() => {
          if (foundResource) {
            // nothing needs to be done, successfully found the resource
            return
          }

          clearInterval(interval)
          reject(new Error(`Timed out waiting for resource ${name}`))
        }, timeout)

        const interval = setInterval(() => {
          foundResource = win.performance
            .getEntriesByType('resource')
            .find(item => item.name.includes(name))

          if (!foundResource) {
            // resource not found, will try again
            return
          }

          clearInterval(interval)
          // because cy.log changes the subject, let's resolve the returned promise
          // with log + returned actual result
          resolve(
            cy.log('✅ success').then(() => {
              // let's resolve with the found performance object
              // to allow tests to inspect it
              return foundResource
            })
          )
        }, 100)
      })
    }
  )
})

describe('Sauce and Soda testing', function() {
  it('loads homepage', function() {
    cy.visit('/')
    cy.scrollTo('bottom') // scroll to bottom to load all the images
    cy.contains('A propos')
    cy.get('[alt*="thumbnail-"]').then(images => {
      for (let i = 0; i < images.length; i++) {
        cy.waitForResource(images[i].alt.split('-')[1].split('?')[0])
      }
    })
    cy.contains('SauceAndSoda')
    cy.screenshot('homepage')
  })
})
