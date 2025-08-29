import { useParams } from "react-router-dom";

const listaDePosts = [
  { id: 1, titulo: "Post 1", conteudo: "Conteúdo do post 1" },
  { id: 2, titulo: "Post 2", conteudo: "Conteúdo do post 2" },
  { id: 3, titulo: "Post 3", conteudo: "Conteúdo do post 3" }
];


export default function PostDetalhe(){
  const {id} = useParams();
  const post = listaDePosts.find(p => p.id === Number(id))

if (!post) return <h2>Post não encontrado</h2>;

    return(
         <div>
      <h1>{post.titulo}</h1>
      <p>{post.conteudo}</p>
      <h1>ola mundo </h1>
    </div>
    )
}