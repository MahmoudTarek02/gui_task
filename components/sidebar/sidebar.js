const slider = document.getElementById("speed-slider");
const confirmButton = document.getElementById("btn-confirm-speed");
const speedDisplay = document.getElementById("current-speed");

// Update speed display when "Confirm Speed" is pressed
confirmButton.addEventListener("click", () => {
    console.log("Speed confirmed"); // Optional: Log confirmation for debugging
    const speed = slider.value;
    speedDisplay.textContent = speed; // Update the displayed speed
    console.log(`Speed confirmed: ${speed}`); // Optional: Log speed for debugging
    // Add logic here to send speed value to your backend or control system
});

document.addEventListener("DOMContentLoaded", () => {
    // Toggle Battery Chart Visibility
    const batteryChartContainer = document.querySelector(".battery-chart-container");
    const batteryChartButton = document.getElementById("btn-battery");  

    batteryChartButton.addEventListener("click", () => {
        batteryChartContainer.style.display = batteryChartContainer.style.display === "none" ? "block" : "none";
    });

    // Create Battery Level Chart
    const ctx = document.getElementById("battery-chart").getContext("2d");
    const batteryChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [], // Timestamps
            datasets: [
                {
                    label: "Battery Level (%)",
                    data: [], // Battery levels
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderWidth: 2,
                    tension: 0.1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Time (s)",
                    },
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: "Battery Level (%)",
                    },
                },
            },
        },
    });

    // Simulate Battery Data Update
    setInterval(() => {
        const now = new Date().toLocaleTimeString();
        const randomBatteryLevel = Math.floor(Math.random() * 100); // Simulated data

        if (batteryChart.data.labels.length >= 10) {
            batteryChart.data.labels.shift();
            batteryChart.data.datasets[0].data.shift();
        }

        batteryChart.data.labels.push(now);
        batteryChart.data.datasets[0].data.push(randomBatteryLevel);

        batteryChart.update();
    }, 2000); // Update every 2 seconds
});
