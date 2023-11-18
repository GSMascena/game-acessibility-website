import { article } from "./article";


export const articleDatabase : article[] = [
    {
        articleId: 1,
        articleImg: "https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg",
        articleTitle: "The Last of Us Part 1",
        articleDescription: "Uma revolução de acessibilidade",
        articleElements:     [
            {
                elementType : 'h2',
                elementContent : 'The Last of Us Part 1'
            },
            {
                elementType : 'img',
                elementContent : 'https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-part-1-remake-tudo-sobre-plataformas-preco-la_qvue.jpg'
            },
            {
                elementType : 'p',
                elementContent : 'Uma revolução de acessibilidade'
            },
        ]
    }
]
