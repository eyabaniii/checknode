console.log("HELLO WORLD")
const http =require("http")

http.createServer((request,response)=>{
    response.end("Hello Node!!!!")
}).listen(3000)

const fs=require("fs")
fs.writeFile("Welcome.txt","Hello NOde",function(error)

{
    if(error)throw (error)
    console.log("file successfuly")
}
)

fs.readFile("Welcome.txt", 'utf8', (err, data) => {
    if (err) {
  
      console.error(err);
     
    }
  return(    console.log(data))
;
  });
  fs.readFile("Welcome.txt", 'utf8', (err, data) => {
    if (err) {
  
      console.error(err);
     
    }
  return(    console.log(data))
;
  });