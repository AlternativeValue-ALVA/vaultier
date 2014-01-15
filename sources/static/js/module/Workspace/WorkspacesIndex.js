Vaultier.WorkspacesRoute = Ember.Route.extend(
    {

        beforeModel: function (transition) {
            // only authenticated user can access
            if (!this.get('auth').checkAuthenticatedOrLogin(transition)) {
                return false;
            }

            // if any invitations store in session, user will be redirected
            if (this.get('invitations').hasInvitationsInSession()) {
                transition.abort();
                var url = transition.router.generate('Invitation.accept');
                this.router.replaceWith(url);
                return;
            }

        }

    });

Vaultier.WorkspacesIndexRoute = Ember.Route.extend(
    {
        model: function (params, transition) {
            var store = this.get('store');
            var promise = store.find('Workspace');

            promise.then(function(workspaces) {
                console.log(workspaces.get('firstObject'));
            });
            return promise;
        },

        setupController: function (ctrl, model) {
            this._super(ctrl, model);

            ctrl.set('breadcrumbs',
                Vaultier.Breadcrumbs.create({router: this.get('router')})
                    .addHome()
                    .addText('List of workspaces')
            );
        }

    });


Vaultier.WorkspacesIndexController = Ember.ArrayController.extend({
});

Vaultier.WorkspacesIndexView = Ember.View.extend({
    templateName: 'Workspace/WorkspacesIndex',
    layoutName: 'Layout/LayoutStandard'
});

Vaultier.WorkspacesIndexItemView = Ember.View.extend({
    templateName: 'Workspace/WorkspacesIndexItem'
});

Vaultier.WorkspacesIndexNotApprovedView = Ember.View.extend({
    templateName: 'Workspace/WorkspacesIndexNotApproved'
});
