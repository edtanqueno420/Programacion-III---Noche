interface UsuarioLogin {
  id: number;
  nombre: string;
  contraseña: string;
}

const usuarioparalogin: UsuarioLogin = {
  id: 1,
  nombre: 'Shisui',
  contraseña: 'Uchiha'
};

function login(usuario: UsuarioLogin): void {
  if (usuario.contraseña === 'Uchiha') {
    console.log('✅ Usuario autenticado');
  } else {
    console.log('❌ Acceso denegado');
  }
}

login(usuarioparalogin);
