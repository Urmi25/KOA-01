exports.get = () => {
    return {
        id: 11,
        name: "aqsa",
        age: 4
    };
};

exports.post = () => {
    return {
        id: 12,
        name: "ayra",
        Age: 3
    };
};

exports.put = (userId, userData) => {
    return { 
        id: 1,
        userId: userId,
        userData: userData }
    
};

exports.patch = (userId, userData) => {
   return { id: 1,
    userId: userId,
    userData: userData }
};

exports.delete = (userId) => {
    
    return { 
        id: 1,
        userId: userId,
        message: "User deleted successfully"
    };
}