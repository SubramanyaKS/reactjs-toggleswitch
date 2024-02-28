# React JS Toggle Switch

<!-- 
![NPM Version](https://img.shields.io/npm/v/reactjs-toggleswitch) -->

`reactjs-switch` is  a simple toggle switch component implemented using react js and TypeScript.It is a customizable toggle switch component for React applications. It provides a simple and intuitive way to implement toggle functionality with customizable styles and behavior.

## Installation

you can install this package using below npm command

```shell
npm install reactjs-toggleswitch
```
or

```shell
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
you can change onColor,offColor,handleOnColor and handleOffColor as of your choice

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
      <ToggleSwitch checked={isChecked} onColor={"#0f0"} offColor={"#0ff"} handleOnColor={"orange"} handleOffColor={"red"} onToggle={handleChange} />
    </div>
  );
};


```
**Note**: Except v1.0.8 all other version need to import below file in App.jsx/tsx or main.jsx/tsx for styles to work.

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
|`handleOnColor` |`string` | specifies thumb color change when switch is checked |
| `handleOffColor` | `string` |specifies thumb color change when switch is unchecked |

## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details