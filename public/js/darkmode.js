// Script pour gérer le dark mode avec style minimaliste
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Vérifie si un thème est stocké dans localStorage
    const currentTheme = localStorage.getItem('theme');
    
    // Si un thème est stocké, l'appliquer
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      updateThemeIcon(true);
    }
    
    // Fonction pour mettre à jour l'icône
    function updateThemeIcon(isDark) {
      if (isDark) {
        themeIcon.className = 'fa-solid fa-sun';
        themeIcon.style.color = '#ffcc00';
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeIcon.style.color = '#000000';
      }
    }
    
    // Ajouter l'événement click sur le bouton de toggle
    themeToggle.addEventListener('click', () => {
      // Toggle de la classe dark-mode sur le body
      const isDarkMode = document.body.classList.toggle('dark-mode');
      
      // Mettre à jour l'icône
      updateThemeIcon(isDarkMode);
      
      // Sauvegarder la préférence dans localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    // Vérifier également la préférence système
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Si l'utilisateur n'a pas déjà défini une préférence, utiliser celle du système
    if (!localStorage.getItem('theme')) {
      if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
      }
    }
    
    // Écouter les changements de préférence système
    prefersDarkScheme.addEventListener('change', (e) => {
      // Seulement si l'utilisateur n'a pas défini de préférence manuelle
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.body.classList.add('dark-mode');
          updateThemeIcon(true);
        } else {
          document.body.classList.remove('dark-mode');
          updateThemeIcon(false);
        }
      }
    });
  });