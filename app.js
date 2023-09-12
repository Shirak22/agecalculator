
class ageCalculator {
    constructor(birthdate) {
        this.data_input = new Date(birthdate);
        this.currentDate = new Date();

    }

    getYears = () => {
        const { currentDate, data_input } = this;
        let age = currentDate.getFullYear() - data_input.getFullYear();
        let m = currentDate.getMonth() - data_input.getMonth();

        if (m < 0 || m === 0 && currentDate.getDate() < data_input.getDate()) {
            age--;
        }

        return age;

    }

    getMonths = () => {
        let monthDiff = this.currentDate.getMonth() - this.data_input.getMonth();
        let ageDays = this.currentDate.getDate() - this.data_input.getDate();

        if (ageDays < 0) {
            monthDiff--;
        }

        if (monthDiff < 0) {
            monthDiff += 12;
        }

        return monthDiff;
    }

    daysInMonth = (year, month) => {
        //returns the last day in the selected month and year
        return new Date(year, month, 0).getDate();
    }
    getDays = () => {
        let ageDays = this.currentDate.getDate() - this.data_input.getDate();
        let ageMonths = this.currentDate.getMonth() - this.data_input.getMonth();
        if (ageDays < 0) {
            ageDays += this.daysInMonth(this.data_input.getFullYear(), this.currentDate.getMonth());

        }

        if (ageMonths < 0) {
            let daysDiff = this.currentDate.getDate() - this.data_input.getDate() + this.daysInMonth(this.data_input.getFullYear(), this.data_input.getMonth());
            ageDays = daysDiff;
        }
        return ageDays;

    }


}

const year = new ageCalculator('1990-08-10');
console.log(year.getDays());


const app = () => {
    let btn = document.querySelector('.btn_submit');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let getYear = parseInt(document.querySelector('input[name=year]').value);
        let getMonth = parseInt(document.querySelector('input[name=month]').value);
        let getDay = parseInt(document.querySelector('input[name = day]').value);
        let date = `${getYear}-${getMonth <= 9 ? '0' + getMonth : getMonth}-${getDay <= 9 ? '0' + getDay : getDay}`;

        let calc = new ageCalculator(date);

        document.querySelector('[data-years] > span').textContent = calc.getYears();
        document.querySelector('[data-months]> span').textContent = calc.getMonths();
        document.querySelector('[data-days]> span').textContent = calc.getDays();
    });



}
app();
