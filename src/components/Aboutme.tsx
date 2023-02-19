const AboutMe = () => {
    return (
        <div className="mb-40 pt-10" id="about_me">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">ABOUT ME</h2>
            <div className="sm:flex justify-center gap-4">
                <img className="m-auto sm:m-0 block w-40 rounded-full" src="/images/tukky.jpg" alt="つっきーのアイコン画像" />
                <p className="w-full sm:w-2/5 mt-4 sm:mt-0">
                    京都府の田舎出身、現大阪住まいのITエンジニアTukkyです。音響機器メーカー購買職 →
                    PC・スマホのコールセンターを経験したのち、30歳でITエンジニア業界に転職しました。
                    AWSサーバ構築・運用、フロントエンド・バックエンド含めたWebアプリケーション作成など幅広く業務を経験しています。
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
