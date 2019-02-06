import React from 'react';
import './bucket.css';
import Card from '../components/card';

class Bucket extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      title: 'In Progress',
      editMode: false
    }
  }

  toggleEditMode = (e) => {
    this.setState({editMode: !this.state.editMode });

    // if (this.state.editMode === false) {
    //   this.setState({ editMode: true });
    // }
    // else {
    //   this.setState({ editMode: false });
    // }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  render() {
    const editMode = this.state.editMode 
    ? <><input type='text' value={this.state.title} onChange={this.handleTitleChange} /> <button onClick={this.toggleEditMode}>ok</button></>
    : <h6 onDoubleClick={this.toggleEditMode}>{this.state.title}</h6>;

    return (
      <div className='bucket'>
        {editMode}
        {
          this.props.cards.map((e, i) => {
            return <Card title={e.title} tags={e.tags} key={i} />;
          })
        }
      </div>
    );
  }

}

export default Bucket;