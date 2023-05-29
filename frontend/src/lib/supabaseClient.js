import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://yhmhaqevvpovrtblolbz.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobWhhcWV2dnBvdnJ0YmxvbGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNjkxMzYsImV4cCI6MTk5OTc0NTEzNn0.ZqB6DyGD7ALmViOqOJWKr8JSxzZzofKZm1i4W0pGWp0';
export const supabase = createClient(supabaseUrl, supabaseKey);

async function testDatabaseConnection() {

    // Effectuez une requête SELECT pour récupérer des données de la table souhaitée
    const { data, error } = await supabase
      .from("Utilisateurs")
      .select('*')
      .limit(1);
  
    // Vérifiez s'il y a des erreurs lors de la requête
    if (error) {
      console.error('Erreur lors de la récupération des données:', error.message);
      return;
    }
  
    // Affichez les données récupérées dans la console
    console.log('Base de données en ligne !');
    //console.log(data);
  }
  
  // Appelez la fonction de test pour vérifier la connexion à la base de données
  testDatabaseConnection();  