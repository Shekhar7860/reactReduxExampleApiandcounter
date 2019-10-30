import React, {Component} from 'react'
import { connect } from 'react-redux';

 class Counter extends Component {

    constructor (props) {
        super (props)
        this.state = {
            count : 0
        }
        console.log('i am working, yes', this.props)
    }

    increaseState = () => {
  this.setState({count : this.state.count +1})
    }

    decreaseState = () => {
        this.setState({count : this.state.count  - 1})
    }
    componentDidMount() {
        console.log(this.props, 'props')
    }
    render () {
        return (
            <div style={{textAlign:'center', justifyContent : 'center', marginTop:60}}>I am counter
            <br/>
            <button style={{marginTop:20}} onClick = {this.props.increment}>Increase</button>
            <br/>
            <div style={{marginTop:20}}></div>
            {this.props.count}
            <br/>
            <button style={{marginTop:20}} onClick = {this.props.decrement}>Decrease</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch({type: "Increment"}),
   decrement: () => dispatch({type: "Decrement"}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);