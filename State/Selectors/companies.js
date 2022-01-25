import { selector } from "recoil";
import { getCompany } from "../../network/lib/companies";
import { getCompanyAtom } from "../Atoms";

export const companySelector = selector({
    key: "companySelector",
    get: async ({ get }) => {
        const company = get(getCompanyAtom);
        const getCompanyCall = await getCompany();
        return company.concat(getCompanyCall.data);
    }
})