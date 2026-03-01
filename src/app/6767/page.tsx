'use client';
import Link from 'next/link'; // Link санг оруулж ирнэ
export default function Home() {
  // Нууц үг болон төлөв (state) шалгах хэсгийг бүрэн хаслаа.
  // Хуудас ачаалагдахад шууд энэ хэсэг харагдана.
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] font-sans p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center bg-[#ffe4e6] rounded-[3rem] py-16 px-10 shadow-2xl border-4 border-[#fecdd3] text-center animate-in fade-in zoom-in duration-700">
        
        {/* GIF хэсэг */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-[#fecdd3] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#fff5f7] p-2 rounded-3xl border-2 border-[#fecdd3] overflow-hidden shadow-lg">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3djRuZ2I2eGNoczV2MTIxZjNzOXg4MGtweDMwbzlzZTcybzd0M2g4byZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/TpvnqBFOE0tVrnGU1h/giphy.gif" 
              alt="Matcha Vibe GIF" 
              className="w-64 h-auto rounded-2xl"
            />
          </div>
        </div>

       

          <p className="max-w-md text-lg leading-relaxed text-[#ad1457] font-medium">
            SIX SEVEEEEN
          </p>
          <Link 
          href="/" 
          className="px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          ← Буцах
        </Link>

      </main>
    </div>
  );
}