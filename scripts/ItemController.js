(function() {
    var app = angular.module("todo", ['directive']);
 
    var Item = function() {
        this.value = "";
        this.likes=0;
        this.type="";
    };
    
    //controller for the whole retrospective app
    app.controller("taskController", function() {
        this.itemList = [];
        this.addItem = function(type) {
            var item = new Item();
            item.type=type;
            
            this.itemList.push(item);

            this.searchItem();
        }
        ;
        this.searchInput = "";
        this.searchResult = [];
   
        // function to search for an Item and store in searchList[] 
        this.searchItem = function() {
            
            var searchlist = [];
            for (var i = 0; i < this.itemList.length; i++) 
            {
 
                if(this.searchInput==""){
                    searchlist.push(this.itemList[i]);
                    }
                else{
                   if (this.itemList[i].value.indexOf(this.searchInput)>= 0) 
                    {
                        searchlist.push(this.itemList[i]);
                    }
                }
               
            }
            
            this.searchResult = searchlist;
        }
        ;
    }
    );
}
)();
