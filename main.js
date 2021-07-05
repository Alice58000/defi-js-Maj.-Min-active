document.getElementById("input").addEventListener("keyup",
function(event) {
 //votre code ici



    let texte = document.getElementById('warning');
    let texte2 = document.getElementById('warning2');
    let texte3 = document.getElementById('warning3');


        if(event.getModifierState("CapsLock")) {
            
            texte.setAttribute("style" , "display:inline");
        
        }

        else {
            texte.setAttribute("style" , "display:none");
        }
    
        if(event.getModifierState("NumLock")) {
            
        texte2.setAttribute("style" , "display:inline");
    
        }

        else {
        texte2.setAttribute("style" , "display:none");
        }

         if((event.getModifierState("CapsLock")) && (event.getModifierState("NumLock")))

         {
         texte3.setAttribute("style" , "display:inline");
         texte.setAttribute("style" , "display:none");
         texte2.setAttribute("style" , "display:none");


         }
       
         else {
             texte3.setAttribute("style" , "display:none");
         }

         });


// detecter si la touche maj est activée ou non avec une petite alerte
// detecter si la touche num est activée ou non avec une petite alerte 
// detecter si les deux touches sont activées 


