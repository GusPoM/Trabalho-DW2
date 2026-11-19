import CardLivro from "./card"
import Header from "./header"

export default function Home(){
    return(
        
        <div className="bg-fuchsia-50">
            <Header />
            <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">

            {/* História / Reflexão do Dia */}
            <section className="bg-gradient-to-br from-teal-200 to-emerald-400 p-8 rounded-2xl mb-10 shadow-sm border-l-6 border-teal-600">
                <span className="bg-teal-600 text-white text-[11px] font-bold uppercase pyy-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
                Destaque do Dia
                </span>
                <p className="text-lg leading-7 text-teal-800 italic font-medium mb-3 mt-0">
                "Um bom livro pode levar você para lugares que nunca imaginou conhecer."
                </p>
                <span className="text-teal-800 text-[13px] font-semibold block">
                Reflexão do Dia
                </span>
            </section>

            {/* Boas-vindas */}
            <section className="text-center mb-12">
                <h2 className="text-[32px] font-extrabold text-mist-700 mb-3 tracking-tight">Bem-vindo à biblioteca</h2>
                <p className="max-w-[700px] mx-auto text-base text-mist-600 leading-[26px]">
                Estamos construindo um espaço para você explorar e descobrir novos livros.
                Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxima leitura favorita!
                </p>
            </section>
            
            {/* Estudos */}
            <section className="mb-12">
                <h3 className="text-xl font-bold text-mist-700 mb-5">Navegação Rápida</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
                    
                    {/* Atalho de estudos */}
                    <a href="./estudos" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">📖</div>
                    <div>
                        <h4 className="text-base font-bold text-violet-600 mb-1">Cantinho de Estudos</h4>
                        <p className="text-[13px] text-mist-500 m-0">Pomodoro, tarefas e dicas</p>
                    </div>
                    </a>

                    <a href="./recomendacoes" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">★</div>
                    <div>
                        <h4 className="text-base font-bold text-violet-600 mb-1 mt-0">Recomendações</h4>
                        <p className="text-[13px] text-mist-500 m-0">Descubra novos livros</p>
                    </div>
                    </a>

                    <a href="./acervo" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▣</div>
                    <div>
                        <h4 className="text-base font-bold text-violet-600 mb-1 mt-0">Acervo</h4>
                        <p className="text-[13px] text-mist-500 m-0">Explore nossa coleção</p>
                    </div>
                    </a>
                    
                    <a href="./aulas" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                    <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▸</div>
                    <div>
                        <h4 className="text-base font-bold text-violet-600 mb-1 mt-0">Aulas Mobile</h4>
                        <p className="text-[13px] text-mist-500 m-0">Aprenda desenvolvimento</p>
                    </div>
                    </a>
                    <a href="./aulas" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">📹</div>
                        <div>
                            <h4 className="text-base font-bold text-violet-600 mb-1 mt-0">Aulas Web</h4>
                            <p className="text-[13px] text-mist-500 m-0">Olha o carro do LF passando na sua rua</p>
                        </div>
                    </a>
                    <a href="./dev" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">🧑‍💻</div>
                        <div>
                            <h4 className="text-base font-bold text-violet-600 mb-1 mt-0">Informática</h4>
                            <p className="text-[13px] text-mist-500 m-0">Informações sobre o desenolvedor</p>
                        </div>
                    </a>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-[#0F172A] m-0">Livros em destaque</h3>
                <a href="./acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">Ver todos →</a>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                <CardLivro
                    titulo="Dom Casmurro"
                    autor="Machado de Assis"
                    genero="Romance"
                    // imagem="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
                />

                <CardLivro
                    titulo="O Cortiço"
                    autor="Aluísio Azevedo"
                    genero="Romance"
                />
                
                <CardLivro
                    titulo="O Pequeno Príncipe"
                    autor="Antoine de Saint-Exupéry"
                    genero="Literatura"
                />
                </div>
            </section>
            </main>

            <CardLivro titulo="1984" autor="George Orwell" genero="Ficção Científica"/>
            <CardLivro titulo="mai" autor="George Orwell" genero="Ficção Científica"/>
            <CardLivro titulo="sadsa" autor="George Orwell" genero="Ficção Científica"/>
            <CardLivro titulo="19sacewa84" autor="George Orwell" genero="Ficção Científica"/>
        </div>
    )
}