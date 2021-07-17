import { useState, useEffect } from 'react';

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const projectList ={
    results: [
  {
    package: {
        id: 1,
    name: "UI/UX",
    date: getProjectDate(),
}
  },
  {
    package: {
        id: 2,
    name: "CRM System",
    date: getProjectDate(),
}
  },
  {
    package:{id: 3,
    name: "LMS System",
    date: getProjectDate(),}
  },
]
}

function getProjectDate() {
  const date = new Date();
  const currentMonth = date.getMonth();
  return `${date.getDate()} ${monthNames[currentMonth]} ${date.getFullYear()}`;
}
function GetProjects() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch("https://api.npms.io/v2/search?q=react")
        .then(res=> res.json())
        .then(
            (result) =>{
                setIsLoaded(true);
                setItems(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
  }, []);

  if (isLoaded) {
      console.log("Did load");
    return items;
  } else {
    console.log("Did not load", projectList);
      return projectList;
  }
}

export default GetProjects;