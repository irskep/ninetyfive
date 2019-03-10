import React from 'react';

export default function Tab({children, className}) {
  return (
    <div className="{`W95__Tab ${className || ''}`}">
      {children}
    </div>
  );
}
