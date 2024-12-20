import './App.css';

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white/30 backdrop-blur-lg text-gray-800 rounded-lg shadow-2xl p-8 animate-fadeIn border border-white/40">
          <h1 className="text-4xl font-bold mb-4 text-center text-white drop-shadow-lg animate-pulse">
            🚧 Under Maintenance 🚧
          </h1>
          <p className="text-lg text-gray-200 text-center drop-shadow-md animate-slideIn">
            We&apos;re working hard to improve our website. Please check back soon.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
