import Link from 'next/link';

const Navbar = () => {


    return (
        <nav className="bg-gray-900 shadow-md w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-300">
                        <Link href="/">
                            EkChupChai
                        </Link>
                    </div>

                    {/* Hamburger Menu (for mobile) */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {/* Navigation Links */}
                        <Link href="/faqs" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            FAQs
                        </Link>
                        <Link href="/about" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            About
                        </Link>
                        <Link href="#" className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                            Resources
                        </Link>

                        {/* Auth Links */}
                        <div className="flex space-x-4">
                            <Link href="/user/login" className="text-white px-6 py-2 rounded-md hover:bg-gray-700">
                                Login
                            </Link>
                            <Link href="/user/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;