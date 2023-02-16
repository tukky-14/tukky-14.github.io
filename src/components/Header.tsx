const Header = () => {
    return (
        <header className="mb-20">
            <img className="sm:hidden w-full h-[500px] object-cover" src="/images/top-sm.jpg" alt="夜の月の画像" />
            <img className="hidden sm:block w-full h-[500px] object-cover" src="/images/top.jpg" alt="夜の月の画像" />
        </header>
    );
};

export default Header;
