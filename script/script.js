document.addEventListener('DOMContentLoaded', function(){

    const accordions = document.getElementsByClassName('questions');
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            for (let j = 0; j < accordions.length; j++)
            {
                if (i !== j && accordions[j].classList.contains('active'))
                {
                    accordions[j].classList.remove('active');
                }
            }
            accordions[i].classList.toggle('active');
        });
    }
})