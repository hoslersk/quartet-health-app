import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaire_reducer'

const rootReducer =  combineReducers({
  questionnaire: questionnaireReducer,
});

export default rootReducer;
