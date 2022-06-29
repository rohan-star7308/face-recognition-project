Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='img_capt' src='"+data_uri+"'>";
    });
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hESCfb5P0/model.json",modelloaded);

function modelloaded(){
    console.log("model loaded!!!");
}

function check(){
    img=document.getElementById("img_capt");
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML="Object = "+results[0].label;
        document.getElementById("objectaccuracy").innerHTML="Accuracy = "+results[0].confidence.toFixed(3);
    }
}