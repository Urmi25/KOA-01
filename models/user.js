const AWS = require("aws-sdk");
AWS.config.update({
    endpoint: "http://localhost:8000",
    region: "us-east-1",
    accessKeyId: "0fgdkj",     
    secretAccessKey: "4j10q8"     
});
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

const getStudentById = async (name) => {
    const params = {
        TableName: "Student",
        Key: {
          id: 1,
        },
    };
    try {
        const data = await docClient.get(params).promise();
        console.log("Student details:", data.Item);
        return data.Item;
    } catch (err) {
        console.error("Error getting student details:", err);
        throw err;
    }
};

const createUser = async (userData) => {
    const params = {
        TableName: "Student",
        Item: userData,
    };
    try {
        await docClient.put(params).promise();
        console.log("User created successfully:", userData);
        return userData;
    } catch (err) {
        console.error("Error creating user:", err);
        throw err;
    }
};

const updateUser = async (userId, userData) => {
    const params = {
        TableName: "Student",
        Key: { id: userId },
        UpdateExpression: "SET #name = :name, #age = :age",
        ExpressionAttributeNames: {
            "#name": "name",
            "#age": "age",
        },
        ExpressionAttributeValues: {
            ":name": userData.name,
            ":age": userData.age,
        },
    };
    try {
        await docClient.update(params).promise();
        console.log("User updated successfully:", userId, userData);
        return { id: userId, ...userData };
    } catch (err) {
        console.error("Error updating user:", err);
        throw err;
    }
};



const deleteUser = async (userId) => {
    const params = {
        TableName: "Student",
        Key: { id: userId },
    };
    try {
        await docClient.delete(params).promise();
        console.log("User deleted successfully:", userId);
        return { id: userId, message: "User deleted successfully" };
    } catch (err) {
        console.error("Error deleting user:", err);
        throw err;
    }
};

module.exports = {
    getStudentById,
    createUser,
    updateUser,
    deleteUser
};