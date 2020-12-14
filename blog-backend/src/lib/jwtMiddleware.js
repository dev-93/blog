import jwt from "jsonwebtoken";

const jwtMiddleware = (ctx, next) => {
    const token = ctx.cookies.get("access-token");
    if (!token) return next();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        return next();
    } catch (e) {
        return next();
    }
};

export default jwtMiddleware;
