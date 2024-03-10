// ToggleSwitch.tsx
import React,{ReactNode} from 'react';
import './toggleSwitch.css';

interface ToggleSwitchProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  onColor?:string;
  offColor?:string;
  disable?:boolean;
  children?:ReactNode;
  ariaLabel?:string;
  id?:string;
  name?:string;
  value?:string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onToggle,onColor="#2196f3",offColor="#cccccc",disable=false,ariaLabel='',children,name,value,id }) => {
  const handleChange = () => {
    onToggle(!checked);
  };

   

  return (
    <label className='toggle-switch'>
      <input type='checkbox' disabled={disable} checked={checked} onChange={handleChange} aria-label={ariaLabel} id={id} name={name} value={value} />
      <span style={{ backgroundColor: checked ? onColor : offColor }} className='slider'>
        <span  className="icon">{children}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
