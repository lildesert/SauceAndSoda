import React from 'react'
import styled from 'styled-components'

import mSauce from '../images/sauce.jpg'
import mSoda from '../images/soda.jpg'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutCard from '../components/aboutCard'

const Subtitle = styled.h3`
  &.subtitle {
    margin-bottom: 2rem;
  }
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="À Propos" keywords={['about', 'bbq', 'sauce', 'cocktails', 'soda']} />
      <h1 className="title">A Propos</h1>
      <Subtitle className="subtitle">Sauce And Soda est un blog pour les fans de fumée
      qui aiment les bons produits et ont envie d'approfondir leurs connaissances en cuisine et cocktails.
      A la rédaction on retrouve : </Subtitle>
      <div className="columns">
        <div className="column is-offset-1 is-4">
          <AboutCard image={mSoda} name='M. Soda'
            about="Passionné de mixologie et de BBQ, Julien (ou M. Soda)
            aime expérimenter de nouvelles techniques en cuisine.<br />
            Son surnom vient de sa soif pour les boissons
            sucrées qu'il prends plaisir à déguster lors
            de ses voyages à travers le monde."
            favCocktail="Ti'Punch" favBbq='Pulled Pork'
            favBonus='Soda : Arnold Palmer' />
        </div>
        <div className="column is-offset-2 is-4">
          <AboutCard image={mSauce} name='M. Sauce'
            about="Ayant grandi dans un famille de gastronome,
            Vincent (ou M. Sauce) s'intéresse
            à la cuisine et particulièrement au BBQ.<br />
            Comme son surnom l'indique, il est un inconditionnel
            des sauces en tout genres."
            favCocktail='Gin & Tonic' favBbq='St Louis Ribs'
            favBonus='Sauce : Carolina-Style BBQ Sauce' />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
