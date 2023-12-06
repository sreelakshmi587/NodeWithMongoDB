// const http= require('http');
// const fs = require('fs');
// const _ = require('lodash');

// http.createServer((req,res)=>{

//     // const num = _.random(1,200);
//     // console.log(num);

//     // const greet = _.once(()=>{
//     //     console.log('hellooo');
//     // });

//     // greet();
//     // greet();

//     res.setHeader('Content-Type','text/html');
//     let path = './Views/';
//     switch(req.url){
//         case '/' :
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path +='about.html';
//             res.statusCode = 200;
//             break;
//             case '/about-me':
//                 res.statusCode = 301;
//                 res.setHeader('Location','/about');
//                 res.end();
//                 break;
//         default:
//             path +='error.html';
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end();
//         }
//         res.end(data);
    
//     })
// }).listen(8088);




// const greet = (name)=>{
//     console.log (`Hello  ${name}`);
// }
// greet(`Sree`);


// const sample=  require('./sample');
// console.log(sample.alpha,sample.val);

// const fs = require('fs');
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets/text1.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('File created');
//     })

// }


// fs.writeFile('./assets/text2.txt','HelloSree',(err)=>{
//     if(err){
//     console.log(err);
//     }
//     console.log('content added');
// })
// fs.readFile('./assets/text2.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })

// fs.unlink('./assets/text2.txt',()=>{
//     console.log('File deleted')
// })

// fs.rmdir('./assets',()=>{
//     console.log('folder deleted');
// })


   console.log(__dirname);
   console.log(__filename);

   


