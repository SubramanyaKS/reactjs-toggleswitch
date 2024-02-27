// ToggleSwitch.tsx
import React from 'react';
import './toggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  onColor?:string;
  offColor?:string;
  disable?:boolean;
  ariaLabel?:string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onToggle,onColor="#2196f3",offColor="#cccccc",disable=false,ariaLabel='' }) => {
  const handleChange = () => {
    onToggle(!checked);
  };

  return (
    <label className='toggle-switch'>
      <input type='checkbox' disabled={disable} checked={checked} onChange={handleChange} aria-label={ariaLabel} />
      <span style={{ backgroundColor: checked ? onColor : offColor }} className='slider'></span>
    </label>
  );
};

export default ToggleSwitch;
