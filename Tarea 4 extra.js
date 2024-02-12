// Variables globales que servirán para los datos que no se tienen
var edaddeAsegurado = 0;
var recargoEsposa = 0;
var recargoHijos = 0;
var recargo_esposo = 0;
var cantidadPropiedades = 0;
var salarioAsegurado = 0;

const precioBase = 2000;

while (true) {
    // Asegurado Principal
    var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
    if (nombreCompleto.toLowerCase() === "salir") {
        break;
    }

    var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
    var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
    var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
    edaddeAsegurado = 2024 - anioNacimiento;
    alert("su edad es: " + edaddeAsegurado);

    var conyuge = prompt("¿Tiene cónyuge?", "si/no");
    var edad_conyuge = 0;
    if (conyuge.toLowerCase() === "si") {
        var anioNacimientoConyuge = prompt("Ingrese el año de nacimiento del cónyuge");
        edad_conyuge = 2024 - anioNacimientoConyuge;
        alert(" La edad de su conyuge es: " + edad_conyuge);
    }

    // Cálculo del recargo por tener cónyuge
    if (edad_conyuge <= 24) {
        recargoEsposa = precioBase * 0.1;
        alert(" Su recargo por tener conyuge es: " + recargoEsposa);
    } else if (edad_conyuge >= 25 && edad_conyuge <= 49) {
        recargoEsposa = precioBase * 0.2;
        alert(" Su recargo por tener conyuge es: " + recargoEsposa);
    } else if (edad_conyuge >= 50 && edad_conyuge <= 100) {
        recargoEsposa = precioBase * 0.3;
        alert(" Su recargo por tener conyuge es: " + recargoEsposa);
    }

    var hijos = prompt("¿Tiene hijos?", "si/no");
    var cantidadHijos = 0;
    if (hijos.toLowerCase() === "si") {
        cantidadHijos = prompt("Ingrese la cantidad de hijos");
    }

    // Cálculo del recargo por tener hijos
    recargoHijos = precioBase * cantidadHijos * 0.2;
    alert(" Su recargo por tener hijos es: " + recargoHijos);

    // Cálculo del recargo por edad del asegurado principal
    if (edaddeAsegurado >= 18 && edaddeAsegurado < 24) {
        recargo_esposo = precioBase * 0.1;
        alert(" Su recargo por tener Esa Edad es: " + recargo_esposo);
    } else if (edaddeAsegurado >= 25 && edaddeAsegurado < 49) {
        recargo_esposo = precioBase * 0.2;
        alert(" Su recargo por tener Esa edad es: " + recargo_esposo);
    } else if (edaddeAsegurado >= 50 && edaddeAsegurado < 100) {
        recargo_esposo = precioBase * 0.3;
        alert(" Su recargo por Esa edad es: " + recargo_esposo);
    }

    // Recargos extra basados en la cantidad de propiedades y los ingresos del asegurado
    var recargoPropiedades = precioBase * cantidadPropiedades * 0.35;
    var recargoIngresos = salarioAsegurado * 0.05;

    var totalPagar = precioBase + recargo_esposo + recargoHijos + recargoEsposa + recargoPropiedades + recargoIngresos;
    alert(" Estimado cliente " + nombreCompleto + " su total a pagar es: " + totalPagar);
}