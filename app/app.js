const express = require('express');
const  app  = express();
const dataFile = require('./data/data.json');

let Port = app.set('port',process.env.PORT || 3000);

app.get('/',(req,res)=>{
    let info = '';
    dataFile.speakers.forEach(function(element) {
        info   += `
            <li>
                <h2>${element.name}</h2>
                <p>${element.description}</p>
            </li>
        `
    });
    res.send(`
        <h1>Testing ...</h1>
        ${info}
    `)
});

app.listen(app.get('port'),()=>{
    console.log(`startting serrverr on port${app.get('port')}`)
})