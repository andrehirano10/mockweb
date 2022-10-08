import React from 'react'

import PropTypes from 'prop-types'

import './speaker-card.css'

const SpeakerCard = (props) => {
  return (
    <div className="speaker-card-speaker-card">
      <div className="speaker-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="speaker-card-image"
        />
        <div className="speaker-card-read-more-container"></div>
      </div>
      <span className="speaker-card-first-name">{props.Farran}</span>
      <span className="speaker-card-last-name">{props.lastName}</span>
      <span className="speaker-card-text">{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  Farran: 'Marina',
  lastName: 'Farran',
  image_alt: 'image',
  role: 'brand manager @ pepsi',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

SpeakerCard.propTypes = {
  Farran: PropTypes.string,
  lastName: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
  image_src: PropTypes.string,
}

export default SpeakerCard
