// JavaScript Document
var sidleNode=document.getElementById('sidle');//在文档中，得到标签通过id
var lisNode=sidleNode.getElementsByTagName('li');//在ul中得到标签们通过标签名字；类array
/*lisNode[0]
lisNode[1]
lisNode[2]
lisNode[3]
lisNode[4]*/

for(var i=0;i<lisNode.length;i++)
{
	lisNode[i].index=i;
	lisNode[i].onmouseenter=function(){
		if(this.className=="current")
		{
			return;//跳出函数
		}
		
		var curPos=this.index;//当前位置;this指的是当前事件触发的对象的指向
		var oldPos;//旧的位置
		for(var j=0;j<lisNode.length;j++){//循环遍历所有的li
			if(lisNode[j].className=="current")
			{
				oldPos=j;
				break;//跳出循环
			}
		}
		
		lisNode[curPos].style.width="798px";
		lisNode[curPos].style.marginTop="0px";
		lisNode[curPos].className="current";
		
		lisNode[oldPos].style.width="48px";
		lisNode[oldPos].style.marginTop="-1px";
		lisNode[oldPos].className='';
	}
}
//alert(i);//5
