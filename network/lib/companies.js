import { client } from "../apiClient";

export function getCompany() {
    return client.get('/get/companies');
}