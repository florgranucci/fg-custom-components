import './MyLabel.css';

interface MyLabelProps {
    /**
    * Label text
    */
    label: string;
    /** 
    * Label size
    */
    size?: 'h1' | 'h2' | 'h3' | 'normal';
    /** 
    * Capitalize all letters
    */
    allCaps?: boolean;
    /** 
    * Label color
    */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /** 
    * Label font color
    */
    fontColor?: string;
}

/**
 * 
 * allCaps: boolean
 * color?: 'text-primary'
 * fontColor: string 
 */

export const MyLabel = ({
    label,
    size,
    allCaps = false,
    color = 'text-primary',
    fontColor
}: MyLabelProps) => {
  return (
    <span className={`${size} ${color} label`} 
    style={{color: fontColor}}
    >{
        allCaps ? label.toUpperCase() : label
    }</span>
  )
}
