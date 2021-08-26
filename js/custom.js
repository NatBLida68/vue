let app = new Vue({
    el: "#app",    //el = element app = id'
    data: {
        alert: "This is an alert message! ",
        titleHTML : "<span class='badge'>Baby Dragon</span>",
        btn : "<button class='btn btn-default'>baby dragon</button>",
        projects: [
            {title: "portfolio", languages: ["HTML", "CSS", "VueJS"]},
        ],
        dynamicId : "projects_section",
        dynamicClass : "bg-primary",
        //events
        event_alpha: "click"
    },
    methods: {
        eventAlpha() {
            console.log("test click function");
        }
    }
});
console.log(app.alert)

