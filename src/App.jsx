import React, { useEffect } from 'react';

const DemoDisablePrintScreen = () => {
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots disabled!');
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div id="main">
      <h2>Codebrary</h2>
      <p>
        Click anywhere on the green background and Press key <b>PrtScr</b> or <b>Alt+PrntScr</b> and try to paste the
        content in your favorite Picture Editor.
      </p>
      <a href="https://www.codebrary.com" target="_blank" rel="noopener noreferrer">
        www.codebrary.com
      </a>
    </div>
  );
};

export default DemoDisablePrintScreen;
