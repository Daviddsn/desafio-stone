
let list = [
    {
        'item': 'Arroz',
        'quant' :'1',
        'price':'500',
        'weight' :'1000', // em gramas
        'package' : '5'

    },
    {
        'item': 'Leite',
        'quant' :'1',
        'price':'500',
        'weight' :'1000', // em gramas
        'package' : '5'

    },
    {
        'item': 'Feijão',
        'quant' :'1',
        'price':'300',
        'weight' :'1000', // em gramas
        'package' : '1'

    },
];

let email = [
    'breitenberg.felipe@yahoo.com',
    'reichel.clotilde@hansen.org',
    'monahan.gerard@gmail.com',
    'kuhlman.dalton@hessel.org',
    'heathcote.bertha@morar.com',
    'larson.cheyenne@yahoo.com',
    'othompson@yahoo.com',
    'pdamore@gmail.com',
    'joel.yost@feeney.com',
    'chaya.torp@hotmail.com',
    'vesta47@veum.com',
    'matt.kutch@berge.biz',
    'casper96@hotmail.com',
    'jeanne.gerlach@maggio.com',
    'erdman.olen@haley.org',
    'stamm.rachelle@moen.com',
    'satterfield.simeon@yahoo.com',
    'wrussel@monahan.com',
    'jbatz@hotmail.com',
    'kennith.sipes@hotmail.com',
    'odenesik@hoppe.com',
    'considine.elliot@lynch.com',
    'walker.karson@hotmail.com',
    'jokuneva@gmail.com',
    'laisha53@hotmail.com',
    'pheidenreich@hotmail.com',
    'hanna.schaden@murazik.info',
    'kerluke.brook@gmail.com',
    'qohara@oconnell.org',
    'melyssa85@collier.net',
    'nheaney@yahoo.com',
    'nblick@hotmail.com',
    'ivonrueden@yahoo.com',
    'johnson.bergnaum@harvey.info',
    'gwen.fahey@harris.com',
    'armstrong.aaliyah@dubuque.org',
    'tierra.gusikowski@wolff.com',
    'hintz.dangelo@hotmail.com',
    'jewel86@treutel.com',
    'usawayn@tillman.com',
    'ollie37@glover.info',
    'hermiston.mina@feest.com',
    'fadel.anthony@powlowski.com',
    'ebrakus@upton.com',
    'pollich.levi@hotmail.com',
    'hegmann.alexa@yahoo.com',
    'jeanne.little@hodkiewicz.com',
    'crona.jamison@yahoo.com',
    'may89@walker.info',
    'ukris@cruickshank.com',
    'kayla78@hotmail.com',
    'stoltenberg.kristoffer@west.com',
    'paxton71@gmail.com',
    'spinka.jack@yahoo.com',
    'fay.lucio@hotmail.com'
				

];





function desafio(list,emails){
    if(!emails.length || !list.length){

        throw "Varificar Lista vazia";
      
    }

    let total = 0; // Soma total dos preços de cada item
    let partial; // Valor que cada um pagará.
    let portion = emails.length //Quantidade de emails DIVIDENDO do valor total.
    let result = [];

    list.forEach(element => {
        total += element['quant']*element['price'];
    });

    partial = Math.trunc((total/portion));
 
    let rest = (total-(partial*portion));
 

    
    emails.forEach( (element,key) => {
        
        if(key == (emails.length -1)){
           
            partial += rest;
        }
        
         result[element] = partial;
         
    });

        return result; // retorna array com resultado 
    
    
}

