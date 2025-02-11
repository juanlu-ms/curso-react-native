const LISTA_JUEGOS_API_URL = "https://www.freetogame.com/api/games";

export async function getLatestGames() {
	return fetch(LISTA_JUEGOS_API_URL).then((response) => response.json());
}

export async function getGameDetailsById(id) {
	return fetch(`https://www.freetogame.com/api/game?id=${id}`).then(
		(response) => response.json()
	);
}
