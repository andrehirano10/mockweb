import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text navigation-Link">
        {props.link3}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link3: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks
