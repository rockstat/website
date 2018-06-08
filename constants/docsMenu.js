export let menuDocs = {
	'getting-started': {
     	title: 'С чего начать',
      parent: 'docs'
    },
  	'about': {
    	title: 'О проекте',
      parent: 'getting-started'
    },
  	'setup': {
    	title: 'Установка платформы',
      parent: 'getting-started'
    },
  
	'collecting': {
     	title: 'Получение данных',
      parent: 'docs',

    },
  	'colliect-jslib': {
    	title: 'Сбор с сайта через JSLib',
      parent: 'collecting'
    },
  	'collect-webhooks': {
    	title: 'Получение Webhooks',
      parent: 'collecting'
    }
}
