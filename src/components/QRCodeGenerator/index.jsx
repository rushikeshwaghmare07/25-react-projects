import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">QR Code Generator</h1>
      <div className="flex items-center mb-4">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mr-4"
        />
        <button
          disabled={input.trim() === ""}
          onClick={handleGenerateQrCode}
          className={`px-6 py-2 rounded-lg text-white font-semibold ${
            input.trim() === ""
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Generate
        </button>
      </div>
      {qrCode && (
        <div className="mt-8">
          <QRCode id="qr-code-value" value={qrCode} size={256} bgColor="#ffffff" />
        </div>
      )}
    </div>
  );
}
