import {Button as JoyButton} from "@mui/joy";

const Button =(clickFn,variant,size,props)=>{
    return <JoyButton onClick={clickFn} variant={variant} size={size} {...props}/>
}

export default Button