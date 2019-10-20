import React from 'react';
import { List, HistoryList } from './connectors'

function styles () {
  return {
    marginTop:'20px'
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <tr>
          <td><List/></td>
          <td><HistoryList/></td>
        </tr>
      </div>
    )
  }
}
export default App;
