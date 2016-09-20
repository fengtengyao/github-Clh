window.onload = function() {
	//获取元素
	var list = document.getElementById('nav').getElementsByTagName('a');
	var line = document.getElementById('nav').getElementsByTagName('span')[0];
	var focusInfo = document.getElementById('focus-info');
	var banner = document.getElementById('banner');
	var focusMain = document.getElementById('focus-main');
	var infoMain = document.getElementById('info-main');
	var datSpan = document.getElementById('focus-dat').getElementsByTagName('span');
	
	//鼠标移入、移出nav中a时，nav中的span位置及宽度的变化
	for(var i=0;i<list.length;i++) {
		list[i].onmouseover = function() {	
			line.style.left = this.offsetLeft+'px';
			line.style.width = getComputedStyle(this).width;
			line.style.opacity = 1;
		};
		list[i].onmouseout = function() {
			line.style.opacity = 0;
		}
	}
	
	//设置轮播图中简介的位置
	var l = (document.documentElement.clientWidth-focusInfo.getBoundingClientRect().width)/2;
	focusInfo.style.left = l+'px';
	
	//设置轮播图
	var num = 0;
	var timer = null;
	function play() {
		num++;
		num%=datSpan.length;
		move();
	}
	timer = setInterval(play,5000);
	
	function move() {
		//设置span的状态
		for(var i=0;i<datSpan.length;i++) {
			datSpan[i].className = '';
		};
		datSpan[num].className = 'color';
		//轮播图中简介的变化
		infoMain.style.left = -num*focusInfo.clientWidth+'px';
		//轮播图变化
		mTween(focusMain,'left','-'+num*banner.clientWidth,1000, 'linear');
	}
	//鼠标移入移出span事件
	for(var i=0;i<datSpan.length;i++) {
		datSpan[i].index = i;
		datSpan[i].onclick = function() {
			num = this.index;
			move();
		};
	}
	
	var ulList = document.getElementById('work').getElementsByTagName('ul')[0];
	var arr = ['red','green','yellow','blue','pink','violet','gray','yellowgreen'];

	var liList = ulList.getElementsByTagName('li');
	var workImg = document.getElementsByClassName('work-img');
	var topText = document.getElementsByClassName('top-text');
	var workTitle = document.getElementsByClassName('work-title');
	for(var i=0;i<liList.length;i++) {
		liList[i].index = i;
		liList[i].onmouseover = function() {
			topText[this.index].style.bottom = 0;
			workTitle[this.index].style.backgroundColor = arr[Math.floor(Math.random()*8)];
			workTitle[this.index].style.color = '#fff';
			workImg[this.index].style.width = '110%';
			
		}
		liList[i].onmouseout = function() {
			topText[this.index].style.bottom = '-50px';
			workTitle[this.index].style.backgroundColor = '#fff';
			workTitle[this.index].style.color = '#333';
			workImg[this.index].style.width = '100.5%';
			
		}
	}
	
	//news部分li的移入移出效果
	
	var lList = document.getElementsByClassName('singing')[0].getElementsByTagName('li');
	var aList = document.getElementsByClassName('singing')[0].getElementsByTagName('a');
	for(var i=0;i<lList.length;i++) {
		lList[i].index = i;
		lList[i].onmouseover = function() {
			aList[this.index].style.paddingLeft = '20px';
			aList[this.index].style.color = '#8FC35D';
		}
		lList[i].onmouseout = function() {
			aList[this.index].style.paddingLeft = '0px';
			aList[this.index].style.color = '#666';
		}
	}
	
	
	//client部分li的移入移出效果
	var logoLi = document.getElementById('client').getElementsByTagName('li');
	var logoImg = document.getElementsByClassName('logoImg');
	var imgArr = ['img/bigLogo-1.png','img/bigLogo-2.png','img/bigLogo-3.png','img/bigLogo-4.png','img/bigLogo-5.png','img/bigLogo-6.png',
	'img/bigLogo-7.png','img/bigLogo-8.png','img/bigLogo-9.png','img/bigLogo-10.png','img/bigLogo-11.png','img/bigLogo-12.png','img/bigLogo-13.png',
	'img/bigLogo-14.png','img/bigLogo-15.png','img/bigLogo-16.png','img/bigLogo-17.png','img/bigLogo-18.png','img/bigLogo-19.png','img/bigLogo-20.png'
	];
	var imgArr2 = ['img/smallLogo-1.png','img/smallLogo-2.png','img/smallLogo-3.png','img/smallLogo-4.png','img/smallLogo-5.png','img/smallLogo-6.png',
	'img/smallLogo-7.png','img/smallLogo-8.png','img/smallLogo-9.png','img/smallLogo-10.png','img/smallLogo-11.png','img/smallLogo-12.png','img/smallLogo-13.png',
	'img/smallLogo-14.png','img/smallLogo-15.png','img/smallLogo-16.png','img/smallLogo-17.png','img/smallLogo-18.png','img/smallLogo-19.png','img/smallLogo-20.png'
	];
	
	for(var i=0;i<logoLi.length;i++) {
		logoLi[i].index = i;
		logoLi[i].onmouseover = function() {
			logoImg[this.index].src = imgArr2[this.index];
			logoImg[this.index].style.border = '10px solid #f6f6f6';
		}
		logoLi[i].onmouseout = function() {
			logoImg[this.index].src = imgArr[this.index];
			logoImg[this.index].style.border = 'none';
		}
	}
	
	//和滚动条有关的事件
	var head = document.getElementById('head');
	var backTop = document.getElementsByClassName('back-top')[0];
	window.onscroll = function() {
		console.log(document.body.scrollTop);
		if(document.body.scrollTop>=500) {
			backTop.style.display = 'block';
		}else{
			backTop.style.display = 'none';
		}
		
	}
	backTop.onclick = function() {
		document.body.scrollTop = 0;
	}
}

