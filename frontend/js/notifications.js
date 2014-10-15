(function() {
    App.Models.Notification = Backbone.Model.extend({
        defaults: {
            theme: 'message theme',
            text: 'message text'
        }
    });

    App.Collections.NotificationList = Backbone.Collection.extend({
        model: App.Models.Notification
    });

    /*App.Views.Notification = Backbone.View.extend({
        tagName: 'li.row',

        template: App.template('notification-item'),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.Model.toJSON()));
            return this;
        }
    });

    App.Views.NotificationList = Backbone.View.extend({
            tagName: 'ul.NotificationList-list',

            initialize: function() {},

            render: function() {
                this.collection.each(function(notification) {
                    var notificationView = new App.Views.Notification({model: notification});

                    this.$el.append(notificationView.render().el);
                }, this);

                return this;
            }
        }
    );*/

    var NotificationListCollection = new App.Collections.NotificationList([
        {
            theme: 'Theme 1',
            text: 'Text 1'
        },
        {
            text: 'Text 2'
        },
        {
            theme: 'Theme 3'
        }
    ]);


    /*var NotificationListView = new App.Views.NotificationList({collection: NotificationListCollection});

    $(".main.container-fluid").append(NotificationListView.render().el);*/

    console.log(App.Collections);
}());