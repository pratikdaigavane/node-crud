const sqlite3 = require('sqlite3')

// Create Databse
let db = new sqlite3.Database("./db.sqlite3", (err) => {
    if (err) {
        console.log('Error when creating the database', err)
    } else {
        console.log('Database created!')

        //Creating Tables
        db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)", insertData);
    }
})

//Insert Data
const insertData = () =>{
    console.log("Insert data")
    db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"], read);
}

//Read Data
const read = () => {
    console.log("Read data from contacts");
    db.all("SELECT rowid AS id, name FROM contacts", function(err, rows) {
        rows.forEach(function (row) {
            console.log(row.id + ": " + row.name);
        });
    });
}