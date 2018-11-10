var card = $('#card');
var cardTrigger = $("#card-trigger");
function toggle() {
	if(card.is(':visible')) {
		card.hide();
	}else {
		card.show();
	}
}
cardTrigger.on('click',toggle);