import { object, string } from "yup";

const loginValidationSchema = object({
    email: string().email("Invalid email").required("Email is required"),
    password: string()
        .min(8, "Password must be at least 8 characters")
        .max(16, "Password must be at most 16 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
            "Password must contain uppercase, lowercase, number and symbol",
        )
        .required("Password is required"),
});

export default loginValidationSchema;
