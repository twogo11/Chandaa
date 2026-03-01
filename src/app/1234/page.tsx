'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      // Салют буудуулах эффект
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ad1457', '#fecdd3', '#ff4081']
      });
      setIsClicked(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] font-sans p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center bg-[#ffe4e6] rounded-[3rem] py-16 px-10 shadow-2xl border-4 border-[#fecdd3] text-center animate-in fade-in zoom-in duration-700">
        
        

        {/* Зургийн хэсэг */}
        <div className="flex flex-col items-center gap-8">
          
          <div 
            onClick={handleClick}
            className={`cursor-pointer transition-all duration-500 transform ${!isClicked ? 'animate-bounce' : 'scale-110'}`}
          >
            {!isClicked ? (
              /* Зураг 1: Зургийн өөрийнх нь хэмжээгээр хүрээ нь гарна */
              <div className="relative group inline-block"> 
                <img 
                  src="https://i.pinimg.com/736x/15/c4/c5/15c4c56b132a7e1ab53372783f5af8ec.jpg"
                  alt="Эхний зураг" 
                  className="max-w-xs w-full h-auto rounded-3xl border-4 border-[#ad1457] shadow-xl hover:scale-105 transition-all duration-300 object-contain"
                />
                <p className="mt-4 text-[#ad1457] font-bold animate-pulse text-sm tracking-wide text-center">
                  Намайг дар! ✨
                </p>
              </div>
            ) : (
              /* Зураг 2: Энэ зураг ч мөн адил өөрийнхөө хэмжээгээр гарна */
              <div className="animate-in zoom-in duration-500 inline-block">
                <img 
                  src="https://i.pinimg.com/736x/5f/d9/34/5fd9342ed6d5f5c401f5292c3750daac.jpg" 
                  alt="Төрсөн өдрийн зураг" 
                  className="max-w-xs w-full h-auto rounded-3xl border-4 border-[#ad1457] shadow-2xl transition-all object-contain"
                />
                <p className="mt-4 text-[#ad1457] font-black text-xl tracking-widest animate-bounce text-center">
                  
                </p>
              </div>
            )}
          </div>

          {/* Буцах товч */}
          <Link 
            href="/" 
            className="mt-4 px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Буцах
          </Link>
        </div>
        
      </main>
    </div>
  );
}