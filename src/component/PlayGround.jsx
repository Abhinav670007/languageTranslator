import axios from 'axios';
import React, {  useState } from 'react'
import "../component/style.css"

function PlayGround() {

  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('es');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!textToTranslate) return;

    setLoading(true);
    setError('');
    setTranslatedText('');

    const options = {
      method: 'POST',
      url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
      params: {
        from: fromLanguage,
        to: toLanguage,
        query: textToTranslate,
      },
      headers: {
        'x-rapidapi-key': 'fe79b0d2cemsh0f6942f40b36e20p1bb2cdjsn512ae73a3696', 
        'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        translate: 'rapidapi',
      },
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.translation);
    } catch (err) {
      setError('Failed to translate. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
   
   <div className='main pb-16 pt-10'>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-r from-slate-600 to-slate-400 shadow-xl border-2 border-black rounded-lg">
      <h1 className="head text-4xl font-bold text-center text-white mb-8 tracking-wide">
        Language Translator
      </h1>
    
      <div className="mb-6">
        <label htmlFor="fromLanguage" className="block text-sm font-medium text-white font-sans">From Language</label>
        <select
          id="fromLanguage"
          value={fromLanguage}
          onChange={(e) => setFromLanguage(e.target.value)}
          className="mt-2 w-full px-4 py-3 border-2 border-white rounded-md  bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </select>
      </div>
    
      <div className="mb-6">
        <label htmlFor="toLanguage" className="block text-sm font-medium text-white">To Language</label>
        <select
          id="toLanguage"
          value={toLanguage}
          onChange={(e) => setToLanguage(e.target.value)}
          className="mt-2 w-full px-4 py-3 border-2 border-white rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </select>
      </div>
    
      <div className="mb-6">
        <label htmlFor="textToTranslate" className="block text-sm font-medium text-white">Text to Translate</label>
        <textarea
          id="textToTranslate"
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
          placeholder="Enter text here"
          rows="6"
          className="mt-2 w-full px-4 py-3 border-2 border-white rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    
      <button
        onClick={handleTranslate}
        className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300"
      >
        Translate
      </button>
    
      {loading && <p className="mt-6 text-center text-white">Translating...</p>}
      {error && <p className="mt-6 text-center text-red-500">{error}</p>}
    
      {translatedText && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Translated Text:</h3>
          <p className="text-xl text-gray-800 text-center">{translatedText}</p>
        </div>
      )}
    </div>
   </div>
);
}
export default PlayGround










 