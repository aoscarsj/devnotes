import React, { Component } from 'react';
import './style.css';
class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
    this._newCategories = this._newCategories.bind(this);
  }
  componentDidMount() {
    this.props.categories.enroll(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleInputEvent(event) {
    if (event.key === 'Enter') {
      let category = event.target.value;
      this.props.addCategory(category);
      event.target.value = '';
    }
  }

  render() {
    return (
      <section className='categories-list'>
        <ul className='categories-list_list'>
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className='categories-list_item'>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type='text'
          placeholder='Add category'
          onKeyUp={this._handleInputEvent.bind(this)}
          className='categories-list_input'
        />
      </section>
    );
  }
}

export default CategoriesList;
