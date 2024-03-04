const overlay = document.getElementById('overlayId');
var html = document.getElementsByTagName('html')[0];

function overlayClick() {
    
    html.style.position = 'fixed';
    overlay.style.display = 'flex';
    setTimeout(function() {
        overlay.style.opacity = '1'; // Define a opacidade do overlay para 1 após um pequeno intervalo para iniciar a transição
    }, 300); // 10ms de atraso para garantir que a transição seja aplicada
}

function overlayHeartClick() {
    
    html.style.position = '';
    overlay.style.opacity = '0'; // Define a opacidade do overlay para 0 para iniciar a transição de ocultação
    setTimeout(function() {
        overlay.style.display = 'none'; // Oculta o overlay após a transição
    }, 300); // Tempo correspondente à duração da transição definida no CSS (300ms)
}


