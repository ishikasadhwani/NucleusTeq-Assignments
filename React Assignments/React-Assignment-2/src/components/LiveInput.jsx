import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Live Input Display</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default LiveInput;
