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
    educationDom += `
        <p><strong><a href=${webLink} target="_blank">${nameText}</strong></a> ${yearText}<br>
        ${scopeText}<br> ${location}</p>
    `
}

document.getElementById("education-list").innerHTML = educationDom;

// Experience
function listWork(list) {

    var domArea = "";

    for (var e = 0; e < list.length; e++) {
        const {companyName, companyURL, workLocation, jobTitle, yearService, taskList} = list[e];
    
        domArea += `
                <div class="row">
                <div class="col-6">
                    <p class="mb-0"><strong><a href=${companyURL}
                                target="_blank">${companyName}</a></strong></p>
                </div>
                <div class="col-6">
                    <p class="mb-0 text-right">${workLocation}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="mb-0"><strong>${jobTitle}</strong></p>
                </div>
                <div class="col-6">
                    <p class="mb-0 text-right">${yearService}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ul>
                `
        for (var t = 0; t < taskList.length; t++) {
            domArea += `    
            <li>${taskList[t]}</li>
        `
        };
    
        domArea += `    
            </ul>
            </div>
        </div>
        `
    }
    
    return `${domArea}`;
    
};


// Data
var expList = [
    {
        companyName: "Clinical ink",
        companyURL: "https://clinicalink.com/",
        workLocation: "Remote",
        jobTitle: "Analytic Engineer",
        yearService: "December 2021 - Present",
        taskList: [
            "Design, implement, and maintain cloud-based reporting, visualization, and analytics platform using best practices.",
        "Ensure associated deliverables meet the expectations of ICH GCPs, data standards, and internal procedures.",
        "Build and maintain data pipeline for data warehousing using dBT in ELT workflow.",
        "Manage relationships with stakeholders, driving a collaborative, cross team culture, ensuring successful delivery and adoption of technology in a matrixed environment.",
        "Outline process and training plan and document standard work flow for the engineering team and reporting team."
        ]
    },
    {
        companyName: "LabCorp",
        companyURL: "https://drugdevelopment.labcorp.com/",
        workLocation: "Remote",
        jobTitle: "Drug Development - Data System Analyst",
        yearService: "May 2021 - December 2021",
        taskList: [
            "Set up central monitoring dashboard in collaboration with the study team to allow physicians and clinical scientists to assess patient’s clinical data.",
            "Programmed data integration, transformation and configuration of clinical dashboard conforming with clinical data standard using Python/JavaScript.",
            "Developed report for dashboards and set up automated data refreshes.",
            "Assured projects are completed and workflow was documented appropriately using JIRA."
        ]
    },
    {
        companyName: "Abbott",
        companyURL: "https://www.abbott.com/",
        workLocation: "Remote",
        jobTitle: "Clinical Data Analyst",
        yearService: "November 2020 - April 2021",
        taskList: [
            "Created and maintained protocol-specific electronic case report forms (eCRF)s through cross-team collaboration for data collection", 
            "Built data cleaning reports for data review to ensure data quality and integrity using SQL.",
            "Effectively devised Edit Check specifications to minimize manual data review.",
            "Defined and oversaw data deliverable projects according to the study milestones and regulatory submission requirement.",
            "Authored and maintained essential data management documentation."
        ]
    }
];

var pastExpList = [
    {
        companyName: "WCG ThreeWire",
        companyURL: "https://www.threewire.com/",
        workLocation: "Remote",
        jobTitle: "Remote Clinical Research Coordinator",
        yearService: "August 2020 - November 2020",
        taskList: [
            "Accurately reviewed and abstracted clinical data of interest within medical records to be submitted into the electronic data capture (EDC)"
        ]

    },
    {
        companyName: "Be the Match/National Marrow Donor Program",
        companyURL: "https://bethematch.org/",
        workLocation: "Minneapolis, MN",
        jobTitle: "Clinical Research Associate II",
        yearService: "2017 - 2020",
        taskList: [
            "Streamlined data collection process to successfully reduce 2000 working hours for Data Management.",
            "Performed clinical trial monitoring visits to confirm site’s compliance and data quality.",
            "Led in-person and virtual training to new employees and site’s staff and authored guidance documents."
        ]

    },
    {
        companyName: "",
        companyURL: "",
        workLocation: "",
        jobTitle: "Clinical Research Assistant",
        yearService: "2016 - 2017",
        taskList: [
            "Assisted various study teams in creating, maintaining, and distributing study documents."
        ]

    },
    {
        companyName: "",
        companyURL: "",
        workLocation: "",
        jobTitle: "Survey Research Associate",
        yearService: "2014 – 2015",
        taskList: [
            "Collected and maintained confidential phone survey research data for studies."
        ]

    },
    {
        companyName: "Pace Analytical Services, Inc",
        companyURL: "https://www.pacelabs.com/",
        workLocation: "Minneapolis, MN",
        jobTitle: "Quality Assurance Analyst",
        yearService: "2013 - 2014",
        taskList: [
            "Acquired all certifications within the lab’s capability with all the state agencies and allowed the company to expand their operations to generate more revenue.",
            "Managed all lab documents, coordinated revisions and distribution within the lab and to clients."
        ]

    }
];

// Relevant
expDom = listWork(expList);
document.getElementById("exp-list").innerHTML = expDom;

// Past
pastExpDom = listWork(pastExpList);
document.getElementById("past-exp-list").innerHTML = pastExpDom;