import AgeCalculator from "./AgeCalculator.js";



const outputComponent_html = (years, months, days) => {
    return `
                    <h1 data-years><span >${years}</span>years</h1>
                    <h1 data-months><span>${months}</span>months</h1>
                    <h1 data-days> <span>${days}</span>days</h1>
            `;
}



const getInput = (type) => {
    const input = document.querySelector(`${type} > input`).value;
    return input;
}




const app = () => {
    let output = document.querySelector('[data-output]');
    let btn = document.querySelector('.btn_submit');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        clearAlert();
        let birthDate = `${getInput('.SECTION_YEAR')}-${getInput('.SECTION_MONTH')}-${getInput('.SECTION_DAY')}` ; 
        const calc = new AgeCalculator(birthDate);
         if(calc.getYears() > 0 && calc.getMonths()!== NaN && calc.getDays !== NaN ){
            let yearsCount = 0; 
            let MonthsCount = 0; 
            let daysCount = 0; 

            const interval = setInterval(()=> {
                yearsCount++;
                MonthsCount >= calc.getMonths() ? MonthsCount = MonthsCount:MonthsCount++; 
                daysCount >= calc.getDays() ? daysCount = daysCount:daysCount++; 
                output.innerHTML = outputComponent_html(yearsCount, MonthsCount, daysCount);
                if(yearsCount >= calc.getYears() && MonthsCount >= calc.getMonths() && daysCount >=  calc.getDays() ) {
                     yearsCount = 0; 
                     MonthsCount = 0; 
                     daysCount = 0; 
                    clearInterval(interval); 
                }
        
            },60)
         }else {
          alert();
         }
      });
    };
      

function alert(){
          document.querySelector('.SECTION_YEAR input').style.borderColor = "#ff0000"
          document.querySelector('.SECTION_MONTH input').style.borderColor = "#ff0000"
          document.querySelector('.SECTION_DAY input').style.borderColor = "#ff0000"; 
}
function clearAlert(){
          document.querySelector('.SECTION_YEAR input').style.borderColor = "rgba(0,0,0,.2)"
          document.querySelector('.SECTION_MONTH input').style.borderColor = "rgba(0,0,0,.2)"
          document.querySelector('.SECTION_DAY input').style.borderColor = "rgba(0,0,0,.2)" 
}

app();
