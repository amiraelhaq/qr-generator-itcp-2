function WelcomeScreen({ onEnter }) {
  const [visible, setVisible] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => onEnter(), 600);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-700 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
         style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fdf2f8 50%, #eff6ff 100%)' }}>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] text-4xl opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>✨</div>
        <div className="absolute top-[20%] right-[15%] text-3xl opacity-30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>💜</div>
        <div className="absolute bottom-[20%] left-[20%] text-3xl opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🌸</div>
        <div className="absolute bottom-[15%] right-[10%] text-4xl opacity-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>⭐</div>
        <div className="absolute top-[50%] left-[5%] text-2xl opacity-30 animate-pulse" style={{ animationDuration: '4s' }}>🎨</div>
        <div className="absolute top-[40%] right-[5%] text-2xl opacity-30 animate-pulse" style={{ animationDuration: '3.5s' }}>💌</div>
      </div>

      {/* Main Content */}
      <div className={`text-center px-6 max-w-2xl mx-auto relative z-10 transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* QR Icon */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center shadow-2xl shadow-purple-300/50 animate-pulse" style={{ animationDuration: '3s' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="8" height="8" rx="1"/>
              <rect x="14" y="2" width="8" height="8" rx="1"/>
              <rect x="2" y="14" width="8" height="8" rx="1"/>
              <rect x="14" y="14" width="4" height="4" rx="0.5"/>
              <rect x="20" y="14" width="2" height="2" rx="0.25"/>
              <rect x="14" y="20" width="2" height="2" rx="0.25"/>
              <rect x="20" y="20" width="2" height="2" rx="0.25"/>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 transition-all duration-1000 delay-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            QR Pro
          </span>
        </h1>

        {/* Welcome Text */}
        <div className={`transition-all duration-1000 delay-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            Hai, selamat datang! 👋
          </p>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-2">
            di <span className="font-bold text-purple-500">QR Generator</span>
          </p>
        </div>

        {/* Description */}
        <div className={`transition-all duration-1000 delay-900 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-md mx-auto">
            Silahkan kreasikan QR kamu dengan se kreatif dan se suka kalian 💜
          </p>
          <p className="text-sm text-gray-300 italic mb-10">
            I hope you guys like it ✨
          </p>
        </div>

        {/* Enter Button */}
        <div className={`transition-all duration-1000 delay-[1100ms] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={handleEnter}
            className="group relative px-10 py-4 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300/50 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f472b6, #a78bfa, #60a5fa)' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Mulai Membuat QR
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </button>
        </div>

        {/* Floating QR dots decoration */}
        <div className={`mt-12 flex justify-center gap-2 transition-all duration-1000 delay-[1300ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" style={{ animationDuration: '2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDuration: '2.3s', animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDuration: '2.6s', animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
