// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const none = 'None'
const apache = 'Apache License 2.0'
const gnuGeneral3 = 'GNU General Public License v3.0'
const mit = 'MIT License'
const bsd2 = 'BSD 2-Clause "Simplified" License'
const bsd3 = 'BSD 3-Clause "New" or "Revised" License'
const boost = 'Boost Software License 1.0'
const creativeCommons = 'Creative Commons Zero v1.0 Universal'
const eclipse = 'Eclipse Public License 2.0'
const gnuAffero = 'GNU Affero General Public License v3.0'
const gnuGeneral2 = 'GNU General Public License v2.0'
const gnuLesser = 'GNU Lesser General Public License v2.1'
const mozilla = 'Mozilla Public License 2.0'
const unlicense = 'The Unlicense'

function renderLicenseBadge(license) {
    let badge = "";

    if(license === apache) {
        badge = "![License](https://shields.io/badge/License-Apache%202.0-green)";
    }
    if(license === gnuGeneral3) {
        badge = "![License](https://shields.io/badge/License-GPL%203.0-orange)";
    }
    if(license === mit) {
        badge = "![License](https://shields.io/badge/License-MIT-green)";
    }
    if(license === bsd2) {
        badge = "![License](https://shields.io/badge/License-BSD%202%20Clause-green)";
    }
    if(license === bsd3) {
        badge = "![License](https://shields.io/badge/License-BSD%203%20Clause-green)";
    }
    if(license === boost) {
        badge = "![License](https://shields.io/badge/License-BSL%201.0-green)";
    }
    if(license === creativeCommons) {
        badge = "![License](https://shields.io/badge/License-CC%201.0-green)";
    }
    if(license === eclipse) {
        badge = "![License](https://shields.io/badge/License-ECL%202.0-green)";
    }
    if(license === gnuAffero) {
        badge = "![License](https://shields.io/badge/License-AGPL%203.0%20Only-orange)";
    }
    if(license === gnuGeneral2) {
        badge = "![License](https://shields.io/badge/License-GPL%202.0%20Only-orange)";
    }
    if(license === gnuLesser) {
        badge = "![License](https://shields.io/badge/License-LGPL%202.1%20Only-orange)";
    }
    if(license === mozilla) {
        badge = "![License](https://shields.io/badge/License-MPL%202.0-orange)";
    }
    if(license === unlicense) {
        badge = "![License](https://shields.io/badge/License-Unlicense-green)";
    }else
        badge = " ";


    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;

    switch(license) {
        case apache:
            licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
            break;
        case gnuGeneral3:
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
            break;
        case mit:
            licenseLink = "https://mit-license.org/";
            break;
        case bsd2:
            licenseLink = "https://opensource.org/license/bsd-2-clause/";
            break;          
        case bsd3:
            licenseLink = "https://tldrlegal.com/license/bsd-3-clause-license-(revised)#fulltext";
            break;         
        case boost:
            licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
            break;   
        case creativeCommons:
            licenseLink = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
            break;    
        case eclipse:
            licenseLink = "https://www.eclipse.org/legal/epl-2.0/";
            break;           
        case gnuAffero:
            licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
            break;   
        case gnuGeneral2:
            licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
            break;   
        case gnuLesser:
            licenseLink = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
            break;   
        case mozilla:
            licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
            break;
        case unlicense:
            licenseLink = "https://unlicense.org/";
            break;
            default:
                licenseLink = " ";
                break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = "";

    if(license !== none) {
        licenseSection += "##License ##\n"
        licenseSection += "You can check out " + renderLicenseLink(license) + " to get more information about this license\n";
    }

    return licenseSection;
}
