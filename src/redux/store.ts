import { IPostsState, postsReducer } from './reducer/postsReducer';
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export interface IState {
  postsReducer: IPostsState;
}

export const store = createStore(combineReducers({postsReducer}) , composeWithDevTools())