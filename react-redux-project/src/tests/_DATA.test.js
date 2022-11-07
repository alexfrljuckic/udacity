
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe('getusers', () => {
    it('go the users', async() => {
        var l = 4;
        var result = await _getUsers();

        expect(Object.keys(result).length).toEqual(l);
    })
})

describe('_getQuestions', () => {
    it('go get the questions', async() => {
        var l = 6;
        var result = await _getQuestions();

        expect(Object.keys(result).length).toEqual(l);
    })
})

describe('_saveQuestion', () => { 
    it('Saved question success', async() => {
        const question = {
            optionOneText : "one",
            optionTwoText : "two",
            author : "you"
        }

        var result = await _saveQuestion(question);
        expect(result.author).toEqual("you")
        expect(result.optionOne.text).toEqual("one")
        expect(result.optionTwo.text).toEqual("two")
    })

    it('failed to save question', async() => {
        const emptyObject = {}
        await expect(_saveQuestion(emptyObject)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
    })
 })

 describe('_saveQuestionAnswer', () => {
    jest.setTimeout(10000)
    it('successful save question answer', async() => {
        const testObj = {
            authedUser : "sarahedo",
            qid : "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        }
        var result = await _saveQuestionAnswer(testObj);
        expect(result).toEqual(true);
    })

    it('failed to save question answer', async() => {
        const emptyObject = {};
        await expect(_saveQuestionAnswer(emptyObject)).rejects.toEqual("Please provide authedUser, qid, and answer");
    })

    
 })