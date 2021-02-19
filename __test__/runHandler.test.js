import { runHandler } from '../src/client/js/handler'

describe("Testing the IIFE runHandler() function", () => {
    test("Testing logs", () => {
        expect(console.log).toMatch("::: New Link Submitted :::");
    }),
    test("Testing ", () => {
        expect(runHandler).toBeDefined();
    })
});
