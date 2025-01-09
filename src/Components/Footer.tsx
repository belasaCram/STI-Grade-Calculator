const Footer = () => {
    const url = "https://github.com/belasaCram";
    const owner = "CRAMSUS";

    return (
        <footer className="w-full z-50 bg-white lg:max-w-5xl lg:rounded-lg lg:shadow lg:mb-4 mx-auto">
            <div className="mx-auto max-w-screen-xl p-4 lg:p-6 md:flex md:items-center md:justify-between">
                <span className="text-xs lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <a href={url} className="hover:underline">{owner}</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
