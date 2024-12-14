import Rating from "./Rating";

export default class Challenge {
    constructor(data) {
        this.data = data;
    }

    render(elemCreator) {
        const container = elemCreator.createElement('article');
        container.className = "room";

        const img = elemCreator.createElement('img');
        img.src = this.data.image;
        container.append(img);

        const h2 = elemCreator.createElement('h2');
        h2.textContent = this.data.title;
        container.append(h2);

        const rating = new Rating(this.data.rating, "challengeRating");
        const ratingElem = rating.render(elemCreator);
        container.append(ratingElem);

        const groupSize = elemCreator.createElement("span");
        groupSize.className = "participants";
        groupSize.textContent = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        container.append(groupSize);

        const description = elemCreator.createElement("p");
        description.textContent = this.data.description;
        container.append(description)

        const button = elemCreator.createElement("button");
        button.className = "red-button";
        button.textContent = this.data.type == 'online' ? 'Take challenge online' : "Book this room";
        container.append(button);

        this.container = container;
        
        return container;
    }

    toggleVisibility(visible) {
        this.container.style.opacity = visible ? 1 : 0.5;
    }
}