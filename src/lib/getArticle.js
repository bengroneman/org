export async function getArticle(id) {
  const response = await fetch(`https://admin.blueengineering.dev/api/blue-article/${id}?populate=*`)
  const content = await response.json()
  return content.data
}
