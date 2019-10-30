import React, {Component} from 'react';
import { connect } from 'react-redux'
import { callAPI } from './actions'
class Fetch extends Component {

    componentDidMount = () => {
        this.props.callApi()
        console.log(this.props)
    }
//     callApi = () => {
//         fetch(`https://www.reddit.com/r/dogs.json`)
// .then(response => {
//         return response.json();
// })
// .then(json => {
//    console.log(json)
// })
// .catch((error) => {
//     // AHHHH! An Error!
// });
//     }

renderList = (items) => {
for(var i=0;i<items.length; i++){
  console.log(items[i].kind)
}
}
    render () {
      console.log(this.props.json, 'hdhdhhd')
      this.renderList(this.props.json)
        return (
          
            <div style={{color: "red", textAlign : 'center', paddingTop: 50}} > I am Fetch
            {this.props.json.map( (item, index) => (
              <div>
             <div>title : {item.data.url}</div> 
             <img  src={item.data.url}
   style = {{ width: 200, height: 200 }}></img>
    
   </div>
        ))}
           </div>)
    }
}


const mapStateToProps = (state) => ({
    json: state.json
  })

  const mapDispatchToProps = {
    callApi: callAPI
  }
  export default connect(mapStateToProps,
    mapDispatchToProps)(Fetch);

