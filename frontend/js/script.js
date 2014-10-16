(function() {
    $(document).ready(function() {
        window.App = {
            Models: {},
            Collections: {},
            Views: {}
        };

        window.App.template = function(id) {
            return _.template($("#" + id).html());
        };
    });
}());