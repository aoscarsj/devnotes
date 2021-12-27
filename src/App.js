import React, { Component } from 'react';
import NoteList from './components/NoteList';
import RegistrationForm from './components/RegistrationForm';
import CategoriesList from './components/CategoriesList';
import "./assets/app.css";
import './assets/index.css';
import ArrayNotes from './data/Notes'
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
        <RegistrationForm categories={this.categories} createNote={this.notes.add.bind(this.notes)} />
        <main className="main-content">
          <CategoriesList categories={this.categories} addCategory={this.categories.add.bind(this.categories)} />
          <NoteList notes={this.notes} deleteNote={this.notes.delete.bind(this.notes)} />
        </main>
      </section >
    );
  }
}
export default App;
