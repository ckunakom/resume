// ------ Experience ------ //
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

// Relevant
var expList = expData;
expDom = listWork(expList);
document.getElementById("exp-list").innerHTML = expDom;

// Past
var pastExpList = pastExpData;
pastExpDom = listWork(pastExpList);
document.getElementById("past-exp-list").innerHTML = pastExpDom;

// ------ Misc sections ------ //
function listMisc(list) {
    var domArea = "";

    for (var l = 0; l < list.length; l++) {
        const {section, item} = list[l];

        domArea += `
            <h5><strong>${section}</strong></h5>
        `;
        for (var i = 0; i < item.length; i++) {
            if (section == "SKILLS" || section == "LANGUAGES") {
                const {itemList} = item[i];

                domArea += `<p>`
            
                for (var i = 0; i < itemList.length; i++) {
                    domArea += `${itemList[i]}<br>`
                };
            }       
            else {
                const {webLink, nameText, scopeText, yearText, location} = item[i];
                
                domArea += `
                <p><strong><a href=${webLink} target="_blank">${nameText}</strong></a> ${yearText}<br>
                ${scopeText}`

                if (section == "EDUCATION") {
                    domArea += `<br>${location}`
                };
            };
        }
        domArea += `</p><br>`

    }

    return `${domArea}`;
};

var miscList = miscData;
miscDom = listMisc(miscList);
document.getElementById("misc-list").innerHTML = miscDom;