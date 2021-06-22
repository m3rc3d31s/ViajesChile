$(function(){

    $("a").click(function(event){
       if (this.hash!==""){
           event.preventdefault();
           var gato = this.hash;
           $("html,body").animated({
               sccrolltop: $(gato).offset().top
           },800,function(){
               window.location.hash = gato;
           });
       }
    });

});
