const Joi = require("joi");

const registerSchema = Joi.object({
    firstName: Joi.string().min(3).max(12).required().messages({
        "string.base": "First name must be a string",
        "string.empty": "First name is required",
        "string.min": "First name must be at least 3 characters",
        "string.max": "First name must be at most 12 characters",
        "any.required": "First name is required",
    }),

    lastName: Joi.string().min(3).max(12).required().messages({
        "string.base": "Last name must be a string",
        "string.empty": "Last name is required",
        "string.min": "Last name must be at least 3 characters",
        "string.max": "Last name must be at most 12 characters",
        "any.required": "Last name is required",
    }),

    email: Joi.string().email().required().messages({
        "string.base": "Email must be a string",
        "string.empty": "Email is required",
        "string.email": "Email must be a valid email",
        "any.required": "Email is required",
    }),
    password: Joi.string()
        .min(8)
        .max(16)
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
        )
        .required()
        .messages({
            "string.base": "Password must be a string",
            "string.empty": "Password is required",
            "string.min": "Password must be at least 8 characters",
            "string.max": "Password must be at most 16 characters",
            "string.pattern.base":
                "Password must contain uppercase, lowercase, number and symbol",
            "any.required": "Password is required",
        }),

    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords must match",
        "any.required": "Confirm password is required",
    }),
    role: Joi.string().valid("student", "mentor").required().messages({
        "any.only": "Role must be student or mentor!",
    }),
});

module.exports = registerSchema;
