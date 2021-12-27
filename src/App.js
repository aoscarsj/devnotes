import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';
import CategoriesList from './components/CategoriesList';
import "./assets/app.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      categories: ['Games', 'Music'],
    }
  }

  createNote(title, text, category) {
    const newNote = { title, text, category };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState);
  }

  addCategory(nameCategory) {
    const newArrayCategories = [...this.state.categories, nameCategory];
    const newState = { ...this.state, categories: newArrayCategories }
    this.setState(newState)
  }

  deleteNote(index) {
    let newArray = this.state.notes;
    newArray.splice(index, 1);
    this.setState({ notes: newArray });
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm categories={this.state.categories} createNote={this.createNote.bind(this)} />
        <main className="main-content">
          <CategoriesList categories={this.state.categories} addCategory={this.addCategory.bind(this)} />
          <NoteList notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
        </main>
      </section >
    );
  }
}
export default App;
