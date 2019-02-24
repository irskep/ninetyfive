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

  const items = ['item 1', 'item 2', 'item 3'];
  const [selectedItemIndex, onSelect] = useState(null);
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [textValue, onChangeText] = useState('');

  const onTextInputChanged = (e) => onChangeText(e.target.value);

  return (
    <div>
      <StaticWindow
          title="NinetyFive UI Library"
          titleExtra={(
            <TinyButton key="button" style={{float: 'right'}} onClick={setIsAboutOpen.bind(this, true)}>
              ?
            </TinyButton>
          )}>
        <div className="W95__HorzFlex" key="top">
          <Group title="Star System Info">
          <p>ABCD</p>
          </Group>
          <Group title="Seed">
          ABCD
          </Group>
        </div>

        <p>
          <Button>Hello</Button>
        </p>

        <p>
          <Checkbox
            label={"A checkbox"}
            onChange={setCheckboxValue.bind(this, !checkboxValue)}
            checked={checkboxValue} />
        </p>

        <p>
          <TextInput value={textValue} onChange={onTextInputChanged} />
        </p>

        <p>
          <ScrollingText>
            Hello
          </ScrollingText>
        </p>

        <List
          items={items}
          selectedItemIndex={selectedItemIndex}
          onSelect={onSelect} />
      </StaticWindow>

      <MovableWindow
          isOpen={isAboutOpen}
          title="About Keplverse Telescope Software"
          windowStyle={{
            width: 485,
            height: 485,
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          canClose={true}
          onClose={setIsAboutOpen.bind(this, false)}>
        YO YO YO
      </MovableWindow>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
