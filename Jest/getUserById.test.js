// isUtensilAvailable.test.js

var getUserById = require('./getUserById');


describe('getUserById', () => {
    it('we got the correct user', async() => {
        var id = 1;
        var firstName = 'Kevin';
        var lastName ='Chung';
        var result = await getUserById(id);
        expect(result.id).toEqual(id);
        expect(result.firstName).toEqual(firstName);
        expect(result.lastName).toEqual(lastName);
    });

    it('will return an error if the user is not found', async() => {
        var id = 100;
        await expect(getUserById(id)).rejects.toEqual('User with ID ' + id + ' not found.');
    });
})