(function(){dust.register("system.users.edit_change",body_0);function body_0(chk,ctx){return chk.write("<form class=\"form-horizontal\" method=\"post\" id=\"userInfoForm\" role=\"form\" ><div class=\"form-group\">").exists(ctx.getPath(true, ["add"]),ctx,{"else":body_1,"block":body_2},null).write("<label for=\"userFullName\" class=\"col-sm-1 control-label\">姓名<span class=\"required-indicator\">*</span></label><div class=\"col-sm-3\"><input type=\"text\" name=\"user[fullName]\" class=\"form-control\" id=\"userFullName\" value=\"").reference(ctx.getPath(false, ["userone","fullName"]),ctx,"h").write("\" required></div></div><div class=\"form-group\"><label for=\"userInfoEmail\" class=\"col-sm-1 control-label\">邮箱<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\"><input type=\"email\" name=\"userInfo[email]\" value=\"").reference(ctx.getPath(false, ["userInfo","email"]),ctx,"h").write("\"  class=\"form-control\" id=\"userInfoEmail\" required></div><label for=\"userInfoMobile\" class=\"col-sm-1 control-label\">手机<span class=\"required-indicator\">*</span></label><div class=\"col-sm-3\"><input type=\"text\" name=\"userInfo[mobile]\" value=\"").reference(ctx.getPath(false, ["userInfo","mobile"]),ctx,"h").write("\" maxlength=\"11\" class=\"form-control\" id=\"userInfoMobile\" isMobile=\"true\"  required></div><label for=\"userInfoEmail\" class=\"col-sm-1 control-label\">角色信息<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\">").helper("baseCode",ctx,{},{"selectValue":body_3,"name":"user[userType]","base":"userType"}).write("</div></div><div><label for=\"userInfoCompany\" class=\"col-sm-1 control-label\">所属单位<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\"><input type=\"text\" name=\"userInfo[company]\" value=\"").reference(ctx.getPath(false, ["userInfo","company"]),ctx,"h").write("\"  class=\"form-control\" id=\"userInfoCompany\" required></div><label for=\"userInfoCompany\" class=\"col-sm-1 control-label\">是否有效<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\">").helper("baseCode",ctx,{},{"selectValue":body_4,"name":"userInfo[isValid]","base":"isValid"}).write("</div><label for=\"userInfoAddress\" class=\"col-sm-1 control-label\">联系地址<span class=\"required-indicator\">*</span></label><div class=\"col-sm-4\"><input type=\"text\" name=\"userInfo[address]\" value=\"").reference(ctx.getPath(true, ["address"]),ctx,"h").write("\"  class=\"form-control\" id=\"userInfoAddress\" required></div></div><div class=\"form-group\"><div class=\"col-sm-12\"><div class=\"btn-toolbar\" role=\"toolbar\"><div class=\"btn-group\"><button  class=\"btn btn-primary\" type=\"submit\">提交</button></div><div class=\"btn-group\"><a id=\"returnButton\" class=\"btn btn-default\" >返回</a></div><a href=\"\" id=\"tempAB\" hidden=\"true\"></a></div></div></div><div class=\"form-group\"><div class=\"col-sm-12\"><ul class=\"nav nav-tabs\"><li class=\"active\"><a href=\"#roleInfo\" data-toggle=\"tab\">角色信息</a></li><li><a href=\"#branchInfo\" data-toggle=\"tab\">机构信息</a></li></ul></div></div><a href=\"\" id=\"tempC\" hidden=\"true\">").reference(ctx.getPath(true, ["id"]),ctx,"h").write("</a><div id=\"a\"></div><a href=\"\" id=\"tempA\" hidden=\"true\"></a></form><div class=\"form-group\"><div class=\"col-sm-12 tab-content\"><div class=\"tab-pane active\" id=\"roleInfo\">").section(ctx.get(["roleOk"], false),ctx,{"block":body_5},null).section(ctx.get(["unrole"], false),ctx,{"block":body_6},null).write("</div><div class=\"tab-pane\" id=\"branchInfo\">机构信息</div></div></div><script type=\"text/javascript\">$(function() {$(\"#returnButton\").attr(\"href\", \"/system/auth/users/\");$(\"#userInfoForm\").validate({submitHandler:function(form){alert(\"你好\");$(\":button\").attr(\"disabled\",\"true\");submitForm(form, '/system/auth/users/edit');},focusCleanup:true});changeADefault();$(\"[name='user[roles]']\").bootstrapSwitch();$(\"[name='user[roles]']\").bootstrapSwitch('onText','已分配');$(\"[name='user[roles]']\").bootstrapSwitch('offText', '未分配');$(\"[name='user[roles]']\").on('switchChange.bootstrapSwitch', function(event, state) {var value =  $(this).attr('value');if(state == true){var id = $(\"#tempC\").text();$(\"#tempA\").attr(\"href\", \"/system/auth/users/changeRole?id=\" + id+\"&value=\"+value+\"&state=\"+state);$(\"#tempA\").click();}else{var id = $(\"#tempC\").text();$(\"#tempA\").attr(\"href\", \"/system/auth/users/changeRole_red?id=\" + id+\"&value=\"+value+\"&state=\"+state);$(\"#tempA\").click();}});});</script>");}function body_1(chk,ctx){return chk.write("<label for=\"userName\" class=\"col-sm-1 control-label\">登录名<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\"><input type=\"text\" name=\"user[name]\" class=\"form-control\" id=\"userName\" value=\"").reference(ctx.getPath(false, ["userone","name"]),ctx,"h").write("\" readonly></div>");}function body_2(chk,ctx){return chk.write("<label for=\"userName\" class=\"col-sm-1 control-label\">登录名<span class=\"required-indicator\">*</span></label><div class=\"col-sm-2\"><input type=\"text\" name=\"user[name]\" class=\"form-control\" id=\"userName\" value=\"").reference(ctx.getPath(false, ["userone","name"]),ctx,"h").write("\" required></div><label for=\"userPassword\" class=\"col-sm-1 control-label\">初始密码<span class=\"required-indicator\">*</span></label><div class=\"col-sm-3\"><input type=\"text\" name=\"user[password]\" class=\"form-control\" id=\"userPassword\" value=\"").reference(ctx.getPath(false, ["userone","password"]),ctx,"h").write("\" required></div>");}function body_3(chk,ctx){return chk.reference(ctx.getPath(false, ["userone","userType"]),ctx,"h");}function body_4(chk,ctx){return chk.reference(ctx.getPath(false, ["userInfo","isValid"]),ctx,"h");}function body_5(chk,ctx){return chk.write("<span style=\"margin-right: 26px\">").reference(ctx.getPath(true, ["name"]),ctx,"h").write("</span><input type=\"checkbox\"  name=\"user[roles]\" value=\"").reference(ctx.getPath(true, ["code"]),ctx,"h").write("\" checked><span style=\"margin-right: 90px\"></span>");}function body_6(chk,ctx){return chk.write("<span style=\"margin-right: 26px\">").reference(ctx.getPath(true, ["name"]),ctx,"h").write("</span><input type=\"checkbox\"  name=\"user[roles]\" value=\"").reference(ctx.getPath(true, ["code"]),ctx,"h").write("\"><span style=\"margin-right: 90px\"></span>");}return body_0;})();