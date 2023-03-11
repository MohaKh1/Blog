import React, {FC} from 'react'
interface Post {
  title: string,
  excerpt: string
};


const PostCard: FC<Post> = ({title, excerpt}) => {
  return (
    <div>
      {title}
      {excerpt}
    </div>
  )
}

export default PostCard