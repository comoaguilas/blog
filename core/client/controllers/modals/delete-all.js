var DeleteAllController = Ember.Controller.extend({
    actions: {
        confirmAccept: function () {
            var self = this;

            ic.ajax.request(this.get('ghostPaths.url').api('db'), {
                type: 'DELETE'
            }).then(function () {
                self.notifications.showSuccess('Todo el contenido borrado de la base de datos.');
                self.store.unloadAll('post');
                self.store.unloadAll('tag');
            }).catch(function (response) {
                self.notifications.showErrors(response);
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

export default DeleteAllController;
