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
	getListsOfItems: function() {
		/*
		 * Returns a list of items from the API.
		 * 
		 * @return array of items
		 */
		return new Promise(function(resolve, reject){
            const request = require('request')
            request.get('http://universities.hipolabs.com/search?country=Canada', function (err,res, body) {
                if(err){
                    return cb(error)
                }else{
                    let data = JSON.parse(body)
					if(data){
                        console.log(data)
					}
					resolve(data);
                }
            })
		})

	},

    getOneItemById: function (name) {
        /*
         * Returns single item given single id
         *
         * @return Item
         */
        return new Promise(function(resolve, reject){
            let url_beg = 'http://universities.hipolabs.com/search?name='
            let url_end = name
            const request = require('request')
            request.get(url_beg.concat(url_end), function (err, res, body) {
                if (err) {
                    return cb(error)
                } else {
                    let data = JSON.parse(body)
					if(data){
                        resolve(data[0])
					}
                }
            })
		})

    },


	getOneAttributeFromItem: function(name, attribute) {
		/*
		 * Returns a single attribute from a given item.
		 * 
		 * @return a string
		 */
		return new Promise(function(resolve, reject){
            let url_beg = 'http://universities.hipolabs.com/search?name='
            let url_end = name
            const request = require('request')
            request.get(url_beg.concat(url_end), function (err, res, body) {
                if (err) {
                    return cb(error)
                } else {
                    let data = JSON.parse(body)
					if(data){
                       resolve(data[0][attribute])
					}
                }
            })
		})

	},	
}
Promise.all([app.getListsOfItems(), app.getOneItemById('Ashton College'),
	app.getOneAttributeFromItem('St. Francis Xavier University', 'web_page')]).then(allResolves => {
		console.log(allResolves)
})

