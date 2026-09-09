function QRDisplay({ qrImage, config, loading }) {
  const downloadQR = () => {
    const link = document.createElement('a');
    link.download = `qrcode-${Date.now()}.png`;
    link.href = qrImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card p-8 flex flex-col items-center sticky top-24 overflow-hidden" data-name="qr-display" data-file="components/QRDisplay.js">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="text-lg font-bold text-gray-800">Pratinjau QR Code</h3>
        <div className="icon-sparkles text-purple-400"></div>
      </div>
      
      <div className="relative group w-full aspect-square max-w-[320px] mb-8 bg-gray-50 rounded-2xl flex items-center justify-center border-4 border-gray-100 p-4 transition-transform hover:scale-[1.02]">
        {loading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="icon-loader text-4xl text-[var(--accent-color)] animate-spin"></div>
            <span className="text-sm text-gray-400">Generating...</span>
          </div>
        ) : qrImage ? (
          <div className="relative w-full h-full">
            <img 
              src={qrImage} 
              alt="Generated QR Code" 
              className="w-full h-full object-contain rounded-lg shadow-sm relative z-10"
            />
            <div className="icon-heart text-pink-200 absolute -bottom-2 -right-2 text-2xl z-20"></div>
          </div>
        ) : (
          <div className="text-gray-300 flex flex-col items-center">
            <div className="icon-qr-code text-6xl mb-2"></div>
            <p className="text-sm">Menunggu input...</p>
          </div>
        )}
      </div>

      <div className="w-full space-y-3">
        <button 
          onClick={downloadQR}
          disabled={!qrImage}
          className="btn btn-primary w-full py-4 text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="icon-download text-xl"></div>
          Unduh PNG
        </button>
        <div className="flex gap-3">
          <button className="btn btn-outline flex-1 py-3 text-sm">
            <div className="icon-share text-lg"></div>
            Bagikan
          </button>
          <button className="btn btn-outline flex-1 py-3 text-sm">
            <div className="icon-printer text-lg"></div>
            Cetak
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 w-full border-t pt-8">
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase font-semibold">Ukuran</p>
          <p className="font-bold text-gray-700">{config.size} x {config.size}</p>
        </div>
        <div className="text-center border-l">
          <p className="text-xs text-gray-400 uppercase font-semibold">Kualitas</p>
          <p className="font-bold text-gray-700">300 DPI</p>
        </div>
      </div>
    </div>
  );
}