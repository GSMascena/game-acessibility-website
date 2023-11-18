export type articleElement = {
  elementType: string,
  elementContent: string
}

export type article = {
  articleId : number,
  articleImg: string,
  articleTitle : string,
  articleDescription : string,
  articleElements: articleElement[]
}
