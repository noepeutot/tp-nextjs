# Installation et Configuration

## 📦 Étape 1 : Installation des dépendances

Avant de démarrer le serveur de développement, vous devez installer les packages nécessaires pour afficher le sujet en Markdown :

```bash
cd tp-nextjs
npm install react-markdown remark-gfm rehype-highlight highlight.js
```

### Packages installés :
- **react-markdown** : Pour convertir le Markdown en composants React
- **remark-gfm** : Pour supporter les tableaux et autres extensions GitHub Flavored Markdown
- **rehype-highlight** : Pour la coloration syntaxique du code
- **highlight.js** : Bibliothèque de coloration syntaxique

## 🚀 Étape 2 : Démarrer le serveur de développement

Une fois les dépendances installées, lancez le serveur :

```bash
npm run dev
```

Le site sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

## 📄 Pages disponibles

1. **Page d'accueil** : [http://localhost:3000](http://localhost:3000)
   - Page d'accueil avec un lien vers le sujet du TP

2. **Page du sujet** : [http://localhost:3000/sujet](http://localhost:3000/sujet)
   - Affiche le contenu complet du fichier `sujet.md` avec un rendu élégant
   - Inclut la coloration syntaxique pour les blocs de code
   - Support des tableaux et autres éléments Markdown

## ✨ Fonctionnalités

- ✅ Rendu Markdown avec styles personnalisés
- ✅ Coloration syntaxique des blocs de code
- ✅ Support des tableaux (GitHub Flavored Markdown)
- ✅ Design responsive et moderne
- ✅ Navigation facile entre les pages
- ✅ Animations de chargement

## 🎨 Personnalisation

Si vous souhaitez personnaliser l'apparence du sujet, vous pouvez modifier :
- `styles/markdown.css` : Styles CSS pour le contenu Markdown
- `pages/sujet.tsx` : Composant React de la page du sujet

## 📝 Modifier le contenu du sujet

Le contenu du sujet provient du fichier `public/sujet.md`. Pour le modifier :
1. Éditez le fichier source `sujet.md` à la racine du projet
2. Recopiez-le dans `public/sujet.md`
3. Le site se rechargera automatiquement et affichera les modifications

## 🔧 Commandes utiles

```bash
# Démarrer en mode développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en mode production
npm start

# Vérifier les erreurs de linting
npm run lint
```

## 🐛 Dépannage

Si vous rencontrez des erreurs :

1. **Erreur "Cannot find module 'react-markdown'"** :
   - Assurez-vous d'avoir exécuté `npm install`

2. **Le sujet ne s'affiche pas** :
   - Vérifiez que le fichier `public/sujet.md` existe
   - Regardez la console du navigateur (F12) pour voir les erreurs

3. **Les styles ne s'appliquent pas** :
   - Effacez le cache du navigateur (Ctrl+Shift+R)
   - Redémarrez le serveur de développement

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation React Markdown](https://github.com/remarkjs/react-markdown)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

