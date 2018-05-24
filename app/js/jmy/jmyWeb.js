$(document).ready(function() {
	var config = [];
	var sinGuardar = [];
	$("#jmy_web").hide(250);
	$(".jmy_web_contador").hide(250);

	function initConfig() {
		$.getJSON("javascript/configuracion.json", function(result) {
			config = result;
		});
	}


	
	function jmy_web_guardar(d) {
		console.log(d);
		d = d.data;
		if (d.id != '') {
			var v = (d.valor!=undefined)?d.valor:$("#" + d.id).html();
			var g = {
				"valor": v,
				"pagina": d.page,
				"tabla": d.tabla,
				"opciones": {
					"href": $("#jmy_web_href").val()
				},
				"id": d.id,
			};
			if (g.href != undefined) {
				$("#" + d.id).attr("href", g.href);
			}
			$.ajax({
				url: location.origin + '/jmyWebAjG',
				type: 'post',
				dataType: 'json',
				success: function(res) {
					mensajeGuardado();
				},
				error: function(res) {
					console.log(res);
				},
				data: g
			});
			console.log(g);
		} else {
			console.log("Falta datos para poder guardar");
		}
	}

	function botones(d = []) {
		var left = d.pageX;
		var top = d.pageY + 30;
		console.log(d);
		d = d.data;
		$("#jmy_web").html("");
		$("#jmy_web").addClass("jmyweb-botones");
		$("#jmy_web").css({
			'left': left + 'px',
			'top': top + 'px',
			'z-index': '10000',
			'position': 'absolute',
			'border-radius': '5px',
			'padding': '5px',
			'background-color': 'rgba(200,200,200,0.65)'
		});
		var href = ($("#" + d.id).attr("href") != undefined) ? $("#" + d.id).attr("href") : false;
		var html = ''; /*if(href!==false)		//	html = html + '<input type="text" value="'+href+'" id="jmy_web_href" placeholder="href:'+data.data.id+'"> ';		*/
		html = html + '<img src="http://social.comsis.mx/templet/images/logo.png" heigth="60"><button class="jmy_web_guardar" data-id="' + d.id + '" data-page="' + d.page + '" data-tabla="' + d.tabla + '" style="background-color:rgba(30,140,30,0.8);padding:8px;color:#fff;font-size:16px;border:0;border-radius:5px">[=] Guardar</button><button class="jmy_web_cancelar" style="background-color:rgba(140,30,30,0.8);padding:8px;color:#fff;font-size:16px;border:0;border-radius:5px">[x]</button>';
		$("#jmy_web").html(html);
		$("#jmy_web").show(250);
		$(".jmy_web_guardar").click(function() {
			jmy_web_guardar({data:d});
		});
		$(".jmy_web_cancelar").click(function(e) {
			$("#jmy_web").hide(250);
		});
	}

	function herramientas(d = []) {
		var left = 100;
		var top = 5;
		$("#jmy_web_tools").html("");
		$("#jmy_web_tools").addClass("jmyweb-botones");
		$("#jmy_web_tools").css({
			'right': left + 'px',
			'top': top + 'px',
			'position': 'fixed',
			'z-index': '100000'
		}); 
		var html = '';
		/*if(href!==false)	
			html = html + '<input type="text" value="'+href+'" id="jmy_web_href" placeholder="href:'+d.data.id+'"> ';*/
		html = html + '<button class="jmy_t_guardar" style="background-color:rgba(30,140,30,0.8);padding:8px;color:#fff;font-size:16px;border:0;border-radius:5px;">[+] Guardar todos los cambios</button><button class="jmy_web_tools_cancelar" style="background-color:rgba(140,30,30,0.8);padding:8px;color:#fff;font-size:16px;border:0;border-radius:5px;"> [x] Descartar todos los cambios</button>';
		$("#jmy_web_tools").html(html);
		$("#jmy_web_tools").show(250);
		$(".jmy_t_guardar").click(function() {
			guardarSinGuardar();
			$("#jmy_web_tools").hide(250);
		});
		$(".jmy_web_tools_cancelar").click(function(e) {
			$("#jmy_web_tools").hide(250);
		});
	}
	function guardarSinGuardar(){
		console.log(sinGuardar);
		var t = [];
		for (var i = 0; i < sinGuardar.length; i++) {
			t = {
				"id": sinGuardar[i],
				"page": $("#" + sinGuardar[i]).data("page"),
				"tabla": $("#" + sinGuardar[i]).data("tabla"),
			};
			console.log(t);
			jmy_web_guardar({
				data: t
			});
		}
		sinGuardar = [];
	}
	function mensajeGuardado() {
		$("#jmy_web").html("");
		$("#jmy_web").html("<p>Dato guardado :) </p>").delay(2000).hide(500);
	}
	function agregarSinGuardar(d){ // ({id:785})
		if(jQuery.inArray(d.id,sinGuardar)== -1) 
			sinGuardar.push(d.id);		
	}
	$(".jmy_web_div").click(function(e) {
		var d = {
			"id": $(this).attr('id'),
			"placeholder": $(this).data("placeholder"),
			"page": $(this).data("page"),
			"tabla": $(this).data("tabla"),
		};
		agregarSinGuardar(d);
		herramientas();
		if ($(this).data('editor') != 'no') { /*CKEDITOR.remove(data.id); CKEDITOR.replace(this);*/ } else {
			$(this).attr("contenteditable", "true");
			CKEDITOR.remove(d.id);
			botones({
				pageX: e.pageX,
				pageY: e.pageY,
				data: d
			});
		}
	}); /*Final de funciones Globales para el tema */ /* Funciones Editor de Blog */
	function msk_add_blog() {
		var html = '<button class="jmy_blog_guardar" >Agregar post en el Blog</button>';
		html = html + '<input type="text" id="nombre_nuevo_post" placeholder="Nombre del nuevo post"> ';
		$("#jmy_web_agregar_blog").html("");
		$("#jmy_web_agregar_blog").html(html);
		$(".jmy_blog_guardar").click(function() {
			var str = $("#nombre_nuevo_post").val();
			if (str != '') {
				var r = str.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();
				r = location.origin + "/blog/" + r + "/guardar";
				window.location.href = r;
			} else {
				alert('Primero ingrese el titulo del post');
			}
		});
	}

	$(".jmy_web_categorias").click(function(e) {
		var d = { 	"t":$(this).data('titulo'),
					"v":$(this).data('value'),
					"p":$(this).data('page'),
					"id":$(this).attr('id'),
				};
		console.log(d);
		var t = (d.t!='') ? d.t : 'Indica el nombre de cada sección separado por comas';
		var v = prompt(t,d.v);		
		if (v != null) {
			jmy_web_guardar({data:{
					"valor": v,
					"page": d.p,
					"id": d.id,	
				}});
			location.reload();			
		}	    
	}); 


	function html_categorias(d=[]){
		var h='';
		var b='';
		$(".jmy_web_categorias").each(function() {
			h='';			
			b=$(this).data('button');
			console.log(b);
			b=(b!=undefined)?b:'Cambiar titulos de pestañas';
			h = '<div style="background-color:rgba(30,170,30,0.7);padding:4px;font-size:16px;color:fcfcfc;border-radius:5px">'+b+'</div>';
			$(this).html('');	
			$(this).show(250);	
			$(this).html(h);				
		});
	}

	$(".jmy_web_contador").click(function(e) {
		var d = { 	"t":$(this).data('titulo'),
					"v":$(this).data('value'),
					"p":$(this).data('page'),
					"id":$(this).attr('id'),
				};
		console.log(d);
		var t = (d.t!='') ? d.t : 'Indica en número la cantidad de paginas de este elemento a mostrar';
		var v = prompt(t,d.v);		
		if (v != null) {
			v = parseInt(v);
			if (v != null ) {
				jmy_web_guardar({data:{
						"valor": v,
						"page": d.p,
						"id": d.id,	
					}});
				location.reload();
			}else{
				alert('valor incorrecto');
			}
		}	    
	}); 

	function html_contador(d=[]){
		var c='';
		var h='';
		var b='';
		$(".jmy_web_contador").each(function() {
			h='';
			c=$(this).data('value');
			b=$(this).data('button');
			b=(b!=undefined)?b:'Carrucel de '+c+' páginas';
			h = '<div style="background-color:rgba(30,170,30,0.7);padding:4px;font-size:16px;color:fcfcfc;border-radius:5px">'+b+'</div>';
			$(this).html('');	
			$(this).show(250);	
			$(this).html(h);				
		});
	}

	function carga(d = []) {
		$(".jmy_web_div").each(function() {
			if ($(this).data('editor') != 'no') $(this).attr("contenteditable", "true");
			else console.log(this);
		});
	}
	$("#jmy_web").draggable({
		cursor: "move",
		cursorAt: {
			top: 20,
			left: 20
		}
	});


	carga();
	html_contador();
	html_categorias();
	msk_add_blog();
});