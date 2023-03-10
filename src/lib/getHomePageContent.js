export async function getHomePageContent() {
  const response = await fetch("https://admin.blueengineering.dev/api/blue-home-page")
  const content = await response.json()
  return content.data
}
