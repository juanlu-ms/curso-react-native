const RANDOM_NUMBERS_URL = "https://www.randomnumberapi.com/api/v1.0/random";

export async function getRandomNumber() {
	return fetch(RANDOM_NUMBERS_URL).then((response) => response.json());
}
