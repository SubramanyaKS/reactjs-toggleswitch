// ToggleSwitch.tsx
import React from 'react';
import './ToggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onColor?:string;
  offColor?:string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange,onColor="#2196f3",offColor="#cccccc" }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span style={{ backgroundColor: checked ? onColor : offColor }} className='slider'></span>
    </label>
  );
};

export default ToggleSwitch;
