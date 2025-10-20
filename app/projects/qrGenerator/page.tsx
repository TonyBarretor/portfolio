'use client';

import React, { useState, useRef } from 'react';
import { Download, Plus, Trash2, QrCode } from 'lucide-react';

export default function QRGenerator() {
  const [qrCodes, setQrCodes] = useState([]);
  const [fullUrl, setFullUrl] = useState('');
  const [label, setLabel] = useState('');
  const canvasRefs = useRef({});

  const generateQRCode = (text, size = 300) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&format=png`;
  };

  const addQRCode = () => {
    if (!fullUrl.trim()) {
      alert('Please enter a URL');
      return;
    }

    // Add https:// if no protocol specified
    let url = fullUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    const newQR = {
      id: Date.now(),
      label: label.trim() || 'QR Code',
      url,
      qrImage: generateQRCode(url, 500)
    };

    setQrCodes([...qrCodes, newQR]);
    setFullUrl('');
    setLabel('');
  };

  const deleteQRCode = (id) => {
    setQrCodes(qrCodes.filter(qr => qr.id !== id));
  };

  const downloadQRCode = async (qr) => {
    try {
      const response = await fetch(qr.qrImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-${qr.label.replace(/\s+/g, '-').toLowerCase()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download QR code');
    }
  };

  const downloadAllAsHTML = () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>QR Codes Collection</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .qr-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
    .qr-card { border: 2px solid #333; padding: 20px; text-align: center; break-inside: avoid; }
    .qr-card img { max-width: 100%; height: auto; }
    .qr-info { margin-top: 10px; font-size: 14px; }
    @media print { .qr-card { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <h1>QR Codes Collection</h1>
  <div class="qr-grid">
    ${qrCodes.map(qr => `
      <div class="qr-card">
        <img src="${qr.qrImage}" alt="QR Code for ${qr.label}">
        <div class="qr-info">
          <strong>Label:</strong> ${qr.label}<br>
          <strong>URL:</strong> ${qr.url}
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-codes-collection.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <QrCode className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">QR Code Generator</h1>
          </div>
          
          <p className="text-gray-600 mb-6">
            Generate QR codes for any URL. Perfect for sharing links, marketing materials, or personal projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter URL (e.g., google.com) *"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addQRCode()}
              className="md:col-span-2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Label (optional)"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addQRCode()}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            onClick={addQRCode}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-semibold mb-4"
          >
            <Plus className="w-5 h-5" />
            Generate QR Code
          </button>

          {qrCodes.length > 0 && (
            <button
              onClick={downloadAllAsHTML}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 font-semibold"
            >
              <Download className="w-5 h-5" />
              Download All as HTML (Print Ready)
            </button>
          )}
        </div>

        {qrCodes.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <QrCode className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No QR codes generated yet. Create your first one above!</p>
            <p className="text-gray-400 text-sm mt-2">Enter any URL like: google.com, youtube.com/watch?v=xyz, mywebsite.com/page</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qrCodes.map((qr) => (
              <div key={qr.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <img 
                    src={qr.qrImage} 
                    alt={`QR Code for ${qr.driverId}`}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Label:</span>
                    <span className="text-gray-900">{qr.label}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-sm text-gray-600 break-all">{qr.url}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => downloadQRCode(qr)}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={() => deleteQRCode(qr.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">💡 How to Use:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Enter any URL you want the QR code to point to (e.g., google.com, mywebsite.com/page)</li>
            <li>Add an optional label for easy identification</li>
            <li>Click "Generate QR Code" to create your QR</li>
            <li>Preview the generated QR code instantly</li>
            <li>Download individual QR codes as PNG images</li>
            <li>Or download all QR codes together as a print-ready HTML file</li>
          </ol>
          <p className="mt-4 text-blue-700 text-sm">
            <strong>Tip:</strong> You don't need to type "https://" - it will be added automatically!
          </p>
        </div>
      </div>
    </div>
  );
}