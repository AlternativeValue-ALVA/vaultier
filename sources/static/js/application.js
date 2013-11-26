LGTM.configure('defer', Ember.RSVP.defer);

$.notify.defaults({
    className: 'success',
    style: 'bootstrap',
    position: 'top center'
})

Ember.FEATURES["query-params"] = true
Ember.MODEL_FACTORY_INJECTIONS = true;

Vaultier = Ember.Application.create({
    LOG_TRANSITIONS: true,

    ready: function () {
        //@todo: do invitations
        //@todo: inject auth to invitations


        // service:errors
        this.register('service:errors', Service.Errors)
        this.inject('route', 'errors', 'service:errors');
        this.inject('service:errors', 'errorController', 'controller:ErrorGeneric')
        this.inject('service:errors', 'router', 'router:main')

        this.__container__.lookup('service:errors').register();


        // model:Role
        this.inject('model:Role', 'auth', 'service:auth');

        // model:Workspace
        this.inject('model:Workspace', 'members', 'service:members');

        // model:Secret
        this.inject('model:Secret', 'members', 'service:members');


        // service:auth
        this.register('service:auth', Service.Auth)
        this.inject('route', 'auth', 'service:auth');
        this.inject('controller', 'auth', 'service:auth');

        // service:coder
        this.register('service:coder', Service.Coder)

        // service:members
        this.register('service:members', Service.Members)
        this.inject('service:members', 'auth', 'service:auth')
        this.inject('service:members', 'store', 'store:main');
        this.inject('service:members', 'coder', 'service:coder')
        this.inject('route:WorkspacesCreate', 'members', 'service:members')
        this.inject('route:Workspace', 'members', 'service:members')
        this.inject('route:WorkspaceMemberApprove', 'members', 'service:members')

    }

});

Utils.HandlebarsHelpers.current().register();


$.cookie.json = true;


Po.NS('Vaultier.config');
Vaultier.config.authPersistTTL = 0; // one day


/**************************************************
 **************************************************
 * Global UI bindings
 **************************************************
 **************************************************
 */

$(document).ready(function () {
    $('body').tooltip({
        selector: '[data-toggle=tooltip]'
    });
})


