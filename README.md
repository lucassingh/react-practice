# Capacitación React

## 🛠️ Instalación de Node con NVM y uso de NVM

NVM (Node Version Manager) es una herramienta que permite instalar y gestionar múltiples versiones de Node.js en tu sistema. Es especialmente útil para proyectos que pueden requerir diferentes versiones de Node.

### ¿Por qué usar NVM?
- Permite cambiar fácilmente entre versiones de Node.js
- Facilita la instalación de nuevas versiones
- No requiere permisos de administrador para instalar paquetes globales
- Aisla las versiones de Node por proyecto

### Pasos para instalar NVM

1. **Para Linux/macOS**:
   `bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   `
2. **O usando wget:**:
   `bash
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
   `
2. **Para Windows:**:
   Descargar el instalador de windows [Aquí](https://github.com/coreybutler/nvm-windows/releases)

### Comandos básicos NVM

1. **Instalar una versión específica de Node**:

`nvm install 18.16.0`

2. **Usar una versión específica:**:

`nvm use 18.16.0`

3. **Listar versiones instaladas::**:

`nvm ls`

4. **Establecer versión por defecto:**

`nvm alias default 18.16.0`

###Configuración post-instalación

Después de instalar Node con NVM, verifica que todo funcione correctamente:

```
   node --version
   npm --version
```


