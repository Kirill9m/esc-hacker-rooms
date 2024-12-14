import Challenge from "./Challenge";

export default class Top3ChallengeList {
    constructor(backend) {
        this.backend = backend;
    }

    async start(listElem, elemCreator) {
        const challengesFromApi = await this.backend.loadAllChallenges();
        console.log(challengesFromApi);

        for (let i = 0; i < 3; i++) {
            const challengeData = challengesFromApi[i];
            const challenge = new Challenge(challengeData);

            const elem = challenge.render(elemCreator);
            listElem.append(elem);
        }
    }
}