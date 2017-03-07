function templatedetail(locals) {
var jade_debug = [ new jade.DebugItem( 1, "templatedetail.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Link_file_if_necessary, Long_description, Slogan___Tweet_length_description, Tags, Title, Use_Case_category, Website, Where_is_the_economic_value___What_is_the_business_model_, Who_offers__or_could_offer__the_service_, countries, domain, status, tags, title, undefined) {
jade_debug.unshift(new jade.DebugItem( 0, "templatedetail.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "templatedetail.jade" ));
buf.push("<div" + (jade.attr("data-title", title, true, false)) + " class=\"detailpopin\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "templatedetail.jade" ));
buf.push("<div class=\"fogbackground\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "templatedetail.jade" ));
buf.push("<div class=\"close\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
buf.push("×");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 0, "templatedetail.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "usecase.jade" ));
buf.push("<div class=\"usecase\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "usecase.jade" ));
buf.push("<a" + (jade.attr("href", Website, true, false)) + " target=\"_blanc\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "usecase.jade" ));
buf.push("<img" + (jade.attr("src", Website + 'favicon.ico', true, false)) + " onerror=\"this.style.display='none';\"/>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "usecase.jade" ));
buf.push("<h1 class=\"textfill\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "usecase.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = Title) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "usecase.jade" ));
if ( status !== 'operational')
{
jade_debug.unshift(new jade.DebugItem( 8, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 8, "usecase.jade" ));
buf.push("<div class=\"status\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 9, "usecase.jade" ));
buf.push("<img" + (jade.attr("src", "img/usecases/" + (status) + ".png", true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "usecase.jade" ));
buf.push("<div class=\"countries\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "usecase.jade" ));
// iterate countries
;(function(){
  var $$obj = countries;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var country = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 12, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "usecase.jade" ));
buf.push("<img" + (jade.attr("src", country.flagURI, true, false)) + (jade.attr("title", country.name, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var country = $$obj[$index];

jade_debug.unshift(new jade.DebugItem( 12, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 13, "usecase.jade" ));
buf.push("<img" + (jade.attr("src", country.flagURI, true, false)) + (jade.attr("title", country.name, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 15, "usecase.jade" ));
buf.push("<div class=\"usecase-main\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 16, "usecase.jade" ));
if ( Slogan___Tweet_length_description)
{
jade_debug.unshift(new jade.DebugItem( 17, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 17, "usecase.jade" ));
buf.push("<div class=\"slogan textfill\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, "usecase.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = Slogan___Tweet_length_description) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "usecase.jade" ));
buf.push("<h3>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 20, jade_debug[0].filename ));
buf.push("Description");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 21, "usecase.jade" ));
buf.push("<div class=\"descriptioncontainer\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 22, "usecase.jade" ));
if ( Long_description)
{
jade_debug.unshift(new jade.DebugItem( 23, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 23, "usecase.jade" ));
buf.push("<div class=\"description textfill\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 24, "usecase.jade" ));
buf.push("<span>" + (null == (jade_interp = Long_description) ? "" : jade_interp));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 26, "usecase.jade" ));
if ( Who_offers__or_could_offer__the_service_)
{
jade_debug.unshift(new jade.DebugItem( 27, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 27, "usecase.jade" ));
buf.push("<div class=\"whooffers\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 28, "usecase.jade" ));
buf.push("<span class=\"h4\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 28, jade_debug[0].filename ));
buf.push("Who offers the service:");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 29, "usecase.jade" ));
buf.push("<span>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 29, jade_debug[0].filename ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 30, "usecase.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = Who_offers__or_could_offer__the_service_) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 32, "usecase.jade" ));
if ( Where_is_the_economic_value___What_is_the_business_model_)
{
jade_debug.unshift(new jade.DebugItem( 33, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 33, "usecase.jade" ));
buf.push("<div class=\"businessmodel\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 34, "usecase.jade" ));
buf.push("<span class=\"h4\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
buf.push("Business model:");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 35, "usecase.jade" ));
buf.push("<span>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 35, jade_debug[0].filename ));
buf.push("&nbsp;");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 36, "usecase.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = Where_is_the_economic_value___What_is_the_business_model_) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
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
jade_debug.unshift(new jade.DebugItem( 38, "usecase.jade" ));
buf.push("<div class=\"usecase-right\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 39, "usecase.jade" ));
buf.push("<h3>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 39, jade_debug[0].filename ));
buf.push("Category");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 40, "usecase.jade" ));
buf.push("<div class=\"domains\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 41, "usecase.jade" ));
buf.push("<img" + (jade.attr("src", 'img/usecases/'+ domain + '.jpg', true, false)) + (jade.attr("title", Use_Case_category, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 43, "usecase.jade" ));
if ( tags)
{
jade_debug.unshift(new jade.DebugItem( 44, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 44, "usecase.jade" ));
buf.push("<h3>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 44, jade_debug[0].filename ));
buf.push("Tags");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 45, "usecase.jade" ));
buf.push("<div class=\"tags textfill\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 46, "usecase.jade" ));
buf.push("<span>" + (jade.escape(null == (jade_interp = Tags) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 48, "usecase.jade" ));
buf.push("<h3>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 48, jade_debug[0].filename ));
buf.push("Website");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 49, "usecase.jade" ));
buf.push("<div class=\"website textfill\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 50, "usecase.jade" ));
buf.push("<a" + (jade.attr("href", Website, true, false)) + " target=\"_blanc\">" + (jade.escape(null == (jade_interp = Website) ? "" : jade_interp)));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 52, "usecase.jade" ));
if ( Link_file_if_necessary)
{
jade_debug.unshift(new jade.DebugItem( 53, "usecase.jade" ));
jade_debug.unshift(new jade.DebugItem( 53, "usecase.jade" ));
buf.push("<a" + (jade.attr("href", Link_file_if_necessary, true, false)) + ">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 53, jade_debug[0].filename ));
buf.push("Resources");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
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
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"Link_file_if_necessary" in locals_for_with?locals_for_with.Link_file_if_necessary:typeof Link_file_if_necessary!=="undefined"?Link_file_if_necessary:undefined,"Long_description" in locals_for_with?locals_for_with.Long_description:typeof Long_description!=="undefined"?Long_description:undefined,"Slogan___Tweet_length_description" in locals_for_with?locals_for_with.Slogan___Tweet_length_description:typeof Slogan___Tweet_length_description!=="undefined"?Slogan___Tweet_length_description:undefined,"Tags" in locals_for_with?locals_for_with.Tags:typeof Tags!=="undefined"?Tags:undefined,"Title" in locals_for_with?locals_for_with.Title:typeof Title!=="undefined"?Title:undefined,"Use_Case_category" in locals_for_with?locals_for_with.Use_Case_category:typeof Use_Case_category!=="undefined"?Use_Case_category:undefined,"Website" in locals_for_with?locals_for_with.Website:typeof Website!=="undefined"?Website:undefined,"Where_is_the_economic_value___What_is_the_business_model_" in locals_for_with?locals_for_with.Where_is_the_economic_value___What_is_the_business_model_:typeof Where_is_the_economic_value___What_is_the_business_model_!=="undefined"?Where_is_the_economic_value___What_is_the_business_model_:undefined,"Who_offers__or_could_offer__the_service_" in locals_for_with?locals_for_with.Who_offers__or_could_offer__the_service_:typeof Who_offers__or_could_offer__the_service_!=="undefined"?Who_offers__or_could_offer__the_service_:undefined,"countries" in locals_for_with?locals_for_with.countries:typeof countries!=="undefined"?countries:undefined,"domain" in locals_for_with?locals_for_with.domain:typeof domain!=="undefined"?domain:undefined,"status" in locals_for_with?locals_for_with.status:typeof status!=="undefined"?status:undefined,"tags" in locals_for_with?locals_for_with.tags:typeof tags!=="undefined"?tags:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".detailpopin(data-title=title)\n  .fogbackground\n  .close ×\n  include usecase");
}
}