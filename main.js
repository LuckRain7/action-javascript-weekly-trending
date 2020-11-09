
const fs = require('fs')

fs.writeFile('./HelloWorld.txt','test writing file', (err) => {
    if(err) { console.log('写入文件失败');return; }
    console.log('写入文件成功');
})   