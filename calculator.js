function calBMI() {
    document.getElementById('WError').textContent = '';
    document.getElementById('AError').textContent = '';
    document.getElementById('HError').textContent = '';
    document.getElementById('genderError').textContent = '';

    const weight = parseFloat(document.getElementById('W').value);
    const height = parseFloat(document.getElementById('H').value);
    const age = parseFloat(document.getElementById('A').value);
    const gender = document.getElementById('gender').value;

    let valid = true;

    if (!weight) {
        document.getElementById('WError').textContent = 'Required';
        valid = false;
    }
    if (!height) {
        document.getElementById('HError').textContent = 'Required';
        valid = false;
    }
    if (!age) {
        document.getElementById('AError').textContent = 'Required';
        valid = false;
    }
    if (!gender) {
        document.getElementById('genderError').textContent = 'Required';
        valid = false;
    }

    if (!valid) return;

    const bmi = weight / (height * height);
    let category = '';

    if (gender === 'm') {
        if (bmi < 18.5) {
            category = 'ទម្ងន់របស់អ្នកមិនគ្រប់: ប្រឹងបរិភោគអាហារបន្លែម.';
        } else if (bmi < 24.9) {
            category = 'ទម្ងន់របស់អ្នកទូទៅ: អ្នកមានសុខភាពល្អហើយ.';
        } else if (bmi < 29.9) {
            category = 'ទម្ងន់របស់អ្នកលើស: កាត់បន្ថយរបបអាហារ និងហាត់ប្រាណ.';
        } else {
            category = 'លើសទម្ងន់ធ្ងន់ធ្ងរ: អ្នកមានជំងឺធាត់ហើយ.';
        }
    } else if (gender === 'f') {
        if (bmi < 18) {
            category = 'ស្គមពេក: ប្រឹងបរិភោគអាហារបន្លែម.';
        } else if (bmi < 24.4) {
            category = 'ទម្ងន់ទូទៅ: អ្នកមានសុខភាពល្អហើយ.';
        } else if (bmi < 29.4) {
            category = 'លើសទម្ងន់: កាត់បន្ថយរបបអាហារ និងហាត់ប្រាណ.';
        } else {
            category = 'អ្នកមានជំងឺធាត់ហើយ.';
        }
    }

    document.getElementById('result').innerHTML = `
        <strong>${gender === 'm' ? 'លោកអ្នកជាបុរស' : 'លោកអ្នកជាស្រ្តី'}</strong>, មាន BMI ចំនួន: <strong>${bmi.toFixed(2)}</strong><br>
        គឺមានន័យថា: <strong>${category}</strong>
    `;
}

function clearForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').textContent = '';
    document.getElementById('WError').textContent = '';
    document.getElementById('AError').textContent = '';
    document.getElementById('HError').textContent = '';
    document.getElementById('genderError').textContent = '';
}
