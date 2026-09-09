function ConfigPanel({ config, onChange }) {
  const types = [
    { id: 'url', label: 'URL', icon: 'icon-link' },
    { id: 'text', label: 'Teks', icon: 'icon-file-text' },
    { id: 'wifi', label: 'Wi-Fi', icon: 'icon-wifi' },
    { id: 'vcard', label: 'vCard', icon: 'icon-user' }
  ];

  const [activeTab, setActiveTab] = React.useState('content');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ logo: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card p-6" data-name="config-panel" data-file="components/ConfigPanel.js">
      <div className="flex gap-4 border-b mb-6 overflow-x-auto">
        <div 
          className={`tab-item flex items-center gap-2 ${activeTab === 'content' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('content')}
        >
          <div className="icon-pencil text-sm"></div>
          1. Isi Konten
        </div>
        <div 
          className={`tab-item flex items-center gap-2 ${activeTab === 'design' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('design')}
        >
          <div className="icon-palette text-sm"></div>
          2. Desain & Warna
        </div>
        <div 
          className={`tab-item flex items-center gap-2 ${activeTab === 'logo' ? 'active' : 'inactive'}`}
          onClick={() => setActiveTab('logo')}
        >
          <div className="icon-image text-sm"></div>
          3. Tambah Logo
        </div>
      </div>

      {activeTab === 'content' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex gap-2 flex-wrap">
            {types.map(type => (
              <button
                key={type.id}
                onClick={() => onChange({ type: type.id })}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  config.type === type.id 
                  ? 'bg-purple-50 text-purple-600 border border-purple-200' 
                  : 'bg-gray-50 text-gray-600 border border-transparent hover:bg-gray-100'
                }`}
              >
                <div className={`${type.icon} text-lg`}></div>
                {type.label}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              {config.type === 'url' ? 'Masukkan URL Website' : 'Masukkan Teks'}
            </label>
            <textarea
              className="input-field min-h-[120px] resize-none"
              placeholder={config.type === 'url' ? 'https://example.com' : 'Ketik di sini...'}
              value={config.value}
              onChange={(e) => onChange({ value: e.target.value })}
            />
            <p className="text-xs text-gray-400 mt-2">
              QR code akan diperbarui secara otomatis saat Anda mengetik.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'design' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Warna QR</label>
            <div className="flex items-center gap-3">
              <input 
                type="color" 
                value={config.color} 
                onChange={(e) => onChange({ color: e.target.value })}
                className="w-12 h-12 rounded cursor-pointer border-0"
              />
              <input 
                type="text" 
                value={config.color} 
                onChange={(e) => onChange({ color: e.target.value })}
                className="input-field text-sm font-mono uppercase"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Warna Latar</label>
            <div className="flex items-center gap-3">
              <input 
                type="color" 
                value={config.bgColor} 
                onChange={(e) => onChange({ bgColor: e.target.value })}
                className="w-12 h-12 rounded cursor-pointer border-0"
              />
              <input 
                type="text" 
                value={config.bgColor} 
                onChange={(e) => onChange({ bgColor: e.target.value })}
                className="input-field text-sm font-mono uppercase"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label className="block text-sm font-semibold mb-2 text-gray-700">Koreksi Kesalahan (Error Correction)</label>
            <select 
              value={config.level} 
              onChange={(e) => onChange({ level: e.target.value })}
              className="input-field"
            >
              <option value="L">Low (7%)</option>
              <option value="M">Medium (15%)</option>
              <option value="Q">Quartile (25%)</option>
              <option value="H">High (30%) - Rekomendasi jika pakai logo</option>
            </select>
          </div>
        </div>
      )}

      {activeTab === 'logo' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 transition-colors cursor-pointer relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload} 
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            {config.logo ? (
              <div className="flex flex-col items-center">
                <img src={config.logo} className="w-20 h-20 object-contain mb-4 rounded shadow-sm" alt="Logo preview" />
                <button 
                  onClick={(e) => { e.stopPropagation(); onChange({ logo: null }); }}
                  className="text-red-500 text-sm font-medium hover:underline"
                >
                  Hapus Logo
                </button>
              </div>
            ) : (
              <div>
                <div className="icon-image text-4xl text-gray-300 mx-auto mb-4"></div>
                <p className="text-gray-600">Klik atau seret gambar logo ke sini</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG recommended (Max 2MB)</p>
              </div>
            )}
          </div>
          <div className="bg-purple-50 p-4 rounded-lg flex gap-3 border border-purple-100">
            <div className="icon-info text-purple-400 text-xl mt-0.5"></div>
            <p className="text-xs text-purple-600 leading-relaxed">
              Menambahkan logo di tengah QR Code membutuhkan tingkat koreksi kesalahan (Error Correction) yang tinggi agar tetap bisa di-scan.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}