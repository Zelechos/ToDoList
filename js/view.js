import AddTodo from "./components/add-todo.js";// Importamos la clase AddTodo
import Modal from "./components/modal.js";//Importamos la clase Modal
import Filters from "./components/filters.js";// Importamos la clase Filters 

export default class View{

    // Constructor de la Clase View
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodo = new AddTodo();
        this.modal = new Modal();
        this.filters = new Filters();

        this.addTodo.onClick((title, description)=>this.addTask(title, description));
        this.modal.onClick((id, values) => this.editTask(id, values));
        this.filters.onClick((filters => this.filter(filters)));
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
    // Metodo para Filtrar los valores que se muestran en la vista en base a las busquedas
    filter(filters){
        // Aplicamos destructaracion
        const {type, words} = filters

        // Y tambien lo hacemos usando la destructuracion
        // Traemos las filas de nuestra tabla para manipular cuales se mostraran y cuales no
        const [, ...rows] = document.getElementsByTagName('tr');
        for(const row of rows){
            const [title, description, completed] = row.children;
            let shouldHide = false;

            // Verificamos si hay titulos o descripciones que tenga la palabra
            if(words){
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words)
            }
            // Verificamos si esta o no esta completa las tareas
            const shoulBeCompleted = type === 'completed';
            const isCompleted = completed.children[0].checked;

            if(type !== 'all' && shoulBeCompleted !== isCompleted){
                shouldHide = true;
            }

            // Aqui ocultamos y mostramos la filas en base a nuestros filtros
            (shouldHide)
                ? row.classList.add('d-none')
                : row.classList.remove('d-none');
        }
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

        // Creamos un objeto que le pasamos para que tenga una correcta referecia de lo que debe editar
        $editBtn.onclick = ()=>this.modal.setValues({
            id: task.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            completed : row.children[2].children[0].checked,
        });
        row.children[3].appendChild($editBtn);

        // Creamos el boton para eliminar y lo agregamos al HTML
        const $removeBtn = document.createElement("button");
        $removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        $removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        $removeBtn.onclick = ()=>this.removeTask(task.id);
        row.children[3].appendChild($removeBtn);

    }
}