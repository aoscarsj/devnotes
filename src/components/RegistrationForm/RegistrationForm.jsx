import React, { Component } from 'react';
import './style.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.text = '';
    this.category = 'Without category';
  }
  _handleChangeTitle(event) {
    /* O this em JS eh dinamico, nesse contexto funciona, mas no onChange, ao executar, o this la nao se refere a esse obj.
      para resolver eh necessario fazer o .bind e passar o obj do this como param
    */
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleChangeText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _handleChangeCategory(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.category);
    document.getElementById('note-title').value = '';
    document.getElementById('note-body').value = '';
  }
  render() {
    return (
      <form
        className='registration-form'
        onSubmit={this._createNote.bind(this)}
      >
        <select
          onChange={this._handleChangeCategory.bind(this)}
          className='registration-form_input'
        >
          <option>Without category</option>

          {this.props.categories.map((category) => {
            return <option>{category}</option>;
          })}
        </select>
        <input
          type='text'
          placeholder='Title'
          className='registration-form_input'
          onChange={this._handleChangeTitle.bind(this)}
          id='note-title'
        />
        <textarea
          rows={15}
          placeholder='Write your note... '
          className='registration-form_input'
          onChange={this._handleChangeText.bind(this)}
          id='note-body'
        ></textarea>
        <button className='registration-form_input registration-form_submit'>
          Create notes
        </button>
      </form>
    );
  }
}
export default RegistrationForm;
