"use client"
import { useState } from "react"
import { ShoppingBag, Tally4, UserRound, Heart, House, LibraryBig, BadgePlus } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="container-cust py-4 sticky top-0 text-black z-10 my-0 my-md-4">
            <div className="mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="md:hidden">
                        <Tally4 className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <div className="hidden md:flex space-x-8">
                        <Tally4 />
                        <a href="#" className="nav-link font-medium">
                            Home
                        </a>
                        <a href="#" className="nav-link font-medium">
                            Collections
                        </a>
                        <a href="#" className="nav-link font-medium">
                            New
                        </a>
                    </div>
                </div>

                <div className="flex items-center cursor-pointer">
                    <img src="/assets/images/favicon.png" alt="Favicon" />
                </div>

                <div className="flex items-center cursor-pointer">
                    <button className="hidden md:block rounded-circle bg-[#000000] p-3 me-5">
                        <img src="/assets/images/favorite.png" alt="Favorite" />
                    </button>

                    <div className="hidden md:flex items-center cursor-pointer me-5">
                        <button className="rounded-5 text-white bg-[#000000] px-6 py-3">
                            Cart
                        </button>
                        <button className="relative right-2 rounded-circle text-black bg-[#fff] p-2 border-8">
                            <ShoppingBag />
                        </button>
                    </div>

                    <button className="rounded-circle text-white bg-[#000000] p-3 cursor-pointer ">
                        <UserRound />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 py-3 px-4 bg-[#ffffff32] rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center nav-link">
                            <House className="mr-2" size={20} />
                            Home
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center nav-link">
                            <LibraryBig className="mr-2" size={20} />
                            Collections
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center nav-link">
                            <BadgePlus className="mr-2" size={20} />
                            New
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center nav-link">
                            <Heart className="mr-2" size={20} />
                            Favorites
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center nav-link">
                            <ShoppingBag className="mr-2" size={20} />
                            Cart
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}