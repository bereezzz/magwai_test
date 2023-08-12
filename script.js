//КАРТОЧКИ
const cardsContainer = document.getElementById("cards");
let loadMoreButton = document.getElementById("loadMoreButton");
let currentIndex = 2;
let savedCardsData;

fetch("https://my-json-server.typicode.com/bereezzz/magwaiDb/cards")
  .then((response) => response.json())
  .then((cardsData) => {
    [...cardsData["1"], ...cardsData["2"]].forEach((card) => {
      savedCardsData = cardsData;
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

loadMoreButton.addEventListener("click", function () {
  currentIndex++; // Увеличиваем текущий индекс
  if (currentIndex === 3) {
    savedCardsData["3"].forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  } else if (currentIndex === 4) {
    savedCardsData["4"].forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  } else if (currentIndex === 5) {
    savedCardsData["5"].forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
  } else if (currentIndex === 6) {
    savedCardsData["6"].forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContainer.appendChild(cardElement);
    });
    loadMoreButton.disabled = true;
  }
});

function createCardElement(cardData) {
  const cardElement = document.createElement("article");
  cardElement.className = "card";

  const imgElement = document.createElement("img");
  imgElement.src = cardData.img;
  imgElement.className = "imgCard";
  imgElement.alt = "карточка";

  const divElement = document.createElement("div");
  divElement.className = "bodyCard";

  const h3Element = document.createElement("h3");
  h3Element.textContent = cardData.name;
  h3Element.className = "h3Element";

  const h4Element = document.createElement("h4");
  h4Element.textContent = cardData.title;
  h4Element.className = "h4Element";

  const p1Element = document.createElement("p");
  p1Element.textContent = cardData.text;
  p1Element.className = "p1Element";

  const p2Element = document.createElement("p");
  p2Element.textContent = cardData.posted;
  p2Element.className = "p2Element";

  const div2Element = document.createElement("div");
  div2Element.className = "divContinueBtn";

  const aElement = document.createElement("a");
  aElement.className = "continueBtn";
  aElement.textContent = "Continue reading";

  cardElement.appendChild(imgElement);
  cardElement.appendChild(divElement);
  divElement.appendChild(h3Element);
  divElement.appendChild(h4Element);
  divElement.appendChild(p1Element);
  divElement.appendChild(p2Element);
  divElement.appendChild(div2Element);
  div2Element.appendChild(aElement);

  return cardElement;
}
///ФОРМА
const openPopupButton = document.getElementById("openPopupButton");
const openPopupButtonMobile = document.getElementById("openPopupButtonMobile");
const openPopupButtonImg = document.getElementById("openPopupButtonImg");
const closePopupButton = document.getElementById("closePopupButton");
const popupOverlay = document.getElementById("popupOverlay");

openPopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "flex";
});
openPopupButtonImg.addEventListener("click", function () {
  popupOverlay.style.display = "flex";
});
openPopupButtonMobile.addEventListener("click", function () {
  popupOverlay.style.display = "flex";
});

closePopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "none";
});

// Валидация формы
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var messageInput = document.getElementById("messageInput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Простая валидация на пустые поля
    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      alert("Заполните все поля!");
    } else if (!isValidEmail(emailInput.value)) {
      alert("Введите корректный Email!");
    } else {
      // Ваш код для обработки успешной отправки формы
      alert("Форма успешно отправлена!");
    }
  });

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
