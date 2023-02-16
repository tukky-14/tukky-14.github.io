import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Tukky Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100">
                <div className="mb-20">
                    <img className="sm:hidden w-full h-[500px] object-cover" src="/images/top-sm.jpg" alt="夜の月の画像" />
                    <img className="hidden sm:block w-full h-[500px] object-cover" src="/images/top.jpg" alt="夜の月の画像" />
                </div>

                <div className="w-4/5 sm:w-2/3 m-auto">
                    <div className="mb-6">
                        <div className="mt-6 mb-40">
                            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">
                                ABOUT ME
                            </h2>
                            <div className="sm:flex justify-center gap-4">
                                <img
                                    className="m-auto sm:m-0 block w-40 rounded-full"
                                    src="/images/tukky.jpg"
                                    alt="つっきーのアイコン画像"
                                />
                                <p className="w-full sm:w-2/5 mt-4 sm:mt-0">
                                    京都府の田舎出身、現大阪住まいのITエンジニアTukkyです。音響機器メーカー購買職 →
                                    PC・スマホのコールセンターを経験したのち、30歳でITエンジニア業界に転職しました。
                                    AWSサーバ構築・運用、フロントエンド・バックエンド含めたWebアプリケーション作成など幅広く業務を経験しています。
                                </p>
                            </div>
                        </div>

                        <div className="mb-40">
                            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">WORKS</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                <a
                                    className="border h-[400px] p-2 rounded bg-white hover:scale-110 duration-200"
                                    href="https://www.printempskyoto.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-center mb-2 font-bold">半年に一度の食事会</p>
                                    <img src="/images/printempskyoto.png" alt="半年に一度の食事会HPの画像" />
                                    <div className="text-sm my-2 flex flex-col gap-1">
                                        <p>友人が開催している食事会を紹介するために作成したWebサイトです。</p>
                                        <p>使用技術：Next.js / TypeScript / MUI / AWS S3 / AWS CodePipline</p>
                                    </div>
                                </a>
                                <a
                                    className="border h-[400px] p-2 rounded bg-white hover:scale-110 duration-200"
                                    href="https://tukkynote.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-center mb-2 font-bold">Tukky Note</p>
                                    <img src="/images/tukkynote.png" alt="tukkynoteHPの画像" />
                                    <div className="text-sm my-2 flex flex-col gap-1">
                                        <p>
                                            自身のブログサイトです。エンジニア技術の備忘記事、謎解きのレビュー記事などを投稿しています。
                                        </p>
                                        <p>使用技術：WordPress / AWS Lightsail</p>
                                    </div>
                                </a>
                                <a
                                    className="border h-[400px] p-2 rounded bg-white hover:scale-110 duration-200"
                                    href="https://tukky-lab.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-center mb-2 font-bold">Tukky Lab</p>
                                    <img src="/images/tukky-lab.png" alt="TukkyLabHPの画像" />
                                    <div className="text-sm my-2 flex flex-col gap-1">
                                        <p>
                                            使ってみたい技術ややってみたいことの実験場として作成したサイトです。いろんなAPIを試し実装したりしています。
                                        </p>
                                        <p>
                                            使用技術：Next.js / TypeScript / MUI / Vercel / AWS Rekognition / AWS Lambda /
                                            Node.jsなど
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mb-40">
                            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">
                                MY SKILLS
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                <div className="border h-60 p-2 bg-white">
                                    <p className="text-center">フロントエンド</p>
                                </div>
                                <div className="border h-60 p-2 bg-white">
                                    <p className="text-center">バックエンド</p>
                                </div>
                                <div className="border h-60 p-2 bg-white">
                                    <p className="text-center">サーバ・インフラ</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6 mb-8">
                            <a className="hover:cursor" href="https://github.com/tukky-14" target="_blank" rel="noreferrer">
                                <img className="block w-12 rounded-full" src="/icons/github.png" alt="GitHubのアイコン画像" />
                            </a>
                            <a className="hover:cursor" href="https://twitter.com/tukkyhistory" target="_blank" rel="noreferrer">
                                <img className="block w-12 rounded-full" src="/icons/twitter.png" alt="Twitterのアイコン画像" />
                            </a>
                            <a className="hover:cursor" href="https://qiita.com/tukky" target="_blank" rel="noreferrer">
                                <img className="block w-12 rounded-full" src="/icons/qiita.png" alt="Qiitaのアイコン画像" />
                            </a>
                        </div>
                    </div>
                </div>
                <footer className="w-full bg-gray-500 text-white text-center leading-6">
                    <small>&copy; 2023 tukky</small>
                </footer>
            </main>
        </>
    );
}
