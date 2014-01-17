function KatagakiCtrl($scope){

  $scope.katagaki1 = '';
  $scope.katagaki2 = '';
  $scope.isResult = false;

  var list1 = ["あたらしい","水色の","そよ風","ムキムキ","仏像","粋な","今どきっな","片思いの","桃色"];
  var list2 = ["系女子","当番","委員","起爆剤","打ち上げ花火","バックパッカー","キラキラ女子","インターン","反逆児","学会会長","案内人","ヒロイン"];

  $scope.submit = function(){
    var rand1 = Math.floor(Math.random() * list1.length);
    var rand2 = Math.floor(Math.random() * list2.length);
    $scope.katagaki1 = list1[rand1];
    $scope.katagaki2 = list2[rand2];
    $scope.isResult = true;
  }
}