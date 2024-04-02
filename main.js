document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("click", function() {
        var resumo = document.getElementById("resumo");
        
        // Oculta todos os produtos
        document.querySelectorAll(".card").forEach(function(card) {
            card.style.display = "none";
        });
        
        resumo.style.display = "block"; // Mostra o resumo do capítulo
    });
});