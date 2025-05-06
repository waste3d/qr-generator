import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");

  const qrSrc = url ? `http://localhost:8080/qr?url=${encodeURIComponent(url)}` : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Введите ссылку"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-md p-2 border border-gray-300 rounded mb-4"
      />
      {qrSrc && (
        <img
          src={qrSrc}
          alt="QR Code"
          className="w-64 h-64 border border-gray-400 rounded shadow"
        />
      )}
    </div>
  );
}
