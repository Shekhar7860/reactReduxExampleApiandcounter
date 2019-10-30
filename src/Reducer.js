
import { REQUEST_POSTS, RECEIVE_POSTS } from './actions';
const initalState = {
    list : [
        {'name' : 'ankit'  },
        {'name' : 'rohan'  },
        {'name' : 'akhil'  },
        {'name' : 'reshma'  },
        {'name' : 'ronit'  }
    ],
    loading : "",
    json : [],
    count : 0
};

function usersReducer(state = initalState, action) {
  console.log(action.type, 'skkskks')
    switch (action.type) {
      case "Increment":
        console.log("increment")
        return { ...state, count : state.count + 1 };
      case "Decrement":
          console.log("decrement")
        return { ...state, json: action.json, loading: false,  count : state.count  - 1 };
        case REQUEST_POSTS:
          console.log("m working posts")
          return { ...state, loading: true };
        case RECEIVE_POSTS:
            console.log("m working posts recevied", action)
          return { ...state, json: action.json, loading: false };
        default:
            console.log("m working default")
          return state;
      
    }
  }
  
  export default usersReducer;
