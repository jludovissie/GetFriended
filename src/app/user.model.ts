export class User {

    public email?: string;
    public password?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    public image?: string;
    public likes?: number;
    public dislikes?: number;
    public friends: User[];



    constructor(email: string, password: string, id: string, name: string, description: string, image: string, likes: number, dislikes: number, friends?: User[])
     {
      this.email = email;
      this.password = password;
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.friends = friends || [];
      this.likes = likes;
      this.dislikes = dislikes;

     }

}
