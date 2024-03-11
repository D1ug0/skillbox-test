(async () => {
  try {
    const response = await fetch("/projects.json");
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    const data = await response.json();
    renderCards(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
})();

function fillCard(card, data) {
  const { label, title, src, alt, date, href, hit, classes } = data;
  card.querySelector(".product-card__label").textContent = label;
  card.querySelector(".product-card__title").textContent = title;
  card.querySelector(".product-card__img").src = src;
  card.querySelector(".product-card__img").alt = alt;
  card.querySelector(".product-card__date").textContent = date;
  card.querySelector(".product-card__shadow-link").href = href;
  card.querySelector(".product-card__hit").style.display = hit
    ? "block"
    : "none";
  if (classes && classes.length > 0) {
    classes.forEach((className) => {
      card.querySelector(".product-card").classList.add(className);
    });
  }
}

function createCard(data) {
  const template = document.querySelector(".template-project-card");
  const card = template.content.cloneNode(true);
  fillCard(card, data);
  return card;
}

function renderCards(data) {
  const list = document.querySelector(".courses__list");
  list.innerHTML = "";
  data.forEach((item) => {
    const card = createCard(item);
    list.appendChild(card);
  });
  list.classList.add("is-active");
}
