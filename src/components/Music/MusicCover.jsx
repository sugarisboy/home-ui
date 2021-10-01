import React from "react";
import PropTypes from 'prop-types';


export const MusicCover = (props) => {
  const src = props.src

  const styleImage = {
    ...$styleImage,
    backgroundImage: `url(${src})`
  }

  return (
    <div style={styleImage}>
    </div>
  )
}

MusicCover.propTypes = {
  src: PropTypes.string
}

const $styleImage = {
  margin: '5px',
  width: '100%',
  height: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: 'inherit',
}
