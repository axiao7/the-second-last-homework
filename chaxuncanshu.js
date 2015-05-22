// function ChaXun () {
// 	var str = location.search;
// 	var a=str.split("&");
// 	// console.log(a[0]);
// 	var b=a[0].substring(1);
// 	console.log(b);
// }
function ChaXun () {
	var str = location.search.substring(1);//去除?
	var a=str.split("&");//去除键值对
	var b;
	var c = [];
	// console.log(a[0]);
	var len = a.length;
	for (var i = 0; i < len; i++) {
		b = a[i].split("=");//每一个键值对将=前后的值取出来
		c[0] = decodeURIComponent(b[0]);//=前的值
		c[1] = decodeURIComponent(b[1]);//=后的值
		console.log(c.join("="));
	}
}
