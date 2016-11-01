import React, { Component } from 'react';

export default function AnswerSelect(props) {
  return(
    <div>
      <input type="checkbox" value="0" onClick={props.updatePoints} />
      <label>Not at all</label>
      <input type="checkbox" value="1"/>
      <label>Several days</label>
      <input type="checkbox" value="2"/>
      <label>More than half the days</label>
      <input type="checkbox" value="3"/>
      <label>Nearly every day</label>
    </div>
  )
}
