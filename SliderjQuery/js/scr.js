$(document).ready(function(){
	var count=0;
	$('#prev,.next').on('click',function(){
	// we can have only one div and we can change the src attr of image on button click using jQuery

	if(count==0){
		$('#imagee').attr('src','./images/b.jpg');
	}else if(count==1){
		$('#imagee').attr('src','./images/a.jpg');
	}
	else if(count==2){
		$('#imagee').attr('src','./images/c.jpg');
	}else if(count==3){
		$('#imagee').attr('src','./images/b.jpg');	
	}else{
		$('#imagee').attr('src','./images/d.jpg');
	}
	if($(this).hasClass("next")){count++;}else{
		count--;

	}
	if(count>4){
		count=0;
	}else if(count<0)
	{
		count=4;
	}
	console.log(count);

});
});
