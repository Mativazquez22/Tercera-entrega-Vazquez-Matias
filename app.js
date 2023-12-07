// Objeto para representar una cuota
function Cuota(numero, monto) {
    this.numero = numero;
    this.monto = monto;
  }
  
  // Función para calcular pagos en cuotas y almacenar en un array de objetos
  function calcularCuotas(monto, cuotas) {
    // Verificar que el número de cuotas sea válido (mayor que cero)
    if (cuotas <= 0) {
      console.log("El número de cuotas debe ser mayor que cero.");
      return;
    }
  
    // Inicializar un array para almacenar el detalle de las cuotas
    var detalleCuotas = [];
  
    // Calcular el monto de cada cuota y almacenar el detalle en el array
    var montoPorCuota = monto / cuotas;
    for (var i = 1; i <= cuotas; i++) {
      var cuota = new Cuota(i, montoPorCuota);
      detalleCuotas.push(cuota);
    }
  
    // Almacenar el detalle de las cuotas en localStorage
    localStorage.setItem('detalleCuotas', JSON.stringify(detalleCuotas));
  
    // Llamar a la función para mostrar el detalle de las cuotas
    mostrarDetalleCuotas(detalleCuotas);
  
    // Ejemplo de búsqueda por número de cuota
    var numeroBuscado = 3;
    var cuotaEncontrada = buscarCuotaPorNumero(detalleCuotas, numeroBuscado);
    if (cuotaEncontrada) {
      console.log("Cuota encontrada - Número: " + cuotaEncontrada.numero + ", Monto: $" + cuotaEncontrada.monto.toFixed(2));
    } else {
      console.log("Cuota no encontrada para el número: " + numeroBuscado);
    }
  }
  
  // Función para mostrar el detalle de las cuotas
  function mostrarDetalleCuotas(detalleCuotas) {
    console.log("Detalle de pagos en cuotas:");
    detalleCuotas.forEach(function (cuota) {
      console.log("Cuota " + cuota.numero + ": $" + cuota.monto.toFixed(2));
    });
  }
  
  // Función para buscar una cuota por número
  function buscarCuotaPorNumero(detalleCuotas, numeroBuscado) {
    return detalleCuotas.find(function (cuota) {
      return cuota.numero === numeroBuscado;
    });
  }
  
  // Ejemplo de uso
  var montoTotal = 1000;
  var numeroDeCuotas = 5;
  
  calcularCuotas(montoTotal, numeroDeCuotas);
  