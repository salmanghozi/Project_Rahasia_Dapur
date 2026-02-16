import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import api from '../api';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await api.get('/recipes');
                setRecipes(res.data);
            } catch (err) {
                console.error("Failed to fetch recipes", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <div className="text-center p-10">Memuat Resep...</div>;

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            <Navbar />

            <div className="px-10 py-10 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 text-white mb-10 flex justify-between items-center shadow-lg">
                    <div>
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">EDISI RAMADHAN</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ide Jualan Takjil Laris!</h1>
                        <p className="mb-6 opacity-90">Kumpulan resep hemat modal untung maksimal.</p>
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100">Lihat Resep</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500" className="hidden md:block h-64 object-contain" />
                </div>

                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-bold whitespace-nowrap">Semua</button>
                    <button className="bg-white text-gray-600 px-6 py-3 rounded-xl font-bold border whitespace-nowrap hover:bg-orange-50">💰 Ide Jualan</button>
                    <button className="bg-white text-gray-600 px-6 py-3 rounded-xl font-bold border whitespace-nowrap hover:bg-orange-50">Masakan Rumah</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recipes.map((item) => (
                        <Link to={`/detail/${item._id}`} key={item._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden group">
                            <div className="h-48 bg-gray-200 overflow-hidden">
                                <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-lg mb-1 text-gray-800">{item.title}</h4>
                                <p className="text-orange-500 font-bold text-sm mb-4">{item.price}</p>
                                <div className="flex justify-between border-t pt-3 text-gray-400 text-xs font-bold">
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                                    <span>{item.difficulty}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
