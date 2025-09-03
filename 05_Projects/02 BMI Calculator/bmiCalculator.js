const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Please give valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give valid height ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(results < 18.6) {
            results.innerHTML = `<span>${bmi} : Under weight</span>`;
        } else if(bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `<span>${bmi} : Normal Weight</span>`
        } else {
            results.innerHTML = `<span>${bmi} : Over Weight</span>`
        }
        // results.innerHTML = `<span>${bmi}</span>`;
    }
})