const overlay = document.getElementById('overlayId');
var html = document.getElementsByTagName('html')[0];

function overlayClick() {
    
    html.style.position = 'fixed';
    overlay.style.display = 'block';
    
}
function overlayHeartClick() {

    html.style.position = '';
    overlay.style.display = 'none';


}



