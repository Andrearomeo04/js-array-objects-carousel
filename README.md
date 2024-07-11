*Consegna:*
Dato il seguente array di oggetti
Creare un carosello. Se non avete fantasia potete copiare l'immagine allegata (è comprensiva di bonus).
Numero di push minimi: 10
Raccomandazione: seguite le milestone una per una. Ricordarsi/rivedere il live coding della mattina
può essere d'aiuto
*Milestone 0:*
Come visto a lezione, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
*Milestone 1:*
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
****
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
**Milestone 2:
Aggiungere il *ciclo infinito* del carosello.** Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
*BONUS 1:*
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
*BONUS 2:*
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
*BONUS 3:*
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro! :faccia_leggermente_sorridente:

soluzione 

1.creo in html il contenitore che conterrà le mie immagini
2.inserisco le immagini nel contenitore per poterlo poi stilizzare
3.una volta stilizzato il carosello, recupero gli elementi dal dom dove andrò successivamente a inserire le mie immagini
4.definisco una variabile in cui andrò ad appendere le immagini che andrò a ciclare
5.definisco la variabile "active" che usero come indice per mostrare l'immagine selezionata dall'utente
6.ciclo le immagini e le appendo alla variabile creata poco prima
7.recupero tutti gli elementi "immagine" presenti nel dom e aggiungo la classe active al primo elemento
8.recupero i pulsanti dal dom
9.lascio il bottone next in attesa di un evento click
10.creo una condizione per far si che quando sono all'ultima immagine, cliccando sull'immagine successiva, torno a quella iniziale e viceversa
11.se active è uguale alla lunghezza dell'array meno uno allora assegno alla variabile "active" il valore 0
12.altrimenti aumento il valore della variabile di 1
13.quando si verifica l'evento, il contatore della variabile "active" aumenta di 1, rimuove la classe "active" all'elemento attualmente attivo e la aggiungo al prossimo, in questo modo l'immagine mostrata sarà quella successiva


