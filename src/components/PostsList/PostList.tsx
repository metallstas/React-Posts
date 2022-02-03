import { ReactComponentElement, ReactElement, useEffect, useState } from 'react'
import { ArrayTypeNode } from 'typescript'
import { Post } from './Post/Post'
import cls from './PostList.module.css'

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const [limit, setLimit] = useState<number>(5)

  const getPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const data = await response.json()
    setPosts(data)
  }

  const showNextPosts = () => {
    setLimit(limit + 5)
  }

  useEffect(() => {
    getPosts()
  }, [limit])

  return (
    <>
      <div className={cls.postList}>
        {posts.map((post: { title: string; body: string; id: number }) => {
          return <Post title={post.title} body={post.body} key={post.id} id={post.id}/>
        })}
      </div>
      <div>
        {limit !== 100 ? <button onClick={showNextPosts}>Show more</button> : null}
      </div>
    </>
  )
}
