class Card {
    constructor(name, link, previewPop) {
        this.name = name;
        this.link = link;
        this.PreviewPopup = previewPop;
    }

    create() {
        const placeCard = document.createElement('div');
        const placeCardImage = document.createElement('div');
        const placeCardDeleteIcon = document.createElement('button');
        const placeCardDescription = document.createElement('div');
        const placeCardName = document.createElement('h3');
        const placeCardLikeIcon = document.createElement('button');

        placeCardImage.className = 'place-card__image';
        placeCard.className = 'place-card';
        placeCardImage.style.backgroundImage = `url(${this.link})`;
        placeCardDeleteIcon.className = 'place-card__delete-icon';
        placeCardDescription.className = 'place-card__description';
        placeCardName.className = 'place-card__name';
        placeCardLikeIcon.className = 'place-card__like-icon';
        placeCardName.innerText = this.name;

        placeCardImage.appendChild(placeCardDeleteIcon);
        placeCardDescription.appendChild(placeCardName);
        placeCardDescription.appendChild(placeCardLikeIcon);

        placeCard.appendChild(placeCardImage);
        placeCard.appendChild(placeCardDescription);
        placeCard.addEventListener('click', (event) => this.handlerClickOnCard(event, this.link));
        this._card = placeCard;

        return placeCard;
    }

    handlerClickOnCard(event, link) {
        const target = event.target;
        if (target.classList.contains('place-card__delete-icon')) {
            this.remove(event);
        } else if (target.classList.contains('place-card__like-icon')) {
            this.like(event);
        } else {
            this.PreviewPopup.open(link);
        }
    }

    like(event) {
        event.target.classList.toggle('place-card__like-icon_liked')
    }

    remove(event) {
        this._card.remove();
    }
}