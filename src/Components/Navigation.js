import React from 'react';
import './Words'
function Navigation(){
    return(
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-toggleable-sm fixed-top" > 
                
                <a  className="navbar-brand " href="#"> 
                <h4><img src="log.png" className="App-logo" alt="logo" />&nbsp;
                <strong>EnterNow</strong></h4>
                </a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> 
                    <ul className="navbar-nav justify-content-center ml-auto mr-auto"> 
                        <li className="nav-item ">
                            <h6><a className="nav-link active" href="$">Cursos</a></h6>
                        </li>
                        <li className="nav-item ">
                            <h6><a className="nav-link" href="$">Contactanos</a></h6>
                        </li>
                        <li className="nav-item ">
                            <h6><a className="nav-link" href="$">Equipo</a></h6>
                        </li>
                        <li className="nav-item ">
                            <h6><a className="nav-link" href="$"></a></h6>
                        </li>
                    </ul>        
                </div>
                </nav>
            </div>
        </div>
    );

}
export default Navigation;