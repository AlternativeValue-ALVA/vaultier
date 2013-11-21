Ember.TEMPLATES["Workspace/WorkspaceMemberApprove"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n\n                                    <tr>\n                                        <td>\n                                           ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.printUser || depth0.printUser),stack1 ? stack1.call(depth0, "member", options) : helperMissing.call(depth0, "printUser", "member", options))));
  data.buffer.push("\n                                        </td>\n                                    </tr>\n\n                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"vlt-dialog\">\n            <form>\n\n                <div class=\"vlt-dialog-content\">\n                    <div class=\"vlt-dialog-header\">\n                        <h2>Members approval</h2>\n                    </div>\n                    <div class=\"vlt-dialog-body\">\n\n                        <div class=\"col-md-8 col-md-offset-2 top-15 bottom-30\">\n                            <div class=\"bottom-15\">\n                                Some of workspace members waiting for approval.\n                            </div>\n                            <table class=\"table vlt-table table-bordered\">\n                                ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "member", "in", "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </table>\n                        </div>\n\n                        <div class=\"clearfix\"></div>\n\n                    </div>\n                    <div class=\"vlt-dialog-footer\">\n                        <a href=\"#\" class=\"btn btn-default btn-sm\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "rejectMembers", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                            Reject members\n                        </a>\n                        <a href=\"#\" class=\"btn btn-primary btn\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "acceptMembers", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                            <span class=\"glyphicon glyphicon-ok\"></span>\n                            Approve members\n                        </a>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});
