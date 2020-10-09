import React from 'react';
import './Words';

function Header(){
    return(
        <div id="banner" className="row"> 
        <script src="Words.js"></script>
            <div id="text-header"  className="col-md-6 text-light text-justify"   >
                <h1 id="Text"> Se&nbsp;
                    <span className="d-initial">&nbsp;<strong>Universitario</strong>&nbsp;</span>
                    <span className="d-none">&nbsp;<strong>Inteligente</strong>&nbsp;</span>
                    <span className="d-none">&nbsp;<strong>Unico</strong>&nbsp;</span>
                    <span className="d-none">&nbsp;<strong>Autodidacta</strong>&nbsp;</span>
                    <span className="d-none">&nbsp;<strong>Perseverante</strong>&nbsp;</span>
                    <span className="d-none">&nbsp;<strong>PreUniversitario</strong>&nbsp;</span>
                </h1>
                <h2>Listo para ingresar a la Universidad?</h2>
                <p>
                    Con <span class="badge badge-light text-justify">PreUniversitario</span> ingresaras a la Universidad con una gran facilidad y listo para<br/>
                    empezar con tu estudio universitario, contamos con cursos especializados y de <br/>
                    alta calidad para el ingreso a la <span class="badge badge-primary text-justify">Universidad San Francisco Xavier de Chuquisaca</span> en las<br/>
                    facultades de : <span class="badge badge-primary">Facultad de Tecnología | USFX</span> , <span class="badge badge-success text-justify">Facultad de Arquitectura y Ciencias del Habitat | USFX</span><br/>
                    <span class="badge badge-danger text-justify">Facultad de Ingeniería Civil | USFX</span>. Nuestra metodología de enseñanza esta especializada<br/>
                    para lograr una educación online efectiva para ti segun a tus capacidades<br/>
                    <span class="badge badge-light text-justify">!!!EMPIEZA A ESTUDIAR YA!!!</span> contactanos he ingresa a la USFX a la carrera que deseas.<br/>
                </p>
                <br/>
                <a href="https://github.com/Zelechos">Sabe Mas</a>
            </div>

            <div className="col-md-6 text-light"  >
                <h1>Empieza a estudiar Ya!!</h1>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>

            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h1 >asdasda</h1>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </div>
        
    );

}

export default Header;
