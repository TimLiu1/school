(function(){dust.register("system.menu.index",body_0);function body_0(chk,ctx){return chk.write("<div class=\"panel-group\" id=\"mainContent\"><div class=\"panel panel-default\"><div class=\"panel-heading\"><div class=\"btn-group\"><a data-toggle=\"collapse\" class=\"btn btn-default\" data-toggle=\"collapse\" data-parent=\"#mainContent\" href=\"#condition\">查询条件</a><a class=\"btn btn-default\" href=\"/system/menus/add\">新增一级菜单</a></div></div><div id=\"condition\" class=\"panel-collapse collapse\"><div class=\"panel-body\"><form class=\"form-inline\" role=\"form\"><div class=\"form-group\"><label for=\"exampleInputEmail1\">所属应用</label><select class=\"form-control\"  name=\"application\"><option></option>").section(ctx.get(["clients"], false),ctx,{"block":body_1},null).write("</select></div><button type=\"submit\" class=\"btn btn-default\">查询</button></form></div></div></div><div class=\"panel panel-primary\"><div class=\"panel-heading\">查询结果</div><table class=\"table table-hover table-condensed\"><thead><tr><th class=\"col-sm-2\">菜单名</th><th class=\"col-sm-2\">菜单链接</th><th class=\"col-sm-2\">级别</th><th class=\"col-sm-2\">所属应用</th><th class=\"col-sm-2\">排序因子</th><th class=\"col-sm-2\">操作选项</th></tr></thead><tbody>").section(ctx.get(["menus"], false),ctx,{"block":body_2},null).write("</tbody></table></div></div><div class=\"container-fluid\"><ul class=\"pagination\"></ul></div><script type=\"text/javascript\">$(function() {var options = {currentPage: ").reference(ctx.get(["page"], false),ctx,"h").write(",bootstrapMajorVersion : 3,totalPages: ").reference(ctx.get(["pageCount"], false),ctx,"h").write(",pageUrl : function(type, page, current){if (window.location.href.indexOf('down') >= 0) {var showNextMenuId=$(\"input[name='showNextMenuId']\").val();return '/system/menus/'+showNextMenuId+'/down?page='+page;}else{return '/system/menus?page='+page;}},itemContainerClass: function (type, page, current) {return (page === current) ? \"disabled\" : \"pointer-cursor\";},itemTexts: function (type, page, current) {switch (type) {case \"first\":return \"<<\";case \"prev\":return \"<\";case \"next\":return \">\";case \"last\":return \">>\";case \"page\":return page;}}};$('.pagination').bootstrapPaginator(options);$(\"a[name='deleteBtn']\").click(function() {var id = $(this).attr('value');bootbox.confirm(\"确定删除？\", function(result) {if (result) {$.get(\"/system/menus/\" + id + \"/delete?\" + new Date().getTime(), function(data, status) {if (status === 'success') {var some_html = '<br><div class=\"alert alert-success fade in\">';some_html += '<label>成功删除</label>';some_html += '</div>';var box = bootbox.alert(some_html);box.on('hidden.bs.modal', function(e) {renderCurrent(function(data, out) {$(\"#main\").html(out);});});} else {var some_html = '<br><div class=\"alert alert-danger fade in\">';some_html += '<label>调用后台出错：' + xhr.statusText + '</label>';some_html += '</div>';bootbox.alert(some_html);}});}});});});</script>");}function body_1(chk,ctx){return chk.write("<option value=\"").reference(ctx.getPath(true, ["clientID"]),ctx,"h").write("\"  >").reference(ctx.getPath(true, ["name"]),ctx,"h").write("</option>");}function body_2(chk,ctx){return chk.write("<tr><td class=\"col-sm-2\">").helper("select",ctx,{"block":body_3},{"key":ctx.get(["parentUrl"], false)}).reference(ctx.getPath(true, ["name"]),ctx,"h").helper("select",ctx,{"block":body_5},{"key":ctx.getPath(false, ["subs","count"])}).write("</td><td class=\"col-sm-2\">").reference(ctx.getPath(true, ["fullUrl"]),ctx,"h").write("</td><td class=\"col-sm-2\">").helper("baseCode",ctx,{},{"code":body_7,"base":"menuLevel"}).write("</td><td class=\"col-sm-2\">").exists(ctx.getPath(true, ["application"]),ctx,{"else":body_8,"block":body_9},null).write("</td><td class=\"col-sm-2\">").reference(ctx.getPath(true, ["sortKey"]),ctx,"h").write("</td><td class=\"col-sm-2\">").exists(ctx.get(["isAdmin"], false),ctx,{"else":body_10,"block":body_11},null).write("</td></tr><input type=\"hidden\" value=\"").reference(ctx.get(["parentId"], false),ctx,"h").write("\" name=\"showNextMenuId\"/>");}function body_3(chk,ctx){return chk.helper("ne",ctx,{"block":body_4},{"value":"/"});}function body_4(chk,ctx){return chk.write("<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"显示上层菜单\"   href=\"/system/menus/").reference(ctx.get(["parentId"], false),ctx,"h").write("/up\" ><i class=\"icon-angle-left icon-large\"></i></a>");}function body_5(chk,ctx){return chk.helper("gt",ctx,{"block":body_6},{"value":0});}function body_6(chk,ctx){return chk.write("<a  data-toggle=\"tooltip\" data-placement=\"top\" title=\"显示下级菜单\"  href=\"/system/menus/").reference(ctx.get(["_id"], false),ctx,"h").write("/down\"><i class=\"icon-angle-right icon-large\"></i></a>");}function body_7(chk,ctx){return chk.reference(ctx.get(["levelId"], false),ctx,"h");}function body_8(chk,ctx){return chk.write("由上级确定");}function body_9(chk,ctx){return chk.reference(ctx.getPath(true, ["application"]),ctx,"h");}function body_10(chk,ctx){return chk.write("<a class=\"btn btn-default btn-xs disabled\" href=\"#\">修改</a><a class=\"btn btn-default btn-xs disabled\" href=\"#\">删除</a>");}function body_11(chk,ctx){return chk.write("<div class=\"btn-group btn-group-sm\"><a class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"编辑\" href=\"/system/menus/").reference(ctx.getPath(true, ["_id"]),ctx,"h").write("/edit\"><i class=\"icon-edit icon-large\"></i></a><a class=\"btn btn-default ").helper("select",ctx,{"block":body_12},{"key":ctx.get(["levelId"], false)}).write("\"  href=\"/system/menus/").reference(ctx.getPath(true, ["_id"]),ctx,"h").write("/addSub\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"新增下级\"><i class=\"icon-plus icon-large\"></i></a>").helper("eq",ctx,{"block":body_14},{"key":body_15,"value":"1"}).write("</div>");}function body_12(chk,ctx){return chk.helper("gte",ctx,{"block":body_13},{"value":3});}function body_13(chk,ctx){return chk.write("disabled");}function body_14(chk,ctx){return chk.write("<a class=\"btn btn-default\" data-toggle=\"tooltip\" name=\"deleteBtn\" value=\"").reference(ctx.getPath(true, ["_id"]),ctx,"h").write("\" data-placement=\"right\" title=\"删除\" href=\"#\"><i class=\"icon-remove icon-large\"></i></a>");}function body_15(chk,ctx){return chk.reference(ctx.getPath(true, ["levelId"]),ctx,"h");}return body_0;})();