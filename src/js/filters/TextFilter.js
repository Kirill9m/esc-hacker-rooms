export default class TextFilter {
    constructor(searchString){
        this.searchString = searchString;
    }
    doesChallengeMatch(challenge) {
        if (!this.searchString) {
            return true;
        }

        const title = challenge.data.title.toLowerCase();
        const description = challenge.data.description.toLowerCase();
        const searchString = this.searchString.toLowerCase();
        return title.includes(searchString) || description.includes(searchString);
    }
}