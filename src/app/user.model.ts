export class User {
    public email: string;
    public password: string;
    public ID: string;

    constructor(email: string, password: string, ID: string)
     {
      this.email = email;
      this.password = password;
      this.ID = ID;
     }
}
