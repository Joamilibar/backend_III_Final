export class CustomError extends Error {
    constructor(code, message, details = {}) {
        super(message);
        this.code = code;
        this.details = details;
    }
}

export const handleCustomError = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(400).json({
            status: 'error',
            code: err.code,
            message: err.message,
            details: err.details
        });
    }
    console.error(err);
    res.status(500).json({
        status: 'error',
        code: 'internal_server_error',
        message: 'An internal server error has occurred'

    })
}