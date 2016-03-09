$(document).ready(function() {

	var clicked = function() {
		var type = $(this).attr('id');
		$('.container').addClass('overlay');
		$('#viewer').show();
		console.log(type);
		switch(type) {
			case 'image-click':
				var content = '<img src="media/penguins.jpg" />';
				$('.content').html(content);
			break;
			case 'pdf-click':
				var content = '<embed src="http://www.cameronmoll.com/about/cameronmoll_bio.pdf" width="600" height="200" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">';
				$('.content').html(content);
			break;
			case 'audio-click':
				//var content = '<audio src="media/aac1.aac" controls autoplay loop>HTML5 audio not supported</audio>';
				//var content = '<audio src="media/aud.mp3" controls autoplay loop>HTML5 audio not supported</audio>';
				//var content = '<video autoplay loop controls><source src="media/aud.mp3" type="audio/mpeg"></video>';
				//var content = '<audio autoplay loop controls><source src="media/aud.mp3"></audio>';
				var content = '<audio autoplay loop controls><source src="media/mp31.mp3" type="audio/mpeg"></audio>';
				var content = '<audio controls src="media/mp31.mp3" type="audio/mpeg">No</audio>';
				//var content = '<audio autoplay loop controls><source src="media/aud.mp3" type="audio/mp3"></audio>';
				//var content = '<audio loop controls><source src="media/chord.wav" type="audio/wav"></audio>';
				$('.content').html(content);
			break;
			case 'video-click':
				var content = '<video autoplay loop controls><source src="media/vid.mp4"></video>';
				//var content = '<video autoplay loop controls><source type="video/mp4" src="https://zippy.gfycat.com/SimpleWebbedCooter.mp4"></video>';
				//var content = '<video autoplay loop controls><source type="video/webm" src="https://zippy.gfycat.com/SimpleWebbedCooter.webm"></video>';
				$('.content').html(content);
			break;
			case 'close':
				$('.container').removeClass('overlay');
				$('#viewer').hide();
				$('.content').html('');
			break;
		}
	};


	$('a').click(clicked);
	$('#close').click(clicked);
});
