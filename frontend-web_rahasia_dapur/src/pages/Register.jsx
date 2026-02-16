import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.placeholder]: e.target.value });
    }; // Placeholder match approach is risky, let's use name attribute

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/register', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        } catch (err) {
            setError(err.response?.data?.message || 'Registrasi gagal');
        }
    };

    return (
        <div className="min-h-screen flex font-sans">
            {/* Kiri: Image */}
            <div className="hidden lg:flex w-5/12 bg-orange-50 relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-orange-500 opacity-10"></div>
                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" />
                <div className="relative z-10 text-center p-12">
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">Rahasia Dapur</h2>
                    <p className="text-gray-600 text-lg">Gabung komunitas Ibu PKK cerdas & raih cuan dari dapur.</p>
                </div>
            </div>
            {/* Kanan: Form */}
            <div className="w-full lg:w-7/12 bg-white flex flex-col justify-center px-10 lg:px-32">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Buat Akun Baru</h1>
                <p className="text-gray-500 mb-10">Mulai langkah suksesmu dari dapur sendiri.</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Nama Depan"
                            className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Nama Belakang"
                            className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                        />
                    </div>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Nomor WhatsApp"
                        className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Kata Sandi"
                        className="w-full p-4 rounded-xl bg-gray-50 border focus:border-orange-500 outline-none"
                    />
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition">Daftar Sekarang</button>
                </form>
                <p className="text-center mt-8 text-gray-600">Sudah punya akun? <Link to="/" className="text-orange-500 font-bold">Masuk</Link></p>
            </div>
        </div>
    );
};

export default Register;
