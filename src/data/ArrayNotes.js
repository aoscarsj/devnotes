export default class ArrayNotes{
   constructor(){
      this.notes = [];
      this._enrollers = [];
   }

   enrol(func){
      this._enrollers.push(func);
   }

   notify(){
      this._enrollers.forEach(func => func(this.notes));
   }

   add(title, text, category){
      const newNote = new Note(title, text, category);
      this.notes.push(newNote);
   }
   delete(index){
      this.notes.splice(index, 1);
   }
}

class Note{
   constructor(title, text, category){
      this.title = title;
      this.text = text;
      this.category = category;
   }
}