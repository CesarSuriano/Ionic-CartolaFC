angular.module('cartola.controllers', [])

.controller('ParciaisCtrl', function ($scope, $http) {
  $scope.pegarParciais = function () {
    $http({
      url: 'https://api.cartolafc.globo.com/atletas/pontuados'
      ,method: 'GET'
    })
    .error(function (data, status) {
      $scope.mensagem = data.mensagem;
      console.log(data.mensagem);
    })
    .success(function (data, status) {
      $scope.jogadores = [];
      for (var i = 0; i < data.length; i++) {
        $scope.jogadores.push({
          apelido: data[i].Atleta.apelido,
          posicao: data[i].posicao,
          clube  : data[i].clube,
          escudo : data[i].escudo_clube,
        });
      }
      console.log("Deu certo");
    })
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.pegarParciais();
})


.controller('MaisEscaladosCtrl', function ($scope, $http) {
  $scope.pegarJogadores = function () {
    $http({
      url: 'https://api.cartolafc.globo.com/mercado/destaques',
      method: 'GET'
    })
    .error(function (data, status) {
      console.log("Deu erro");
      console.error(data);
    })
    .success(function (data, status) {
      $scope.jogadores = [];
      for (var i = 0; i < data.length; i++) {
        $scope.jogadores.push({
          apelido: data[i].Atleta.apelido,
          posicao: data[i].posicao,
          clube: data[i].clube,
          escudo: data[i].escudo_clube
        });
      }
      console.log("Deu certo");
    })
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.pegarJogadores();

});
