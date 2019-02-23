import React from 'react';
import ___ from "./ui.scss";

const points = [
  [1,3],
  [1,6],

  [3,8],

  [7,4],
  [7,1],

  [3,5],
];
points.forEach((p, i) => {
  points[i] = [p[0] * 2, p[1] * 2];
});

export default function Checkbox({checked, label, onChange}) {
  return (
    <div className="W95__Checkbox" onClick={onChange}>
      <div className="W95__Checkbox__Box">
        <div className="W95__ControlBG">
          {checked && (
            <svg
                width="18" height="18" viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
              <polygon points={points.map((pts) => pts.join(',')).join(' ')} fill="black" stroke="none" />
            </svg>
          )}
        </div>
        <input type="checkbox" checked={checked} onChange={onChange} />
      </div>
      <label>{label}</label>
    </div>
  );
}