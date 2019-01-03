export class Coupon {
    public constructor(
        private couponId?: number,
        private couponTitle?: string,
        private startDate?: string,
        private endDate?: string,
        private amount?: number,
        private couponType?: string,
        private couponMessage?: string,
        private couponPrice?: number,
        private couponImage?: string,
        private companyId?: number
    ){}

    setStartDate(startDate: Date){
        this.startDate = JSON.stringify(startDate);
    } 

}
