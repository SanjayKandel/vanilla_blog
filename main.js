import display_card from "./modules/card.js";

//mock api
const api_url = "https://dummyapi.io/data/api/user";
const app_id = "60fe5ea584f38a5682c690a5";

let posts = [];
console.log("hello");

//get posts
async function fetch_posts() {
  const res = await fetch(api_url, {
    method: "GET",
    headers: {
      "app-id": app_id,
    },
  });
  posts = await res.json();
}

async function get_posts() {
  await fetch_posts();
  display_card(posts.data);
}

get_posts();
