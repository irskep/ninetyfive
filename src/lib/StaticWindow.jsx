import React from 'react';
import ___ from "./ui.scss";

export default function StaticWindow({title, children, windowStyle, titleExtra}) {
  return (
    <div className="W95__Window m-static">
      <div className="W95__WindowBG" key="bg" />
      <div className="W95__WindowTitle" key="title">
        {title}
        {titleExtra}
      </div>
      <div className="W95__WindowContents" key="contents" style={windowStyle || {}}>
        {children}
      </div>
    </div>
  );
}