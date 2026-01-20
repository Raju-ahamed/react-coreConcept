import { use } from "react"

export default function User({ fetchUser }){
    const user = use(fetchUser);

    return(
        <h2>user:{user.length}</h2>
    )
}