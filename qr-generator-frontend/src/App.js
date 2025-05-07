import { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");


const [generatedQrSrc, setGeneratedQrSrc] = useState(null);

const handleGenerateQr = () => {
    setGeneratedQrSrc(url ? `http://localhost:8080/qr?url=${encodeURIComponent(url)}` : null);
};

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-purple-900 to-black p-4 text-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4 text-white">QR Code Generator</h1>
            <input
                type="text"
                placeholder="Введите ссылку"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
                onClick={handleGenerateQr}
                className="px-4 py-2 bg-blue-500 text-white rounded mb-4 hover:bg-blue-600"
            >
                Сгенерировать QR
            </button>
            {generatedQrSrc && (
                <div className="flex justify-center">
                    <img
                        src={generatedQrSrc}
                        alt="QR Code"
                        className="w-64 h-64 border border-gray-400 rounded shadow"
                    />
                </div>
            )}
        </div>
    </div>
);
}
