import React , {Component} from 'react'
import './Box.css'
class Box extends Component {

    handleClick = (e)=> {
        this.props.deleteBox(this.props.id)
    }
    render(){
        return(
            <div className="Box">
               <div className="Box-div" style={{height: this.props.height , width: this.props.width , backgroundColor: this.props.color}}></div>
               <button className="Box-delete-btn" onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Box