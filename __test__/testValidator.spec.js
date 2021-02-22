import { runValidator } from '../src/client/js/validator'

describe("Testing our IIFE runValidator() function", ()=>{
    test("Testing that an input URL is defined", ()=>{
        expect(runValidator).toBeDefined();
    })
});
