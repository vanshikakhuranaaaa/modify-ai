import React from "react";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "2000px",   // 👈 THIS FIXES SCROLL
          border: "none"
        }}
        title="MODIFY.AI"
      />
    </div>
  );
}

export default App;
