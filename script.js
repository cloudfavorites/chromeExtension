if(document.URL.indexOf("/collect?") < 0){
	var description;
	var desString="";
	var loginStr="";
	var charset = "";
	var loginCharset = "";
	var metas=document.getElementsByTagName('meta');
	for(var x=0,y=metas.length;x<y;x++){
	    if(metas[x].name.toLowerCase()=="description"){
	           description=metas[x];
	      }
	 }
	if(description){
			desString="&amp;description="+encodeURIComponent(description.content);
			charset = document.charset;
	}
	var win=window.open("yourUrl&url="+encodeURIComponent(document.URL)+desString+"&title="+encodeURIComponent(document.title)+"&charset="+document.charset,'_blank');
        win.focus();
}
