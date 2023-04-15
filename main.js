Webcam.set({
    width:350, height:300, image_format:"png", png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pSLsrRSjq/model.json", modelloaded);
function modelloaded(){
console.log("model has loaded");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}
function gotresult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object").innerHTML = result[0].label;
        gesture = result[0].label;
        if(gesture=="Amazing"){
            document.getElementById("result_icon").innerHTML="&#128076";
        }
        else if(gesture=="Victory"){
            document.getElementById("result_icon").innerHTML="&#9996";
        }
        else if(gesture=="Best"){
            document.getElementById("result_icon").innerHTML="&#128077";
        }
        
    }
}