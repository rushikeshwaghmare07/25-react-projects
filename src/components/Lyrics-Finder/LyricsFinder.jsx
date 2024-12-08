import Axios from "axios";
import { useState } from "react";

function LyricsFinder() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Lyrics Finder 🎵</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Artist name"
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <input
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Song name"
          onChange={(e) => {
            setSong(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => searchLyrics()}
        >
          🔍 Search
        </button>
      </div>

      <hr className="w-full max-w-md my-6 border-t border-gray-300" />

      <pre className="bg-white p-4 rounded-md shadow-md w-full max-w-fit overflow-auto text-gray-700">
        {lyrics || "Lyrics will appear here..."}
      </pre>
    </div>
  );
}

export default LyricsFinder;
