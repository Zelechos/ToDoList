export default class Model{

    // Constructor de la clase Model
    constructor(){
        this.view = null;
        this.tasks = JSON.parse(localStorage.getItem('tasks'));

        if(!this.tasks || this.tasks.length < 1){
            this.tasks = [
                {
                    id: 0,
                    title: "Learn NodeJs",
                    description: "Watch NodeJs Tutorials",
                    completed: false,
                }
            ];
        this.currentId = 1;
        } else {
            this.currentId = this.tasks[this.tasks.length - 1].id + 1;
        }
    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    getTasks(){
        return this.tasks.map(task => ({...task}));
    }

    findIdtask(id){
        return this.tasks.findIndex(task => task.id === id);
    }

    toggleCompleted(id){
        const index = this.findIdtask(id);
        const task = this.tasks[index];
        task.completed = !task.completed;
        this.save();
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
        this.save();// sirve para guardar lo cambios al localstorage

        // Aqui retonamos un clone del nuestro objeto task esto es spread sintax
        return {...task};
    }

    removeTask(id){
        const index = this.findIdtask(id);
        console.error("remove task =>",this.tasks[index]," \n the elements is ", this.tasks);
        this.tasks.splice(index, 1);
        this.save();
    }   

    editTask(id, values){
        const index = this.findIdtask(id);
        Object.assign(this.tasks[index], values);
        this.save();
    }
}