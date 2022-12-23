// here is the link:
//https://teachablemachine.withgoogle.com/models/Y3g8EPXY5/

Webcam.set({
    width:360,
    height:310,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("webcam");

Webcam.attach('#webcam');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    })
}



classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y3g8EPXY5/model.json',modelLoaded);

function modelLoaded() {
    console.log("model is loaded")
}

function identify_snapshot() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
  if(error) {
    console.error(error);
  } 
  else 
  {
    console.log(results)
    document.getElementById("result_person_name").innerHTML = results[0].label;
    document.getElementById("result_person_accuracy").innerHTML = results[0].confidence.toFixed(3)
  }
}

function btn_warning_func() {
    window.location = "index2.html";
}