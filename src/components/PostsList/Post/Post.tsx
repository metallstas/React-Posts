import cls from './Post.module.css'

interface IProps {
  title: string;
  body: string;
  id: number;
  autor: string;
}

export const Post = ({title, body, id, autor}: IProps) => {
  return (
    <div className={cls.post}>
      <h2>{title}</h2>
      <p>{body}</p>
      <p className={cls.autor}>Autor: <a href=''>{autor}</a></p>
    </div>
  )
}
