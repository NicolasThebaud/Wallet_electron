(function() {
	'use strict'

	require('jquery')
	require('materialize-css')
	require('./components/build')

	const fs = require('fs')
		ReactDOM = require('react-dom')

	ReactDOM.render(< Balance / >, document.getElementById('lines'))

	/*fs.readFile('dataset.json', (err,buff)=>{
		if(err) throw err
		let data = JSON.parse(buff.toString()),
			lines = data.lines
		for(let line of lines) {

		}
	})*/
})()