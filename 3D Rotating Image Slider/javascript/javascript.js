const rotatingElement = document.querySelector('.rotating-element');

rotatingElement.addEventListener('mousemove', handleMouseMove);
rotatingElement.addEventListener('click', handleMouseClick);

function handleMouseMove(event) {
    const mouseX = event.clientX;
    const elementCenterX = rotatingElement.getBoundingClientRect().left + rotatingElement.offsetWidth / 2;
    const rotationAngle = (mouseX - elementCenterX) * 0.1; // Ajuste a sensibilidade conforme necessário
    rotatingElement.style.transform = `rotate(${rotationAngle}deg)`;
}

function handleMouseClick() {
    // Execute alguma ação quando o usuário clicar
}
