Ember.TEMPLATES["Layout/LayoutWindow"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <div class=\"container\">\r\n\r\n        <div class=\"navbar-header\">\r\n\r\n            <div class=\"navbar-brand vlt-branding\">\r\n                <div class=\"vlt-brand\">\r\n                    <a href=\"#\">\r\n                        <img class=\"vlt-brandimg\" src=\"/static/images/logo.png\">\r\n\r\n                        <div class=\"vlt-brandname\">\r\n                            Vaultier\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"navbar-right\">\r\n\r\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Vaultier.Layout.SecurityBox", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Vaultier.LayoutWorkspaceBoxView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "Layout/Breadcrumbs", options) : helperMissing.call(depth0, "partial", "Layout/Breadcrumbs", options))));
  data.buffer.push("\r\n\r\n\r\n<div class=\"container vlt-page\">\r\n            ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n</div>\r\n\r\n\r\n<div class=\"vlt-footer\">\r\n    <div class=\"container\">\r\n        <p>&copy; Company 2013</p>\r\n    </div>\r\n</div>\r\n");
  return buffer;
  
});
