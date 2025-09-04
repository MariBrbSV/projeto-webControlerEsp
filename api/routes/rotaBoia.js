import { onMessage, STATUS_BOIA} from "../services/mqttClient.js"

let statusBoia = "";

onMessage(STATUS_BOIA, (mensagem) =>{
    console.log(`${statusBoia}`)
    statusBoia = mensagem;
});

class rotaBoia{
    static lerStatusBoia(req, res){
        try{
            res.status(200).json({
                statusBoia
            })
        }catch(error){
            res.status(500).json({message: 'Erro interno ao obter status'});
        }
    }
}

export default rotaBoia;