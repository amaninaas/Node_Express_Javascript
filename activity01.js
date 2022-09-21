//decrlare variable
let http = require("http")
let fs = require("fs")

//create server
let server = http.createServer((request, response)=>{
     response.writeHead(200, {"Content-Type":"text/html"})
     //read file
     fs.readFile("hello.txt", (error, data)=>{
          if(error){
               throw error
          }
          console.log("File read is success!!!")
          let content = data.toString()
          response.write(content)
          response.end()
     })
})

let PORT = 8888
server.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT)
})

