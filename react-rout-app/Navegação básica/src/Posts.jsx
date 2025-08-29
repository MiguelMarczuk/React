import { Link } from "react-router-dom"


const listaDePosts = [
  { id: 1, titulo: "Post 1" },
  { id: 2, titulo: "Post 2" },
  { id: 3, titulo: "Post 3" }
];

export default function Posts(){
    return(
          <div>
      <h1>Lista de Posts</h1>
      <ul>
        {listaDePosts.map(post => (
          <li key={post.id}>
            {/* Link para a rota dinâmica */}
            <Link to={`/posts/${post.id}`}>{post.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
    )
}