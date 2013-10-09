Ember.TEMPLATES["Layout/SecurityBox"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',hashTypes,hashContexts,escapeExpression=this.escapeExpression;data.buffer.push("<div class=\"panel panel-default vlt-security-box dropdown pull-right\">\r\n    <img class=\"vlt-avatar\" src=\"http://www.gravatar.com/avatar/");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"avatar",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\">\r\n\r\n    <a href=\"#\" class=\"vlt-username dropdown-toggle\" data-toggle=\"dropdown\">\r\n        Jan Misek\r\n    </a>\r\n\r\n    <ul class=\"dropdown-menu vlt-dropdown\">\r\n        <li><a href=\"#\">Separated link</a></li>\r\n        <li><a href=\"#\">One more separated link</a></li>\r\n    </ul>\r\n</div>\r\n");return buffer;});Ember.TEMPLATES["Layout/WorkspaceBox"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',stack1,stack2,hashTypes,hashContexts,options,escapeExpression=this.escapeExpression,self=this,helperMissing=helpers.helperMissing;function program1(depth0,data){data.buffer.push("\r\n                Create new workspace\r\n            ");}
function program3(depth0,data){data.buffer.push("\r\n                Switch to another workspace\r\n            ");}
data.buffer.push("<div class=\"panel panel-default vlt-wspace-box pull-right dropdown\">\r\n\r\n    <img class=\"vlt-wspaceimg\" src=\"/static/images/user/rclick.png \">\r\n\r\n    <a href=\"#\" class=\"vlt-wspacename dropdown-toggle\" data-toggle=\"dropdown\">\r\n        ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"tstval",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" Vault ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"urcite",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n    </a>\r\n\r\n    <ul class=\"dropdown-menu\">\r\n        <li>\r\n            ");hashTypes={};hashContexts={};options={hash:{},inverse:self.noop,fn:self.program(1,program1,data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};stack2=((stack1=helpers.linkTo||depth0.linkTo),stack1?stack1.call(depth0,"Workspace.create",options):helperMissing.call(depth0,"linkTo","Workspace.create",options));if(stack2||stack2===0){data.buffer.push(stack2);}
data.buffer.push("\r\n         </li>\r\n        <li>\r\n            ");hashTypes={};hashContexts={};options={hash:{},inverse:self.noop,fn:self.program(3,program3,data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};stack2=((stack1=helpers.linkTo||depth0.linkTo),stack1?stack1.call(depth0,"Workspace.switch",options):helperMissing.call(depth0,"linkTo","Workspace.switch",options));if(stack2||stack2===0){data.buffer.push(stack2);}
data.buffer.push("\r\n\r\n        </li>\r\n    </ul>\r\n</div>\r\n");return buffer;});Ember.TEMPLATES["Layout/Layout"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',hashTypes,hashContexts,escapeExpression=this.escapeExpression;data.buffer.push("<div class=\"navbar navbar-default navbar-fixed-top\">\r\n\r\n    <div class=\"container\">\r\n\r\n        <div class=\"navbar-header\">\r\n\r\n            <div class=\"navbar-brand vlt-branding\">\r\n                <div class=\"vlt-brand\">\r\n                    <a href=\"#\">\r\n                        <img class=\"vlt-brandimg\" src=\"/static/images/logo.png\">\r\n\r\n                        <div class=\"vlt-brandname\">\r\n                            Vaultier\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"navbar-right\">\r\n\r\n            ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.view.call(depth0,"Vaultier.Layout.SecurityBox",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n            ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.view.call(depth0,"Vaultier.LayoutWorkspaceBoxView",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"vlt-breads\">\r\n    <div class=\"container\">\r\n        <ol class=\"breadcrumb\">\r\n            <li><a href=\"#\">Home</a></li>\r\n            <li><a href=\"#\">This</a></li>\r\n            <li><a href=\"#\">Bread</a></li>\r\n            <li><a href=\"#\">is</a></li>\r\n            <li class=\"active\"><h2>Active</h2></li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container vlt-page\">\r\n            ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"yield",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n</div>\r\n\r\n\r\n<div class=\"vlt-footer\">\r\n    <div class=\"container\">\r\n        <p>&copy; Company 2013</p>\r\n    </div>\r\n</div>\r\n");return buffer;});Ember.TEMPLATES["Vault/Index"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',stack1,stack2,hashContexts,hashTypes,options,escapeExpression=this.escapeExpression,self=this,helperMissing=helpers.helperMissing;function program1(depth0,data){data.buffer.push("\r\n    CREATE\r\n  ");}
function program3(depth0,data){var buffer='',stack1,hashTypes,hashContexts;data.buffer.push("\r\n            ");hashTypes={};hashContexts={};stack1=helpers.each.call(depth0,{hash:{},inverse:self.noop,fn:self.program(4,program4,data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});if(stack1||stack1===0){data.buffer.push(stack1);}
data.buffer.push("\r\n        ");return buffer;}
function program4(depth0,data){var buffer='',hashTypes,hashContexts;data.buffer.push("\r\n                ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.view.call(depth0,"Vaultier.VaultIndexItemView",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n            ");return buffer;}
function program6(depth0,data){data.buffer.push("\r\n            NO ITEMS. DESIGN WILL BE PROVIDED LATER\r\n        ");}
data.buffer.push("<div class=\"vlt-page-nav\">\r\n\r\n    <ul class=\"vlt-page-tabs nav nav-tabs\">\r\n        <li class=\"active\"><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">Profile</a></li>\r\n        <li><a href=\"#\">Messages</a></li>\r\n    </ul>\r\n\r\n    <div class=\"vlt-page-toolbar pull-right\">\r\n        <div class=\"btn-group\">\r\n\r\n            <a href=\"#\" class=\"btn btn-sm btn-default\">\r\n                <span class=\"glyphicon glyphicon-pencil\"></span>\r\n                Edit vault\r\n            </a>\r\n\r\n            <div class=\"btn-group\">\r\n                <a href=\"#\" class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <span class=\"glyphicon glyphicon-sort\"></span>\r\n                    Dropdown\r\n                    <b class=\"caret\"></b>\r\n                </a>\r\n\r\n                <ul class=\"dropdown-menu\">\r\n                    <li><a href=\"#\">Most recent</a></li>\r\n                    <li><a href=\"#\">Alphabetically</a></li>\r\n                    <li class=\"divider\"></li>\r\n                    <li><a href=\"#\">Separated link</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n          ");hashContexts={'class':depth0};hashTypes={'class':"STRING"};options={hash:{'class':("btn btn-default btn-sm")},inverse:self.noop,fn:self.program(1,program1,data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};stack2=((stack1=helpers['link-to']||depth0['link-to']),stack1?stack1.call(depth0,"Vault.kuba",options):helperMissing.call(depth0,"link-to","Vault.kuba",options));if(stack2||stack2===0){data.buffer.push(stack2);}
data.buffer.push("\r\n\r\n        <a href=\"#\" ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.action.call(depth0,"createVault",{hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" class=\"btn btn-default btn-sm\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n            TEST ALERT\r\n        </a>\r\n\r\n        <a href=\"#\" ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.action.call(depth0,"create",{hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n            Create\r\n        </a>\r\n\r\n    </div>\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n        ");hashTypes={};hashContexts={};stack2=helpers['if'].call(depth0,"length",{hash:{},inverse:self.program(6,program6,data),fn:self.program(3,program3,data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});if(stack2||stack2===0){data.buffer.push(stack2);}
data.buffer.push("\r\n\r\n    </div>\r\n</div>\r\n\r\n");return buffer;});Ember.TEMPLATES["Vault/IndexItem"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',hashTypes,hashContexts,escapeExpression=this.escapeExpression;data.buffer.push("\r\n    <a href=\"#\" class=\"panel panel-primary pull-left vlt-item vlt-vault-item\">\r\n        <div class=\"panel-icon\">\r\n            <img src=\"/static/images/icon-vault.png\">\r\n        </div>\r\n        <div class=\"panel-header\">\r\n            <h3>");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"name",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"description",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n            <div class=\"row\">\r\n                <small>\r\n                    <div class=\"col-md-4 vlt-cards\">\r\n                        Cards: 22\r\n                    </div>\r\n                    <div class=\"col-md-8 vlt-updated\">\r\n                        ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"view.test",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                        Updated: ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"updatedAgo",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                    </div>\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </a>\r\n\r\n");return buffer;});Ember.TEMPLATES["Vault/Create"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};var buffer='',hashTypes,hashContexts,escapeExpression=this.escapeExpression;data.buffer.push("<div class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.action.call(depth0,"rollback","content",{hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                                                  aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\">Modal title</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n\r\n                    <div class=\"form-group\" ");hashContexts={'class':depth0};hashTypes={'class':"STRING"};data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0,{hash:{'class':("errors.name:has-error")},contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(">\r\n                        <label for=\"vault-name\">Vault name</label>\r\n                        ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"errors.name",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                        ");hashContexts={'elementId':depth0,'valueBinding':depth0,'class':depth0};hashTypes={'elementId':"STRING",'valueBinding':"STRING",'class':"STRING"};data.buffer.push(escapeExpression(helpers.view.call(depth0,"Em.TextField",{hash:{'elementId':("vault-name"),'valueBinding':("content.name"),'class':("form-control")},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"vault-description\">Vault description</label>\r\n                        ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0,"errors.description",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                        ");hashContexts={'elementId':depth0,'valueBinding':depth0,'class':depth0};hashTypes={'elementId':"STRING",'valueBinding':"STRING",'class':"STRING"};data.buffer.push(escapeExpression(helpers.view.call(depth0,"Em.TextArea",{hash:{'elementId':("vault-description"),'valueBinding':("content.description"),'class':("form-control")},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push("\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.action.call(depth0,"rollback",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n                    Close\r\n                </button>\r\n                <button ");hashTypes={};hashContexts={};data.buffer.push(escapeExpression(helpers.action.call(depth0,"commit",{hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));data.buffer.push(" type=\"button\" class=\"btn btn-primary\">\r\n                    Save\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");return buffer;});Ember.TEMPLATES["Auth/Login"]=Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,'>= 1.0.0'];helpers=this.merge(helpers,Ember.Handlebars.helpers);data=data||{};data.buffer.push("<div class=\"vlt-page-nav\">\r\nLOGIN PAGE\r\n</div>\r\n\r\n");});