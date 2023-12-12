interface PredictionOptions {
    title: string;
    experience: number;
    gender: string;
    country: string;
    education: string;
}

const BACKEND_URL = "https://salarease-backend.vercel.app/calculate";

export async function calculateSalary(options: PredictionOptions) {
    const { title, experience, gender, country, education } = options;

    let result = [100000, 200000];

    try {
        const requestUrl = `${BACKEND_URL}?title=${title}&experience=${experience}&gender=${gender}&${country}${education}`;
        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        result = responseJson;
    } catch (e) {}

    return result;
}
