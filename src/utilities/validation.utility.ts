import { Request, Response, NextFunction } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

function validation(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            "status": "error",
            "message": result.array()[0].msg
        });
    }

    next();
}

const example: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty().withMessage('Nama is required'),
    body('email')
        .not()
        .isEmpty().withMessage('email is required')
        .bail()
        .isEmail().withMessage('Email format not valid!'),
    body('alamat')
        .not()
        .isEmpty().withMessage('Alamat is required!'),
]

export {
    validation,
    example
}