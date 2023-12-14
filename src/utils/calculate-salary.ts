interface PredictionOptions {
    title_idx: number;
    experience: number;
    gender_idx: number;
    country_idx: number;
    education_idx: number;
}

const BACKEND_URL = "https://salarease-backend-03993713e663.herokuapp.com/calculate";

export async function calculateSalary(options: PredictionOptions) {
    const { title_idx, experience, gender_idx, country_idx, education_idx } = options;

    let result = [100000, 200000];

    try {
        let requestUrl = `${BACKEND_URL}`;
        requestUrl += `?title_idx=${title_idx}`;
        requestUrl += `&experience=${experience}`;
        requestUrl += `&gender_idx=${gender_idx}`;
        requestUrl += `&country_idx=${country_idx}`;
        requestUrl += `&education_idx=${education_idx}`;

        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        result = responseJson;
    } catch (e) {}

    return result;
}
