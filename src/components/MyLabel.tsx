import './MyLabel.css';

export interface MyLabelProps {
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
    /** 
    * 
    * Background color
    */
    backgroundColor?: string;
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
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span className={`${size} ${color} label`} 
    style={{color: fontColor, backgroundColor}}
    >{
        allCaps ? label.toUpperCase() : label
    }</span>
  )
}
