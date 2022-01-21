import { selectorFamily } from "recoil";
import { getUsers } from "../../network/lib/users";
import { getUserAtom } from "../Atoms";

export const getUserSelector = selectorFamily({
    key: "getUserSelector",
    get: (id) => async ({ get }) => {
        const user = get(getUserAtom);
        const getUserCall = await getUsers(id);
        return user = getUserCall.data;
    }
})