import { use } from "react"
import Friend from "./friend"

export default function Friends({friendMassage}){
    const friends = use(friendMassage)
    return(
        <div >
            <h2>friend:{friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}