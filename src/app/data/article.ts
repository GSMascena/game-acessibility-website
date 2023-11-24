import { htmlElement } from "./htmlElement"

export type article = {
  articleId : number,
  articleImg: string,
  articleTitle : string,
  articleDescription : string,
  articleHtmlElements: htmlElement[]
}
export { htmlElement }

