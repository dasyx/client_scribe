<script>
    export let background = 'url(chemin_vers_l_image)';
    export let title = '';
  </script>
  
  <style>
    .banner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px; /* Ajustez la hauteur selon vos besoins */
      width: 100%; /* Utilisation de 100% de la largeur de la page */
      background-image: var(--background);
      background-size: cover;
      color: #fff;
    }
  
    h1 {
      font-size: 40px; /* Ajustez la taille de police selon vos besoins */
      text-align: center;
    }
  </style>
  
  <section class="banner" style="--background: {background}">
    <h1>{title}</h1>
  </section>
  