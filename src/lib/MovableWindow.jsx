import React from 'react';
import ___ from "./ui.scss";

function doublePoints(points) {
  points.forEach((p, i) => {
    points[i] = [p[0] * 2, p[1] * 2];
  });
  return points;
}

const points1 = doublePoints([
  [0, 0],
  [2, 0],

  [8, 6],
  [6, 6],
]);

const points2 = doublePoints([
  [8, 0],
  [6, 0],

  [0, 6],
  [2, 6],
]);

export default class MovableWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldOffset: {x: 0, y: 0},
      worldOffsetAtMouseDown: null,
      mouseDownPoint: null,
    };
  }

  onMouseDown(e) {
    this.setState({
      mouseDownPoint: { x: e.screenX, y: e.screenY },
      worldOffsetAtMouseDown: this.state.worldOffset,
    });

    const moveListener = (e) => {
      e.stopPropagation();

      const {x, y} = this.state.worldOffsetAtMouseDown;

      this.setState({
        worldOffset: {
          x: x + (e.screenX - this.state.mouseDownPoint.x),
          y: y + (e.screenY - this.state.mouseDownPoint.y),
        },
      });
    }

    const upListener = (e) => {
      e.stopPropagation();
      this.setState({
        worldOffsetAtMouseDown: null,
        mouseDownPoint: null,
      })
      document.body.removeEventListener('mouseup', upListener, true);
      document.body.removeEventListener('mousemove', moveListener, true);
    }

    document.body.addEventListener('mouseup', upListener, true)
    document.body.addEventListener('mousemove', moveListener, true)
  }

  render() {
    const {
      title,
      children,
      windowStyle,
      canClose,
      isOpen,
      onClose,
    } = this.props;
    if (!isOpen) return null;

    const {worldOffset} = this.state;

    return (
      <div className="W95__MovableWindowContainer">
        <div
            className="W95__MovableWindowContainer__Centerer"
            style={{
              transform: `translate(${worldOffset.x}px, ${worldOffset.y}px)`,
            }}>
          <div className="W95__Window m-movable" style={windowStyle}>
            <div className="W95__WindowBG" />
            <div className="W95__WindowTitle" onMouseDown={this.onMouseDown.bind(this)}>
              {title}
            </div>
            {canClose && <div className="W95__WindowCloseButton" onClick={onClose}>
              <div className="W95__ButtonBG" />
              <svg
                  width="16" height="16" viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                <polygon points={points1.map((pts) => pts.join(',')).join(' ')} fill="black" stroke="none" />
                <polygon points={points2.map((pts) => pts.join(',')).join(' ')} fill="black" stroke="none" />
              </svg>
            </div>}
            <div className="W95__WindowContents">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}