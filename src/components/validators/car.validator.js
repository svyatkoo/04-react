import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp("^[a-zA-Zа-яА-ЯіІїЇ]{1,20}$")).required().messages({
        "string.empty": "Current field can`t be empty",
        "string.pattern.base": "Use only letters from 1 to 20"
    }),
    price: Joi.number().min(0).max(10000000).required().messages({
        "number.base": "The price must be from 1 to 1000000",
        "number.min": "The price must be greater then 1",
        "number.max": "The price must be less then 1",
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        "number.base": "The year must be from 1900 to now",
        "number.min": "The year must be greater then 1900",
        "number.max": "The price must be less then current year",
    }),
    // id: Joi.number().not()
})