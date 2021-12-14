import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

export class User {
  constructor(
    public email: string,
    public id: string,
    public username: string,
    public friends: User[],
    public description: string,
    public image: string,
    public likes?: number,
    public dislikes?: number


  ) {}


}
