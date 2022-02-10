import { useEffect, useState } from 'react'
import { Post } from './Post/Post'
import cls from './PostList.module.css'

interface IPost {
  title: string;
  body: string;
  id: number;
  autor: {name: string};
}

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const [limit, setLimit] = useState<number>(5)

  const getPosts = async () => {
    const responseUsers = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    const dataUsers = await responseUsers.json()

    const responsePosts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const dataPosts = await responsePosts.json()

    const newPosts = dataPosts.map((post: any) => {
      const userPostId = post.userId
      const userById = dataUsers.find((user: any) => user.id === userPostId)
      return { ...post, autor: userById }
    })
    console.log(newPosts)
    setPosts(newPosts)
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
        {posts.map((post: IPost) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              key={post.id}
              id={post.id}
              autor={post.autor.name}
            />
          )
        })}
      </div>
      <div>
        {limit <= posts.length ? (
          <button onClick={showNextPosts}>Show more</button>
        ) : null}
      </div>
    </>
  )
}
