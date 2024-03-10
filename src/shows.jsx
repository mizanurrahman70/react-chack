export default function ShowData({post}){
    console.log(post)
    const {title,id}=post
   
    return (

        <div>
            <h1>post:{title}</h1>
            <h3>title:{id}</h3>
            <p>body:</p>
        </div>
    )
}