import { client } from "../apiClient";

export function updateUsers(department, semester, USN, CGPA, uid, username, email, gender, phone, X, XII, diploma, gradtype, linkedin, github) {
    return client.patch(`/student/details/${uid}`, {
        name: username,
        email: email,
        gender: gender,
        isAdmin: false,
        emailVerified: true,
        user_meta: {
            department: department,
            semester: semester,
            USN: USN,
            CGPA: CGPA,
            phone: phone,
            X: X,
            XII: XII,
            diploma: diploma,
            Type: gradtype,
            resume: ""
        },
        offer_info: {
            hasTwoOffers: false,
            isException: false,
        },
        social_info: {
            linkedin: linkedin,
            github: github,
        }
    });
}

export function getUsers(id) {
    return client.get(`/details/${id}`);
}