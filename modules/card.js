// test-branch
function display_card(data) {
  let el = document.getElementById("cards");
  data.forEach((user) => {
    el.innerHTML += `<li class="item-card">${user.firstName}</li>`;
  });
}

export default display_card;
