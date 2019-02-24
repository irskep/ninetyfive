import React from 'react';

export default function Button(props) {
  const children = props.children;
  const propsNoChildren = Object.assign({}, props);
  delete propsNoChildren['children'];
  return (
    <button className="W95__Button" {...props}>
      <div className="W95__ButtonBG" />
      <div className="W95__ButtonFocusBG" />
      <span className="W95__Button__Text">{children}</span>
    </button>
  );
}