// src/pages/profile/LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Autentifikatsiya yoki serverga yuborish amallarini shu yerda bajaring.
  };

  return (
    <div className="max-w-sm mx-auto mt-10 mb-10 p-6 shadow-lg border rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Войти</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Электронная почта или номер телефона
          </label>
          <input
            type="text"
            name="emailOrPhone"
            className="w-full px-3 py-2 border rounded"
            value={formData.emailOrPhone}
            onChange={handleChange}
            placeholder="+998 94 600 70 07"
            required
          />
        </div>
        <div className="relative">
          <label className="block mb-1">Пароль</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute top-8 right-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Забыли свой пароль?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded font-bold"
        >
          Войти
        </button>
      </form>
      <p className="text-center mt-4">
        Нет аккаунта?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Зарегистрируйтесь
        </Link>
      </p>
    </div>
  );
}
