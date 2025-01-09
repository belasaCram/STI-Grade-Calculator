const Header = () => {
    return (
        <header className="w-full z-50 shadow-lg bg-white lg:max-w-5xl lg:rounded-lg lg:mt-2 mx-auto">
            <nav className="flex items-center justify-center p-2 lg:p-4 text-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-700">
                        <span className="underline decoration-sky-600 hover:decoration-blue-400">Passed </span> 
                        Or 
                        <span className="underline decoration-pink-600 hover:decoration-pink-400"> Failed</span>
                    </h1>
                </div>
            </nav>
        </header>

    );
};

export default Header;
