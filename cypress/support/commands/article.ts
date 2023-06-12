import { cy } from "local-cypress";
import { type Article } from "@/entities/Article";

const defaultArticle = {
    title: "TEST-TITLE",
    subtitle: "Что нового в Kotlin за 2022 год?",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkH7rlu_zRmHNK5fpvdRVb_-HrPfL1Fe4iGiiCAAdf&s",
    views: 2553,
    createdAt: "16.01.2023",
    userId: "4",
    type: [
        "ECONOMIC"
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        headers: { authorization: 'testtesttest' },
        body: article ?? defaultArticle
    }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'testtesttest' }
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle: (article?: Article) => Chainable<Article>
            removeArticle: (articleId: string) => Chainable<void>
        }
    }
}
