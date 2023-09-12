import AgeCalculator from "./AgeCalculator.js";
const app = () => {
    let btn = document.querySelector('.btn_submit');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let getYear = parseInt(document.querySelector('input[name=year]').value);
        let getMonth = parseInt(document.querySelector('input[name=month]').value);
        let getDay = parseInt(document.querySelector('input[name = day]').value);
        let date = `${getYear}-${getMonth <= 9 ? '0' + getMonth : getMonth}-${getDay <= 9 ? '0' + getDay : getDay}`;

        let calc = new AgeCalculator(date);

        document.querySelector('[data-years] > span').textContent = calc.getYears();
        document.querySelector('[data-months]> span').textContent = calc.getMonths();
        document.querySelector('[data-days]> span').textContent = calc.getDays();
    });

}
app();
