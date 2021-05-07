import React , {Component} from 'react'
import CreateBox from './CreateBox'
import Box from './Box'

class AllBoxes extends Component {
    state = {
        boxes: []
    }

    addBoxes = (newBox)=>{
        this.setState({
            boxes: [...this.state.boxes , newBox ]
        })
    }

    deleteBox = (id)=>{
        const newBoxesArr = this.state.boxes.filter(box => box.id !== id )
        this.setState({ boxes: newBoxesArr})
    }

    render(){
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id}
                id={box.id}
                width={`${box.width}px`}
                height={`${box.height}px`}
                color={box.backgroundColor}
                deleteBox={this.deleteBox}
            />
        ))
        return(
            <div className="AllBoxes">
                <CreateBox addBox={this.addBoxes} />
              
                {boxes}
             

            </div>
        )
    }
}

export default AllBoxes