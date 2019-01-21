var text = $('.father').text();
var html = $('.father').html();
console.log('text:', text);
console.log('html:', html);
$('.father').append('<div>My dear father</div>');
$('.father').prepend('<div>My dear father</div>');