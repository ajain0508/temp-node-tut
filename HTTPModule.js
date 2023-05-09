const http =  require('http')



const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url ==='/'){
      res.end('Welcome to our home page')
      
    }
    else if(req.url ==='/about'){
        res.end('Welcome to our about page')
        
    }
    res.write('back to our about page');
    res.end();
    
    
      
})

server.listen(5000)