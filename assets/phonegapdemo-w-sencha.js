<!DOCTYPE HTML>
<html> 
  <head> 
    <meta name="viewport" content="width=320; user-scalable=no" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>PhoneGap Demo with Sencha Touch</title>
      <link rel="stylesheet" href="assets/apple.css" type="text/css">
      <script type="text/javascript" src="assets/sencha-touch.js"></script>
	  <script type="text/javascript" charset="utf-8" src="assets/phonegap.0.9.5.js"></script>
	  <script type="text/javascript" charset="utf-8" src="assets/main.js"></script>
	  <script type="text/javascript" charset="utf-8" src="assets/phonegapdemo-w-sencha.js"></script>
    <script type="text/javascript" charset="utf-8">

    // Call onDeviceReady when PhoneGap is loaded.
    //
    // At this point, the document has loaded but phonegap.js has not.
    // When PhoneGap is loaded and talking with the native device,
    // it will call the event `deviceready`.
    // 
    function onLoad() {
        console.log("I've been loaded ------------------ , is ok -------------------------");
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
        console.log("Device Ready ---------------------- ok ---------- Phone Gap ");
    }
       
    // Back key event handler
    //
    function onBackKey() {
        console.log(" NO HAGO NADA, ESTOY EN onBackKey -----------------------------------------");
    }

    function anulaVuelta() {
        console.log("anulaVuelta ---------------------------------"); 			
        document.addEventListener("backbutton", onBackKey, false);
    }
    function activaVuelta() {
        console.log("activaVuelta ---------------------------------"); 			
        document.removeEventListener("backbutton", onBackKey, false);
    }
    </script>
	  
	  </head>
  <body onload="onLoad()"></body>
</html>
