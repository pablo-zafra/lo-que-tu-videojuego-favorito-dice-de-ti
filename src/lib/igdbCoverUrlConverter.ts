export const convertIgdbImageUrl = (url: string): string => {
  let newUrl = url.startsWith("https:") ? url : `https:${url}`;
  newUrl = newUrl.replace(/\/t_[a-z_]+\//, "/t_cover_big/");
  newUrl = newUrl.replace(/\.(jpg|png|jpeg|gif)$/, ".webp");

  return newUrl;
};
