// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//import ".//node_modules/@hotwired/turbo-rails";
//import "./controllers"

document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.style.display = 'block';
            } else {
                step.style.display = 'none';
            }
        });
    }

    function goToNextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            $("form").submit();
        }

        if(currentStep == steps.length - 1) {
            $("#btnNext").html("Save")
        } else {
            $("#btnNext").html("Next")
        }
    }

    function goToPreviousStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Initially show the first step
    showStep(currentStep);

    // Event listeners for navigation buttons
    if($("#btnNext").length > 0){
        document.getElementById('btnNext').addEventListener('click', goToNextStep);
        document.getElementById('btnBack').addEventListener('click', goToPreviousStep);
    }

    $('.open-projects').bind('click', function(){

        $("#project-open-modal").show();
    })

    $('.close-projects').bind('click', function(){
        alert("lcik")
        $('#project-open-modal').hide();
    })
});