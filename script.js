 // Array para almacenar los usuarios en memoria
 let usuarios = [];
 let userId = 1;

 // Función para mostrar los usuarios en la tabla
 function cargarUsuarios() {
   const tbody = document.getElementById('usuariosTable').querySelector('tbody');
   tbody.innerHTML = ''; // Limpiar tabla

   usuarios.forEach(usuario => {
     const row = document.createElement('tr');
     row.innerHTML = `
       <td>${usuario.id}</td>
       <td>${usuario.nombre}</td>
       <td>${usuario.correo}</td>
       <td>${usuario.celular}</td>
       <td>
         <button onclick="editarUsuario(${usuario.id})">Editar</button>
         <button onclick="eliminarUsuario(${usuario.id})">Eliminar</button>
       </td>
     `;
     tbody.appendChild(row);
   });
 }

 // Función para crear un nuevo usuario
 function crearUsuario() {
   const nombre = document.getElementById('nombre').value;
   const correo = document.getElementById('correo').value;
   const celular = document.getElementById('celular').value;

   if (nombre && correo && celular) {
     const nuevoUsuario = {
       id: userId++,
       nombre: nombre,
       correo: correo,
       celular: celular
     };

     usuarios.push(nuevoUsuario);
     cargarUsuarios();

     // Limpiar campos de entrada
     document.getElementById('nombre').value = '';
     document.getElementById('correo').value = '';
     document.getElementById('celular').value = '';
   } else {
     alert("Por favor, completa todos los campos.");
   }
 }

 // Función para editar un usuario
 function editarUsuario(id) {
   const usuario = usuarios.find(u => u.id === id);

   if (usuario) {
     const nuevoNombre = prompt("Ingrese el nuevo nombre:", usuario.nombre);
     const nuevoCorreo = prompt("Ingrese el nuevo correo:", usuario.correo);
     const nuevoCelular = prompt("Ingrese el nuevo número de celular:", usuario.celular);

     if (nuevoNombre && nuevoCorreo && nuevoCelular) {
       usuario.nombre = nuevoNombre;
       usuario.correo = nuevoCorreo;
       usuario.celular = nuevoCelular;
       cargarUsuarios();
     } else {
       alert("Todos los campos son obligatorios.");
     }
   }
 }

 // Función para eliminar un usuario
 function eliminarUsuario(id) {
   usuarios = usuarios.filter(u => u.id !== id);
   cargarUsuarios();
 }

 // Cargar usuarios al iniciar
 cargarUsuarios();