function verificar(){
   var data = new Date
   var ano = data.getFullYear()
   var fano = document.getElementById("txtano")
   var res = document.querySelector("div#res")
   var pasta = '/Identifica-Idade-pelo-ano/Aula012%20-%20exercicio%202/imagens%20de%20pessoas/'
               

   if (fano.value.length == 0 || fano.value > ano || fano.value == 0) {
      window.alert('[ERRO] Dados inválidos, amigo! tente novamente')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero  = ''  
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')     
      if (fsex[0].checked){
         genero = 'Homem'         
      if (idade >= 0 && idade < 3) {
         //bb
         document.body.style.background = '#d0d4dd'
         var tipo = "bebe"
         img.setAttribute('src', `${pasta}bebe-homem.jpg`)
      } else if ( idade >= 3 && idade < 10){
         img.setAttribute('src', `${pasta}criança-homem.jpg`)
         var tipo = "criança"
         document.body.style.background = '#507027'
         //criança
      } else if ( idade < 21){
         img.setAttribute('src', `${pasta}adolecente-homem.jpg`)
         document.body.style.background = '#d0d4dd'
         //adolecente
         var tipo = "adolecente"
      } else if ( idade < 50){
         img.setAttribute('src', `${pasta}adulto-homem.jpg`)
         document.body.style.background = '#0b2228'
         //adulto
         var tipo = "adulto"
      } else if (idade < 140){
         img.setAttribute('src', `${pasta}idoso-homem.jpg`)
         document.body.style.background = '#afbfce'
         //idoso
         var tipo = "idoso"
      } else if (idade > 140){
         document.body.style.background = '#000000'
         img.setAttribute('src', `${pasta}caixao.jpg`)
         
         //morreu provavelmente
      }
      //----------------------------- muie abaixo ------------------------------
      } else if (fsex[1].checked){
         genero = "Mulher"
         if (idade >= 0 && idade < 3) {
            img.setAttribute('src', `${pasta}bebe-mulher.jpg`)
            var tipo = "bebe"
            //bb352623
            document.body.style.background = '#352623'

         } else if ( idade >= 3 && idade < 10){
            img.setAttribute('src', `${pasta}criança-mulher.jpg`)
            document.body.style.background = '#7f4f45'
            //criança
            var tipo = "criança"
         } else if ( idade < 21){
            img.setAttribute('src', `${pasta}adolecente-mulher.jpg`)
            document.body.style.background = '#a7756e'
            //adolecente
            var tipo = "adolecente"
         } else if ( idade < 50){
            document.body.style.background = '#51b8d7'
            img.setAttribute('src', `${pasta}adulta-mulher.jpg`)
            //adulto
            var tipo = "adulto"
         } else if (idade < 140){
            img.setAttribute('src', `${pasta}idoso-mulher.jpg`)
            document.body.style.background = '#412522'
            //idoso
            var tipo = "idoso"
         } else if (idade > 140){
            img.setAttribute('src', `${pasta}caixao.jpg`)
            document.body.style.background = '#000000'
            //morreu provavelmente
         }

      }      
      if (idade > 140){
         res.innerHTML = `<p>Provavelmente já está morto<p>`
      } else
      res.innerHTML = `<p>Detectamos <b>${genero}</b> do tipo <b>${tipo}</b> com <b>${idade}</b> anos<p>`
      res.appendChild(img)
   }
   
}
