export async function getAllArticleSlugs() {
  const response = await fetch("https://admin.blueengineering.dev/api/blue-articles?populate=*");
  const content = await response.json();
  return content.data.map((article) => {
    return {
      params: {
        id: article.attributes.slug
      }
    }
  });
}
