export class User {

    constructor(public email: string, 
                public name: string,
                private password: string) {}

    matches(another: User): boolean {
        return another !== undefined 
            && another.email === this.email 
            && another.password === this.password
    }

}

export const users = {
    "sabrina@gmail.com": new User('sabrina@gmail.com', 'SabrinaAraujo', '123'),
    "luzileuda@gmail.com": new User('luzileuda@gmail.com', 'LuzileudaAraujo', '123')
}