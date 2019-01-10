export class MyDate {
    constructor(
        private day?: number,
        private month?: number,
        private year?: number
    ){}

    public toString():string{
        return JSON.stringify(this.day) + "." + JSON.stringify(this.month) + "." + JSON.stringify(this.year);
    }

    public setDay(day:number){
        this.day = day;
    }

    public setMonth(month:number){
        this.month = month;
    }

    public setYear(year:number){
        this.year = year;
    }
}
