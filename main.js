;(function(){
	'use strict';

	$('#tictactoe').empty();
	for(var i=0; i<num_of_cols*num_of_rows; i++){
		var cell = $('<div></div>')
			.addClass('cell')
			.appendTo('#tictactoe');
		if(i % num_of_cols === 0){
			cell.before('<div class="clear"></div>');
		}
	}
}());
