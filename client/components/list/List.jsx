import React from 'react';
// import Details from '../details/Details.jsx'

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = { list: props.list }
  }

  removeTask(i){
      this.props.removeTask(i);
  }

  addDetails(i){
      console.log('dodaję szczegóły');
  }

  componentWillReceiveProps(newState){
    this.setState({ list: newState.list });
  }


  render(){
    return(
      <div>
        <p className={"lead"}>Tasks:</p>
        {this.state.list.map((item, i) => 
          <div className={"well"} key={i}>{i + 1}. Title: {item.title} 
            <button className={"btn btn-sm btn-danger pull-right"} onClick={() => this.removeTask(i)}>Remove</button>
          </div>
          )}
      </div>
    )
  }
}

export default List;