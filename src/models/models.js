export class app {
    
    static produtos = []

    get produtos(){
        return app.produtos
    }
    set produtos(valor){
        app.produtos = valor
    }

    static requisicao(){
  
        fetch('https://m2-kenzie-shop.herokuapp.com/products')
        .then(response => response.json())
        .then((data)=>{
            //AQUI VOCÊ PODE FAZER UM LOOP, PARA PEGAR TODOS OS PRODUTOS
            data.products.forEach((element, index) => {
                this.produtos.push(element)
                this.produtos[index].imageUrl = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${element.id}/Image.png`
            });
            console.log(app.produtos)
            const body = document.querySelector("body")

            const boxProducts = document.createElement("div")
            boxProducts.classList.add("boxProducts")

            app.produtos.forEach(event => {
                const boxProduto = document.createElement("div") //box de cada produto
                boxProduto.classList.add("boxProduto")
            
                const imgProduto = document.createElement("img")
                imgProduto.src = event.imageUrl
                boxProduto.appendChild(imgProduto)
            
                const avalicao = document.createElement("ul") //avaliação 
            
                const estrelaUm = document.createElement("li")
                avalicao.appendChild(estrelaUm)
            
                const estrelaDois = document.createElement("li")
                avalicao.appendChild(estrelaDois)
            
                const estrelaTres = document.createElement("li")
                avalicao.appendChild(estrelaTres)
            
                const estrelaQuatro = document.createElement("li")
                avalicao.appendChild(estrelaQuatro)
            
                const estrelaCinco = document.createElement("li") //ultima estrela
                avalicao.appendChild(estrelaCinco)

                //logica para a avaliacao

                if(event.reviews === 5){
                    estrelaUm.classList.add("starOn")
                    estrelaDois.classList.add("starOn")
                    estrelaTres.classList.add("starOn")
                    estrelaQuatro.classList.add("starOn")
                    estrelaCinco.classList.add("starOn")
                }
                else if(event.reviews === 4){
                    estrelaUm.classList.add("starOn")
                    estrelaDois.classList.add("starOn")
                    estrelaTres.classList.add("starOn")
                    estrelaQuatro.classList.add("starOn")
                }
                else if(event.reviews === 3){
                    estrelaUm.classList.add("starOn")
                    estrelaDois.classList.add("starOn")
                    estrelaTres.classList.add("starOn")
                }
                else if(event.reviews === 2){
                    estrelaUm.classList.add("starOn")
                    estrelaDois.classList.add("starOn")
                }
                else if(event.reviews === 1){
                    estrelaUm.classList.add("starOn")
                }
            
                boxProduto.appendChild(avalicao)
            
                const nomeProduto = document.createElement("p")
                nomeProduto.innerText = event.productName
                boxProduto.appendChild(nomeProduto)
            
                const valor = document.createElement("span") //usar os spans parar adicionar o valor dos preços
                valor.innerText = event.price.productPrice.toFixed(2).toString().replace(".", ",")
            
                const precoSemPromo = document.createElement("p")
                precoSemPromo.classList.add("precoSemPromo")
                precoSemPromo.innerText = "R$ "
                precoSemPromo.appendChild(valor) 
                boxProduto.appendChild(precoSemPromo)
            
                //const precoPromo = document.createElement("p")
            
                const valorPromo = document.createElement("span")
                valorPromo.innerText = event.price.productPromotionPrice
            
                const btnComprar = document.createElement("button")
                btnComprar.innerText = "COMPRAR"
                boxProduto.appendChild(btnComprar)
            
                boxProducts.appendChild(boxProduto)
            })
            body.appendChild(boxProducts)
        })
  
    }
}
