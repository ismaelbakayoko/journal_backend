const express =require('express');
const home =require("./route/auth")
const client =require("./route/clients")
const poste = require("./route/poste")
const app = express();

app.use(express.json());
app.use('/home',home)
app.use('/client',client)
app.use('/poste',poste)


app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})