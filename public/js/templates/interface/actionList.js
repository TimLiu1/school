(function(){dust.register("interface.actionList",body_0);function body_0(chk,ctx){return chk.write("<div class=\"form-group\"><div class=\"col-sm-12\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#actionInfo\" data-toggle=\"tab\">Action信息</a></li></ul></div><input type=\"hidden\" id=\"hiddenInterface\" value=\"").reference(ctx.getPath(false, ["item","_id"]),ctx,"h").write("\"></div><div class=\"form-group\"><div class=\"col-sm-12 tab-content\"><div class=\"tab-pane active\" id=\"actionInfo\"><div class=\"form-group\"><div class=\"col-sm-12\"><table class=\"table table-hover table-condensed table-striped text-left\"><thead><tr><th class=\"col-sm-2\">Action</th><th class=\"col-sm-2\">Schema</th><th class=\"col-sm-2\">路径</th><th class=\"col-sm-4\">说明</th><th class=\"col-sm-2\">操作选项</th></tr></thead><tbody>").section(ctx.getPath(false, ["item","actions"]),ctx,{"block":body_1},null).write("</tbody></table><form id=\"actionsForm\" method=\"post\" role=\"form\"><div class=\"row text-left\"><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" name=\"ac[action]\" required></div><div class=\"col-sm-2\"><input type=\"hidden\" id=\"schema\"  name=\"ac[jsonSchema]\" required><a href=\"#\" class=\"form-control\" id=\"inputSchema\" data-type=\"textarea\" data-pk=\"1\"  data-title=\"录入报文的JSON schema\" ><i class=\"icon-file-alt icon-large\"></i>请录入</a></div><div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" name=\"ac[url]\" required></div><div class=\"col-sm-4\"><input type=\"text\" class=\"form-control\" name=\"ac[descript]\" required></div><div class=\"col-sm-2\"><div class=\"btn-group btn-group-sm\"><a href=\"#\" id=\"addActionButton\" title=\"添加\" class=\"btn btn-primary\"><i class=\"icon-plus icon-large\"></i></a></div></div></tr><form></div></div></div></div></div><script type=\"text/javascript\">$(function() {$(\"#actionsForm\").validate({ignore: '',submitHandler: function(form) {$(\":button\").attr(\"disabled\", \"true\");var id = $('#hiddenInterface').val();submitForm(form, '/interface/' + id + '/action/new', function(data) {interfaceObj.renderActions(id, data);});},rules: {'ac[jsonSchema]': {required: true}},focusCleanup: true});$('#inputSchema').editable({tpl: \"<textarea cols='70'></textarea>\",rows: 12,display: false,value: function() {var hiddenValue = $('#schema').val();return hiddenValue;},success: function(response, newValue) {if (newValue) {$(this).text('点击查看');try {var obj = JSON.parse(newValue);var text = JSON.stringify(obj);$('#schema').val(text);} catch (err) {$('#schema').val(newValue);}} else {$(this).html('<i class=\"icon-file-alt icon-large\"></i>请录入');}$('.editableform').each(function() {$(this).data('validator', $('#actionsForm').data('validator'));});}}).on('shown', function(e, editable) {$('.editableform').data('validator', $('#actionsForm').data('validator'));});$('[name=\"valueSchema\"]').editable({tpl: \"<textarea cols='70'></textarea>\",rows: 12,display: false,showbuttons: false}).on('shown', function(e, editable) {$('.editableform').data('validator', $('#actionsForm').data('validator'));});$('[name=\"valueSchema\"]').click(function(event) {var hiddenValue = $(this).attr('data-schema');try {var obj = JSON.parse(hiddenValue);var text = JSON.stringify(obj, null, 4);$(this).editable('setValue', text);} catch (err) {$(this).editable('setValue', hiddenValue);}});$(\"#addActionButton\").click(function(event) {$(\"#actionsForm\").submit();});$(\"[name='deleteActionBtn']\").click(function(event) {var interfaceID = $('#hiddenInterface').val();var actionID = $(this).attr('value');bootbox.confirm(\"确定删除？\", function(result) {if (result) {$.get(\"/interface/\" + interfaceID + \"/action/\" + actionID +\"/delete?\" + new Date().getTime(), function(data, status) {if (status === 'success') {var some_html = '<br><div class=\"alert alert-success fade in\">';some_html += '<label>成功删除</label>';some_html += '</div>';var box = bootbox.alert(some_html);box.on('hidden.bs.modal', function(e) {interfaceObj.renderActions(interfaceID, data);});} else {var some_html = '<br><div class=\"alert alert-danger fade in\">';some_html += '<label>调用后台出错：' + xhr.statusText + '</label>';some_html += '</div>';bootbox.alert(some_html);}});}});});});</script>");}function body_1(chk,ctx){return chk.write("<tr><td>").reference(ctx.getPath(true, ["action"]),ctx,"h").write("</td><td><a href=\"#\" class=\"form-control\" name=\"valueSchema\" data-schema=\"").reference(ctx.getPath(true, ["jsonSchema"]),ctx,"h").write("\" data-type=\"textarea\" data-pk=\"").reference(ctx.getPath(true, ["idx"]),ctx,"h").write("\"  data-title=\"点击查看\" >点击查看</a></td><td>").reference(ctx.getPath(true, ["url"]),ctx,"h").write("</td><td>").reference(ctx.getPath(true, ["descript"]),ctx,"h").write("</td><td><div class=\"btn-group btn-group-sm\"><a class=\"btn btn-default\" href=\"#\" value=\"").reference(ctx.getPath(true, ["_id"]),ctx,"h").write("\" data-toggle=\"tooltip\" data-placement=\"top\" name=\"deleteActionBtn\" title=\"删除\"><i class=\"icon-remove icon-large\"></i></a></div></td></tr>");}return body_0;})();