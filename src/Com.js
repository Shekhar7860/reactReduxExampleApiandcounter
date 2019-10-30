import React, {Component} from 'react'
import { connect } from 'react-redux';
 class Com extends Component {
   
    constructor (props) {
        super (props)
        this.state = {
          
            }
    }
    myItem = () => {
      alert("jsjsj")
    }
    componentDidMount (){
      
    } 
    render () {
      const  test = this.props.list.map(  (item) => {
      return (<li>
        
        <div style={{color: "red", textAlign : 'center'}} > {item.name} </div>
        <button  onClick={this.props.checkItem.bind(this, item.name)}>Heello</button>
          </li>)
      })
  return (<div>
      {test}
     
  </div>)
    }
}

function mapStateToProps(state) {
    return {
      list: state.list
    };
  }

  const mapDispatchToProps = (dispatch) => ({
    checkItem: (name) => dispatch({type : 'hiii', payload : name})
});
export default connect(mapStateToProps, mapDispatchToProps)(Com);