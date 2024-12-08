document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn-primary');
    const link = "https://universities.hipolabs.com/search?name=";

    btn.addEventListener('click', async () => {
        let country = document.querySelector('input').value;
        if (country.trim() === "") {
            alert("Enter the UNIVERSITY Name");
            return;
        }
        let collegeArray = await getColleges(country);
        show(collegeArray);
    });

    async function getColleges(country) {
        try {
            let response = await fetch(link + country);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (e) {
            console.log(`Error Found -> ${e}`);
            return [];
        }
    }

    function show(collegeArray) {
        const list = document.querySelector(".list-group");
        list.innerHTML = ""; // Clear existing content

        if (collegeArray.length === 0) {
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerText = "No colleges found for the given input.";
            list.appendChild(li);
            return;
        }

        for (let college of collegeArray) {
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            let stateProvince = college["state-province"] ? college["state-province"] : 'N/A';
            li.innerHTML = `
                <strong>College Name:</strong> ${college.name} <br>
                <strong>Country:</strong> ${college.country} <br>
                <strong>College Website:</strong> <a href="${college.web_pages[0]}" target="_blank">${college.web_pages[0]}</a> <br>
                <strong>State:</strong> (${stateProvince})
            `;
            list.appendChild(li);
        }
    }
});
