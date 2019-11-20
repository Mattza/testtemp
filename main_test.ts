// import "babel-polyfill";
import { getPeople } from "./main";

describe("getPeople", () => {
    it("should return luke when called with param", async () => {
        const luke = await getPeople(1);
        expect(luke.name).toBe("Luke Skywalker");
    });
});
