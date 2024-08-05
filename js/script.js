let arregloAleatorio = [];

        function crearArreglo(n) {
            const arreglo = [];
            let valor = 1;
            for (let i = 0; i < n; i++) {
                arreglo.push(valor);
                valor *= 2;
            }
            return arreglo;
        }

        function obtenerMayor(arreglo) {
            if (arreglo.length !== 10) {
                throw new Error("El arreglo debe tener exactamente 10 elementos.");
            }
            let mayor = arreglo[0];
            for (let i = 1; i < arreglo.length; i++) {
                if (arreglo[i] > mayor) {
                    mayor = arreglo[i];
                }
            }
            return mayor;
        }

        function generarArregloAleatorio() {
            arregloAleatorio = [];
            for (let i = 0; i < 100; i++) {
                arregloAleatorio.push(Math.floor(Math.random() * 501));
            }
            document.getElementById('outputBuscarEnAleatorio').textContent = 'Arreglo aleatorio generado.';
            mostrarArreglo();
        }

        function buscarElemento(arreglo, elemento) {
            return arreglo.includes(elemento);
        }

        function ordenarArreglo(arreglo) {
            return arreglo.sort((a, b) => a - b);
        }

        function ejecutarCrearArreglo() {
            const input = document.getElementById('inputCrearArreglo');
            const n = parseInt(input.value);
            const output = document.getElementById('outputCrearArreglo');
            if (isNaN(n) || n < 1) {
                output.textContent = 'Por favor, ingrese un número válido mayor que 0.';
                return;
            }
            const resultado = crearArreglo(n);
            output.textContent = `Arreglo creado: ${resultado.join(', ')}`;
        }

        function ejecutarObtenerMayor() {
            const input = document.getElementById('inputObtenerMayor');
            const numeros = input.value.split(',').map(num => parseFloat(num.trim()));
            const output = document.getElementById('outputObtenerMayor');
            if (numeros.length !== 10) {
                output.textContent = 'Por favor, ingrese exactamente 10 números.';
                return;
            }
            const mayor = obtenerMayor(numeros);
            output.textContent = `El mayor número es: ${mayor}`;
        }

        function ejecutarObtenerDia() {
            const input = document.getElementById('inputObtenerDia');
            const numero = parseInt(input.value);
            const output = document.getElementById('outputObtenerDia');
            if (isNaN(numero) || numero < 1 || numero > 7) {
                output.textContent = 'Por favor, ingrese un número válido entre 1 y 7.';
                return;
            }
            const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
            const dia = dias[numero - 1];
            output.textContent = `El día de la semana es: ${dia}`;
        }

        function ejecutarBuscarEnAleatorio() {
            const input = document.getElementById('inputBuscarEnAleatorio');
            const numero = parseInt(input.value);
            const output = document.getElementById('outputBuscarEnAleatorio');
            if (isNaN(numero)) {
                output.textContent = 'Por favor, ingrese un número válido para buscar.';
                return;
            }
            const encontrado = buscarElemento(arregloAleatorio, numero);
            output.textContent = `Número ${numero} encontrado en el arreglo: ${encontrado ? 'Sí' : 'No'}`;
        }

        function ejecutarOrdenarArreglo() {
            const input = document.getElementById('inputOrdenarArreglo');
            const numeros = input.value.split(',').map(num => parseFloat(num.trim()));
            const output = document.getElementById('outputOrdenarArreglo');
            const resultado = ordenarArreglo(numeros);
            output.textContent = `Arreglo ordenado: ${resultado.join(', ')}`;
        }

        function mostrarArreglo() {
            const output = document.getElementById('outputMostrarArreglo');
            output.textContent = `Arreglo generado: ${arregloAleatorio.join(', ')}`;
            document.getElementById('mostrarArregloContainer').style.display = 'block'; 
                }