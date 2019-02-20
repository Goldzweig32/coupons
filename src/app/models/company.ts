export class Company {

    public constructor(
    private  companyId?: number,
	private  companyName?: string,
    private  companyPassword?: string,
	private  companyEmail?: string,
	private  companyStatus?: string
    ){}

    public setCompanyName(name:string){
        this.companyName = name;
    }

    public setCompanyPassword(password:string){
        this.companyPassword = password;
    }

    public setCompanyEmail(email:string){
        this.companyEmail = email;
    }

}

