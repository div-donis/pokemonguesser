document.addEventListener("DOMContentLoaded", () =>{

    const subject = document.getElementById('name');
  
    const fetchPokemon = () => {
        const prom = [];
        for (let i = 1; i <= 898; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            prom.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(prom).then((res) => {
            const pokemons = res.map((subj) => ({
                name: subj.name,
                id: subj.id,
                image: subj.sprites['front_default'],
            }));
            displayRandom(pokemons);
        });
    };
    
    const displayRandom = (pokemons) => {
  
      const parent = document.querySelector(`.parent`)
      pokemons.forEach(pokemon => {
        let pokeDiv = document.createElement(`div`)
        let image = document.createElement(`img`)
        let name = document.createElement(`h2`)
  
        pokeDiv.className = `guess`
        image.className = `image`
        name.className = `pokemonname`
  
        image.setAttribute(`src`, `${pokemon.image}`)
        name.innerText = `${pokemon.name.toUpperCase()}`
  
        pokeDiv.appendChild(image)
        pokeDiv.appendChild(name)
        parent.appendChild(pokeDiv)

        image.addEventListener("click", function(){
            image.style.filter = "brightness(100%)"
            name.style.visibility = "visible"
        })
        let showAll = document.querySelector("#showall")

        showAll.addEventListener("click", function(){
            image.style.filter = "brightness(100%)"
            name.style.visibility = "visible"
        })

        let hideAll = document.querySelector("#hideall")
        
        hideAll.addEventListener("click", function(){
            image.style.filter = "brightness(0%)"
            name.style.visibility = "hidden"
        })
        
      });
      };
  
  
   
   
       
      
      
    
    fetchPokemon();
  });