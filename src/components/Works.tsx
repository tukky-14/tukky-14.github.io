const Works = () => {
    return (
        <div className="mb-40" id="works">
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
                        <p>自身のブログサイトです。エンジニア技術の備忘記事、謎解きのレビュー記事などを投稿しています。</p>
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
                        <p>使用技術：Next.js / TypeScript / MUI / Vercel / AWS Rekognition / AWS Lambda / Node.jsなど</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Works;
