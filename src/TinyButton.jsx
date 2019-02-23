import React from 'react';
import ___ from "./ui.scss";

export default function TinyButton({style, className, children, onClick}) {
  return (
    <div style={style} className={`W95__TinyButton ${className || ''}`} onClick={onClick}>
      <div className="W95__ButtonBG" />
      {children}
    </div>
  );
}