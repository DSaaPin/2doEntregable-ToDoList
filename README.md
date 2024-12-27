
## ToDo-App ##

En este proyecto creamos una App para agregar tareas, modificarlas, marcarlas como realizadas o desmarcarlas, eliminarlas y listarlas. 
Utilizamos React, Vite, Node.js, Express y Mongoose, conectando a una base de datos de MongoDB.


## Instalación

1. Clonar repositorio:

   bash
   git clone https://github.com/DSaaPin/2doEntregable-ToDoList
   

2. Navegar al directorio **Backend** del proyecto e instalar las dependencias:

   bash
   2.1 cd BE
   2.2 npm install


3. Configura el archivo `.env` en la carpeta BE del proyecto. Se puede usar el archivo `sampleEnv` como referencia:

    .env
   PORT=3000
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.yjdib.mongodb.net/todolist?retryWrites=true&w=majority
   

   Reemplazar:
   - <username> con el nombre de usuario MongoDB.
   - <password> con tu contraseña de MongoDB.
   
   
4. Navega al directorio del **Frontend** del proyecto e instala las dependencias:

   bash
   3.1 cd FE
   3.2 npm install

---

## Uso

1. Para iniciar la conexión a la base de datos, ir a la carpeta de backend e iniciar servidor:

    bash
    cd BE
    npm run dev

    El servidor estará disponible en `http://localhost:3000` por defecto.

2. Para levantar el frontend, se debe abrir otra terminal (dejando la de BE abierta y funcionando), ir a la carpeta de frontend e iniciar:

    bash
    cd FE
    npm run dev

    El servidor estará disponible en `http://localhost:5173` por defecto.

    
**Una vez iniciados ambos servidores ya se pueden hacer pruebas directamente desde la web**

**Registro y Logueo de usuarios**
Se implementa un sistema de autenticación de usuarios mediante JWT
Dejamos un usuario precargado con el cual se puede probar logueos:

{
  "email": "lala@gmail.com",
  "password":"1411"
}


**Pruebas con POSTMAN**
En caso de querer probar directamente el BE se puede utilizar Postman. Dejamos una colección precargada en la carpeta BE/assets, la cual se puede importar en POSTMAN y probar los distintos Endpoints.

**Aclaración:** Dado que en la última versión se agrega autenticación con token, para poder probar los CRUD de tareas se deberá especificar el header key: "Authorization" value: Bearer <token>

[Descargar collection-todos-postman.json](./BE/assets/collection-todos-postman.json)

**Importar la colección en Postman**:
   - Abre Postman y haz clic en **Importar**.
   - Selecciona el archivo descargado.
   - La colección incluye ejemplos para crear, buscar, actualizar y eliminar tareas.


   
## 🛠️ Endpoints y Ejemplos en Postman

### Endpoints Disponibles

| Método | Endpoint          | Descripción                  |
|--------|-------------------|------------------------------|
| GET    | `/api/todos`      | Obtiene todas las tareas.    |
| GET    | `/api/todos/:id`  | Obtiene una tarea por ID     |
| POST   | `/api/todos`      | Crea una nueva tarea.        |
| PUT    | `/api/todos/:id`  | Actualiza una tarea.         |
| PATCH  | `/api/todos/:id`  | Marca una tarea como hecha.  |
| DELETE | `/api/todos/:id`  | Elimina una tarea.           |

---

### Colección de Postman

Puedes descargar la colección preconfigurada para probar todos los endpoints:

---

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Contacto

- GitHub: [DSaaPin](https://github.com/DSaaPin)
- Email: **[dsaavedra.cp@gmail.com]**
