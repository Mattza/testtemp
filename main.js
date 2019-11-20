async function getPeople(id) {
    const url = `https://swapi.co/api/people/${id}`;
    const resp = await fetch(url);
    if (resp.ok) {
        const json = resp.json();
        return json;
    }
    throw resp.statusText;
}

export { getPeople };
