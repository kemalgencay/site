import { tw } from "twind";

export default function layouts({ children }: any) {
    return (
        <div>
            <img src="/header1.jpg" />

            <nav class={tw`w-full px-4 py-3 bg-yellow-800 text-white mb-10`}>
                <a class='tw mx-4' href="/">Ana sayfa</a>
                <a class='tw mx-4' href="/hakkimda">Hakkımda</a>
                <a class='tw mx-4' href="https://kemalgencay-blog.deno.dev target=_blank">Yazılar</a>
            </nav>
            {children}
        </div >
    )
}