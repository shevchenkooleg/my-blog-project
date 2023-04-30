import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from "app/providers/ThemeProvider";
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from "shared/config/storybook/Decorators/StoreDecorator";


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
    // decorators: [
    //     StoreDecorator({
    //         articlesPage: {
    //             ids: ['1', '2', '3', '4'],
    //             entities: {
    //                 1: {
    //                     id: "1",
    //                     title: "Javascript news",
    //                     subtitle: "Что нового в JS за 2022 год?",
    //                     img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    //                     views: 1022,
    //                     createdAt: "26.02.2022",
    //                     type: [
    //                         ArticleType.IT
    //                     ],
    //                     blocks: [
    //                         {
    //                             id: "1",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "4",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "5",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "2",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "3",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "7",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "8",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "9",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
    //                             ]
    //                         },
    //                         {
    //                             id: "10",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "11",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "12",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "13",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "14",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 2: {
    //                     id: "2",
    //                     title: "Python news",
    //                     subtitle: "Что нового в Python за 2022 год?",
    //                     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png",
    //                     views: 1241,
    //                     createdAt: "22.03.2023",
    //                     type: [
    //                         ArticleType.IT
    //                     ],
    //                     blocks: [
    //                         {
    //                             id: "1",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "4",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "5",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "2",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "3",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "7",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "8",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "9",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
    //                             ]
    //                         },
    //                         {
    //                             id: "10",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "11",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "12",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "13",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "14",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 3: {
    //                     id: "3",
    //                     title: "JAVA news",
    //                     subtitle: "Что нового в JAVA за 2022 год?",
    //                     img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAxlBMVEX////hHyHfAAANbrYAYLDhGhwAYrEAZbLgExYAabQAa7UAZ7PoaGnhNjkAX7AAZLL99fb76urgDxLgAgjwrq7pdnf65eX1+PsAWK1xncvi6vOjvduBp9DR3u0AXK/Y4+/mXV731dXsj5Dzubr0xMTkRUfvoKDt8vi90OVmlsg0fLxYjsS4zOP53d388fHwqKnrhYb2y8vob3AAVKycudlEg7/iKCrnYmPlVFbiMDEldrmPsNWvxeAATqqfu9rtlpbjP0HsiYlvn3hdAAAKjElEQVR4nO2daXeiShCGx2aHBBVMDFvc4opGYzQx6o0z//9P3V4AmwQSM5MZBPr5MsLBOeV7uouq6k7Xjx8MRjnpZW1Anjg8ZG1Bjrh7ytqCHDEDnaxNyA91sMjahPxQB5dZm5AfZgBkbUJ+uAPgPmsbcsPAZGKdzEYGtaxtyAs1UGE+61TmprzJ2obcIAjmIGsb8sIczsLrrI3ICdBjCf2sjcgLG7kC7rI2Iid04cB6ydqInNAAlQpg5ayTuINaGcusrcgHPaiVYGRtRT5Ac7DCCn8n0cVazbM2Ixc8Y62usjYjD9y/GEirize3O2yl5z0PQEBatWM3r7usGJ/AAU3BCnim7zV+gn49K4POmA3RivJX910AAFuZfs91xcBaHaI791fABM+sWvqeO+yuBGoc/QKGzIZVEgM8BWUhKmH1gFkBfbZikcAV1sqMKli1Nkqlu1madLYsiWuPwqsOMOCMZPWsJJZvXoMoOxTALEuTzpbFG60GWCsWXCXRw1oZ7fB6jrNDtliRRB1rJUQ71zpYK+avEtnIldhIEmC8ZbCqQyIdEjT8Cq8PJpKOxVeJLEiSE10j7eS3JRoG4RJlOUY0sLC3N1mdNBkSNkQV9ytc/GtkadEZA+KzsI8GGtsRkgKahsJxp+0TEovtNUoBzTtqC8iLgEcaC98TQavPws/oso2jLhZnpWDGfFYXXcIbLItOBKXNx/idxKhsC00askC//irYaVVMtvqVCPRaxzSa1BwqbMdRGkuTrjIIQqAWW9ZJ5EmgfNRdMLTYBq1k6oDeNrM0g6HF6n+JPAC6KvMU+PjDB98oMw1ApTikdlqRnz/4QqkZAKrU8EBWXFmGmMYBUAnhEhVqZObhUzlQf+U7Y1slP2FAbaCRWaD1CfNjsLARqDUMRhK9SvipD+P4LC3JA3fhGxEIySHp0G7+Q3POjeZwSF8GZawHkPBHA56lPN7ovGJ5/8Sys2I42vnc1h0lDZV+QvFv6nq2PRrrqqKvhwnfKS4jl7t5XO9TfvT8Mv1FaG8VThXtv2TX+eFZYpVXV6nep/Pxjr+JyqlSSVyXw4kKV3U+eOKTakNT5DjN+labzhSnKqkcJ01P/0aztXdXsWnnahynl2BouTyHUP3PXXTT9vY7a13VH9dvPJRX5bjq6C9ZeEbsblWiFr+1nJFnD6kB0mzadssb7Z2dO15vdV6sStUqr0/eRQpDOA+l/b80OyM8nxc1FSqmKpokirzOR0B5RCiQpCmKommaVNW58cpLmG52WcSCeI41EXksC9RFVVQM/EfRoIBIQZ7zrdW0leaWRhLHiWWKTKFHmu5XO9caj33MeGy57s7Zw7n5me8ew4Gp/RMr889Qh7Nwl7UVOcFXoMfL2oh/z2/FSg4MHG5b323KudMa/84bzYOT8LYEQVaMpn+7/o2vQa1UvkxvQoRdVdTJZw8N39Vv9jonbctVoPkReOnJNK3UAlMd19f4qhp3Thav8Ku/b9y54Yoo6ZFEnluP3d1qPx1hSK6j6jBkVXBipLvHwWVved0qQQL9HktXOJImwsgdBu4STAQlnOuoJH3kiJq6H44+95F3SzcDA2xLhFkil4KqSFWeGzvRNNzfrr9Q1ykg3gr5JUlSgvwQDjKYQ0tVUVfWrkPn0ENrX8r594Zma+SgFJEkiBZMD6deeSrsDAYjVwx3Zctcfh/r1s/ahNzAaZyUttTa9PasvkexRxmPxm/HO2qdp2l7I8f1FV6UNOk1YwvPCPs2SHfQSo4YrvGIUCUlCOyl1IFXPka8lpbtBGg3aulqomk0XV5Kzw41ntsxqSiae58PqzFHmWAWLYq+U/qsZzjd+ZPtmC4geI61VtBqvYiAXmsy3qVWBcuD56o3N/4+UYih3fI8r2V/WrGyyxDHNneKeDv5hpqUWHxH5uqaqn3HEtbwpuhVeE9SYNj0HRPIU5SCx14ejj/VP97b2NxPHv2Ca4X2zCIU8Q/2sNtTd3LzuC6+e3f1IJJSqvp6l77zKpGhN11ZE17Xb7ld9CJtFngFf7rlpWApR0V7+pS1hYrtrdg+yYjmMNgvafkTTRfFKkod/Vcq5PCKvQEXRaMcWjzFmyTD9Bnnz1WV224nkO12y2n4llglGwPRXsCqvrWcWLjQ8v8rw7KYPXLc8USCoyXYJKlGKQ4m/KyQSoS0Rtsl4/8FdPL6TUl2lBJsOMtWrjVeTzitytOIGjdZj/EkTdgvOdz7ushvix+WfkAz5KOH4OuQ4yWJnxTYt38HLejwJCiUJCpu2UaVvVqNTgofhi1UY+Z0tGVEEnl/VTalMLYz1v6TJr5Fdht5XqtlQ1qtlueNpvvXnQujBgn9GUEVRQ7Q07v7UgoVASeXteb0m4DbCB2BvT3aveWcNgpLQtMm42nvOK+vr46zx4PthNIWg8FgMBiMwnJfR2RtRU5oAwg7jOc0LuTYUeaMj2BifQEm1hdgYn0BJtYXYGJ9ASbWF3gn1vVDr9Hond7ivt5Bzz+UojFWTKzOoQ9C2sEp+Qt8RcX4T+ianK9837iInn/BZ71eddq94naqo8SaV4AZnJCPTgUG5Fhg0qqP6uUEwnZFnQ0AcvS8AJ6govMfi0MpxLpArXYME44Sg3TZIWqB+OHT+Oxu3JwBH6cvo+dNrJlsFv1sXEqsBvzZl1eDRq/RfaJahZE2YZEO+OhufEp8DT4vXxwavd6ANDE3i96WhxJrdnGcQLjdPenAgAfQscv2wIz6abbn0TGAszcd/opJWuiA7lcM/BHEzjVfyomdne6i2Vlg0sQisw1/fJbpQYMa8CT17ouPv2KSJtY1iDxVgx4092k9f/spIhaJE8TC+hhBKyc83YyE/6jMYtWPYpFOkIFAXSOlGV0pxao9NA6/FosrqqnAwDy2HMWaxFzTrDfoLhaLlxL0IY2LdX+4RDGmYRgy1eoKT0kDn6xci6IsQq8dPE9ChzKJ1SX5joyg+4Kh9kQktsI9IqOGmncCzneE6PkSiXWJ0z4gbC6Wywu6t0fXCF+BqL101MivC1DXcgD6z8vl8qlcYvVRbmjOyRyjHTxJprFGqBddGDjgLn7gKjhPv1wOHoVTQiXMAa9psXDEiWYfarwTdqarxcPQcomFmiEf+xnGxQqT6YN5bKyG3pFUg/dSiVWLqfNGrDDze6FmIWoATKlTKrFmx2QQERcrqPjV6X7JL7GRWC6xOvEIqh4XCz0mP89NShAUT5jHvmGlEgurE/34OvJglFg9XN37KVCDD6lzDLkWZllCh5/oE1UcrR2AEG9Wiz0aqs4c88IFdvqkc9jdk1mGoBS5aTI+FuT3brrdNjArshlvONcPm/1GbYpIH27zadG9kqG2b9c1ishGCJcjamQ0CTgvBJueGRNrTtrXRu4dcgGC51EhAiDtii4WctNBzXhmBithggnm8O0oy5RY1wBnjLGCQztcCTPARe3HiyEXXaxjQQFyqJD10gEUqbZptzfU2tZzGxP7cm9DFlhxyvNr094Uu6w8e1M6v591Zl9a/Zt1OqXZkUpeaaX5uX/EdZghMz6nIhwLxowPqT/hCl/RF92/hQYOrABrOH4KL/JxqwzjE2oyjD6LHRl9I9dU73EGgxHxP7Qh0pJ2T/FnAAAAAElFTkSuQmCC",
    //                     views: 1845,
    //                     createdAt: "12.01.2023",
    //                     type: [
    //                         ArticleType.IT
    //                     ],
    //                     blocks: [
    //                         {
    //                             id: "1",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "4",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "5",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "2",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "3",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "7",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "8",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "9",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
    //                             ]
    //                         },
    //                         {
    //                             id: "10",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "11",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "12",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "13",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "14",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         }
    //                     ]
    //                 },
    //                 4: {
    //                     id: "4",
    //                     title: "Swift news",
    //                     subtitle: "Что нового в Swift за 2022 год?",
    //                     img: "data:image/jpeg;base64,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",
    //                     views: 1387,
    //                     createdAt: "27.12.2022",
    //                     type: [
    //                         ArticleType.IT
    //                     ],
    //                     blocks: [
    //                         {
    //                             id: "1",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "4",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "5",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "2",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "3",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "7",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "8",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "9",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
    //                             ]
    //                         },
    //                         {
    //                             id: "10",
    //                             type: ArticleBlockType.CODE,
    //                             code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
    //                         },
    //                         {
    //                             id: "11",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         },
    //                         {
    //                             id: "12",
    //                             type: ArticleBlockType.IMAGE,
    //                             src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    //                             title: "Рисунок 1 - скриншот сайта"
    //                         },
    //                         {
    //                             id: "13",
    //                             type: ArticleBlockType.CODE,
    //                             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    //                         },
    //                         {
    //                             id: "14",
    //                             type: ArticleBlockType.TEXT,
    //                             title: "Заголовок этого блока",
    //                             paragraphs: [
    //                                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
    //                                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             }
    //         }
    //     })
    // ]

} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args}/>;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
