export default async function apiRequest(path, options = {}) {

    let baseUrl = import.meta.env.VITE_API;
    let url = baseUrl + path;
    let token = localStorage.getItem('token');

    let response = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'Application/json',
            'authorization': `Bearer ${token}`
        }
    });
    return [await response.json(), response.ok];
}
