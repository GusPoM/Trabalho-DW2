type Aula = {
    id: number;
    numero: string;
    titulo: string;
    desc: string;
}

const aulas: Aula[] = [
    {
        id: 1,
        numero: "01",
        titulo: "Introdução à Sacanagem",
        desc: "Você não quer que eu descreva isso...."
    },
    {
        id: 2,
        numero: "02",
        titulo: "React-Native: Ação e Reação",
        desc: "Uma história emocionante de um cabaço que aprendeu a importância do equilibrio entre a ação e a reação"
    },
    {
        id: 3,
        numero: "03",
        titulo: "React-Native: Reagindo em Princípio",
        desc: "Um conto sobre com mensagens importantes podem ser distorcidas."
    },
    {
        id: Aulas.length,
        numero: "04",
        titulo: "Tailwind",
        desc: "ALA O ATAQUE QUE NÃO É ATAQUE QUE DOBRA A VELOCIDADE DOS POKÉMON, SE NÃO CAUSA DANO É INÚTIL KAKAKQKAKAKAKA"
    }
]
interface AulaItemProps {
    aula: Aula;
}

function AulaItem({aula}: AulaItemProps){
    return(
        <article className="flex items-center w-full p-4 bg-white rounded-xl shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-center w-12 h-12 min-w-12 rounded-full bg-red-400 mr-4">
                    <span className="text-white  text-sm font-bold">{aula.numero}</span>
                </div>
                <div className="flex-1">
                    <h2 className=" text-[17px] font-bold text-slate-800 mb-1">{aula.titulo}</h2>
                    <p className="text-[13px] leading-[18px] text-slate-500">{aula.desc}</p>
                </div>
        </article>
    )
}

export default function Aulas() {
  return (
    <main className="min-h-screen bg-slate-100">
        <header className="bg-slate-800 px-5 pt-14 pb-8">
            <h1 className="text-3xl font-bold text-white">
                Aulas Mobile
            </h1>
            <p className="mt-2 text-sm leading-5 text-slate-300">
                Aprenda desenvolvimento mobile passo a passo
            </p>
        </header>

        <section className="w-full max-w-4xl mx-auto px-5 py-8">
            <h2 className="mb-4 text-[21px] font-bold text-slate-800">Lista de aulas</h2>
            <div className="flex flex-col gap-3">
                {aulas.map((aula) => (
                    <AulaItem key={aula.id} aula={aula}/>
                ))}
            </div>

        </section>

    </main>
  );
}