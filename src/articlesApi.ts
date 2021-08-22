export const getArticles = async (
  startEntries: number,
  articleType: string
) => {
  const articles = await (
    await fetch(
      `https://api.spaceflightnewsapi.net/v3/${articleType}?_limit=${startEntries}`
    )
  ).json()
  return articles
}
