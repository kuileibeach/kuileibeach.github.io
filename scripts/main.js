var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kbg-icon4.png') {
      myImage.setAttribute ('src','images/sunrise-dh.png');
    } else {
      myImage.setAttribute ('src','images/kbg-icon4.png');
    }
}
