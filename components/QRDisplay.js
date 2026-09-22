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
      
      <div className="relative group w-full max-w-[340px] mb-8 transition-transform hover:scale-[1.02]">
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 blur-md opacity-70"></div>

        <div className="relative rounded-[2rem] border-[10px] border-white bg-white p-5 shadow-[0_25px_60px_rgba(168,85,247,0.18)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full shadow-lg">
            Scan Me
          </div>

          <div className="relative aspect-square w-full rounded-[1.4rem] bg-gray-50 flex items-center justify-center border-4 border-gray-100 p-4 overflow-hidden">
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
                  className="w-full h-full object-contain rounded-xl shadow-sm relative z-10"
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
        </div>
      </div>

      <div className="w-full">
        <button 
          onClick={downloadQR}
          disabled={!qrImage}
          className="btn btn-primary w-full py-4 text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="icon-download text-xl"></div>
          Unduh PNG
        </button>
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