import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Checkbox,
  Desktop,
  Group,
  List,
  MovableWindow,
  ScrollingText,
  StaticWindow,
  TextInput,
  TinyButton,
} from '../lib';

const curryOne = (fn, arg) => () => fn(arg);
const oneArg = (fn) => (arg) => fn(arg);

function Section({children}) {
  return <div style={{marginBottom: '1rem'}}>{children}</div>;
}

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const items = ['List item 1', 'List item 2', 'List item 3'];
  const [selectedItemIndex, onSelect] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [textValue, onChangeText] = useState('');

  const onTextInputChanged = (e) => onChangeText(e.target.value);

  return (
    <Desktop>
      <StaticWindow
          margin={16}
          style={{maxWidth: '40rem'}}
          title="Ninetyfive UI component demos"
          titleExtra={(
            <TinyButton key="button" onClick={curryOne(setIsAboutOpen, true)}>?</TinyButton>
          )}>

        <Section>
          <Button onClick={() => alert("Button clicked")}>A button</Button>
        </Section>

        <Section>
          <Checkbox
            label={"A checkbox"}
            onChange={curryOne(setCheckboxValue, !checkboxValue)}
            checked={checkboxValue} />
        </Section>

        <Section>
          A text field: <TextInput value={textValue} onChange={onTextInputChanged} />
        </Section>

        <Section>
          <ScrollingText style={{height: 84}}>
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
            Scrollable text box<br />
          </ScrollingText>
        </Section>

        <Section>
          <List
            items={items}
            selectedItemIndex={selectedItemIndex}
            onSelect={oneArg(onSelect)} />
        </Section>

        <Group title="What is this?">
          <p>Ninetyfive is a collection of React.js components that make a web page look like a Windows 95 program.</p>
          <p>Press the "?" button for a demo of movable windows.</p>
          <p><a href="https://github.com/irskep/ninetyfive">Docs may be found here.</a></p>
        </Group>
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
          onClose={curryOne(setIsAboutOpen, false)}>
        <ScrollingText className="m-fill-container">You can drag this window around!</ScrollingText>
      </MovableWindow>
    </Desktop>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
