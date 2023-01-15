// Education
var institutionList = [
    {webLink: "https://bootcamp.umn.edu/data/", nameText: "University of Minnesota College of Continuing & Professional Studies",
        scopeText: "Certificate, Data Visualization and Analytics Boot Camp Program", 
        yearText: "(2020)", location: "St. Paul, MN"},
    {webLink: "https://www.macalester.edu/", nameText: "Macalester College", 
        scopeText: "Bachelor of Arts: Biology Major and Chemistry and Japanese Minors",
        yearText: "(2009-2013)", location: "St. Paul, MN"},
];

var educationDom = "";

for (var i = 0; i < institutionList.length; i++) {
    const {webLink, nameText, scopeText, yearText, location} = institutionList[i];
    console.log("Is this working?");
    educationDom += `
        <p><strong><a href=${webLink} target="_blank">${nameText}</strong></a> ${yearText}<br>
        ${scopeText}<br> ${location}</p>
    `
}

document.getElementById("education-list").innerHTML = educationDom;