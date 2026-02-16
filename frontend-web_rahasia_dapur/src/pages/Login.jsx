import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.type === 'password' ? 'password' : 'identifier']: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        } catch (err) {
            setError(err.response?.data?.message || 'Login gagal');
        }
    };

    return (
        <div className="min-h-screen flex flex-row-reverse font-sans">
            {/* Kanan: Image */}
            <div className="hidden lg:block w-6/12 relative">
                <img src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-4xl font-bold">"Masak Jadi Mudah"</h3>
                </div>
            </div>
            {/* Kiri: Form */}
            <div className="w-full lg:w-6/12 bg-white flex flex-col justify-center px-10 lg:px-32">
                <span className="text-orange-500 font-bold text-xl mb-10">Rahasia Dapur.</span>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Masuk Dapur 👋</h1>
                <p className="text-gray-500 mb-8">Silakan masuk menggunakan akun terdaftar.</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                        placeholder="Email / No. HP"
                        className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Kata Sandi"
                        className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                    />
                    <button className="w-full bg-gray-800 hover:bg-black text-white font-bold py-4 rounded-xl transition">Masuk</button>
                </form>
                <div className="mt-8 text-center text-gray-600">Belum punya akun? <Link to="/register" className="text-orange-500 font-bold">Daftar</Link></div>
            </div>
        </div>
    );
};

export default Login;
