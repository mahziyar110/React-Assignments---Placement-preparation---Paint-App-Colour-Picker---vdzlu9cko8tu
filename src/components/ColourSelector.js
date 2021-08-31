import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, className } = config;
  return (
    <button
      className={className}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
