export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}}&limit=10&api_key=uZucdOQV62pLOD5GIswEBCUfkzJ2Yy3l`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};
