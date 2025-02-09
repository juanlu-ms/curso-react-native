export async function getRandomNumber() {
	return fetch("https://www.randomnumberapi.com/api/v1.0/random").then(
		(response) => response.json()
	);
}
