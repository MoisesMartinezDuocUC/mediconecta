
document.addEventListener('DOMContentLoaded', function () {

    // 1️⃣ Mostrar/ocultar detalle de afecciones médicas
    document.querySelectorAll('.afeccion-checkbox').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const detalle = document.getElementById('detalle-' + this.value);
            detalle.classList.toggle('d-none', !this.checked);
        });
    });

    // 2️⃣ Alternancia de secciones (solo 1 abierta a la vez)
    const collapseElements = document.querySelectorAll('.collapse');

    collapseElements.forEach(el => {
        el.addEventListener('show.bs.collapse', function () {
            collapseElements.forEach(other => {
                if (other !== el) {
                    const instance = bootstrap.Collapse.getInstance(other);
                    if (instance) instance.hide();
                }
            });
        });
    });

});
