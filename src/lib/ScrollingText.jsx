import React from 'react';
import ___ from "./ui.scss";

export default function ScrollingText({style, className, children}) {
  return (
    <div style={style} className={`W95__ScrollingText ${className || ''}`}>
      <div className="W95__ControlBG" />
      <div className="W95__ScrollingText__Content">
        {children}
      </div>
    </div>
  );
}