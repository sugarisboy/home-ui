import React from "react";
import PropTypes from 'prop-types'
import {isMobile} from "../services/browser";


export const MicroFrame = (props) => {
  const children = props.children
  const isChildren = isMicroFrame(props.children)

  const adaptiveStyles = (isMobile() ? $style_mobile : $style_desktop(props));
  const style = {
    ...$style,
    ...adaptiveStyles
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

const $style = {
  display: 'flex',
  minHeight: '100vh',
  maxHeight: '100vh',
  backgroundColor: '#E6F3FA',
}

const $style_mobile = {
  maxWidth: '100vw',
  minWidth: '100vw',
}

const $style_desktop = (props) => {
  return {
    maxWidth: props.fullWidth ? '100vw' : '33vw',
    minWidth: props.fullWidth ? '100vw' : '33vw',
  }
}

const isMicroFrame = (children) => {
  if (Array.isArray(children)) {
    const countMicroFrames = children
      .filter(child => child.type === MicroFrame)
      .length

    if (countMicroFrames === children.length) {
      throw new Error("Frame contains not only micro frames")
    }

    return true
  } else {
    return children.type === MicroFrame
  }
}

MicroFrame.propTypes = {
  visibleOnMobile: PropTypes.bool,
  priority: PropTypes.number,
  children: PropTypes.element.isRequired,
  fullWidth: PropTypes.bool
}

MicroFrame.defaultProps = {
  visibleOnMobile: true,
  priority: 0,
  fullWidth: false
}

