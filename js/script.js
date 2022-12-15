let form = document.getElementById('form') 

form.addEventListener('submit', jcalculator)

function jcalculator(e) {

    e.preventDefault();

    let journey = document.getElementById('journey').value;
    
    let aerolines = parseInt(document.getElementById('aerolines').value);

    let tickets = parseInt(document.getElementById('tickets').value);

    if (aerolines == 1) {
        if (tickets == 1) {
            let total = 1200000;
            
            IU(total);

            function IU(total) {
                let result = document.getElementById('result')
                let dataPrint = document.createElement('div')
            
                dataPrint.innerHTML = `
                <p>Descuento: No aplica.</p>
                <p>Total a pagar: $${total}</p>
                `
            
                result.appendChild(dataPrint);
            
                reset();
            
            }
            
            function reset() {
                document.getElementById('form').reset()
            }
        }
        if (tickets == 2) {
            let total = 1200000;
            let discount = total * 0.03;
            let afterdiscount = total - (total * 0.03);
            UI(discount, afterdiscount)
        }
        if (tickets == 3) {
            let total = 1200000;
            let discount = total * 0.04;
            let afterdiscount = total - (total * 0.04);
            UI(discount, afterdiscount)
        }
        if (tickets == 4) {
            let total = 1200000;
            let discount = total * 0.1;
            let afterdiscount = total - (total * 0.1);
            UI(discount, afterdiscount)
        }
    } 

    if (aerolines == 2) {
        if (tickets == 1) {
            let total = 1000000;
            
            IU(total);

            function IU(total) {
                let result = document.getElementById('result')
                let dataPrint = document.createElement('div')
            
                dataPrint.innerHTML = `
                <p>Descuento: No aplica.</p>
                <p>Total a pagar: $${total}</p>
                `
            
                result.appendChild(dataPrint);
            
                reset();
            
            }
            
            function reset() {
                document.getElementById('form').reset()
            }
        }
        if (tickets == 2) {
            let total = 1000000;
            let discount = total * 0.03;
            let afterdiscount = total - (total * 0.03);
            UI(discount, afterdiscount)
        }
        if (tickets == 3) {
            let total = 1000000;
            let discount = total * 0.04;
            let afterdiscount = total - (total * 0.04);
            UI(discount, afterdiscount)
        }
        if (tickets == 4) {
            let total = 1000000;
            let discount = total * 0.1;
            let afterdiscount = total - (total * 0.1);
            UI(discount, afterdiscount)
        }
    }
}

function UI(discount, afterdiscount) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML = `
    <p>Descuento: $${discount}</p>
    <p>Total a pagar: $${afterdiscount}</p>
    `

    result.appendChild(dataPrint);

    reset();

}

function reset() {
    document.getElementById('form').reset()
}