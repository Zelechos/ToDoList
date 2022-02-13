import Alert from "./alert.js";

export default class Modal{

    constructor(){
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.task = null;
        this.alert = new Alert('modal-alert');
    }

    setValues(task){
        this.task = task;
        this.title.value = task.title;
        this.description.value = task.description;
        this.completed.checked = task.completed;
    }

    onClick(callback){
        this.btn.onclick = ()=>{
            // Validacion para ver que los campos no esten vacios
            if(this.title.value !== "" && this.description.value !== ""){
                this.alert.hideNow();
                $('#modal').modal('toggle');
                callback(this.task.id, {
                    title: this.title.value,
                    description: this.description.value,
                    completed: this.completed.checked,
                });
            }else{
                this.alert.show("title and description are required!!!");
            }
            this.alert.hide();
        }
    }
}