import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-scroll';

const menuList = [
    { name: 'ABOUT ME', link: 'about_me' },
    { name: 'WORKS', link: 'works' },
    { name: 'MY SKILLS', link: 'my_skills' },
];

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleMobileMenuClick = () => {
        setOpen(true);
    };

    return (
        <header className="mb-20 relative">
            <img className="sm:hidden w-full h-[500px] object-cover" src="/images/top-sm.jpg" alt="夜の月の画像" />
            <img className="hidden sm:block w-full h-[500px] object-cover" src="/images/top.jpg" alt="夜の月の画像" />
            <ul className="hidden sm:flex gap-4 absolute top-2 right-6 text-white">
                {menuList.map((menu: { name: string; link: string }, index: number) => (
                    <Link to={menu.link} smooth={true} duration={500} key={index}>
                        <li className="border-b border-transparent hover:border-blue-800 hover:cursor-pointer duration-300">
                            {menu.name}
                        </li>
                    </Link>
                ))}
            </ul>
            <button className="sm:hidden top-0 right-0 p-2 z-10 fixed" onClick={handleMobileMenuClick}>
                <MenuIcon fontSize="large" />
            </button>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className="px-8 pt-16 flex flex-col gap-4 h-full bg-gray-600 text-white">
                    {menuList.map((menu: { name: string; link: string }, index: number) => (
                        <Link to={menu.link} smooth={true} duration={500} key={index}>
                            <li className="list-none border-b border-transparent hover:cursor-pointer duration-300">{menu.name}</li>
                        </Link>
                    ))}
                </div>
                <button className="sm:hidden absolute top-0 right-0 p-2 z-10 text-white" onClick={() => setOpen(false)}>
                    <CloseIcon fontSize="large" />
                </button>
            </Drawer>
        </header>
    );
};

export default Header;
