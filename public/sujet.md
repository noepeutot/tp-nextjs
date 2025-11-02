# TP découverte Next.js

## Objectif

L'objectif de ce TP est de vous initier au framework Next.js. À la fin de cette session, vous serez capable de :
- Créer et lancer une application Next.js.
- Comprendre le système de routage basé sur les fichiers.
- Optimiser les images avec le composant `next/image`.
- Comprendre les différents types de rendu (CSR, SSG, SSR).
- Découvrir le découpage automatique du code pour de meilleures performances.
- Créer des API REST avec Next.js (côté back-end).

## Prérequis

Avant de commencer à utiliser Next.js, il est nécessaire d'avoir installé : 
- Node.js 18.18+

### Installation de Node.js

#### Etape 1 : Installer miniconda
Afin d'installer Node.js, vous pouvez utiliser [miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions).
N'oubliez pas d'ajouter le chemin de l'installation de Node.js à votre variable d'environnement PATH.

#### Etape 2 : Vérifier l'installation de miniconda

Ouvrez un nouveau terminal avec conda activé et testez :
```bash
conda --version
```

#### Etape 3 : Créer votre environnement pour le TP Next.js

Créez un nouvel environnement pour le TP Next.js avec Node.js 24 :
```bash
conda create -n tp-nextjs nodejs=24 -c conda-forge
```
Tapez 'y' pour confirmer l'installation.

Activer l'environnement :
```bash	
conda activate tp-nextjs
```

Vérifier que Node.js est installé :
```bash
node --version
npm --version
```

---

## Partie 1 : Initialisation du projet

> **Durée estimée** : 5 minutes

Next.js est un framework React qui facilite la création d'applications web modernes et performantes. Il inclut par défaut des fonctionnalités comme le rendu côté serveur (SSR), la génération de sites statiques (SSG) et un système de routage simple.

Nous allons créer un mini-site de présentation de produits pour découvrir Next.js.

1.  Ouvrez votre terminal (ou invite de commandes).
2.  Naviguez jusqu'au dossier où vous souhaitez créer votre projet.
3.  Lancez la commande suivante. Elle va créer un nouveau dossier `mon-premier-tp-next` avec un projet Next.js prêt à l'emploi.

    ```bash
    npx create-next-app@latest mon-premier-tp-next
    ```

4.  Lors de l'installation, vous aurez plusieurs questions. Voici les réponses à choisir pour ce TP :
    - `Would you like to use TypeScript?` **Yes**
    - `Which linter would you like to use?` **ESLint**
    - `Would you like to use React Compiler?` **No**
    - `Would you like to use Tailwind CSS?` **No**
    - `Would you like your code inside a `src/` directory?` **No**
    - `Would you like to use App Router?` **No**
    - `Would you like to use Turbopack for 'next dev'?` **No**
    - `Would you like to customize the import alias ('@/*' by default)` **No**

5.  Une fois l'installation terminée, naviguez dans le dossier du projet et lancez le serveur de développement :

    ```bash
    cd mon-premier-tp-next
    npm run dev
    ```

6.  Ouvrez votre navigateur et allez à l'adresse [http://localhost:3000](http://localhost:3000). Vous devriez voir la page d'accueil par défaut de Next.js.

Félicitations, votre projet est prêt !

---

## Partie 2 : Les Pages et le Routing

Dans Next.js, le routage est basé sur le système de fichiers. Chaque fichier dans le dossier `pages` devient une route accessible dans l'application. C'est l'une des forces de Next.js : pas besoin de configurer un routeur !

1.  **Explorez le projet** : Ouvrez le dossier `mon-premier-tp-next` dans votre éditeur de code. Regardez le dossier `pages`. Vous y trouverez `index.tsx`. Ce fichier correspond à la route `/` (la page d'accueil).

2.  **Modifiez la page d'accueil** :
    - Ouvrez `pages/index.tsx`.
    - Supprimez tout le contenu et remplacez-le par :

    ```tsx
    export default function Home() {
      return (
        <main>
          <h1>Ma Boutique Next.js</h1>
          <p>Bienvenue dans notre boutique en ligne !</p>
        </main>
      )
    }
    ```
    - Sauvegardez. Next.js recharge automatiquement la page !

3.  **Créez une page "Produits"** :
    - Créez `pages/products.tsx` avec :

    ```tsx
    export default function Products() {
      return (
        <div>
          <h1>Nos Produits</h1>
          <p>Découvrez notre catalogue.</p>
        </div>
      )
    }
    ```
    - Allez sur [http://localhost:3000/products](http://localhost:3000/products). Votre page s'affiche instantanément !

**Point clé** : `pages/index.tsx` → `/` et `pages/products.tsx` → `/products`. Simple et intuitif !

---

## Partie 3 : Optimisation des Images avec next/image

L'un des grands avantages de Next.js est son optimisation automatique des images. Le composant `Image` améliore les performances de votre site en optimisant automatiquement les images (lazy loading, formats modernes, dimensionnement adaptatif).

1.  **Préparez une image** :
    - Créez un dossier `public` à la racine du projet (s'il n'existe pas déjà).
    - Téléchargez une image simple (par exemple, un logo ou une bannière) et placez-la dans `public/banniere.jpg`.
    - **Astuce** : Les fichiers dans `public` sont accessibles directement depuis `/`.

2.  **Utilisez le composant Image** :
    - Modifiez `pages/index.tsx` pour ajouter une image :

    ```tsx
    import Image from 'next/image';

    export default function Home() {
      return (
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Ma Boutique Next.js</h1>
          <Image 
            src="/banniere.jpg" 
            alt="Bannière de la boutique" 
            width={800} 
            height={400}
            priority
            style={{ borderRadius: '10px' }}
          />
          <p style={{ marginTop: '20px' }}>Bienvenue dans notre boutique en ligne !</p>
        </main>
      )
    }
    ```

3.  **Testez et observez** :
    - Rechargez la page d'accueil.
    - Ouvrez les outils de développement (F12) → Onglet **Network**.
    - Regardez le format de l'image chargée : Next.js la convertit automatiquement en **WebP** pour un chargement plus rapide !

**Points clés** :
- `priority` : charge l'image immédiatement (pour les images importantes).
- Sans `priority` : l'image se charge uniquement quand elle devient visible (**lazy loading**).
- Next.js redimensionne et optimise automatiquement vos images !

---

## Partie 4 : Les Types de Rendu

Next.js propose plusieurs **types de rendu** pour adapter les performances à vos besoins. Découvrons les trois principaux : **CSR** (Client-Side Rendering), **SSG** (Static Site Generation) et **SSR** (Server-Side Rendering).

⚠️ **Important** : Pour observer correctement les différences entre SSG et SSR, nous allons travailler en **mode production**. Arrêtez votre serveur de développement (`Ctrl+C`), puis :

```bash
npm run build
npm start
```

Gardez ce serveur en production actif pendant toute cette partie du TP.

### CSR : Rendu côté Client

Par défaut, React fonctionne en **CSR** : le navigateur télécharge le JavaScript et génère la page. C'est ce que nous avons fait jusqu'ici.

### SSG : Génération Statique

Les pages sont **générées à la compilation** et servies instantanément. Idéal pour du contenu qui change rarement.

1.  **Créez une page avec SSG** :
    - Créez `pages/about.tsx` :

    ```tsx
    export default function About({ buildTime }: { buildTime: string }) {
      return (
        <div style={{ padding: '20px' }}>
          <h1>À propos</h1>
          <p>Cette page a été générée à : <strong>{buildTime}</strong></p>
          <p>Elle est générée une seule fois lors du build, puis servie instantanément !</p>
        </div>
      );
    }

    // Cette fonction s'exécute à la compilation (build)
    export async function getStaticProps() {
      return {
        props: {
          buildTime: new Date().toLocaleString('fr-FR'),
        },
      };
    }
    ```

2.  **Recompilez l'application** :
    ```bash
    # Arrêtez le serveur (Ctrl+C), puis :
    npm run build
    npm start
    ```

3.  **Testez** :
    - Allez sur [http://localhost:3000/about](http://localhost:3000/about).
    - Rafraîchissez plusieurs fois : l'heure **ne change pas** ! La page a été pré-générée au moment du build.

### SSR : Rendu côté Serveur

La page est **générée à chaque requête** côté serveur. Idéal pour du contenu dynamique.

1.  **Créez une page avec SSR** :
    - Créez `pages/time.tsx` :

    ```tsx
    export default function Time({ currentTime }: { currentTime: string }) {
      return (
        <div style={{ padding: '20px' }}>
          <h1>Heure du Serveur</h1>
          <p>Heure actuelle : <strong>{currentTime}</strong></p>
          <p>Cette page est générée côté serveur à chaque visite !</p>
        </div>
      );
    }

    // Cette fonction s'exécute à chaque requête
    export async function getServerSideProps() {
      return {
        props: {
          currentTime: new Date().toLocaleString('fr-FR'),
        },
      };
    }
    ```

2.  **Recompilez l'application** :
    ```bash
    # Arrêtez le serveur (Ctrl+C), puis :
    npm run build
    npm start
    ```
    - Observez la sortie du build : vous verrez des symboles différents :
      - **○** = Page CSR comme `/`
      - **●** = Page statique (SSG) comme `/about`
      - **ƒ** = Page SSR (rendue à chaque requête) comme `/time`

3.  **Testez** :
    - Allez sur [http://localhost:3000/time](http://localhost:3000/time).
    - Rafraîchissez : l'heure **change à chaque fois** !
    - Comparez avec `/about` : l'heure y reste fixe.

**Tableau récapitulatif** :

| Type | Quand l'utiliser ? | Exemples |
|------|-------------------|----------|
| **CSR** | Contenu interactif avec beaucoup d'interactions utilisateur | Dashboard, application web complexe |
| **SSG** | Contenu qui change rarement | Blog, page "À propos", documentation |
| **SSR** | Contenu qui change souvent et doit être à jour | Fil d'actualités, e-commerce, données temps réel |

**Retour en mode développement** : Pour la suite du TP, arrêtez le serveur de production (`Ctrl+C`) et relancez `npm run dev` pour bénéficier du rechargement automatique.

---

## Partie 5 : Le Découpage Automatique du Code

Next.js **découpe automatiquement votre code** (code splitting) : chaque page ne charge que le JavaScript nécessaire. Cela accélère considérablement le chargement !

**Pourquoi c'est important ?** Sans code splitting, le navigateur téléchargerait **tout** le JavaScript de votre site (toutes les pages) même si l'utilisateur ne visite qu'une seule page. Avec Next.js, seul le code de la page visitée est chargé.

### Découpage Automatique par Page

Next.js crée automatiquement un fichier JavaScript distinct pour chaque page. Par exemple : `index.js` pour `/`, `products.js` pour `/products`, etc.

1.  **Observez le découpage** :
    - Ouvrez les outils de développement (F12) → Onglet **Network**.
    - Allez sur la page d'accueil (`/`).
    - Regardez les fichiers `.js` chargés : vous verrez `index.js` ou similaire.
    - Allez maintenant sur `/products`.
    - Un **nouveau fichier JavaScript** est chargé uniquement pour cette page (`products.js`) !

**Ce que vous venez d'observer :** Sur `/`, seul `index.js` est chargé. Sur `/products`, c'est `products.js` qui est chargé. Le code d'une page n'est téléchargé que lorsqu'on visite cette page. Résultat : votre site est plus rapide !

### Importation Dynamique de Composants

Le découpage peut aller encore plus loin ! Vous pouvez charger des composants uniquement **quand l'utilisateur en a besoin** (par exemple, après un clic) grâce à `dynamic`. Cela évite de charger du code qui ne sera peut-être jamais utilisé.

1.  **Créez un composant lourd** :
    - Créez `components/HeavyComponent.tsx` :

    ```tsx
    export default function HeavyComponent() {
      return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', marginTop: '20px', borderRadius: '8px' }}>
          <h3>Composant Lourd 🚀</h3>
          <p>Ce composant n'est chargé que lorsqu'on clique sur le bouton !</p>
        </div>
      );
    }
    ```

2.  **Chargez-le dynamiquement** :
    - Modifiez `pages/index.tsx` :

    ```tsx
    import Image from 'next/image';
    import dynamic from 'next/dynamic';
    import { useState } from 'react';

    // Chargement dynamique du composant
    const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
      loading: () => <p>Chargement...</p>,
    });

    export default function Home() {
      const [showHeavy, setShowHeavy] = useState(false);

      return (
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Ma Boutique Next.js</h1>
          <Image 
            src="/banniere.jpg" 
            alt="Bannière de la boutique" 
            width={800} 
            height={400}
            priority
            style={{ borderRadius: '10px' }}
          />
          <p style={{ marginTop: '20px' }}>Bienvenue dans notre boutique en ligne !</p>
          
          <button 
            onClick={() => setShowHeavy(true)}
            style={{ padding: '10px 20px', marginTop: '20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Charger le composant lourd
          </button>
          
          {showHeavy && <HeavyComponent />}
        </main>
      );
    }
    ```

3.  **Testez** :
    - Ouvrez Network → Cliquez sur le bouton.
    - Vous verrez un nouveau fichier JavaScript se charger **uniquement au moment du clic** (`_pages-dir-browser_components_HeavyComponent_tsx.js` ou similaire) !

**Ce que cela signifie :** Le composant `HeavyComponent` n'est pas inclus dans le chargement initial de la page. Il n'est téléchargé que si l'utilisateur clique sur le bouton. Si personne ne clique, le code n'est jamais téléchargé : économie de bande passante !

**Point clé** : Next.js optimise automatiquement le chargement pour que vos pages restent rapides !

---

## Partie 6 : L'Aspect Back-end avec les API Routes

Next.js n'est pas qu'un framework front-end ! Vous pouvez créer des **API REST** directement dans votre projet avec les **API Routes**. Elles se trouvent dans le dossier `pages/api/`.

### Créer une API simple

1.  **Créez votre première API** :
    - Dans `pages/api/`, créez `hello.ts` :

    ```tsx
    import type { NextApiRequest, NextApiResponse } from 'next';

    export default function handler(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).json({ message: 'Bonjour depuis l\'API !' });
    }
    ```

2.  **Testez l'API** :
    - Allez sur [http://localhost:3000/api/hello](http://localhost:3000/api/hello).
    - Vous voyez une réponse JSON : `{"message": "Bonjour depuis l'API !"}`

### Créer une API de Produits

1.  **Créez une API pour lister les produits** :
    - Créez `pages/api/products.ts` :

    ```tsx
    import type { NextApiRequest, NextApiResponse } from 'next';

    const products = [
      { id: 1, name: 'Ordinateur Portable', price: 899, description: 'Puissant et léger' },
      { id: 2, name: 'Souris Sans Fil', price: 29, description: 'Ergonomique et précise' },
      { id: 3, name: 'Clavier Mécanique', price: 119, description: 'RGB personnalisable' },
    ];

    export default function handler(req: NextApiRequest, res: NextApiResponse) {
      if (req.method === 'GET') {
        res.status(200).json(products);
      } else {
        res.status(405).json({ error: 'Méthode non autorisée' });
      }
    }
    ```

2.  **Testez** :
    - Allez sur [http://localhost:3000/api/products](http://localhost:3000/api/products).
    - Vous voyez la liste des produits en JSON !

### Utiliser l'API dans une Page

1.  **Modifiez la page produits pour consommer l'API** :
    - Remplacez le contenu de `pages/products.tsx` :

    ```tsx
    import { useState, useEffect } from 'react';

    interface Product {
      id: number;
      name: string;
      price: number;
      description: string;
    }

    export default function Products() {
      const [products, setProducts] = useState<Product[]>([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Appel à notre API
        fetch('/api/products')
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            setLoading(false);
          });
      }, []);

      if (loading) {
        return <div style={{ padding: '20px' }}>Chargement...</div>;
      }

      return (
        <div style={{ padding: '20px' }}>
          <h1>Nos Produits</h1>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px', borderRadius: '8px' }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ fontWeight: 'bold', color: '#0070f3' }}>{product.price} €</p>
            </div>
          ))}
        </div>
      );
    }
    ```

2.  **Testez** :
    - Allez sur [http://localhost:3000/products](http://localhost:3000/products).
    - Les produits sont maintenant chargés depuis votre API !

**Point clé** : Avec Next.js, vous pouvez créer le front-end ET le back-end dans le même projet !

---

## Conclusion

**Bravo !** Vous avez terminé ce TP d'introduction à Next.js !

### Ce que vous avez appris :
- Initialiser un projet Next.js avec `create-next-app`  
- Comprendre le routage basé sur les fichiers (`pages/`)  
- **Optimiser les images** avec le composant `next/image` pour un chargement ultra-rapide  
- Maîtriser les **types de rendu** (CSR, SSG, SSR) pour adapter les performances  
- Comprendre le **découpage automatique du code** pour des pages qui chargent rapidement  
- Créer des **API REST** directement dans Next.js avec les API Routes  
- Connecter le front-end au back-end dans un seul et même projet  


Next.js est un framework puissant pour créer des applications React modernes et performantes. Il combine le meilleur du front-end et du back-end en un seul outil ! Continuez à explorer et à construire ! 