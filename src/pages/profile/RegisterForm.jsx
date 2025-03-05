import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  // Inputdagi o'zgarishlarni kuzatib borish
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Formani yuborish
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Faqat kerakli ma’lumotlarni localStorage'ga yozamiz
    localStorage.setItem(
      "profileData",
      JSON.stringify({
        name: formData.name,
        emailOrPhone: formData.emailOrPhone,
      })
    );
    // Ro'yxatdan o'tish muvaffaqiyatli bo'lsa, profil sahifasiga yo'naltiramiz
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 p-6 shadow-lg border rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Регистрация</h2>
      <p className="text-sm text-center mb-4">
        Иметь аккаунт?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Войти
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Ваше имя</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите имя"
            required
          />
        </div>
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
        <div>
          <label className="block mb-1">Пароль</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Подтвердить пароль</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-3 py-2 border rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label className="text-sm">
            Я согласен с{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Условиями
            </a>{" "}
            и{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Политикой конфиденциальности
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded font-bold"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
}
