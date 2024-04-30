const {get,post} = require("../models/user");

exports.get = (ctx) => {
    try {
        const user = get(); 
        ctx.status = 200;
        ctx.body = { statusCode: "Successfull get", user: user };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};
exports.post = (ctx) => {
    try {
        const user = post(); 
        ctx.status = 200;
        ctx.body = { statusCode: "Successful Run", user: user };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

