 //custom Directive to display the tile
angular.module('directive',[])
.directive("displayTile", function() {
    return {
        restrict: 'E',
        template: '<div id="tile" style="background-color:{{color}}">' + 
        '<textarea class="textarea" rows="3" cols="15" ng-model="currentItem.value" style="background-color:{{color}}"> </textarea>' + 
        '<input type="submit" value="+" id="like" ng-click="countLikes()"/>'+
        '{{currentItem.likes}}'+
        '</div>',
        link: function(scope,element, attrs) {
         scope.countLikes=function(){
             this.currentItem.likes++;
         }

        },
        scope: {
            currentItem: "=item",
            color: "=tilecolor"
        }
    };
}
);
    
   
