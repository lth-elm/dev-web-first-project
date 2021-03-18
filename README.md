# Première application fullstack avec Vue (client) et Expressjs (serveur)

1. [Exécution](#execution)
    1. [Serveur](#serveur)
    2. [Client](#client)
2. [Présentation du site](#presentation)
    1. [Home](#home)
    2. [Informatique](#info)
    3. [Finance](#finance)
    4. [Physique](#physique)
    5. [Sign in/out](#sign)
    

## Exécution de l'application <a name="execution"></a>

### Serveur <a name="serveur"></a>

Se placer dans le dossier `server` et entrer la commande suivante :

```
cd server
npm run dev
```

Ce code exécutera alors `nodemon src/index.js` permettant alors de relancer automatiquement le processus actif dès qu'un fichier ECMAScript ou JSON est modifié.

**Nodemon** est utilisé ici en tant que dépendance de développement et **express** en dépendance de production.

L'application peut alors être écoutée localement sur le port `3000` et les API  accessibles depuis le chemin `/api/v1`.

### Client <a name="client"></a>

Se placer dans le dossier `client` et entrer la commande suivante :

```
cd client
npm run serve
```

Ce code exécutera alors `vue-cli-service serve`. L'application est écoutée localement sur le port `8080`.

## Présentation du site <a name="presentation"></a>

Le site est composé de 5 modules :

### Home <a name="home"></a>

Page d'accueil où sont listées des informations concernant le site ainsi que toutes les ressources utilisés.

### Informatique <a name="info"></a>

Brainstorming est une page où l'utilisateur peut écrire et ainsi lister tous les langages informatique qu'il connait. 4 langages sont déja pré-remplis puis 3 autres sont récupérés depuis le serveur via le chemin `http://localhost:3000/api/v1/langagesinfo`. Il est également possible de supprimer un langage de la liste si une erreur a eu lieu ou autres raison.

La page C# est quant à elle une page éducative afin d'en apprendre plus sur ce langage. Une navigation sur le côté permet de se rendre directement au sujet qui nous intéresse.

### Finance <a name="finance"></a>

Sur la page marché financier sont répertoriés les cours actuels du NYSE (bourse New-Yorkaise) accompagné d'un descriptif obtenu avec l'API de [Marketstack](https://marketstack.com/).

De même, la page cryptomonnaie liste le top 10 des cryptomonnaies actuels selon [CoinMarketCap](https://coinmarketcap.com/fr/) ainsi que leurs prix. **Attention, cette page n'est accessible qu'une fois connecté**. Pour cela vous pouvez renseigner **crypto-master** comme identifiant et **53CR37!** comme mot de passe. Une fois connecté vous pourrez accéder à ces données et ajouter les cryptos que vous souhaitez en favoris.

### Physique <a name="physique"></a>

Mémo contient 2 petites devinettes sous la forme d'un "qui est-ce ?" dont la réponse est accessible.

Secret Physique est une page qui ne contient rien à première vue. Toutefois, un secret physique sera révélé si l'utilisateur effectue une manipulation précise...

### Sign in/out <a name="sign"></a>

Pour se connecter, entrer l'identifiant et le mot de passe par défaut à savoir : **crypto-master** et **53CR37!** afin d'avoir notamment accès à la page "Cryptomonnaie". La page d'enregistrement ne permet malhereusement pas encore d'enregistrer ses identifiants.
