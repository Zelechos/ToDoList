import Alert from "./alert.js";
export default class AddTodo{

    constructor(){
        // traemos los elementos HTML necesarios para agregar tasks
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.alert = new Alert('alert');
    }

    onClick(callback){
        this.btn.onclick = ()=>{
            // Validacion para ver que los campos no esten vacios
            if(this.title.value !== "" && this.description.value !== ""){
                this.alert.hideNow();
                callback(this.title.value, this.description.value);
            }else{
                this.alert.show("title and description are required!!!");
            }
            this.alert.hide();
        }
    }
}