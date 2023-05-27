import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator } from "@/shared/config/storybook/Decorators/StoreDecorator";
import { type Article, ArticleBlockType, ArticleType } from "@/entities/Article";
import ArticlesDetailsPage from './ArticleDetailsPage'
import withMock from "storybook-addon-mock";

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: {
        id: 1,
        username: "admin"
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: "2",
            type: ArticleBlockType.IMAGE,
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            title: "Рисунок 1 - скриншот сайта"
        },
        {
            id: "3",
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            id: "7",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: "8",
            type: ArticleBlockType.IMAGE,
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            title: "Рисунок 1 - скриншот сайта"
        },
        {
            id: "9",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
            ]
        },
        {
            id: "10",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
        },
        {
            id: "11",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        },
        {
            id: "12",
            type: ArticleBlockType.IMAGE,
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            title: "Рисунок 1 - скриншот сайта"
        },
        {
            id: "13",
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            id: "14",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
            ]
        }
    ]
}
const mockRecommendRequest: Article[] = [
    {
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        user: {
            id: 1,
            username: 'admin'
        },
        type: [
            ArticleType.IT
        ],
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "4",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "5",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "2",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "3",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "7",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "8",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "9",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
                ]
            },
            {
                id: "10",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "11",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "12",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "13",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "14",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ]
    },
    {
        id: "2",
        title: "Python news",
        subtitle: "Что нового в Python за 2022 год?",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png",
        views: 1241,
        createdAt: "22.03.2023",
        user: {
            id: 2,
            username: 'user'
        },
        type: [
            ArticleType.IT
        ],
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "4",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "5",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "2",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "3",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "7",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "8",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "9",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
                ]
            },
            {
                id: "10",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "11",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "12",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "13",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "14",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ]
    },
    {
        id: "3",
        title: "JAVA news",
        subtitle: "Что нового в JAVA за 2022 год?",
        img: "data:image/png;base64,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",
        views: 1845,
        createdAt: "12.01.2023",
        user: {
            id: 2,
            username: 'user'
        },
        type: [
            ArticleType.IT
        ],
        blocks: [
            {
                id: "1",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "4",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "5",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "2",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "3",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "7",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "8",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "9",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы."
                ]
            },
            {
                id: "10",
                type: ArticleBlockType.CODE,
                code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
            },
            {
                id: "11",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            },
            {
                id: "12",
                type: ArticleBlockType.IMAGE,
                src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
                title: "Рисунок 1 - скриншот сайта"
            },
            {
                id: "13",
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
            },
            {
                id: "14",
                type: ArticleBlockType.TEXT,
                title: "Заголовок этого блока",
                paragraphs: [
                    "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                    "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"
                ]
            }
        ]
    }

]
const mockCommentRequest = {

}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticlesDetailsPage,

    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        withMock,
        StoreDecorator({
            articleDetails: {
                data: article
            }
        })
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: mockRecommendRequest
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: mockCommentRequest
            }
        ]
    }
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
};
