document.querySelectorAll(".card").forEach(function(card){
    card.addEventListener("click", function(){
        var resumo = document.getElementById("resumo");
        document.querySelectorAll(".card").forEach(function(card){
            card.computedStyleMap.display="none";
        })
    })
    resumo.style.display="block";
})