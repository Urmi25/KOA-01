const responseHandler = async (ctx, next) => {
    try {
        await next();
        if (!ctx.body && ctx.status === 200) {
            ctx.status = 404;
            ctx.body = { message: 'Not found' };
        }
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = { message: err.message };
    }
};

module.exports = responseHandler;