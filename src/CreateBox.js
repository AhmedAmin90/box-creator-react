import React , {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './CreateBox.css'

class CreateBox extends Component {
    state = { height: "" , width: "" , backgroundColor: ""}

    makeBox = (e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createNewBox = (e)=>{
        e.preventDefault();
        if (this.state.height && this.state.width && this.state.backgroundColor) {
            const newBox = {...this.state , id: uuidv4()}
            this.props.addBox(newBox)
            document.querySelector('.CreateBox-warning').classList.add('hide')
        }
        else {
            document.querySelector('.CreateBox-warning').classList.remove('hide')
        }
        
    }

    render(){
        
        return(
         <div>
             <form onSubmit={this.createNewBox}>
                 <label htmlFor="height">Height</label>
                 <input type="text" name="height" value={this.state.height} onChange={this.makeBox}/>
                 <label htmlFor="width">Width</label>
                 <input type="text" name="width" value={this.state.width} onChange={this.makeBox}/>
                 <label htmlFor="backgroundColor">backgroundColor</label>
                 <p className="CreateBox-warning hide">Please determine the height, the width and the background of the box !</p>
                 <input type="color" name="backgroundColor" value={this.state.backgroundColor} onChange={this.makeBox}/>
                 <button className="CreateBox-btn">Create A box !</button>
             </form>
         </div>

        )
    }
}

export default CreateBox