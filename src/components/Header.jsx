"use client"
import { useState } from "react"
import { ShoppingBag, Tally4, UserRound, Heart, House, LibraryBig, BadgePlus } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="py-4 px-6 sticky top-0 text-black z-10 my-5 w-[100vw]">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="md:hidden">
                        <Tally4 className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
                    </button>
                    <div className="hidden md:flex space-x-8">
                        <Tally4 />
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
                            Collections
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium">
                            New
                        </a>
                    </div>
                </div>

                <div className="flex items-center cursor-pointer">
                    <img src="/assets/images/favicon.png" alt="Favicon" />
                </div>

                <div className="flex items-center space-x-4 md:space-x-14 cursor-pointer">
                    <button className="hidden md:block rounded-full bg-[#000000] p-4">
                        <img src="/assets/images/favorite.png" alt="Favorite" />
                    </button>

                    <div className="hidden md:flex items-center cursor-pointer">
                        <button className="rounded-full text-white bg-[#000000] px-6 py-4 tracking-[3px]">
                            Cart
                        </button>
                        <button className="relative right-2 rounded-full text-black bg-[#fff] p-2 border-8">
                            <ShoppingBag />
                        </button>
                    </div>

                    <button className="rounded-full text-white bg-[#000000] p-4 cursor-pointer">
                        <UserRound />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 py-3 px-4 bg-[#ffffff32] rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center">
                            <House className="mr-2" size={20} />
                            Home
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center">
                            <LibraryBig className="mr-2" size={20} />
                            Collections
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center">
                            <BadgePlus className="mr-2" size={20} />
                            New
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center">
                            <Heart className="mr-2" size={20} />
                            Favorites
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600 font-medium flex items-center">
                            <ShoppingBag className="mr-2" size={20} />
                            Cart
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}