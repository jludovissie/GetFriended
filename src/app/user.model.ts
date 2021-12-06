export class User {
    public email?: string;
    public password?: string;
    public ID?: string;
    public name?: string;
    public description?: string;
    public image?: string;

    constructor(email: string, password: string, ID: string, name: string, description: string, image: string)
     {
      this.email = email;
      this.password = password;
      this.ID = ID;
      this.name = name;
      this.description = description;
      this.image = image
     }
}
