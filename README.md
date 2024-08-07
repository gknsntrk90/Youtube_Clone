## Tailwind
##VİDEO KAYIDI; ![Screen Recording 2024-08-07 at 06 31 35 81 PM](https://github.com/user-attachments/assets/423f53ba-a9e5-4df4-8c34-a01bbd3e44eb)


-- KURULUM;
- https://tailwindcss.com/
- npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

-- tailwind.config.js ekleme yap
- /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

-- index.css ekleme yap
@tailwind base;
@tailwind components;
@tailwind utilities;

-npm run dev ile kaldır ayağa

## KÜTÜPHANELER
- bootstrap yerine  TAİLWİND kullanacağız
- axios olacak
- react-player olacak
- react-icons olacak
- millify sayı formatlama olacak
- moment zaman formatlama olacak
- react-router-dom

## Envrioment Variables (Ortam Değişkenleri)
- Çalışma ortamı için gerekli ama projeyi githuba gönderdiğimiz zaman herkes tarafından erişebilir olmasını istemediğimiz değişkenleri ortam değişkenleri olarak tanımlarız.
-Örn: API_KEY admin giriş bilgileri, yayılmasını istemediğimiz herhangi bir değişken.# Youtube_Clone
