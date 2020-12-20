# Première application fullstack avec Vue (client) et Expressjs (serveur)

## Exécution de l'application

### Serveur

Se placer dans le dossier `server` et entrer la commande suivante :

```
npm run dev
```

Ce code exécutera alors `nodemon src/index.js` permettant alors de relancer automatiquement le processus actif dès qu'un fichier ECMAScript ou JSON est modifié.

**Nodemon** est utilisé ici en tant que dépendance de développement et **express** en dépendance de production.

L'application peut alors être écouté localement sur le port `3000` et les API  accessible depuis le chemin `/api/v1`.

### Client

Se placer dans le dossier `client` et entrer la commande suivante :

```
npm run serve
```

Ce code exécutera alors `vue-cli-service serve`. L'application est écoutée localement sur le port `8080`.