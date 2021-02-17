const notFound = (req, res, next) => {
    const error = new Error(`Meko Not Found error at ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorhandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json( {
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'Can Not Show Meko Error Stack' : error.stack,
    } );
};

module.exports = {
    notFound,
    errorhandler,
};