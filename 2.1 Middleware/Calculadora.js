/*
FONTS:
 https://javascript.plainenglish.io/basic-middleware-pattern-in-javascript-ef8756a75cb1

 */
class Calculadora {
    constructor(operacions){
        this.functions = new Map();
        this.functions.set('suma', (left, right) => left + right);
        this.functions.set('resta', (left, right) => left - right);
        this.functions.set('multiplicació', (left, right) => left * right);
        this.middlewares = [];
        this.operacions = operacions;
    }

    use(name, callback){
        this.middlewares.push({name, callback});
        return this;
    }

    resol(){
        for (const op of this.operacions) {
            console.log(`Entrada:`);
            console.log(op);
            // Executa middlewares
            for (const middleware of this.middlewares) {
                middleware.callback(op);
                console.log(`Resultat '${middleware.name}':`);
                console.log(op);
            }
            // Executa càlcul
            const executaOperacio = this.functions.get(op['operation']);
            op['result'] = executaOperacio(op['left'], op['right']);
            console.log(`Resultat operació:`);
            console.log(op);
        }
    }
}

module.exports = Calculadora;
