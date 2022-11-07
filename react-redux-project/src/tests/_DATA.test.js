var getUsers = require('../utils/_DATA/_getUsers')

describe('getusers', () => {
    it('go the users', async() => {
        var length = 4;
        var result = await Object.keys(getUsers()).length;
        expect(result).toEqual(length);
    })
})