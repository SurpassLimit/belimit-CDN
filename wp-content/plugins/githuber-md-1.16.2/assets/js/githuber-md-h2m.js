!function(t){t((function(){var e=window.h2m_config,a=t("input[name=h2m_strip_tags]:checked").val(),n=t("input[name=h2m_line_break]:checked").val();t("#btn-html2markdown").click((function(){var i=githuber_md_editor.getValue();t.ajax({url:e.ajax_url,type:"post",dataType:"json",data:{action:"githuber_html2markdown",strip_tags:a,line_break:n,post_id:e.post_id,post_content:i},success:function(t){t.success&&githuber_md_editor.setValue(t.result)}})}))}))}(jQuery);