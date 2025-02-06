let pass = prompt("Enter Secret Word");

if(pass=="arise"){
    document.getElementById("menu-toggle").addEventListener("click", function() {
        const menu = document.getElementById("button-menu");
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
    
    const englishLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    const gujaratiLetters = "અઆઇઈઉઊએઐઓઔકખગઘચછજઝટઠડઢતથદધનપફબભમયરલવશષસહ".split("");
    const numbers = "0123456789".split("");
    
    let englishPool = [...englishLetters];
    let gujaratiPool = [...gujaratiLetters];
    let numberPool = [...numbers];
    
    function generateCharacter(type) {
        let pool;
        if (type === 'english') pool = englishPool;
        else if (type === 'gujarati') pool = gujaratiPool;
        else if (type === 'number') pool = numberPool;
    
        if (pool.length === 0) {
            document.getElementById("letter").innerText = "All used!";
            return;
        }
    
        const randomIndex = Math.floor(Math.random() * pool.length);
        const randomChar = pool.splice(randomIndex, 1)[0];
        
        document.getElementById("letter").innerText = randomChar;
    }
    
    function resetCharacters() {
        englishPool = [...englishLetters];
        gujaratiPool = [...gujaratiLetters];
        numberPool = [...numbers];
        document.getElementById("letter").innerText = "👍";
    }
}

