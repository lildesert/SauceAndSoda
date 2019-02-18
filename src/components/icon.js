/* eslint-disable react/forbid-prop-types */
import React from 'react'
import styled from 'styled-components'
import { any, string } from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faSpinner,
  faLongArrowAltRight,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// By setting things up like this react-fontawesome knows of the icons
// I am also only using these icons from the libraries so less overhead.
library.add(
  faGithub,
  faInstagram,
  faLinkedin,
  faMediumM,
  faTwitter,
  faYoutube,
  faLongArrowAltRight,
  faHeart
)

const UnstyledIcon = props => <FontAwesomeIcon {...props} />

export const StyledIcon = styled(UnstyledIcon)``

StyledIcon.propTypes = {
  nav: string
}

const SiteIcon = ({ nav, icon, size }) => (
  <StyledIcon nav={nav} icon={icon} size={size} />
)

SiteIcon.propTypes = {
  nav: string,
  icon: any,
  size: string
}

const StyledLoader = styled.div`
  align-items: center;
  color: ${ ({ theme }) => theme.colors.primary };
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Loading = () => (
  <StyledLoader>
    <FontAwesomeIcon icon={faSpinner} size="3x" spin />
  </StyledLoader>
)

export { Loading }
export default SiteIcon
