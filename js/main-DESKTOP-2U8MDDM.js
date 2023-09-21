// co ptorzeba
/*
przycisk *
ikonkę serduszka *
spana z liczbą polubień *
zdjęcie aby móc dodawac nowe zdjęcia (tworzenie nowego atrybutu)
trzeba tworzyć kartę
*/

// nie działa napisywanie zmiennej hearts (po stworzeniu nowej karty ikonka serduszka się nie dodaje)
// pomysł na rozwiązanie problemu pushowanie nowostworzonego elementu do tablicy (nie działa)

const cardsSection = document.querySelector('.cards');
const loadBtn = document.querySelector('.load-btn');
const hearts = document.querySelectorAll('.fa-heart');
const heartIconsArray = Array.from(hearts);

const URL = 'https://dog.ceo/api/breeds/image/random';

const createUserInfo = () => {
	const cardUserInfoSection = document.createElement('div');
	const userPhoto = document.createElement('img');
	const userNickname = document.createElement('h2');

	cardUserInfoSection.classList.add('card__user-info');
	userPhoto.classList.add('user-photo');
	userNickname.classList.add('user-nickname');

	userPhoto.setAttribute('src', './img/blank-profile-picture-973460_640.png');
	userNickname.textContent = 'user';

	cardUserInfoSection.append(userPhoto, userNickname);

	return cardUserInfoSection;
};

const createCardPhoto = () => {
	const cardPhotoSection = document.createElement('div');
	const cardPhoto = document.createElement('img');

	cardPhotoSection.classList.add('card__photo');
	cardPhoto.classList.add('photo');

	fetch(URL)
		.then(res => res.json())
		.then(data => cardPhoto.setAttribute('src', data.message))
		.catch(err => console.log(err));

	cardPhoto.setAttribute('alt', 'photo');

	cardPhotoSection.append(cardPhoto);

	return cardPhotoSection;
};

const createIcons = () => {
	const cardIcons = document.createElement('div');
	const heartIcon = document.createElement('i');
	const commentIcon = document.createElement('i');
	const sentIcon = document.createElement('i');

	cardIcons.classList.add('card__icons');
	heartIcon.classList.add('fa-regular', 'fa-heart', 'icon');
	commentIcon.classList.add('fa-regular', 'fa-comment', 'icon');
	sentIcon.classList.add('fa-regular', 'fa-paper-plane', 'icon');

	heartIconsArray.push(heartIcon); // Dodawanie do tablicy
	cardIcons.append(heartIcon, commentIcon, sentIcon);

	return cardIcons;
};

const createdCardStats = () => {
	const cardStatsSection = document.createElement('div');
	const pLikes = document.createElement('p');
	const spanLikes = document.createElement('span');

	cardStatsSection.classList.add('card__stats');
	spanLikes.classList.add('likes');

	pLikes.textContent = 'Likes: ';
	spanLikes.textContent = (Math.random() * 1000).toFixed(0);

	pLikes.appendChild(spanLikes);
	cardStatsSection.append(pLikes);

	return cardStatsSection;
};

const createCardDescription = () => {
	const cardDescriptionSection = document.createElement('div');
	const pDescription = document.createElement('p');

	cardDescriptionSection.classList.add('card__description');

	pDescription.textContent =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quae mollitia quam repellendus. Fuga optio harum numquam id magnam quia vero voluptates deserunt vel? Voluptatem expedita eum a quisquam atque.';

	cardDescriptionSection.appendChild(pDescription);

	return cardDescriptionSection;
};

const createCard = () => {
	for (let i = 0; i < 3; i++) {
		const card = document.createElement('div');
		const cardUserInfoSection = createUserInfo();
		const cardPhotoSection = createCardPhoto();
		const cardIconsSection = createIcons();
		const cardStatsSection = createdCardStats();
		const cardDescriptionSection = createCardDescription();

		card.classList.add('card');

		card.append(cardUserInfoSection, cardPhotoSection, cardIconsSection, cardStatsSection, cardDescriptionSection);

		cardsSection.append(card);
	}

	heartIconsArray.forEach(heart => {
		heart.addEventListener('click', () => {
			console.log(heart);
			console.log(heartIconsArray);
			if (heart.classList.contains('fa-regular')) {
				heart.classList.remove('fa-regular');
				heart.classList.add('fa-solid');
				heart.classList.add('icon--follow');
			} else {
				heart.classList.remove('fa-solid');
				heart.classList.remove('icon--follow');
				heart.classList.add('fa-regular');
			}
		});
	});
};

loadBtn.addEventListener('click', createCard);
