import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="mb-20 relative">
            <img className="sm:hidden w-full h-[500px] object-cover" src="/images/top-sm.jpg" alt="夜の月の画像" />
            <img className="hidden sm:block w-full h-[500px] object-cover" src="/images/top.jpg" alt="夜の月の画像" />
            <ul className="flex gap-4 absolute top-2 right-6 text-white">
                <Link to="about_me" smooth={true} duration={500}>
                    <li className="border-b border-transparent hover:border-blue-800 hover:cursor-pointer duration-300">
                        ABOUT ME
                    </li>
                </Link>
                <Link to="works" smooth={true} duration={500}>
                    <li className="border-b border-transparent hover:border-blue-800 hover:cursor-pointer duration-300">WORKS</li>
                </Link>
                <Link to="my_skills" smooth={true} duration={500}>
                    <li className="border-b border-transparent hover:border-blue-800 hover:cursor-pointer duration-300">
                        MY SKILLS
                    </li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
