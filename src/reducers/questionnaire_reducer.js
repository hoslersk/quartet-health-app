import {browserHistory} from 'react-router';

export default function questionnaireReducer(state=[], action) {
  switch (action.type) {
    case 'SUBMIT_QUESTIONNAIRE':
      return action.payload;
    default:
      return state;
  }
}
