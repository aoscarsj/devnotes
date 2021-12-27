export default class ArrayNotes{
   constructor(){
      this.notes = [];
      this._enrollers = [];
   }

   enroll(func){
      this._enrollers.push(func);
   }
   unsubscribe(func){
      this._enrollers = this.enrollers.filter(f => f !== func);
   }
   notify(){
      this._enrollers.forEach(func => func(this.notes));
   }

   add(title, text, category){
      const newNote = new Note(title, text, category);
      this.notes.push(newNote);
      this.notify();
   }
   delete(index){
      this.notes.splice(index, 1);
      this.notify();
   }
}

class Note{
   constructor(title, text, category){
      this.title = title;
      this.text = text;
      this.category = category;
   }
}