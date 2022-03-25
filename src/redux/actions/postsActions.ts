import { IPost } from "../reducer/postsReducer"

export const addPost = (posts: IPost[]) => {
  return {type: 'ADD_POST', posts}
}