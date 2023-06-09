/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const { createApp } = Vue

createApp({
   data() {
      return {
         message: 'test',
         headerTitle: 'This Is Vue JS',
         white: 'white',
         imgAttributes: {
            src: './assets/img/VueJS.jpg',
            alt: 'VueJS'
         }
      }
   }
}).mount('#app');