import Challenge from "./Challenge";
import Menu from "./Menu";

const menu = new Menu();
menu.add();

for (let x = 0; x < 3; x++) {
const challenge = new Challenge({
    title: 'Challenge: ' + x,
    description: "Hello, this is description",
    type: 'online',
    minParticipants: 2,
    maxParticipants: 5,
    rating: 2,
    image: "https://placecats.com/600/400",
    tags: ['foo', 'bar']
});

const elem = challenge.render(document);

document.querySelector(".popular-rooms").append(elem);
}