## Examples
In this section, we'll demonstrate the usage and customization options for the ToggleSwitch component.

### Basic Usuage

Import the ToggleSwitch component in your React code and use it as follows:

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Default Switch Example</h2>
      <ToggleSwitch checked={isChecked} onToggle={handleChange} />
    </div>
  );
};


```
the above example shows the use of required props. i.e, `onToggle` and `checked`.

### Customization

#### Color

You can customize the colors of the ToggleSwitch using the `onColor` and `offColor` props. By default, the ToggleSwitch uses the white and blue.

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Switch Example</h2>
      <ToggleSwitch checked={isChecked} onColor={"#0f0"} offColor={"#0ff"}  onToggle={handleChange} />
    </div>
  );
};


```
#### Thumb Icon

You can use an icon for the thumb of the ToggleSwitch component. Here's an example using FontAwesome icons:

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Switch Example</h2>
      <ToggleSwitch checked={isChecked} onColor={"#0f0"} offColor={"#0ff"}  onToggle={handleChange} >
      <FontAwesomeIcon icon={checked?faMoon:faSun} />
      </ToggleSwitch>
    </div>
  );
};


```
#### Width
You can specify the width of the ToggleSwitch component using the `width` prop. By default, it adapts to its parent container's width

```js
import { ToggleSwitch } from "reactjs-toggleswitch";
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    console.log("Work");
    setChecked(!checked);
  };

  return (
    <>
    <h2>Toggle Switch Example</h2>
      <ToggleSwitch
        checked={checked}
        onToggle={handleChange}
        offColor="red"
        onColor="green"
        width={"200px"}
      >
        <FontAwesomeIcon icon={checked ? faSun : faMoon} />
      </ToggleSwitch>
    </>
  );
}

export default App;

```
#### Thumb Color 

You can customize the colors of the ToggleSwitch thumb using the `thumbOnColor` and `thumbOffColor` props. By default, the ToggleSwitch uses the white color for both.

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Switch Example</h2>
      <ToggleSwitch checked={isChecked} thumbOffColor='#0f0' thumbOnColor='#f00' onColor={"#0f0"} offColor={"#0ff"}  onToggle={handleChange} >
      <FontAwesomeIcon icon={checked?faMoon:faSun} />
      </ToggleSwitch>
    </div>
  );
};

```
