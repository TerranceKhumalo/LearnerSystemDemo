const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const projectList = [
    {
        id: 1,
        projectName: "UI/UX",
        date: getProjectDate()
    },
    {
        id: 2,
        projectName: "CRM System",
        date: getProjectDate()
    },
    {
        id: 3,
        projectName: "LMS System",
        date: getProjectDate()
    },
]



function getProjectDate(){
    const date = new Date();
    const currentMonth = date.getMonth();
    return `${date.getDate()} ${monthNames[currentMonth]} ${date.getFullYear()}`
}

export default projectList;
