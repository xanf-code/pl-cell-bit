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
    default: false,
});