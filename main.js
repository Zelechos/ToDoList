'use strict';

document.addEventListener('DOMContentLoaded', ()=>{

    // traemos los valores introducidos en los inputs
    const $title = document.getElementById('title');
    const $description = document.getElementById('description');


    // traemos la tabla para poder trabajar sobre ella
    const $table = document.getElementById('table');
    const $template = document.getElementById('template-row').content;
    const $fragment = document.createDocumentFragment();
    const $alert = document.getElementById("alert");
    let $clone;
    let id = 0;
    
    // Creamos una funcion para agregar tareas al todo list
    function addToDoList(){
        // Validacion para ver que los campos no esten vacios
        if($title.value !== "" && $description.value !== ""){
            $template.getElementById('title-task').textContent = $title.value;
            $template.getElementById('description-task').textContent = $description.value;


            $clone = $template.cloneNode(true);
            $fragment.appendChild($clone);
            const $row = $table.insertRow();
            $row.setAttribute('id', id++);
            $row.appendChild($fragment);
        }else{
            $alert.classList.toggle("d-none");
            $alert.textContent = "title and description are required!!!";
            setTimeout(()=>{
                $alert.classList.toggle("d-none");
            }, 3000);
        }
    }

    // Creamos una funcion para eliminar tareas del todo list
    function removeToDoList(id){
        document.getElementById(id).remove();
    }

    document.addEventListener("click", (e)=>{

        // =============Add=============
        // reconoce el evento del button Add
        if(e.target.matches("#add")){
            // console.log(`Title => ${$title.value}` );
            // console.log(`Description => ${$description.value}` );
            addToDoList();
        }

        // =============Delete=============
        let parentEvent = e.target.parentNode.parentNode;

        // reconoce el evento del button remove
        if(e.target.matches("#btn-remove")){
            let rowEvent = parentEvent;
            let id = parseInt(rowEvent.getAttribute('id'));
            removeToDoList(id);
        }

        // reconoce el evento del button remove
        if(e.target.matches("#img-remove")){
            let rowEvent = parentEvent.parentNode;
            let id = parseInt(rowEvent.getAttribute('id'));
            removeToDoList(id);
        }

        // =============Update=============
        

    });    
});