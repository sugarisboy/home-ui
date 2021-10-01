import React from "react";
import PropTypes from "prop-types";

export const ProgressBar = (props) => {
  const {progress} = props


  const style_color = {
    ...$style_color,
    width: `${progress * 100}%`
  }

  return (
    <div style={$style}>
      <div style={$style_white}>
        <div style={style_color}/>
        <div style={$style_content}>
          {props.children}
        </div>
      </div>
    </div>

  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number
}

ProgressBar.defaultProps = {
  progress: 0
}

const $style = {
  width: '70vmin',
  height: '70vmin',
  margin: 'auto',
  display: 'flex',
}

const $style_white = {
  ...$style,
  backgroundColor: '#E9C46A',
  margin: 0
}

const $style_color = {
  ...$style,
  position: 'relative',
  backgroundColor: '#E36658',
  transition: 'width 1s',
  margin: 0
}

const $style_content = {
  ...$style,
  position: 'absolute',
  display: 'flex'
}
