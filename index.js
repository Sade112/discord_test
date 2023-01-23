const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents: 32767});
const { ActivityType } = require("discord.js");

var myKey = config.discord_api;
function hola(){

    const { Client, GatewayIntentBits } = require('discord.js');
    const client = new Client({intents: 32767});
    const { ActivityType } = require("discord.js");

    client.on("ready", () => {
        console.log("El bot esta listo como " + client.user.tag);
    
    
    
        //función que se ejecutará cada minuto para actualizar el nombre del bot en Discord
        function updateBotName() {
    
    
            // Envía una solicitud HTTP a la API de Steam para obtener el número de jugadores en el servidor
            fetch(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=1531430`)
            .then((response) => response.json()) // Obtén la respuesta en formato JSON
            .then((data) => {
                // Obtenemos de la respuesta los parametros que necesitamos y actualizamos el estado del bot
                client.user.setActivity(data.response.player_count + " jugadores activos", {type: ActivityType.Watching,});
            });
    
    
    
    
        };
        //ejecutar la función cada minuto
        var interval = setInterval(updateBotName, 60000);
    });
    client.login(`${myKey}`);
}
client.on("ready", () => {
    console.log("El bot esta listo como " + client.user.tag);



    //función que se ejecutará cada minuto para actualizar el nombre del bot en Discord
    function updateBotName() {


        // Envía una solicitud HTTP a la API de Steam para obtener el número de jugadores en el servidor
        fetch(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=1531430`)
        .then((response) => response.json()) // Obtén la respuesta en formato JSON
        .then((data) => {
            // Obtenemos de la respuesta los parametros que necesitamos y actualizamos el estado del bot
            client.user.setActivity(data.response.player_count + " jugadores activos", {type: ActivityType.Watching,});
        });




    };
    //ejecutar la función cada minuto
    var interval = setInterval(updateBotName, 60000);
});

client.login(`${myKey}`);