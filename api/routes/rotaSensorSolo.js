import { onMessage, SENSOR_SOLO} from "../services/mqttClient.js";

let condicaoSolo = "";
let sensorUmidade = "";

onMessage(SENSOR_SOLO, (mensagem) => {
    sensorUmidade = mensagem;
});

onMessage( (mensagem) => {
    condicaoSolo = mensagem;
});

class rotaSensorSolo {
    static lerSensorSolo(req, res) {
        try {
            console.log(`📊 Obtendo dados do sensor - Umidade Solo: ${sensorUmidade}%, Condição Solo: ${condicaoSolo}%`);
            
            res.status(200).json({
                condicaoSolo: condicaoSolo,
                umidade: sensorUmidade
            });
        } catch (error) {
            console.error('Erro ao obter dados do sensor:', error);
            res.status(500).json({ message: 'Erro interno ao obter dados do sensor.' });
        }
    }
}
export default rotaSensorSolo;