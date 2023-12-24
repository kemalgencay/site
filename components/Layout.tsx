// deno-lint-ignore-file
import { Footer } from "./Footer.tsx";

export default function layouts({ children }: any) {
    return (
        <div>
            <img src="/header1.jpg" />

            <nav class='tw w-full px-4 py-3 bg-yellow-800 text-white mb-10'>
                <a class='tw mx-4' href="/">Ana sayfa</a>
                <a class='tw mx-4' href="/hakkimda">Hakkımda</a>
                <a class='tw mx-4' href="https://kemalblog.com" target="blank">Yazılar</a>
                <a class='tw mx-4' href="/sozler">Sözler/Düşünceler</a>
            </nav>
            {children}
            <Footer />
        </div >
    )
}