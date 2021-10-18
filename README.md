# Primo Progetto Vue.js

## Progetto

L'obiettivo di questo progetto è quello di ricostruire il famoso gioco di tris utilizzando il Framework di JavaScript Vue.js.
Si suppone di giocare con un'avversario sullo stesso pc.
Il fine è quello di dimostrare di aver appreso concretamente le potenzialità di Vue.js e dei suoi components.


### Vue-Cli

Per la struttura di questo progetto ho implementato Vue-Cli come mi è stato consigliato e ho capito immediatamente i motivi:
Oltre ad avere il vantaggio di vedere a schermo in tempo reale le modifiche che vengono apportate, ho creato una struttura per il progetto ordinata che rende facilmente modificabile il mio progetto in futuro.
Inoltre ho utilizzato, per i miei components, la struttura SFC (single file components) che mi ha aiutato a 'comprimere' in un singolo file .vue ogni mio componente


### Struttura del progetto

Per la struttura del progetto ho utilizzato quella proposta da Vue-Cli facendo ovviamente le dovute modifiche
Nella cartella public troviamo la favicon del sito e il file HTML che viene lanciato quando inizializiamo il server.
La cartella fondamentale è la cartella src che contiene il file App.vue , il file main.js e la cartella components con all'interno i miei componenti.

### I Components

I components sono il vero cuore di questo progetto come lo sono per Vue.js.
I components che mi sono serviti per creare questa SPA sono principalmente due:
Tris-game e Cell.
Tris-game è il component padre che ha la funzione di creare la piattaforma di gioco e tenere traccia delle modifiche che vengono fatte ai component figli (Cell).
Il component figlio Cell invece ha il compito di modificare il proprio stato e rinviare la modifica al component padre (Tris-game)

#### Tris

Il template del component Tris-game consiste nel creare lo spazio di gioco e crea 9 components Cell tramite un ciclo v-for che compongono la griglia di gioco.
All'interno del component ci sono 2 funzioni :
- check che viene chiamata dai components figli per poter aggiornare lo stato del gioco
- restart che ha il compito di ripristinare il gioco allo stato iniziale

#### Cell

Il template del component Cell crea un div al quale viene associato al 'click' del giocatore la funzione inner che incarica al component padre l'aggiornamento dello stato di gioco

### Conclusione 

Durante l'esecuzione di questo progetto mi sono realmente reso conto di quanto sia efficace Vue con i suoi components e non vedo l'ora di iniziare il prossimo progetto.
Anche l'efficacia di Vue-Cli mi ha stupito anche se non ho avuto bisogno di sfruttare tutte le sue funzionalità come ad esempio il sistema di routing che essendo un unica pagina non era necessario.
Avrei potuto curare di più l'aspetto grafico del sito e sicuramente lo farò in futuro, ma l'obiettivo del progetto è quello di aver assimilato le nozioni imparate e spero di essere riuscito a dimostrarlo
