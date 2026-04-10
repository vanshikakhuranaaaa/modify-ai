import React from 'react';
import './App.css';

function App() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<iframe 
        src="/index.html" 
        style="width:100%;height:100vh;border:none;display:block"
        title="MODIFY.AI"
      />`
    }} />
  );
}

export default App;
