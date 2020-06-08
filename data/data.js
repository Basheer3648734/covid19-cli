module.exports = async (state = null) => {
  let url = "https://api.covid19india.org/state_district_wise.json";
  const dataJSON = await fetch(url);
  const data = dataJSON.json();
  console.log(data);
};
