import React, { useState } from "react";

function VisibilityToggle() {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Toggle Visibility</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Paragraph
      </button>
      {visible && <p>This paragraph can be toggled on/off.</p>}
    </div>
  );
}

export default VisibilityToggle;
