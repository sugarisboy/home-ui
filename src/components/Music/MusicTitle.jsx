import React from "react";
import PropTypes from 'prop-types';


export const MusicTitle = (props) => {
  const style_title = {
    ...$style_span,
    ...$style_title
  }

  const style_sub_title = {
    ...$style_span,
    ...$style_sub_title
  }

  return (
    <div style={$style}>
      <span style={style_title}>
        {props.title}
      </span>

      <br/>

      <span style={style_sub_title}>
        {props.subTitle}
      </span>
    </div>
  )
}

MusicTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

const $style = {
  width: '60vw',
  margin: '5vmin auto',
  textAlign: 'center',
  lineHeight: '4vmin'
}


const $style_span = {
  color: '#fff',
  fontSize: '5vmin',
}

const $style_title = {
  fontWeight: 800,
  textTransform: 'uppercase',
  padding: 0
}

const $style_sub_title = {
  fontSize: '4vmin',
  fontWeight: 200,
  padding: 0
}



