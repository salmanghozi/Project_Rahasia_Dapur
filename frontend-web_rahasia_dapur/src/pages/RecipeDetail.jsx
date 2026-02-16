import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, PlayCircle } from 'lucide-react';
import api from '../api';

const Detail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await api.get(`/recipes/${id}`);
                setRecipe(res.data);
            } catch (err) {
                console.error("Failed to fetch recipe", err);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id]);

    if (loading) return <div className="text-center p-10">Memuat Resep...</div>;
    if (!recipe) return <div className="text-center p-10">Resep tidak ditemukan</div>;

    return (
        <div className="min-h-screen bg-white font-sans">
            <nav className="border-b px-10 py-4 flex items-center justify-between sticky top-0 bg-white z-20">
                <Link to="/home" className="flex items-center gap-2 text-gray-500 font-bold hover:text-orange-500"><ArrowLeft className="w-5 h-5" /> Kembali</Link>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg"><Bookmark className="w-5 h-5" /> Simpan</button>
                    <button className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 px-3 py-2 rounded-lg"><Share2 className="w-5 h-5" /> Bagikan</button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Kiri: Konten Utama */}
                <div className="lg:col-span-8">
                    <div className="w-full h-[400px] bg-black rounded-3xl relative overflow-hidden group mb-8">
                        <img src={recipe.imageUrl} className="w-full h-full object-cover opacity-80" alt={recipe.title} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-20 h-20 text-white cursor-pointer hover:scale-110 transition" />
                        </div>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded-lg text-sm font-bold">{recipe.category || 'Ide Jualan'}</span>
                    <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-6">{recipe.title}</h1>
                    <p className="text-gray-600 leading-loose text-lg mb-10 border-b pb-10">
                        {recipe.description}
                    </p>
                    <h3 className="font-bold text-2xl mb-6 text-gray-800">Cara Membuat</h3>
                    <div className="space-y-8">
                        {recipe.instructions.map((step, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">{index + 1}</div>
                                <p className="text-gray-600 text-lg">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kanan: Sidebar Bahan */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24">
                        <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-6 grid grid-cols-3 gap-2 mb-6 text-center">
                            <div><p className="text-xs text-gray-400 font-bold uppercase">Modal</p><p className="text-orange-500 font-bold text-xl">{recipe.price}</p></div>
                            <div className="border-l border-orange-200"><p className="text-xs text-gray-400 font-bold uppercase">Porsi</p><p className="font-bold text-xl">{recipe.portion || '-'}</p></div>
                            <div className="border-l border-orange-200"><p className="text-xs text-gray-400 font-bold uppercase">Waktu</p><p className="font-bold text-xl">{recipe.time}</p></div>
                        </div>
                        <div className="bg-white border rounded-2xl p-8 shadow-xl">
                            <h3 className="font-bold text-xl mb-6">Bahan-bahan</h3>
                            <div className="space-y-4">
                                {recipe.ingredients.map((bahan, i) => (
                                    <label key={i} className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
                                        <input type="checkbox" className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500" />
                                        <span className="text-gray-700 font-medium">{bahan}</span>
                                    </label>
                                ))}
                            </div>
                            <button className="w-full mt-8 bg-gray-800 hover:bg-black text-white py-4 rounded-xl font-bold transition">Mulai Masak</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
