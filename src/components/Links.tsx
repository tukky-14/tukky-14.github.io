const Links = () => {
    return (
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
    );
};

export default Links;
