'use strict';

// importamos el Modelo y la Vista
import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', ()=>{

    // Instanciamos nuestro objetos
    const model = new Model();
    const view = new View();
    model.setView(view);
    view.setModel(model);

    // rederizamos los datos del local storage
    view.render();
});
