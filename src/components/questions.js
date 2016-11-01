import React from 'react';
import * as actions from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AnswerSelect from './answer_select'

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      q9: 0
    }
    this.updatePoints = this.updatePoints.bind(this)
  }
  updatePoints(event) {
    debugger
    // this.refs.q1 = event.target.value
    this.setState
  }
  render() {
    return(
      <div>
        <h3>Over the last two weeks, how often have you been bothered by any of the following problems?</h3>
        <p>Little interest or pleasure in doing things?</p>
        <AnswerSelect id="q1" className="q1" ref="q1" value={this.state.q1} updatePoints={this.updatePoints}/>
        <p>Feeling down, depressed, or hopeless?</p>
        <AnswerSelect id="q2" className="q2" ref="q2" value={this.state.q2}/>
        <p>Trouble falling or staying asleep, or sleeping too much?</p>
        <AnswerSelect name="q3"/>
        <p>Feeling tired or having little energy?</p>
        <AnswerSelect name="q4"/>
        <p>Poor appetite or overeating?</p>
        <AnswerSelect name="q5"/>
        <p>Feeling bad about yourself - or that you are a failure or have let yourself or your family down?</p>
        <AnswerSelect name="q6"/>
        <p>Trouble concentrating on things, such as reading the newspaper or watching television?</p>
        <AnswerSelect name="q7"/>
        <p>Moving or speaking so slowly that other people could have noticed?
        Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?</p>
        <AnswerSelect name="q8"/>
        <p>Thoughts that you would be better off dead, or of hurting yourself in some way?</p>
        <AnswerSelect name="q9"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps)
export default componentCreator(Questions)
