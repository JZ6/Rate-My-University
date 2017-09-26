/*
 * HW1 API testing. You should implement following 3 functioins.
 * - getListsOfItems:
 * 	   Find a RESTFUL API and use GET to retrive a list of items.
 * - getOneItemById:
 *     Retrieve a single item by id based on the list you get from 
 * 	   getListsOfItems().
 * - getOneAttributeFromItem:
 *     Return any attribute from the retrieved item. 
 *     Ex: Return the temperature.
 */

var app = {
	getListsOfItems: function(cb) {
		/*
		 * Returns a list of items from the API.
		 * 
		 * @return array of items
		 */
		const request = require('request')
		request.get('http://universities.hipolabs.com/search?country=Canada', function (err,res, body) {
            		if(err){
                		return cb(error)
            		}else{
                		let data = JSON.parse(body)
                		cb(null,data)
			}
        	})
	},

	getOneItemById: function() {
		/*
		 * Returns single item given single id
		 * 
		 * @return Item
		 */	
	},

	getOneAttributeFromItem: function() {
		/*
		 * Returns a single attribute from a given item.
		 * 
		 * @return a string
		 */	
	},	
}

/*Testing

app.getListsOfItems(function(error, data){
   console.log(data)
});

*/
