import React, { useState } from 'react';
import './toggleswitch.css';

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="toggle-switch-slider"></span>
    </label>
  );
};

export default ToggleSwitch;