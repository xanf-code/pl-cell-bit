import { client } from "../apiClient";

export function registerUser(cid, uid, backlogs, cgpa, degree, dep, email, name, phone, usn, twelveth, tenth) {
    return client.patch(`register/details/${cid}`,
        {
            id: uid,
            backlogs: backlogs,
            CGPA: cgpa,
            degree: degree,
            department: dep,
            email: email,
            name: name,
            phone: phone,
            usn: usn,
            XIIth: twelveth,
            Xth: tenth
        });
}