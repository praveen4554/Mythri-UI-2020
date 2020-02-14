var arr1 = ['B','C','A','E','D'];
var arr2 = [70,80,90,60,100];
var newArr = [];
var newArr = Object.create(arr1)
var key,val;
var res = {}
for(let i=0; i < arr1.length; i++){
	key = arr2[i];
  val = newArr[i];
  res[key]= val;

}
console.log(res);

