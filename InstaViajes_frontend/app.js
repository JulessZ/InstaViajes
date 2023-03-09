const routes = {
    '/': login,
     '/registro': registro,
    '/passwordreset' : passwordreset, 
    '/home':home,
     '/perfil' : perfil,
    '/detallesviaje' : detallesviaje,
    '/misviajes' : misviajes,
    '/amigos' : amigos,
    '/crearactividades': crearactividades,
    '/crearviaje' : crearviaje 
}
 const appDiv = document.getElementById('app');
 appDiv.innerHTML=routes[window.location.pathname];

 const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    appDiv.innerHTML = routes[pathname]
  }

  window.onpopstate = () => {
    appDiv.innerHTML = routes[window.location.pathname]
  }
