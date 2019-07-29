   // 把数组写入json文件的方法
   function writeFile(arr) {
       let content = JSON.stringify(arr);
       fs.writeFile('./data/heros.json', content, 'utf-8', (err) => {
           if (err) console.log(err);
       })
   }
   //获取最大ID方法
   function getMaxId(callback) {
       this.getAllHero((arr) => {
           let id = arr[0].id;
           for (let i = 1; i < arr.length; i++) {
               if (arr[i].id > id) {
                   id = arr[i].id;
               }
           }
           // id 就是最大id -- 也是通过回调函数得到最大id
           callback(id);
       })
   }