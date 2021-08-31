import React, { useState } from "react";

function Selection({ applyColor }) {
  const [style, setStyle] = useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => {
        applyColor(setStyle);
      }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;
