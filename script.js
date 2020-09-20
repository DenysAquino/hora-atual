
        function horaAtual () {
            let img = document.getElementById('imagem')
            let hora = new Date
            let h = hora.getHours()
            let m = hora.getMinutes()
            let s = hora.getSeconds()
            document.getElementById('corpo').innerHTML = `Olá, Agora são ${h}:${m}:${s}.`
            setTimeout('horaAtual()',500)

            if (h >= 0 && h <6) {
                img.src = "noite.jpg" 
                document.body.style.background = 'blue'
                document.getElementById('bom').innerText ='Boa Madrugada!'
            }else if (h < 12 && h > 6) {
                img.src = "manha.jpg"
                document.body.style.background = 'purple'
                document.getElementById('bom').innerText = 'Bom dia!'
            }else if (h > 12 && h < 18) {
                img.src = "tarde.jpg"
                document.body.style.background = 'darkgray'
                document.getElementById('bom').innerText = 'Boa tarde!'
            }else if (h > 18) {
                img.src = "noite.jpg" 
                document.body.style.background = 'darkblue'
                document.getElementById('bom').innerText = 'Boa Noite!'
            }else {
                document.getElementById('tema').innerText = 'Hora inválida'
            }
        }
    
