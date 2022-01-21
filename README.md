# GROUPOMANIA

**Installation des modules :**
* Installer les packages Vue-cli et nodemon server
* « Npm install » pour les autres packages

**Connexion à la base de données :**
* Télécharger MySQL si vous ne l’avez pas déjà
* Créer une base de données vide appelée « groupomania »
* La connexion à la BDD se trouve dans le dossier config/database.js
* Le fichier .env contient la connexion

**Lancement du projet :**
* Depuis la racine dans la console : « nodemon server » ou « node server » pour le back
* Dans un autre terminal « npm run start » pour le front

**Données de la base :**
Vous pouvez soit partir de zéro en créant vos utilisateurs en créant vos utilisateurs, publications et commentaires, dans se cas il faudra créer le rôle « moderator » directement dans la base en SQL ou via Postman avant d’insérer d’autres données. Les utilisateurs modérateurs ne peuvent aussi être créé que via SQL ou Postman en renseignant l’identifiant du rôle de modérateur.

Sinon, je vous mets dans le dossier config/datas à la racine, des utilisateurs, publications et commentaires à simplement copier/coller la partie « INSERT INTO » dans MySQL en respectant l’ordre d’insertion des données : Rôle -> User -> Post -> Comment -> Like. Les mots de passe des utilisateurs sont leur prénom en minuscule.
