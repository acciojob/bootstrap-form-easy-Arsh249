function validateForm() {
            let isValid = true;

            const firstName = document.getElementById('first-name-input').value.trim();
            const lastName = document.getElementById('last-name-input').value.trim();
            const email = document.getElementById('email-input').value.trim();
            const college = document.getElementById('college-input').value.trim();
            const graduationYear = document.getElementById('grad-year-select').value;
            const rollNo = document.getElementById('roll-no-input').value.trim();
            const conditions = document.getElementById('conditions-checkbox').checked;

            if (!firstName) {
                document.querySelector('#first-name-input + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#first-name-input + .invalid-feedback').style.display = 'none';
            }

            if (!lastName) {
                document.querySelector('#last-name-input + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#last-name-input + .invalid-feedback').style.display = 'none';
            }

            if (!email) {
                document.querySelector('#email-input + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#email-input + .invalid-feedback').style.display = 'none';
            }

            if (!college) {
                document.querySelector('#college-input + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#college-input + .invalid-feedback').style.display = 'none';
            }

            if (!graduationYear) {
                document.querySelector('#grad-year-select + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#grad-year-select + .invalid-feedback').style.display = 'none';
            }

            if (!rollNo) {
                document.querySelector('#roll-no-input + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#roll-no-input + .invalid-feedback').style.display = 'none';
            }

            if (!conditions) {
                document.querySelector('#conditions-checkbox + .invalid-feedback').style.display = 'inline';
                isValid = false;
            } else {
                document.querySelector('#conditions-checkbox + .invalid-feedback').style.display = 'none';
            }

            if (isValid) {
                alert("Form submitted successfully!");
                // Add form submission logic here
            }
        }