module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "deploying first api",
        input: event,
      },
      null,
      2
    ),
  };
};
