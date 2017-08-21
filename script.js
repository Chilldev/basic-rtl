'use strict'
var defaultLang = 'EN',
lang = localStorage.getItem('lang');

var translations = {
	'EN' : {
		'left':'Left',
		'right':'Right',
		'center':'Center',
		'switcher':'Switch',
		'title' :'LEFT TO RIGHT',
	},
	'AR' : {
		'left':'يمين',
		'right':'يسار',
		'center':'منتصف',
		'switcher':'تغيير',
		'title' :'يمين الى يسار',
	},
};

function switchLanguage(){
	if(lang === 'AR'){
		removeArabic();
		return;
	}

	if(lang === 'EN'){
		addArabic();
		return;
	}
}

function setContent(){
	for (var translation in translations[lang]){
		if(translation !== 'title'){
			document.getElementById(translation).innerHTML = translations[lang][translation];
		}else{
			document.title = translations[lang][translation];
		}
	}
}

function addArabic(){
	localStorage.setItem('lang','AR');
	lang = 'AR';
	var head = document.head,
	link = document.createElement('link');
	link.href="style-rtl.css";
	link.type="text/css";
	link.rel="stylesheet";
	link.id="arabic-sheet";
	head.appendChild(link);
	setContent();
	return;
}

function removeArabic(){
	localStorage.setItem('lang',defaultLang);
	lang = defaultLang;
	var sheet = document.getElementById('arabic-sheet');
	if(sheet){
		sheet.remove();
	}
	setContent();
	return;
}

//executes when dom is loaded
(function(){
	if(!lang || lang === 'EN'){
		removeArabic();
		return;
	}

	if(lang === 'AR'){
		addArabic();
		return;
	}
})();