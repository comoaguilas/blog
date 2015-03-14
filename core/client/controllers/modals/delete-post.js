var DeletePostController = Ember.Controller.extend({
    actions: {
        confirmAccept: function () {
            var self = this,
                model = this.get('model');

            // definitely want to clear the data store and post of any unsaved, client-generated tags
            model.updateTags();

            model.destroyRecord().then(function () {
                self.get('dropdown').closeDropdowns();
                self.transitionToRoute('posts.index');
                self.notifications.showSuccess('Tu post ha sido borrado.', {delayed: true});
            }, function () {
                self.notifications.showError('Tu post no pudo ser borrado. Intenta de nuevo.');
            });
        },

        confirmReject: function () {
            return false;
        }
    },

    confirm: {
        accept: {
            text: 'Borrar',
            buttonClass: 'btn btn-red'
        },
        reject: {
            text: 'Cancelar',
            buttonClass: 'btn btn-default btn-minor'
        }
    }
});

export default DeletePostController;
