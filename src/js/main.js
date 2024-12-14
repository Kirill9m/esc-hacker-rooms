import ApiBackend from "./ApiBAckend";
import Challenge from "./Challenge";
import Menu from "./Menu";

const menu = new Menu();
menu.add();

const backend = new ApiBackend("https://lernia-sjj-assignments.vercel.app/api");

const challenges = await backend.loadAllChallenges();
console.log(challenges);
for (let x = 0; x < 3; x++) {
const challenge = new Challenge(challenges[x]);

const elem = challenge.render(document);

document.querySelector(".popular-rooms").append(elem);
}