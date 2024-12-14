import ApiBackend from "./ApiBackend";
import Menu from "./Menu";
import Top3ChallengeList from "./Top3ChallengeList";

const menu = new Menu();
menu.add();

const backend = new ApiBackend("https://lernia-sjj-assignments.vercel.app/api");

const top3List = new Top3ChallengeList(backend);
top3List.start(document.querySelector('.popular-rooms'), document);