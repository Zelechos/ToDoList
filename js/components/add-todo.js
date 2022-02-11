export default class AddTodo{

    constructor(){
        // traemos los elementos HTML necesarios para agregar tasks
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback){
        this.btn.onclick = ()=>{
            // Validacion para ver que los campos no esten vacios
        if(this.title.value !== "" && this.description.value !== ""){
            // $template.getElementById('title-task').textContent = $title.value;
            // $template.getElementById('description-task').textContent = $description.value;

            callback(this.title.value, this.description.value);
            // $clone = $template.cloneNode(true);
            // $fragment.appendChild($clone);
            // const $row = $table.insertRow();
            // $row.setAttribute('id', id++);
            // $row.appendChild($fragment);
        }else{
            console.error("title and description are required!!!");
            // $alert.classList.toggle("d-none");
            // $alert.textContent = "title and description are required!!!";
            // setTimeout(()=>{
            //     $alert.classList.toggle("d-none");
            // }, 3000);
        }
        }
    }
}