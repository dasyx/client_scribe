import { supabase } from "$lib/supabaseClient";

async function testDatabaseConnection() {

    // Effectue une requête SELECT pour récupérer des données de la table souhaitée
    const { data, error } = await supabase
      .from("Utilisateurs")
      .select('*')
      .limit(1);
  
    // Vérifie s'il y a des erreurs lors de la requête
    if (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
      return;
    }
  
    // Affiche les données récupérées dans la console
    console.log('Base de données en ligne !');
    console.log(data);
  }
  
  // Appelle la fonction de test pour vérifier la connexion à la base de données
  testDatabaseConnection();  