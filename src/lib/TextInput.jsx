import React from 'react';
import ___ from "./ui.scss";

export default function TextInput({value, onChange}) {
  return (
    <div className="W95__TextInput" onClick={onChange}>
      <div className="W95__ControlBG" />
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}