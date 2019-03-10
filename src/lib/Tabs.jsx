import React, { useState } from 'react';

export default function Tabs({children, selected, className}) {
  const tabs = React.Children.toArray(children);
  const labels = tabs.map(childTab => childTab.props.label);
  const initialState = selected ? labels.indexOf(selected) || 0 : 0;
  const [selectedIndex, setSelectedIndex] = useState(initialState);

  return (
    <div className={`W95__Tabs ${className || ''}`}>
      <ul className="W95__Tabs__Labels">
        {labels.map((label, index) => {
          const selectedClassName = index == selectedIndex ? 'm-selected' : '';
          return (
            <li key={label} className="W95__Tabs__Label">
              <button className={`W95__Tabs__Button ${selectedClassName}`} onClick={() => setSelectedIndex(index)}>
                {label}
              </button>
            </li>
          )
        })}
      </ul>
      <div className="W95__Tabs__Content">
        {tabs[selectedIndex]}
      </div>
    </div>
  );
}
