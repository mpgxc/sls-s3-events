const handler = async (event) => {
  for (const record of event.Records) {
    console.info(record);
  }
};

module.exports = handler;

module.exports = {
  handler,
};
