# Guide des Couleurs Argentées - IA Center

## 🎨 Couleurs Disponibles

Le site utilise maintenant les couleurs argentées du logo IA Center. Voici les classes disponibles :

### Arrière-plans
- `.bg-silver-light` - Argent très clair (95% de luminosité)
- `.bg-silver-medium` - Argent moyen (85% de luminosité)  
- `.bg-silver-dark` - Argent foncé (75% de luminosité)
- `.bg-silver-accent` - Argent accent (90% de luminosité)

### Textes
- `.text-silver-light`
- `.text-silver-medium`
- `.text-silver-dark`
- `.text-silver-accent`

### Bordures
- `.border-silver-light`
- `.border-silver-medium`
- `.border-silver-dark`
- `.border-silver-accent`

## 🔧 Comment Désactiver

### Option 1 : Supprimer les variables CSS
Dans `src/index.css`, supprimez les lignes :
```css
/* Couleurs argentées du logo - à activer/désactiver facilement */
--silver-light: 0 0% 95%;
--silver-medium: 0 0% 85%;
--silver-dark: 0 0% 75%;
--silver-accent: 0 0% 90%;
```

### Option 2 : Supprimer les classes utilitaires
Dans `src/index.css`, supprimez toute la section :
```css
/* Classes argentées - à utiliser pour ajouter la couleur du logo */
.bg-silver-light { ... }
.bg-silver-medium { ... }
/* etc... */
```

### Option 3 : Remplacer par les couleurs originales
Remplacez les classes argentées par les couleurs d'origine :
- `bg-silver-light` → `bg-white`
- `bg-silver-accent` → `bg-secondary`
- `text-silver-dark` → `text-primary`
- `border-silver-medium` → `border-border`

## 📍 Éléments Actuellement Modifiés

1. **Navbar** : Fond argenté clair avec bordure argentée
2. **Page Formations** : 
   - Icône en argent foncé
   - Carte "Formations Particuliers" avec fond argenté
   - Bordures argentées sur les cartes

## 💡 Suggestions d'Utilisation

Vous pouvez ajouter la couleur argentée à :
- Les boutons d'action
- Les cartes de produits
- Les sections d'accent
- Les icônes décoratives
- Les bordures de conteneurs

Exemple : `className="bg-silver-accent border border-silver-medium"` 