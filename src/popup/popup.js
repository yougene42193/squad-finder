import React from 'react';  
import { Link } from 'react-router-dom'
import './popup.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<h1>{this.props.text}</h1>  
<button onClick={this.props.closePopup}><Link to='/list'>OK</Link></button>  
</div>  
</div>  
);  
}  
}  

export default Popup;