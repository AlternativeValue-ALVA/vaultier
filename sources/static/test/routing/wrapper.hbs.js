Ember.TEMPLATES["wrapper"] = Ember.Handlebars.template(function (Handlebars, depth0, helpers, partials, data
                                                                 /**/) {
    this.compilerInfo = [4, '>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers);
    data = data || {};
    var buffer = '', hashTypes, hashContexts, escapeExpression = this.escapeExpression;


    data.buffer.push("\n        AAA\n        <div>\n            ");
    hashTypes = {};
    hashContexts = {};
    data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash: {}, contexts: [depth0], types: ["ID"], hashContexts: hashContexts, hashTypes: hashTypes, data: data})));
    data.buffer.push("\n        </div>\n        BBB\n    ");
    return buffer;

});