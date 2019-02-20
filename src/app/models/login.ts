export class Login {
    public constructor(
        public userEmail?: string,
        public userPassword?: string,
        public userType?: string
    ){}

    public getUserType():string{
        return this.userType;

    }

    public getUserEmail():string{
        return this.userEmail;
    }

    public getUserPassword():string{
        return this.userPassword;
    }
   
}
