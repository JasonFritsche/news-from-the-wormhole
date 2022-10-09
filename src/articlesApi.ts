export const getArticles = async (
  startEntries: number,
  articleType: string
) => {
  try {
    const articles = await (
      await fetch(
        `https://api.spaceflightnewsapi.net/v3/${articleType}?_limit=${startEntries}`
      )
    ).json()
    return { success: true, articles: articles }
  } catch (error) {
    return { success: false, error: error }
  }
}
