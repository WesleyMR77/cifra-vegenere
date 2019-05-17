let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function crip() {
    let cript = document.getElementById("message").value.toLowerCase()
    let key = document.getElementById("key").value.toLowerCase() // pega elementos
    stop = 0

    if (cript != "" && key != "") { //verifica se não possui nada
        cript = removeAccent(cript)
        r = cript.split(" ")
        key = removeAccent(key) //
        key = putSpace(key)
        stop = verKey(stop, key)

        if (stop == 0) { //verifica se roda
            var j = 0
            v = []
            for (let f = 0; f < r.length; f++) { //verifica a chave
                cript = r[f]
                for (i = 0; i < cript.length; i++) { //até palavra acabar
                    var pV = 0
                    while (true) {
                        if (alphabet.includes(cript.charAt(i)) === false) { //adiciona elemento que não criptografa
                            v.push(cript.charAt(i))
                            break
                        }
                        if (cript.charAt(i) == alphabet[pV]) { // encontrar colocação da palavra no vetor 

                            var pK = 0
                            while (true) {
                                if (key.charAt(j) == alphabet[pK]) { // calculo para adicionar a letra com criptografia  
                                    if (pK + pV > 25) {
                                        v.push(alphabet[pK + pV - 26])
                                    }
                                    if (pK + pV <= 25) {
                                        v.push(alphabet[pK + pV])
                                    }

                                    if (j < key.length) {
                                        j += 1
                                    }
                                    if (j >= key.length) {
                                        j = 0
                                    }
                                    break
                                }
                                pK += 1
                            }
                            break
                        }
                        pV += 1
                    }
                }
                v.push(" ")
            }
            document.getElementById("result").innerHTML = v.join("")
        }
        else {
            document.getElementById("result").innerHTML = "Insira corretamente a chave"
        }
    }
    else {
        document.getElementById("result").innerHTML = ("Preencha os Campos")
    }
}

function descript() {
    let message = document.getElementById("message").value.toLowerCase()
    let key = document.getElementById("key").value.toLowerCase()
    stop = 0

    if (message != "" && key != "") {
        message = removeAccent(message)
        r = message.split(" ")
        key = removeAccent(key)
        key = putSpace(key)

        stop = verKey(stop, key)

        if (stop == 0) {
            var j = 0
            v = []
            for (f = 0; f < r.length; f++) {
                cript = r[f]
                for (i = 0; i < cript.length; i++) { //até palavra acabar
                    var pV = 0
                    while (true) {
                        if (alphabet.includes(cript.charAt(i)) === false) { //adiciona elemento que não criptografa
                            v.push(cript.charAt(i))
                            break
                        }
                        if (cript.charAt(i) == alphabet[pV]) { // encontrar colocação da palavra no vetor 
                            var pK = 0
                            while (true) {
                                if (key.charAt(j) == alphabet[pK]) { //verifica a chave             
                                    if (pV - pK < 0) {
                                        v.push(alphabet[pV - pK + 26])
                                    }
                                    if (pV - pK >= 0) {
                                        v.push(alphabet[pV - pK])
                                    }

                                    if (j < key.length) {
                                        j += 1
                                    }
                                    if (j >= key.length) {
                                        j = 0
                                    }
                                    break
                                }
                                if (alphabet.includes(key.charAt(j)) === false) {
                                    j++
                                }
                                pK += 1
                            }
                            break
                        }
                        pV += 1
                    }
                }
                v.push(" ") // adiciona espaço
            }
            document.getElementById("result").innerHTML = v.join("")
        }
        else {
            document.getElementById("result").innerHTML = "Insira corretamente a chave"
        }
    }
    else {
        document.getElementById("result").innerHTML = ("Preencha os Campos")
    }
}

function verKey(stop, key) { //verifica chave
    for (let o = 0; o < key.length; o++) {
        if (alphabet.includes(key.charAt(o)) === false) {
            stop = 1
        }
    }
    return stop
}

function removeAccent(cript) { //funçaõ tira acento
    cript = cript.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    cript = cript.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    cript = cript.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    cript = cript.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    cript = cript.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    cript = cript.replace(new RegExp('[Ç]', 'gi'), 'c');
    return cript;
}

function putSpace(key) { //adiciona espaço
    for (cont = 0; cont < key.length; cont++) {
        key = key.replace(" ", "")
    }
    return key
}
