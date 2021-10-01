import React from "react";
import './common.css'
import {isMobile} from "../services/browser";

export const Frame = (props) => {
  return (
    <div style={$style}>
      {props.children}
    </div>
  )
}

const $style = {
  display: 'flex',
  flexDirection: isMobile() ? 'column' : 'row',
}
