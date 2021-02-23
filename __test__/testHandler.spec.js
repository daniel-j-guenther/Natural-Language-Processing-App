import { runHandler } from '../src/client/js/handler'

describe("Testing our IIFE runHandler() function", () => {
    test("Testing ", () => {
        expect(runHandler).toBeDefined();
    })
});
describe('Testing web address validation success' , () => {
    test('Test that runValidator returns "SUCCESS!" if succesful', () => {
        const data = [{'result': { 'lang': 'one' }},
         { 'result': { 'polarity': 'two' ,'subjectivity': 'negative'}},
          {'result': {'sentences': ['one sentence', 'two sentence']}}]

        document.body.innerHTML = `<div class="polarity"></div><div class="extra"></div><article></article>`
        window.onload = () => {
            pol = document.querySelector('.polarity')
            extra = document.querySelector('.extra')
            article = document.querySelector('article')

            expect(displayData(data)).toBe(undefined)
        }
    })
})