

const reportMiddleware = (req, res, next) => {

    console.log("========== REQUEST ==========");
    console.log("Method:", req.method);
    console.log("Route :", req.originalUrl);
    console.log("Time  :", new Date().toLocaleString());
    console.log("=============================");

    next();
};

export default reportMiddleware;