function sum(...args){
  let result = 0
  Array.from(args).forEach(elem => {
    result += elem;
  });
  return result;
}
console.log('RESULT:', sum(3,4,5))
module.exports = sum;