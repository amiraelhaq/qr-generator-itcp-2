function ClosingScreen({ onRestart }) {
  const [visible, setVisible] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const handleRestart = () => {
    setFadeOut(true);
    setTimeout(() => onRestart(), 600);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-700 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
         style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #fdf2f8 50%, #f5f3ff 100%)' }}>

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] text-3xl opacity-20 animate-pulse" style={{ animationDuration: '3s' }}>💜</div>
        <div className="absolute bottom-[15%] right-[12%] text-3xl opacity-20 animate-pulse" style={{ animationDuration: '3.5s' }}>✨</div>
      </div>

      {/* Main Content */}
      <div className={`text-center px-6 max-w-lg mx-auto relative z-10 transition-all duration-1000 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Thank You Title */}
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 delay-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Terima Kasih! 🙏
          </span>
        </h1>

        {/* Message */}
        <div className={`transition-all duration-1000 delay-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-gray-600 mb-3">
            Sudah menggunakan <span className="font-bold text-purple-500">QR Pro</span> 💜
          </p>
          <p className="text-base text-gray-400 leading-relaxed mb-2">
            Semoga QR yang kamu buat bisa bermanfaat ya!
          </p>
          <p className="text-sm text-gray-300 italic">
            Sampai jumpa lagi! See you next time ✨
          </p>
        </div>

        {/* Stats / Fun Section */}
        <div className={`mt-8 flex justify-center gap-6 transition-all duration-1000 delay-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl mb-1">📱</div>
            <p className="text-xs text-gray-400">QR Generated</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">🎨</div>
            <p className="text-xs text-gray-400">Kreatif</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">💜</div>
            <p className="text-xs text-gray-400">Made with Love</p>
          </div>
        </div>

        {/* Restart Button */}
        <div className={`mt-8 transition-all duration-1000 delay-900 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={handleRestart}
            className="group relative px-8 py-3 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-300/50 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f472b6, #a78bfa, #60a5fa)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Buat QR Lagi
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180 duration-500">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
                <polyline points="21 3 21 9 15 9"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </button>
        </div>

        {/* Footer */}
        <div className={`mt-10 transition-all duration-1000 delay-900 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-gray-300">
            © 2026 QR Pro
          </p>
        </div>
      </div>
    </div>
  );
}
