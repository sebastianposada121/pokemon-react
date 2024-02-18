export default class PokemonService {

    BASE_URL = import.meta.env.VITE_BASE_URL;

    async handleFetch(url) {
        try {
            const response = await fetch(url);
            if (!response?.ok) {
                throw response;
            }
            const data = await response.json();
            return new GenericReponse(response.status, response.message, true, data);
        } catch (error) {
            return new GenericReponse(error.status, error.message, false);
        }
    }

    getPokemons(params) {
        return this.handleFetch(BuildParams(this.BASE_URL + '/pokemon', params)).then(async response => ({
            ...response, data: await Promise.all(
                response?.data?.results?.map(async item => (await this.getPokemon(item.name)).data)
            )
        }))
    }

    getPokemon(name) {
        return this.handleFetch(`${this.BASE_URL}/pokemon/${name}`);
    }
}

class GenericReponse {
    constructor(
        status,
        message,
        successul,
        data
    ) {
        status && (this.status = status);
        message && (this.message = message);
        successul && (this.successul = successul);
        data && (this.data = data);
    }
}

function BuildParams(url, params = {}) {
    if (typeof url === 'string' && !(params instanceof Object)) return;
    url = new URL(url);
    return `${url}?${new URLSearchParams([
        ...Array.from(url.searchParams.entries()),
        ...Object.entries(params),
    ]).toString()}`;
}