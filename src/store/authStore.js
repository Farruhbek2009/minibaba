import { create } from "zustand";
const savedUser = localStorage.getItem("auth");
const user = savedUser ? JSON.parse(savedUser) : null;
export const useAuthStore = create((set) => ({
    isAuth: !!user,
    email: user?.email || "",
    id: user?.id || "",
    name: user?.name || "",
    accessToken: user?.accessToken || "",
    login: (user) => {
        localStorage.setItem("auth", JSON.stringify(user));
        set({
            isAuth: true,
            email: user.email || "",
            id: user.id || "",
            name: user.name || "",
            accessToken: user.accessToken || "",
        });
    },
    logout: () => {
        localStorage.removeItem("auth");
        set({
            isAuth: false,
            email: "",
            id: "",
            name: "",
            accessToken: "",
        });
    },
}));