#Docker example

## Instalacion
```bash
docker build -t 4tr3yu-test-app .
```
Basicamente crea una imagen de llamada 4tr3yu-test-app usando el archivo Dockerfile ubicado en el directorio actual
en donde se las instrucciones para configurar el server de express

```bash
docker-compose up
```
Se usan las definiciones del docker-compose.yaml, ahi estamos definiendo 2 contenedores, uno para la db y otro para el server de express y le asignamos una mascara al puerto