
class Age_calc {
    constructor(data_input){
        this.data_input = new Date(data_input);
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth() + 1 ;
        this.data_inputMonth = this.data_input.getMonth() + 1 ;

    }

    getYears = () => {
        if((this.currentMonth - this.data_inputMonth ) < 0 ){
            return  Math.floor((this.currentDate.getFullYear() - this.data_input.getFullYear() - 1));
        }else if((this.currentMonth - this.data_inputMonth ) == 0  &&
                 (this.currentDate.getDate() - this.data_input.getDate()) < 0
        ){
            return  Math.floor((this.currentDate.getFullYear() - this.data_input.getFullYear() - 1));
        } else {
            return Math.floor((this.currentDate.getFullYear() - this.data_input.getFullYear()));
        }
    }

    

    getMonths = () => {
        let monthDiff = this.currentMonth - this.data_inputMonth;
        let ageDays = this.currentDate.getDate() - this.data_input.getDate();

            if(monthDiff > 0){
                if(ageDays < 0  ){
                    return monthDiff - 1; 
                }else {
                    return monthDiff ;
                }
                
            }else if(monthDiff == 0){
                if(ageDays < 0  ){
                    return 12 - Math.abs(monthDiff - 1);
                }else {
                    return monthDiff ;
                }
            }else {
                    if(ageDays < 0  ){
                        return 12 - Math.abs(monthDiff - 1);
                    }else {
                        return 12 - Math.abs(monthDiff);
                    }
                    
            }
    }
    daysInMonth = (year,month) => {
        //returns the last day in the selected month and year
        return new Date(year, month, 0).getDate();
    }
    getDays = () => {
        
        if((this.currentDate.getDate() - this.data_input.getDate()) > 0){
            let ageDays = this.currentDate.getDate() - this.data_input.getDate() ;
            return ageDays;
        }else if((this.currentDate.getDate() - this.data_input.getDate()) < 0){
            let ageDays = this.currentDate.getDate() - this.data_input.getDate() + this.daysInMonth(this.data_input.getFullYear(),this.data_inputMonth) ;
            return ageDays;
        }{
            let ageDays = this.currentDate.getDate() - this.data_input.getDate() + this.daysInMonth(this.data_input.getFullYear(),this.data_inputMonth) ;

            if((this.currentMonth - this.data_inputMonth ) <= 0){
                return  this.currentDate.getDate() - this.data_input.getDate();
            }else {
                return this.daysInMonth(this.data_input.getFullYear(),this.data_inputMonth) -  ageDays;
            }
        }
    }


}

const calc = new Age_calc('2022-09-12');


console.log("Days: "+calc.getDays() + "|| Months: " + calc.getMonths()+ "|| Years: "+ calc.getYears());





const app = ()=> {
    let btn = document.querySelector('.btn_submit');
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        let getYear = parseInt(document.querySelector('input[name=year]').value); 
        let getMonth = parseInt(document.querySelector('input[name=month]').value); 
        let getDay = parseInt(document.querySelector('input[name = day]').value); 
        let date = `${getYear}-${getMonth <=9 ?'0'+ getMonth : getMonth }-${getDay <=9 ?'0'+ getDay : getDay}`; 
        
        let calc = new age_calc(date); 
        
       
        

        document.querySelector('[data-years] > span').textContent = calc.getYears();
        document.querySelector('[data-months]> span').textContent =  calc.getMonths();
        document.querySelector('[data-days]> span').textContent =  calc.getDays();
    });


    
}
// app();
