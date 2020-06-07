{
    	// Grab elements, create settings, etc.
 		var video = document.getElementById('video');
		// Get access to the camera!
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    	//Not adding `{ audio: true }` since we only want video now
    	navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
        video.srcObject = stream
        video.play();
        });
       }
        // Элементы для создания скриншота, точнее фото
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');
        context.drawImage(video, 0, 0);
        pic = new Image();
        // Триггер для захвата фото
        document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
        //var dataURL = canvas.toDataURL("image/jpeg");
        //var link = document.createElement("a");
        //link.href = dataURL;
        //link.download = "lol.jpg";
        //var x = new XMLHttpRequest();
        //x.open("GET", "https://www.visionhub.ru/api/v2/auth/generate_token/", true);
        //x.onload = function (){
        //XResp = x.responseText;
        //alert(XResp);
           // }
           // x.send(null);

        //var y = new XMLHttpRequest();
        //y.open("POST", "https://www.visionhub.ru/api/v2/process/img2img/", true);
		});
       
    }