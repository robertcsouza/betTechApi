'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { api: 'Online' }
})


Route.post('/sessions', 'SessionController.create').prefix('v1')


//Rotas de usuario ---------------------------------------------------------

Route.post('/user', 'UserController.create').prefix('v1')
Route.get('/user', 'UserController.index').prefix('v1').middleware('auth')

Route.put('/user', 'UserController.update').prefix('v1').middleware('auth')
Route.put('/user/reset', 'UserController.reset').prefix('v1').middleware('auth')


//Clientes -----------------------------------------------------------------------
Route.get('/cliente', 'ClienteController.index').prefix('v1').middleware('auth')

Route.post('/cliente', 'ClienteController.store').prefix('v1').middleware('auth')

Route.get('/cliente/password', 'ClienteController.password').prefix('v1').middleware('auth')




//Relatorio -----------------------------------------------------------------------
Route.post('/relatorio/:client_id', 'RelatorioController.store').prefix('v1').middleware('auth')
Route.get('/relatorio/:relatorio_id', 'RelatorioController.generate').prefix('v1').middleware('auth')
Route.get('/cliente/relatorio', 'RelatorioController.generateAuth').prefix('v1')

//Relatorio -----------------------------------------------------------------------
Route.get('/teste/:relatorio_id', 'TesteController.index').prefix('v1').middleware('auth')
Route.post('/teste/:relatorio_id', 'TesteController.store').prefix('v1').middleware('auth')
Route.put('/teste/:teste_id', 'TesteController.update').prefix('v1').middleware('auth')

