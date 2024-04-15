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
  width?:string;
  thumbOnColor?:string;
  thumbOffColor?:string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onToggle,onColor="#2196f3",offColor="#cccccc",disable=false,ariaLabel='',children,name,value,id,width,thumbOffColor,thumbOnColor }) => {
  const handleChange = () => {
    onToggle(!checked);
  };

  const thumbPosition = checked ? 'calc(100% - 30px)' : '4px';

  return (
    <label className='toggle-switch' style={{width:width}}>
      <input type='checkbox' disabled={disable} checked={checked} onChange={handleChange} aria-label={ariaLabel} id={id} name={name} value={value} />
      <span style={{ backgroundColor: checked ? onColor : offColor }} className='toggle-slider'>
        <span className="thumb" style={{ left: thumbPosition,backgroundColor:checked?thumbOnColor:thumbOffColor }}>{children}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
