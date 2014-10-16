(function() {
    $(document).ready(function() {
        App.Models.Notification = Backbone.Model.extend({
            defaults: {
                theme: 'message theme',
                text: 'message text'
            }
        });

        App.Collections.NotificationList = Backbone.Collection.extend({
            model: App.Models.Notification
        });

        App.Views.Notification = Backbone.View.extend({
            tagName: 'li',

            className: 'row',

            template: App.template('notification-item'),

            initialize: function() {
                this.render();
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        App.Views.NotificationList = Backbone.View.extend({
                tagName: 'ul',

                className: 'notifications-list',

                initialize: function() {
                    this.collection.on('add', this.addOne, this);
                },

                render: function() {
                    this.collection.each(function(notification) {
                        var notificationView = new App.Views.Notification({model: notification});

                        this.$el.append(notificationView.render().el);
                    }, this);

                    return this;
                },

                addOne: function(notification) {
                    var notificationView = new App.Views.Notification({model: notification});
                    this.$el.append(notificationView.render().el);
                }
            }
        );

        App.Views.AddNotification = Backbone.View.extend({
            el: "#notificationModal",

            events: {
                'submit': 'submitHandler'
            },

            initialize: function() {},

            submitHandler: function(e) {
                e.preventDefault();
                var currentTarget = $(e.currentTarget);
                var theme = currentTarget.find("#notification-theme").val();
                var text = currentTarget.find("#notification-text").val();
                var newNotification = new App.Models.Notification({
                    theme: theme,
                    text: text
                });
                this.collection.add(newNotification);
                $("#notificationModal").modal('hide');
            }
        });

        var notificationListCollection = new App.Collections.NotificationList([
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


        var notificationListView = new App.Views.NotificationList({collection: notificationListCollection});
        var addNotificationView = new App.Views.AddNotification({collection: notificationListCollection});

        $(".main.container-fluid").append(notificationListView.render().el);
    });
}());