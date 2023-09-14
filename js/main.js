// co ptorzeba
/*
przycisk *
ikonkę serduszka *
spana z liczbą polubień *
zdjęcie aby móc dodawac nowe zdjęcia (tworzenie nowego atrybutu)
trzeba tworzyć kartę
*/

const cardsSection = document.querySelector(".cards");
const loadBtn = document.querySelector(".load-btn");
const heart = document.querySelectorAll(".fa-heart");
const likes = document.querySelector(".likes");

const createCard = () => {
	const card = document.createElement("div");
	// user info
	const cardUserInfoSection = document.createElement("div");
	const Userphoto = document.createElement("img");``
	// photo
	const cardPhotoSection = document.createElement("div");
	const cardPhoto = document.createElement("img");
	// icons
	const cardIcons = document.createElement("div");
	const heartIcon = document.createElement("i");
	const commentIcon = document.createElement("i");
	const sentIcon = document.createElement("i");
	// likes section
	const cardStatsSection = document.createElement("div");
	const pLikes = document.createElement("p");
	const spanLikes = document.createElement("span");
	// description section
	const cardDescriptionSection = document.createElement("div");
	const pDescription = document.createElement("p");

	card.classList.add("card");
	cardUserInfoSection.classList.add("card__user-info");
	Userphoto.classList.add("user-photo");
	cardPhotoSection.classList.add("card__photo");
	cardPhoto.classList.add("photo");
	cardIcons.classList.add("card__icons");
	heartIcon.classList.add("fa-regular", "fa-heart", "icon");
	commentIcon.classList.add("fa-regular", "fa-comment", "icon");
	sentIcon.classList.add("fa-regular", "fa-paper-plane", "icon");
	cardStatsSection.classList.add("card__stats");
	spanLikes.classList.add("likes");
	cardDescriptionSection.classList.add("card__description");

	cardUserInfoSection.append(Userphoto);
	cardPhotoSection.append(cardPhoto);
	cardIcons.append(heartIcon, commentIcon, sentIcon);
	pLikes.appendChild(spanLikes);
	cardStatsSection.append(pLikes);
	cardDescriptionSection.appendChild(pDescription);

    card.append(cardUserInfoSection, cardPhotoSection, cardIcons, cardStatsSection, cardDescriptionSection);

	cardsSection.append(card);
};

loadBtn.addEventListener("click", createCard);
