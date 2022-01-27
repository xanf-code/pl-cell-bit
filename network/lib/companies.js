import { client } from "../apiClient";

export function getCompany() {
    return client.get('/get/companies');
}

export function deleteCompany(cid) {
    return client.delete(`/company/${cid}`);
}

export function addCompany(company) {
    return client.post('/add/company', {
        companyName: company.CompanyName,
        companyLogo: company.CompanyLogo,
        salary: company.Salary,
        pdfLink: company.PDF,
        eligibility: {
            branches: company.Branches,
            academics: company.Academics,
            backlogs: company.Backlogs
        },
        meta: {
            companyBond: company.Bond,
            internship: company.Internship,
            otherDetails: company.Extras
        }
    });
}

export function getSingleCompany(cid) {
    return client.get(`/get/company/${cid}`);
}