!function(a,b){if("function"==typeof define&&define.amd)define(["backbone","underscore","jquery","exports"],function(c,d,e,f){a.B2=b(a,f,c,d,e)});else if("undefined"!=typeof exports){var c=require("backbone"),d=require("underscore");b(a,exports,c,d)}else a.B2=b(a,{},a.Backbone,a._,a.jQuery||a.Zepto||a.ender||a.$)}(this,function(a,b,c,d,e){var f=a.B2;b.VERSION="0.1.6",b.noConflict=function(){return a.B2=f,this};var g={};try{g=window.localStorage}catch(h){}b.localStorage=g,d.extend(b,c),b.View=c.View.extend({template:function(){return""},appEvents:{},registerComponent:function(a,b,c,f){var g;if(this._components=this._components||{},this._components.hasOwnProperty(a)){var h=this._components[a];h.trigger&&h.trigger("beforeRemove"),this.stopListening(h,"all"),h.remove()}this._components[a]=b,b._parentView=this,b._componentName=a;var i=/^(\S+)\s*(\S+)$/;for(var j in this.appEvents)if(this.appEvents.hasOwnProperty(j)){var k=this.appEvents[j],l=j.match(i),m=l[1],n=l[2];if(l&&n){var o=/\/(.*?)\//.exec(n),p=o&&o[1];p&&(n=new RegExp(p.replace(/\\/g,"\\\\")))}if(n){var q=!1;if(d.isRegExp(n)&&n.test(a)?q=!0:n==a&&(q=!0),q){var r=m.split(/,/);for(g=0;g<r.length;g++)this.listenTo(b,r[g],this[k])}}}return this.listenTo(b,"all",function(a){if(this.appEvents.hasOwnProperty("all")){var c=this.appEvents.all;this[c].apply(this,[arguments[0],b].concat(d.toArray(arguments).slice(1)))}else b._events&&b._events[a]||this.trigger.apply(this,arguments)}),c&&(d.isString(c)?this.$(c).append(b.el):e(c).append(b.el),f!==!0&&b.render()),b},getComponent:function(a){return this._components?this._components[a]:null},getComponents:function(){return this._components||{}},freeChildren:function(a){d.each(this._components,function(b,c){var e=!1;e=a?d.isRegExp(a)?a.test(c):a===c||a===b:!0,e&&(this.stopListening(b,"all"),b.remove(),this._components[c]&&(delete this._components[c],delete b._parentView))},this)},_addFieldToFormParams:function(a,b,c){if(d.isObject(c)&&!d.isArray(c)){var e=c[a];if("undefined"==typeof e)c[a]=b;else if(d.isArray(e))d.isArray(e)&&e.push(b);else{var f=e;c[a]=[f],c[a].push(b)}}else d.isArray(c)&&c.push({name:a,value:b})},serializeForm:function(a,b,c){var d=this,f=e(a||this.el).find("input, select, textarea").filter(function(){return this.name&&-1===this.name.indexOf(b||"ignore")}),g={};return c&&(g=[]),f.each(function(){var a=e(this),b=a.attr("name"),c=a.val(),f=a.attr("value2"),h=!0,i=a.attr("data-inverse-value"),j=a.data("dataType");switch(a.prop("type")){case"radio":a.prop("checked")?b=a.attr("name"):h=!1;break;case"checkbox":a.prop("checked")?(null==c||"on"==c)&&(c=!0):c=null==f?!1:f,i&&(c=!c)}if(j)switch(j.toLowerCase()){case"int":c=parseInt(c,10)||c;break;case"float":c=parseFloat(c)||c}h&&d._addFieldToFormParams(b,c,g)}),g},serializeArray:function(a,b){return this.serializeForm(a,b,!0)},getParentView:function(){return this._parentView},remove:function(){this.freeChildren(),this.trigger("beforeRemove");var a=this._parentView;a&&(a.stopListening(this),a._components&&delete a._components[this._componentName],delete this._parentView),c.View.prototype.remove.apply(this,arguments)},render:function(){this.$el.html(this.template())}}),b.Model=c.Model.extend({}),b.Collection=c.Collection.extend({}),b.Router=c.Router.extend({}),b.History=c.History.extend({});var i=function(a,b,c){c=c||[];var e,f=this,g=f.prototype;e=a&&d.has(a,"constructor")?a.constructor:function(){return f.apply(this,arguments)},d.extend(e,f,b);var h=function(){this.constructor=e};h.prototype=f.prototype;var i=e.prototype=new h,j=/xyz/.test(function(){return"xyz"})?/\b_super\b/:/.*/;for(var k in a)a.hasOwnProperty(k)&&(i[k]="function"==typeof a[k]&&"function"==typeof g[k]&&(j.test(a[k])||c.indexOf(k)>-1)?function(a,b){return function(){var c=this._super;this._super=g[a];var d=b.apply(this,arguments);return this._super=c,d}}(k,a[k]):a[k]);return e.__super__=f.prototype,e};b.Model.extend=b.Collection.extend=b.Router.extend=b.View.extend=b.History.extend=i;var j=b.View.extend;b.View.extend=function(a,b){if(a.render){var c=a.render;a.render=function(){this.onRenderBegin&&this.onRenderBegin(),this.freeChildren&&this.freeChildren();var a=c.apply(this,arguments);return this.onRenderEnd&&this.onRenderEnd(),a}}var e=j.call(this,a,b,["render"]);return e.prototype.events=d.extend({},this.prototype.events,a.events),e.prototype.appEvents=d.extend({},this.prototype.appEvents,a.appEvents),e}});
//# sourceMappingURL=b2-min.js.map