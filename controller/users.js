
const UserModel = require("../models/user");

exports.get = (ctx) => {
    try {
        const user = UserModel.get(); 
        ctx.status = 200;
        ctx.body = { statusCode: "Successful get", user: user };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

exports.post = (ctx) => {
    try {
        const user = UserModel.post(); 
        ctx.status = 200;
        ctx.body = { statusCode: "Successful Run", user: user };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

exports.put = (ctx) => {
    try {
        const userId = ctx.params.id;
        const updatedUser = UserModel.put(userId, ctx.request.body);
        ctx.status = 200;
        ctx.body = { message: 'User updated successfully', user: updatedUser };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

exports.patch = (ctx) => {
    try {
        const userId = ctx.params.id;
        const patchedUser = UserModel.patch(userId, ctx.request.body);
        ctx.status = 200;
        ctx.body = { message: 'User patched successfully', user: patchedUser };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

exports.delete = (ctx) => {
    try {
        const userId = ctx.params.id;
        const deletedUser = UserModel.delete(userId);
        ctx.status = 200;
        ctx.body = { message: 'User deleted successfully', user: deletedUser };
    } catch (error) {
        ctx.status = 400;
        ctx.body = "fail";
    }
};

