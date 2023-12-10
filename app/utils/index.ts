export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '41e6f33242mshd7b25690f8a03d0p10345bjsn3e3f1cb47d4f',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers: headers});

    const result = await response.json();

    return result
}