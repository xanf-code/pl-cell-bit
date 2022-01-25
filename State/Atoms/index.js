import { atom } from "recoil";

export const sidebarState = atom({
    key: "sidebarStateAtom",
    default: '/'
});

export const sidebarMenu = atom({
    key: "sidebarMenuAtom",
    default: false,
});

export const adminStatusModal = atom({
    key: "statusModalAtom",
    default: true,
});

export const getStatusAtom = atom({
    key: "getStatusAtom",
    default: [],
})

export const getUserAtom = atom({
    key: "getUserAtom",
    default: {},
})

export const getCompanyAtom = atom({
    key: "getCompanyAtom",
    default: [],
    dangerouslyAllowMutability: true,
})

export const filterCompanyAtom = atom({
    key: "filterCompanyAtom",
    default: "All",
})