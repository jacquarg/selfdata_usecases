function domainTemplate(locals) {
var jade_debug = [ new jade.DebugItem( 1, "domain.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Use_Case_category, byStatus, description, longName, name) {
jade_debug.unshift(new jade.DebugItem( 0, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "domain.jade" ));
jade_mixins["usecaselist"] = jade_interp = function(name, list){
var block = (this && this.block), attributes = (this && this.attributes) || {};
jade_debug.unshift(new jade.DebugItem( 2, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 2, "domain.jade" ));
buf.push("<h4>" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h4>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "domain.jade" ));
buf.push("<ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "domain.jade" ));
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "domain.jade" ));
buf.push("<li" + (jade.attr("data-title", item.Title, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "domain.jade" ));
if ( item.linkOnly)
{
jade_debug.unshift(new jade.DebugItem( 7, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "domain.jade" ));
buf.push("<a" + (jade.attr("href", item.Website, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = item.Title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 9, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "domain.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = item.Title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "domain.jade" ));
buf.push("<img" + (jade.attr("src", item.Website + 'favicon.ico', true, false)) + " onerror=\"this.style.display='none';\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 4, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 5, "domain.jade" ));
buf.push("<li" + (jade.attr("data-title", item.Title, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, "domain.jade" ));
if ( item.linkOnly)
{
jade_debug.unshift(new jade.DebugItem( 7, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 7, "domain.jade" ));
buf.push("<a" + (jade.attr("href", item.Website, true, false)) + " target=\"_blank\">" + (jade.escape(null == (jade_interp = item.Title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift(new jade.DebugItem( 9, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 9, "domain.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = item.Title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "domain.jade" ));
buf.push("<img" + (jade.attr("src", item.Website + 'favicon.ico', true, false)) + " onerror=\"this.style.display='none';\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
};
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "domain.jade" ));
buf.push("<div class=\"domain\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "domain.jade" ));
buf.push("<div class=\"head\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "domain.jade" ));
buf.push("<img" + (jade.attr("src", 'img/usecases/'+ name + '.jpg', true, false)) + (jade.attr("title", Use_Case_category, true, false)) + "/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "domain.jade" ));
buf.push("<h3>" + (jade.escape(null == (jade_interp = longName) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 17, "domain.jade" ));
buf.push("<p class=\"description\">" + (jade.escape(null == (jade_interp = description) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 19, "domain.jade" ));
buf.push("<div class=\"lists\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, "domain.jade" ));
if ( (byStatus.operational || byStatus.under_development))
{
jade_debug.unshift(new jade.DebugItem( 21, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 21, "domain.jade" ));
buf.push("<div class=\"operational\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "domain.jade" ));
if ( (byStatus.operational))
{
jade_debug.unshift(new jade.DebugItem( 23, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 23, "domain.jade" ));
jade_mixins["usecaselist"]('Operational', byStatus.operational);
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 24, "domain.jade" ));
if ( (byStatus.under_development))
{
jade_debug.unshift(new jade.DebugItem( 25, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 25, "domain.jade" ));
jade_mixins["usecaselist"]('Under development', byStatus.under_development);
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 27, "domain.jade" ));
if ( (byStatus.idea))
{
jade_debug.unshift(new jade.DebugItem( 28, "domain.jade" ));
jade_debug.unshift(new jade.DebugItem( 28, "domain.jade" ));
buf.push("<div class=\"idea\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, "domain.jade" ));
jade_mixins["usecaselist"]('Idea', byStatus.idea);
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"Use_Case_category" in locals_for_with?locals_for_with.Use_Case_category:typeof Use_Case_category!=="undefined"?Use_Case_category:undefined,"byStatus" in locals_for_with?locals_for_with.byStatus:typeof byStatus!=="undefined"?byStatus:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"longName" in locals_for_with?locals_for_with.longName:typeof longName!=="undefined"?longName:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "mixin usecaselist(name, list)\n  h4= name\n  ul\n    each item in list\n      li(data-title=item.Title)\n        if item.linkOnly\n          a(href=item.Website, target=\"_blank\")= item.Title\n        else\n          span= item.Title\n        img(src=item.Website + 'favicon.ico', onerror=\"this.style.display='none';\")\n\n\n.domain\n  .head\n    img(src='img/usecases/'+ name + '.jpg', title=Use_Case_category)\n    h3= longName\n    p.description= description\n\n  .lists\n    if (byStatus.operational || byStatus.under_development)\n      .operational\n        if (byStatus.operational)\n          +usecaselist('Operational', byStatus.operational)\n        if (byStatus.under_development)\n          +usecaselist('Under development', byStatus.under_development)\n\n    if (byStatus.idea)\n      .idea\n        +usecaselist('Idea', byStatus.idea)\n");
}
}