(function () {
  'use strict';

  angular.module("LunchCheck", [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=["$scope"];
  function LunchCheckController($scope){
    //CONSTANTS
    const FOOD_EMPTY = "Please enter data first";
    const FOOD_OK = "Enjoy!";
    const FOOD_MUCH = "Too much!";
    const FOOD_EMPTY_STYLE = {};
    const FOOD_MESSAGE_OK = {'color':'green'};
    const FOOD_MESSAGE_ERROR = {'color':'red'};
    const FOOD_TEXTBOX_OK = {'border-color':'green'};
    const FOOD_TEXTBOX_ERROR = {'border-color':'red'};

    //variables
    $scope.food="";

    //functions
    $scope.checkFood=function(){
      var foodSplit = $scope.food.split(",");
      $scope.message = getMessageAndSetStyle(countFood(foodSplit));
    };

    function countFood(foodList){
      var totalFood = 0;
      for (var food in foodList) {
        if (foodList[food] && foodList[food].trim() != "")
          totalFood++;
      }
      return totalFood;
    }

    function getMessageAndSetStyle(totalFood){

      if (totalFood == 0){
        $scope.messageStyle = FOOD_MESSAGE_ERROR;
        $scope.textBoxStyle = FOOD_TEXTBOX_ERROR;
        return FOOD_EMPTY;
      }
      if (totalFood <= 3){
        $scope.messageStyle = FOOD_MESSAGE_OK;
        $scope.textBoxStyle = FOOD_TEXTBOX_OK;
                return FOOD_OK;
      }
      if (totalFood > 3){
        $scope.messageStyle = FOOD_MESSAGE_OK;
        $scope.textBoxStyle = FOOD_TEXTBOX_OK;
        return FOOD_MUCH;
      }
    }


  };
})();
