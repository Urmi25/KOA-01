
const UserModel = require("../models/user");

const getStudentById = async (ctx) => {
    try {
        const { id } = ctx.params;
        const studentData = await UserModel.getStudentById(id);
        ctx.body = { successCode: "Student Data", studentData };
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = { errorMessage: "Internal Server Error" };
    }
};

const createUser = (ctx) => {
    try {
        const user = UserModel.post();
        ctx.status = 200;
        ctx.body = { statusCode: "Successful Run", user };
    } catch (error) {
        console.error(error);
        ctx.status = 400;
        ctx.body = { errorMessage: "Failed to create user" };
    }
};

const updateUser = (ctx) => {
    try {
        const userId = ctx.params.id;
        const updatedUser = UserModel.put(userId, ctx.request.body);
        ctx.status = 200;
        ctx.body = { message: 'User updated successfully', user: updatedUser };
    } catch (error) {
        console.error(error);
        ctx.status = 400;
        ctx.body = { errorMessage: "Failed to update user" };
    }
};

const deleteUser = (ctx) => {
    try {
        const userId = ctx.params.id;
        const deletedUser = UserModel.delete(userId);
        ctx.status = 200;
        ctx.body = { message: 'User deleted successfully', user: deletedUser };
    } catch (error) {
        console.error(error);
        ctx.status = 400;
        ctx.body = { errorMessage: "Failed to delete user" };
    }
};

module.exports = {
    getStudentById,
    createUser,
    updateUser,
  
    deleteUser
};