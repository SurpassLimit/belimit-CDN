!function(e){e((function(){var t=window.md_frontend_settings;"_blank"==t.link_opening_method&&e(".post a").each((function(){-1==e(this).attr("href").indexOf("#")&&e(this).attr("target","_blank")})),"yes"==t.copy_to_clipboard&&function(){for(var e=document.getElementsByTagName("pre"),t=(document.getElementById("paste-content"),!1),n=0;n<e.length;n++){var o=e[n].children[0].className,a=o.indexOf("language-");if(-1!==["language-katex","language-seq","language-sequence","language-flow","language-flowchart","language-mermaid"].indexOf(o)&&(a=-1),-1!==a){var i=document.createElement("button");i.className="copy-button",i.textContent="Copy",e[n].appendChild(i),t=!0}}if(t){var r=new ClipboardJS(".copy-button",{target:function(e){return e.previousElementSibling}});r.on("success",(function(e){e.clearSelection(),e.trigger.textContent="Copied",window.setTimeout((function(){e.trigger.textContent="Copy"}),2e3)})),r.on("error",(function(e){e.trigger.textContent='Press "Ctrl + C" to copy',window.setTimeout((function(){e.trigger.textContent="Copy"}),5e3)}))}}()}))}(jQuery);