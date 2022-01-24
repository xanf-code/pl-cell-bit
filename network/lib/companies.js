import { client } from "../apiClient";

export function getCompany() {
    return client.get('/get/companies');
}

export function deleteCompany(cid) {
    return client.delete(`/company/${cid}`);
}