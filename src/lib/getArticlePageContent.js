export async function getArticlePageContent() {
  const response = await fetch("https://admin.blueengineering.dev/api/blue-article-page?populate=*")
  const content = await response.json()
  return content.data
}
