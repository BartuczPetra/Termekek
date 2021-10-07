$(function(){
    const termekek=[];
    console.log("vmi");

    adatbeolvas("jsontermekek.json",termekek, tablazatbaIras );
    

  function tablazatbaIras(){
    $("article div").eq(0).append("<table>");
    var txt="<tr id='fejlec'><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th></tr>";
    
    termekek.forEach(function(value, index){
        
        txt += "<tr id='" + index + "'>";
        
        for (let item in value) {
            
          txt += "<td>" + value[item] + "</td>";
        }
        txt+='<td class="modosit" id="m'+(index)+'">' + '<form><input type="button" name="modosit" value="Módosítás"></form>' +"</td>";
        txt += "</tr>";
        
    });
    $("article table").html(txt);
    
}

function modositas(){
    console.log("mod");
    var i = $(this).attr("id");
    var index=i[1];

    $("#termeknev").attr("value", termekek[index].Terméknév);
    $("#leiras").attr("value", termekek[index].Leírás);
    $("#keszlet").attr("value", termekek[index].Készlet);
    $("#ar").attr("value", termekek[index].Ár);
}

  function adatbeolvas(fajlnev, tomb, myCallback){
    $.ajax(
          {
          url: fajlnev, 
          success: function(result){
                  result.forEach((value) => {
                      tomb.push(value);
                  });
                 myCallback();
                 $(".modosit").on("click",  modositas);
              }
          }
        );

  }
  
  });