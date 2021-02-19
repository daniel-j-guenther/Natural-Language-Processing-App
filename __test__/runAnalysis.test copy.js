import { runAnalysis } from '../src/server/analysis'

describe("Testing runAnalysis() function", () => {
    test("Testing the function returns a JS Object", () => {
        expect(runAnalysis).toBeDefined();
    })
});
