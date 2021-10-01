import React from "react";
import PropTypes from 'prop-types';

export const BackgroundContainer = (props) => {
  const src = props.src

  const styles = {
    ...$styles,
    backgroundImage: `url(${src}`
  }

  return (
    <>
      <div style={styles}/>
      <div style={$styles_blur}/>
      <div style={$styles_content}>
        <div style={$style}>
          <div style={{margin: 'auto'}}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

BackgroundContainer.propTypes = {
  src: PropTypes.string
}

const $style = {
  margin: 'auto',
  display: 'flex',
  height: '100vh'
}


const $styles = {
  minWidth: '100%',
  minHeight: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  zIndex: 10,
  position: 'absolute'
}

const $styles_blur = {
  backgroundColor: '#000000',
  position: 'absolute',
  minWidth: '100%',
  minHeight: '100%',
  opacity: 0.8,
  zIndex: 20
}


const $styles_content = {
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  minWidth: '100%',
  minHeight: '100%',
  opacity: 'unset',
  zIndex: 20
}
