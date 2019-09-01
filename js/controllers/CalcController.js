class CalController{

    constructor(){

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        
    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(() =>{

            this.setDisplayDateTime()
            
        }, 1000);
      
    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll('#buttons > g, #parts > g')

       

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        })

        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    get displayDate(){

        return this_dateEl.innerHTML

    }

    get displayTime() {

        return this._timeEl.innerHTML

    }

    get displayCalc() {

        return this._displayCalcEl.innerHTML

    }
    
    get currentDate() {

        return new Date()

    }

    set displayTime(value){

        this._timeEl.innerHTML = value

    }

    set displayDate(value){

        this._dateEl.innerHTML = value

    }

    set displayTime(value){

        this._timeEl.innerHTML = value

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value

    }

    set currentDate(value){

        this._currentDate = value
        
    }

}