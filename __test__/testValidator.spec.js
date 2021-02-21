import { runValidator } from '../src/client/js/validator'

describe("Testing runValidator() function", ()=>{
    test("Testing that the URL is defined", ()=>{
        expect(runValidator).toBeDefined();
    })
});
