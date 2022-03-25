export interface IPost {
  title: string;
  body: string;
  id: number;
  autor: {name: string};
} 


export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState= {
  posts: []
}

export const postsReducer = (state = defaultState, action: any) => {
  if(action.type === 'ADD_POST') {
    return {...state, posts: action.posts}
  }
  return state
}