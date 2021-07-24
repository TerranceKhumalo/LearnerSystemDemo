const axios = require('axios').default;

async function GetProjects() {
  const data = await axios.get("https://api.npms.io/v2/search?q=react")
    .then((response)=>{return response.data.results;})
    .catch((error)=>{console.log("Could not fatch data");})

    return data;
}

export default GetProjects;