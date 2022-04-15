const initSqlJs = require('sql.js');

async function init() {
    // Create a database
    const SQL = await initSqlJs({ });
    const db = new SQL.Database();

    let sqlstr = "CREATE TABLE hello (a int, b char); \
    INSERT INTO hello VALUES (0, 'hello'); \
    INSERT INTO hello VALUES (1, 'world');";
    db.run(sqlstr);

    // Create the database
    db.run("CREATE TABLE pets (id int, name varchar);");
    db.run("INSERT INTO pets VALUES (1, 'doggo');");
    db.run("INSERT INTO pets VALUES (2, 'porkbun');");
    db.run("INSERT INTO pets VALUES (3, 'guero');");

    return db;
}

console.log("Initializing");

function serialize(data) {
    // The database returns data in the following format:
    // values, columns. We want to turn this into a simple
    // array of objects.
    // [
    //     {
    //         "columns": [ "id", "name" ],
    //         "values": [
    //             [ 1, "doggo" ],
    //             [ 2, "porkbun" ]
    //         ]
    //     }
    // ]

    let result : any[] = [];
    for (let i = 0; i < data[0]["values"].length; i++){
        let row = {};
        for (let j = 0; j < data[0]["columns"].length; j++) {
            row[data[0]["columns"][j]] = data[0]["values"][i][j];
        }
        result.push(row);
    }
    return result;
}

export const getPets = ((async (event) => {
    console.log("about to initialize");
    let db = await init();
    console.log("done");

    // run some queries
    const result = db.exec("SELECT * FROM pets ");
    const result2 = serialize(result);

    return { statusCode: 200, body: JSON.stringify(result2) }
}))
