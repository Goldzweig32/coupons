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

    public setStartDate(startDate: string){
        this.startDate = startDate;
    } 

    public setEndDate(endDate: string){
        this.endDate = endDate;
    } 

    public setCompanyId(id: number){
        this.companyId = id;
    }

    public getCouponId(): number{
        return this.couponId;
    }

    public couponTypeToUpperCase(): void{
        this.couponType = this.couponType.toUpperCase();
    }
}
