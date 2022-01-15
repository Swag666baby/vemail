var readline = require('readline')
var axios = require('axios')
var execSync = require('child_process').execSync;
var clear = execSync("clear", { encoding: 'utf-8' })
console.log(clear)

var input = readline.createInterface({
    input: process.stdin, output: process.stdout
})

console.log("--------------------------------------------------\n         validador de email's\n         by: swag666baby\n--------------------------------------------------")
input.question("\n\ndigite o email: ",

function(answer){
    var email = answer
    
    input.close()
    
    axios.get(`http://apilayer.net/api/check?access_key=6d441d1ccac05f35d287844e0a964042&email=${email}&smtp=1&format=1`).then( response => console.log(`\nVALIDO: ${response.data.smtp_check}
EMAIL: ${response.data.email}
FORMATO VALIDO: ${response.data.format_valid}
DESCARTAVEL: ${response.data.disposable}`))
})