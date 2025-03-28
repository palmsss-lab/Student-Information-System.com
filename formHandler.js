// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const okBtn = document.getElementById("okBtn");

  if (!okBtn) {
    console.error("Error: 'okBtn' not found.");
    return;
  }

  okBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      firstName: document.getElementById("fnameInput")?.value.trim(),
      middleName: document.getElementById("mnameInput")?.value.trim(),
      lastName: document.getElementById("lnameInput")?.value.trim(),
      gender: document.getElementById("genderSelect")?.value,
      birthDate: document.getElementById("birthDate")?.value,
      permAddress: document.getElementById("permAddress")?.value.trim(),
      cityAddress: document.getElementById("cityAddress")?.value.trim(),
      provAddress: document.getElementById("provAddress")?.value.trim(),
      schoolName: document.getElementById("schoolName")?.value.trim(),
      course: document.getElementById("courseSelect")?.value,
      yearLevel: document.getElementById("yearLevel")?.value,
      instructorName: document.getElementById("instructorName")?.value.trim(),
    };

    console.log("Form Data:", formData);

    // Validate form data (check for missing fields)
    const missingFields = Object.entries(formData).filter(([key, value]) => !value);
    if (missingFields.length > 0) {
      const missingKeys = missingFields.map(([key]) => key).join(", ");
      alert(`Please fill out all fields. Missing: ${missingKeys}`);
      return;
    }

    // Store form data in localStorage
    localStorage.setItem("studentData", JSON.stringify(formData));

    // Redirect to student_information.html
    window.location.href = "student_information.html";
  });
});


// student information formhandler
// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select form inputs
  const studentForm1 = document.querySelector(".student-form");
  const studentForm2 = document.querySelector(".student-form2");
  const nextButton = document.getElementById("nextButton");
  const cancelButton = document.getElementById("cancelButton");

  // Cancel button: Redirect to homepage
  cancelButton.addEventListener("click", () => {
      window.location.href = "index.html";
  });

  // Next button: Collect and store form data
  nextButton.addEventListener("click", (event) => {
      event.preventDefault();

      // Collect data from Form 1
      const formData1 = {
          id: document.getElementById("ID").value,
          lastName: document.getElementById("LastName").value,
          firstName: document.getElementById("FirstName").value,
          middleName: document.getElementById("MiddleName").value,
          gender: document.getElementById("student-gender").value,
          religion: document.getElementById("student-Religion").value,
          birthDate: document.getElementById("student-bday").value,
      };

      // Collect data from Form 2
      const formData2 = {
          age: document.getElementById("age").value,
          citizenship: document.getElementById("citizenship").value,
          status: document.getElementById("status").value,
          bloodType: document.getElementById("bloodtype").value,
          placeOfBirth: document.getElementById("place-birth").value,
          contact: document.getElementById("student-contact").value,
          address: document.getElementById("student-address").value,
      };

      // Validate form inputs
      if (!validateForm(formData1) || !validateForm(formData2)) {
          alert("Please fill in all required fields.");
          return;
      }

      // Combine form data
      const studentData = { ...formData1, ...formData2 };

      // Store data in localStorage
      localStorage.setItem("studentInfo", JSON.stringify(studentData));

      // Redirect to Parent Information page
      window.location.href = "parent_information.html";
  });

  // Function to validate form fields (checks for empty values)
  function validateForm(formData) {
      return Object.values(formData).every(value => value.trim() !== "");
  }

});

//parentinformation form handler
document.addEventListener("DOMContentLoaded", () => {
  // Select form elements
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Back button: Navigate to Student Information page
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "student_information.html";
    });
  } else {
    console.error("Back button not found!");
  }

  // Next button: Collect and store parent form data
  if (nextBtn) {
    nextBtn.addEventListener("click", (event) => {
      event.preventDefault();

      // Collect data from Form 1
      const parentFormData1 = {
        guardianName: document.getElementById("guardianName")?.value.trim() || "",
        relationToStudent: document.getElementById("relationToStudent")?.value || "",
        occupation: document.getElementById("occupation")?.value.trim() || "",
        homeAddress: document.getElementById("homeAddress")?.value.trim() || "",
        phoneNumber: document.getElementById("phoneNumber")?.value.trim() || "",
      };

      // Collect data from Form 2
      const parentFormData2 = {
        parentCitizenship: document.getElementById("parentCitizenship")?.value.trim() || "",
        educationBackground: document.getElementById("educationBackground")?.value.trim() || "",
        maritalStatus: document.getElementById("maritalStatus")?.value || "",
      };

      // Validate form inputs
      if (!validateForm(parentFormData1) || !validateForm(parentFormData2)) {
        alert("Please fill in all required fields.");
        return;
      }

      // Combine and store parent information
      const parentData = { ...parentFormData1, ...parentFormData2 };
      localStorage.setItem("parentInfo", JSON.stringify(parentData));

      // Redirect to School Information page
      window.location.href = "school_information.html";
    });
  } else {
    console.error("Next button not found!");
  }

  // Function to validate form fields
  function validateForm(formData) {
    return Object.values(formData).every(value => value !== "");
  }
});

// schoolinformation formHandler
document.addEventListener("DOMContentLoaded", () => {
  // Select form inputs
  const backButton = document.getElementById("backButton");
  const nextbutton = document.getElementById("nextbutton");

  // Back button: Redirect to Parent Information page
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "parent_information.html";
    });
  } else {
    console.error("Back button not found!");
  }

  // Submit button: Collect and store form data
  if (nextbutton) {
    nextbutton.addEventListener("click", (event) => {
      event.preventDefault();

      // Collect data from School Information form
      const schoolData = {
        schoolName: document.getElementById("schoolName")?.value || "",
        schoolAddress: document.getElementById("schoolAddress")?.value || "",
        schoolContact: document.getElementById("schoolContact")?.value || "",
        schoolEmail: document.getElementById("schoolEmail")?.value || "",
        gradeLevel: document.getElementById("gradeLevel")?.value || "",
        adviserName: document.getElementById("adviserName")?.value || ""
      };

      // Validate form inputs
      if (!validateForm(schoolData)) {
        alert("Please fill in all required fields.");
        return;
      }

      // Store data in localStorage
      localStorage.setItem("schoolInfo", JSON.stringify(schoolData));

      // Redirect to Summary page
      window.location.href = "summary.html";
    });
  } else {
    console.error("Submit button not found!");
  }

  // Function to validate form fields (checks for empty values)
  function validateForm(formData) {
    return Object.values(formData).every(value => value.trim() !== "");
  }
});

// summary
// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS with your Public Key
  emailjs.init("mL6kXKm1KWDJJPeCy");

  // Function to load and display data from localStorage
  function displaySummary() {
    const summaryContainer = document.getElementById("summary-output");

    // Retrieve stored data
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo")) || {};
    const parentInfo = JSON.parse(localStorage.getItem("parentInfo")) || {};
    const schoolInfo = JSON.parse(localStorage.getItem("schoolInfo")) || {};

    // Combine all data
    const allData = { ...studentInfo, ...parentInfo, ...schoolInfo };

    if (Object.keys(allData).length === 0) {
      summaryContainer.innerHTML =
        "<p>No information available. Please complete the forms.</p>";
      return "";
    }

    // Create summary output
    let summaryData = "";
    for (const [key, value] of Object.entries(allData)) {
      summaryData += `${key.replace(/([A-Z])/g, " $1")}: ${value}\n`;
    }

    summaryContainer.innerText = summaryData;
    return summaryData; // Return data for email
  }

  const summaryData = displaySummary();

  // Handle form submission for sending email
  const emailForm = document.getElementById("emailForm");
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userEmail = document.getElementById("userEmail").value;

    // Ensure all necessary information is included
    const emailParams = {
      user_email: userEmail,
      name: "Student Entry Form",
      time: new Date().toLocaleString(),
      message: "Here is the summary of your submitted information.",
      summary: summaryData,
    };

    // Send email using EmailJS
    emailjs
      .send("service_n2ho1fm", "template_llf6zfl", emailParams)
      .then(() => {
        alert(`Email successfully sent to: ${userEmail}`);
        localStorage.clear();
        emailForm.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        alert("Failed to send email. Please try again.");
      });
  });
});
