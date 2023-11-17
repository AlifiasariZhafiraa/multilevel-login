exports.IsCustomer = async (req, res, next) => {
    if (req.user.role === "customer") {
        next();
    }
    return res.status(401).send("Forbidden! You are Not Customer");
}
exports.IsAdmin = async (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    }
    else{
        return res.status(401).send("Forbidden! You are Not Admin");
    }
}