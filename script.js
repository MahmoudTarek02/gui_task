const COMPONENT_DIR = 'http://localhost/gui_task/components';

let loader = {
    loaded: [],

    get: function (component_name, target) {
        $.ajax({
            url: COMPONENT_DIR + `/${component_name}/${component_name}.html`,
            type: "GET",
            complete: function (xhr) {
                if (xhr.status === 200) {
                    $(target).html(xhr.responseText);
                    $(document).trigger(`${component_name}-loaded`);

                    if (!this.loaded.includes(component_name)) {
                        $("head").append(`<link rel="stylesheet" href="` + COMPONENT_DIR + `/${component_name}/${component_name}.css">`);
                        $("head").append(`<script src="` + COMPONENT_DIR + `/${component_name}/${component_name}.js">`);
                    }
                    this.loaded.push(component_name);
                }
            }.bind(this)
        });
    }
};

loader.get('sidebar', '.sidebar-container');
loader.get('logs', '.logs-container');