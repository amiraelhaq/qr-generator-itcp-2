class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('ErrorBoundary:', error, errorInfo); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 card max-w-md">
            <div className="icon-circle-alert text-5xl text-red-500 mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Terjadi Kesalahan</h1>
            <p className="text-gray-600 mb-6">Maaf, aplikasi mengalami masalah teknis.</p>
            <button onClick={() => window.location.reload()} className="btn btn-primary w-full">Segarkan Halaman</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [showClosing, setShowClosing] = React.useState(false);

  const [qrConfig, setQrConfig] = React.useState({
    value: 'https://trickle.so',
    type: 'url',
    color: '#000000',
    bgColor: '#ffffff',
    size: 512,
    margin: 4,
    logo: null,
    level: 'H'
  });

  const [qrImage, setQrImage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    generateQR();
  }, [qrConfig]);

  const generateQR = async () => {
    try {
      setLoading(true);
      const url = await generateQRCode(qrConfig);
      setQrImage(url);
    } catch (err) {
      console.error('Failed to generate QR:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfigChange = (newConfig) => {
    setQrConfig(prev => ({ ...prev, ...newConfig }));
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  if (showClosing) {
    return <ClosingScreen onRestart={() => { setShowClosing(false); setShowWelcome(true); }} />;
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" data-name="app-container" data-file="app.js">
      {/* Decorative Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Row 1 */}
        <div className="icon-heart text-pink-400 absolute top-[5%] left-[2%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-sparkles text-blue-400 absolute top-[8%] left-[15%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-flower text-purple-400 absolute top-[4%] left-[30%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-star text-indigo-400 absolute top-[10%] left-[45%] text-sm opacity-20 animate-bounce"></div>
        <div className="icon-heart text-pink-400 absolute top-[6%] left-[60%] text-lg opacity-20 animate-pulse"></div>
        <div className="icon-sparkles text-blue-400 absolute top-[3%] left-[80%] text-xl opacity-20 animate-bounce"></div>
        <div className="icon-flower text-purple-400 absolute top-[7%] left-[95%] text-lg opacity-20 animate-pulse"></div>

        {/* Row 2 */}
        <div className="icon-book text-indigo-400 absolute top-[25%] left-[8%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-pencil text-blue-400 absolute top-[20%] left-[22%] text-sm opacity-20 animate-pulse"></div>
        <div className="icon-gift text-pink-400 absolute top-[28%] left-[38%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-music text-purple-400 absolute top-[22%] left-[55%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-heart text-indigo-400 absolute top-[26%] left-[72%] text-sm opacity-20 animate-bounce"></div>
        <div className="icon-sparkles text-pink-400 absolute top-[21%] left-[88%] text-lg opacity-20 animate-pulse"></div>

        {/* Row 3 */}
        <div className="icon-flower text-purple-400 absolute top-[45%] left-[4%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-star text-blue-400 absolute top-[48%] left-[18%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-heart text-pink-400 absolute top-[42%] left-[35%] text-sm opacity-20 animate-pulse"></div>
        <div className="icon-sparkles text-indigo-400 absolute top-[50%] left-[65%] text-xl opacity-20 animate-bounce"></div>
        <div className="icon-book text-blue-400 absolute top-[44%] left-[82%] text-lg opacity-20 animate-pulse"></div>
        <div className="icon-flower text-purple-400 absolute top-[47%] left-[92%] text-xl opacity-20 animate-bounce"></div>

        {/* Row 4 */}
        <div className="icon-gift text-pink-400 absolute top-[65%] left-[12%] text-sm opacity-20 animate-pulse"></div>
        <div className="icon-heart text-indigo-400 absolute top-[68%] left-[28%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-sparkles text-purple-400 absolute top-[62%] left-[48%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-star text-blue-400 absolute top-[70%] left-[75%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-flower text-pink-400 absolute top-[64%] left-[90%] text-sm opacity-20 animate-pulse"></div>

        {/* Row 5 */}
        <div className="icon-pencil text-purple-400 absolute bottom-[10%] left-[5%] text-xl opacity-20 animate-bounce"></div>
        <div className="icon-heart text-blue-400 absolute bottom-[15%] left-[20%] text-lg opacity-20 animate-pulse"></div>
        <div className="icon-sparkles text-pink-400 absolute bottom-[8%] left-[40%] text-sm opacity-20 animate-bounce"></div>
        <div className="icon-book text-indigo-400 absolute bottom-[12%] left-[60%] text-xl opacity-20 animate-pulse"></div>
        <div className="icon-flower text-purple-400 absolute bottom-[5%] left-[85%] text-lg opacity-20 animate-bounce"></div>
        <div className="icon-star text-blue-400 absolute bottom-[18%] left-[94%] text-sm opacity-20 animate-pulse"></div>
      </div>

      <Header onClose={() => setShowClosing(true)} />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7" data-name="config-section">
            <ConfigPanel config={qrConfig} onChange={handleConfigChange} />
          </div>
          <div className="lg:col-span-5 sticky top-8" data-name="preview-section">
            <QRDisplay qrImage={qrImage} config={qrConfig} loading={loading} />
          </div>
        </div>
      </main>
      <footer className="py-8 text-center text-gray-500 border-t mt-auto">
        <p>© 2026 QR Pro. Semua hak dilindungi undang-undang.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);