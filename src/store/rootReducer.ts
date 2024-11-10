import { combineReducers } from 'redux';
import {contentSlice} from "../modules/content-page/slice/slice";

const rootReducer = combineReducers({
  content: contentSlice.reducer,
});

export default rootReducer;
