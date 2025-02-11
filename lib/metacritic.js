const LISTA_JUEGOS_API_URL = "https://www.freetogame.com/api";

export async function getLatestGames() {
	return fetch(`${LISTA_JUEGOS_API_URL}/games`).then((response) =>
		response.json()
	);
}

export async function getGameDetailsById(id) {
	return fetch(`${LISTA_JUEGOS_API_URL}/game?id=${id}`).then((response) =>
		response.json()
	);
}
