import { client } from "../apiClient";

export function updateUsers(department, semester, USN, CGPA, uid) {
    return client.patch(`/student/details/${uid}`, {
        isAdmin: false,
        emailVerified: true,
        user_meta: {
            department: department,
            semester: semester,
            USN: USN,
            CGPA: CGPA
        }
    });
}