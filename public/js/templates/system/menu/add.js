(function(){dust.register("system.menu.add",body_0);function body_0(chk,ctx){return chk.write("<div class=\"panel panel-primary\"><div class=\"panel-heading\">").reference(ctx.get(["title"], false),ctx,"h").write("</div><div class=\"panel-body\">").partial("system.menu._form",ctx,{"addTop":"true"}).write("</div></div><script type=\"text/javascript\">$(function() {$(\"#returnButton\").attr(\"href\", \"/system/menus\");$(\"#addMenuForm\").validate({submitHandler:function(form){$(\":button\").attr(\"disabled\",\"true\");submitForm(form, '/system/menus/add');},focusCleanup:true});changeADefault();});</script>");}return body_0;})();