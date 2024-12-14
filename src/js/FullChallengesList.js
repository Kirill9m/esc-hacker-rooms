import Challenge from "./Challenge";

export default class FullChallengesList{
    constructor(backend){
        this.backend = backend;
    }

    async start(listContainer, elemCreator){
        const challengesFromApi = await this.backend.loadAllChallenges();

        const listElem = elemCreator.createElement('ul');
        listElem.className = 'popular-rooms-list'
        listContainer.append(listElem)

        challengesFromApi
        .forEach(challengeData => {
        const challenge = new Challenge(challengeData);

        const liItem = elemCreator.createElement("li");
        listElem.append(liItem);

        const elem = challenge.render(elemCreator);
        liItem.append(elem);
        });
    }
}