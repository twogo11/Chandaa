'use client';
import Link from 'next/link'; // Link санг оруулж ирнэ
import React from 'react';

export default function Home() {
  // Жагсаалтын жишээ өгөгдөл (Хоосон байхаар тохируулав)
  const codeList = [
    { id: 1, title: "Төсөл 1", desc: "Удахгүй орох код..." },
    { id: 2, title: "Төсөл 2", desc: "Удахгүй орох код..." },
    { id: 3, title: "Төсөл 3", desc: "Удахгүй орох код..." },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col items-center bg-[#fff5f7] p-6 font-sans antialiased">
      
      {/* Үндсэн мэндчилгээ хэсэг */}
      <main className="w-full max-w-sm flex flex-col items-center justify-center bg-white/60 backdrop-blur-md rounded-[3rem] py-12 px-8 shadow-[0_20px_50px_rgba(255,182,193,0.3)] border border-white/80 text-center animate-in fade-in zoom-in duration-1000">
        
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#ffe5ec] to-white shadow-inner animate-bounce duration-[3000ms]">
          <span className="text-3xl">✨</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#ad1457]">
            Сайн уу, Чандаа
          </h1>
          
          <div className="h-[3px] w-8 bg-[#880e4f] rounded-full"></div>

          <p className="max-w-[240px] text-sm leading-relaxed text-[#ad1457] font-medium">
            Чамд зориулж хийсэн сайтад тавтай морил! <br/>
            тэгээд чи сайн код хийж ороод ирсэн ш дээ. Тэрэн шиг зөндөө их код байна. Энд жагсаалтыг үлдээ, сонирхоноос орж эхлээд үзээрэй.
          </p>
        </div> <Link 
          href="/" 
          className="px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          ← Буцах
        </Link>
      </main>

      

    </div>
  );
}