// import React, { useEffect } from 'react';

// const DemoDisablePrintScreen = () => {
//   useEffect(() => {
//     const handleKeyUp = (e) => {
//       if (e.key === 'PrintScreen') {
//         navigator.clipboard.writeText('');
//         alert('Screenshots disabled!');
//       }
//     };

//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     <div id="main">
//       <h2>Codebrary</h2>
//       <p>
//         Click anywhere on the green background and Press key <b>PrtScr</b> or <b>Alt+PrntScr</b> and try to paste the
//         content in your favorite Picture Editor.
//       </p>
//       <a href="https://www.codebrary.com" target="_blank" rel="noopener noreferrer">
//         www.codebrary.com

//       </a>
//     </div>
//   );
// };

// export default DemoDisablePrintScreen;


import React, { useEffect } from 'react';

const ScreenshotDetection = () => {
  useEffect(() => {
    // Clipboard API detection
    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text.startsWith('data:image/')) {
          alert('Screenshot might have been taken!');
        }
      } catch (error) {
        console.error('Clipboard API error:', error);
      }
    };

    // Canvas manipulation detection
    const canvas = document.getElementById('myCanvas');
    const initialDataURL = canvas.toDataURL();

    const checkCanvasChange = () => {
      const currentDataURL = canvas.toDataURL();
      if (initialDataURL !== currentDataURL) {
        alert('Screenshot might have been taken!');
      }
    };

    // Interval for canvas check
    const canvasInterval = setInterval(checkCanvasChange, 500);

    // Cleanup on component unmount
    return () => {
      clearInterval(canvasInterval);
    };

    // Check clipboard on component mount
    checkClipboard();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <h1>Your React App Content Goes Here</h1>
      <canvas id="myCanvas" width="400" height="200"></canvas>
    </div>
  );
};

export default ScreenshotDetection;

