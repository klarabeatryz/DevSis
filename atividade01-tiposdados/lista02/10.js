function executarCallback(callback) {
  callback();
}
executarCallback (function () {
  console.log(" Função Callback executada!");
})