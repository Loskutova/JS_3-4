var page = {
	pageTitle: 'Тест по програмированию',

	className:[
	{
		SubclassName : "Вопрос №1",

		answers:[
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['11','12','13']
		
	},
	{
		SubclassName : "Вопрос №2",

		answers:[
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['21','22','23']
	},
	{
		SubclassName : "Вопрос №3",

		answers: [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3'
		],
		inputName: ['31','32','33']
	}
	],
	result: "Проверить мои результаты"

	
}


	for(var i = 0; i < page.className.length; i++){
			console.log( page.className[i].SubclassName );

		for(var j = 0; j < page.className[i].answers.length; j++) {
			console.log( page.className[i].answers[j] );
		}
	}

var sheet = {
	buildPage : function () {
		var wrap = document.createElement('form');
		wrap.classList.add('wrapper');
		
		var body = document.querySelector('body');
		document.body.insertBefore(wrap, body.children[0]);

		var h1 = document.createElement('h1');
		wrap.appendChild(h1);
		h1.innerHTML = page.pageTitle;
	},
	buildTask : function () {

		for(var i = 0; i < page.className.length; i++){
			var wrapper = document.querySelector('.wrapper');
			var box = document.createElement('div');
			box.classList.add('box');
			wrapper.appendChild(box);
			
			var span = document.createElement('p');
			box.appendChild(span)
			span.innerHTML = (i+1) + '. ' + page.className[i].SubclassName;

			console.log( page.className[i].SubclassName );

			var listWrap = document.createElement('ul');
			box.appendChild(listWrap);

			for(var j = 0; j < page.className[i].answers.length; j++) {
				console.log( page.className[i].answers[j] );

				var listItem = document.createElement('li');
				listWrap.appendChild(listItem);
				var label = document.createElement('label');
				listItem.appendChild(label);
				// 	

				var input = document.createElement('input');
				label.appendChild(input);
				input.setAttribute('type', 'checkbox');
				input.setAttribute('name', page.className[i].inputName[j])

				var spanLabel = document.createElement('span')
				label.appendChild(spanLabel);

				spanLabel.innerHTML = page.className[i].answers[j];

			}
		}
	},
	btn: function () {
		var box = document.querySelector('.wrapper');
		var btn = document.createElement('input');
		box.appendChild(btn);
		btn.setAttribute('type', 'submit');
		btn.classList.add('btn');
		btn.value = page.result;
	},
	sheetInit: function() {
		this.buildPage();
		this.buildTask();
		this.btn();
	}
}

sheet.sheetInit();