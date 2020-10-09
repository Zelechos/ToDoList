import React from 'react';
import "./animate";

function Begin(){
    return(   
        <div className="row">
            <div className="col-md-12">
                <script src="animate.js"></script>
                <nav className="navbar navbar-expand-lg navbar-light navbar-toggleable-sm  sticky-top">
                    <a href="#" class="logo"><img src="log1.png" className="App-logo" alt="logo" />&nbsp;<strong> PreUniversitario</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> 
                        <ul className="navbar-nav justify-content-center ml-auto ">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Begin;
