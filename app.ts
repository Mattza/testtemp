import { getPeople } from "./main";

const init = async () => {
    const person = await getPeople(1);
    return person;
};
init();

export { init };
