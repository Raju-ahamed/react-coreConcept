export default function Post({ post }){
    const {title} =post;
    return(
        <div className="counter">
            <h2>post:{title}</h2>
        </div>
    )
}