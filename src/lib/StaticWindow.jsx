import React from 'react';

export default function StaticWindow({title, children, windowStyle, titleExtra, margin, style}) {
  style = margin
    ? Object.assign({top: margin, right: margin, bottom: margin, left: margin}, style)
    : style;
  return (
    <div className="W95__Window m-static" style={style}>
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