import { tw } from "twind";

export default function layouts({ children }: any) {
    return (
        <div>
            <nav class={tw`w-full px-4 py-3 bg-yellow-800 text-white mb-10`}>
                <a class='tw mx-4' href="/">Ana sayfa</a>
                <a class='tw mx-4' href="/hakkimda">Hakkımda</a>
                <a class='tw mx-4' href="/users/github">Github kullanıcılarını ara</a>
            </nav>
            {children}
        </div>
    )
}