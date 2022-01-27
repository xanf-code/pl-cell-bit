import { selectorFamily } from "recoil";
import { getCompany } from "../../network/lib/companies";
import { filterCompanyAtom, getCompanyAtom } from "../Atoms";

export const filteredCompanySelector = selectorFamily({
    key: "filteredCompanySelector",
    get: (id) => async ({ get }) => {
        const unFiltered = await getCompany();
        const filtered = get(filterCompanyAtom);
        return filtered.concat(unFiltered.data.filter(company => company.registers.includes(id)));
    }
})