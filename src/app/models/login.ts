export class Login {
    public constructor(
        public userEmail?: string,
        public userPassword?: string,
        public userType?: string
    ){}

    public getUserType():string{
        return this.userType;

    }
   
}
