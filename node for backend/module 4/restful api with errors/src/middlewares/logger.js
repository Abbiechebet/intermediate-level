module.exports = {
  logUserRequestAndTimePath: (req, res, next) => {
    console.log(`The request arrived at:  ${new Date()},
         from this ip: ${req.originalUrl} `);
    next();
  },
};
