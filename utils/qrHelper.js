/**
 * Helper to generate QR Code as DataURL with optional logo
 */
async function generateQRCode(config) {
  try {
    const { value, color, bgColor, size, margin, logo, level } = config;
    
    // Generate basic QR on a canvas first
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, value, {
      width: size,
      margin: margin,
      color: {
        dark: color,
        light: bgColor,
      },
      errorCorrectionLevel: level
    });

    if (logo) {
      const ctx = canvas.getContext('2d');
      const logoImg = new Image();
      
      // Load image and wait
      await new Promise((resolve, reject) => {
        logoImg.onload = resolve;
        logoImg.onerror = reject;
        logoImg.src = logo;
      });

      // Calculate logo size (roughly 20% of QR size)
      const logoSize = size * 0.2;
      const x = (size - logoSize) / 2;
      const y = (size - logoSize) / 2;

      // Draw white background for logo (for better visibility)
      ctx.fillStyle = bgColor;
      ctx.beginPath();
      ctx.roundRect(x - 5, y - 5, logoSize + 10, logoSize + 10, 8);
      ctx.fill();

      // Draw logo
      ctx.drawImage(logoImg, x, y, logoSize, logoSize);
    }

    return canvas.toDataURL('image/png');
  } catch (err) {
    throw err;
  }
}