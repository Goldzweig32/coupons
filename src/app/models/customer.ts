export class Customer {
    
    public constructor(
        private customerId?: number,
	    private customerName?:string,
	    private customerPassword?: string,
	    private customerEmail?: string
    ){}

    public setCustomerName(name:string){
        this.customerName = name;
    }

    public setCustomerPassword(password:string){
        this.customerPassword = password;
    }

    public setCustomerEmail(email:string){
        this.customerEmail = email;
    }
}
