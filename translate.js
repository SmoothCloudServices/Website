var translations = {
  'en': {
    imageName: "england",
    pageTitle: 'Welcome to SmoothCloudService!',
    wartungsText: 'This Site is currently in maintenance. Please try again later!'
  },
  'de': {
    imageName: "german",
    pageTitle: 'Willkommen bei SmoothCloudService!',
    wartungsText: 'Diese Seite steht gerade unter Wartungsarbeiten. Bitte versuche es später erneut!'
  },
  'fr': {
    imageName: "france",
    pageTitle: 'Bienvenue sur SmoothCloudService!',
    wartungsText: 'Ce site est actuellement en maintenance. Veuillez réessayer plus tard !'
  },
  'es': {
    imageName: "spain",
    pageTitle: '¡Bienvenido a SmoothCloudService!',
    wartungsText: 'Este sitio está actualmente en mantenimiento. Vuelva a intentarlo más tarde.'
  }
};

function changeLanguage(language) {
  let currentLanguage = document.getElementById('current-language');
  let pageTitle = document.getElementById('pageTitle');
  let wartungsText = document.getElementById('wartungsText');

  if (translations[language] != null) {
    currentLanguage.src = "data/" + translations[language].imageName + ".png";
    pageTitle.textContent = translations[language].pageTitle;
    wartungsText.textContent = translations[language].wartungsText;
  }
}