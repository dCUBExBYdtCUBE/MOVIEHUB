import React,{useState} from 'react';
import {Component} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import target from './target.png';
import "./App.css";

class Login extends Component{
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
     };
    static defaultProps = {
        locked: false,
        focussed: false,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
     };
    
    constructor(props) {
        super(props);
    this.state = {
        focussed: (props.locked && props.focussed) || false,
        value: props.value || '',
        error: props.error || '',
        label: props.label || '',
        };
    }
    onChange = event => {
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange(value,id);
    }
    render() {
        
        const { focussed, value, error, label } = this.state;
        const { id, type, locked } = this.props;
        const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} 
                                        ${locked && !focussed && 'locked'}`;
    return (
        <div className={fieldClassName}>
            <input id={id}
        type="text"
        value={value}
        placeholder={label}
        onChange={this.onChange}
        onFocus={() => !locked && this.setState({ focussed: true })}
        onBlur={() => !locked && this.setState({ focussed: false })}
      />
      <label htmlFor={id} className={error && 'error'}>
        {error || label}
      </label>
            
        </div>
    );
    
}
    
}
export const BoxComponent =()=> {
    const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    setIsMouseOver(false);
  }

  const [textInput, setTextInput] = useState('');
    const handleTextInputChange=(event)=>{
        setTextInput(event);
        console.log(textInput)
    }
  return (
    <Box component="span" sx={{ p: 2}} onMouseOver={handleMouseOver}
    onMouseOut={handleMouseLeave}>
      <Button 
        >
        <b position="static">Profile</b>

        
        <img src={target} height='32px' width='32px'></img>
        
    </Button>
    <div>{isMouseOver&&<Login id="username" label="Username"   onChange={handleTextInputChange}/>}</div>

    <div>{isMouseOver&&<Login id="o" label="Password"   onChange={handleTextInputChange}/>}</div>
    <div>{isMouseOver&&<Button style={{maxWidth:'100px', minWidth:'100px'}}><b>Login</b></Button>}
        {isMouseOver&&<Button style={{maxWidth:'100px', minWidth:'100px' }}><b>Sign Up</b></Button>}
    </div>

    <div>{isMouseOver&&<Button style={{maxWidth:'200px', minWidth:'200px'}}><b>Continue as a Guest</b></Button>}</div>


    </Box>
  );
}
