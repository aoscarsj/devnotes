import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';
import CategoriesList from './components/CategoriesList';
import "./assets/app.css";
import './assets/index.css';
import ArrayNotes from './data/ArrayNotes'
import Categories from './data/Categories'
class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new ArrayNotes();
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm categories={this.categories.categories} createNote={this.notes.add} />
        <main className="main-content">
          <CategoriesList categories={this.categories.categories} addCategory={this.categories.add} />
          <NoteList notes={this.notes.notes} deleteNote={this.notes.delete} />
        </main>
      </section >
    );
  }
}
export default App;
