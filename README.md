# React JS Toggle Switch

`reactjs-switch` is  a basic toggle switch component implemented using react js and typscript.

## Installation

you can install this package using below npm command

``` 
npm install reactjs-toggleswitch

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
      <h2>Toggle Switch Example</h2>
      <ToggleSwitch checked={isChecked} onChange={handleChange} />
    </div>
  );
};


```
### Props

The `ToggleSwitch` component accepts the following props:

* `checked`: (boolean) Specifies whether the switch is checked or not.
* `onChange`: (function) Callback function called when the switch state changes. Receives a boolean parameter indicating the new state.