export class User {

    public email?: string;
    public password?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    public image?: string;

    constructor(email: string, password: string, id: string, name: string, description: string, image: string)
     {
      this.email = email;
      this.password = password;
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image
     }
}

