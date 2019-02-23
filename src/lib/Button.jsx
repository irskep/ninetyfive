import React from 'react';
import ___ from "./ui.scss";

export default function Button(props) {
  return (
    <button className="W95__Button" {...props}>
      <div className="W95__ButtonBG" />
      <span className="W95__Button__Text">{props.children}</span>
    </button>
  );
}