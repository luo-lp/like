   // 把数组写入json文件的方法
   function writeFile(arr) {
       let content = JSON.stringify(arr);
       fs.writeFile('./data/heros.json', content, 'utf-8', (err) => {
           if (err) console.log(err);
       })
   }