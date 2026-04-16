import { object, ref, string } from "yup";

const registerValidationSchema = object({
    firstName: string()
        .min(3, "Firstname must be at least 3 characters")
        .max(12, "Firstname must be at most 12 characters")
        .required("Firstname is required"),
    lastName: string()
        .min(3, "Lastname must be at least 3 characters")
        .max(12, "Lastname must be at least 3 characters")
        .required("Lastname is required"),
    email: string().email("Invalid email").required("Email is required"),
    password: string()
        .min(8, "Password must be at least 8 characters")
        .max(16, "Password must be at most 16 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
            "Password must contain uppercase, lowercase, number and symbol",
        )
        .required("Password is required"),
    confirmPassword: string().oneOf([ref("password")], "Password must match"),
    role: string().oneOf(
        ["student", "mentor"],
        "Role must be student or mentor!",
    ),
});

export default registerValidationSchema;
