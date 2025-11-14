/*
------------
CALCOLATRICE
------------

scrivi un programma che chieda all'utente di 
inserire un operatore numerico ('+', '-', '/', '*'),
il primo valore numerico e il secondo valore numerico
e che restituisca il risultato dell'operazione matematica a schermo

usare 'prompt' e 'alert'
*/

const operatore = prompt("inserire un operatore tra: \n" +
    "' + ' \n" +
    "' - '\n" +
    "' * '\n" +
    "' / '");

if (!(operatore == "+" || operatore == "-" || operatore == "/" || operatore == "*"))
{
    alert("errore, non hai inserito uno degli operatori richiesti");
}
else
{
    const numero1 = Number(prompt("inserire il primo numero"));
    if (Number.isNaN(numero1))
    {
        alert("non hai inserito un numero");
    }

    const numero2 = Number(prompt("inserire il secondo numero"));
    if (Number.isNaN(numero2))
    {
        alert("non hai inserito un numero");
    }

    let risultato = NaN;
    if (operatore == "+")
    {
        risultato = numero1 + numero2;
    }
    else if (operatore == "-")
    {
        risultato = numero1 - numero2;
    }
    else if (operatore == "*")
    {
        risultato = numero1 * numero2;
    }
    else if (operatore == "/")
    {
        if (numero2 == 0)
        {
            alert("non puoi dividere per 0");
        }
        else
        {
            risultato = numero1 / numero2;
        }
    }
    else
    {
        alert("non hai inserito un operatore");
    }

    if (!Number.isNaN(risultato))
    {
        alert("risultato: " + risultato);
    }
}
