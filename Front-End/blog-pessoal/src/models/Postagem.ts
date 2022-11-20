import Tema from "./Tema";

interface Postagem {
    id: number
    titulo: string
    texto: string
    dataPost: string
    autor:string
    link:string
    imagem:string
    tema?: Tema | null
    //acesso?: Usuario | null
}

export default Postagem;