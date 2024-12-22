document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const caseDetails = document.querySelectorAll(".case-details");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const caseToShow = button.getAttribute("data-case");

            // Hide all case details
            caseDetails.forEach((caseDetail) => {
                caseDetail.classList.add("hidden");
            });

            // Show the selected case content
            const selectedCase = document.getElementById(caseToShow);
            if (selectedCase) {
                selectedCase.classList.remove("hidden");
            }
        });
    });
});
