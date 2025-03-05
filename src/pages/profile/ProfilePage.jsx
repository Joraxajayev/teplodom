import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "",
    emailOrPhone: "",
    currentPassword: "",
  });

  // Komponent yuklanganda localStorage dan ma'lumotlarni o'qiymiz
  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setProfileData((prev) => ({
        ...prev,
        name: parsedData.name || "",
        emailOrPhone: parsedData.emailOrPhone || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // O'zgartirilgan ma'lumotlarni localStorage'ga qayta yozish
    localStorage.setItem(
      "profileData",
      JSON.stringify({
        name: profileData.name,
        emailOrPhone: profileData.emailOrPhone,
      })
    );
    console.log("Profile updated:", profileData);
    alert("Данные успешно обновлены!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-20 p-6 shadow-lg border rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4">Личные информация</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1">Ваше имя</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border rounded"
            value={profileData.name}
            onChange={handleChange}
          />
        </div>
        {/* Email or Phone */}
        <div>
          <label className="block mb-1">
            Электронная почта или номер телефона
          </label>
          <input
            type="text"
            name="emailOrPhone"
            className="w-full px-3 py-2 border rounded"
            value={profileData.emailOrPhone}
            onChange={handleChange}
          />
        </div>
        {/* Current password (agar kerak bo'lsa) */}
        <div className="mb-10">
          <label className="block mb-1">Текущий пароль</label>
          <input
            type="password"
            name="currentPassword"
            className="w-full px-3 py-2 border rounded"
            value={profileData.currentPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white mb-3 py-2 px-6 rounded font-bold"
        >
          Изменить
        </button>
      </form>
    </div>
  );
}
