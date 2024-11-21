import { works } from '@/data/works';
import Link from 'next/link';

const Works = () => {
    return (
        <div className="mb-40 pt-10" id="works">
            <h2 className="text-center text-2xl mb-8 m-auto font-bold border-b-4 w-1/2 border-blue-500">WORKS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((work, index) => (
                    <Link
                        className="lg:h-96 h-[450px] border border-gray-200 rounded bg-white hover:scale-105 duration-300"
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                    >
                        <p className="text-center mb-2 pt-2 pb-1 px-4 bg-blue-600 text-white font-bold">{work.title}</p>
                        <img className="border-b border-blue-200" src={work.img} alt={`${work.title}の画像`} />
                        <div className="text-sm my-2 px-4 flex flex-col gap-2">
                            <p>{work.description}</p>
                            <p>
                                【使用技術】
                                <br />
                                {work.tech}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Works;
