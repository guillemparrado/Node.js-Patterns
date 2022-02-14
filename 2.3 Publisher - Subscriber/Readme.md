## Instruccions

###  Instal·lació RabbitMQ a localhost: Windows 10

- Instal·la chocolatey: https://chocolatey.org/install
- Instal·la RabitMQ: `choco install rabbitmq`

En acabar instal·lació, executa aplicació "RabbitMQ Service Start" per activar el servei (disponible al menú de Windows com si fos una aplicació més).

### Execució
Per executar el projecte, caldrà tenir RabitMQ corrent en localhost i llavors executar `npm run publisher` en un terminal i `npm run subscriber` en un altre. El que escriguem al terminal de Publisher apareixerà rebut al terminal del Subscriber.
