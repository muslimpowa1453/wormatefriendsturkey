// This is the script that will be loaded to present the user with a choice.

(function () {
  // Check if a script has already been selected and stored in localStorage
  var scriptSeleccionado = localStorage.getItem('scriptSeleccionado');
  var popupShown = localStorage.getItem('popupShown');

  // If no script has been selected, create the menu
  if (!scriptSeleccionado) {
    // Hide the game's default content
    document.documentElement.style.overflow = 'hidden';
    document.body.innerHTML = '';

    // Create the background element
    var bg = document.createElement('div');
    bg.style.position = 'fixed';
    bg.style.top = '0';
    bg.style.left = '0';
    bg.style.width = '100vw';
    bg.style.height = '100vh';
    bg.style.zIndex = '-1000';
    // Using a placeholder image for demonstration
    bg.style.backgroundImage = "url('https://placehold.co/1920x1080/000/fff?text=WORMATE+FRIENDS')";
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center center';
    bg.style.backgroundRepeat = 'no-repeat';
    document.body.appendChild(bg);

    // Function to load the selected script and reload the page
    function cargarScript(url) {
      localStorage.setItem('scriptSeleccionado', url);
      console.log('Script selected and will be loaded on reload:', url); // Debugging message
      location.reload();
    }

    // Function to create the menu UI
    function crearMenu() {
      var container = document.createElement('div');
      container.id = 'container';
      container.innerHTML = `
        <style>
          /* Basic styling for the menu to make it look decent */
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
          #container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
            color: white;
            padding: 20px;
          }
          .logo {
            width: 100%;
            max-width: 400px;
            margin-bottom: 30px;
          }
          #menu {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .menu-button {
            background-color: rgba(0, 0, 0, 0.5);
            border: 2px solid #00ffff;
            padding: 15px 30px;
            border-radius: 10px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          }
          .menu-button:hover {
            background-color: #00ffff;
            color: black;
            box-shadow: 0 0 20px #00ffff;
          }
          #popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          #popupContent {
            background: #1a1a1a;
            border: 2px solid #00ffff;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            max-width: 500px;
          }
          #popupContent h1 {
            margin: 0 0 12px 0;
            font-size: 34px;
            letter-spacing: 2px;
            font-weight: 900;
            text-shadow: 0 0 10px #00ffff;
          }
          #popupContent p {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 1.3;
          }
          #closePopup {
            padding: 12px 30px;
            border: none;
            border-radius: 30px;
            background: #00d1ff;
            color: black;
            font-weight: 800;
            font-size: 18px;
            cursor: pointer;
            box-shadow: 0 0 25px #00d1ff;
            transition: background 0.3s ease;
            user-select: none;
          }
          #closePopup:hover {
            background: #00a7cc;
            color: white;
          }
        </style>
        <img src="https://wormate.io/images/linelogo-valday2025.png" class="logo" alt="Logo" />
        <div id="announcement" aria-live="polite" aria-atomic="true">
          <h2>Announcements</h2>
          <div id="announcement-text">
            <span>Server Selection is active.</span>
            <span>You can switch between servers by pressing the buttons below.</span>
          </div>
        </div>
        <div id="menu">
          <button class="menu-button" id="opcion1">OLD SERVER</button>
          <button class="menu-button" id="opcion2">NEW SERVER</button>
          <button class="menu-button" id="opcion3">LATEST SERVER</button>
        </div>
      `;
      document.body.appendChild(container);

      // Add event listeners for the buttons
      document.getElementById('opcion1').addEventListener('click', function () {
        cargarScript('https://wormx.store/js/old1game.js');
      });
      document.getElementById('opcion2').addEventListener('click', function () {
        cargarScript('https://wormturkio.com/new/game2.php');
      });
      document.getElementById('opcion3').addEventListener('click', function () {
        cargarScript('https://wormturkio.com/new/game3.php');
      });
    }

    crearMenu();

  } else {
    // If a script has been selected, load it
    var script = document.createElement('script');
    script.src = scriptSeleccionado;
    document.head.appendChild(script);

    // If the popup has not been shown, show it once
    if (!popupShown) {
      document.documentElement.style.overflow = 'hidden';

      var popup = document.createElement('div');
      popup.id = 'popup';
      popup.innerHTML = `
        <div id="popupContent">
          <h1>Welcome to Wormate Friends Turkey!</h1>
          <p>You have selected a game server. To change your server, you need to clear your browser's local storage for this site.</p>
          <button id="closePopup">I Understand</button>
        </div>
      `;
      document.body.appendChild(popup);

      // Add event listener to close the popup and set localStorage flag
      document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.documentElement.style.overflow = '';
        localStorage.setItem('popupShown', 'true');
      });
    }
  }
})();
