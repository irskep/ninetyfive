import React from 'react';

export default function Group({title, children, className}) {
  return (
    <div className={`W95__Group ${className || ''}`}>
      <div className="W95__Group__BG" />
      <div className="W95__Group__Title">
        {title}
      </div>
      <div className="W95__Group__Contents">
        {children}
      </div>
    </div>
  );
}