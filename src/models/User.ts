import db from "../db/connect.ts";

type UserParams = {
    user_id: number,
    username: string,
    password: string
}

type Data = {
    username: string,
    password: string
}

class User {
    user_id: number
    username: string
    password: string

    constructor({ user_id, username, password }: UserParams) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
    }

    static async getAll() {
    const response = await db.query("SELECT * FROM users;");
    if (response.rows.length === 0) {
      throw new Error("No users available");
    }
    return response.rows.map((c) => new User(c));
    }
    
    static async getByName(name: string) {
        try {
            const response = await db.query("SELECT * FROM users WHERE LOWER(username) = LOWER($1);", [name]);
            const user = new User(response.rows[0]);
            return user;
        } catch(err) {
            throw new Error("This user doesn't exist");
        }
    }

    static async create(data: Data) {
        try {  
            if(!data.username){ throw new Error("username is missing") };
            if(!data.password){ throw new Error("username is missing") };

            const response = await db.query("INSERT INTO users(username, password) VALUES($1, $2) RETURNING *;", [data.username.toLowerCase(), data.password])
            return new User(response.rows[0]);

        } catch(err) {
            throw new Error("Couldn't create user")
        }
    }
}

export default User;