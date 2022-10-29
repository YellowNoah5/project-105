Webcam.set({
    width:450,
    height:300,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")
function Click_Image(){
    Webcam.snap(function(Data){
        document.getElementById("result").innerHTML = "<img id='image1' src='"+Data+"'>"

    })
}

console.log("ml5 version",ml5.version)

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vu0Zb1FXp/model.json", modelLoaded)

function modelLoaded(){
    console.log("Teachable Model Loaded")
}
function Identify_Img(){
    var img1 = document.getElementById("image1")
    classifier.classify (img1, scanresults)
}
function scanresults(error, results){
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("PersonName").innerHTML = results[0].label
        document.getElementById("PersonAccuracy").innerHTML = results[0].confidence.toFixed(2)
    }
}