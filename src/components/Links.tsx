import { links } from '@/data/links';
import Link from 'next/link';

const Links = () => {
    return (
        <div className="flex justify-center gap-6 mb-8">
            {links.map((link, index) => (
                <Link className="hover:cursor" href={link.link} target="_blank" rel="noreferrer" key={index}>
                    <img className="block w-12 rounded-full" src={`/icons/${link.icon}`} alt={`${link.name}のアイコン画像`} />
                </Link>
            ))}
        </div>
    );
};

export default Links;
