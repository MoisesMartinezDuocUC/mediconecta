# Mediconecta service - Servicio médico digital 

## 📋 Descripción

Mediconecta es una aplicación web moderna y responsiva, construida con **Bootstrap 5** y **JavaScript** orientada a la gestión de consultas médicas en una clínica. Está diseñada con un enfoque moderno y responsivo, permitiendo a los usuarios interactuar de manera sencilla y segura.

El sistema contempla diferentes roles de usuario (paciente, médico y administrador), cada uno con accesos diferenciados según sus necesidades. La aplicación busca cubrir procesos básicos como el registro de usuarios, gestión de fichas clínicas e historial médico, y la generación de reportes de atención.

## Características principales

- **Diseño Moderno**: Interfaz elegante con Bootstrap 5 y CSS personalizado
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **SPA (Single Page Application)**: Navegación sin recargas de página
- **Fichas Clínicas**: Creación y consulta de información médica básica de los pacientes (de forma esquemática para esta implementación).
- **Gestión de Usuarios**: Registro, inicio de sesión, recuperación de contraseña y edición de perfil.
- **Gestión de Estado**: Manejo centralizado del estado de la aplicación
- **Reportes de Salud**: Generación de reportes e historial de atenciones médicas.
- **Múltiples Roles**: Diferenciación entre pacientes, médicos y administradores, con permisos y accesos específicos.

## Tecnologías utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **Bootstrap 5**: Framework CSS para componentes y grid system
- **JavaScript ES6+**: Programación orientada a objetos, async/await
- **Font Awesome**: Iconografía moderna

### Características técnicas

- **SPA Architecture**: Navegación fluida sin recargas completas.
- **Responsive Design**: Enfoque mobile-first para acceso desde cualquier dispositivo.
- **Progressive Enhancement**: Funcionalidad básica accesible incluso sin JavaScript.
- **Local Storage**: Persistencia de datos simples (ej: recordatorio de sesión).
- **Modular JavaScript**: Código organizado en clases y módulos reutilizables.

## Responsive Design

La aplicación está optimizada para todos los dispositivos:

- **Desktop**: Layout completo con sidebar y navegación expandida
- **Tablet**: Adaptación del grid y navegación colapsable
- **Mobile**: Navegación hamburguesa y layout vertical optimizado
- **Touch**: Interacciones táctiles optimizadas

## Instalación y Uso

### Instalación
1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/mediconecta.git
cd mediconecta
```

2. Abre el proyecto en tu servidor web local
3. Navega a `index.html` en tu navegador

### Desarrollo
- Los archivos principales están en `js/`
- Los estilos personalizados en `css/custom.css`
- Las variables CSS en `css/variables.css`

## Personalización

### Colores del Tema
```css
:root {
    /* Colores principales del tema */
    --color-primary:        #0477BF;
    --color-secondary:      #048ABF;
    --color-dark:           #3B5459;
    --color-medium:         #6C7A89;
    --color-light:          #F2F2F2;
    --color-white:          #FFFFFF;
    --color-text:           #E0E6FF;
    --color-text-muted:     #A0A8B8;
    --color-accent:         #41BF78;
}
```

## Autores

- Estefanía Neira Sepúlveda
- Moisés Martínez Vidal 


⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐
