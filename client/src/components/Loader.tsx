import { useEffect } from 'react';
import pikachu from '../assests/pikachu.gif';

const PikachuLoader = () => {
  // Optional: Add resize handler if you need special behavior
  useEffect(() => {
    const handleResize = () => {
      // Add any special resize logic if needed
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 bg-transparent z-50 flex items-center justify-center">
      <div className="text-center">
        <img
          src={pikachu}
          alt="Pikachu loading"
          className="mx-auto" // Centers horizontally
          style={{
            width: '200px', // Fixed size
            height: '209px',
          }}
        />
        <p className="text-gray-700 mt-4 text-xl font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default PikachuLoader;