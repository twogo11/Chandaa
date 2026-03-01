'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function BirthdayPage() {
  const [isClicked, setIsClicked] = useState(false);

  // Хуудас ачаалагдахад эхний ээлжинд салют буудуулах
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fff5f7] font-sans overflow-x-hidden">
      {/* Background гоёл */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
         <div className="absolute top-10 left-10 text-4xl">✨</div>
         <div className="absolute bottom-20 right-10 text-4xl">💜</div>
         <div className="absolute top-1/2 left-5 text-4xl">🔥</div>
      </div>

      <main className="relative flex w-full max-w-2xl flex-col items-center py-10 px-6 sm:px-10">
        
        {/* Header - Төрсөн өдрийн гарчиг */}
        <div className="mb-10 text-center animate-bounce">
          <h1 className="text-4xl sm:text-5xl font-black text-[#ad1457] drop-shadow-md">
            HAPPY BIRTHDAY GIRLLLLLLLL! 🎂
          </h1>
        </div>

        {/* Story Section */}
        <div className="w-full space-y-8 text-[#5d1234] leading-relaxed">
          
          <section className="bg-white/60 p-6 rounded-[2rem] shadow-sm border-l-4 border-[#ad1457]">
            <p className="text-lg font-medium">
              Ёоо, бэлгийг чинь андаа мань ганцаараа хувьдаа хийж өгсөн шүү, ахахахаха. 
              Чамд цэцэг хийж өгье гэж эхлээд нэг бодлоо. Тэгээд за бас тэгээд л би л нэг цэцэг хийж зардаг гэсэн шиг цэцгээ шахаад байх нь хаашаа юм гэж бодоод...
            </p>
          </section>

          {/* Random Image 1 */}
          <div className="w-full h-64 overflow-hidden rounded-3xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://i.pinimg.com/736x/32/24/4b/32244bddfffc46375643a697af3c6054.jpg" 
              alt="Gift process" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="bg-white/60 p-6 rounded-[2rem] shadow-sm border-r-4 border-[#ad1457] text-right">
            <p className="text-lg font-medium">
              ...өөрөө юм хийж өгвөл илүү байх гэж бодоод мань pipe cleaner-ээр Luffy-гийн чөтгөрийн жимсийг хийгээд чамд өгчихье гэж бодсон. 
              Ёоо, миний бодсон хамгийн аймар санаа! Гэхдээ TikTok дээр нэг эгч аль хэдийн хийчихсэн байсан л даа. Гэхдээ би түрүүлж бодсон энэ тэр ахахаха.
            </p>
          </section>

          {/* Random Image 2 - Luffy Theme */}
          <div className="w-full h-80 overflow-hidden rounded-3xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
            <img 
              src="https://i.pinimg.com/736x/02/28/57/022857609ec2f7a138c2edcaa9f3712e.jpg" 
              alt="Luffy vibe" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="bg-white/60 p-6 rounded-[2rem] shadow-sm border-l-4 border-[#ad1457]">
            <p className="text-lg font-medium italic">
              "Hito Hito no Mi, Model: Nika" гэсэн шүү Google ах. Гэхдээ мань бол өнгийг нь мэднэ ээ.
              Яг хийх гэсэн тийм өнгөтэй pipe cleaner гэрт байдаггүй, fck гээд л Гэгээнтэн рүү тирамису авах далимдаа гарсан. 
              Яармагийн түгжрээнд явсаар байгаад гэрт ирэхэд 6 цаг болчихсон байсан.
            </p>
          </section>

          {/* Random Image 3 */}
          <div className="w-full h-64 overflow-hidden rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://i.pinimg.com/736x/ae/a1/f7/aea1f72920beda31e9723dd1a7359e82.jpg" 
              alt="Late night work" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="bg-[#ad1457] p-8 rounded-[3rem] shadow-2xl text-center text-white">
            <p className="text-xl font-bold mb-4">
              За за, тэгээд сайтаа дуусгаад бэлгийг чинь бэлдээд, чөтгөрийн жимсээ сая шөнийн 3 цагт л хийж дууслаа! 🛠️
            </p>
            <p className="text-lg opacity-90">
              Одоо сайтаа дуусгачихъя гээд л үзээд байна. Enjoy your day!
            </p>
          </section>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center gap-6 pb-20">
          <button 
            onClick={() => {
              confetti({ particleCount: 200, spread: 90, colors: ['#ad1457', '#fecdd3', '#ff4081'] });
              setIsClicked(true);
            }}
            className="px-10 py-4 bg-[#ff4081] text-white text-xl font-black rounded-full shadow-[0_10px_0_0_#ad1457] active:shadow-none active:translate-y-2 transition-all"
          >
            {isClicked ? "ДАХИАД БУУДУУЛАХ! 🎉" : "ЭНД ДАРЖ САЛЮТ БУУДУУЛААРАЙ!"}
          </button>

          <Link 
            href="/" 
            className="text-[#ad1457] font-bold hover:underline flex items-center gap-2"
          >
            ← Буцах
          </Link>
        </div>
      </main>
    </div>
  );
}