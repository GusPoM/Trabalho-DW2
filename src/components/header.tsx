export default function Header() {
    const LinkStyle = "font-medium py-1 px-2 rounded-md"

    return(
        <header className="bg-violet-800 text-teal-100 px-6 pb-2">
            <nav className="flex max-w-5x1 items-center justify-between py-4">

            <a href="./"><h1 className="font-bold">BiblioTech</h1></a>
                <div className="flex gap-4 justify-end">
                    <a className={LinkStyle + " bg-pink-500/80 hover:bg-pink-800/80"} href="index.html">Entrar</a>
                    <a className={LinkStyle + " border border-violet-600 hover:bg-violet-900"} href="index.html">Cadastre-se</a>
                    <a className={LinkStyle + " ms-4 bg-blue-500 hover:bg-blue-800 shadow-lg shadow-blue-500/50"} href="https://chatgpt.com/">Chat</a>
                    <a className={LinkStyle + " ms-4 bg-blue-500 hover:bg-blue-800 shadow-lg shadow-blue-500/50"} href="https://chatgpt.com/">Chat</a>
                </div>
            </nav>
        </header>
    )
}
