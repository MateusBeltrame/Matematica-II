document.getElementById("work-experience-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    const duration = document.getElementById("duration").value;
  
    // Update personal information in the resume preview
    document.getElementById("resume-name").textContent = name;
    document.getElementById("resume-contact").textContent = `${email} | ${phone}`;
  
    // Create a list item for work experience
    const listItem = document.createElement("li");
    listItem.textContent = `${position} at ${company} (${duration})`;
  
    // Add the list item to the work experience list
    document.getElementById("work-experience-list").appendChild(listItem);
  
    // Clear input fields
    document.getElementById("company").value = "";
    document.getElementById("position").value = "";
    document.getElementById("duration").value = "";
  });