import { use } from "react"
import Post from './post'

export default function Posts({allPost}){
    const posts= use(allPost)
    return(
        <div>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    )
}