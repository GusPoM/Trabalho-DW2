interface conteudo {
    titulo: String
    autor: String
    genero: String
    //imagem: string,
}


export default function CardLivro({titulo, autor, genero,}: conteudo){
    return(
        <article className="flex gap-6 border-b border-mist-300 px-4 py-6">
            <div className="h-32 w-24 shrink-0 border-2 border-mist">
                {/* Futuramente colocaremos a capa */}
                    {/* <img 
                    src={imagem} 
                    alt={`Capa do livro ${titulo}`} 
                    className="h-full w-full object-cover"
                    /> */}
            </div>

            <div>
                <h3 className="text-x1 font-bold text-mist-600">{titulo}</h3>
                <p className="mt-2 text-mist-600">{autor}</p>
                <p className="mt-2 text-sm text-mist-400">{genero}</p>
            </div>
        </article>
    )
}