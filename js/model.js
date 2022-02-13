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

    findIdtask(id){
        return this.tasks.findIndex(task => task.id === id);
    }

    toggleCompleted(id){
        const index = this.findIdtask(id);
        const task = this.tasks[index];
        task.completed = !task.completed;
        console.log(task);
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

    removeTask(id){
        const index = this.findIdtask(id);
        console.error("remove task =>",this.tasks[index]," \n the elements is ", this.tasks);
        this.tasks.splice(index, 1);
    }   
}