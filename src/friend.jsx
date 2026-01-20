export default function Friend({ friend }){
    const {name,email,phone}=friend;


    return(
        <div className="counter">
            <h3>Friend Name: {name}</h3>
            <p>Phone no: {email}</p>
            <p>Email is: {phone}</p>
        </div>
    )
}