const { calculate } = require("./calculate");


 
test('Test number 1: 1,9,5,0,20,-4,12,16,7 12', () => {
  var arrayMain =[1,9,5,0,20,-4,12,16,7]
  var target = 12
    expect(calculate(arrayMain, target)).toBe(JSON.stringify([ '5,7', '0,12', '-4,16' ]));
  });

test('Test number 2: 1 12', () => {
  var arrayMain =[1]
  var target = 12
    expect(calculate(arrayMain, target)).toBe(JSON.stringify([]));
  });

test('Test number 3: 1,9,5,0,14,-2,12,16,7 14', () => {
  var arrayMain =[1,9,5,0,14,-2,12,16,7]
  var target = 14
    expect(calculate(arrayMain, target)).toBe(JSON.stringify(["9,5","0,14","-2,16","7,7"]));
  });

test('Test number 4: 1,9,3,25,18,9,12,12,7,7,16,5,0,14,-2,12,16,7 14', () => {
  var arrayMain =[1,9,3,25,18,9,12,12,7,7,16,5,0,14,-2,12,16,7]
  var target = 14
    expect(calculate(arrayMain, target)).toBe(JSON.stringify(["9,5","0,14","-2,16","7,7"]));
  });