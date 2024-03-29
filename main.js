const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const authorSlug = document.getElementById("authorSlug")
async function getQuotes(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = "AUTHOR :- " + data.author
  authorSlug.innerHTML = "AUTHOR_SLUG :- " +data.authorSlug;
}
getQuotes(apiUrl);