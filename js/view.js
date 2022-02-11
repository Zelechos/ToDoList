// Importamos la clase AddTodo
import AddTodo from "./components/add-todo.js";

export default class View{

    // Constructor de la Clase View
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodo = new AddTodo();

        this.addTodo.onClick((title, description)=>this.addTask(title, description));
    }

    setModel(model){
        this.model = model;
    }

    addTask(title, description){
        this.model.addTask(title, description);
    }
}