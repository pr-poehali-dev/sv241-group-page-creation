import { useState } from 'react';
import Icon from '@/components/ui/icon';

const BANNER = 'https://cdn.poehali.dev/projects/7786a37d-42cb-4e39-a49e-4d1afa002f07/files/aae87194-5c3e-44de-9712-2fc10f876e44.jpg';

const students = [
  { name: 'Артём Власов', role: 'Староста', emoji: '🔥', color: 'from-orange-400 to-red-500' },
  { name: 'Дмитрий Носов', role: 'Студент', emoji: '⚡', color: 'from-blue-400 to-cyan-500' },
  { name: 'Иван Морозов', role: 'Студент', emoji: '🛠️', color: 'from-violet-400 to-purple-600' },
  { name: 'Кирилл Белов', role: 'Студент', emoji: '💪', color: 'from-emerald-400 to-teal-500' },
  { name: 'Никита Орлов', role: 'Студент', emoji: '🚀', color: 'from-pink-400 to-rose-500' },
  { name: 'Сергей Зайцев', role: 'Студент', emoji: '⭐', color: 'from-amber-400 to-orange-500' },
  { name: 'Павел Гущин', role: 'Студент', emoji: '🎯', color: 'from-indigo-400 to-blue-600' },
  { name: 'Роман Лебедев', role: 'Студент', emoji: '🌟', color: 'from-fuchsia-400 to-pink-600' },
];

const skills = [
  { icon: 'Flame', title: 'Ручная дуговая сварка', text: 'Работа с покрытыми электродами и металлоконструкциями.' },
  { icon: 'Zap', title: 'Полуавтоматическая сварка', text: 'Сварка в среде защитных газов MIG/MAG.' },
  { icon: 'Wrench', title: 'Чтение чертежей', text: 'Понимание технической документации и схем.' },
  { icon: 'ShieldCheck', title: 'Контроль качества', text: 'Проверка швов и соблюдение норм безопасности.' },
];

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'students', label: 'Студенты' },
  { id: 'about', label: 'О специальности' },
  { id: 'teacher', label: 'Преподаватель' },
  { id: 'gallery', label: 'Галерея' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] text-white font-sans overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0d0d12]/70 border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display text-2xl font-700 tracking-wide gradient-text">СВ-241</div>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-500 text-white/70 hover:text-white transition-colors story-link">
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d0d12] animate-fade-in">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left px-6 py-3 text-white/80 hover:bg-white/5">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={BANNER} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d12]/60 via-[#0d0d12]/80 to-[#0d0d12]" />
        </div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container relative z-10 text-center animate-fade-in">
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-500 mb-6">
            Сварочное производство · 2024–2028
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-700 leading-none mb-6">
            ГРУППА <span className="gradient-text">СВ-241</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Будущие мастера сварочного дела. Мы куём металл, характер и своё будущее.
          </p>
          <button onClick={() => scrollTo('students')} className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 font-600 hover-scale shadow-lg shadow-orange-500/30">
            Познакомиться с группой
          </button>
        </div>
      </section>

      {/* STUDENTS */}
      <section id="students" className="py-24 grain">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <h2 className="font-display text-5xl md:text-6xl font-700">Наши <span className="gradient-text">студенты</span></h2>
            <p className="text-white/50 max-w-sm">Дружная команда, в которой каждый — личность с характером.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {students.map((s, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover-scale animate-scale-in" style={{ animationDelay: `${i * 60}ms` }}>
                <div className={`aspect-square bg-gradient-to-br ${s.color} flex items-center justify-center text-6xl`}>
                  {s.emoji}
                </div>
                <div className="p-4">
                  <div className="font-600 text-lg leading-tight">{s.name}</div>
                  <div className="text-sm text-white/50">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-gradient-to-br from-[#15151d] to-[#0d0d12]">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="text-orange-400 font-600 text-sm uppercase tracking-widest">Специальность 15.01.05</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 mt-3">Сварщик ручной и частично механизированной сварки</h2>
            <p className="text-white/60 mt-5 text-lg">
              Профессия востребована в строительстве, машиностроении и нефтегазовой отрасли. За время обучения студенты осваивают ключевые компетенции:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {skills.map((sk, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-400/40 transition-colors">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                  <Icon name={sk.icon} size={26} />
                </div>
                <div>
                  <h3 className="font-600 text-xl mb-1">{sk.title}</h3>
                  <p className="text-white/55">{sk.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHER */}
      <section id="teacher" className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] max-w-md rounded-[2rem] bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500 flex items-center justify-center text-9xl shadow-2xl shadow-violet-500/30">
                👩‍🏫
              </div>
              <div className="absolute -bottom-5 -right-2 md:right-10 px-6 py-3 rounded-2xl bg-white text-[#0d0d12] font-600 shadow-xl">
                15 лет стажа
              </div>
            </div>
            <div>
              <span className="text-violet-400 font-600 text-sm uppercase tracking-widest">Классный руководитель</span>
              <h2 className="font-display text-5xl md:text-6xl font-700 mt-3 mb-5">Елена Сергеевна Кузнецова</h2>
              <p className="text-white/60 text-lg mb-8">
                Преподаватель спецдисциплин высшей категории. Помогает каждому студенту раскрыть потенциал и стать профессионалом своего дела.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/80">
                  <Icon name="Mail" size={20} className="text-orange-400" />
                  e.kuznetsova@college.ru
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Icon name="Phone" size={20} className="text-orange-400" />
                  +7 (900) 000-00-00
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-[#15151d] to-[#0d0d12]">
        <div className="container">
          <h2 className="font-display text-5xl md:text-6xl font-700 mb-14 text-center">Жизнь <span className="gradient-text">группы</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['🏭', '⚙️', '🤝', '📐', '🔧', '🎓'].map((e, i) => (
              <div key={i} className={`rounded-2xl bg-gradient-to-br ${students[i].color} aspect-video flex items-center justify-center text-6xl hover-scale cursor-pointer animate-scale-in`} style={{ animationDelay: `${i * 70}ms` }}>
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-white/40">
        <div className="font-display text-3xl font-700 gradient-text mb-2">СВ-241</div>
        <p className="text-sm">Группа сварщиков · Сделано с гордостью за свою профессию</p>
      </footer>
    </div>
  );
};

export default Index;
