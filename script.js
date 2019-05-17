let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function cript() {
    let cript = document.getElementById("message").value.toLowerCase()
    let key = document.getElementById("key").value.toLowerCase()
    stop = 0

    if (cript != "" && key != "") {
        cript = removeAcento(cript)
        r = cript.split(" ")
        key = removeAcento(key)
        key = trim(key)

        stop = verKey(stop, key) 

        if (stop == 0) {
            var j = 0
            v = []
            for (f = 0; f < r.length; f++) {
                cript = r[f]
                for (i = 0; i < cript.length; i++) { //até palavra acabar
                    var pV = 0
                    while (true) {
                        if (alphabet.includes(cript.charAt(i)) === false) {
                            console.log(alphabet.includes(cript.charAt(i)))
                            break
                        }
                        if (cript.charAt(i) == alphabet[pV]) { // encontrar colocação da palavra no vetor 

                            var pK = 0
                            while (true) {
                                if (key.charAt(j) == alphabet[pK]) { //verifica a chave
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
    else{
        document.getElementById("result").innerHTML = ("Preencha os Campos")
   }
}




function descript() {
    let message = document.getElementById("message").value.toLowerCase()
    let key = document.getElementById("key").value.toLowerCase()
    stop = 0

    if (message != "" && key != "") {
        message = removeAcento(message)
        r = message.split(" ")
        console.log(r[0], r[1])
        key = removeAcento(key)
        key = trim(key)
        console.log("a chave " + key)

        stop = verKey(stop, key)   

        if (stop == 0) {
        var j = 0
        v = []
        for (f = 0; f < r.length; f++) {
            cript = r[f]
            for (i = 0; i < cript.length; i++) { //até palavra acabar
                var pV = 0
                while (true) {
                    if (alphabet.includes(cript.charAt(i)) === false) {
                        console.log(alphabet.includes(cript.charAt(i)))
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
                                console.log(alphabet.includes(key.charAt(j)))
                                j++
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
    else{
        document.getElementById("result").innerHTML = ("Preencha os Campos")
   }
}

function verKey(stop,key){
    for (let o = 0; o < key.length; o++) {
        if (alphabet.includes(key.charAt(o)) === false) {
            console.log(alphabet.includes(key.charAt(o)))
            stop = 1
        }
    }
    return stop
}


function removeAcento(cript) {
    cript = cript.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    cript = cript.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    cript = cript.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    cript = cript.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    cript = cript.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    cript = cript.replace(new RegExp('[Ç]', 'gi'), 'c');
    return cript;
}


function trim(key) {
    for (cont = 0; cont < key.length; cont++) {
        key = key.replace(" ", "")
    }
    return key
}