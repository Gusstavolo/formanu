const overlay = document.getElementById('overlayId');
var html = document.getElementsByTagName('html')[0];

function overlayClick() {
    
    
    overlay.style.display = 'block';
    
}
function overlayHeartClick() {

    html.style.position = '';
    overlay.style.display = 'none';


}



