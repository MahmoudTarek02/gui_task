const COMPONENT_DIR = 'http://localhost/gui_task/components';

let loader = {
    loaded: [],

    get: function (component_name, target) {
        console.log(`Attempting to load ${component_name} into ${target}`);  // Debugging log
        const url = COMPONENT_DIR + `/${component_name}.html`;
        console.log(`Requesting URL: ${url}`);  // Debugging log
        $.ajax({
            url: url,  // Ensure the path is correct
            type: "GET",
            complete: function (xhr) {
                if (xhr.status === 200) {
                    console.log(`${component_name} loaded successfully`);  // Debugging log
                    $(target).html(xhr.responseText);
                    $(document).trigger(`${component_name}-loaded`);

                    if (!this.loaded.includes(component_name)) {
                        $("head").append(`<link rel="stylesheet" href="` + COMPONENT_DIR + `/${component_name}.css">`);
                        $("head").append(`<script src="` + COMPONENT_DIR + `/${component_name}.js">`);
                        // $.getScript(COMPONENT_DIR + `/${component_name}.js`, function() {
                        //     console.log(`${component_name}.js loaded and executed`);
                        // });
                    }
                    this.loaded.push(component_name);
                } else {
                    console.error(`Failed to load ${component_name}. Status: ${xhr.status}`);  // Debugging log
                }
            }.bind(this)
        });
    }
};

loader.get('sidebar/sidebar', '.sidebar-container');
loader.get('logs/logs', '.logs-container');
