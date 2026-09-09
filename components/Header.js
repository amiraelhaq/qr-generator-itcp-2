function Header({ onClose }) {
  return (
    <header className="bg-white border-b sticky top-0 z-50" data-name="header" data-file="components/Header.js">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 relative">
          <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] via-[var(--tertiary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
            <div className="icon-qr-code text-white text-2xl"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">QR<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--tertiary-color)]">Pro</span></span>
          <div className="icon-heart text-pink-400 text-xs absolute -top-1 -right-3 animate-ping"></div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">Generator</a>
          <a href="#" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">Template</a>
          <a href="#" className="text-gray-600 hover:text-[var(--primary-color)] transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline text-sm py-2 px-4">Masuk</button>
          <button className="btn btn-primary text-sm py-2 px-4">Mulai Gratis</button>
          <button onClick={onClose} className="btn text-sm py-2 px-4 rounded-xl border-2 border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-400 hover:bg-red-50 transition-all active:scale-95 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Keluar
          </button>
        </div>
      </div>
    </header>
  );
}