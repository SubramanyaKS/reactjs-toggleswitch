# React JS Toggle Switch

<!-- 
![NPM Version](https://img.shields.io/npm/v/reactjs-toggleswitch) -->

`reactjs-switch` is  a simple toggle switch component implemented using react js and TypeScript.It is a customizable toggle switch component for React applications. It provides a simple and intuitive way to implement toggle functionality with customizable styles and behavior.

## Installation

you can install this package using below npm command

```sh
npm install reactjs-toggleswitch
```
or

```sh
yarn add reactjs-toggleswitch
```

## Usage

Import the ToggleSwitch component in your React code and use it as follows:

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

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
you can change onColor and offColor as of your choice

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

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
you can use icon for thumb as below.(used fontawesome for example. react-icons can also be used)

```js

import React, { useState } from 'react';
import {ToggleSwitch} from 'reactjs-toggleswitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const MyComponent: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Switch Example</h2>
      <ToggleSwitch checked={isChecked} onColor={"#0f0"} offColor={"#0ff"}  onToggle={handleChange} >
      <FontAwesomeIcon icon={checked?faMoon:faSun} />
      </ThoggleSwitch>
    </div>
  );
};


```


**Note**: Except v1.0.8,v1.2.11 all other version need to import below file in App.jsx/tsx or main.jsx/tsx for default styles to work.

```js
import 'reactjs-toggleswitch/dist/cjs/index.css';

```

### Options

The `ToggleSwitch` component accepts the following props:
<!-- 
* `checked`: (boolean) Specifies whether the switch is checked or not.
* `onToggle`: (function) Callback function called when the switch state changes. Receives a boolean parameter indicating the new state.
* `onColor` : (string)  specifies background color change when switch is checked
* `offColor` : (string)  specifies background color change when switch is unchecked
* `disable` : (boolean) specifies for disabling/enabling the toggle. -->

| Option | type | Description |
| :---: | :---: | :---: |
| `onToggle` | `function` | Callback function called when the switch state changes/toggle. Receives a boolean parameter indicating the new state. |
| `checked` | `boolean` | Specifies whether the switch is checke    d or not. |
| `onColor` | `string` | specifies background color change when switch is checked |
| `offColor` | `string` | specifies background color change when switch is unchecked |
| `disable` | `boolean` | specifies for disabling/enabling the toggle. |
| `ariaLabel` | `string`| used to provide a label or description for an element. |
|`children` |`component` | specifies thumb icon use any component like font-awesome |


## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details