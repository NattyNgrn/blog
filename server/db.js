import pg from "pg";

const DB = new pg.Client({
    user: 'me',
    host: 'localhost',
    database: 'blog',
    password: 'password',
    port: 5432
});

export default DB;