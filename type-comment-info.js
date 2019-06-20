/*
* 20150216修改b() :出现多个document.all(name/id)值会for循环
* 
* 参考：http://www.cnblogs.com/2050/p/3870835.html
* 
*/
javascript: var n = 'Pang',//自己的昵称
e = 'xxxooo@qq.com',//邮箱
u = 'http://www.hhtjim.com';//网站
var a = 
{
//任意命名:{ar:'昵称处input的name或者id值',em:'邮箱处的name或者id值',url:'主页处的name或者id值'},
	wp:{ar:'author',em:['email','mail'],url:'url'},
	ds:{ar:'ds-dialog-name',em:'ds-dialog-email',url:'ds-dialog-url'},
	uyan:{ar:['uyan_uname','uyan_l_uname'],em:['uyan_email','uyan_l_email'],url:'uyan_l_ulink'},
	dlu:{ar:'idenglu_name',em:'idenglu_email',url:'idenglu_homepage'},
	em:{ar:'comname',em:'commail',url:'comurl'},
	diy:{ar:'comment_author',em:'comment_email',url:'comment_url'},
	zblog:{ar:'inpName',em:'inpEmail',url:'inpHomePage'},
	phpernote: {ar: 'c_name',em: 'c_email',url: 'c_url'},
	hexo:{ar: 'nick',em: 'mail',url: 'link'},
};
c(a);
function c(arr) {
	function a(i) {
		var i = document.getElementById(i);
		return i;
	}
	function b(i) {
		var i = document.all(i);
		var is_one_DOM = ( typeof HTMLElement === 'object' ) ?
						function(obj){
							return obj instanceof HTMLElement;
						} :
						function(obj){
							return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
						};
		if(!is_one_DOM(i))//如果是多个dom对象
		{
			for (var s in i) {
				if (i[s].tagName == 'INPUT'){return i[s];break;}else{continue;}
			}
		}
		else
		{
			return i;
		}
	}
	for (var s in arr) {
		for (var s_ in arr[s]) {
			if (typeof(arr[s][s_]) == "object") {
				for (var s__ in arr[s][s_]) {
					eval('var ' + s + '_' + s_ + '= b("' + arr[s][s_][s__] + '");if(' + s + '_' + s_ + '){switch ("' + s_ + '") {case "ar":{' + s + '_' + s_ + '.value=n;break;}case "em":{' + s + '_' + s_ + '.value=e;break;}case "url":{' + s + '_' + s_ + '.value=u;break;}}}');
				}
			} else {
				eval('var ' + s + '_' + s_ + '= b("' + arr[s][s_] + '");if(' + s + '_' + s_ + '){switch ("' + s_ + '") {case "ar":{' + s + '_' + s_ + '.value=n;break;}case "em":{' + s + '_' + s_ + '.value=e;break;}case "url":{' + s + '_' + s_ + '.value=u;break;}}}');
			}
		}
	}
}
void(0);
