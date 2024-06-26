import Joi from "joi";

const productJoi = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.number().min(1),
    category: Joi.string()
});

export default productJoi;