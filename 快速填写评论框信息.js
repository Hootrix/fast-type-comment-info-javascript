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
};
c(a);
function c(arr){
	function a(i) {
		var i = document.getElementById(i);
		return i;
	}
	function b(i) {
		var i = document.all(i);
		return i;
	}
	for(var s in arr)
	{
		for (var s_ in arr[s]) {
			if (typeof(arr[s][s_]) == "object") {
				for (var s__ in arr[s][s_]) {
					eval('var '+s+'_'+s_+'= b("'+arr[s][s_][s__]+'");if('+s+'_'+s_+'){switch ("'+s_+'") {case "ar":{'+s+'_'+s_+'.value=n;break;}case "em":{'+s+'_'+s_+'.value=e;break;}case "url":{'+s+'_'+s_+'.value=u;break;}}}');
				}
			} else {
					eval('var '+s+'_'+s_+'= b("'+arr[s][s_]+'");if('+s+'_'+s_+'){switch ("'+s_+'") {case "ar":{'+s+'_'+s_+'.value=n;break;}case "em":{'+s+'_'+s_+'.value=e;break;}case "url":{'+s+'_'+s_+'.value=u;break;}}}');
			}
		}
	}
}
void(0);