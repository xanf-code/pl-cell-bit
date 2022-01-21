import { client } from "../apiClient";

export function getStatus() {
    return client.get('/status');
}

export function addStatus(company, status) {
    return client.post('/status', {
        company: company,
        status: status
    });
}