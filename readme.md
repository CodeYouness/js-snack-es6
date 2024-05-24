# SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
- nome del tavolo (tableName),
- nome dell'ospite (guestName),
- posto occupato (place),
- Generiamo e stampiamo in console la lista per i segnaposto.
# SNACK 2
- Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
    1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in   maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
    2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
    3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!!
### Questo è l'elenco degli studenti:

| Id | Name |              Grades |
| --- | --- | --- |
| 213 | Giuseppina della Rovere | 78 |
| 110 | Paola Cortellessa |      96 |
| 250 | Andrea Mantegna |        48 |
| 145 | Gaia Borromini |         74 |
| 196 | Luigi Grimaldello |      68 |
| 102 | Piero della Francesca |  50 |
| 120 | Francesca da Polenta |   84 |

N.B.
Questo esercizio deve essere completato entro la mattinata di domani

# SNACK 3
- Creare un array di oggetti:
    - Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
        1. nome 
        2. peso.
- Stampare in console la bici con peso minore utilizzando destructuring e template literal
# SNACK 4
- Creare un array di oggetti di squadre di calcio.
    - Ogni squadra avrà diverse proprietà: 
        1. nome 
        2. punti fatti 
        3. falli subiti.
- Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
- Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
- Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
# BONUS 1: SNACK 5
- Abbiamo questa lista di articoli di moda:

| Name       | Type      | Color |
|------------|-----------|-------|
| Poppy      | tshirt    | red   |
| Jumping    | occhiali  | blue  |
| CrissCross | scarpe    | black |
| Jenny      | borsa     | pink  |

- Questi articoli sono inseriti in un array di oggetti.
- Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.
# BONUS 2
- Stampare in pagina oltre che in console!

# Human-Code

### Snack 1
- genero l' array con gli invitati
- creo un contenitore di oggetti vuoto
- per ogni persona poi:
    1. aggiungiamo al contenitore di oggetti vuoti
        - il nome del tavolo
        - il nome dell'ospite
        - posto occupato (in ordine crescente da 1 all' ultimo)
- stampo il contenitore di oggetti

### Snack 2
- genero l array con il nome degli studenti, l'id e il grades
- genero un contenitore per i nomi in maiuscolo
- genero un contenitore per i voti >70
- genero un contenitore per i voti >70 e id>120
- ripeto queste operazioni per ogni studente
    1. converto il testo in maiuscolo e lo aggiungo al suo contenitore
    2. - se il voto è superiore a 70 allora:
        - lo aggiungo nel suo contenitore
    - se il voto è superiore a 70 e il suo id è superiore a 120
        - lo aggiungo all ultimo contenitore
    
### Snack 3
- creo arrayA di oggeti con bikeName e bikeWeight come proprietà
- creo arrayB con la prima bicicletta dell array
- ripeto queste cose per ogni bici:
    - se la bici dell' arrayB ha un peso maggiore della bici nella posizione del numero del ciclo allora:
        - cambio nell'arrayB la bici con quella appena usata per la comparazione
- estraggo da arrayB nome e peso
- stampo nome e peso

### Snack 4
- creo array di oggeti con: nome, punti fatti:0 e falli subiti:0
- creo una funzione per generare numeri random da 1 a 10
- per ogni elemento dell'array:
    1. genero un numero random e lo metto nei punti fatti
    2. genero un numero random e lo metto nei falli subiti

### Snack 5 (bonus)
- genero array di oggetti dalla tabella
- creo una funzione randomLetter:
    1. creo un elemento con tutte le lettere
    2. genero un numero random
    3. ritorno la lettera nella posizione del numero random
- per ogni array dell oggetto:
    - aggiungo position: funzione randomLetter all array
    - aggiungo l array ad un nuovo array di oggetti



