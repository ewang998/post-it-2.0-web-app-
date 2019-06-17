import React from 'react';
import Enternote from './Enternote';
import Board from './board';
import Detail from './Detail';


// class App extends React.Component {
// state = {
//     data: null
//   };
//
//   componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/express_backend');
//     const body = await response.json();
//
//     if (response.status !== 200) {
//       throw Error(body.message)
//     }
//     return body;
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         // Render the newly fetched data inside of this.state.data
//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

class Title extends React.Component {
  render () {
    return (
      <div class="ui container center aligned">
        <br />
        <h1 class="ui yellow header">Post It</h1>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <Title/>
      <br/>
      <Enternote/>
      <br/>
      <Board/>
    </div>
  );
}



export default App;
