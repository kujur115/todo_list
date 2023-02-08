// $('input')

$('input[type=checkbox]').change(function() { 
    var item=$(this);    
   if(item.is(":checked")){
    // console.log('triggered link')
    //  item.siblings('a').trigger('click');
    location.href = item.siblings('a').attr('href');
    }else{
    // item.siblings('a').trigger('click');
    location.href = item.siblings('a').attr('href');
    }   
});


$('div.personal').css("background-color","#3DB881");
$('div.work').css("background-color","#3d6ab8");
$('div.shopping').css("background-color","#9a00ac");
$('div.school').css("background-color","#3DB845");
$('div.cleaning').css("background-color","cadetblue");
$('div.other').css("background-color","steelblue");



