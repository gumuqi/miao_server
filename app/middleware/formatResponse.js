module.exports = (options, app) => {
    return async function formatResponse(ctx, next) {
        await next();
    
        let body = ctx.body;
        if(!body) return;

    }

}
