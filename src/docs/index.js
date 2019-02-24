import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Checkbox,
  Group,
  List,
  MovableWindow,
  ScrollingText,
  StaticWindow,
  TextInput,
  TinyButton,
} from '../lib';

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const items = ['List item 1', 'List item 2', 'List item 3'];
  const [selectedItemIndex, onSelect] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [textValue, onChangeText] = useState('');

  const onTextInputChanged = (e) => onChangeText(e.target.value);

  return (
    <div className="W95__Desktop">
      <StaticWindow
          margin={16}
          style={{maxWidth: '40rem'}}
          title="NinetyFive UI Library"
          titleExtra={(
            <TinyButton key="button" style={{float: 'right'}} onClick={setIsAboutOpen.bind(this, true)}>
              ?
            </TinyButton>
          )}>
        <div className="W95__HorzFlex" key="top">
          <Group title="What is this?">
            <p>
              Ninetyfive is a collection of React.js components that make a web page look like a Windows 95 program.
            </p>

            <p>
              Press the "?" button for a demo of movable windows.
            </p>
          </Group>
        </div>

        <p>
          <Button onClick={() => alert("Button clicked")}>A button</Button>
        </p>

        <p>
          <Checkbox
            label={"A checkbox"}
            onChange={setCheckboxValue.bind(this, !checkboxValue)}
            checked={checkboxValue} />
        </p>

        <p>
          A text field: <TextInput value={textValue} onChange={onTextInputChanged} />
        </p>

        <p>
          <ScrollingText style={{height: 84}}>
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
          </ScrollingText>
        </p>

        <List
          items={items}
          selectedItemIndex={selectedItemIndex}
          onSelect={onSelect} />
      </StaticWindow>

      <MovableWindow
          isOpen={isAboutOpen}
          title="About Ninetyfive"
          windowStyle={{
            width: 485,
            height: 485,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          canClose={true}
          onClose={setIsAboutOpen.bind(this, false)}>
        <ScrollingText className="m-fill-container">You can drag this window around!</ScrollingText>
      </MovableWindow>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
