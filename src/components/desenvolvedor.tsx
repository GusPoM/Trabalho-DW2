import Header from './header'

export default function Desenvolvedor(){
  return(
    <>
      <Header />
      <main>
        <section className="p-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="md:-translate-y-20 border-violet-600 rounded-4
          md:text-end md:rounded-e md:border-e-2 md:pe-4 md:border-b-0
          text-center rounded-b border-b-2 pb-4
          ">
            <h1 className="text-[32px]">Esse sou eu</h1>
            <p className="text-[18px]">Um cara de Sorocaba. Veio da Etec, foi pa Fatec, e agora tá tentando arranjar um emprego.</p>
          </div>
          <figure className="shrink-0">
            <img src="./src/assets/img/me.jpg" className="h-78 rounded-tr-[6em] rounded-bl-[6em] rounded-tl-md rounded-br-md shadow-[-10px_10px_25px_rgba(139,92,246,0.5),10px_10px_25px_rgba(52,211,153,0.5)]"/>
          </figure>
          <div className="md:translate-y-20 border-violet-600 rounded-4
          md:rounded-s md:border-s-2 md:ps-4 md:border-t-0
          rounded-t border-t-2 pt-4
          ">
            <h1 className="text-[32px]">E o que eu faço</h1>
            <p className="text-[18px]">Honestamente, nem eu sei ainda. Mas provavelmente fazer sites. Definitivamente nada com hardware.</p>
          </div>
        </section>
      </main>
    </>
  )
}