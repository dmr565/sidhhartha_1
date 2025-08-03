// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelectorAll(".nav-item").forEach(function(navItem){
//         navItem.addEventListener("mouseover", function(){
//             navItem.querySelector(".dropdown-menu").classList.add("show");
//         });
//         navItem.addEventListener("mouseout", function(){
//             navItem.querySelector(".dropdown-menu").classList.remove("show");
//         });
//     });
// });
  // JavaScript to handle tab switching<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Check if the clicked tab already has 'active' class
            if (!tab.classList.contains('active')) {
                // Remove 'active' class from all tabs and tab contents
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

                // Add 'active' class to the clicked tab and its corresponding tab content
                tab.classList.add('active');
                document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
            }
        });
    });
});


// admission page 
document.addEventListener('DOMContentLoaded', (event) => {
    const steps = document.querySelectorAll('.step');
    const contentBox = document.querySelector('.content-box .border_div1');
    const underline = document.createElement('div');
    underline.classList.add('underline');
    document.querySelector('.steps').appendChild(underline);

    const contentData = {
        "STEP 1": {
            heading: "Complete Enquiry Form",
            content: "Due to a large number of enquiries, the admission process starts with a computer-based random shortlisting. The school administration will reach the parents/Guardians by email/call.",
            documents: []
        },
        "STEP 2": {
            heading: "Application Form",
            content: "The Application form can be obtained from the school campus for a fixed fee. The Applications should be duly filled and submitted to the admission department. The application form can also be sent to their email after the application fee is received by the school authorities.",
            documents: []
        },
        "STEP 3": {
            heading: "Submission of the Application Form",
            content: "The duly filled application form should be submitted with the following mandatory documents:",
            documents: [
                "Birth certificate of the child",
                "Passport sized photograph of the child and both the parents",
                "Aadhar Card (for all applicants residing in India)",
                "Photocopy of progress/Report card of the previous schooling year",
                "Original School Transfer Certificate from the recognized school from Grade 2 onwards.",
                "Medical Fitness Certificate from a Registered Medical Practitioner.",
                "State whether Schedule Caste / Schedule Tribe / OBC. Yes/No. If yes, attach a copy of Caste Certificate."
            ]
        },
        "STEP 4": {
            heading: "Schedule Interactions/Assessments",
            content: "Parents will be intimated by the admissions department regarding the assessment/interaction schedule after the successful submission of the application form. An interaction session can be arranged with the faculty on the scheduled date.",
            documents: []
        },
        "STEP 5": {
            heading: "Admission Offer",
            content: "The formal admission into the school is offered to the ward after the scrutiny of the documents and payment of the prescribed fees to the school administration.",
            documents: []
        }
    };

    function updateContent(step) {
        // Remove active class from all steps and add it to the clicked step
        steps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');

        // Update underline position and width
        updateUnderline(step);

        // Update content
        const stepText = step.textContent.trim();
        const data = contentData[stepText];
        contentBox.querySelector('h2').textContent = data.heading;
        contentBox.querySelector('p').textContent = data.content;

        // Clear and update ol for STEP 3 only
        const ol = contentBox.querySelector('.ul1');
        if (stepText === 'STEP 3') {
            // Clear existing list items
            ol.innerHTML = '';
            // Add new list items with custom font styles
            data.documents.forEach(doc => {
                const li = document.createElement('li');
                li.textContent = doc;
                li.style.fontFamily = "Poppins, sans-serif";
                li.style.fontWeight = "400";
                li.style.fontStyle = "normal";
                li.style.fontSize = "16px";
                ol.appendChild(li);
            });
        } else {
            // Clear ol content if not STEP 3
            ol.innerHTML = '';
        }
    }

    function updateUnderline(step) {
        underline.style.width = `${step.offsetWidth}px`;
        underline.style.left = `${step.offsetLeft}px`;
    }

    // Initialize: Set up click events for each step
    steps.forEach(step => {
        step.addEventListener('click', (event) => {
            updateContent(step);
        });

        step.addEventListener('mouseenter', (event) => {
            updateUnderline(step);
        });

        step.addEventListener('mouseleave', (event) => {
            const activeStep = document.querySelector('.step.active');
            if (activeStep) {
                updateUnderline(activeStep);
            } else {
                underline.style.width = '0';
                underline.style.left = '0';
            }
        });
    });

    // Initial underline setup for the active step
    const activeStep = document.querySelector('.step.active');
    if (activeStep) {
        updateUnderline(activeStep);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const stepsToggle = document.querySelector('.steps-toggle');
    const steps = document.querySelector('.steps');

    stepsToggle.addEventListener('click', function () {
        const expanded = stepsToggle.getAttribute('aria-expanded') === 'true' || false;
        stepsToggle.setAttribute('aria-expanded', !expanded);
        steps.classList.toggle('visible');
    });
});


// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });

// Disable F12 and Ctrl+Shift+I (DevTools shortcuts)
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
//         e.preventDefault();
//     }
// });

// // Disable Ctrl+U (View Source)
// document.addEventListener('keydown', function(e) {
//     if (e.ctrlKey && e.key === 'u') {
//         e.preventDefault();
//     }
// });


//add padding to the notification button

  document.addEventListener('DOMContentLoaded', function () {
    var offcanvasNavbar = document.getElementById('offcanvasNavbar');
    var notificationDropdown = document.getElementById('notificationDropdown');

    offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
      // Add padding-top to notificationDropdown
      notificationDropdown.style.marginTop = '15px';
    });

    offcanvasNavbar.addEventListener('hide.bs.offcanvas', function () {
      // Remove padding-top from notificationDropdown
      notificationDropdown.style.marginTop = '';
    });
  });

//alert

  document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const openNotificationsBtn = document.getElementById('open-notifications');
    const alertPopup = document.getElementById('alert-popup');
    const closePopupBtn = document.getElementById('close-popup');
  
    // Function to open the popup
    openNotificationsBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      alertPopup.style.display = 'flex'; // Display the popup
    });
  
    // Function to close the popup
    closePopupBtn.addEventListener('click', function() {
      alertPopup.style.display = 'none'; // Hide the popup
    });
  
    // Optional: Close the popup when clicking outside the content
    alertPopup.addEventListener('click', function(event) {
      if (event.target === alertPopup) {
        alertPopup.style.display = 'none';
      }
    });
  });
  

//   magazine preprimary

    // Function to scroll the cards container vertically
    function scrollCards(direction) {
        const container = document.querySelector('#cards_section1');
        const scrollAmount = 200; // Amount to scroll by (pixels)

        if (direction === 'up') {
            container.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'down') {
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    }

    // Example usage: Scroll down by clicking a button
    document.getElementById('scroll-down').addEventListener('click', () => {
        scrollCards('down');
    });

    // Example usage: Scroll up by clicking a button
    document.getElementById('scroll-up').addEventListener('click', () => {
        scrollCards('up');
    });

// click to show story----------------------------------------------------------------

function showStory(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
}
