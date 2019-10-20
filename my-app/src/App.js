import React from 'react';
import { List } from './connectors'

function styles () {
  return {
    marginTop:'20px'
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container" style={styles()}>
        <List/>
      </div>
    )
  }
}
export default App;
