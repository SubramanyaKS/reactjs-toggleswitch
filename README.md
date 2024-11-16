# React JS Toggle Switch

<!-- 
![NPM Version](https://img.shields.io/npm/v/reactjs-toggleswitch) -->

`reactjs-toggleswitch` is a customizable toggle switch component implemented using react js and TypeScript for React applications. It provides a simple and intuitive way to implement toggle functionality with customizable styles and behavior.

![image](https://github.com/user-attachments/assets/4c2f0913-fcc4-4e14-b8ad-2e1a2dd76240)
![image](https://github.com/user-attachments/assets/6b16f1b8-21b2-4fd0-b71c-85b24079251b)


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
For more details regarding usage please refer [EXAMPLES.md](https://github.com/SubramanyaKS/reactjs-toggleswitch/blob/main/EXAMPLES.md)


**Note**: If styles are not working in your system after installation please import the below style.

```js
import 'reactjs-toggleswitch/dist/cjs/index.css';

```

### Options

The `ToggleSwitch` component accepts the following props:

| Option | type | Description |
| :---: | :---: | :---: |
| `onToggle` | `function` | Callback function called when the switch state changes/toggle. Receives a boolean parameter indicating the new state. |
| `checked` | `boolean` | Specifies whether the switch is checked or not. |
| `onColor` | `string` | specifies background color change when switch is checked |
| `offColor` | `string` | specifies background color change when switch is unchecked |
| `disable` | `boolean` | specifies for disabling/enabling the toggle. |
| `ariaLabel` | `string`| used to provide a label or description for an element. |
|`children` |`component` | specifies thumb icon use any component like font-awesome |
| `id` | `string`| The value represents the id attribute of the encapsulated `input` element. |
| `name` | `string`| The value represents the name attribute of the encapsulated `input` element.|
| `value` | `string`| The value represents the value attribute of the encapsulated `input` element.|
|`width`|`string`|The value represents width of toggle switch|
|`thumbOnColor`|`string`|specifies background color of thumb change when switch is checked|
|`thumbOffColor`|`string`|specifies background color of thumb change when switch is unchecked|


The Live usage of Reactjs-toggleswitch can be seen [here](https://subramanyaks.github.io/Weather-app/)

## Contribution

We welcome contributions! If you'd like to contribute to reactjs-toggleswitch, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/reactjs-toggleswitch/blob/main/CONTRIBUTING.md).

## Author
[Subramanya KS](https://github.com/SubramanyaKS)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
