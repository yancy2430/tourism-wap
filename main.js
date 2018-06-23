import app from './app.ui'

let options = {
  app: app
}
ui.extend({
  sayHello:function(){
    console.log('hello')
  }
})
ui.start(options)