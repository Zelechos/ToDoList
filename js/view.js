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
        const task = this.model.addTask(title, description);
        this.createRow(task);
    }

    removeTask(id){
        this.model.removeTask(id);
        document.getElementById(id).remove();
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    createRow(task){

        const row = this.table.insertRow();
        row.setAttribute('id', task.id);
        row.innerHTML = `
        <td id="title-task">
            ${task.title}
        </td>
        <td id="description-task">
            ${task.description}
        </td>
        <td class="text-center">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1" id="btn-edit">
                <i class="fa fa-pencil"></i>
            </button>
        </td>
        `;

        // Creamos un boton checkbox de la vista
        const $checkboxBtn = document.createElement("input");
        $checkboxBtn.setAttribute('type', 'checkbox');
        $checkboxBtn.checked = task.completed;
        $checkboxBtn.onclick = ()=>this.toggleCompleted(task.id);
        row.children[2].appendChild($checkboxBtn);

        // Creamos el boton para eliminar y lo agregamos al HTML
        const $removeBtn = document.createElement("button");
        $removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        $removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        $removeBtn.onclick = ()=>this.removeTask(task.id);
        row.children[3].appendChild($removeBtn);

    }
}