import React, { Component } from 'react';
import Questions from './questions'

export default function Questionnaire(props) {
  return(
    <div>
      <h2>Questionnaire Div</h2>
      <Questions />
    </div>
  )
}

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// };

// const componentCreator = connect(mapStateToProps, mapDispatchToProps);
// export default componentCreator(App);
