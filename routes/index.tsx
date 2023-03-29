import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import Countdown from "../islands/Countdown.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sitem</title>
      </Head>
      <Layout>
        <div class="p-4 mx-auto max-w-screen-md">
          <img
            src="/zuzukemal.jpg"
            class="w-50 h-32"
            alt="Zuzu Kemal"
          />
          <p class="my-6">
            <p>

              Ben Kemal, 1967'den beri <i>computer* </i>üstünde yenilikleri izliyor ve uyguluyorum.</p><br></br>

            <p>
              Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri, burada paylaşmaktayım. Çizgim Atatürk
              çizgisidir, ikinci vazifemiz devrimleri Anadolu'ya yaymaktır.
            </p>
            <p> *bilgisayar değil, bilgi soyuttur sayılamaz.</p>
          </p>
        </div>
        <img
          src="/ogrenmek.jpg"
          class="w-50 h-32"
          alt="öğrenmek"
        />
      </Layout >
    </>
  );
}
