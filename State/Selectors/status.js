import { selector } from "recoil";
import { getStatus } from "../../network/lib/status";
import { getStatusAtom } from "../Atoms";

export const statusSelector = selector({
    key: "statusSelector",
    get: async ({ get }) => {
        const status = get(getStatusAtom);
        const getStatusCall = await getStatus();
        return status.concat(getStatusCall.data);
    }
})