//先求arr.length，如果<21，则返回false
//否则，先将第16个值赋给一个变量value
//设置数组的原型为根据索引值删除元素
//利用随机函数，根据索引值用for循环s删除5个值
//将新的数组的值通过filter循环遍历数组，输出值，如果第16个数不在了，console.log出的就是一个空数组
//以上算法不合要求

Array.prototype.remove = function  (index) {
	this.splice(index,1);
};
var newArr = new Array();
var ctrlArr = [].concat(newArr);
for (var i = 0; i < 5; i++) {
	var index = Math.floor(Math.random()*(10-i));//确保每次都能取一个元素出来
	newArr.remove(index);
}
var value = newArr[16];
console.log("现数组中第16个数为"+value);
var jihao;
ctrlArr.forEach(function (v,i,a) {
	if (v==value) {
		jihao = i;
	}
});
console.log("原数组中的序号为："+jihao);
