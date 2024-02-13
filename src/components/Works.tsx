import Link from 'next/link';

const worksArray = [
    {
        url: 'https://www.printempskyoto.com/',
        title: '半年に一度の食事会',
        img: '/images/printempskyoto.png',
        description: '友人が開催している食事会を紹介するために作成したWebサイトです。',
        tech: 'Next.js / TypeScript / MUI / S3 / CLoudFront / CodePipline',
    },
    {
        url: 'https://tukkynote.com/',
        title: 'Tukky Note',
        img: '/images/tukkynote.png',
        description: '自身のブログサイトです。エンジニア技術の備忘記事、謎解きのレビュー記事などを投稿しています。',
        tech: 'WordPress / AWS Lightsail',
    },
    {
        url: 'https://tukky-lab.vercel.app/',
        title: 'Tukky Lab',
        img: '/images/tukky-lab.png',
        description: '使ってみたい技術ややってみたいことの実験場として作成したサイトです。',
        tech: 'Next.js / TypeScript / MUI / Vercel / AWS Rekognition / AWS Lambda / Node.js etc...',
    },
    {
        url: 'https://dev-links.pages.dev/',
        title: 'Dev Links',
        img: '/images/dev-links.png',
        description: '開発のための学習サービスやツールなどをまとめたサイトです。随時更新しています。',
        tech: '使用技術：Astro / React / TypeScript / Node.js / Cloudflare Pages',
    },
    {
        url: 'https://tukkytech.com/',
        title: 'Tukky Tech Blog',
        img: '/images/tukkytech.png',
        description: '2つ目に作成した自身のブログサイトです。UIを1から作成し直しました。',
        tech: '使用技術：Next.js / TypeScript / microCMS / S3 / CloudFront',
    },
    {
        url: 'https://life-hub-links.vercel.app/',
        title: 'Life Hub Links',
        img: '/images/life-hub-links.png',
        description: '生活のためのサービスやツールなどをまとめたサイトです。随時更新しています。',
        tech: '使用技術：Next.js / TypeScript',
    },
];

const Works = () => {
    return (
        <div className="mb-40 pt-10" id="works">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">WORKS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {worksArray.map((work, index) => (
                    <Link
                        className="h-[400px] lg:h-96 sm:h-[450px] border border-gray-200 rounded bg-white hover:scale-105 duration-300"
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                    >
                        <p className="text-center mb-2 pt-2 pb-1 px-4 bg-blue-600 text-white font-bold">{work.title}</p>
                        <img className="border-b border-blue-200" src={work.img} alt={`${work.title}の画像`} />
                        <div className="text-sm my-2 px-4 flex flex-col gap-2">
                            <p>{work.description}</p>
                            <p>使用技術：{work.tech}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Works;
