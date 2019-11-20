// import "babel-polyfill";
import { init } from "./app";

describe("getPeople", () => {
    it("should return luke when called with param", async () => {
        const luke = await init();
        expect(luke.name).toBe("Luke Skywalker");
    });
});
