import React,{Component} from 'react';


class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    updateHandler = ()=> {
        
        this.setState({
             color: '#333'   
        })
    }
    render() {
        return(<div className="cell" style={{backgroundColor:this.state.color}} onClick={this.updateHandler} ></div>)
    }
}

export default Cell;