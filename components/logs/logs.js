$(document).ready(function () {
    const logContainer = "#log-container";
    const selectedFilterDisplay = "#selected-filter"; 

    function loadLogs(filter) {
        // Use the existing loader from script.js
        const logFile = `logs/${filter}`;
        loader.get(logFile, logContainer);
        // loader.get("logs/fatal-warning.html", logContainer);

        
        // $(selectedFilterDisplay).text("Selected Filter: " + filter); // for debugging
    }
    $("#log-filter").on("change", function () {
        const selectedFilter = $(this).val();
        loadLogs(selectedFilter);
    });

    // Initial load
    loadLogs("all");
});