
const radios = document.querySelectorAll('input[name="phoneColor"]');
const colorName = document.getElementById('selectedColorName');
const productImage = document.getElementById('productImage');
const labels = document.querySelectorAll('.color-option');

radios.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName.textContent = this.value;

        // Change image
        productImage.src = this.dataset.image;

        // Remove active class
        labels.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class to selected
        this.parentElement.classList.add('active');
    });
});

const radios2 = document.querySelectorAll('input[name="phoneColor2"]');

const colorName2 = document.getElementById('selectedColorName2');

const productImage2 = document.getElementById('productImage2');

const labels2 = document.querySelectorAll('.color-option2');

radios2.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName2.textContent = this.value;

        // Change image
        productImage2.src = this.dataset.image;

        // Remove active class
        labels2.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios3 = document.querySelectorAll('input[name="phoneColor3"]');

const colorName3 = document.getElementById('selectedColorName3');

const productImage3 = document.getElementById('productImage3');

const labels3 = document.querySelectorAll('.color-option3');

radios3.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName3.textContent = this.value;

        // Change image
        productImage3.src = this.dataset.image;

        // Remove active class
        labels3.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios4 = document.querySelectorAll('input[name="phoneColor4"]');

const colorName4 = document.getElementById('selectedColorName4');

const productImage4 = document.getElementById('productImage4');

const labels4 = document.querySelectorAll('.color-option4');

radios4.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName4.textContent = this.value;

        // Change image
        productImage4.src = this.dataset.image;

        // Remove active class
        labels4.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios5 = document.querySelectorAll('input[name="phoneColor5"]');

const colorName5 = document.getElementById('selectedColorName5');

const productImage5 = document.getElementById('productImage5');

const labels5 = document.querySelectorAll('.color-option5');

radios5.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName5.textContent = this.value;

        // Change image
        productImage5.src = this.dataset.image;

        // Remove active class
        labels5.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios6 = document.querySelectorAll('input[name="phoneColor6"]');

const colorName6 = document.getElementById('selectedColorName6');

const productImage6 = document.getElementById('productImage6');

const labels6 = document.querySelectorAll('.color-option6');

radios6.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName6.textContent = this.value;

        // Change image
        productImage6.src = this.dataset.image;

        // Remove active class
        labels6.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios7 = document.querySelectorAll('input[name="phoneColor7"]');

const colorName7 = document.getElementById('selectedColorName7');

const productImage7 = document.getElementById('productImage7');

const labels7 = document.querySelectorAll('.color-option7');

radios7.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName7.textContent = this.value;

        // Change image
        productImage7.src = this.dataset.image;

        // Remove active class
        labels7.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios8 = document.querySelectorAll('input[name="phoneColor8"]');

const colorName8 = document.getElementById('selectedColorName8');

const productImage8 = document.getElementById('productImage8');

const labels8 = document.querySelectorAll('.color-option8');

radios8.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName8.textContent = this.value;

        // Change image
        productImage8.src = this.dataset.image;

        // Remove active class
        labels8.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios9 = document.querySelectorAll('input[name="phoneColor9"]');

const colorName9 = document.getElementById('selectedColorName9');

const productImage9 = document.getElementById('productImage9');

const labels9 = document.querySelectorAll('.color-option9');

radios9.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName9.textContent = this.value;

        // Change image
        productImage9.src = this.dataset.image;

        // Remove active class
        labels9.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});

const radios10 = document.querySelectorAll('input[name="phoneColor10"]');

const colorName10 = document.getElementById('selectedColorName10');

const productImage10 = document.getElementById('productImage10');

const labels10 = document.querySelectorAll('.color-option10');

radios10.forEach(radio => {

    radio.addEventListener('change', function () {

        // Change color name
        colorName10.textContent = this.value;

        // Change image
        productImage10.src = this.dataset.image;

        // Remove active class
        labels10.forEach(label => {
            label.classList.remove('active');
        });

        // Add active class
        this.parentElement.classList.add('active');

    });

});