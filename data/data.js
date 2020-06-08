const axios = require("axios");
const data = async (stateName = null) => {
  let url = "https://api.covid19india.org/data.json";
  const data = await axios.get(url);
  if (!stateName) return data.data.statewise;
  return data.data.statewise.filter((stateData) => {
    return stateData.state.toLowerCase() === stateName.toLowerCase();
  });
};
module.exports = data;
