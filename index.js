const fs = require('fs');

const { calculate } = require("./calculate");


try {
  const lines = fs.readFileSync('./inputData.txt', 'utf8')
  .split('\n')
  .filter(Boolean);
  lines.forEach((data)=>{
    var arrayMain = data.split(' ')[0].split(",")
    arrayMain = arrayMain.map((elem) => parseInt(elem))
    var target = parseInt(data.split(' ')[1])
  
    const result = calculate(arrayMain, target)
  
    console.log(`-> target: ${target} / result: ${result}`);
  })
} catch (err) {
  console.error(err);
}
