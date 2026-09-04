var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort(function(a, b) {
        return a.apellido.localeCompare(b.apellido);
    });
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 */
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(function(persona) {
        return persona.nombre;
    });
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 */
function promedioEdades(listaDePersonas) {
    var suma = 0;

    for (var i = 0; i < listaDePersonas.length; i++) {
        suma = suma + listaDePersonas[i].edad;
    }

    return suma / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 */
function cumplirAños(listaDePersonas) {
    return listaDePersonas.map(function(persona) {
        return {
            apellido: persona.apellido,
            nombre: persona.nombre,
            edad: persona.edad + 1,
            documento: persona.documento
        };
    });
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 */
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(function(persona) {
        return persona.edad > 18;
    });
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 */
function laPersonaMayor(listaDePersonas) {
    var personaMayor = listaDePersonas[0];

    for (var i = 1; i < listaDePersonas.length; i++) {
        if (listaDePersonas[i].edad > personaMayor.edad) {
            personaMayor = listaDePersonas[i];
        }
    }

    return personaMayor;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map(function(persona, indice) {
        return {
            apellido: persona.apellido,
            nombre: persona.nombre,
            edad: persona.edad,
            documento: persona.documento,
            heladoFavorito: listaDeHelados[indice] || "vainilla"
        };
    });
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
