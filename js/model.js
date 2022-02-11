export default class Model{

    // Constructor de la clase Model
    constructor(){
        this.view = null;
        this.tasks = [];
        this.currentId = 1;
    }

    setView(view){
        this.view = view;
    }

    getTask(){
        return this.task;
    }

    addTask(title, description){
        // console.log(title , "=>", description);
        const task = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }

        this.tasks.push(task);
        console.log(this.tasks);

        // Aqui retonamos un clone del nuestro objeto task esto es spread sintax
        return {...task};
    }
}