import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  //arrow funciton automatically binds function and makes sure it has an appropriate value of 'this'

  onFormSubmit = (event) => {
    event.preventDefault();
    //makes sure browser does not automatically submit form

    this.props.onFormSubmit(this.state.term);

    //to communicate from child to parent, we pass a callback from parent to child, and the CHILD calls the callback
    // identical to the event handlers on line 24
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
