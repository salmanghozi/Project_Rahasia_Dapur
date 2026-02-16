import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white px-10 py-4 shadow-sm flex justify-between items-center sticky top-0 z-20">
            <Link to="/home" className="text-xl font-bold text-orange-500">Rahasia Dapur.</Link>
            <div className="relative w-96 hidden md:block">
                <input type="text" placeholder="Cari resep..." className="w-full bg-gray-100 py-3 px-6 rounded-full outline-none focus:ring-2 focus:ring-orange-200" />
                <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex gap-6 items-center text-gray-500 font-bold">
                <Link to="/home" className="text-orange-500 border-b-2 border-orange-500 pb-1">Beranda</Link>
                <span className="hover:text-gray-800 cursor-pointer">Favorit</span>
                <div className="flex items-center gap-3 border-l pl-6">
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-800">Bunda Nurul</p>
                        <p className="text-xs text-gray-400">Anggota PKK</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
