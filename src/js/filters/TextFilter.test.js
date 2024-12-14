import  {describe, expect, it} from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import Challenge from '../Challenge';
import TextFilter from './TextFilter';

describe('TextFilter', () => {
    describe('doesChallengeMatch()', () => {
        it('returns true when not searching', () => {
            const data = mockChallengeData();
            const filter = new TextFilter();
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });

        it('returns true when title matches', () => {
            const data = mockChallengeData({ title:'Hacking' });
            const filter = new TextFilter('Hacking');
            const result = filter.doesChallengeMatch(new Challenge(data));

            expect(result).toBe(true);
        });
    });
});