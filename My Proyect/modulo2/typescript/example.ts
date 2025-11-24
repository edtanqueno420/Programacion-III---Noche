interface ClienteLogin {
  id: number;
  nombre: string;
  contraseña: string;
}

const clienteParaLogin: ClienteLogin = {
  id: 1,
  nombre: 'Edison Munoz',
  contraseña: 'Libertadores123'
};

function login(cliente: ClienteLogin): void {
  if (cliente.contraseña === 'Libertadores123') {
    console.log('✅ Cliente autenticado en la concesionaria');
  } else {
    console.log('❌ Acceso denegado');
  }
}

login(clienteParaLogin);
