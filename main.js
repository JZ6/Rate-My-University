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

    getOneItemById: function (name, cb) {
        /*
         * Returns single item given single id
         *
         * @return Item
         */
        let url_beg = 'http://universities.hipolabs.com/search?name='
		let url_end = name
        const request = require('request')
        request.get(url_beg.concat(url_end), function (err, res, body) {
            if (err) {
                return cb(error)
            } else {
                let data = JSON.parse(body)
                cb(null, data[0])
            }
        })
    },


	getOneAttributeFromItem: function(name, attribute, cb) {
		/*
		 * Returns a single attribute from a given item.
		 * 
		 * @return a string
		 */	
        let url_beg = 'http://universities.hipolabs.com/search?name='
        let url_end = name
        const request = require('request')
        request.get(url_beg.concat(url_end), function (err, res, body) {
            if (err) {
                return cb(error)
            } else {
                let data = JSON.parse(body)
                cb(null, data[0][attribute])
            }
        })
	},	
}


/*
app.getListsOfItems(function(error, data){
   console.log(data)
})
app.getOneItemById('Ashton College', function(error, data){
	console.log(data)
})
app.getOneAttributeFromItem('St. Francis Xavier University', 'web_page', function(error, data){
    console.log(data)
})

*/
