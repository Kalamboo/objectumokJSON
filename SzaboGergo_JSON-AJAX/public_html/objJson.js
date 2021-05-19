var tarsasTomb = [];

$(function(){
   console.log("Szia Uram!"); 
//   console.log(tarsasJson);
//   var tarsasTomb = JSON.parse(tarsasJson);
//   console.log(tarsasTomb);
   
   $.ajax({
       url: "termekek.json", 
       success: function(result){
           console.log(result);
           tarsasTomb = result;
           kiir();
       }}
   );
   
   $("#OK").click(ment);
});

function kiir(){
    $("artcile").empty();
    
    console.log(tarsasTomb);
    $("article").append("<table>");
    $("article table").append("<tr>");
    
    $("article table tr").append("<th>Termék neve: </th>");
    $("article table tr").append("<th>Ár: </th>");
    $("article table tr").append("<th>Típus: </th>");
    for (var i = 0; i < tarsasTomb.length; i++) {
         $("article table").append("<tr>");
         for (var item in tarsasTomb[i]) {
            $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");
         }
    }
}

//var tarsasTomb = [
//    {
//        termeknev:"Monopoly",
//        ar:5000,
//        tipus:"táblajáték"
//    },
//    {
//        termeknev:"Bang",
//        ar:500,
//        tipus:"kártyajáték"
//    }
//];

//var tarsasJson = '[{"termeknev":"Monopoly","ar":5000,"tipus":"táblajáték"},{"termeknev":"Bang","ar":500,"tipus":"kártyajáték"}]';

function ment(){
    var ujAdat = {};
    ujAdat.termekNev = $("#nev").val();
    ujAdat.termekAr = $("#ar").val();
    ujAdat.termekTipus = "Táblás";
    
    console.log(ujAdat);
    
    tarsasTomb.push(ujAdat);
    
    kiir();
}