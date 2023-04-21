export default function Hero() {
    return (
        <div
            class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
            style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
        >
            <div class="space-y-4 text-center">
                <h1 class="text-4xl inline-block font-bold">Özlü Sözler ve görüşler</h1>
                <p class="text-xl max-w-lg text-blue-100">
                    Pek yakında bu ekranda
                </p>
            </div>
        </div>)
}