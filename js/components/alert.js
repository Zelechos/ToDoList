export default class Alert{

    constructor(alertId){
        this.alert = document.getElementById(alertId);
    }

    show(message){
        this.alert.classList.remove("d-none");
        this.alert.textContent = message ;
        // "title and description are required!!!"
    }

    hide(){
        setTimeout(()=>{
            this.alert.classList.add("d-none");
        }, 3000);
    }

    hideNow(){
        this.alert.classList.add("d-none");
    }

}

