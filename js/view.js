import AddTodo from "./components/add-todo.js";// Importamos la clase AddTodo
import Modal from "./components/modal.js";//Importamos la clase Modal

export default class View{

    // Constructor de la Clase View
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodo = new AddTodo();
        this.modal = new Modal();

        this.addTodo.onClick((title, description)=>this.addTask(title, description));
        this.modal.onClick((id, values) => this.editTask(id, values));
    }

    setModel(model){
        this.model = model;
    }

    render(){
        const tasks = this.model.getTasks();
        tasks.forEach(task => this.createRow(task));
    }

    addTask(title, description){
        const task = this.model.addTask(title, description);
        this.createRow(task);
    }

    removeTask(id){
        this.model.removeTask(id);
        document.getElementById(id).remove();
    }

    editTask(id, values){
        this.model.editTask(id,values);
        const row = document.getElementById(id);
        row.children[0].textContent = values.title;
        row.children[1].textContent = values.description;
        row.children[2].children[0].checked = values.completed;
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
        </td>
        `;

        // Creamos un boton checkbox de la vista y lo agregamos al HTML
        const $checkboxBtn = document.createElement("input");
        $checkboxBtn.setAttribute('type', 'checkbox');
        $checkboxBtn.checked = task.completed;
        $checkboxBtn.onclick = ()=>this.toggleCompleted(task.id);
        row.children[2].appendChild($checkboxBtn);

        // Creamos el boton para eliminar y lo agregamos al HTML
        const $editBtn = document.createElement("button");
        $editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        $editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        $editBtn.setAttribute('data-toggle', 'modal');
        $editBtn.setAttribute('data-target', '#modal');
        $editBtn.onclick = ()=>this.modal.setValues(task);
        row.children[3].appendChild($editBtn);

        // Creamos el boton para eliminar y lo agregamos al HTML
        const $removeBtn = document.createElement("button");
        $removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        $removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        $removeBtn.onclick = ()=>this.removeTask(task.id);
        row.children[3].appendChild($removeBtn);


    }
}