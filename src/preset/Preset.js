import React from "react";

export default function Preset(props) {
  return (
    <div>
      <button>-</button>
      {props.value}
      <button>+</button>
    </div>
  );
}
