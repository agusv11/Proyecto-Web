document.addEventListener('DOMContentLoaded', function() {
    // Mostrar modal de login al cargar
    const modal = document.getElementById('loginModal');
    const mainContent = document.getElementById('mainContent');
    
    // Cerrar modal si se hace clic en la X
    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Manejar el formulario de login
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Credenciales válidas: profe / 123
        if (username === 'profe' && password === '123') {
            modal.style.display = 'none';
            mainContent.classList.remove('hidden');
        } else {
            alert('Usuario o contraseña incorrectos. Intenta con usuario: profe y contraseña: 123');
        }
    });
    
    // Manejar selección de productos
    const selectButtons = document.querySelectorAll('.select-btn');
    const productInput = document.getElementById('product');
    
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            productInput.value = product;
            
            // Desplazarse al formulario
            document.getElementById('orderForm').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Resaltar el producto seleccionado
            selectButtons.forEach(btn => {
                btn.style.backgroundColor = '#e74c3c';
                btn.textContent = 'Seleccionar';
            });
            
            this.style.backgroundColor = '#27ae60';
            this.textContent = '✓ Seleccionado';
        });
    });
    
    // Manejar el formulario de pedido
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!productInput.value) {
            alert('Por favor selecciona un producto primero');
            return;
        }
        
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        
        alert(`¡Gracias por tu pedido, ${name}!\nHas ordenado ${quantity} pizza(s) ${productInput.value}.\nTu pedido estará listo en 30 minutos.`);
        
        // Resetear formulario
        this.reset();
        productInput.value = '';
        
        // Resetear botones de selección
        selectButtons.forEach(btn => {
            btn.style.backgroundColor = '#e74c3c';
            btn.textContent = 'Seleccionar';
        });
    });
    
    // Animación de scroll para los enlaces del navbar
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hash !== '') {
                e.preventDefault();
                
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});