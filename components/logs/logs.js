$(document).ready(function () {
    const logContainer = "#log-container";
    const selectedFilterDisplay = "#selected-filter"; 

    function loadLogs(filter) {
        const logFile = `logs/${filter}`;
        loader.get(logFile, logContainer);
    }
    $("#log-filter").on("change", function () {
        const selectedFilter = $(this).val();
        loadLogs(selectedFilter);
    });

    // Initial load
    loadLogs("all");
});