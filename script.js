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
                document.getElementById('first-name-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('first-name-error').style.display = 'none';
            }

            if (!lastName) {
                document.getElementById('last-name-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('last-name-error').style.display = 'none';
            }

            if (!email) {
                document.getElementById('email-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('email-error').style.display = 'none';
            }

            if (!college) {
                document.getElementById('college-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('college-error').style.display = 'none';
            }

            if (!graduationYear) {
                document.getElementById('graduation-year-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('graduation-year-error').style.display = 'none';
            }

            if (!rollNo) {
                document.getElementById('roll-no-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('roll-no-error').style.display = 'none';
            }

            if (!conditions) {
                document.getElementById('conditions-error').style.display = 'inline';
                isValid = false;
            } else {
                document.getElementById('conditions-error').style.display = 'none';
            }

            if (isValid) {
                alert("Form submitted successfully!");
                // Add form submission logic here
            }
        }
