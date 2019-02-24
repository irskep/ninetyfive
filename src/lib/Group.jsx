import React from 'react';

export default function Group({title, children, className}) {
  return (
    <div className={`W95__Group ${className || ''}`}>
      <div className="W95__GroupBG" />
      <div className="W95__GroupTitle">
        {title}
      </div>
      <div className="W95__GroupContents">
        {children}
      </div>
    </div>
  );
}