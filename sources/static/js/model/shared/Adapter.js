Vaultier.ApplicationAdapter = DS.DjangoRESTAdapter.extend(
    Utils.MutableMethodsAdapterMixin,
    Utils.MutableUrlsAdapterMixin,
    {

        namespace: 'api',

        overrides: {
            'MemberRole': {
                findQuery: function (store, type, query) {
                    var url = '/api/members/{id}/roles/?hash={hash}'
                        .replace('{id}', query.id)
                        .replace('{hash}', query.hash);
                    return this.ajax(url, 'GET', { data: query });
                }
            },

            'MemberWorkspaceKey': {
                updateRecord: function (store, type, record) {
                    var url = '/api/members/{id}/approve/'
                        .replace('{id}', record.get('member'))
                    var data = store.serializerFor(type.typeKey).serialize(record);
                    return this.ajax(url, "PUT", { data: data });
                },

                find: function (store, type, id) {
                    var url = '/api/members/{id}/approve/'
                        .replace('{id}', id)
                    return this.ajax(url, "GET")
                }
            }

        },

        urls: {
            AuthenticatedUser: '/api/auth/user'
        },

        /**
         * Custom error wrapper adds status code to error for use in UI
         */
        ajaxError: function (error) {
            var superError = this._super(error);
            superError.status = error.status;
            return superError;
        }

    });


/**
 * This code forces always to do ajax queries to server
 */
Vaultier.Store = DS.Store.extend({

    loadMore: function (type, query) {
        query = typeof query == 'object' ? query : {};
        return this._super(type, query);
    },

    loadOne: function (type, id) {
        type = this.modelFor(type);
        var record = this.recordForId(type, id);
        if (record.currentState.stateName != 'root.empty' && reload) {
            return record.reload()
        } else {
            return this.findById(type, id);
        }
    }
});

