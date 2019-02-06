import React, { Component } from 'react';
import Bucket from './containers/bucket';

const inProgress = [
  {
    title: 'Create Facebook marketing page',
    tags: [{type: 'Marketing', color: 'blue'}, {type: 'Errand', color: 'green'}]
  },
  {
    title: 'Develop website',
    tags: [{type: 'Development', color: 'red'}]
  },
  {
    title: 'Hire backend engineer',
    tags: [{type: 'Errand', color: 'green'}, {type: 'Admin', color: 'purple'}]
  }
]

const done = [
  {
    title: 'File for Incorporation',
    tags: [{type: 'Legal', color: 'black'}]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bucket cards={inProgress} />
        <Bucket cards={done} />
        <Bucket cards={inProgress} />
        <Bucket cards={inProgress} />

      </div>
    );
  }
}

export default App;
