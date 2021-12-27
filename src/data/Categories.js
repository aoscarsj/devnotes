export default class Categories{
   constructor(){
      this.categories = [];
      this._enrollers = [];
   }

   enrol(func){
      this._enrollers.push(func);
   }

   notify(){
      this._enrollers.forEach(func => func(this.categories)); // recebe e executa a funcao
   }

   add(name){
      console.log('categories:', this.categories);
      this.categories.push(name);
   }
}