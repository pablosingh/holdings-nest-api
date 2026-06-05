export class User {
  id: number;
  full_name: string;
  email: string;
  constructor(id: number, full_name: string, email: string) {
    this.id = id;
    this.full_name = full_name;
    this.email = email;
  }
}
