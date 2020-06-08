const axios = require("axios");
const data = async (state) => {
  let url = "https://api.covid19india.org/data.json";
  const data = await axios.get(url);
  return data.data.statewise;
};
module.exports = data;
