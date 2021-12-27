export default class Categories{
   constructor(){
      this.categories = [];
      this._enrollers = [];
   }

   enroll(func){
      this._enrollers.push(func);
   }
   unsubscribe(func){
      console.log(this._enrollers);
      this._enrollers = this._enrollers.filter(f => f !== func);
      console.log(this._enrollers);
   }
   notify(){
      this._enrollers.forEach(func => func(this.categories)); // recebe e executa a funcao
   }

   add(name){
      console.log('categories:', this.categories);
      this.categories.push(name);
      this.notify();
   }
}