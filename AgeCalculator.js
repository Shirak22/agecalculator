
export default class AgeCalculator {
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
        return new Date(year, month + 1, 0).getDate();
    }
    getDays = () => {
 
        let ageDays = this.currentDate.getDate() - this.data_input.getDate();
        if (ageDays < 0 ) {
            let ageDiffer =  this.daysInMonth(this.data_input.getFullYear(), this.data_input.getMonth()) + ageDays;
            ageDays = ageDiffer
        }

        return ageDays;
        
    }


}
