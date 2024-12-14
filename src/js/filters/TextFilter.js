export default class TextFilter {
    constructor(searchString){
        this.searchString = searchString;
    }
    doesChallengeMatch(challenge){
        return true;
    }
}