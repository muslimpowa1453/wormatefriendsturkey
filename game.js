var GoogleAuth;
var zE;
window.sectorSystem = {
  'settings': {
    'lineWidth': 0.15,
    'lineColor': 0xff0000,
    'lineAlpha': 0.3,
    'backgroundColor': 0x0,
    'backgroundAlpha': 0.6,
    'sectorTextStyle': {
      'fontFamily': 'Arial',
      'fontSize': 0xe,
      'fill': 0xffffff
    },
    'quarterTextStyle': {
      'fontFamily': 'Arial',
      'fontSize': 0x14,
      'fill': 0xffffff
    },
    'showLines': true
  },
  'state': {
    'container': null,
    'graphics': null,
    'isActive': false,
    'currentMode': null,
    'texts': [],
    'initialized': false,
    'renderContainer': null,
    'restored': false
  },
  'findRenderContainer': function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.["parent"]) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.['Mh']?.['Lh']?.['Wf']) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const _0x2c33c0 = (_0x168a32, _0x29d191 = new Set(), _0x558473 = 0x0) => {
      if (!_0x168a32 || typeof _0x168a32 !== "object" || _0x558473 > 0x3 || _0x29d191.has(_0x168a32)) {
        return null;
      }
      _0x29d191.add(_0x168a32);
      if (_0x168a32.Wf instanceof PIXI.Container) {
        this.state.renderContainer = _0x168a32.Wf;
        return _0x168a32.Wf;
      }
      for (let _0x3e6bf8 in _0x168a32) {
        if (_0x3e6bf8 !== "parent" && _0x3e6bf8 !== "children" && _0x168a32[_0x3e6bf8] && typeof _0x168a32[_0x3e6bf8] === "object") {
          const _0x5b040c = _0x2c33c0(_0x168a32[_0x3e6bf8], _0x29d191, _0x558473 + 0x1);
          if (_0x5b040c) {
            return _0x5b040c;
          }
        }
      }
      return null;
    };
    return _0x2c33c0(window.ooo);
  },
  'cachedRadius': 0x0,
  'lastRadiusTime': 0x0,
  'getRadius': function () {
    const _0x2cda13 = Date.now();
    if (_0x2cda13 - this.lastRadiusTime > 0x3e8) {
      this.cachedRadius = window.ooo?.['Mh']?.['Qh']?.['gh'] || window.ooo?.['Mh']?.['Lh']?.['Qh']?.['gh'] || 0x1f4;
      this.lastRadiusTime = _0x2cda13;
    }
    return this.cachedRadius;
  },
  'clearTexts': function () {
    this.state.texts.forEach(_0x5cba5a => {
      if (_0x5cba5a && _0x5cba5a.parent) {
        _0x5cba5a.parent.removeChild(_0x5cba5a);
      }
    });
    this.state.texts = [];
  },
  'initDrawing': function (_0x20f237) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0x0, 0x0, _0x20f237);
    this.state.graphics.endFill();
    return _0x20f237;
  },
  'drawSectors': function () {
    const _0x5a4a0a = this.initDrawing(this.getRadius());
    const _0x475cbc = _0x5a4a0a / 0x3;
    if (this.settings.showLines) {
      for (let _0x177137 = 0x1; _0x177137 < 0x3; _0x177137++) {
        this.state.graphics.drawCircle(0x0, 0x0, _0x5a4a0a - _0x177137 * _0x475cbc);
      }
      for (let _0x2bca52 = 0x0; _0x2bca52 < 0x4; _0x2bca52++) {
        const _0x3cc414 = _0x2bca52 * Math.PI / 0x2;
        this.state.graphics.moveTo(0x0, 0x0);
        this.state.graphics.lineTo(Math.cos(_0x3cc414) * _0x5a4a0a, Math.sin(_0x3cc414) * _0x5a4a0a);
      }
    }
    for (let _0x19980b = 0x0; _0x19980b < 0x4; _0x19980b++) {
      const _0x166d2b = _0x19980b * Math.PI / 0x2;
      for (let _0x451a67 = 0x0; _0x451a67 < 0x3; _0x451a67++) {
        const _0x3a0d82 = _0x5a4a0a - (_0x451a67 * _0x475cbc + _0x475cbc / 0x2);
        const _0x3e2809 = _0x166d2b + Math.PI / 0x4;
        const _0x31e398 = ['S', 'D', 'F'][_0x451a67] + (_0x19980b + 0x1);
        const _0x3e8f38 = new PIXI.Text(_0x31e398, this.settings.sectorTextStyle);
        _0x3e8f38.anchor.set(0.5);
        _0x3e8f38.position.set(Math.cos(_0x3e2809) * _0x3a0d82, Math.sin(_0x3e2809) * _0x3a0d82);
        this.state.container.addChild(_0x3e8f38);
        this.state.texts.push(_0x3e8f38);
      }
    }
  },
  'drawQuarters': function () {
    const _0x171c50 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x171c50, 0x0);
      this.state.graphics.lineTo(_0x171c50, 0x0);
      this.state.graphics.moveTo(0x0, -_0x171c50);
      this.state.graphics.lineTo(0x0, _0x171c50);
    }
    [{
      'n': "WFT 1",
      'x': 0x1,
      'y': -0x1
    }, {
      'n': "WFT 2",
      'x': -0x1,
      'y': -0x1
    }, {
      'n': "WFT 3",
      'x': -0x1,
      'y': 0x1
    }, {
      'n': "WFT 4",
      'x': 0x1,
      'y': 0x1
    }].forEach(_0x3ac324 => {
      const _0xc3ed0f = new PIXI.Text(_0x3ac324.n, this.settings.quarterTextStyle);
      _0xc3ed0f.anchor.set(0.5);
      _0xc3ed0f.position.set(_0x3ac324.x * _0x171c50 / 0x3, _0x3ac324.y * _0x171c50 / 0x3);
      this.state.container.addChild(_0xc3ed0f);
      this.state.texts.push(_0xc3ed0f);
    });
  },
  'initGraphics': function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x606e79 = this.findRenderContainer();
    if (!_0x606e79) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    _0x606e79.addChild(this.state.container);
    this.state.container.zIndex = 0xa;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  'toggleMode': function (_0x3dadc0) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x3dadc0) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById('sector_system_toggle').checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x3dadc0;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (_0x3dadc0 === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  'setupKeyboardEvents': function () {
    const _0x3669a1 = {
      0x53: () => this.toggleMode("sectors"),
      0xbb: () => this.toggleMode("sectors"),
      0x3d: () => this.toggleMode("sectors"),
      0x58: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", _0x319d03 => {
      const _0x32830a = _0x319d03.keyCode || _0x319d03.which;
      if (_0x3669a1[_0x32830a]) {
        _0x3669a1[_0x32830a]();
        if (typeof this.initUserInterface === 'function') {
          this.initUserInterface();
        }
      }
    });
  },
  'saveSettings': function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? '1' : '0');
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
      console.log("Saved sector system state:", {
        'active': this.state.isActive,
        'mode': this.state.currentMode
      });
    } catch (_0x23fc28) {
      console.error("Error saving sector system settings:", _0x23fc28);
    }
  },
  'loadSettings': function () {
    try {
      const _0x5ae558 = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (_0x5ae558) {
        this.settings = {
          ...this.settings,
          ..._0x5ae558
        };
      }
      const _0x2f0a37 = localStorage.getItem('sectorSystemActive') === '1';
      let _0x57c9e3 = localStorage.getItem("sectorSystemMode");
      if (!_0x57c9e3) {
        _0x57c9e3 = "sectors";
      }
      this.savedState = {
        'isActive': _0x2f0a37,
        'currentMode': _0x57c9e3
      };
    } catch (_0xcee951) {
      console.error("Error loading sector system settings:", _0xcee951);
    }
  },
  'applySettings': function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === 'sectors') {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  'init': function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 0x3e8);
      return;
    }
    this.loadSettings();
    const _0x3ae8d2 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!_0x3ae8d2) {
      setTimeout(() => this.init(), 0x3e8);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById('sector_system_toggle').checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0x0) {
          this.initUserInterface();
        }
      }
    }, 0x3e8);
  },
  'initUserInterface': function () {
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      console.log("Restoring state from UI initialization");
      this.toggleMode(this.savedState.currentMode || 'sectors');
      this.state.restored = true;
    }
    const _0x5d768e = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $('#sector_display_mode').val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val('#' + this.settings.backgroundColor.toString(0x10).padStart(0x6, '0'));
      $("#sector_line_color").val('#' + this.settings.lineColor.toString(0x10).padStart(0x6, '0'));
      $('#sector_bg_opacity').val(this.settings.backgroundAlpha * 0x64);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 0x64) + '%');
      $("#sector_line_opacity").val(this.settings.lineAlpha * 0x64);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 0x64) + '%');
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(0xc8);
      } else {
        $("#sector_lines_options").slideDown(0xc8);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(0x12c);
      } else {
        $('#sector_settings_panel').slideUp(0xc8);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const _0x1f6692 = $(this).prop("checked");
      if (_0x1f6692) {
        const _0x2bf4c8 = $('#sector_display_mode').val() || "sectors";
        window.sectorSystem.toggleMode(_0x2bf4c8);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      _0x5d768e();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const _0x3f8a4d = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(_0x3f8a4d);
        _0x5d768e();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = parseInt($(this).val().replace('#', ''), 0x10);
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off('change').on("change", function () {
      window.sectorSystem.settings.lineColor = parseInt($(this).val().replace('#', ''), 0x10);
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const _0x33c7b6 = parseInt($(this).val()) / 0x64;
      window.sectorSystem.settings.backgroundAlpha = _0x33c7b6;
      $("#sector_bg_opacity_value").text(Math.round(_0x33c7b6 * 0x64) + '%');
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const _0x222476 = parseInt($(this).val()) / 0x64;
      window.sectorSystem.settings.lineAlpha = _0x222476;
      $('#sector_line_opacity_value').text(Math.round(_0x222476 * 0x64) + '%');
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off('change').on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(0xc8);
      } else {
        $("#sector_lines_options").slideDown(0xc8);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    _0x5d768e();
  }
};
var StoreSkinID;
$(document).ready(function () {
  if ($(".store-view-cont").length) {
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    StoreSkinID = $("#idReplaceSkin");
  }
});
var myGameSettings = {
  'unlimitedRespawn': false,
  'respawnDelay': 0x32
};
window.laserOptions = {
  'enabled': false,
  'color': 0xffd700,
  'opacity': 0.5,
  'thickness': 0.1
};
window.laserGraphics = null;
const ctx = {
  'fontStyle': {
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FF0000",
      'fontSize': 0xe,
      'fontWeight': "bold",
      'lineJoin': 'round',
      'stroke': "#FFFFFF",
      'strokeThickness': 1.5,
      'whiteSpace': 'normal',
      'wordWrap': true
    })
  }
};
ctx.pointsContainer = new PIXI.Container();
let lastKnownCoords = {
  'x': null,
  'y': null
};
let blinkTimerId = null;
let removeMarkTimerId = null;
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === 'undefined') {
    return;
  }
  lastKnownCoords.x = window.coords.playerX;
  lastKnownCoords.y = window.coords.playerY;
  if (!ctx.m_2) {
    ctx.m_2 = new PIXI.Text('X', ctx.fontStyle.blanco);
    ctx.m_2.zIndex = 0x2;
    ctx.m_2.alpha = 0.9;
    ctx.m_2.anchor.set(0.5, 0.5);
    if (ctx.pointsContainer) {
      ctx.pointsContainer.sortableChildren = true;
      ctx.pointsContainer.zIndex = 0x2;
    }
    if (!blinkTimerId) {
      let _0x449c4b = true;
      blinkTimerId = setInterval(() => {
        if (ctx.m_2) {
          _0x449c4b = !_0x449c4b;
          ctx.m_2.visible = _0x449c4b;
        } else {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
      }, 0x1f4);
    }
    if (!removeMarkTimerId) {
      removeMarkTimerId = setTimeout(() => {
        if (ctx.m_2) {
          if (ctx.pointsContainer && ctx.pointsContainer.children.includes(ctx.m_2)) {
            ctx.pointsContainer.removeChild(ctx.m_2);
          }
          ctx.m_2 = null;
        }
        if (blinkTimerId) {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
        removeMarkTimerId = null;
      }, 0x4e20);
    }
  }
  if (ctx.m_2) {
    ctx.m_2.x = window.coords.playerX;
    ctx.m_2.y = window.coords.playerY;
    if (ctx.pointsContainer && !ctx.pointsContainer.children.includes(ctx.m_2)) {
      ctx.pointsContainer.addChild(ctx.m_2);
    }
  }
  if (window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh) {
    ooo.Xg.Kf.Wg.Ah.Sh.zIndex = 0x270f;
    if (ooo.Xg.Kf.Wg.Ah.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.Ah.sortableChildren = true;
    }
    if (ooo.Xg.Kf.Wg.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.sortableChildren = true;
    }
  }
};
function _typeof(_0x19d1e9) {
  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x178fa2) {
    return typeof _0x178fa2;
  } : function (_0x35fb28) {
    return _0x35fb28 && typeof Symbol == "function" && _0x35fb28.constructor === Symbol && _0x35fb28 !== Symbol.prototype ? 'symbol' : typeof _0x35fb28;
  })(_0x19d1e9);
}
(function () {
  var _0xa914b4 = {};
  var _0x30354b = {};
  var _0x1a7a89 = {};
  var _0x51599b = {};
  _0x1a7a89.a = function (_0xf1c4c5) {
    var _0x27b260 = new String();
    var _0x34eb01 = parseInt(_0xf1c4c5.substring(0x0, 0x2), 0x10);
    for (var _0x1ba7bb = 0x2; _0x1ba7bb < _0xf1c4c5.length; _0x1ba7bb += 0x2) {
      var _0x533a22 = parseInt(_0xf1c4c5.substring(_0x1ba7bb, _0x1ba7bb + 0x2), 0x10);
      _0x27b260 += String.fromCharCode(_0x533a22 ^ (_0x34eb01 = 0xed1 + _0x34eb01 * 0x11a1 & 0xff));
    }
    ;
    return _0x27b260;
  };
  _0x1a7a89.b = function (_0x1b3e79) {
    return Function("return " + _0x1b3e79 + "; ")();
  };
  _0xa914b4.c = _0x1a7a89.b('window');
  _0xa914b4.d = _0xa914b4.c.document;
  _0x1a7a89.e = function () {
    return _0xa914b4.c.devicePixelRatio || 0x1;
  };
  _0xa914b4.c.addEventListener("load", function () {
    let _0x5a0b1f = {
      'eie': null,
      'joystick': {
        'positionMode': 'L',
        'checked': true,
        'size': 0x5a,
        'mode': 'dynamic',
        'position': {
          'left': "110px",
          'bottom': "110px"
        },
        'color': "red",
        'pxy': 0x6e
      },
      'on': false,
      'vj': null,
      'uj': null,
      'm': null,
      'n': null
    };
    var _0x497d4e = {
      'id_user': '',
      'nickname': "WFT",
      'enemyNameHs': "No Name Player",
      'teamCode': '',
      'playerX': 0x0,
      'playerY': 0x0,
      'hs': 0x0,
      'kill': 0x0,
      'message': '',
      'teamColor': localStorage.getItem("teamColor") || "0xffffff",
      'wssServer': ''
    };
    let _0x231839;
    const _0x10ead6 = {
      'players': new Map()
    };
    function _0x2c73ad() {
      if (_0x231839 && _0x231839.readyState !== WebSocket.CLOSED) {
        debugLog("Eski baÄŸlantÄ± kapatÄ±lÄ±yor...");
        _0x231839.close();
      }
      _0x231839 = new WebSocket("wss://wormmedia.xyz:9800");
      _0x231839.addEventListener('open', () => {
        _0xccce75 = true;
        debugLog("âœ… WebSocket baÄŸlÄ±");
      });
      _0x231839.addEventListener("close", () => {
        _0xccce75 = false;
        debugLog("âŒ WebSocket baÄŸlantÄ±sÄ± kesildi. Tekrar baÄŸlanÄ±lacak...");
        _0x57bb74();
      });
      _0x231839.addEventListener("message", async _0x2271ae => {
        try {
          const _0x533f5b = _0x2271ae.data instanceof Blob ? JSON.parse(await _0x2271ae.data.text()) : JSON.parse(_0x2271ae.data);
          if (_0x533f5b.type === "hsKillUpdate") {
            _0x10ead6.players.set(_0x533f5b.id_user, {
              'nickname': _0x533f5b.nickname,
              'hskill': _0x533f5b.hskill,
              'teamColor': _0x533f5b.teamColor || 0xffffff
            });
            updateTop8Hs();
          }
          _0x2ab496(_0x533f5b);
        } catch (_0x3945dc) {
          console.error("Mesaj iÅŸleme hatasÄ±:", _0x3945dc);
        }
      });
    }
    let _0xccce75 = false;
    function _0x57bb74() {
      if (!_0xccce75) {
        setTimeout(() => {
          _0x2c73ad();
        }, 0x1388);
      }
    }
    _0x2c73ad();
    window.addEventListener("beforeunload", () => {
      if (_0x231839 && _0x231839.readyState === WebSocket.OPEN) {
        _0x231839.close();
      }
    });
    function _0x2ab496(_0x5b382e) {
      if (_0x5b382e.id_user === "gg_116823912010482082044") {
        createServerMessage("[By YÄ±Ldo OWNER]", _0x5b382e.message);
        debugLog("Servidor " + _0x5b382e.id_user + " ha enviado un mensaje: " + _0x5b382e.message);
      }
      if (_0x5b382e.wssServer !== '') {
        return;
      }
      switch (_0x5b382e.type) {
        case "initialState":
          _0x485017(_0x5b382e.players);
          break;
        case "playerUpdate":
          _0x56c1e9(_0x5b382e);
          break;
        case 'hsKillUpdate':
          _0x5d85e5(_0x5b382e);
          break;
        case "playerDeath":
          _0x5e69d9(_0x5b382e);
          break;
        case "playerDisconnect":
          _0x174c88(_0x5b382e.id);
          break;
        default:
          debugLog("Mensaje desconocido:", _0x5b382e);
      }
    }
    function _0x485017(_0x3e092e) {
      _0x3e092e.forEach(_0x560e9b => _0x10ead6.players.set(_0x560e9b.id_user, _0x560e9b));
      debugLog("Estado inicial recibido:", _0x3e092e);
    }
    function _0x56c1e9(_0x5216e7) {
      _0x10ead6.players.set(_0x5216e7.id_user, {
        ..._0x5216e7
      });
      updateTop8Hs();
      if (_0x5216e7.teamCode === '') {
        createTeamUbication(_0x5216e7.teamCode, _0x5216e7.teamColor);
        createTeamMessage(_0x5216e7.teamCode, _0x5216e7.nickname, _0x5216e7.message);
      }
    }
    function _0x5d85e5(_0x50b88c) {
      debugLog("ðŸŽ¯ HS GÃ¼ncelleme: " + _0x50b88c.nickname);
      const _0x426f3c = _0x10ead6.players.get(_0x50b88c.id_user);
      if (_0x426f3c) {
        _0x426f3c.hskill.hs += _0x50b88c.hskill.hs;
        _0x426f3c.hskill.kill += _0x50b88c.hskill.kill;
      } else {
        _0x10ead6.players.set(_0x50b88c.id_user, {
          ..._0x50b88c,
          'hskill': {
            ..._0x50b88c.hskill
          },
          'position': {
            'x': 0x0,
            'y': 0x0
          }
        });
      }
      const _0x79bec6 = _0x10ead6.players.get(_0x50b88c.id_user);
      debugLog("ðŸ§  Player state:", _0x79bec6);
      updateTop8Hs();
    }
    function _0x5e69d9(_0x4cd803) {
      _0x10ead6.players['delete'](_0x4cd803.id_user);
      debugLog("El jugador " + _0x4cd803.nickname + " ha muerto.");
      updateTop8Hs();
      clearTeamUbication();
    }
    function _0x174c88(_0x1ac2f6) {
      _0x10ead6.players["delete"](_0x1ac2f6);
      debugLog("Jugador " + _0x1ac2f6 + " desconectado.");
    }
    function _0x45a360(_0x56373a, _0x489346 = {}) {
      if (!_0xccce75) {
        debugLog("WebSocket baÄŸlÄ± deÄŸil.");
        return;
      }
      if (_0x56373a === "playerUpdate" && (true || true)) {
        debugLog("ðŸ›‘ Pozisyon gÃ¼ncellemesi yapÄ±lmadÄ±: teamCode yok.");
        return;
      }
      const _0x995af6 = {
        'type': _0x56373a,
        'id_user': '',
        'nickname': "WFT",
        'enemyNameHs': "No Name Player",
        'hskill': {
          'hs': 0x0,
          'kill': 0x0
        },
        'position': {
          'x': 0x0,
          'y': 0x0
        },
        'message': '',
        'teamCode': '',
        'teamColor': _0x497d4e.teamColor,
        'wssServer': '',
        ..._0x489346
      };
      debugLog("ðŸ“¤ Veri gÃ¶nderiliyor:", _0x995af6);
      _0x231839.send(JSON.stringify(_0x995af6));
    }
    let _0xdd8a52 = [];
    function _0x3dca07() {
      if (_0xdd8a52.length > 0x0) {
        const _0x13a148 = _0xdd8a52.splice(0x0, 0xa);
        _0x45a360("playerUpdate", {
          'batch': _0x13a148
        });
      }
    }
    setInterval(() => {
      _0x3dca07();
    }, 0x64);
    var _0x46cc88;
    let _0x2e052d = {
      's_l': "https://wormx.store",
      'fullscreen': null,
      'headshot': 0x0,
      's_headshot': 0x0,
      'mobile': false,
      'mo': 0x1,
      'mo1': {
        'x': -0x1,
        'y': -0x1
      },
      'mo2': {
        'x': -0x1,
        'y': -0x1
      },
      's_kill': 0x0,
      'kill': 0x0,
      'died': 0x0,
      'saveGame': false,
      'forceUseLocalImages': false,
      'localStorageEnabled': true,
      'pm': {},
      'joystick': _0x5a0b1f.joystick,
      'j': null,
      'pk': 0x0,
      'pk0': '',
      'pk1': '',
      'pk2': '',
      'pk3': '',
      'pk4': '',
      'pk5': '',
      'pk6': '',
      'z': 0x1,
      'c_v': 0xde,
      'c_1': "WFT",
      'c_2': "TeamWFT",
      'c_3': "teamwft",
      'c_4': "wormate.io",
      'c_5': "please don't copy my code",
      'd_1': "VlZBPQ==",
      'd_2': "VkdWaGJWVlE=",
      'd_3': "ZDI5eWJYVnc=",
      'd_4': "VjI5eWJXRjBaUzVwYnc9PQ==",
      'd_5': 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09',
      'a': 0x0,
      'b': 0x0,
      'c': 0x0,
      'd': 0x0,
      'e': 0x0,
      'f': '',
      'g': 0x24,
      's_w': false,
      's_n': '',
      'v_z': 0x0,
      'h': false,
      'sn': true,
      's': false,
      'hz': false,
      'fz': true,
      'tt': false,
      'vh': false,
      'vp': false,
      'iq': false,
      'ctrl': false,
      'r1': true,
      'sc': 0x0,
      'wi': 0x0,
      'to': 0xa,
      'sm': 0x14,
      'pi': '',
      'pn': '',
      'se': {
        'a': [],
        'b': [],
        'c': [],
        'd': [],
        'e': [],
        'f': [],
        'g': [],
        'h': [],
        'i': [],
        'j': [],
        'k': []
      },
      'st': false,
      'hh': 0x0,
      'sh': [],
      'ws': [],
      'we': [],
      'wm': [],
      'wg': [],
      'wh': [],
      'sg': [],
      'gg': null,
      'ig': -0x1,
      'so': 0x1,
      're': false,
      'dg': null
    };
    let _0x305f14 = localStorage.getItem("SaveGamewft");
    if (_0x305f14 && _0x305f14 !== 'null') {
      let _0x398858 = JSON.parse(_0x305f14);
      for (let _0x1e4980 in _0x398858) {
        _0x2e052d[_0x1e4980] = _0x398858[_0x1e4980];
      }
    }
    ;
    if (!_0x2e052d.favoriteSkins) {
      _0x2e052d.favoriteSkins = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
    }
    if (_0x2e052d.currentFavSkinIndex === undefined) {
      _0x2e052d.currentFavSkinIndex = 0x0;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
    }
    if (!_0x2e052d.selectedHats) {
      _0x2e052d.selectedHats = [];
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
    }
    if (_0x2e052d.currentHatIndex === undefined) {
      _0x2e052d.currentHatIndex = 0x0;
      localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
    }
    if (!window.globalHatTextureCache) {
      window.globalHatTextureCache = {};
    }
    try {
      if (localStorage.SaveGameXT) {
        const _0x2b1fd3 = JSON.parse(localStorage.SaveGameXT);
        for (const _0x15933b in _0x2b1fd3) {
          if (wftObjects.hasOwnProperty(_0x15933b)) {
            wftObjects[_0x15933b] = _0x2b1fd3[_0x15933b];
          }
        }
      }
    } catch (_0x5046c3) {
      console.error("Error loading settings:", _0x5046c3);
    }
    ;
    function _0x42c68d() {
      try {
        if (typeof localStorage === "undefined") {
          console.error("Wormx Error 3");
          return false;
        }
        var _0x1600f7 = localStorage.getItem("wfti");
        var _0x316f55 = localStorage.getItem("wftit");
        return _0x1600f7 && _0x316f55 ? (typeof _0x2e052d !== "undefined" && (_0x2e052d.v_z = _0x316f55, _0x2e052d.forceUseLocalImages = true, localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d))), true) : (console.log("Wormx Error 2"), false);
      } catch (_0x580eaf) {
        console.error("Wormx Error 1", _0x580eaf);
        return false;
      }
    }
    _0x42c68d();
    let _0x16f9d2 = function () {
      let _0x316eb0 = false;
      _0x2e052d.mobile = false;
      var _0xf3b524 = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xf3b524) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0xf3b524.substr(0x0, 0x4))) {
        _0x316eb0 = true;
        _0x2e052d.mobile = true;
      }
      return _0x316eb0;
    };
    let _0x2a5224 = 0x1;
    Object.defineProperty(_0x2e052d, 'z', {
      'get': function () {
        return _0x2a5224;
      },
      'set': function (_0x428d88) {
        if (Math.abs(_0x428d88 - _0x2a5224) > 0.1) {
          console.log("Zoom changing from", _0x2a5224, 'to', _0x428d88);
          console.trace();
        }
        _0x2a5224 = _0x428d88;
      }
    });
    let _0x72bd5 = function (_0x56b41e) {
      _0x2e052d.joystick ||= _0x5a0b1f.joystick;
      _0x2e052d.joystick.position = {
        'left': (parseInt(_0x56b41e.value) + 0xa).toString() + 'px',
        'bottom': _0x56b41e.value + 'px'
      };
      if (_0x2e052d.joystick.positionMode === 'R') {
        _0x2e052d.joystick.position = {
          'right': (parseInt(_0x56b41e.value) + 0xa).toString() + 'px',
          'bottom': _0x56b41e.value + 'px'
        };
      }
      _0x2e052d.joystick.pxy = _0x56b41e.value;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
    };
    let _0x3f7fbd = function (_0x232f94) {
      _0x2e052d.joystick ||= _0x5a0b1f.joystick;
      _0x2e052d.joystick.size = _0x232f94.value;
      localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
    };
    let _0x58f6a0 = function (_0x5594cd, _0x4050e3, _0x2de47e, _0xcbee1c, _0x1b0944, _0x57b84e) {
      let _0x50d339 = {
        'a': '',
        'b': 0x0,
        'c': ''
      };
      if (_0x5594cd > 3700 || _0x5594cd < 360 || _0x5594cd === undefined) {
        _0x2e052d.a = _0x5594cd;
        if (_0x5594cd === undefined) {
          _0x2e052d.a = Math.floor(Math.random() * 4 + 32);
        }
        _0x50d339.a = '00';
      } else {
        _0x2e052d.a = _0x5594cd - 360;
        _0x50d339.b = 0x0;
        _0x2e052d.a = 0;
        _0x50d339.b = 1;
        _0x2e052d.a = 32;
        _0x50d339.a = 0x0.toString(0x24).padStart(0x2, 0x0);
      }
      if (_0x4050e3 > 720 || _0x4050e3 < 400 || _0x4050e3 === undefined) {
        if (_0x4050e3 > 720 && _0x4050e3 < 1080) {
          _0x2e052d.b = _0x4050e3 - 720;
          _0x50d339.a = '' + 0x0.toString(0x24);
          _0x2e052d.b = 0x0;
          _0x50d339.c = "1";
        } else {
          _0x2e052d.b = _0x4050e3;
          if (_0x4050e3 === undefined) {
            _0x2e052d.b = 0x0;
          }
          _0x50d339.a = "0";
          _0x50d339.c = "0";
        }
      } else {
        _0x2e052d.b = _0x4050e3 - 400 + 1;
        _0x50d339.a = '' + 0x0.toString(0x24);
        _0x2e052d.b = 0x0;
        _0x50d339.c = "0";
      }
      if (_0x2de47e > 720 || _0x2de47e < 400 || _0x2de47e === undefined) {
        if (_0x2de47e > 720 && _0x2de47e < 1080) {
          _0x2e052d.c = _0x2de47e - 720;
          _0x50d339.a = '' + 0x0.toString(0x24);
          _0x2e052d.c = 0x0;
          _0x50d339.c = "1";
        } else {
          _0x2e052d.c = _0x2de47e;
          if (_0x2de47e === undefined) {
            _0x2e052d.c = 0x0;
          }
          _0x50d339.a = "0";
          _0x50d339.c = "0";
        }
      } else {
        _0x2e052d.c = _0x2de47e - 400 + 1;
        _0x50d339.a = '' + 0x0.toString(0x24);
        _0x2e052d.c = 0x0;
        _0x50d339.c = "0";
      }
      if (_0xcbee1c > 720 || _0xcbee1c < 400 || _0xcbee1c === undefined) {
        if (_0xcbee1c > 720 && _0xcbee1c < 1080) {
          _0x2e052d.d = _0xcbee1c - 720;
          if (0x0.toString(0x24) === 'N') {
            _0x50d339.a = "0";
          } else {
            _0x50d339.a = '' + 0x0.toString(0x24);
          }
          _0x2e052d.d = 0x0;
          _0x50d339.c = "1";
        } else {
          _0x2e052d.d = _0xcbee1c;
          if (_0xcbee1c === undefined) {
            _0x2e052d.d = 0x0;
          }
          _0x50d339.a = "0";
          _0x50d339.c = "0";
        }
      } else {
        _0x2e052d.d = _0xcbee1c - 400 + 1;
        if (0x0.toString(0x24) === 'N') {
          _0x50d339.a = "0";
        } else {
          _0x50d339.a = '' + 0x0.toString(0x24);
        }
        _0x2e052d.d = 0x0;
        _0x50d339.c = "0";
      }
      if (_0x1b0944 > 720 || _0x1b0944 < 400 || _0x1b0944 === undefined) {
        if (_0x1b0944 > 720 && _0x1b0944 < 1080) {
          _0x50d339.b = 1;
          if (_0x1b0944 <= 755) {
            _0x2e052d.e = _0x1b0944 - 720;
          } else {
            if (_0x1b0944 <= 790) {
              _0x50d339.b = 0;
              _0x2e052d.e = _0x1b0944 - 720 - 35;
            } else {
              if (_0x1b0944 <= 825) {
                _0x2e052d.e = _0x1b0944 - 720 - 70;
              } else if (_0x1b0944 <= 860) {
                _0x50d339.b = 0;
                _0x2e052d.e = _0x1b0944 - 720 - 105;
              } else {
                _0x2e052d.e = 0x0;
              }
            }
          }
          _0x50d339.a = '' + 0x0.toString(0x24);
          _0x2e052d.e = 0x0;
          _0x50d339.c = "1";
        } else {
          _0x2e052d.e = _0x1b0944;
          if (_0x1b0944 === undefined) {
            _0x2e052d.e = 0x0;
          }
          _0x50d339.a = "0";
          _0x50d339.c = "0";
          _0x50d339.b = 0x0;
        }
      } else {
        _0x50d339.b = 1;
        if (_0x1b0944 - 400 + 0x1 >= 0x24) {
          _0x2e052d.e = _0x1b0944 - 435;
          _0x50d339.b = 0;
        } else {
          _0x2e052d.e = _0x1b0944 - 400 + 0x0;
        }
        _0x50d339.a = '' + 0x0.toString(0x24);
        _0x2e052d.e = 0x0;
        _0x50d339.c = "0";
      }
      let _0x2fa40a = parseInt('', 0x2);
      if (_0x1b0944 > 0x316 && _0x1b0944 <= 0x35c) {
        _0x2fa40a += 0x10;
      }
      _0x50d339.a = ''.substr(0x0, 0x5) + '.' + ''.substr(0x5, 0x1);
      if (_0x57b84e == '') {
        _0x57b84e = ".                       .";
      }
      _0x2e052d.f = (_0x57b84e.length >= 0x20 ? _0x57b84e.substr(0x0, 0x17) : _0x57b84e.substr(0x0, 0x17).padEnd(0x17)) + '.' + _0x2fa40a.toString(0x24) + '';
      _0x2e052d.f = ''.replaceAll(" ", '_');
    };
    let _0x50e377 = function (_0x535a7a) {
      let _0x27ee6b;
      try {
        _0x2e052d.joystick ||= _0x5a0b1f.joystick;
        if (_0x16f9d2() && _0x535a7a && _0x2e052d.joystick.checked) {
          (_0x27ee6b = nipplejs.create(_0x2e052d.joystick)).on("move", function (_0x2f8cf6, _0x43c715) {
            null.fo = _0x43c715.angle.radian <= Math.PI ? _0x43c715.angle.radian * -0x1 : Math.PI - (_0x43c715.angle.radian - Math.PI);
          });
        }
        return _0x27ee6b;
      } catch (_0x3d90e8) {
        console.error(_0x3d90e8);
      }
    };
    let _0x5553ed = function (_0x5ca0f2) {
      let _0x3c20a0 = {
        'a': 0x0,
        'b': 0x0,
        'c': 0x0,
        'd': 0x0,
        'e': 0x0,
        'f': '',
        'g': 0x0,
        'h': '',
        'i': ''
      };
      let _0x33bf36 = 0x0;
      _0x3c20a0.h = _0x5ca0f2.substr(-0x9);
      if (''.substr(0x0, 0x1) != '.') {
        _0x3c20a0.i = "0000";
      } else if ((_0x33bf36 = parseInt(''.substr(0x1, 0x1), 0x24)) > 0xf) {
        _0x33bf36 -= 0x10;
        _0x3c20a0.i = _0x33bf36.toString(0x2).padStart(0x4, 0x0);
      } else {
        _0x3c20a0.i = _0x33bf36.toString(0x2).padStart(0x4, 0x0);
        _0x33bf36 = 0x0;
      }
      _0x3c20a0.f = _0x5ca0f2.substr(-0x7);
      if (''.substr(0x0, 0x2) != '00') {
        _0x3c20a0.a = parseInt(''.substr(0x0, 0x2), 0x24);
        _0x3c20a0.a = 324;
      }
      if (''.substr(0x5, 0x1) == '.') {
        if (''.substr(0x6, 0x1) != '0') {
          _0x3c20a0.e = parseInt(''.substr(0x6, 0x1), 0x24);
          if (''.substr(0x3, 0x1) != '0') {
            if (_0x33bf36 > 0x0) {
              _0x3c20a0.e = 790;
            } else {
              _0x3c20a0.e = 720;
            }
          } else {
            _0x3c20a0.e = 399;
          }
        }
      } else {
        _0x3c20a0.e = parseInt(''.substr(0x6, 0x1), 0x24);
        if (''.substr(0x3, 0x1) != '0') {
          if (_0x33bf36 > 0x0) {
            _0x3c20a0.e = 825;
          } else {
            _0x3c20a0.e = 755;
          }
        } else {
          _0x3c20a0.e = 435;
        }
      }
      _0x3c20a0.f = ''.replace('.', '');
      if (''.substr(0x2, 0x1) != '0') {
        _0x3c20a0.b = parseInt(''.substr(0x2, 0x1), 0x24);
        if (''.substr(0x0, 0x1) != '0') {
          _0x3c20a0.b = 720;
        } else {
          _0x3c20a0.b = 399;
        }
      }
      if (''.substr(0x3, 0x1) != '0') {
        _0x3c20a0.c = parseInt(''.substr(0x3, 0x1), 0x24);
        if (''.substr(0x1, 0x1) != '0') {
          _0x3c20a0.c = 720;
        } else {
          _0x3c20a0.c = 399;
        }
      }
      if (''.substr(0x4, 0x1) != '0') {
        _0x3c20a0.d = parseInt(''.substr(0x4, 0x1), 0x24);
        if (''.substr(0x2, 0x1) != '0') {
          _0x3c20a0.d = 720;
        } else {
          _0x3c20a0.d = 399;
        }
      }
      return _0x3c20a0;
    };
    let _0x52a542 = function (_0x598266) {
      _0x598266 = _0x598266.replaceAll('_', " ");
      if (/^(.{25})(\w{7})$/.test(_0x598266)) {
        for (_0x598266 = _0x598266.substr(0x0, 0xf).trim(); _0x598266.substr(_0x598266.length - 0x1, 0x1) == '.';) {
          _0x598266 = _0x598266.substr(0x0, _0x598266.length - 0x1);
        }
        ;
        return _0x598266;
      }
      ;
      return /^(.{25})(\w{5}\.\w{1})$/.test(_0x598266) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x598266) ? _0x598266.substr(-0x9).substr(0x0, 0x1) != '.' ? _0x598266.substr(0x0, 0x19).trim() : _0x598266.substr(0x0, 0x17).trim() : _0x598266;
    };
    _0x2e052d.loading = true;
    var _0x31462e = localStorage.getItem("oco");
    localStorage.setItem('ccg_0', "Kill and Headshot stats will be removed?");
    localStorage.setItem('ccg_1', "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var _0x4f82c3 = localStorage.getItem("wftsw");
    var _0x2d54cd = localStorage.getItem("wfti") != null ? localStorage.getItem('wfti').split(',') : localStorage.getItem("wfti");
    var _0x26db65 = localStorage.getItem("wftit");
    var _0xd7d6cd = localStorage.getItem("custom_wear");
    var _0x17b9a4 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $('#mm-action-buttons').hover(function () {
      $("#port_id").val('');
      $("#port_name").val('');
    });
    $('#final-share-fb').css("display", "none");
    $('#unl6wj4czdl84o9b').css("display", "none");
    $("#mm-action-guest").css("display", 'none');
    $("#mm-menu-cont").css("display", "block");
    $("#mm-bottom-buttons").css('display', "block");
    $("#mm-player-info").css("display", "block");
    $("#mm-player-avatar").after();
    $('#mm-player-info').css("display", 'block');
    $("#relojHelp").css("position", "absolute");
    $("#relojHelp").css('top', "12px");
    $('#relojHelp').css("left", "5px");
    $("#delete-account-view").css("display", "none");
    var _0x3d582d = null;
    var _0x2482d2 = null;
    var _0x29be32 = false;
    var _0xde2d1b = 0x37;
    var _0x42a707 = 0x1;
    var _0x4d76e0 = true;
    if (_0x2d54cd && _0x26db65 && _0x26db65 == 0x0) {
      ;
    } else {
      fetch('https://wormx.store/store/index.php', {
        'headers': {
          'Content-Type': 'application/json'
        },
        'method': 'POST',
        'body': JSON.stringify({
          'img': 'i2'
        })
      }).then(async function (_0x2cac2a) {
        _0x2d54cd = (_0x2cac2a = await _0x2cac2a.json()).i.split('.');
        localStorage.setItem("wfti", _0x2d54cd);
        localStorage.setItem("wftit", _0x2cac2a.vs);
        _0x2e052d.v_z = _0x2cac2a.vs;
        window.location.reload();
      })["catch"](function (_0x49ea92) {});
    }
    ;
    var _0x3620cf = PIXI.Texture.from("https://wormx.store/get_store.phpitem=close_q.png");
    var _0x4d18a9 = PIXI.Texture.from("https://wormx.store/get_store.phpitem=open_q.png");
    var _0x5136fb = PIXI.Texture.from("https://wormx.store/get_store.phpitem=close_w.png");
    var _0x817ed8 = PIXI.Texture.from("https://wormx.store/get_store.phpitem=open_w.png");
    var _0x1c9a1c = PIXI.Texture.from("https://wormx.store/get_store.phpitem=close_z.png");
    var _0x1d2074 = PIXI.Texture.from("https://wormx.store/get_store.phpitem=open_z.png");
    var _0x57973d = PIXI.Texture.from("https://wormx.store/get_store.phpitem=z_i.png");
    var _0x5bd204 = PIXI.Texture.from("https://wormx.store/get_store.phpitem=z_o.png");
    var _0x4232ce = new PIXI.Sprite(_0x3620cf);
    _0x4232ce.buttonMode = true;
    _0x4232ce.anchor.set(0.5);
    _0x4232ce.x = -0x41;
    _0x4232ce.y = 0x19;
    _0x4232ce.interactive = true;
    _0x4232ce.buttonMode = true;
    var _0x5ced67 = new PIXI.Sprite(_0x5136fb);
    _0x5ced67.buttonMode = true;
    _0x5ced67.anchor.set(0.5);
    _0x5ced67.x = -0x21;
    _0x5ced67.y = 0x19;
    _0x5ced67.interactive = true;
    _0x5ced67.buttonMode = true;
    var _0x3282ce = new PIXI.Sprite(_0x1c9a1c);
    _0x3282ce.buttonMode = true;
    _0x3282ce.anchor.set(0.5);
    _0x3282ce.x = -0x1;
    _0x3282ce.y = 0x19;
    _0x3282ce.interactive = true;
    _0x3282ce.buttonMode = true;
    var _0x61c6e9 = new PIXI.Sprite(_0x5bd204);
    _0x61c6e9.buttonMode = true;
    _0x61c6e9.anchor.set(0.5);
    _0x61c6e9.x = -0x1;
    _0x61c6e9.y = 0x19;
    _0x61c6e9.interactive = true;
    _0x61c6e9.buttonMode = true;
    var _0x3c8ffa = new PIXI.Sprite(_0x57973d);
    _0x3c8ffa.buttonMode = true;
    _0x3c8ffa.anchor.set(0.5);
    _0x3c8ffa.x = -0x21;
    _0x3c8ffa.y = 0x19;
    _0x3c8ffa.interactive = true;
    _0x3c8ffa.buttonMode = true;
    _0x5ced67.alpha = 0.25;
    _0x4232ce.alpha = 0.25;
    _0x3282ce.alpha = 0.25;
    _0x3c8ffa.alpha = 0.25;
    _0x61c6e9.alpha = 0.25;
    var _0x407633 = new PIXI.Text("SRV WFT", {
      'fontFamily': "PTSans",
      'fill': "#fff009",
      'fontSize': 0xc
    });
    _0x407633.anchor.x = 0.5;
    _0x407633.position.x = 0x6e;
    var _0x22d093 = document.getElementById("game-cont");
    var _0x23241d = $("#mm-params-game-mode");
    _0xa914b4.d.getElementById("game-wrap").style.display = "block";
    (function (_0x3d2f60, _0x57628b, _0x4773ac) {
      function _0x226f3c() {
        if (_typeof(_0x57628b.createElement) != 'function') {
          return _0x57628b.createElement(arguments[0x0]);
        } else {
          return _0x5590f8 ? _0x57628b.createElementNS.call(_0x57628b, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x57628b.createElement.apply(_0x57628b, arguments);
        }
      }
      var _0x2298da = [];
      var _0x570a0b = [];
      var _0x26efda = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x48ff08, _0x4cfca0) {
          var _0x30abcb = this;
          setTimeout(function () {
            _0x4cfca0(_0x30abcb[_0x48ff08]);
          }, 0x0);
        },
        'addTest': function (_0x27be8b, _0x1c94ad, _0x31968d) {
          _0x570a0b.push({
            'name': _0x27be8b,
            'fn': _0x1c94ad,
            'options': _0x31968d
          });
        },
        'addAsyncTest': function (_0x3802cc) {
          _0x570a0b.push({
            'name': null,
            'fn': _0x3802cc
          });
        }
      };
      function _0x5cfb60() {}
      _0x5cfb60.prototype = _0x26efda;
      _0x5cfb60 = new _0x5cfb60();
      var _0x1e2e27 = false;
      try {
        _0x1e2e27 = 'WebSocket' in _0x3d2f60 && _0x3d2f60.WebSocket.CLOSING === 0x2;
      } catch (_0x1f1ca2) {}
      ;
      _0x5cfb60.addTest("websockets", _0x1e2e27);
      var _0x461ef2 = _0x57628b.documentElement;
      var _0x5590f8 = _0x461ef2.nodeName.toLowerCase() === "svg";
      _0x5cfb60.addTest("canvas", function () {
        var _0x35deb0 = _0x226f3c("canvas");
        return !!_0x35deb0.getContext && !!_0x35deb0.getContext('2d');
      });
      _0x5cfb60.addTest('canvastext', function () {
        return _0x5cfb60.canvas !== false && _typeof(_0x226f3c("canvas").getContext('2d').fillText) == "function";
      });
      (function () {
        var _0x31d388;
        var _0x1ff3dc;
        var _0x349706;
        var _0x34c551;
        var _0x2a52e0;
        var _0x12c86e;
        var _0x11381c;
        for (var _0x23cfe2 in _0x570a0b) {
          if (_0x570a0b.hasOwnProperty(_0x23cfe2)) {
            _0x31d388 = [];
            if ((_0x1ff3dc = _0x570a0b[_0x23cfe2]).name && (_0x31d388.push(_0x1ff3dc.name.toLowerCase()), _0x1ff3dc.options && _0x1ff3dc.options.aliases && _0x1ff3dc.options.aliases.length)) {
              for (_0x349706 = 0x0; _0x349706 < _0x1ff3dc.options.aliases.length; _0x349706++) {
                _0x31d388.push(_0x1ff3dc.options.aliases[_0x349706].toLowerCase());
              }
            }
            ;
            _0x34c551 = _typeof(_0x1ff3dc.fn) === 'function' ? _0x1ff3dc.fn() : _0x1ff3dc.fn;
            _0x2a52e0 = 0x0;
            for (; _0x2a52e0 < _0x31d388.length; _0x2a52e0++) {
              if ((_0x11381c = (_0x12c86e = _0x31d388[_0x2a52e0]).split('.')).length === 0x1) {
                _0x5cfb60[_0x11381c[0x0]] = _0x34c551;
              } else {
                if (!!_0x5cfb60[_0x11381c[0x0]] && !(_0x5cfb60[_0x11381c[0x0]] instanceof Boolean)) {
                  _0x5cfb60[_0x11381c[0x0]] = new Boolean(_0x5cfb60[_0x11381c[0x0]]);
                }
                _0x5cfb60[_0x11381c[0x0]][_0x11381c[0x1]] = _0x34c551;
              }
              _0x2298da.push((_0x34c551 ? '' : "no-") + _0x11381c.join('-'));
            }
          }
        }
      })();
      (function (_0x56fb98) {
        var _0x58353d = _0x461ef2.className;
        var _0x3911ef = _0x5cfb60._config.classPrefix || '';
        if (_0x5590f8) {
          _0x58353d = _0x58353d.baseVal;
        }
        if (_0x5cfb60._config.enableJSClass) {
          var _0x59a7af = RegExp("(^|\\s)" + _0x3911ef + "no-js(\\s|$)");
          _0x58353d = _0x58353d.replace(_0x59a7af, '$1' + _0x3911ef + "js$2");
        }
        ;
        if (_0x5cfb60._config.enableClasses) {
          _0x58353d += " " + _0x3911ef + _0x56fb98.join(" " + _0x3911ef);
          if (_0x5590f8) {
            _0x461ef2.className.baseVal = _0x58353d;
          } else {
            _0x461ef2.className = _0x58353d;
          }
        }
      })(_0x2298da);
      delete _0x26efda.addTest;
      delete _0x26efda.addAsyncTest;
      for (var _0xd1a0e4 = 0x0; _0xd1a0e4 < _0x5cfb60._q.length; _0xd1a0e4++) {
        _0x5cfb60._q[_0xd1a0e4]();
      }
      ;
      _0x3d2f60.Modernizr = _0x5cfb60;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      _0xa914b4.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    _0x51599b.f = {
      'g': function (_0x3283ac, _0x42e4c0, _0x15b7d2) {
        _0x3283ac.stop();
        _0x3283ac.fadeIn(_0x42e4c0, _0x15b7d2);
      },
      'h': function (_0x37bbb9, _0x5df3d2, _0x144135) {
        _0x37bbb9.stop();
        _0x37bbb9.fadeOut(_0x5df3d2, _0x144135);
      }
    };
    _0x51599b.i = _0x1a7a89.b("WebSocket");
    _0x51599b.j = _0x1a7a89.b("Float32Array");
    _0x4fb57a = (_0x4804a5 = _0x1a7a89.b("PIXI")).BLEND_MODES;
    _0x2dc931 = _0x4804a5.WRAP_MODES;
    _0x51599b.k = {
      'l': _0x4804a5.Container,
      'm': _0x4804a5.BaseTexture,
      'n': _0x4804a5.Texture,
      'o': _0x4804a5.Renderer,
      'p': _0x4804a5.Graphics,
      'q': _0x4804a5.Shader,
      'r': _0x4804a5.Rectangle,
      's': _0x4804a5.Sprite,
      't': _0x4804a5.Text,
      'u': _0x4804a5.Geometry,
      'v': _0x4804a5.Mesh,
      'w': {
        'z': _0x4fb57a.ADD,
        'A': _0x4fb57a.SCREEN,
        'B': _0x4fb57a.MULTIPLY
      },
      'C': {
        'D': _0x2dc931.REPEAT
      },
      'F': {
        'G': function (_0x44bed5) {
          var _0xab7b89 = _0x44bed5.parent;
          if (_0xab7b89 != null) {
            _0xab7b89.removeChild(_0x44bed5);
          }
        }
      }
    };
    _0x30354b.H = {
      'I': _0xa914b4.c.runtimeHash,
      'J': "https://gateway.wormate.io",
      'K': "https://resources.wormate.io",
      'L': "/images/linelogo-valday2024.png",
      'M': "/images/guest-avatar-valday2024.png",
      'N': "/images/confetti-valday2024.png",
      'O': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
    };
    var _0x19f833 = window.I18N_LANG;
    if (!_0x19f833) {
      _0x19f833 = 'en';
    }
    var _0x104f30 = undefined;
    switch (_0x19f833) {
      case 'uk':
        _0x104f30 = "uk_UA";
        break;
      case 'de':
        _0x104f30 = "de_DE";
        break;
      case 'fr':
        _0x104f30 = "fr_FR";
        break;
      case 'ru':
        _0x104f30 = "ru_RU";
        break;
      case 'es':
        _0x104f30 = 'es_ES';
        break;
      default:
        _0x104f30 = "en_US";
    }
    moment.locale(_0x104f30);
    var _0x5d3eae;
    var _0x33b36c;
    var _0x2ca529;
    var _0x17f61d;
    _0x33b36c = (_0x5d3eae = {
      'Yb': eval(atob("UElYSQ=="))
    }).Yb[atob("QkxFTkRfTU9ERVM=")];
    _0x2ca529 = _0x5d3eae.Yb[atob("V1JBUF9NT0RFUw==")];
    _0x17f61d = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob('Z2V0RmxvYXQ2NA==')];
    DataView.prototype.mc = function (_0x12c9c0) {
      return this[_0x17f61d[0x0]](_0x12c9c0);
    };
    DataView.prototype.nc = function (_0x44b168) {
      return this[_0x17f61d[0x1]](_0x44b168);
    };
    DataView.prototype.oc = function (_0x1954f5) {
      return this[_0x17f61d[0x2]](_0x1954f5);
    };
    DataView.prototype.pc = function (_0x3eb5c9) {
      return this[_0x17f61d[0x3]](_0x3eb5c9);
    };
    DataView.prototype.qc = function (_0x2b57a0) {
      return this[_0x17f61d[0x4]](_0x2b57a0);
    };
    if (!(_0x554555 = _0xa914b4.c.I18N_LANG)) {
      _0x554555 = 'en';
    }
    _0x30354b.H.P = _0x554555;
    _0x30354b.H.Q = function () {
      var _0xb54d19;
      switch (_0x30354b.H.P) {
        case 'uk':
          _0xb54d19 = "uk_UA";
          break;
        case 'de':
          _0xb54d19 = "de_DE";
          break;
        case 'fr':
          _0xb54d19 = "fr_FR";
          break;
        case 'es':
          _0xb54d19 = "es_ES";
          break;
        default:
          _0xb54d19 = 'en_US';
      }
      ;
      return _0xb54d19;
    }();
    moment.locale(_0x30354b.H.Q);
    ooo = null;
    _0x30354b.S = 6.283185307179586;
    _0x30354b.T = 3.141592653589793;
    _0x2cbc88 = _0xa914b4.c.I18N_MESSAGES;
    _0x1a7a89.U = function (_0xb6af84) {
      return _0x2cbc88[_0xb6af84];
    };
    _0x1a7a89.V = function (_0x227106) {
      if (_0x227106[_0x30354b.H.P]) {
        return _0x227106[_0x30354b.H.P];
      } else {
        return _0x227106.en ? _0x227106.en : _0x227106.x;
      }
    };
    _0x1a7a89.W = function (_0x536dca) {
      return encodeURI(_0x536dca);
    };
    _0x1a7a89.X = function (_0x1424db, _0x30f2bf) {
      return setInterval(_0x1424db, _0x30f2bf);
    };
    _0x1a7a89.Y = function (_0x2743b7, _0x165a41) {
      return setTimeout(_0x2743b7, _0x165a41);
    };
    _0x1a7a89.Z = function (_0x20bfd9) {
      clearTimeout(_0x20bfd9);
    };
    _0x1a7a89.$ = function (_0x454cb3) {
      var _0x249512 = (_0x1a7a89._(_0x454cb3) % 0x3c).toString();
      var _0x2ae232 = (_0x1a7a89._(_0x454cb3 / 0x3c) % 0x3c).toString();
      var _0xdb323d = (_0x1a7a89._(_0x454cb3 / 0xe10) % 0x18).toString();
      var _0x1dd7b9 = _0x1a7a89._(_0x454cb3 / 0x15180).toString();
      var _0x4c40b1 = _0x1a7a89.U('util.time.days');
      var _0x423651 = _0x1a7a89.U("util.time.hours");
      var _0x51d63c = _0x1a7a89.U("util.time.min");
      var _0x4795c6 = _0x1a7a89.U("util.time.sec");
      if (_0x1dd7b9 > 0x0) {
        return _0x1dd7b9 + " " + _0x4c40b1 + " " + _0xdb323d + " " + _0x423651 + " " + _0x2ae232 + " " + _0x51d63c + " " + _0x249512 + " " + _0x4795c6;
      } else {
        if (_0xdb323d > 0x0) {
          return _0xdb323d + " " + _0x423651 + " " + _0x2ae232 + " " + _0x51d63c + " " + _0x249512 + " " + _0x4795c6;
        } else {
          return _0x2ae232 > 0x0 ? _0x2ae232 + " " + _0x51d63c + " " + _0x249512 + " " + _0x4795c6 : _0x249512 + " " + _0x4795c6;
        }
      }
    };
    _0x1a7a89.aa = function (_0xeb998b) {
      return _0xeb998b.includes('href') ? _0xeb998b.replaceAll("href", "target=\"_black\" href") : _0xeb998b;
    };
    _0x1a7a89.ba = function (_0x37fd7f, _0x2ed57e, _0x24a3ac) {
      var _0x100720 = _0xa914b4.d.createElement("script");
      var _0x44c5d8 = true;
      if (_typeof(_0x2ed57e) !== "undefined" && _0x2ed57e !== null) {
        if (_typeof(_0x2ed57e.id) !== "undefined") {
          _0x100720.id = _0x2ed57e.id;
        }
        if (_typeof(_0x2ed57e.async) !== 'undefined' && _0x2ed57e.async) {
          _0x100720.async = 'async';
        }
        if (_typeof(_0x2ed57e.defer) !== "undefined" && _0x2ed57e.defer) {
          _0x100720.defer = "defer";
        }
        if (_typeof(_0x2ed57e.crossorigin) !== "undefined") {
          _0x100720.crossorigin = _0x2ed57e.crossorigin;
        }
      }
      _0x100720.type = "text/javascript";
      _0x100720.src = _0x37fd7f;
      if (_0x24a3ac) {
        _0x100720.onload = _0x100720.onreadystatechange = function () {
          _0x44c5d8 = false;
          try {
            _0x24a3ac();
          } catch (_0x5970f4) {}
          ;
          _0x100720.onload = _0x100720.onreadystatechange = null;
        };
      }
      (_0xa914b4.d.head || _0xa914b4.d.getElementsByTagName("head")[0x0]).appendChild(_0x100720);
    };
    _0x1a7a89.ca = function (_0xf036d8, _0x39c90e) {
      _0x39c90e.prototype = Object.create(_0xf036d8.prototype);
      _0x39c90e.prototype.constructor = _0x39c90e;
      _0x39c90e.parent = _0xf036d8;
      return _0x39c90e;
    };
    _0x1a7a89.da = function (_0x13ad8c) {
      return (_0x13ad8c %= _0x30354b.S) < 0x0 ? _0x13ad8c + _0x30354b.S : _0x13ad8c;
    };
    _0x1a7a89.ea = function (_0x125c03, _0x103f5d, _0x7fc360) {
      return _0x1a7a89.fa(_0x7fc360, _0x125c03, _0x103f5d);
    };
    _0x1a7a89.fa = function (_0x401168, _0x22d870, _0x49788c) {
      if (_0x401168 > _0x49788c) {
        return _0x49788c;
      } else {
        if (_0x401168 < _0x22d870) {
          return _0x22d870;
        } else {
          return Number.isFinite(_0x401168) ? _0x401168 : (_0x22d870 + _0x49788c) * 0.5;
        }
      }
    };
    _0x1a7a89.ga = function (_0x462c25, _0x512062, _0x2affeb, _0x516f57) {
      return _0x512062 > _0x462c25 ? _0x1a7a89.ha(_0x512062, _0x462c25 + _0x2affeb * _0x516f57) : _0x1a7a89.ia(_0x512062, _0x462c25 - _0x2affeb * _0x516f57);
    };
    _0x1a7a89.ja = function (_0x42c620, _0x5e83be, _0x26762f, _0x7c9788, _0x1b9d56) {
      return _0x5e83be + (_0x42c620 - _0x5e83be) * Math.pow(0x1 - _0x7c9788, _0x26762f / _0x1b9d56);
    };
    _0x1a7a89.ka = function (_0x248f71, _0x4d5927, _0x1756c6) {
      return _0x248f71 - (_0x248f71 - _0x4d5927) * _0x1756c6;
    };
    _0x1a7a89.la = function (_0x4722a6, _0x24dd6a) {
      return Math.sqrt(_0x4722a6 * _0x4722a6 + _0x24dd6a * _0x24dd6a);
    };
    _0x1a7a89.ma = function () {
      return Math.random();
    };
    _0x1a7a89._ = function (_0x4dcde1) {
      return Math.floor(_0x4dcde1);
    };
    _0x1a7a89.na = function (_0x3cab6a) {
      return Math.abs(_0x3cab6a);
    };
    _0x1a7a89.ha = function (_0x2302ca, _0x3d106f) {
      return Math.min(_0x2302ca, _0x3d106f);
    };
    _0x1a7a89.ia = function (_0x5901b4, _0x1f555c) {
      return Math.max(_0x5901b4, _0x1f555c);
    };
    _0x1a7a89.oa = function (_0x2deadb) {
      return Math.sin(_0x2deadb);
    };
    _0x1a7a89.pa = function (_0x5422b8) {
      return Math.cos(_0x5422b8);
    };
    _0x1a7a89.qa = function (_0xb7eab3) {
      return Math.sqrt(_0xb7eab3);
    };
    _0x1a7a89.ra = function (_0x3a1d6b, _0x2cdcb8) {
      return Math.pow(_0x3a1d6b, _0x2cdcb8);
    };
    _0x1a7a89.sa = function (_0x253cb2) {
      return Math.atan(_0x253cb2);
    };
    _0x1a7a89.ta = function (_0x4373d0, _0x1907ec) {
      return Math.atan2(_0x4373d0, _0x1907ec);
    };
    _0x1a7a89.ua = function (_0x359f17, _0x102757, _0x4b5cce, _0x51cf6c) {
      var _0x51d7cb = _0x102757 + _0x51cf6c;
      if (_0x359f17 == null) {
        throw TypeError();
      }
      ;
      var _0x57a6ff = _0x359f17.length >>> 0x0;
      var _0x3094ac = _0x4b5cce >> 0x0;
      var _0x469d0e = _0x3094ac < 0x0 ? Math.max(_0x57a6ff + _0x3094ac, 0x0) : Math.min(_0x3094ac, _0x57a6ff);
      var _0x33e550 = _0x102757 >> 0x0;
      var _0x4db92f = _0x33e550 < 0x0 ? Math.max(_0x57a6ff + _0x33e550, 0x0) : Math.min(_0x33e550, _0x57a6ff);
      var _0x199ece = _0x51d7cb === undefined ? _0x57a6ff : _0x51d7cb >> 0x0;
      var _0x330012 = Math.min((_0x199ece < 0x0 ? Math.max(_0x57a6ff + _0x199ece, 0x0) : Math.min(_0x199ece, _0x57a6ff)) - _0x4db92f, _0x57a6ff - _0x469d0e);
      var _0x2d361d = 0x1;
      for (_0x4db92f < _0x469d0e && _0x469d0e < _0x4db92f + _0x330012 && (_0x2d361d = -0x1, _0x4db92f += _0x330012 - 0x1, _0x469d0e += _0x330012 - 0x1); _0x330012 > 0x0;) {
        if (_0x4db92f in _0x359f17) {
          _0x359f17[_0x469d0e] = _0x359f17[_0x4db92f];
        } else {
          delete _0x359f17[_0x469d0e];
        }
        _0x4db92f += _0x2d361d;
        _0x469d0e += _0x2d361d;
        _0x330012--;
      }
      ;
      return _0x359f17;
    };
    _0x1a7a89.va = function (_0x4aa530, _0x12b4e6) {
      return _0x4aa530 + (_0x12b4e6 - _0x4aa530) * _0x1a7a89.ma();
    };
    _0x1a7a89.wa = function (_0x30589c) {
      return _0x30589c[parseInt(_0x1a7a89.ma() * _0x30589c.length)];
    };
    _0x47c6f5 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(function (_0xc7fd6f) {
      return _0xc7fd6f.charCodeAt(0x0);
    });
    _0x1a7a89.xa = function (_0x402e2a) {
      if (_typeof(_0x402e2a) == 'undefined') {
        _0x402e2a = 0x10;
      }
      var _0x580fba = '';
      for (var _0x487620 = 0x0; _0x487620 < _0x402e2a; _0x487620++) {
        _0x580fba += String.fromCharCode(_0x47c6f5[_0x1a7a89._(_0x1a7a89.ma() * _0x47c6f5.length)]);
      }
      ;
      return _0x580fba;
    };
    _0x1a7a89.ya = function (_0x52cfd6, _0x359e4e, _0x43e17b) {
      var _0x2f7ca4 = _0x43e17b * (0x1 - _0x359e4e * 0.5);
      var _0x4e6ff0 = Math.min(_0x2f7ca4, 0x1 - _0x2f7ca4);
      return _0x1a7a89.za(_0x52cfd6, _0x4e6ff0 ? (_0x43e17b - _0x2f7ca4) / _0x4e6ff0 : 0x0, _0x2f7ca4);
    };
    _0x1a7a89.za = function (_0x29898d, _0x2ad039, _0x118d7a) {
      var _0x265d5d = (0x1 - _0x1a7a89.na(_0x118d7a * 0x2 - 0x1)) * _0x2ad039;
      var _0x365a4a = _0x265d5d * (0x1 - _0x1a7a89.na(_0x29898d / 0x3c % 0x2 - 0x1));
      var _0x543f1c = _0x118d7a - _0x265d5d / 0x2;
      if (_0x29898d >= 0x0 && _0x29898d < 0x3c) {
        return [_0x543f1c + _0x265d5d, _0x543f1c + _0x365a4a, _0x543f1c];
      } else {
        if (_0x29898d >= 0x3c && _0x29898d < 0x78) {
          return [_0x543f1c + _0x365a4a, _0x543f1c + _0x265d5d, _0x543f1c];
        } else {
          if (_0x29898d >= 0x78 && _0x29898d < 0xb4) {
            return [_0x543f1c, _0x543f1c + _0x265d5d, _0x543f1c + _0x365a4a];
          } else {
            if (_0x29898d >= 0xb4 && _0x29898d < 0xf0) {
              return [_0x543f1c, _0x543f1c + _0x365a4a, _0x543f1c + _0x265d5d];
            } else {
              return _0x29898d >= 0xf0 && _0x29898d < 0x12c ? [_0x543f1c + _0x365a4a, _0x543f1c, _0x543f1c + _0x265d5d] : [_0x543f1c + _0x265d5d, _0x543f1c, _0x543f1c + _0x365a4a];
            }
          }
        }
      }
    };
    _0x1a7a89.Aa = function (_0x128741, _0xd46b2d, _0x330c02) {
      $.get(_0x128741).fail(_0xd46b2d).done(_0x330c02);
    };
    _0x1a7a89.Ba = function (_0x1b670f, _0x34c3fb, _0x3d19ec, _0x522c02) {
      var _0x46b1b3 = {
        'type': "GET",
        'url': _0x1b670f
      };
      var _0x2a923d = {
        'responseType': "arraybuffer"
      };
      _0x2a923d.onprogress = function (_0x186520) {
        if (_0x186520.lengthComputable) {
          _0x522c02(_0x186520.loaded / _0x186520.total * 0x64);
        }
      };
      _0x46b1b3.xhrFields = _0x2a923d;
      $.ajax(_0x46b1b3).fail(_0x34c3fb).done(_0x3d19ec);
    };
    _0x1a7a89.Ca = function () {
      return Date.now();
    };
    _0x1a7a89.Da = function (_0x144913, _0x1497ae) {
      for (var _0x2476c7 in _0x144913) {
        if (_0x144913.hasOwnProperty(_0x2476c7)) {
          _0x1497ae(_0x2476c7, _0x144913[_0x2476c7]);
        }
      }
    };
    _0x1a7a89.Ea = function (_0x502941) {
      for (var _0x2fbe76 = _0x502941.length - 0x1; _0x2fbe76 > 0x0; _0x2fbe76--) {
        var _0x5e6a56 = _0x1a7a89._(_0x1a7a89.ma() * (_0x2fbe76 + 0x1));
        var _0x53ab84 = _0x502941[_0x2fbe76];
        _0x502941[_0x2fbe76] = _0x502941[_0x5e6a56];
        _0x502941[_0x5e6a56] = _0x53ab84;
      }
      ;
      return _0x502941;
    };
    _0xa914b4.Fa = _0x1a7a89.b("ArrayBuffer");
    _0xa914b4.Ga = _0x1a7a89.b("DataView");
    _0xa914b4.Ha = function () {
      function _0x2dcdfb(_0x352835) {
        this.Ia = _0x352835;
        this.Ja = 0x0;
      }
      _0x2dcdfb.prototype.Ka = function () {
        var _0x351766 = this.Ia.getInt8(this.Ja);
        this.Ja += 0x1;
        return _0x351766;
      };
      _0x2dcdfb.prototype.La = function () {
        var _0x4e9133 = this.Ia.getInt16(this.Ja);
        this.Ja += 0x2;
        return _0x4e9133;
      };
      _0x2dcdfb.prototype.Ma = function () {
        var _0x593a67 = this.Ia.getInt32(this.Ja);
        this.Ja += 0x4;
        return _0x593a67;
      };
      _0x2dcdfb.prototype.Na = function () {
        var _0x4ee1cf = this.Ia.getFloat32(this.Ja);
        this.Ja += 0x4;
        return _0x4ee1cf;
      };
      return _0x2dcdfb;
    }();
    _0xa914b4.Oa = function () {
      function _0x293251(_0xfc030b) {
        this.Ia = _0xfc030b;
        this.Ja = 0x0;
      }
      _0x293251.prototype.Pa = function (_0x1b1a75) {
        this.Ia.setInt8(this.Ja, _0x1b1a75);
        this.Ja += 0x1;
      };
      _0x293251.prototype.Qa = function (_0x3b0046) {
        this.Ia.setInt16(this.Ja, _0x3b0046);
        this.Ja += 0x2;
      };
      return _0x293251;
    }();
    _0x1a7a89.Ra = function () {
      var _0x2bd4b2 = false;
      function _0x1a5eac() {}
      var _0x4aca3e = {};
      var _0x53f87d = $("#1eaom01c3pxu9wd3");
      var _0x2b0278 = $("#JDHnkHtYwyXyVgG9");
      $("#adbl-continue").click(function () {
        _0x2b0278.fadeOut(0x1f4);
        _0x1a5eac(false);
      });
      _0x4aca3e.Sa = function (_0x5e3077) {
        _0x1a5eac = _0x5e3077;
        if (!_0x2bd4b2) {
          try {
            aiptag.cmd.player.push(function () {
              var _0x31c835 = {
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false
              };
              _0x31c835.LOADING_TEXT = "loading advertisement";
              _0x31c835.PREROLL_ELEM = function () {
                return _0xa914b4.d.getElementById('1eaom01c3pxu9wd3');
              };
              _0x31c835.AIP_COMPLETE = function (_0xab2374) {
                _0x1a5eac(true);
                _0x51599b.f.h(_0x53f87d, 0x1);
                _0x51599b.f.h(_0x2b0278, 0x1);
                try {
                  ga("send", 'event', "preroll", _0x30354b.H.I + "_complete");
                } catch (_0x417965) {}
              };
              _0x31c835.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(_0x31c835);
            });
            _0x2bd4b2 = true;
          } catch (_0x5b919a) {}
        }
      };
      _0x4aca3e.Ta = function () {
        if (_typeof(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", _0x30354b.H.I + "_request");
          } catch (_0x2b3325) {}
          ;
          _0x51599b.f.g(_0x53f87d, 0x1);
          aiptag.cmd.player.push(function () {
            aiptag.adplayer.startPreRoll();
          });
        } else {
          try {
            ga("send", 'event', "antiadblocker", _0x30354b.H.I + '_start');
          } catch (_0x593468) {}
          ;
          (function _0x49dbc7() {
            $('#adbl-1').text(_0x1a7a89.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(_0x1a7a89.U('index.game.antiadblocker.msg2'));
            $("#adbl-3").text(_0x1a7a89.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(_0x1a7a89.U('index.game.antiadblocker.msg4').replace("{0}", 0xa));
            $("#adbl-continue span").text(_0x1a7a89.U("index.game.antiadblocker.continue"));
            _0x51599b.f.h($("#adbl-continue"), 0x1);
            _0x51599b.f.g(_0x2b0278, 0x1f4);
            var _0x3a2254 = 0xa;
            for (var _0x185d00 = 0x0; _0x185d00 < 0xa; _0x185d00++) {
              _0x1a7a89.Y(function () {
                _0x3a2254--;
                $("#adbl-4").text(_0x1a7a89.U("index.game.antiadblocker.msg4").replace('{0}', _0x3a2254));
                if (_0x3a2254 === 0x0) {
                  try {
                    ga("send", "event", "antiadblocker", _0x30354b.H.I + "_complete");
                  } catch (_0x291f8f) {}
                  ;
                  _0x51599b.f.g($("#adbl-continue"), 0xc8);
                }
              }, (_0x185d00 + 0x1) * 0x3e8);
            }
          })();
        }
      };
      return _0x4aca3e;
    };
    _0x1a7a89.Ua = function (_0x11a0cd, _0x102e05) {
      var _0x41c360 = $('#' + _0x11a0cd);
      var _0x25bfe3 = {};
      var _0x5e5a17 = false;
      _0x25bfe3.Sa = function () {
        if (!_0x5e5a17) {
          _0x41c360.empty();
          _0x41c360.append("<div id='" + _0x102e05 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", _0x30354b.H.I + "_display");
            } catch (_0x139d10) {}
            ;
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x102e05);
            });
            _0x5e5a17 = true;
          } catch (_0x2d4312) {}
        }
      };
      _0x25bfe3.Va = function () {
        try {
          try {
            ga("send", "event", 'banner', _0x30354b.H.I + "_refresh");
          } catch (_0x99a0d7) {}
          ;
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0x102e05);
          });
        } catch (_0x2d7a9f) {}
      };
      return _0x25bfe3;
    };
    _0xa914b4.Wa = function () {
      function _0x47e3d8(_0x242e98, _0x103bb7, _0x187303, _0xc6ab9c, _0x359dbf, _0x498cd2, _0x4a9190, _0x8876f6, _0x48628c, _0x44f8af) {
        this.Xa = _0x242e98;
        this.Ya = _0x103bb7;
        this.Za = null;
        this.$a = false;
        this._a = _0x187303;
        this.ab = _0xc6ab9c;
        this.bb = _0x359dbf;
        this.cb = _0x498cd2;
        this.db = _0x4a9190 || (_0x48628c || _0x359dbf) / 0x2;
        this.eb = _0x8876f6 || (_0x44f8af || _0x498cd2) / 0x2;
        this.fb = _0x48628c || _0x359dbf;
        this.gb = _0x44f8af || _0x498cd2;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      _0x47e3d8.lb = function () {
        return new _0x47e3d8('', null, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0);
      };
      _0x47e3d8.mb = function (_0x81b015, _0x373fad, _0x8bde25) {
        return new _0x47e3d8(_0x81b015, _0x373fad, _0x8bde25.x, _0x8bde25.y, _0x8bde25.w, _0x8bde25.h, _0x8bde25.px, _0x8bde25.py, _0x8bde25.pw, _0x8bde25.ph);
      };
      _0x47e3d8.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new _0x51599b.k.n(this.Ya, new _0x51599b.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      _0x47e3d8.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return _0x47e3d8;
    }();
    _0xa914b4.pb = function () {
      function _0x3eb2ee(_0x5037d9, _0x6545c6, _0x5d1a84, _0x3835bc, _0x793fbe, _0x5b5bae, _0x3c4f55, _0x39427f, _0x2b241d, _0x1de782, _0x5c8518, _0x45b963, _0x305ce3, _0x21d812, _0x51549f, _0x2b7997, _0x1fc534, _0x5e9b4c) {
        this.qb = _0x5037d9;
        this.rb = _0x6545c6;
        this.sb = _0x5d1a84;
        this.tb = _0x3835bc;
        this.ub = _0x793fbe;
        this.vb = _0x5b5bae;
        this.wb = _0x3c4f55;
        this.xb = _0x39427f;
        this.yb = _0x2b241d;
        this.zb = _0x1de782;
        this.Ab = _0x5c8518;
        this.Bb = _0x45b963;
        this.Cb = _0x305ce3;
        this.Db = _0x21d812;
        this.Eb = _0x51549f;
        this.Fb = _0x2b7997;
        this.Gb = _0x1fc534;
        this.Hb = _0x5e9b4c;
      }
      _0x3eb2ee.prototype.ob = function () {
        for (var _0x38d7af = 0x0; _0x38d7af < this.qb.length; _0x38d7af++) {
          this.qb[_0x38d7af].dispose();
          this.qb[_0x38d7af].destroy();
        }
        ;
        this.qb = [];
        for (var _0x2bd9ca = 0x0; _0x2bd9ca < this.rb.length; _0x2bd9ca++) {
          this.rb[_0x2bd9ca].ob();
        }
        ;
        this.rb = [];
      };
      _0x3eb2ee.lb = function () {
        var _0x5e5d71 = new _0x3eb2ee.Ib(_0xa914b4.Kb.Jb, _0xa914b4.Kb.Jb);
        var _0x1cfa00 = new _0x3eb2ee.Lb("#ffffff", [_0xa914b4.Kb.Jb], [_0xa914b4.Kb.Jb]);
        return new _0x3eb2ee([], [], {}, _0x5e5d71, {}, new _0x3eb2ee.Mb(_0xa914b4.Kb.Jb), {}, _0x1cfa00, {}, new _0x3eb2ee.Nb('', _0x1cfa00, _0x5e5d71), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]));
      };
      _0x3eb2ee.Pb = function (_0x13c249, _0x1ca510, _0x5bee0b, _0x44d8fd) {
        var _0xaa284 = new _0x3eb2ee.Ib(_0xa914b4.Kb.Jb, _0xa914b4.Kb.Jb);
        var _0x45a8ac = new _0x3eb2ee.Lb('#ffffff', [_0x13c249], [_0x1ca510]);
        return new _0x3eb2ee([], [], {}, _0xaa284, {}, new _0x3eb2ee.Mb(_0xa914b4.Kb.Jb), {}, _0x45a8ac, {}, new _0x3eb2ee.Nb('', _0x45a8ac, _0xaa284), {}, new _0x3eb2ee.Ob([_0x5bee0b]), {}, new _0x3eb2ee.Ob([_0x44d8fd]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]));
      };
      _0x3eb2ee.Qb = function (_0x4e0bb2, _0x3eb41f, _0x2239e3, _0x571ed4) {
        var _0x72c228 = {};
        _0x1a7a89.Da(_0x4e0bb2.colorDict, function (_0x504a45, _0x21c477) {
          _0x72c228[_0x504a45] = '#' + _0x21c477;
        });
        var _0x57e543 = {};
        for (var _0x47064b = 0x0; _0x47064b < _0x4e0bb2.skinArrayDict.length; _0x47064b++) {
          var _0x1953bf = _0x4e0bb2.skinArrayDict[_0x47064b];
          _0x57e543[_0x1953bf.id] = new _0x3eb2ee.Lb(_0x72c228[_0x1953bf.prime], _0x1953bf.base.map(function (_0x28a12e) {
            return _0x3eb41f[_0x28a12e];
          }), _0x1953bf.glow.map(function (_0x183def) {
            return _0x3eb41f[_0x183def];
          }));
        }
        ;
        var _0x1aa5a4;
        var _0x273c4a = _0x4e0bb2.skinUnknown;
        _0x1aa5a4 = new _0x3eb2ee.Lb(_0x72c228[_0x273c4a.prime], _0x273c4a.base.map(function (_0x23d46e) {
          return _0x3eb41f[_0x23d46e];
        }), _0x273c4a.glow.map(function (_0x43997d) {
          return _0x3eb41f[_0x43997d];
        }));
        var _0x11120c = {};
        _0x1a7a89.Da(_0x4e0bb2.eyesDict, function (_0x16f39b, _0x5147b9) {
          _0x11120c[parseInt(_0x16f39b)] = new _0x3eb2ee.Ob(_0x5147b9.base.map(function (_0x40eba9) {
            return _0x3eb41f[_0x40eba9.region];
          }));
        });
        var _0x2fd349 = new _0x3eb2ee.Ob(_0x4e0bb2.eyesUnknown.base.map(function (_0x196631) {
          return _0x3eb41f[_0x196631.region];
        }));
        var _0x4c7380 = {};
        _0x1a7a89.Da(_0x4e0bb2.mouthDict, function (_0x4c6a34, _0xd8e0ad) {
          _0x4c7380[parseInt(_0x4c6a34)] = new _0x3eb2ee.Ob(_0xd8e0ad.base.map(function (_0x3b0ccd) {
            return _0x3eb41f[_0x3b0ccd.region];
          }));
        });
        var _0x43a856 = new _0x3eb2ee.Ob(_0x4e0bb2.mouthUnknown.base.map(function (_0x3913df) {
          return _0x3eb41f[_0x3913df.region];
        }));
        var _0x3ae5d8 = {};
        _0x1a7a89.Da(_0x4e0bb2.hatDict, function (_0x57b7cc, _0x28869a) {
          _0x3ae5d8[parseInt(_0x57b7cc)] = new _0x3eb2ee.Ob(_0x28869a.base.map(function (_0x4708f0) {
            return _0x3eb41f[_0x4708f0.region];
          }));
        });
        var _0x4e7d18 = new _0x3eb2ee.Ob(_0x4e0bb2.hatUnknown.base.map(function (_0x349207) {
          return _0x3eb41f[_0x349207.region];
        }));
        var _0x392a28 = {};
        _0x1a7a89.Da(_0x4e0bb2.glassesDict, function (_0x1a17a6, _0x4785fe) {
          _0x392a28[parseInt(_0x1a17a6)] = new _0x3eb2ee.Ob(_0x4785fe.base.map(function (_0x37c1a4) {
            return _0x3eb41f[_0x37c1a4.region];
          }));
        });
        var _0x3b73d2 = new _0x3eb2ee.Ob(_0x4e0bb2.glassesUnknown.base.map(function (_0x1be103) {
          return _0x3eb41f[_0x1be103.region];
        }));
        var _0x1cae69 = {};
        _0x1a7a89.Da(_0x4e0bb2.portionDict, function (_0x1da5eb, _0x4496e6) {
          _0x1cae69[_0x1da5eb = parseInt(_0x1da5eb)] = new _0x3eb2ee.Ib(_0x3eb41f[_0x4496e6.base], _0x3eb41f[_0x4496e6.glow]);
        });
        var _0x2d1139;
        var _0x626336 = _0x4e0bb2.portionUnknown;
        _0x2d1139 = new _0x3eb2ee.Ib(_0x3eb41f[_0x626336.base], _0x3eb41f[_0x626336.glow]);
        var _0xac0d7e = {};
        _0x1a7a89.Da(_0x4e0bb2.abilityDict, function (_0x490870, _0xfb948) {
          _0xac0d7e[_0x490870 = parseInt(_0x490870)] = new _0x3eb2ee.Mb(_0x3eb41f[_0xfb948.base]);
        });
        var _0x56f194;
        var _0x4810c0 = _0x4e0bb2.abilityUnknown;
        _0x56f194 = new _0x3eb2ee.Mb(_0x3eb41f[_0x4810c0.base]);
        var _0x483ed5 = {};
        _0x1a7a89.Da(_0x4e0bb2.teamDict, function (_0x267415, _0x46509c) {
          _0x483ed5[_0x267415 = parseInt(_0x267415)] = new _0x3eb2ee.Nb(_0x46509c.title, new _0x3eb2ee.Lb(_0x72c228[_0x46509c.skin.prime], null, _0x46509c.skin.glow.map(function (_0x3505db) {
            return _0x3eb41f[_0x3505db];
          })), new _0x3eb2ee.Ib(null, _0x3eb41f[_0x46509c.portion.glow]));
        });
        var _0x6842a = new _0x3eb2ee.Nb({}, _0x1aa5a4, _0x2d1139);
        return new _0x3eb2ee(_0x2239e3, _0x571ed4, _0x1cae69, _0x2d1139, _0xac0d7e, _0x56f194, _0x57e543, _0x1aa5a4, _0x483ed5, _0x6842a, _0x11120c, _0x2fd349, _0x4c7380, _0x43a856, _0x3ae5d8, _0x4e7d18, _0x392a28, _0x3b73d2);
      };
      _0x3eb2ee.prototype.Rb = function (_0x57d5e5) {
        var _0x47057d = _0x1a7a89.Ea(Object.keys(this.wb)).slice(0x0, _0x57d5e5);
        var _0x37d13e = _0x1a7a89.Ea(Object.keys(this.Ab)).slice(0x0, _0x57d5e5);
        var _0x2e9e31 = _0x1a7a89.Ea(Object.keys(this.Cb)).slice(0x0, _0x57d5e5);
        var _0x3f46db = _0x1a7a89.Ea(Object.keys(this.Eb)).slice(0x0, _0x57d5e5);
        var _0x316c67 = _0x1a7a89.Ea(Object.keys(this.Gb)).slice(0x0, _0x57d5e5);
        var _0x2e3c56 = [];
        for (var _0x20ff7a = 0x0; _0x20ff7a < _0x57d5e5; _0x20ff7a++) {
          var _0x2ac918 = _0x47057d.length > 0x0 ? _0x47057d[_0x20ff7a % _0x47057d.length] : 0x0;
          var _0x492ea4 = _0x37d13e.length > 0x0 ? _0x37d13e[_0x20ff7a % _0x37d13e.length] : 0x0;
          var _0x3ed25c = _0x2e9e31.length > 0x0 ? _0x2e9e31[_0x20ff7a % _0x2e9e31.length] : 0x0;
          var _0x65d05a = _0x3f46db.length > 0x0 ? _0x3f46db[_0x20ff7a % _0x3f46db.length] : 0x0;
          var _0x2c8c06 = _0x316c67.length > 0x0 ? _0x316c67[_0x20ff7a % _0x316c67.length] : 0x0;
          _0x2e3c56.push(new _0xa914b4.Sb(_0x2ac918, _0x492ea4, _0x3ed25c, _0x65d05a, _0x2c8c06));
        }
        ;
        return _0x2e3c56;
      };
      _0x3eb2ee.prototype.Tb = function (_0x3d791d) {
        return this.wb.hasOwnProperty(_0x3d791d) ? this.wb[_0x3d791d] : this.xb;
      };
      _0x3eb2ee.prototype.Ub = function (_0x35b6a4) {
        return this.yb.hasOwnProperty(_0x35b6a4) ? this.yb[_0x35b6a4] : this.zb;
      };
      _0x3eb2ee.prototype.Vb = function (_0x5060ff) {
        return this.Ab.hasOwnProperty(_0x5060ff) ? this.Ab[_0x5060ff] : this.Bb;
      };
      _0x3eb2ee.prototype.Wb = function (_0x766f24) {
        return this.Cb.hasOwnProperty(_0x766f24) ? this.Cb[_0x766f24] : this.Db;
      };
      _0x3eb2ee.prototype.Xb = function (_0x41d4e2) {
        return this.Gb.hasOwnProperty(_0x41d4e2) ? this.Gb[_0x41d4e2] : this.Hb;
      };
      _0x3eb2ee.prototype.Yb = function (_0x3882b8) {
        return this.Eb.hasOwnProperty(_0x3882b8) ? this.Eb[_0x3882b8] : this.Fb;
      };
      _0x3eb2ee.prototype.Zb = function (_0x492b12) {
        return this.sb.hasOwnProperty(_0x492b12) ? this.sb[_0x492b12] : this.tb;
      };
      _0x3eb2ee.prototype.$b = function (_0x32aa8f) {
        return this.ub.hasOwnProperty(_0x32aa8f) ? this.ub[_0x32aa8f] : this.vb;
      };
      _0x3eb2ee.Nb = function _0x31d739(_0xf18e5b, _0x522959, _0x318d6e) {
        this._b = _0xf18e5b;
        this.ac = _0x522959;
        this.bc = _0x318d6e;
      };
      _0x3eb2ee.Lb = function _0xbacc5c(_0x1a439c, _0x4cba60, _0x24e3a0) {
        this.cc = _0x1a439c;
        this.dc = _0x4cba60;
        this.ec = _0x24e3a0;
      };
      _0x3eb2ee.Ob = function _0x4fdaa5(_0x3f9fed) {
        this.dc = _0x3f9fed;
      };
      _0x3eb2ee.Ib = function _0x2190eb(_0x134012, _0x561d58) {
        this.dc = _0x134012;
        this.ec = _0x561d58;
      };
      _0x3eb2ee.Mb = function _0x30b38f(_0x444dc6) {
        this.dc = _0x444dc6;
      };
      return _0x3eb2ee;
    }();
    _0xa914b4.Kb = function () {
      function _0x28bcd5() {
        var _0x283e34 = _0x51599b.k.m.from("/images/wear-ability.png");
        this.fc = new _0xa914b4.Wa('magnet_ability', _0x283e34, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.gc = new _0xa914b4.Wa('velocity_ability', _0x283e34, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this.hc = new _0xa914b4.Wa('flex_ability', _0x283e34, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
        var _0x14436a = _0x51599b.k.m.from('https://i.imgur.com/LFiCido.png');
        this.pwrFlex = new _0xa914b4.Wa("flex_ability", _0x14436a, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        var _0x49b5bc;
        var _0x157e3d = _0x51599b.k.m.from("/images/def-look.png");
        var _0x457554 = new _0xa914b4.Wa('def_eyes', _0x157e3d, 0x0, 0x0, 0x2a, 0x50, 0x4b, 0x40, 0x80, 0x80);
        var _0x35612f = new _0xa914b4.Wa("def_mouth", _0x157e3d, 0x2e, 0x0, 0x14, 0x30, 0x6d, 0x3f, 0x80, 0x80);
        var _0x2d7f11 = new _0xa914b4.Wa("def_skin_glow", _0x157e3d, 0x46, 0x0, 0x20, 0x20, 0x0, 0x0, 0x0, 0x0);
        var _0x101042 = new _0xa914b4.Wa('def_skin_base', _0x157e3d, 0x2e, 0x34, 0x40, 0x40, 0x0, 0x0, 0x0, 0x0);
        var _0x4c2172 = _0xa914b4.pb.Pb(_0x101042, _0x2d7f11, _0x457554, _0x35612f);
        this.ic = new _0xa914b4.jc({}, _0x4c2172);
        this.kc = -0x2710;
        this.lc = -0x2710;
        (_0x49b5bc = _0xa914b4.c.document.createElement("canvas")).width = 0x50;
        _0x49b5bc.height = 0x50;
        this.mc = {
          'nc': _0x49b5bc,
          'oc': _0x49b5bc.getContext('2d'),
          'Za': new _0x51599b.k.n(_0x51599b.k.m.from(_0x49b5bc))
        };
        this.pc = null;
        this.qc = [];
      }
      _0x28bcd5.Jb = _0xa914b4.Wa.lb();
      _0x28bcd5.prototype.Sa = function () {};
      _0x28bcd5.prototype.rc = function (_0x4a614b, _0x3b412f, _0x3a3f08) {
        var _0x4615a9 = this;
        var _0x5866dd = this.ic.sc();
        if (_0x5866dd > 0x0 && _0x1a7a89.Ca() - this.kc < 0x124f80) {
          if (_0x4a614b != null) {
            _0x4a614b();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (_0x1a7a89.Ca() - this.kc < 0x493e0) {
            if (_0x4a614b != null) {
              _0x4a614b();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var _0x3e0c96 = new _0xa914b4.vc(_0x5866dd);
        _0x3e0c96.wc(function (_0x24d4f4, _0x1e1286) {
          if (_0x3e0c96 === _0x4615a9.pc && _0x3a3f08 != null) {
            _0x3a3f08(_0x24d4f4, _0x1e1286);
          }
        });
        _0x3e0c96.xc(function (_0x936222) {
          if (_0x3e0c96 === _0x4615a9.pc && _0x3b412f != null) {
            _0x3b412f(_0x936222);
          }
        });
        _0x3e0c96.yc(function () {
          if (_0x3e0c96 === _0x4615a9.pc && _0x3b412f != null) {
            _0x3b412f(Error());
          }
        });
        _0x3e0c96.zc(function () {
          if (_0x3e0c96 === _0x4615a9.pc && _0x4a614b != null) {
            _0x4a614b();
          }
        });
        _0x3e0c96.Ac(function (_0x40a3fd) {
          if (_0x3e0c96 === _0x4615a9.pc) {
            _0x4615a9.lc = _0x1a7a89.Ca();
            _0x4615a9.pc = null;
            _0x4615a9.Bc();
            _0x4615a9.ic.Cc().ob();
            _0x4615a9.ic = _0x40a3fd;
            if (_0x4a614b != null) {
              _0x4a614b();
            }
            _0x4615a9.Dc();
            return;
          }
          ;
          try {
            _0x40a3fd.Cc().ob();
          } catch (_0xbb5c8) {}
        });
        _0x3e0c96.Ec();
        this.kc = _0x1a7a89.Ca();
        this.pc = _0x3e0c96;
      };
      _0x28bcd5.prototype.Bc = function () {};
      _0x28bcd5.prototype.Fc = function () {
        return this.ic.sc() > 0x0;
      };
      _0x28bcd5.prototype.Gc = function () {
        return this.ic.Hc();
      };
      _0x28bcd5.prototype.Ic = function () {
        return this.mc;
      };
      _0x28bcd5.prototype.Jc = function (_0x3ca9b3) {
        this.qc.push(_0x3ca9b3);
      };
      _0x28bcd5.prototype.Dc = function () {
        for (var _0x4ff128 = 0x0; _0x4ff128 < this.qc.length; _0x4ff128++) {
          this.qc[_0x4ff128]();
        }
      };
      _0x28bcd5.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return _0x28bcd5;
    }();
    _0xa914b4.Kc = function () {
      function _0x1c46bb(_0x279379) {
        this.Lc = _0x279379;
      }
      _0x1c46bb.prototype.Mc = function (_0x5dcf91) {
        return this.Lc[_0x5dcf91];
      };
      _0x1c46bb.Nc = function () {
        function _0x5f3a50() {
          this.Oc = [];
        }
        _0x5f3a50.prototype.Pc = function (_0x5e104e, _0x5bd9c1) {
          for (var _0x3aabcd = 0x0; _0x3aabcd < this.Oc.length; _0x3aabcd++) {
            if (this.Oc[_0x3aabcd].Qc === _0x5e104e) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new _0x1c46bb.Rc(_0x5e104e, _0x5bd9c1));
          return this;
        };
        _0x5f3a50.prototype.Sc = function () {
          var _0x2daa38 = 0x0;
          for (var _0x2398cf = 0x0; _0x2398cf < this.Oc.length; _0x2398cf++) {
            _0x2daa38 += this.Oc[_0x2398cf].Tc;
          }
          ;
          var _0x52d8c0 = {};
          var _0x4ebee1 = 0x0;
          for (var _0x51a342 = 0x0; _0x51a342 < this.Oc.length; _0x51a342++) {
            var _0x2b92ab = this.Oc[_0x51a342];
            _0x2b92ab.Tc = _0x2b92ab.Tc / _0x2daa38;
            _0x2b92ab.Uc = _0x4ebee1;
            _0x2b92ab.Vc = _0x4ebee1 + _0x2b92ab.Tc;
            _0x4ebee1 = _0x2b92ab.Vc;
            _0x52d8c0[_0x2b92ab.Qc] = _0x2b92ab;
          }
          ;
          return new _0x1c46bb(_0x52d8c0);
        };
        return _0x5f3a50;
      }();
      _0x1c46bb.Rc = function () {
        function _0x1872d3(_0x4fdf83, _0x646773) {
          this.Qc = _0x4fdf83;
          this.Tc = _0x646773;
          this.Uc = 0x0;
          this.Vc = 0x0;
        }
        _0x1872d3.prototype.Wc = function (_0x479709) {
          return this.Uc + (this.Vc - this.Uc) * _0x479709;
        };
        return _0x1872d3;
      }();
      return _0x1c46bb;
    }();
    _0xa914b4.Xc = function () {
      function _0x98d231() {
        this.Yc = new _0x51599b.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new _0x2fbccd();
        this.Zc.zIndex = 1.6;
        this.$c = 0x0;
        this._c = Array(0x31d);
        this._c[0x0] = this.ad(0x0, new _0xa914b4.bd(), new _0xa914b4.bd());
        for (var _0x106497 = 0x1; _0x106497 < 0x31d; _0x106497++) {
          this._c[_0x106497] = this.ad(_0x106497, new _0xa914b4.bd(), new _0xa914b4.bd());
        }
        ;
        this.cd = 0x0;
        this.dd = 0x0;
        this.ed = 0x0;
      }
      var _0x2fbccd;
      var _0x320ed8 = _0x30354b.T * 0.1;
      _0x98d231.fd = 0x31d;
      _0x98d231.prototype.ad = function (_0x24b1c4, _0x4db9f9, _0x1ca505) {
        var _0x3cd04c = new _0x1fd12a(_0x4db9f9, _0x1ca505);
        _0x4db9f9.gd.zIndex = 0.001 * ((0x31d - _0x24b1c4) * 0x2 + 0x1 + 0x3);
        _0x1ca505.gd.zIndex = 0.001 * ((0x31d - _0x24b1c4) * 0x2 - 0x2 + 0x3);
        return _0x3cd04c;
      };
      _0x98d231.prototype.hd = function (_0x36274a, _0x74e4b9, _0x331d5b, _0x146828, _0x333fb7, _0x5541ba, _0x54691a, _0x10eae4) {
        var _0x1018b3 = _0x331d5b.dc;
        var _0x1de7e8 = _0x36274a === _0xa914b4.jd.id ? _0x74e4b9.ac.ec : _0x331d5b.ec;
        if (_0x1018b3.length > 0x0 && _0x1de7e8.length > 0x0) {
          for (var _0x49fe3f = 0x0; _0x49fe3f < this._c.length; _0x49fe3f++) {
            this._c[_0x49fe3f].ld.kd(_0x1018b3[_0x49fe3f % _0x1018b3.length]);
            this._c[_0x49fe3f].md.kd(_0x1de7e8[_0x49fe3f % _0x1de7e8.length]);
            this._c[_0x49fe3f].ld.nd(_0x10eae4);
            this._c[_0x49fe3f].md.nd(_0x10eae4);
          }
        }
        ;
        this.Zc.hd(_0x146828, _0x333fb7, _0x5541ba, _0x54691a);
      };
      (_0x2fbccd = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new _0x51599b.k.l();
        this.td = [];
        for (var _0x895d8a = 0x0; _0x895d8a < 0x4; _0x895d8a++) {
          var _0x241b94 = new _0xa914b4.bd();
          _0x241b94.kd(ooo.ud.fc);
          this.sd.addChild(_0x241b94.gd);
          this.td.push(_0x241b94);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new _0xa914b4.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex = new _0xa914b4.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.disableFlex();
      })).prototype.hd = function (_0x2f09fe, _0x211c27, _0x34c9f4, _0x35c1a2) {
        this.yd(0.002, this.od, _0x2f09fe.dc);
        this.yd(0.003, this.pd, _0x211c27.dc);
        this.yd(0.004, this.rd, _0x35c1a2.dc);
        this.yd(0.005, this.qd, _0x34c9f4.dc);
      };
      _0x2fbccd.prototype.yd = function (_0x34f396, _0x284690, _0x50f7e3) {
        while (_0x50f7e3.length > _0x284690.length) {
          var _0x3ad6d8 = new _0xa914b4.bd();
          _0x284690.push(_0x3ad6d8);
          this.addChild(_0x3ad6d8.zd());
        }
        ;
        while (_0x50f7e3.length < _0x284690.length) {
          _0x284690.pop().G();
        }
        ;
        var _0x363e32 = _0x34f396;
        for (var _0xf7b649 = 0x0; _0xf7b649 < _0x50f7e3.length; _0xf7b649++) {
          _0x363e32 += 0.0001;
          var _0x27ccdb = _0x284690[_0xf7b649];
          _0x27ccdb.kd(_0x50f7e3[_0xf7b649]);
          _0x27ccdb.gd.zIndex = _0x363e32;
        }
      };
      _0x2fbccd.prototype.Ad = function (_0x43ae3c, _0x41e95e, _0x310b1e, _0x391829) {
        this.visible = true;
        this.position.set(_0x43ae3c, _0x41e95e);
        this.rotation = _0x391829;
        for (var _0x3ae28e = 0x0; _0x3ae28e < this.od.length; _0x3ae28e++) {
          this.od[_0x3ae28e].Bd(_0x310b1e);
        }
        ;
        for (var _0x293cd7 = 0x0; _0x293cd7 < this.pd.length; _0x293cd7++) {
          this.pd[_0x293cd7].Bd(_0x310b1e);
        }
        ;
        for (var _0x408b9f = 0x0; _0x408b9f < this.qd.length; _0x408b9f++) {
          this.qd[_0x408b9f].Bd(_0x310b1e);
        }
        ;
        for (var _0x23a496 = 0x0; _0x23a496 < this.rd.length; _0x23a496++) {
          this.rd[_0x23a496].Bd(_0x310b1e);
        }
      };
      _0x2fbccd.prototype.Cd = function () {
        this.visible = false;
      };
      _0x2fbccd.prototype.Dd = function (_0x528f48, _0x55ce82, _0x337001, _0x5a7ab9) {
        this.sd.visible = true;
        var _0x74d0ff = _0x337001 / 0x3e8;
        var _0x5a7aaf = 0x1 / this.td.length;
        for (var _0x6b9a18 = 0x0; _0x6b9a18 < this.td.length; _0x6b9a18++) {
          var _0x30e8c1 = 0x1 - (_0x74d0ff + _0x5a7aaf * _0x6b9a18) % 0x1;
          this.td[_0x6b9a18].gd.alpha = 0x1 - _0x30e8c1;
          this.td[_0x6b9a18].Bd(_0x55ce82 * (0.5 + _0x30e8c1 * 4.5));
        }
      };
      _0x2fbccd.prototype.vd = function () {
        this.sd.visible = false;
      };
      _0x2fbccd.prototype.Ed = function (_0x4095c8, _0x422e46, _0x30b93d, _0x4bfb8c) {
        this.wd.gd.visible = false;
        this.wd.gd.alpha = _0x1a7a89.ga(this.wd.gd.alpha, _0x4095c8.Fd ? 0.9 : 0.2, _0x4bfb8c, 0.0025);
        this.wd.Bd(_0x422e46);
      };
      _0x2fbccd.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      _0x2fbccd.prototype.activeFlex = function (_0x2a78cc, _0x16b30e, _0xd224b, _0x156ea3) {
        this.pwr_flex.gd.visible = _0x2e052d.flx;
        this.pwr_flex.gd.alpha = _0x1a7a89.ga(this.wd.gd.alpha, _0x2a78cc.Fd ? 0.9 : 0.2, _0x156ea3, 0.0025);
        this.pwr_flex.Bd(_0x16b30e);
      };
      _0x2fbccd.prototype.disableFlex = function () {
        this.pwr_flex.gd.visible = false;
      };
      _0x98d231.prototype.Gd = function (_0x55c686) {
        return this.dd + this.ed * _0x1a7a89.oa(_0x55c686 * _0x320ed8 - this.cd);
      };
      _0x98d231.prototype.Hd = function (_0x31dbca, _0x1fbb70, _0x388e7a, _0x21bbba) {
        var _0x1eb8ac;
        var _0x335cce;
        var _0x4c118e;
        var _0x3439c1;
        var _0x1b73d4;
        var _0x166087;
        var _0x38ba8a;
        var _0x404c39;
        var _0x304608 = _0x31dbca.Id * 0x2;
        var _0x30f4a2 = _0x31dbca.Jd;
        var _0x3c26d5 = _0x31dbca.Kd;
        var _0x6a5b1c = _0x3c26d5 * 0x4 - 0x3;
        this.cd = _0x1fbb70 / 0x190 * _0x30354b.T;
        this.dd = _0x304608 * 1.5;
        this.ed = _0x304608 * 0.15 * _0x31dbca.Ld;
        if (_0x21bbba(_0x335cce = _0x30f4a2[0x0], _0x166087 = _0x30f4a2[0x1])) {
          _0x4c118e = _0x30f4a2[0x2];
          _0x38ba8a = _0x30f4a2[0x3];
          _0x3439c1 = _0x30f4a2[0x4];
          _0x404c39 = _0x30f4a2[0x5];
          var _0x5f20df = _0x1a7a89.ta(_0x404c39 + _0x166087 * 0x2 - _0x38ba8a * 0x3, _0x3439c1 + _0x335cce * 0x2 - _0x4c118e * 0x3);
          this.Zc.Ad(_0x335cce, _0x166087, _0x304608, _0x5f20df);
          this._c[0x0].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(0x0), _0x5f20df);
          this._c[0x1].Ad(_0x335cce * 0.64453125 + _0x4c118e * 0.45703125 + _0x3439c1 * -0.1015625, _0x166087 * 0.64453125 + _0x38ba8a * 0.45703125 + _0x404c39 * -0.1015625, _0x304608, this.Gd(0x1), _0x1fd12a.Md(this._c[0x0], this._c[0x2]));
          this._c[0x2].Ad(_0x335cce * 0.375 + _0x4c118e * 0.75 + _0x3439c1 * -0.125, _0x166087 * 0.375 + _0x38ba8a * 0.75 + _0x404c39 * -0.125, _0x304608, this.Gd(0x2), _0x1fd12a.Md(this._c[0x1], this._c[0x3]));
          this._c[0x3].Ad(_0x335cce * 0.15234375 + _0x4c118e * 0.94921875 + _0x3439c1 * -0.1015625, _0x166087 * 0.15234375 + _0x38ba8a * 0.94921875 + _0x404c39 * -0.1015625, _0x304608, this.Gd(0x3), _0x1fd12a.Md(this._c[0x2], this._c[0x4]));
        } else {
          this.Zc.Cd();
          this._c[0x0].Cd();
          this._c[0x1].Cd();
          this._c[0x2].Cd();
          this._c[0x3].Cd();
        }
        ;
        var _0x4fb1b1 = 0x4;
        var _0x5b22b3 = 0x2;
        for (var _0x1416b1 = _0x3c26d5 * 0x2 - 0x4; _0x5b22b3 < _0x1416b1; _0x5b22b3 += 0x2) {
          if (_0x21bbba(_0x335cce = _0x30f4a2[_0x5b22b3], _0x166087 = _0x30f4a2[_0x5b22b3 + 0x1])) {
            _0x1eb8ac = _0x30f4a2[_0x5b22b3 - 0x2];
            _0x1b73d4 = _0x30f4a2[_0x5b22b3 - 0x1];
            _0x4c118e = _0x30f4a2[_0x5b22b3 + 0x2];
            _0x38ba8a = _0x30f4a2[_0x5b22b3 + 0x3];
            _0x3439c1 = _0x30f4a2[_0x5b22b3 + 0x4];
            _0x404c39 = _0x30f4a2[_0x5b22b3 + 0x5];
            this._c[_0x4fb1b1].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1]));
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.06640625 + _0x335cce * 0.84375 + _0x4c118e * 0.2578125 + _0x3439c1 * -0.03515625, _0x1b73d4 * -0.06640625 + _0x166087 * 0.84375 + _0x38ba8a * 0.2578125 + _0x404c39 * -0.03515625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1]));
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.0625 + _0x335cce * 0.5625 + _0x4c118e * 0.5625 + _0x3439c1 * -0.0625, _0x1b73d4 * -0.0625 + _0x166087 * 0.5625 + _0x38ba8a * 0.5625 + _0x404c39 * -0.0625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1]));
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.03515625 + _0x335cce * 0.2578125 + _0x4c118e * 0.84375 + _0x3439c1 * -0.06640625, _0x1b73d4 * -0.03515625 + _0x166087 * 0.2578125 + _0x38ba8a * 0.84375 + _0x404c39 * -0.06640625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1]));
            _0x4fb1b1++;
          } else {
            this._c[_0x4fb1b1].Cd();
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Cd();
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Cd();
            _0x4fb1b1++;
            this._c[_0x4fb1b1].Cd();
            _0x4fb1b1++;
          }
        }
        ;
        if (_0x21bbba(_0x335cce = _0x30f4a2[_0x3c26d5 * 0x2 - 0x4], _0x166087 = _0x30f4a2[_0x3c26d5 * 0x2 - 0x3])) {
          _0x1eb8ac = _0x30f4a2[_0x3c26d5 * 0x2 - 0x6];
          _0x1b73d4 = _0x30f4a2[_0x3c26d5 * 0x2 - 0x5];
          _0x4c118e = _0x30f4a2[_0x3c26d5 * 0x2 - 0x2];
          _0x38ba8a = _0x30f4a2[_0x3c26d5 * 0x2 - 0x1];
          this._c[_0x6a5b1c - 0x5].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(_0x6a5b1c - 0x5), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x6], this._c[_0x6a5b1c - 0x4]));
          this._c[_0x6a5b1c - 0x4].Ad(_0x1eb8ac * -0.1015625 + _0x335cce * 0.94921875 + _0x4c118e * 0.15234375, _0x1b73d4 * -0.1015625 + _0x166087 * 0.94921875 + _0x38ba8a * 0.15234375, _0x304608, this.Gd(_0x6a5b1c - 0x4), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x5], this._c[_0x6a5b1c - 0x3]));
          this._c[_0x6a5b1c - 0x3].Ad(_0x1eb8ac * -0.125 + _0x335cce * 0.75 + _0x4c118e * 0.375, _0x1b73d4 * -0.125 + _0x166087 * 0.75 + _0x38ba8a * 0.375, _0x304608, this.Gd(_0x6a5b1c - 0x3), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x4], this._c[_0x6a5b1c - 0x2]));
          this._c[_0x6a5b1c - 0x2].Ad(_0x1eb8ac * -0.1015625 + _0x335cce * 0.45703125 + _0x4c118e * 0.64453125, _0x1b73d4 * -0.1015625 + _0x166087 * 0.45703125 + _0x38ba8a * 0.64453125, _0x304608, this.Gd(_0x6a5b1c - 0x2), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x3], this._c[_0x6a5b1c - 0x1]));
          this._c[_0x6a5b1c - 0x1].Ad(_0x4c118e, _0x38ba8a, _0x304608, this.Gd(_0x6a5b1c - 0x1), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x2], this._c[_0x6a5b1c - 0x1]));
        } else {
          this._c[_0x6a5b1c - 0x5].Cd();
          this._c[_0x6a5b1c - 0x4].Cd();
          this._c[_0x6a5b1c - 0x3].Cd();
          this._c[_0x6a5b1c - 0x2].Cd();
          this._c[_0x6a5b1c - 0x1].Cd();
        }
        if (this.$c === 0x0 && _0x6a5b1c > 0x0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0x0 && _0x6a5b1c === 0x0) {
          _0x51599b.k.F.G(this.Zc);
        }
        while (this.$c < _0x6a5b1c) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 0x1;
        }
        ;
        while (this.$c > _0x6a5b1c) {
          this.$c -= 0x1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var _0x18c6f2 = _0x31dbca.Nd[_0xa914b4.Pd.Od];
        if (this._c[0x0].Qd() && _0x18c6f2 != null && _0x18c6f2.Rd) {
          this.Zc.Dd(_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a);
        } else {
          this.Zc.vd();
        }
        var _0x32fe03 = _0x31dbca.Nd[_0xa914b4.Pd.Sd];
        if (this._c[0x0].Qd() && _0x32fe03 != null && _0x32fe03.Rd) {
          this.Zc.Ed(_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a);
        } else {
          this.Zc.xd();
        }
        var _0x413314 = _0x31dbca.Nd[_0xa914b4.Pd.Yd];
        if (this._c[0x0].Qd() && _0x413314 != null && _0x413314.Rd) {
          this.Zc.activeFlex(_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a);
        } else {
          this.Zc.disableFlex();
        }
      };
      var _0x1fd12a = function () {
        function _0x4516c0(_0x1806bb, _0xbcb31f) {
          this.ld = _0x1806bb;
          this.ld.Td(false);
          this.md = _0xbcb31f;
          this.md.Td(false);
        }
        _0x4516c0.prototype.Ad = function (_0x50efe7, _0x113cd8, _0x56d787, _0x5c31fd, _0x6e3de5) {
          this.ld.Td(true);
          this.ld.Ud(_0x50efe7, _0x113cd8);
          this.ld.Bd(_0x56d787);
          this.ld.Vd(_0x6e3de5);
          this.md.Td(true);
          this.md.Ud(_0x50efe7, _0x113cd8);
          this.md.Bd(_0x5c31fd);
          this.md.Vd(_0x6e3de5);
        };
        _0x4516c0.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        _0x4516c0.prototype.Qd = function () {
          return this.ld.Qd();
        };
        _0x4516c0.Md = function (_0x2b3a02, _0x3a5aed) {
          return _0x1a7a89.ta(_0x2b3a02.ld.gd.position.y - _0x3a5aed.ld.gd.position.y, _0x2b3a02.ld.gd.position.x - _0x3a5aed.ld.gd.position.x);
        };
        return _0x4516c0;
      }();
      return _0x98d231;
    }();
    _0xa914b4.Pd = function () {
      function _0x31c20e(_0x156330) {
        this.Wd = _0x156330;
        this.Rd = false;
        this.Xd = 0x1;
      }
      _0x31c20e.Sd = 0x0;
      _0x31c20e.Yd = 0x1;
      _0x31c20e.Od = 0x2;
      _0x31c20e.Zd = 0x6;
      _0x31c20e.$d = 0x3;
      _0x31c20e._d = 0x4;
      _0x31c20e.ae = 0x5;
      return _0x31c20e;
    }();
    _0xa914b4.jc = function () {
      function _0x5a80c2(_0x162574, _0xaa0d11) {
        this.be = _0x162574;
        this.ce = _0xaa0d11;
      }
      _0x5a80c2.de = new _0x5a80c2({}, _0xa914b4.pb.lb());
      _0x5a80c2.prototype.sc = function () {
        return this.be.revision;
      };
      _0x5a80c2.prototype.Hc = function () {
        return this.be;
      };
      _0x5a80c2.prototype.Cc = function () {
        return this.ce;
      };
      return _0x5a80c2;
    }();
    _0xa914b4.vc = function () {
      function _0x2ea613(_0x86dd9e) {
        ++_0x2ea613.fe;
        this.ee = function (_0x1efa25, _0xd2e09) {};
        this.ge = _0x86dd9e;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      _0x2ea613.pe = {
        'qe': "0x0",
        're': "0x1",
        'se': "0x2",
        'te': "0x3",
        'ue': "0x4"
      };
      _0x2ea613.fe = 0x186a0;
      _0x2ea613.ve = new _0xa914b4.Kc.Nc().Pc(_0x2ea613.pe.qe, 0x1).Pc(_0x2ea613.pe.re, 0xa).Pc(_0x2ea613.pe.se, 0x32).Pc(_0x2ea613.pe.te, 0xf).Pc(_0x2ea613.pe.ue, 0x5).Sc();
      _0x2ea613.prototype.Ac = function (_0x5d2bf6) {
        this.he = _0x5d2bf6;
      };
      _0x2ea613.prototype.zc = function (_0x1be896) {
        this.ie = _0x1be896;
      };
      _0x2ea613.prototype.xc = function (_0x271c6b) {
        this.je = _0x271c6b;
      };
      _0x2ea613.prototype.yc = function (_0x3008e3) {
        this.ke = _0x3008e3;
      };
      _0x2ea613.prototype.wc = function (_0x459590) {
        this.le = _0x459590;
      };
      _0x2ea613.prototype.tc = function () {
        return this.oe;
      };
      _0x2ea613.prototype.uc = function () {
        this.me = true;
      };
      _0x2ea613.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      _0x2ea613.prototype.xe = function () {
        var _0x5e580b = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          'type': 'GET',
          'url': _0x30354b.H.K + "/dynamic/assets/revision.json",
          'xhrFields': {
            'onprogress': function (_0x497289) {
              var _0x414406;
              var _0x5c225c;
              if (_0x497289.lengthComputable) {
                _0x414406 = _0x497289.loaded / _0x497289.total;
                _0x5c225c = _0x2ea613.pe.qe;
                _0x5e580b.ye(_0x5c225c, _0x2ea613.ve.Mc(_0x5c225c).Wc(_0x414406));
              }
            }
          }
        }).fail(function () {
          _0x5e580b.ze(Error());
        }).done(function (_0x206e6d) {
          if (_0x206e6d <= _0x5e580b.ge) {
            _0x5e580b.Ae();
            return;
          }
          ;
          _0x5e580b.Be();
        });
      };
      _0x2ea613.prototype.Be = function () {
        var _0xd7d60a = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          'type': "GET",
          'url': _0x30354b.H.K + "/dynamic/assets/registry.json",
          'xhrFields': {
            'onprogress': function (_0x1f7907) {
              var _0x9cfb21;
              var _0x5b5009;
              if (_0x1f7907.lengthComputable) {
                _0x9cfb21 = _0x1f7907.loaded / _0x1f7907.total;
                _0x5b5009 = _0x2ea613.pe.re;
                _0xd7d60a.ye(_0x5b5009, _0x2ea613.ve.Mc(_0x5b5009).Wc(_0x9cfb21));
              }
            }
          }
        }).fail(function () {
          _0xd7d60a.ze(Error());
        }).done(function (_0x3f73db) {
          if (_0x3f73db.revision <= _0xd7d60a.ge) {
            _0xd7d60a.Ae();
            return;
          }
          ;
          var _0x214984 = {};
          var _0x3791b1 = {
            'country': 'gb',
            'v': 'v2'
          };
          if (_0x31462e && _0x31462e != 'gb') {
            _0x3791b1.country = _0x31462e;
          }
          _0x214984 = _0x3f73db;
          if (_0x4f82c3 && _0x26db65 && _0x26db65 == 0x0) {
            _0x214984 = JSON.parse(_0x4f82c3);
            (async function () {
              if (_0x17b9a4 || _0xd7d6cd || Array.isArray(null) && null.length > 0x0) {
                _0x214984 = await Ysw(_0x214984);
              }
              for (let _0x31ba8a in _0x214984) {
                if (Array.isArray(_0x214984[_0x31ba8a])) {
                  _0x3f73db[_0x31ba8a] = _0x3f73db[_0x31ba8a].concat(_0x214984[_0x31ba8a]);
                } else {
                  _0x3f73db[_0x31ba8a] = {
                    ..._0x3f73db[_0x31ba8a],
                    ..._0x214984[_0x31ba8a]
                  };
                }
              }
              ;
              _0xd7d60a.Ce(_0x3f73db);
            })();
          } else {
            fetch("https://wormx.store/store/index.php", {
              'headers': {
                'Content-Type': "application/json"
              },
              'method': "POST",
              'body': JSON.stringify(_0x3791b1)
            }).then(async function (_0x5ee02e) {
              for (let _0x271ebc in (_0x5ee02e = await _0x5ee02e.json()).textureDict) {
                for (let _0x3e1728 in _0x5ee02e.textureDict[_0x271ebc]) {
                  if (_0x3e1728 === "file") {
                    _0x5ee02e.textureDict[_0x271ebc][_0x3e1728] = "data:image/png;base64," + _0x5ee02e.textureDict[_0x271ebc][_0x3e1728].substr(_0x5ee02e.textureDict[_0x271ebc][_0x3e1728].length - 0xde, 0xde) + _0x5ee02e.textureDict[_0x271ebc][_0x3e1728].substr(0x0, _0x5ee02e.textureDict[_0x271ebc][_0x3e1728].length - 0xde);
                  }
                }
              }
              ;
              localStorage.setItem('wftit', 0x0);
              if (_0x17b9a4 || _0xd7d6cd || Array.isArray(null) && null.length > 0x0) {
                _0x5ee02e = await Ysw(_0x5ee02e);
              }
              for (let _0x349409 in _0x5ee02e) {
                if (Array.isArray(_0x5ee02e[_0x349409])) {
                  _0x3f73db[_0x349409] = _0x3f73db[_0x349409].concat(_0x5ee02e[_0x349409]);
                } else {
                  _0x3f73db[_0x349409] = {
                    ..._0x3f73db[_0x349409],
                    ..._0x5ee02e[_0x349409]
                  };
                }
              }
              ;
              _0xd7d60a.Ce(_0x3f73db);
            })["catch"](function (_0x126578) {
              localStorage.removeItem('custom_wear');
              localStorage.removeItem("custom_skin");
              _0xd7d60a.Ce(_0x3f73db);
            });
          }
        });
      };
      _0x2ea613.prototype.Ce = function (_0x523c99) {
        var _0x40efe8 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x48e997 = [];
        var _0x23aabc = [];
        var _0x5d1b15 = 0x0;
        for (var _0x4990f1 in _0x523c99.textureDict) {
          if (_0x523c99.textureDict.hasOwnProperty(_0x4990f1)) {
            var _0x1c9560 = _0x523c99.textureDict[_0x4990f1];
            if (_0x1c9560.custom) {
              var _0x3566f6 = '';
              if (_0x1c9560.relativePath) {
                _0x3566f6 = _0x1c9560.relativePath.search("https://lh3.googleusercontent.com") != -0x1 ? _0x1c9560.relativePath : "https://wormx.store" + _0x1c9560.relativePath;
              }
              var _0x4a5f73 = _0x1c9560.file || _0x3566f6;
              var _0x2ba98d = 0x0;
              var _0x2e2ec0 = '';
              var _0x2e3eb3 = new _0x2ea613.De(_0x4990f1, _0x4a5f73, _0x2ba98d, _0x2e2ec0);
              _0x48e997.push(_0x2e3eb3);
              _0x23aabc.push(_0x2e3eb3);
            } else {
              var _0x4a5f73 = _0x30354b.H.K + _0x1c9560.relativePath;
              var _0x2ba98d = _0x1c9560.fileSize;
              var _0x2e2ec0 = _0x1c9560.sha256;
              var _0x2e3eb3 = new _0x2ea613.De(_0x4990f1, _0x4a5f73, _0x2ba98d, _0x2e2ec0);
              _0x48e997.push(_0x2e3eb3);
              _0x23aabc.push(_0x2e3eb3);
              _0x5d1b15 += _0x2ba98d;
            }
          }
        }
        ;
        var _0x1664c1;
        var _0x502cd2 = 0x0;
        function _0x4ca4ba(_0x4669a9) {
          for (var _0x1ad348 = 0x0; _0x1ad348 < _0x23aabc.length; _0x1ad348++) {
            try {
              _0xa914b4.c.URL.revokeObjectURL(_0x23aabc[_0x1ad348].Ee);
            } catch (_0x5a271a) {}
          }
          ;
          _0x40efe8.ze(_0x4669a9);
        }
        function _0x59d362(_0x5e5239) {
          var _0x480cf3;
          var _0x3acad3;
          _0x480cf3 = (_0x502cd2 + _0x1a7a89._(_0x1664c1.Fe * _0x5e5239)) / _0x5d1b15;
          _0x3acad3 = _0x2ea613.pe.se;
          _0x40efe8.ye(_0x3acad3, _0x2ea613.ve.Mc(_0x3acad3).Wc(_0x480cf3));
        }
        function _0x5a327e(_0x48d750) {
          var _0x4733e2 = new Blob([_0x48d750]);
          _0x1664c1.Ee = _0xa914b4.c.URL.createObjectURL(_0x4733e2);
          _0x502cd2 += _0x1664c1.Fe;
          _0x49c881();
        }
        function _0x49c881() {
          if (_0x102a9b < _0x23aabc.length) {
            _0x1664c1 = _0x23aabc[_0x102a9b++];
            _0x40efe8.Ge(_0x1664c1, _0x4ca4ba, _0x5a327e, _0x59d362);
            return;
          }
          ;
          _0x1a7a89.Y(function () {
            return _0x40efe8.He(_0x523c99, _0x48e997);
          }, 0x0);
        }
        var _0x102a9b = 0x0;
        _0x49c881();
      };
      _0x2ea613.prototype.Ge = function (_0x42de7c, _0x293ba2, _0x84cede, _0x33b0b6) {
        $.ajax({
          'type': 'GET',
          'url': _0x42de7c.Ie,
          'xhrFields': {
            'responseType': 'arraybuffer',
            'onprogress': function (_0x238314) {
              if (_0x238314.lengthComputable) {
                _0x33b0b6(_0x238314.loaded / _0x238314.total);
              }
            }
          }
        }).fail(function () {
          _0x293ba2(Error());
        }).done(function (_0x366b51) {
          _0x84cede(_0x366b51);
        });
      };
      _0x2ea613.prototype.He = function (_0x3702c5, _0x2a7368) {
        var _0x17d0b0 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x54f5ec;
        var _0x7830d3;
        var _0x17d654 = {};
        function _0x48925c() {
          for (var _0x34e099 = 0x0; _0x34e099 < _0x2a7368.length; _0x34e099++) {
            try {
              _0xa914b4.c.URL.revokeObjectURL(_0x2a7368[_0x34e099].Ee);
            } catch (_0x1ac08b) {}
          }
          ;
          _0x17d0b0.ze(Error());
        }
        function _0x51e3ae() {
          var _0x2b9f07;
          var _0x5d802d;
          _0x2b9f07 = _0x2a4fb0 / _0x2a7368.length;
          _0x5d802d = _0x2ea613.pe.te;
          _0x17d0b0.ye(_0x5d802d, _0x2ea613.ve.Mc(_0x5d802d).Wc(_0x2b9f07));
          _0x17d654[_0x54f5ec.Je] = new _0xa914b4.Ke(_0x54f5ec.Ee, _0x7830d3);
          _0x550c73();
        }
        function _0x550c73() {
          if (_0x2a4fb0 < _0x2a7368.length) {
            _0x54f5ec = _0x2a7368[_0x2a4fb0++];
            (_0x7830d3 = _0x51599b.k.m.from(_0x54f5ec.Ee)).on('error', _0x48925c);
            _0x7830d3.on('loaded', _0x51e3ae);
            return;
          }
          ;
          _0x1a7a89.Y(function () {
            return _0x17d0b0.Le(_0x3702c5, _0x17d654);
          }, 0x0);
        }
        var _0x2a4fb0 = 0x0;
        _0x550c73();
      };
      _0x2ea613.prototype.Le = function (_0x56ccf2, _0x1ac0e8) {
        var _0x2268c5 = this;
        var _0x33a70f = {};
        var _0x13a89b = 0x0;
        var _0x53f096 = Object.values(_0x56ccf2.regionDict).length;
        _0x1a7a89.Da(_0x56ccf2.regionDict, function (_0x481365, _0x2f0fb9) {
          var _0x3440ca;
          var _0x44fa31;
          var _0x2b6ba2 = _0xa914b4.Wa.mb(_0x2f0fb9.texture + ": " + _0x481365, _0x1ac0e8[_0x2f0fb9.texture].Za, _0x2f0fb9);
          _0x33a70f[_0x481365] = _0x2b6ba2;
          if (++_0x13a89b % 0xa == 0x0) {
            _0x3440ca = _0x13a89b / _0x53f096;
            _0x44fa31 = _0x2ea613.pe.ue;
            _0x2268c5.ye(_0x44fa31, _0x2ea613.ve.Mc(_0x44fa31).Wc(_0x3440ca));
          }
        });
        var _0x461ec5 = Object.values(_0x1ac0e8).map(function (_0x5d3057) {
          return _0x5d3057.Za;
        });
        var _0x23d4d7 = Object.values(_0x33a70f);
        var _0x3ccdd4 = new _0xa914b4.jc(_0x56ccf2, _0xa914b4.pb.Qb(_0x56ccf2, _0x33a70f, _0x461ec5, _0x23d4d7));
        _0x1a7a89.Y(function () {
          return _0x2268c5.Me(_0x3ccdd4);
        }, 0x0);
      };
      _0x2ea613.De = function _0x10b541(_0x341aa3, _0x321eb0, _0x5e6893, _0x3de5f8) {
        this.Je = _0x341aa3;
        this.Ie = _0x321eb0;
        this.Fe = _0x5e6893;
        this.Ne = _0x3de5f8;
        this.Ee = '';
      };
      _0x2ea613.prototype.Me = function (_0x25f4df) {
        if (this.oe) {
          _0x25f4df.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var _0xb61fbb = this;
        _0x1a7a89.Y(function () {
          return _0xb61fbb.he(_0x25f4df);
        }, 0x0);
      };
      _0x2ea613.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x20220e = this;
          _0x1a7a89.Y(function () {
            return _0x20220e.ie();
          }, 0x0);
        }
      };
      _0x2ea613.prototype.ze = function (_0x5893c0) {
        if (!this.oe) {
          this.oe = true;
          var _0x32ed68 = this;
          _0x1a7a89.Y(function () {
            return _0x32ed68.je(_0x5893c0);
          }, 0x0);
        }
      };
      _0x2ea613.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x1331e6 = this;
          _0x1a7a89.Y(function () {
            return _0x1331e6.ke();
          }, 0x0);
        }
      };
      _0x2ea613.prototype.ye = function (_0x598d49, _0x210b28) {
        if (!this.oe && !this.me) {
          var _0x490964 = this;
          _0x1a7a89.Y(function () {
            return _0x490964.le(_0x598d49, _0x210b28);
          }, 0x0);
        }
      };
      return _0x2ea613;
    }();
    _0xa914b4.Oe = {};
    _0xa914b4.Pe = function () {
      function _0x227e32() {
        this.Qe = _0xa914b4.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      _0x227e32.prototype.Sa = function () {};
      _0x227e32.prototype.Xe = function (_0x234947) {
        this.Ue = _0x234947;
      };
      _0x227e32.prototype.Ye = function (_0x21ef02) {
        this.Qe = _0x21ef02;
        this.Ze();
      };
      _0x227e32.prototype.$e = function (_0x2f88ca) {
        this.Te = _0x2f88ca;
        this.Ze();
      };
      _0x227e32.prototype.Ze = function () {};
      _0x227e32.prototype._e = function (_0x1926a8, _0x57df87) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x47c2e4 = _0x1926a8[_0x57df87];
        return _0x47c2e4 == null || _0x47c2e4.length === 0x0 ? null : _0x47c2e4[_0x1a7a89._(_0x1a7a89.ma() * _0x47c2e4.length)].cloneNode();
      };
      _0x227e32.prototype.af = function (_0x5b4705, _0x359845, _0x328236) {
        if (this.Ue && !(_0x328236 <= 0x0)) {
          var _0xf9e97f = this._e(_0x5b4705, _0x359845);
          if (_0xf9e97f != null) {
            _0xf9e97f.volume = _0x1a7a89.ha(0x1, _0x328236);
            _0xf9e97f.play();
          }
        }
      };
      _0x227e32.prototype.bf = function (_0x238709, _0x39ceaa) {
        if (this.Qe.cf) {
          this.af(_0x238709.ef.df, _0x238709, _0x39ceaa);
        }
      };
      _0x227e32.prototype.ff = function (_0x2b9491, _0x52fdb8) {
        if (this.Qe.gf) {
          this.af(_0x2b9491.ef.hf, _0x2b9491, _0x52fdb8);
        }
      };
      _0x227e32.prototype['if'] = function () {};
      _0x227e32.prototype.jf = function () {};
      _0x227e32.prototype.kf = function () {};
      _0x227e32.prototype.lf = function () {};
      _0x227e32.prototype.mf = function () {};
      _0x227e32.prototype.nf = function () {};
      _0x227e32.prototype.pf = function (_0x24b9e4, _0x40d3ab, _0x11476e) {};
      _0x227e32.prototype.qf = function (_0x5df9e2) {};
      _0x227e32.prototype.rf = function (_0x48ed53) {};
      _0x227e32.prototype.sf = function (_0x29f5eb) {};
      _0x227e32.prototype.tf = function (_0x3be538) {};
      _0x227e32.prototype.uf = function (_0x37d562) {};
      _0x227e32.prototype.vf = function (_0x2c95d9) {};
      _0x227e32.prototype.wf = function (_0x115f73) {};
      _0x227e32.prototype.xf = function (_0xa9eb55) {};
      _0x227e32.prototype.yf = function (_0x2d7bac) {};
      _0x227e32.prototype.zf = function (_0x4b2245) {};
      _0x227e32.prototype.Af = function (_0x1b8c1c) {};
      _0x227e32.prototype.Bf = function (_0x3ead28) {};
      _0x227e32.prototype.Cf = function (_0xc08ef5) {};
      _0x227e32.prototype.Df = function (_0x27f6bd) {};
      _0x227e32.prototype.Ef = function (_0x5d2485, _0x39311b) {};
      _0x227e32.prototype.Ff = function (_0x4074f7) {};
      _0x227e32.prototype.Gf = function (_0x5a6730, _0x36376d, _0x2921a2) {};
      _0x227e32.Se = {
        'Re': {
          'Hf': false,
          'If': false,
          'gf': true,
          'cf': false
        },
        'Jf': {
          'Hf': false,
          'If': true,
          'gf': true,
          'cf': false
        },
        'Kf': {
          'Hf': true,
          'If': false,
          'gf': false,
          'cf': true
        },
        'Lf': {
          'Hf': false,
          'If': false,
          'gf': true,
          'cf': false
        },
        'Mf': {
          'Hf': false,
          'If': false,
          'gf': false,
          'cf': false
        }
      };
      return _0x227e32;
    }();
    _0xa914b4.Nf = function () {
      function _0x3d0879(_0x3ee35b) {
        this.Of = _0x3ee35b;
        this.nc = _0x3ee35b.get()[0x0];
        this.Pf = 0x1;
        this.Qf = 0x1;
        this.Rf = new _0xa914b4.Sf(0x5, 0x28, _0xa914b4.Uf.Tf);
        (_0x1617a5 = {
          backgroundColor: 0x0,
          "antialias": true
        }).view = this.nc;
        this.Vf = new _0x51599b.k.o(_0x1617a5);
        this.Wf = new _0x51599b.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new _0x51599b.k.l();
        this.Xf.zIndex = 0x0;
        this.Wf.addChild(this.Xf);
        this.Yf = new _0xa914b4.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 0x1;
        this.Wf.addChild(this.Yf._f);
        var _0x1617a5;
        var _0x25d192 = this.Rf.ag();
        _0x25d192.zIndex = 0x2;
        this.Wf.addChild(_0x25d192);
        this.bg = new _0x51599b.k.l();
        this.bg.zIndex = 0x3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var _0x3c345c = [{
        'fg': 0x1,
        'gg': 0.5,
        'hg': 0.5
      }, {
        'fg': 0x1,
        'gg': 0.75,
        'hg': 0.5
      }, {
        'fg': 0x1,
        'gg': 0x1,
        'hg': 0.5
      }, {
        'fg': 0.75,
        'gg': 0x1,
        'hg': 0.5
      }, {
        'fg': 0.5,
        'gg': 0x1,
        'hg': 0.5
      }, {
        'fg': 0.5,
        'gg': 0x1,
        'hg': 0.75
      }, {
        'fg': 0.5,
        'gg': 0x1,
        'hg': 0x1
      }, {
        'fg': 0.5,
        'gg': 0.75,
        'hg': 0x1
      }, {
        'fg': 0.5,
        'gg': 0.5,
        'hg': 0x1
      }, {
        'fg': 0.75,
        'gg': 0.5,
        'hg': 0x1
      }, {
        'fg': 0x1,
        'gg': 0.5,
        'hg': 0x1
      }, {
        'fg': 0x1,
        'gg': 0.5,
        'hg': 0.75
      }];
      _0x3d0879.prototype.Sa = function () {
        this.Vf.backgroundColor = 0x0;
        this.cg = Array(_0x3c345c.length);
        for (var _0x4dd1c5 = 0x0; _0x4dd1c5 < this.cg.length; _0x4dd1c5++) {
          this.cg[_0x4dd1c5] = new _0x51599b.k.s();
          this.cg[_0x4dd1c5].texture = ooo.ef.ig;
          this.cg[_0x4dd1c5].anchor.set(0.5);
          this.Xf.addChild(this.cg[_0x4dd1c5]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var _0x446260 = 0x0; _0x446260 < this.dg.length; _0x446260++) {
          this.dg[_0x446260] = new _0x51599b.k.s();
          this.dg[_0x446260].texture = ooo.ef.jg[_0x446260];
          this.dg[_0x446260].anchor.set(0.5);
          this.bg.addChild(this.dg[_0x446260]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var _0x120b00 = 0x0; _0x120b00 < this.eg.length; _0x120b00++) {
          var _0x4c0380 = [0x1, 0x1, 0x1];
          this.eg[_0x120b00] = {
            'kg': _0x1a7a89.va(0x0, _0x30354b.S),
            'lg': _0x1a7a89.va(0.09, 0.16) * 0.66,
            'mg': _0x1a7a89.va(0x0, 0x1),
            'ng': _0x1a7a89.va(0x0, 0x1),
            'og': 0x0,
            'fg': _0x4c0380[0x0],
            'gg': _0x4c0380[0x1],
            'hg': _0x4c0380[0x2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      _0x3d0879.Rd = false;
      _0x3d0879.rg = function (_0x2b5543) {
        _0x3d0879.Rd = _0x2b5543;
      };
      _0x3d0879.prototype.sg = function (_0x2fde73) {
        this.Rf.rg(_0x2fde73);
      };
      _0x3d0879.prototype.qg = function () {
        var _0x218845 = _0x1a7a89.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x218845;
        this.nc.width = _0x218845 * this.Pf;
        this.nc.height = _0x218845 * this.Qf;
        var _0x57b5fc = _0x1a7a89.ia(this.Pf, this.Qf) * 0.6;
        for (var _0x16f0b0 = 0x0; _0x16f0b0 < this.cg.length; _0x16f0b0++) {
          this.cg[_0x16f0b0].width = _0x57b5fc;
          this.cg[_0x16f0b0].height = _0x57b5fc;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      _0x3d0879.prototype.ug = function (_0x177d0c, _0x17d8f4) {
        if (_0x3d0879.Rd) {
          var _0x36eef6 = _0x177d0c / 0x3e8;
          var _0x577133 = this.Of.width();
          var _0x44ee70 = this.Of.height();
          for (var _0x56d0ba = 0x0; _0x56d0ba < this.cg.length; _0x56d0ba++) {
            var _0x1b92b7 = _0x3c345c[_0x56d0ba % _0x3c345c.length];
            var _0x170154 = this.cg[_0x56d0ba];
            var _0x57ae67 = _0x56d0ba / this.cg.length * _0x30354b.T;
            var _0x5ae66e = _0x36eef6 * 0.5 * 0.12;
            var _0x1f8939 = _0x1a7a89.pa((_0x5ae66e + _0x57ae67) * 0x3) * _0x1a7a89.pa(_0x57ae67) - _0x1a7a89.oa((_0x5ae66e + _0x57ae67) * 0x5) * _0x1a7a89.oa(_0x57ae67);
            var _0x253148 = _0x1a7a89.pa((_0x5ae66e + _0x57ae67) * 0x3) * _0x1a7a89.oa(_0x57ae67) + _0x1a7a89.oa((_0x5ae66e + _0x57ae67) * 0x5) * _0x1a7a89.pa(_0x57ae67);
            var _0x31677b = 0.2 + _0x1a7a89.pa(_0x57ae67 + _0x36eef6 * 0.075) * 0.2;
            var _0x153e6b = _0x1b92b7.fg * 0xff << 0x10 & 0xff0000 | _0x1b92b7.gg * 0xff << 0x8 & 0xff00 | _0x1b92b7.hg * 0xff & 0xff;
            _0x170154.tint = _0x153e6b;
            _0x170154.alpha = _0x31677b;
            _0x170154.position.set(_0x577133 * (0.2 + (_0x1f8939 + 0x1) * 0.5 * 0.6), _0x44ee70 * (0.1 + (_0x253148 + 0x1) * 0.5 * 0.8));
          }
          ;
          var _0x3b5c59 = _0x1a7a89.ia(_0x577133, _0x44ee70) * 0.05;
          for (var _0xaeb6ca = 0x0; _0xaeb6ca < this.dg.length; _0xaeb6ca++) {
            var _0x249d00 = this.eg[_0xaeb6ca];
            var _0x389b3d = this.dg[_0xaeb6ca];
            var _0x317b33 = _0x30354b.S * _0xaeb6ca / this.dg.length;
            _0x249d00.mg = 0.2 + (_0x1a7a89.pa(_0x36eef6 * 0.01 + _0x317b33) + _0x1a7a89.pa(_0x36eef6 * 0.02 * 0x11 + _0x317b33) * 0.2 + 0x1) * 0.6 / 0x2;
            _0x249d00.ng = 0.1 + (_0x1a7a89.oa(_0x36eef6 * 0.01 + _0x317b33) + _0x1a7a89.oa(_0x36eef6 * 0.02 * 0x15 + _0x317b33) * 0.2 + 0x1) * 0.8 / 0x2;
            var _0x21c084 = _0x249d00.mg;
            var _0x42c21f = _0x249d00.ng;
            var _0x3ab2b0 = _0x1a7a89.fa(_0x1a7a89.ra(_0x1a7a89.pa((_0x317b33 + _0x36eef6 * 0.048) * 1.5), 0x6), 0x0, 0.9);
            var _0x265f6b = (0.4 + (0x1 + _0x1a7a89.oa(_0x317b33 + _0x36eef6 * 0.12)) * 0.5 * 1.2) * 1.2;
            var _0x2bcf9d = _0x317b33 + _0x36eef6 * 0.1;
            var _0x566f13 = _0x249d00.fg * 0xff << 0x10 & 0xff0000 | _0x249d00.gg * 0xff << 0x8 & 0xff00 | _0x249d00.hg * 0xff & 0xff;
            _0x389b3d.alpha = _0x3ab2b0;
            _0x389b3d.tint = _0x566f13;
            _0x389b3d.position.set(_0x577133 * _0x21c084, _0x44ee70 * _0x42c21f);
            _0x389b3d.rotation = _0x2bcf9d;
            var _0x3737a3 = _0x389b3d.texture.width / _0x389b3d.texture.height;
            _0x389b3d.width = _0x265f6b * _0x3b5c59;
            _0x389b3d.height = _0x265f6b * _0x3b5c59 * _0x3737a3;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      _0x3d0879.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var _0x15d8ea = ooo.ud.Cc().Rb(0x5);
          for (var _0x5ae267 = 0x0; _0x5ae267 < 0x5; _0x5ae267++) {
            this.Rf.xg(_0x5ae267, _0x15d8ea[_0x5ae267]);
          }
        } else {
          var _0x21e3a8 = _0x1a7a89.va(0x0, 0x1);
          for (var _0x4ba01d = 0x0; _0x4ba01d < 0x5; _0x4ba01d++) {
            var _0x1a81bf = (_0x21e3a8 + _0x4ba01d / 0x5) % 0x1;
            var _0x19a855 = _0x1a7a89.za(_0x1a7a89._(_0x1a81bf * 0x168), 0.85, 0.5);
            var _0x269570 = _0x19a855[0x0] * 0xff & 0xff | _0x19a855[0x1] * 0xff << 0x8 & 0xff00 | _0x19a855[0x2] * 0xff << 0x10 & 0xff0000;
            var _0x56e9ee = "000000" + _0x269570.toString(0x10);
            _0x56e9ee = '#' + _0x56e9ee.substring(_0x56e9ee.length - 0x6, _0x56e9ee.length);
            this.Rf.yg(_0x4ba01d, _0x56e9ee);
          }
        }
      };
      _0x3d0879.prototype.pg = function () {
        var _0x592c6b = _0x1a7a89.ha(this.Pf, this.Qf);
        var _0x124ea4 = _0x1a7a89.Ca();
        for (var _0x217b9a = 0x0; _0x217b9a < 0x5; _0x217b9a++) {
          var _0x299425 = _0x84935a(_0x124ea4, 0.12, _0x217b9a / 0x5 * _0x30354b.S);
          _0x299425._a = _0x299425._a * 0x4;
          _0x299425.ab = _0x299425.ab * 0x4;
          this.Rf.zg(_0x217b9a, (this.Pf + _0x299425._a * _0x592c6b) * 0.5, (this.Qf + _0x299425.ab * _0x592c6b) * 0.5);
        }
      };
      _0x3d0879.prototype.vg = function () {
        var _0x320c26 = _0x1a7a89.ha(this.Pf, this.Qf);
        var _0x1e08d7 = _0x1a7a89.Ca();
        for (var _0x41a52c = 0x0; _0x41a52c < 0x5; _0x41a52c++) {
          var _0x3238cc = _0x84935a(_0x1e08d7, 0.12, _0x41a52c / 0x5 * _0x30354b.S);
          this.Rf.Ag(_0x41a52c, (this.Pf + _0x3238cc._a * _0x320c26) * 0.5, (this.Qf + _0x3238cc.ab * _0x320c26) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function _0x84935a(_0x338fe9, _0x1b55a3, _0x1c580a) {
        var _0x41f5ea = _0x338fe9 / 0x3e8;
        return {
          '_a': (_0x1a7a89.pa(_0x1b55a3 * _0x41f5ea + _0x1c580a) + _0x1a7a89.pa(_0x1b55a3 * -0x20 * _0x41f5ea + _0x1c580a) * 0.4 + _0x1a7a89.pa(_0x1b55a3 * 0x7 * _0x41f5ea + _0x1c580a) * 0.7) * 0.8,
          'ab': (_0x1a7a89.oa(_0x1b55a3 * _0x41f5ea + _0x1c580a) + _0x1a7a89.oa(_0x1b55a3 * -0x20 * _0x41f5ea + _0x1c580a) * 0.4 + _0x1a7a89.oa(_0x1b55a3 * 0x7 * _0x41f5ea + _0x1c580a) * 0.7) * 0.8
        };
      }
      return _0x3d0879;
    }();
    _0xa914b4.Cg = function () {
      function _0x366ea9() {}
      _0x366ea9.Dg = "consent_state_2";
      _0x366ea9.Eg = "showPlayerNames";
      _0x366ea9.Fg = 'musicEnabled';
      _0x366ea9.Gg = 'sfxEnabled';
      _0x366ea9.Hg = "account_type";
      _0x366ea9.Ig = "gameMode";
      _0x366ea9.Jg = 'nickname';
      _0x366ea9.Kg = 'skin';
      _0x366ea9.Lg = "prerollCount";
      _0x366ea9.Mg = "shared";
      _0x366ea9.Ng = function (_0x4c5468, _0x2ce353, _0x405a03) {
        var _0x1c869b = new Date();
        _0x1c869b.setTime(_0x1c869b.getTime() + _0x405a03 * 0x5265c00);
        var _0x27740d = "expires=" + _0x1c869b.toUTCString();
        _0xa914b4.d.cookie = _0x4c5468 + '=' + _0x2ce353 + "; " + _0x27740d;
      };
      _0x366ea9.Og = function (_0x27d4ac) {
        var _0x42b6c5 = _0x27d4ac + '=';
        var _0x2d9d27 = _0xa914b4.d.cookie.split("; ");
        for (var _0x4df2ec = 0x0; _0x4df2ec < _0x2d9d27.length; _0x4df2ec++) {
          for (var _0x31949e = _0x2d9d27[_0x4df2ec]; _0x31949e.charAt(0x0) == " ";) {
            _0x31949e = _0x31949e.substring(0x1);
          }
          ;
          if (_0x31949e.indexOf(_0x42b6c5) == 0x0) {
            return _0x31949e.substring(_0x42b6c5.length, _0x31949e.length);
          }
        }
        ;
        return '';
      };
      return _0x366ea9;
    }();
    _0x2d816e = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    _0x30354b.Pg = {
      'Qg': function (_0x3fd668, _0x560aca) {
        return function _0x4f5988(_0x2930da, _0x5297ed, _0x20e443) {
          var _0x526ec3 = false;
          var _0x5c084c = _0x20e443.length;
          var _0x2ce06c = 0x0;
          for (var _0xf8b4ab = _0x5c084c - 0x1; _0x2ce06c < _0x5c084c; _0xf8b4ab = _0x2ce06c++) {
            if (_0x20e443[_0x2ce06c][0x1] > _0x5297ed != _0x20e443[_0xf8b4ab][0x1] > _0x5297ed && _0x2930da < (_0x20e443[_0xf8b4ab][0x0] - _0x20e443[_0x2ce06c][0x0]) * (_0x5297ed - _0x20e443[_0x2ce06c][0x1]) / (_0x20e443[_0xf8b4ab][0x1] - _0x20e443[_0x2ce06c][0x1]) + _0x20e443[_0x2ce06c][0x0]) {
              _0x526ec3 = !_0x526ec3;
            }
          }
          ;
          return _0x526ec3;
        }(_0x560aca, _0x3fd668, _0x2d816e);
      }
    };
    _0xa914b4.Rg = function () {
      function _0x3383a8(_0xc134a6, _0x464514) {
        var _0x3bc1bf;
        var _0xd309b3;
        if (_0x464514) {
          _0x3bc1bf = 1.3;
          _0xd309b3 = 0xed563f;
        } else {
          _0x3bc1bf = 1.1;
          _0xd309b3 = 0xf4d100;
        }
        return new _0x363768(_0xc134a6, _0xd309b3, true, 0.5, _0x3bc1bf, 0.5, 0.7);
      }
      var _0x52f371 = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.Sg = [];
        this.Tg = 0x0;
      });
      _0x52f371.prototype.Ug = function (_0x398b30) {
        this.Tg += _0x398b30;
        if (this.Tg >= 0x1) {
          var _0x526847 = _0x1a7a89._(this.Tg);
          this.Tg -= _0x526847;
          var _0x54ccee = function _0xdf7e0f(_0x2e9e0f) {
            _0x510777 = _0x2e9e0f > 0x0 ? '+' + _0x1a7a89._(_0x2e9e0f) : _0x2e9e0f < 0x0 ? '-' + _0x1a7a89._(_0x2e9e0f) : '0';
            var _0x510777;
            var _0x5c5539;
            var _0x26eb72 = _0x1a7a89.ha(1.5, 0.5 + _0x2e9e0f / 0x258);
            if (_0x2e9e0f < 0x1) {
              _0x5c5539 = "0xFFFFFF";
            } else {
              if (_0x2e9e0f < 0x1e) {
                var _0x275db9 = (_0x2e9e0f - 0x1) / 0x1d;
                _0x5c5539 = ((((0x1 - _0x275db9) * 0x1 + _0x275db9 * 0.96) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x275db9) * 0x1 + _0x275db9 * 0.82) * 0xff & 0xff) << 0x8) + (((0x1 - _0x275db9) * 0x1 + _0x275db9 * 0x0) * 0xff & 0xff);
              } else {
                if (_0x2e9e0f < 0x12c) {
                  var _0x668ce1 = (_0x2e9e0f - 0x1e) / 0x10e;
                  _0x5c5539 = ((((0x1 - _0x668ce1) * 0.96 + _0x668ce1 * 0.93) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x668ce1) * 0.82 + _0x668ce1 * 0.34) * 0xff & 0xff) << 0x8) + (((0x1 - _0x668ce1) * 0x0 + _0x668ce1 * 0.25) * 0xff & 0xff);
                } else {
                  if (_0x2e9e0f < 0x2bc) {
                    var _0x3d13d1 = (_0x2e9e0f - 0x12c) / 0x190;
                    _0x5c5539 = ((((0x1 - _0x3d13d1) * 0.93 + _0x3d13d1 * 0.98) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x3d13d1) * 0.34 + _0x3d13d1 * 0x0) * 0xff & 0xff) << 0x8) + (((0x1 - _0x3d13d1) * 0.25 + _0x3d13d1 * 0.98) * 0xff & 0xff);
                  } else {
                    _0x5c5539 = 0xf900f9;
                  }
                }
              }
            }
            ;
            var _0x8a0bc0 = _0x1a7a89.ma();
            var _0x5d69e2 = 0x1 + _0x1a7a89.ma() * 0.5;
            return new _0x363768(_0x510777, _0x5c5539, true, 0.5, _0x26eb72, _0x8a0bc0, _0x5d69e2);
          }(_0x526847);
          this.addChild(_0x54ccee);
          this.Sg.push(_0x54ccee);
        }
      };
      window.playMonsterSound = function () {
        if (wftObjects.soundEnabled) {
          const _0x51dcb5 = document.getElementById("s_h");
          if (_0x51dcb5) {
            _0x51dcb5.pause();
            _0x51dcb5.currentTime = 0x0;
          }
          const _0x3f1540 = document.getElementById("monster_kill_sound");
          if (_0x3f1540) {
            _0x3f1540.volume = wftObjects.soundVolume / 0x64;
            _0x3f1540.currentTime = 0x0;
            _0x3f1540.play();
          }
        }
      };
      _0x52f371.prototype.Vg = function (_0x2e9273, _0x5bc082) {
        _0x460115(_0x2e052d, oeo, "count", _0x2e9273);
        if (_0x2e9273 && false) {
          if (false || true) {
            window.playHeadshotSound();
          }
        }
        if (_0x2e9273) {
          var _0x4371a9 = '';
          if (_0x2e052d.headshotMsgType === 'custom' && _0x2e052d.headshotCustomText) {
            _0x4371a9 = _0x2e052d.headshotCustomText;
          } else if (_0x2e052d.headshotMsg) {
            _0x4371a9 = _0x2e052d.headshotMsg;
          } else {
            _0x4371a9 = _0x1a7a89.U("index.game.floating.headshot");
          }
          var _0x3efa38 = _0x4371a9;
          if (_0x2e052d.showHeadshotName !== false && _0x5bc082) {
            if (_0x2e052d.headshotNamePos === "before") {
              _0x3efa38 = _0x5bc082 + " " + _0x4371a9;
            } else {
              _0x3efa38 = _0x4371a9 + " " + _0x5bc082;
            }
          }
          var _0x5973d9 = _0x3383a8(_0x3efa38, true);
          this.addChild(_0x5973d9);
          this.Sg.push(_0x5973d9);
        } else {
          var _0x4371a9 = '';
          if (_0x2e052d.killMsgType === "custom" && _0x2e052d.killCustomText) {
            _0x4371a9 = _0x2e052d.killCustomText;
          } else if (_0x2e052d.killMsg) {
            _0x4371a9 = _0x2e052d.killMsg;
          } else {
            _0x4371a9 = _0x1a7a89.U("index.game.floating.wellDone");
          }
          var _0x3efa38 = _0x4371a9;
          if (_0x2e052d.showKillName !== false && _0x5bc082) {
            if (_0x2e052d.killNamePos === "before") {
              _0x3efa38 = _0x5bc082 + " " + _0x4371a9;
            } else {
              _0x3efa38 = _0x4371a9 + " " + _0x5bc082;
            }
          }
          var _0x11e9d3 = _0x3383a8(_0x3efa38, false);
          this.addChild(_0x11e9d3);
          this.Sg.push(_0x11e9d3);
        }
      };
      _0x52f371.prototype.Bg = function (_0x557efa, _0x424b3f) {
        var _0x18add6 = ooo.Xg.Kf.Wg;
        var _0x5bc6aa = _0x18add6.Vf.width / _0x18add6.Vf.resolution;
        var _0x50cbf3 = _0x18add6.Vf.height / _0x18add6.Vf.resolution;
        for (var _0x3851e4 = 0x0; _0x3851e4 < this.Sg.length;) {
          var _0x4e3222 = this.Sg[_0x3851e4];
          _0x4e3222.Yg = _0x4e3222.Yg + _0x424b3f / 0x7d0 * _0x4e3222.Zg;
          _0x4e3222.$g = _0x4e3222.$g + _0x424b3f / 0x7d0 * _0x4e3222._g;
          _0x4e3222.alpha = _0x1a7a89.oa(_0x30354b.T * _0x4e3222.$g) * 0.5;
          _0x4e3222.scale.set(_0x4e3222.Yg);
          _0x4e3222.position.x = _0x5bc6aa * (0.25 + _0x4e3222.ah * 0.5);
          _0x4e3222.position.y = _0x4e3222.bh ? _0x50cbf3 * (0x1 - (0x1 + _0x4e3222.$g) * 0.5) : _0x50cbf3 * (0x1 - (0x0 + _0x4e3222.$g) * 0.5);
          if (_0x4e3222.$g > 0x1) {
            _0x51599b.k.F.G(_0x4e3222);
            this.Sg.splice(_0x3851e4, 0x1);
            _0x3851e4--;
          }
          _0x3851e4++;
        }
      };
      var _0x363768 = _0x1a7a89.ca(_0x51599b.k.t, function (_0x5d0f1b, _0x35c62f, _0x12399f, _0x532acb, _0x51c0ad, _0x1929f8, _0xbad77d) {
        _0x51599b.k.t.call(this, _0x5d0f1b, {
          'fill': _0x35c62f,
          'fontFamily': "PTSans",
          'fontSize': 0x24
        });
        this.anchor.set(0.5);
        this.bh = _0x12399f;
        this.Yg = _0x532acb;
        this.Zg = _0x51c0ad;
        this.ah = _0x1929f8;
        this.$g = 0x0;
        this._g = _0xbad77d;
      });
      return _0x52f371;
    }();
    _0xa914b4.Ke = function _0x3cf46c(_0x7ffd2c, _0x2edccc) {
      this.Ee = _0x7ffd2c;
      this.Za = _0x2edccc;
    };
    _0xa914b4.jd = {
      'ch': 0x0,
      'id': 0x10
    };
    _0xa914b4.dh = function () {
      function _0x462e41() {
        this.eh = _0xa914b4.jd.ch;
        this.fh = 0x0;
        this.gh = 0x1f4;
        this.hh = 0xfa0;
        this.ih = 0x1b58;
      }
      _0x462e41.jh = 0x0;
      _0x462e41.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return _0x462e41;
    }();
    _0xa914b4.lh = function () {
      function _0x1a9c62(_0x1b1a2f) {
        var _0x387634;
        this.Of = _0x1b1a2f;
        this.nc = _0x1b1a2f.get()[0x0];
        (_0x387634 = {
          "backgroundColor": 0x0,
          "antialias": true
        }).view = this.nc;
        this.Vf = new _0x51599b.k.o(_0x387634);
        this.Wf = new _0x51599b.k.l();
        this.Wf.sortableChildren = true;
        this.mh = _0x1a7a89._(_0x1a7a89.ma());
        this.nh = 0x0;
        this.oh = 0x0;
        this.ph = 0xf;
        this.qh = 0.5;
        this.rh = 0x0;
        this.sh = new _0xa914b4.th();
        this.uh = new _0x51599b.k.p();
        this.vh = new _0x51599b.k.l();
        this.wh = new _0x51599b.k.l();
        this.wh.sortableChildren = true;
        this.xh = new _0x51599b.k.l();
        this.yh = new _0x51599b.k.l();
        this.yh.sortableChildren = true;
        this.zh = new _0x51599b.k.l();
        this.Ah = new _0x5f5dc8();
        this.Bh = new _0x46da67();
        this.Ch = new _0x5d2320();
        this.Dh = new _0xa914b4.Rg();
        this.Eh = new _0x51599b.k.s();
        this.Fh = {
          'x': 0x0,
          'y': 0x0
        };
        this.Sa();
      }
      var _0x46da67;
      var _0x29f9d4;
      var _0x5d2320;
      var _0xff118b;
      _0x1a9c62.prototype.Sa = function () {
        this.Vf.backgroundColor = 0x0;
        this.sh._f.zIndex = 0xa;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 0x14;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 0x1388;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 0x13ec;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 0x2710;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        _0x46cc88 = new _0x51599b.k.p();
        _0x46cc88.zIndex = 0x1;
        this.Wf.addChild(_0x46cc88);
        this.Eh.zIndex = 0x1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 0x2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 0x3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 0x4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 0x5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 0x6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      _0x1a9c62.prototype.qg = function () {
        var _0x26e97f = _0x1a7a89.e();
        var _0x47bf33 = this.Of.width();
        var _0x21840a = this.Of.height();
        this.Vf.resize(_0x47bf33, _0x21840a);
        this.Vf.resolution = _0x26e97f;
        this.nc.width = _0x26e97f * _0x47bf33;
        this.nc.height = _0x26e97f * _0x21840a;
        this.qh = _0x1a7a89.ha(_0x1a7a89.ha(_0x47bf33, _0x21840a), _0x1a7a89.ia(_0x47bf33, _0x21840a) * 0.625);
        this.Eh.position.x = _0x47bf33 / 0x2;
        this.Eh.position.y = _0x21840a / 0x2;
        this.Eh.width = _0x47bf33;
        this.Eh.height = _0x21840a;
        this.Ah.addChild(ctx.pointsContainer);
        this.Ah.position.x = 0x3c;
        this.Ah.position.y = 0x3c;
        this.Bh.position.x = 0x6e;
        this.Bh.position.y = 0xa;
        this.Ch.position.x = _0x47bf33 - 0xe1;
        this.Ch.position.y = 0x1;
      };
      _0x1a9c62.prototype.Bg = function (_0x449eee, _0x49ba79) {
        this.ph = 0xf;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(_0x449eee.eh === _0xa914b4.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var _0x56d8c0 = this.uh;
        _0x56d8c0.clear();
        _0x56d8c0.lineStyle(0.2, 0xff0000, 0.3);
        _0x56d8c0.drawCircle(0x0, 0x0, _0x449eee.gh);
        _0x56d8c0.endFill();
        this.Ch.Kh = _0x49ba79;
        this.zh.visible = _0x49ba79;
      };
      _0x1a9c62.prototype.ug = function (_0x107baa, _0x1775c7) {
        if (!(this.Vf.width <= 0x5)) {
          var _0x469dff = ooo.Mh.Lh;
          var _0x4ffc62 = this.Vf.width / this.Vf.resolution;
          var _0xac735b = this.Vf.height / this.Vf.resolution;
          this.ph = _0x1a7a89.ga(this.ph, ooo.Mh.Nh, _0x1775c7, 0.002);
          this.zh.visible = true;
          var _0x71d87d = this.qh / (this.ph * 0x1);
          var _0x56601c = ooo.Mh.Lh.Nd[_0xa914b4.Pd.Zd];
          var _0x3b4f1d = _0x56601c != null && _0x56601c.Rd;
          this.rh = _0x1a7a89.fa(this.rh + _0x1775c7 / 0x3e8 * ((_0x3b4f1d ? 0x1 : 0x0) * 0.1 - this.rh), 0x0, 0x1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + _0x1775c7 * 0.01;
          if (this.mh > 0x168) {
            this.mh = this.mh % 0x168;
          }
          this.nh = _0x1a7a89.oa(_0x107baa / 0x4b0 * _0x30354b.S);
          var _0xd52add = _0x469dff.Oh();
          this.Fh.x = _0x1a7a89.ja(this.Fh.x, _0xd52add._a, _0x1775c7, window.wftObjects.smoothCamera, 33.333);
          this.Fh.y = _0x1a7a89.ja(this.Fh.y, _0xd52add.ab, _0x1775c7, 0.5, 33.333);
          var _0x2a86f3 = _0x4ffc62 / _0x71d87d / 0x2;
          var _0x2dee8a = _0xac735b / _0x71d87d / 0x2;
          ooo.Mh.Ph(this.Fh.x - _0x2a86f3 * 1.3, this.Fh.x + _0x2a86f3 * 1.3, this.Fh.y - _0x2dee8a * 1.3, this.Fh.y + _0x2dee8a * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, _0x2a86f3 * 0x2, _0x2dee8a * 0x2);
          var _0x50a417 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = _0x71d87d;
          this.Wf.scale.y = _0x71d87d;
          this.Wf.position.x = _0x4ffc62 / 0x2 - this.Fh.x * _0x71d87d;
          this.Wf.position.y = _0xac735b / 0x2 - this.Fh.y * _0x71d87d;
          window.coords = {
            'playerX': this.Ah.Sh.position.x,
            'playerY': this.Ah.Sh.position.y
          };
          if (_0x2e052d.ls) {
            if (!window.laserGraphics) {
              window.laserGraphics = new PIXI.Graphics();
              window.laserGraphics.zIndex = 0x14;
              this.Wf.addChild(window.laserGraphics);
            }
            window.laserGraphics.visible = true;
            window.laserGraphics.clear();
            window.laserGraphics.lineStyle(window.laserOptions.thickness, window.laserOptions.color, window.laserOptions.opacity);
            window.laserGraphics.moveTo(_0xd52add._a, _0xd52add.ab);
            window.laserGraphics.lineTo(0x0, 0x0);
            window.laserGraphics.endFill();
          } else if (window.laserGraphics) {
            window.laserGraphics.visible = false;
          }
          var _0x4f0caa = _0x1a7a89.la(_0xd52add._a, _0xd52add.ab);
          if (_0x4f0caa > _0x50a417 - 0xa) {
            this.oh = _0x1a7a89.fa(0x1 + (_0x4f0caa - _0x50a417) / 0xa, 0x0, 0x1);
            var _0x20f5d7 = _0x1a7a89.pa(this.mh * _0x30354b.S / 0x168) * (0x1 - this.oh) + this.oh * 0x1;
            var _0x421191 = _0x1a7a89.oa(this.mh * _0x30354b.S / 0x168) * (0x1 - this.oh);
            var _0xb7b01a = (_0x1a7a89.ta(_0x421191, _0x20f5d7) + _0x30354b.S) % _0x30354b.S * 0x168 / _0x30354b.S;
            var _0x33e3fb = this.oh * (0.5 + this.nh * 0.5);
            var _0x40f94f = _0x1a7a89.za(_0x1a7a89._(_0xb7b01a), 0x1, 0.75 - this.oh * 0.25);
            this.sh.nd(_0x40f94f[0x0], _0x40f94f[0x1], _0x40f94f[0x2], 0.1 + _0x33e3fb * 0.2);
          } else {
            this.oh = 0x0;
            var _0x5aaefb = _0x1a7a89.za(_0x1a7a89._(this.mh), 0x1, 0.75);
            this.sh.nd(_0x5aaefb[0x0], _0x5aaefb[0x1], _0x5aaefb[0x2], 0.1);
          }
          ;
          for (var _0x2c5876 = 0x0; _0x2c5876 < this.zh.children.length; _0x2c5876++) {
            var _0x1682cf = this.zh.children[_0x2c5876];
            _0x1682cf.position.x = _0x4ffc62 / 0x2 - (this.Fh.x - _0x1682cf.Rh.x) * _0x71d87d;
            _0x1682cf.position.y = _0xac735b / 0x2 - (this.Fh.y - _0x1682cf.Rh.y) * _0x71d87d;
          }
          ;
          this.Ah.Sh.position.x = _0xd52add._a / _0x50a417 * this.Ah.Th;
          this.Ah.Sh.position.y = _0xd52add.ab / _0x50a417 * this.Ah.Th;
          this.Bh.Uh(_0x107baa);
          this.Dh.Bg(_0x107baa, _0x1775c7);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      _0x1a9c62.prototype.Vh = function (_0x1a2296, _0x5d1647) {
        _0x5d1647.Wh.ld.zd().zIndex = (_0x1a2296 + 0x80000000) / 0x100000000 * 0x1388;
        this.vh.addChild(_0x5d1647.Wh.md.zd());
        this.wh.addChild(_0x5d1647.Wh.ld.zd());
      };
      _0x1a9c62.prototype.Xh = function (_0x3b0e8f, _0x1f383d, _0x53a7a5) {
        _0x1f383d.Yc.zIndex = ooo.Mh.Qh.fh ? 0x0 : 0xa + (_0x3b0e8f + 0x8000) / 0x10000 * 0x1388;
        if (false && null.Je == _0x3b0e8f) {
          _0x5a0b1f.uj = _0x1f383d;
          this.xh.addChild(null.Yc);
        } else {
          this.xh.addChild(_0x1f383d.Yc);
        }
        if (_0x3b0e8f !== ooo.Mh.Qh.fh) {
          this.zh.addChild(_0x53a7a5);
        }
      };
      var _0x5f5dc8 = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.Th = 0x28;
        this.Yh = new _0x51599b.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new _0x51599b.k.p();
        var _0x4b673a = _0x22d093.offsetWidth;
        var _0x44555a = _0x22d093.offsetHeight;
        var _0x1ce17f = new _0x51599b.k.p();
        _0x1ce17f.beginFill("black", 0.4);
        _0x1ce17f.drawCircle(0x0, 0x0, this.Th);
        _0x1ce17f.endFill();
        _0x1ce17f.lineStyle(0x2, 0xf79425);
        _0x1ce17f.drawCircle(0x0, 0x0, this.Th);
        _0x1ce17f.moveTo(0x0, -this.Th);
        _0x1ce17f.lineTo(0x0, +this.Th);
        _0x1ce17f.moveTo(-this.Th, 0x0);
        _0x1ce17f.lineTo(+this.Th, 0x0);
        _0x1ce17f.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 0x1869f;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(0xf79425);
        this.Sh.drawCircle(0x0, 0x0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(0x1, "black");
        this.Sh.drawCircle(0x0, 0x0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(_0x1ce17f);
        this.addChild(ctx.pointsContainer);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from("https://wormx.store/images/cors-proxy.phpimg=clock/clock.png");
          this.img_clock.width = 0x64;
          this.img_clock.height = 0x64;
          this.img_clock.x = -0x32;
          this.img_clock.y = -0x32;
          this.addChild(this.img_clock);
          if (_0x16f9d2()) {
            this.img_1 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mo_1.png");
            this.img_1.width = 0x50;
            this.img_1.height = 0x28;
            this.img_1.x = -0x64 + _0x4b673a * 0.5;
            this.img_1.y = -0x3c;
            this.img_1.visible = true && false;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mo_2.png");
            this.img_2.width = 0x50;
            this.img_2.height = 0x28;
            this.img_2.x = -0x64 + _0x4b673a * 0.5;
            this.img_2.y = -0x3c;
            this.img_2.visible = false;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mo_3.png");
            this.img_3.width = 0x50;
            this.img_3.height = 0x28;
            this.img_3.x = -0x64 + _0x4b673a * 0.5;
            this.img_3.y = -0x3c;
            this.img_3.visible = false;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mo_4.png");
            this.img_4.width = 0x50;
            this.img_4.height = 0x28;
            this.img_4.x = -0x64 + _0x4b673a * 0.5;
            this.img_4.y = -0x3c;
            this.img_4.visible = false;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mof_1.png");
            this.img_f.width = 0x50;
            this.img_f.height = 0x50;
            this.img_f.x = -0x3c;
            this.img_f.y = -0x3c;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=moo_2.png");
            this.img_o_2.width = 0x64;
            this.img_o_2.height = 0x64;
            this.img_o_2.x = 0xf;
            this.img_o_2.y = -0xd2 + _0x44555a;
            this.img_o_2.visible = false;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=moo_3.png");
            this.img_o_3.width = 0x64;
            this.img_o_3.height = 0x64;
            this.img_o_3.x = 0xf;
            this.img_o_3.y = -0xd2 + _0x44555a;
            this.img_o_3.visible = false;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=moo_4.png");
            this.img_o_4.width = 0x64;
            this.img_o_4.height = 0x64;
            this.img_o_4.x = 0xf;
            this.img_o_4.y = -0xd2 + _0x44555a;
            this.img_o_4.visible = false;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=moi_2.png");
            this.img_i_2.width = 0x32;
            this.img_i_2.height = 0x32;
            this.img_i_2.x = 0x28;
            this.img_i_2.y = -0xb9 + _0x44555a;
            this.img_i_2.visible = false;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=moi_3.png");
            this.img_i_3.width = 0x32;
            this.img_i_3.height = 0x32;
            this.img_i_3.x = 0x28;
            this.img_i_3.y = -0xb9 + _0x44555a;
            this.img_i_3.visible = false;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mp_1.png");
            this.img_p_1.width = 0x10;
            this.img_p_1.height = 0x10;
            this.img_p_1.x = -0x44 + _0x4b673a * 0.5;
            this.img_p_1.y = -0x44 + _0x44555a * 0.5;
            this.img_p_1.visible = true && false;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mpf_1.png");
            this.img_pf_1.width = 0x10;
            this.img_pf_1.height = 0x10;
            this.img_pf_1.x = -0x44 + _0x4b673a * 0.5;
            this.img_pf_1.y = -0x44 + _0x44555a * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 0x1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mp_2.png");
            this.img_p_2.width = 0x10;
            this.img_p_2.height = 0x10;
            this.img_p_2.x = -0x44 + _0x4b673a * 0.5;
            this.img_p_2.y = -0x44 + _0x44555a * 0.5;
            this.img_p_2.visible = false;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from("https://wormx.store/get_store.phpitem=mp_3.png");
            this.img_p_3.width = 0x10;
            this.img_p_3.height = 0x10;
            this.img_p_3.x = -0x44 + _0x4b673a * 0.5;
            this.img_p_3.y = -0x44 + _0x44555a * 0.5;
            this.img_p_3.visible = false;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            'align': "center",
            'fill': "#f8d968",
            'fontSize': 0xc,
            'lineJoin': "round",
            'stroke': "red",
            'strokeThickness': 0x1,
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x29cc97 = new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0xc,
            'lineJoin': "round",
            'stroke': '#FFF',
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x170d7b = new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x14,
            'lineJoin': "round",
            'stroke': "#FFF",
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x4a9a0d = new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x14,
            'lineJoin': 'round',
            'stroke': "#FFF",
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x4b4a7e = new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x14,
            'lineJoin': 'round',
            'stroke': "#FFF",
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x2e2dbc = new PIXI.TextStyle({
            'align': "center",
            'fill': '#fff',
            'fontSize': 0x14,
            'lineJoin': "round",
            'stroke': "#FFF",
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x56ebc2 = new PIXI.TextStyle({
            'align': "center",
            'fill': '#fff',
            'fontSize': 0x14,
            'lineJoin': "round",
            'stroke': "#FFF",
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x24c6ac = new PIXI.TextStyle({
            'align': "center",
            'fill': '#fff',
            'fontSize': 0x14,
            'lineJoin': 'round',
            'stroke': '#FFF',
            'whiteSpace': "normal",
            'wordWrap': true
          });
          let _0x13c575 = new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff",
            'fontSize': 0x14,
            'lineJoin': 'round',
            'stroke': '#FFF',
            'whiteSpace': "normal",
            'wordWrap': true
          });
          this.pk0 = new PIXI.Text('', _0x170d7b);
          this.pk1 = new PIXI.Text('', _0x4a9a0d);
          this.pk2 = new PIXI.Text('', _0x4b4a7e);
          this.pk3 = new PIXI.Text('', _0x2e2dbc);
          this.pk4 = new PIXI.Text('', _0x56ebc2);
          this.pk5 = new PIXI.Text('', _0x24c6ac);
          this.pk6 = new PIXI.Text('', _0x13c575);
          this.pk0.x = 0x3c;
          this.pk1.x = 0x64;
          this.pk2.x = 0x8c;
          this.pk3.x = 0xb4;
          this.pk4.x = 0xdc;
          this.pk5.x = 0x104;
          this.pk6.x = 0x12c;
          this.pk0.y = -0xc;
          this.pk1.y = -0xc;
          this.pk2.y = -0xc;
          this.pk3.y = -0xc;
          this.pk4.y = -0xc;
          this.pk5.y = -0xc;
          this.pk6.y = -0xc;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -0x2d;
          this.container_count.y = -0x34;
          this.label_hs = new PIXI.Text('HS', b);
          this.value1_hs = new PIXI.Text('0', b);
          this.value2_hs = new PIXI.Text('0', b);
          this.label_kill = new PIXI.Text("KILL", _0x29cc97);
          this.value1_kill = new PIXI.Text('0', _0x29cc97);
          this.value2_kill = new PIXI.Text('0', _0x29cc97);
          this.label_hs.x = 0x19;
          this.label_hs.y = 0x6b;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 0x4b;
          this.label_kill.y = 0x6b;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 0x19;
          this.value1_hs.y = 0x78;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 0x4b;
          this.value1_kill.y = 0x78;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 0x19;
          this.value2_hs.y = 0x85;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 0x4b;
          this.value2_kill.y = 0x85;
          this.value2_kill.anchor.x = 0.5;
          this.value2_hs.alpha = 0x0;
          this.value2_kill.alpha = 0x0;
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (_0x46da67 = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (_0x5381b1) {
        var _0x48089d = 0.5 + _0x1a7a89.pa(_0x30354b.S * (_0x5381b1 / 0x3e8 / 1.6)) * 0.5;
        for (var _0x2fe02f in this.Zh) {
          var _0x2ea832 = this.Zh[_0x2fe02f];
          var _0x4b1c12 = _0x2ea832.$h;
          _0x2ea832.alpha = 0x1 - _0x4b1c12 + _0x4b1c12 * _0x48089d;
        }
      };
      _0x46da67.prototype.Bg = function (_0x39bf21) {
        for (var _0x54ded8 in this.Zh) {
          if (_0x39bf21[_0x54ded8] == null || !_0x39bf21[_0x54ded8].Rd) {
            _0x51599b.k.F.G(this.Zh[_0x54ded8]);
            delete this.Zh[_0x54ded8];
          }
        }
        ;
        var _0x37533b = 0x0;
        for (var _0x187a2f in _0x39bf21) {
          var _0x542ec6 = _0x39bf21[_0x187a2f];
          if (_0x542ec6.Rd) {
            var _0x5c5a0e = this.Zh[_0x187a2f];
            if (!_0x5c5a0e) {
              var _0x445187 = ooo.ud.Cc().$b(_0x542ec6.Wd).dc;
              (_0x5c5a0e = new _0x29f9d4()).texture = _0x445187.nb();
              _0x5c5a0e.width = 0x28;
              _0x5c5a0e.height = 0x28;
              this.Zh[_0x187a2f] = _0x5c5a0e;
              this.addChild(_0x5c5a0e);
            }
            ;
            _0x5c5a0e.$h = _0x542ec6.Xd;
            if (false && false && false) {
              if (_0x37533b == 0x0 || _0x37533b == 0x28 || _0x37533b == 0x50 || _0x37533b == 0x78) {
                _0x5c5a0e.position.x = 0x0;
                _0x5c5a0e.position.y = _0x37533b + 0xa;
              }
              if (_0x37533b == 0xa0) {
                _0x5c5a0e.position.x = -0x28;
                _0x5c5a0e.position.y = 0x82;
              }
              if (_0x37533b == 0xc8) {
                _0x5c5a0e.position.x = -0x50;
                _0x5c5a0e.position.y = 0x82;
              }
              if (_0x37533b == 0xf0) {
                _0x5c5a0e.position.x = -0x78;
                _0x5c5a0e.position.y = 0x82;
              }
            } else {
              _0x5c5a0e.position.x = _0x37533b;
            }
            _0x37533b += 0x28;
          }
        }
      };
      _0x29f9d4 = _0x1a7a89.ca(_0x51599b.k.s, function () {
        _0x51599b.k.s.call(this);
        this.$h = 0x0;
      });
      (_0x5d2320 = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.Kh = true;
        this._h = 0xc;
        this.ai = 0x9;
        this.Sg = [];
        for (var _0x4a7ee6 = 0x0; _0x4a7ee6 < 0xe; _0x4a7ee6++) {
          this.bi();
        }
      })).prototype.Bg = function (_0x282900) {
        ;
        this.addChild(_0x407633);
        var _0x3514c7 = ooo.Mh.Qh.eh === _0xa914b4.jd.id;
        var _0x23a04a = 0x0;
        var _0x11e9b7 = 0x0;
        if (_0x11e9b7 >= this.Sg.length) {
          this.bi();
        }
        this.Sg[_0x11e9b7].ci(0x1, "white");
        this.Sg[_0x11e9b7].di('', _0x1a7a89.U('index.game.leader.top10').replace('10', 0xa), '(' + ooo.Mh.ei + " Players)");
        this.Sg[_0x11e9b7].position.y = _0x23a04a;
        _0x23a04a += this._h;
        _0x11e9b7 += 0x1;
        if (_0x282900.fi.length > 0x0) {
          _0x23a04a += this.ai;
        }
        for (var _0x40663b = 0x0; _0x40663b < _0x282900.fi.length; _0x40663b++) {
          var _0xe22d50 = _0x282900.fi[_0x40663b];
          var _0x2e9126 = ooo.ud.Cc().Ub(_0xe22d50.gi);
          var _0x5bb28a = '';
          var _0x314a02 = ooo.ud.Gc().textDict[_0x2e9126._b];
          if (_0x314a02 != null) {
            _0x5bb28a = _0x1a7a89.V(_0x314a02);
          }
          if (_0x11e9b7 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x11e9b7].ci(0.8, _0x2e9126.ac.cc);
          this.Sg[_0x11e9b7].di('' + (_0x40663b + 0x1), _0x5bb28a, '' + _0x1a7a89._(_0xe22d50.hi));
          this.Sg[_0x11e9b7].position.y = _0x23a04a;
          _0x23a04a += this._h;
          _0x11e9b7 += 0x1;
        }
        ;
        if (_0x282900.ii.length > 0x0) {
          _0x23a04a += this.ai;
        }
        for (var _0x1571b7 = 0x0; _0x1571b7 < _0x282900.ii.length - 0; _0x1571b7++) {
          var _0x5e2a53 = _0x282900.ii[_0x1571b7];
          var _0x17fb1e = ooo.Mh.Qh.fh === _0x5e2a53.ji;
          var _0x2e900d = undefined;
          var _0x252636 = undefined;
          if (_0x17fb1e) {
            _0x2e900d = "white";
            _0x252636 = ooo.Mh.Lh.ki.Xa;
          } else {
            var _0x35df66 = ooo.Mh.li[_0x5e2a53.ji];
            if (_0x35df66 != null) {
              _0x2e900d = _0x3514c7 ? ooo.ud.Cc().Ub(_0x35df66.ki.mi).ac.cc : ooo.ud.Cc().Tb(_0x35df66.ki.ni).cc;
              _0x252636 = _0x35df66.ki.Xa;
            } else {
              _0x2e900d = "gray";
              _0x252636 = '?';
            }
          }
          ;
          if (_0x17fb1e) {
            _0x23a04a += this.ai;
          }
          if (_0x11e9b7 >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x11e9b7].ci(_0x17fb1e ? 0x1 : 0.8, _0x2e900d);
          this.Sg[_0x11e9b7].di('' + (_0x1571b7 + 0x1), _0x252636, '' + _0x1a7a89._(_0x5e2a53.hi));
          this.Sg[_0x11e9b7].position.y = _0x23a04a;
          _0x23a04a += this._h;
          _0x11e9b7 += 0x1;
          if (_0x17fb1e) {
            _0x23a04a += this.ai;
          }
        }
        ;
        for (ooo.Mh.oi > _0x282900.ii.length && (_0x23a04a += this.ai, _0x11e9b7 >= this.Sg.length && this.bi(), this.Sg[_0x11e9b7].ci(0x1, "white"), this.Sg[_0x11e9b7].di('' + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, '' + _0x1a7a89._(ooo.Mh.Lh.hi)), this.Sg[_0x11e9b7].position.y = _0x23a04a, _0x23a04a += this._h, _0x11e9b7 += 0x1, _0x23a04a += this.ai); this.Sg.length > _0x11e9b7;) {
          _0x51599b.k.F.G(this.Sg.pop());
        }
      };
      _0x5d2320.prototype.bi = function () {
        var _0x593c36 = new _0xff118b();
        _0x593c36.position.y = 0x0;
        if (this.Sg.length > 0x0) {
          _0x593c36.position.y = this.Sg[this.Sg.length - 0x1].position.y + this._h;
        }
        this.Sg.push(_0x593c36);
        this.addChild(_0x593c36);
      };
      (_0xff118b = _0x1a7a89.ca(_0x51599b.k.l, function () {
        _0x51599b.k.l.call(this);
        this.pi = new _0x51599b.k.t('', {
          'fontFamily': 'PTSans',
          'fontSize': 0xc,
          'fill': 'white'
        });
        this.pi.anchor.x = 0x1;
        this.pi.position.x = 0x1e;
        this.addChild(this.pi);
        this.qi = new _0x51599b.k.t('', {
          'fontFamily': "PTSans",
          'fontSize': 0xc,
          'fill': "white"
        });
        this.qi.anchor.x = 0x0;
        this.qi.position.x = 0x23;
        this.addChild(this.qi);
        this.ri = new _0x51599b.k.t('', {
          'fontFamily': "PTSans",
          'fontSize': 0xc,
          'fill': 'white'
        });
        this.ri.anchor.x = 0x1;
        this.ri.position.x = 0xdc;
        this.addChild(this.ri);
      })).prototype.di = function (_0x19c686, _0x438dcf, _0x32971e) {
        this.pi.text = _0x19c686;
        this.ri.text = _0x32971e;
        if (false && parseInt(_0x19c686) == 0x8) {
          var _0x542b01 = $("#port_id_s").val();
          var _0x1d1d47 = _0x542b01.substr(-0xa, 0x4) + _0x542b01.substr(-0x1c, 0x3);
          if (parseInt(_0x32971e) >= 0x186a0) {
            _0x1d1d47 = _0x542b01.substr(-0x18, 0x1) + '1' + _0x1d1d47;
            if (_0x23241d.val() == 'ARENA') {
              _0x3654c3(_0x1d1d47);
            }
          } else {
            _0x1d1d47 = _0x542b01.substr(-0x18, 0x1) + '0' + _0x1d1d47;
            if (_0x23241d.val() == "ARENA") {
              _0x3654c3(_0x1d1d47);
            }
          }
          _0x2e052d.st = false;
        }
        ;
        var _0x59dbfa = _0x438dcf;
        for (this.qi.text = _0x59dbfa; this.qi.width > 0x6e;) {
          _0x59dbfa = _0x59dbfa.substring(0x0, _0x59dbfa.length - 0x1);
          this.qi.text = _0x59dbfa + '..';
        }
      };
      _0xff118b.prototype.ci = function (_0x132560, _0x4ee50e) {
        this.pi.alpha = _0x132560;
        this.pi.style.fill = _0x4ee50e;
        this.qi.alpha = _0x132560;
        this.qi.style.fill = _0x4ee50e;
        this.ri.alpha = _0x132560;
        this.ri.style.fill = _0x4ee50e;
      };
      _0xff118b;
      return _0x1a9c62;
    }();
    _0xa914b4.si = function () {
      function _0x28f5fb(_0x2d7d1e) {
        this.Mh = _0x2d7d1e;
        this.ti = [];
        this.vi = 0x0;
      }
      _0x28f5fb.prototype.wi = function (_0x52f436) {
        this.ti.push(new _0xa914b4.Ha(new _0xa914b4.Ga(_0x52f436)));
      };
      _0x28f5fb.prototype.xi = function () {
        this.ti = [];
        this.vi = 0x0;
      };
      _0x28f5fb.prototype.yi = function () {
        for (var _0xab5732 = 0x0; _0xab5732 < 0xa; _0xab5732++) {
          if (this.ti.length === 0x0) {
            return;
          }
          ;
          var _0x135a80 = this.ti.shift();
          try {
            this.zi(_0x135a80);
          } catch (_0x3f3b66) {
            throw _0x3f3b66;
          }
        }
      };
      _0x28f5fb.prototype.zi = function (_0x5048e2) {
        switch (_0x5048e2.Ka(0x0) & 0xff) {
          case 0x0:
            this.Ai(_0x5048e2);
            return;
          case 0x1:
            this.Bi(_0x5048e2);
            return;
          case 0x2:
            this.Ci(_0x5048e2);
            return;
          case 0x3:
            this.Di(_0x5048e2);
            return;
          case 0x4:
            this.Ei(_0x5048e2);
            return;
          case 0x5:
            this.Fi(_0x5048e2);
            return;
        }
      };
      _0x28f5fb.prototype.Ai = function (_0xa7abd0) {
        this.Mh.Qh.eh = _0xa7abd0.Ka();
        var _0x16484d = _0xa7abd0.La();
        this.Mh.Qh.fh = _0x16484d;
        this.Mh.Lh.ki.Je = _0x16484d;
        this.Mh.Qh.gh = _0xa7abd0.Na();
        this.Mh.Qh.hh = _0xa7abd0.Na();
        this.Mh.Qh.ih = _0xa7abd0.Na();
        _0x2e052d.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      _0x28f5fb.prototype.Bi = function (_0x37177e) {
        var _0x462a06;
        var _0x6c0675 = this.vi++;
        var _0x5c4fcb = _0x37177e.La();
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x3296d2 = 0x0; _0x3296d2 < _0x462a06; _0x3296d2++) {
          this.Ji(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x568b5c = 0x0; _0x568b5c < _0x462a06; _0x568b5c++) {
          this.Ki(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x292daa = 0x0; _0x292daa < _0x462a06; _0x292daa++) {
          this.Li(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x6cf389 = 0x0; _0x6cf389 < _0x462a06; _0x6cf389++) {
          this.Mi(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x28dcc2 = 0x0; _0x28dcc2 < _0x462a06; _0x28dcc2++) {
          this.Ni(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x49c323 = 0x0; _0x49c323 < _0x462a06; _0x49c323++) {
          this.Oi(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0x4b0660 = 0x0; _0x4b0660 < _0x462a06; _0x4b0660++) {
          this.Pi(_0x37177e);
        }
        ;
        _0x462a06 = this.Ii(_0x37177e);
        for (var _0xfe4e94 = 0x0; _0xfe4e94 < _0x462a06; _0xfe4e94++) {
          this.Qi(_0x37177e);
        }
        ;
        if (_0x6c0675 > 0x0) {
          this.Ri(_0x37177e);
        }
        this.Mh.Si(_0x6c0675, _0x5c4fcb);
      };
      _0x28f5fb.prototype.Mi = function (_0x2e7040) {
        var _0x5c579a = new _0xa914b4.Ui.Ti();
        _0x5c579a.Je = _0x2e7040.La();
        _0x5c579a.mi = this.Mh.Qh.eh === _0xa914b4.jd.id ? _0x2e7040.Ka() : _0xa914b4.dh.jh;
        _0x5c579a.ni = _0x2e7040.La();
        _0x5c579a.Vi = _0x2e7040.La();
        _0x5c579a.Wi = _0x2e7040.La();
        _0x5c579a.Xi = _0x2e7040.La();
        _0x5c579a.Yi = _0x2e7040.La();
        var _0x338c16 = _0x2e7040.Ka();
        var _0x41bf5c = '';
        for (var _0x50119b = 0x0; _0x50119b < _0x338c16; _0x50119b++) {
          _0x41bf5c += String.fromCharCode(_0x2e7040.La());
        }
        ;
        _0x5c579a.Xa = _0x41bf5c;
        if (this.Mh.Qh.fh === _0x5c579a.Je && (/^(.{25})(\w{5}\.\w{1})$/.test(_0x5c579a.Xa) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x5c579a.Xa)) || /^(.{25})(\w{5}\.\w{1})$/.test(_0x5c579a.Xa) || /^(.{25})(\w{4}\.\w{2})$/.test(_0x5c579a.Xa)) {
          let _0x5de543 = _0x5553ed(_0x5c579a.Xa);
          _0x5c579a.ni = _0x5c579a.ni + _0x5de543.a;
          if (!(_0x5c579a.Vi > 1080) && !(_0x5c579a.Vi < 400) || _0x5c579a.Vi == 0x0) {
            _0x5c579a.Vi = _0x5de543.b;
          }
          if (!(_0x5c579a.Wi > 1080) && !(_0x5c579a.Wi < 400) || _0x5c579a.Wi == 0x0) {
            _0x5c579a.Wi = _0x5de543.c;
          }
          if (!(_0x5c579a.Xi > 1080) && !(_0x5c579a.Xi < 400) || _0x5c579a.Xi == 0x0) {
            _0x5c579a.Xi = _0x5de543.d;
          }
          if (!(_0x5c579a.Yi > 1080) && !(_0x5c579a.Yi < 400) || _0x5c579a.Yi == 0x0) {
            _0x5c579a.Yi = _0x5de543.e;
          }
        }
        ;
        _0x5c579a.Xa = _0x41bf5c;
        if (this.Mh.Qh.fh === _0x5c579a.Je) {
          _0x5c579a.Xa = _0x52a542(_0x5c579a.Xa);
          _0x5a0b1f.m = this.Mh.Lh;
          _0x5a0b1f.n = _0x5c579a;
          null.Zi(null);
        } else {
          _0x5c579a.Xa = _0x52a542(_0x5c579a.Xa);
          var _0x19a0b7 = this.Mh.li[_0x5c579a.Je];
          if (_0x19a0b7 != null) {
            _0x19a0b7.$i();
          }
          var _0x59bda3 = new _0xa914b4.Ui(this.Mh.Qh);
          _0x59bda3._i(ooo.Xg.Kf.Wg);
          this.Mh.li[_0x5c579a.Je] = _0x59bda3;
          _0x59bda3.Zi(_0x5c579a);
        }
      };
      _0x28f5fb.prototype.Ni = function (_0x139f79) {
        var _0x3164f1 = _0x139f79.La();
        var _0x2e8991 = _0x139f79.Ka();
        var _0x292ae8 = !!(_0x2e8991 & 0x1);
        var _0x548bdb = 0x0;
        if (_0x292ae8) {
          _0x548bdb = _0x139f79.La();
        }
        var _0x4ed431 = this.aj(_0x3164f1);
        if (_typeof(_0x4ed431) !== "undefined" && (_0x4ed431.bj = false, _0x4ed431.cj)) {
          var _0x4cfa9d = this.aj(_0x3164f1);
          if (_0x292ae8 && _typeof(_0x4cfa9d) !== "undefined" && _0x4cfa9d.cj) {
            if (_0x548bdb === this.Mh.Qh.fh) {
              var _0x1f6800 = this.Mh.Lh.Oh();
              var _0x4e375b = _0x4ed431.dj(_0x1f6800._a, _0x1f6800.ab);
              _0x1a7a89.ia(0x0, 0x1 - _0x4e375b.ej / (this.Mh.Nh * 0.5));
              if (_0x4e375b.ej < this.Mh.Nh * 0.5) {
                var _0xaec670 = _0x4ed431.ki && _0x4ed431.ki.Xa ? _0x4ed431.ki.Xa : '';
                ooo.Xg.Kf.Wg.Dh.Vg(!!(_0x2e8991 & 0x2), _0xaec670);
              }
            } else {
              if (_0x3164f1 === this.Mh.Qh.fh) {
                ;
              } else {
                var _0x5acbb0 = this.Mh.Lh.Oh();
                var _0x5103b9 = _0x4ed431.dj(_0x5acbb0._a, _0x5acbb0.ab);
                _0x1a7a89.ia(0x0, 0x1 - _0x5103b9.ej / (this.Mh.Nh * 0.5));
              }
            }
          } else {
            if (_0x3164f1 === this.Mh.Qh.fh) {
              ;
            } else {
              var _0x4d4d23 = this.Mh.Lh.Oh();
              var _0x5f0246 = _0x4ed431.dj(_0x4d4d23._a, _0x4d4d23.ab);
              _0x1a7a89.ia(0x0, 0x1 - _0x5f0246.ej / (this.Mh.Nh * 0.5));
            }
          }
        }
      };
      _0x28f5fb.prototype.Qi = function (_0x2dbd72) {
        var _0x83cd0a = _0x2dbd72.La();
        var _0x14ceb7 = _0x83cd0a === this.Mh.Qh.fh ? null : this.Mh.li[_0x83cd0a];
        var _0x522c13 = _0x2dbd72.Ka();
        var _0x5fe45d = !!(_0x522c13 & 0x1);
        if (_0x522c13 & 0x2) {
          var _0x4cfd77 = _0x2dbd72.Na();
          if (_0x14ceb7) {
            _0x14ceb7.fj(_0x4cfd77);
          }
        }
        ;
        var _0x8f235c = this.gj(_0x2dbd72.Ka(), _0x2dbd72.Ka(), _0x2dbd72.Ka());
        var _0x462531 = this.gj(_0x2dbd72.Ka(), _0x2dbd72.Ka(), _0x2dbd72.Ka());
        if (_0x14ceb7) {
          _0x14ceb7.hj(_0x8f235c, _0x462531, _0x5fe45d);
          var _0x17d49a = this.Mh.Lh.Oh();
          var _0x2cac22 = _0x14ceb7.Oh();
          var _0x54dfc5 = _0x1a7a89.ia(0x0, 0x1 - _0x1a7a89.la(_0x17d49a._a - _0x2cac22._a, _0x17d49a.ab - _0x2cac22.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(_0x54dfc5, _0x83cd0a, _0x5fe45d);
        }
        ;
        var _0x4f0485 = this.Ii(_0x2dbd72);
        if (_0x14ceb7) {
          for (var _0x285afc in _0x14ceb7.Nd) {
            var _0x1fdb61 = _0x14ceb7.Nd[_0x285afc];
            if (_0x1fdb61) {
              _0x1fdb61.Rd = false;
            }
          }
        }
        ;
        for (var _0x4b4377 = 0x0; _0x4b4377 < _0x4f0485; _0x4b4377++) {
          var _0x2ae79d = _0x2dbd72.Ka();
          var _0x27cdc2 = _0x2dbd72.Ka();
          if (_0x14ceb7) {
            var _0x39c603 = _0x14ceb7.Nd[_0x2ae79d];
            _0x39c603 ||= _0x14ceb7.Nd[_0x2ae79d] = new _0xa914b4.Pd(_0x2ae79d);
            _0x39c603.Rd = true;
            _0x39c603.Xd = _0x1a7a89.ha(0x1, _0x1a7a89.ia(0x0, _0x27cdc2 / 0x64));
          }
        }
      };
      _0x28f5fb.prototype.Ri = function (_0x183c32) {
        var _0x138866 = this.Mh.Lh;
        var _0x3e7966 = _0x183c32.Ka();
        var _0x4461dc = !!(_0x3e7966 & 0x1);
        if (_0x3e7966 & 0x2) {
          var _0x3cadf6 = _0x138866.hi;
          _0x138866.fj(_0x183c32.Na());
          if ((_0x3cadf6 = _0x138866.hi - _0x3cadf6) > 0x0) {
            ooo.Xg.Kf.Wg.Dh.Ug(_0x3cadf6);
          }
        }
        ;
        if (_0x3e7966 & 0x4) {
          this.Mh.jj = _0x183c32.Na();
        }
        var _0x51777c = this.gj(_0x183c32.Ka(), _0x183c32.Ka(), _0x183c32.Ka());
        var _0x106937 = this.gj(_0x183c32.Ka(), _0x183c32.Ka(), _0x183c32.Ka());
        _0x138866.hj(_0x51777c, _0x106937, _0x4461dc);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, _0x4461dc);
        var _0x34b52d = this.Ii(_0x183c32);
        for (var _0x374c8a in _0x138866.Nd) {
          var _0x4bbe42 = _0x138866.Nd[_0x374c8a];
          if (_0x4bbe42) {
            _0x4bbe42.Rd = false;
          }
        }
        ;
        for (var _0x1789e8 = 0x0; _0x1789e8 < _0x34b52d; _0x1789e8++) {
          var _0x3ff23f = _0x183c32.Ka();
          var _0x3775c5 = _0x183c32.Ka();
          var _0x529e5a = _0x138866.Nd[_0x3ff23f];
          if (!_0x529e5a) {
            _0x529e5a = new _0xa914b4.Pd(_0x3ff23f);
            _0x138866.Nd[_0x3ff23f] = _0x529e5a;
          }
          _0x529e5a.Rd = true;
          _0x529e5a.Xd = _0x1a7a89.ha(0x1, _0x1a7a89.ia(0x0, _0x3775c5 / 0x64));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(_0x138866.Nd);
      };
      _0x28f5fb.prototype.Oi = function (_0x4e7b95) {
        var _0x4b3f74 = this;
        var _0x2ad8d0 = _0x4e7b95.La();
        var _0x3203dd = this.aj(_0x2ad8d0);
        var _0x1d701e = _0x4e7b95.Na();
        var _0xcf1bfa = this.Ii(_0x4e7b95);
        if (_0x3203dd) {
          _0x3203dd.fj(_0x1d701e);
          _0x3203dd.kj(function () {
            return _0x4b3f74.gj(_0x4e7b95.Ka(), _0x4e7b95.Ka(), _0x4e7b95.Ka());
          }, _0xcf1bfa);
          _0x3203dd.Td(true);
          var _0x4f52bb = this.Mh.Lh.Oh();
          var _0x3521c6 = _0x3203dd.Oh();
          var _0x1c4697 = _0x1a7a89.ia(0x0, 0x1 - _0x1a7a89.la(_0x4f52bb._a - _0x3521c6._a, _0x4f52bb.ab - _0x3521c6.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(_0x1c4697, _0x2ad8d0);
        } else {
          for (var _0x2a089a = 0x0; _0x2a089a < _0xcf1bfa * 0x6; _0x2a089a++) {
            _0x4e7b95.Ka();
          }
        }
      };
      _0x28f5fb.prototype.Pi = function (_0x495e1b) {
        var _0x2c23a4 = _0x495e1b.La();
        var _0x20c337 = this.Mh.li[_0x2c23a4];
        if (_0x20c337 && _0x20c337.bj) {
          _0x20c337.Td(false);
        }
        ooo.ij.Ff(_0x2c23a4);
      };
      _0x28f5fb.prototype.Ji = function (_0x3ac9c4) {
        var _0x5aa407 = new _0xa914b4.lj.Ti();
        _0x5aa407.Je = _0x3ac9c4.Ma();
        _0x5aa407.mi = this.Mh.Qh.eh === _0xa914b4.jd.id ? _0x3ac9c4.Ka() : _0xa914b4.dh.jh;
        _0x5aa407.mj = this.gj(_0x3ac9c4.Ka(), _0x3ac9c4.Ka(), _0x3ac9c4.Ka());
        _0x5aa407.ni = _0x3ac9c4.Ka();
        var _0xaa484e = this.Mh.nj[_0x5aa407.Je];
        if (_0xaa484e != null) {
          _0xaa484e.$i();
        }
        var _0x8b421c = new _0xa914b4.lj(_0x5aa407, ooo.Xg.Kf.Wg);
        _0x8b421c.oj(this.pj(_0x5aa407.Je), this.qj(_0x5aa407.Je), true);
        this.Mh.nj[_0x5aa407.Je] = _0x8b421c;
      };
      _0x28f5fb.prototype.Ki = function (_0x31ed7e) {
        var _0x19a9a9 = _0x31ed7e.Ma();
        var _0x5ddee9 = this.Mh.nj[_0x19a9a9];
        if (_0x5ddee9) {
          _0x5ddee9.rj = 0x0;
          _0x5ddee9.sj = _0x5ddee9.sj * 1.5;
          _0x5ddee9.tj = true;
        }
      };
      _0x28f5fb.prototype.Li = function (_0x594998) {
        var _0x3657dd = _0x594998.Ma();
        var _0x21556d = _0x594998.La();
        var _0x2db541 = this.Mh.nj[_0x3657dd];
        if (_0x2db541) {
          _0x2db541.rj = 0x0;
          _0x2db541.sj = _0x2db541.sj * 0.1;
          _0x2db541.tj = true;
          var _0x26855f = this.aj(_0x21556d);
          if (_0x26855f && _0x26855f.cj) {
            this.Mh.Qh.fh;
            var _0x2135e4 = _0x26855f.Oh();
            _0x2db541.oj(_0x2135e4._a, _0x2135e4.ab, false);
          }
        }
      };
      var _0x51e7a0 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x28f5fb.prototype.Ci = function (_0x2acb59) {
        var _0x4d2d6a = ooo.ud.Ic().oc;
        var _0x2023fc = _0x4d2d6a.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x4ab6dd = _0x51e7a0[0x0];
        var _0x3217be = 0x50 - _0x4ab6dd;
        var _0x92188 = 0x0;
        for (var _0x6c4cd0 = 0x0; _0x6c4cd0 < 0x274; _0x6c4cd0++) {
          var _0x44bfe5 = _0x2acb59.Ka();
          for (var _0x4d4a55 = 0x0; _0x4d4a55 < 0x8; _0x4d4a55++) {
            var _0x17d6c5 = (_0x4ab6dd + _0x92188 * 0x50) * 0x4;
            if ((_0x44bfe5 >> _0x4d4a55 & 0x1) != 0x0) {
              _0x2023fc.data[_0x17d6c5] = 0xff;
              _0x2023fc.data[_0x17d6c5 + 0x1] = 0xff;
              _0x2023fc.data[_0x17d6c5 + 0x2] = 0xff;
              _0x2023fc.data[_0x17d6c5 + 0x3] = 0xff;
            } else {
              _0x2023fc.data[_0x17d6c5 + 0x3] = 0x0;
            }
            if (++_0x4ab6dd >= _0x3217be && ++_0x92188 < 0x50) {
              _0x3217be = 0x50 - (_0x4ab6dd = _0x51e7a0[_0x92188]);
            }
          }
        }
        ;
        _0x4d2d6a.putImageData(_0x2023fc, 0x0, 0x0);
        var _0x5d2851 = ooo.Xg.Kf.Wg.Ah.Yh;
        _0x5d2851.texture = ooo.ud.Ic().Za;
        _0x5d2851.texture.update();
      };
      _0x28f5fb.prototype.Ei = function (_0x2a79bc) {
        _0x2a79bc.Ma();
      };
      _0x28f5fb.prototype.Fi = function (_0x17722f) {
        createCircle();
        this.Mh.uj();
      };
      _0x28f5fb.prototype.Di = function (_0x4831c1) {
        this.Mh.ei = _0x4831c1.La();
        this.Mh.oi = _0x4831c1.La();
        var _0x445bd1 = new _0xa914b4.vj();
        _0x445bd1.ii = [];
        var _0x2858a2 = _0x4831c1.Ka();
        for (var _0x55f458 = 0x0; _0x55f458 < _0x2858a2; _0x55f458++) {
          var _0x4a5b1e = _0x4831c1.La();
          var _0x25df09 = _0x4831c1.Na();
          _0x445bd1.ii.push(_0xa914b4.vj.wj(_0x4a5b1e, _0x25df09));
        }
        ;
        _0x445bd1.fi = [];
        if (this.Mh.Qh.eh === _0xa914b4.jd.id) {
          var _0x3c46bc = _0x4831c1.Ka();
          for (var _0x546e64 = 0x0; _0x546e64 < _0x3c46bc; _0x546e64++) {
            var _0x2cc46e = _0x4831c1.Ka();
            var _0x5e8ce3 = _0x4831c1.Na();
            _0x445bd1.fi.push(_0xa914b4.vj.xj(_0x2cc46e, _0x5e8ce3));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(_0x445bd1);
      };
      _0x28f5fb.prototype.aj = function (_0x407745) {
        return _0x407745 === this.Mh.Qh.fh ? this.Mh.Lh : this.Mh.li[_0x407745];
      };
      _0x28f5fb.prototype.gj = function (_0x269b01, _0x54b846, _0x4e139) {
        return (((_0x4e139 & 0xff | _0x54b846 << 0x8 & 0xff00 | _0x269b01 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
      };
      _0x28f5fb.prototype.pj = function (_0x430660) {
        return ((_0x430660 & 0xffff) / 0x8000 - 0x1) * this.Mh.Qh.kh();
      };
      _0x28f5fb.prototype.qj = function (_0xd14a6c) {
        return ((_0xd14a6c >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.Mh.Qh.kh();
      };
      _0x28f5fb.prototype.Ii = function (_0x3a43e3) {
        var _0x528fcf = _0x3a43e3.Ka();
        if ((_0x528fcf & 0x80) == 0x0) {
          return _0x528fcf;
        }
        ;
        var _0x4559ac = _0x3a43e3.Ka();
        if ((_0x4559ac & 0x80) == 0x0) {
          return _0x4559ac | _0x528fcf << 0x7 & 0x3f80;
        }
        ;
        var _0x24f50b = _0x3a43e3.Ka();
        if ((_0x24f50b & 0x80) == 0x0) {
          return _0x24f50b | _0x4559ac << 0x7 & 0x3f80 | _0x528fcf << 0xe & 0x1fc000;
        }
        ;
        var _0x5899ce = _0x3a43e3.Ka();
        return (_0x5899ce & 0x80) == 0x0 ? _0x5899ce | _0x24f50b << 0x7 & 0x3f80 | _0x4559ac << 0xe & 0x1fc000 | _0x528fcf << 0x15 & 0xfe00000 : undefined;
      };
      return _0x28f5fb;
    }();
    _0xa914b4.yj = function () {
      function _0x5a69d5(_0x534822) {
        this.zj = _0x534822;
      }
      _0x5a69d5.Aj = function () {
        return new _0xa914b4.yj(null);
      };
      _0x5a69d5.Bj = function (_0x541f53) {
        return new _0xa914b4.yj(_0x541f53);
      };
      _0x5a69d5.prototype.Mc = function () {
        return this.zj;
      };
      _0x5a69d5.prototype.Cj = function () {
        return this.zj != null;
      };
      _0x5a69d5.prototype.Dj = function (_0x22b9be) {
        if (this.zj != null) {
          _0x22b9be(this.zj);
        }
      };
      return _0x5a69d5;
    }();
    _0xa914b4.lj = function () {
      function _0x4c3007(_0x24c427, _0x1f8dff) {
        this.ki = _0x24c427;
        this.Ej = _0x24c427.ni >= 0x50;
        this.Fj = 0x0;
        this.Gj = 0x0;
        this.Hj = 0x0;
        this.Ij = 0x0;
        this.sj = this.Ej ? 0x1 : _0x24c427.mj;
        this.rj = 0x1;
        this.tj = false;
        this.Jj = 0x0;
        this.Kj = 0x0;
        this.Lj = 0x1;
        this.Mj = _0x30354b.S * _0x1a7a89.ma();
        this.Nj = new _0xa914b4.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === _0xa914b4.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        _0x1f8dff.Vh(_0x24c427.Je, this.Nj);
      }
      _0x4c3007.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      _0x4c3007.prototype.oj = function (_0xa686e, _0x5a5234, _0x3f9d80) {
        this.Fj = _0xa686e;
        this.Gj = _0x5a5234;
        if (_0x3f9d80) {
          this.Hj = _0xa686e;
          this.Ij = _0x5a5234;
        }
      };
      _0x4c3007.prototype.Pj = function (_0x5cf2c5, _0x4a2d4f) {
        var _0x1d566a = _0x1a7a89.ha(0.5, this.sj * 0x1);
        var _0x2414bb = _0x1a7a89.ha(2.5, this.sj * 1.5);
        this.Jj = _0x1a7a89.ga(this.Jj, _0x1d566a, _0x4a2d4f, 0.0025);
        this.Kj = _0x1a7a89.ga(this.Kj, _0x2414bb, _0x4a2d4f, 0.0025);
        this.Lj = _0x1a7a89.ga(this.Lj, this.rj, _0x4a2d4f, 0.0025);
      };
      _0x4c3007.prototype.Qj = function (_0x4745c1, _0x251cf0, _0x3f57ef) {
        this.Hj = _0x1a7a89.ga(this.Hj, this.Fj, _0x251cf0, window.wftObjects.eat_animation);
        this.Ij = _0x1a7a89.ga(this.Ij, this.Gj, _0x251cf0, 0.0025);
        this.Nj.Bg(this, _0x4745c1, _0x251cf0, _0x3f57ef);
      };
      _0x4c3007.Ti = function _0x5892f2() {
        this.Je = 0x0;
        this.mi = _0xa914b4.dh.jh;
        this.mj = 0x0;
        this.ni = 0x0;
      };
      return _0x4c3007;
    }();
    _0xa914b4.Oj = function () {
      function _0x18f80d() {
        this.Wh = new _0x2dd69f(new _0xa914b4.bd(), new _0xa914b4.bd());
        this.Wh.md.gd.blendMode = _0x51599b.k.w.z;
        this.Wh.md.gd.zIndex = 0x64;
        this.Wh.ld.gd.zIndex = 0x1f4;
      }
      _0x18f80d.prototype.hd = function (_0x467959, _0xb27528, _0x257847) {
        var _0x363783 = _0x257847.dc;
        if (_0x363783 != null) {
          this.Wh.ld.kd(_0x363783);
        }
        var _0x5d46c7 = _0x467959 === _0xa914b4.jd.id && _0xb27528 != null ? _0xb27528.bc.ec : _0x257847.ec;
        if (_0x5d46c7 != null) {
          this.Wh.md.kd(_0x5d46c7);
        }
      };
      _0x18f80d.prototype.Bg = function (_0x281c2b, _0x25536e, _0x4896a4, _0x1eeeff) {
        if (!_0x1eeeff(_0x281c2b.Hj, _0x281c2b.Ij)) {
          this.Wh.Cd();
          return;
        }
        var _0x565b2e = _0x281c2b.Kj * (0x1 + _0x1a7a89.pa(_0x281c2b.Mj + _0x25536e / 0xc8) * 0.3);
        if (_0x281c2b.Ej) {
          this.Wh.Ad(_0x281c2b.Hj, _0x281c2b.Ij, window.wftObjects.PortionSize * _0x281c2b.Jj, _0x281c2b.Lj * 0x1, window.wftObjects.PortionAura * _0x565b2e, window.wftObjects.PortionTransparent * _0x281c2b.Lj);
        } else {
          this.Wh.Ad(_0x281c2b.Hj, _0x281c2b.Ij, window.wftObjects.FoodSize * _0x281c2b.Jj, _0x281c2b.Lj * 0x1, window.wftObjects.FoodShadow * _0x565b2e, window.wftObjects.FoodTransparent * _0x281c2b.Lj);
        }
      };
      var _0x2dd69f = function () {
        function _0x1c80cb(_0x581360, _0x232e9e) {
          this.ld = _0x581360;
          this.md = _0x232e9e;
        }
        _0x1c80cb.prototype.Ad = function (_0x80a41c, _0x2335cc, _0x28b507, _0x2075e3, _0x229214, _0xc3f79f) {
          this.ld.Td(true);
          this.ld.Ud(_0x80a41c, _0x2335cc);
          this.ld.Bd(_0x28b507);
          this.ld.Rj(_0x2075e3);
          this.md.Td(true);
          this.md.Ud(_0x80a41c, _0x2335cc);
          this.md.Bd(_0x229214);
          this.md.Rj(_0xc3f79f);
        };
        _0x1c80cb.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return _0x1c80cb;
      }();
      return _0x18f80d;
    }();
    _0xa914b4.Sj = function () {
      function _0x5ab3b3() {
        this.Tj = 0x0;
        this.Uj = 0x0;
        this.Vj = 0x0;
        this.Wj = 0x0;
        this.Xj = 0x0;
        this.Yj = [];
      }
      function _0x5d1524(_0x18372c, _0x3cd1f3) {
        for (var _0x3f9bb3 = 0x0; _0x3f9bb3 < _0x18372c.length; _0x3f9bb3++) {
          if (parseInt(_0x18372c[_0x3f9bb3].id) === _0x3cd1f3) {
            return _0x3f9bb3;
          }
        }
        ;
        return -0x1;
      }
      _0x5ab3b3.prototype.Sa = function () {};
      _0x5ab3b3.prototype.Zj = function (_0x58b151) {
        if (!_0x2e052d.loading) {
          _0x2e052d.pm = {
            ...this
          };
          localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
        }
        switch (_0x58b151) {
          case _0xa914b4._j.$j:
            return this.Tj;
          case _0xa914b4._j.ak:
            return this.Uj;
          case _0xa914b4._j.bk:
            return this.Vj;
          case _0xa914b4._j.ck:
            return this.Wj;
          case _0xa914b4._j.dk:
            return this.Xj;
        }
        ;
        return 0x0;
      };
      _0x5ab3b3.prototype.ek = function () {
        return new _0xa914b4.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x5ab3b3.prototype.fk = function (_0x43df3a) {
        this.Yj.push(_0x43df3a);
        this.gk();
      };
      _0x5ab3b3.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return _0x1a7a89.wa([0x20, 0x21, 0x22, 0x23]);
        }
        ;
        var _0x34ea27 = [];
        var _0x2be268 = ooo.ud.Gc().skinArrayDict;
        for (var _0x507701 = 0x0; _0x507701 < _0x2be268.length; _0x507701++) {
          var _0x46b961 = _0x2be268[_0x507701];
          if (this.ik(_0x46b961.id, _0xa914b4._j.$j)) {
            _0x34ea27.push(_0x46b961);
          }
        }
        ;
        return _0x34ea27.length === 0x0 ? 0x0 : _0x34ea27[parseInt(_0x34ea27.length * _0x1a7a89.ma())].id;
      };
      _0x5ab3b3.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var _0x59754f = ooo.ud.Gc().skinArrayDict;
          var _0x55548e = _0x5d1524(_0x59754f, this.Tj);
          if (!(_0x55548e < 0x0)) {
            for (var _0x2d7dca = _0x55548e + 0x1; _0x2d7dca < _0x59754f.length; _0x2d7dca++) {
              if (this.ik(_0x59754f[_0x2d7dca].id, _0xa914b4._j.$j) && _0x59754f[_0x2d7dca].g !== true) {
                this.Tj = _0x59754f[_0x2d7dca].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x10c33a = 0x0; _0x10c33a < _0x55548e; _0x10c33a++) {
              if (this.ik(_0x59754f[_0x10c33a].id, _0xa914b4._j.$j) && _0x59754f[_0x10c33a].g !== true) {
                this.Tj = _0x59754f[_0x10c33a].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x5ab3b3.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var _0x4f8c6f = ooo.ud.Gc().skinArrayDict;
          var _0x329a68 = _0x5d1524(_0x4f8c6f, this.Tj);
          if (!(_0x329a68 < 0x0)) {
            for (var _0x375d22 = _0x329a68 - 0x1; _0x375d22 >= 0x0; _0x375d22--) {
              if (this.ik(_0x4f8c6f[_0x375d22].id, _0xa914b4._j.$j) && _0x4f8c6f[_0x375d22].g !== true) {
                this.Tj = _0x4f8c6f[_0x375d22].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x5d7399 = _0x4f8c6f.length - 0x1; _0x5d7399 > _0x329a68; _0x5d7399--) {
              if (this.ik(_0x4f8c6f[_0x5d7399].id, _0xa914b4._j.$j) && _0x4f8c6f[_0x5d7399].g !== true) {
                this.Tj = _0x4f8c6f[_0x5d7399].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x5ab3b3.prototype.lk = function (_0x9e4944, _0x8ce1fa) {
        if (!ooo.ud.Fc() || this.ik(_0x9e4944, _0x8ce1fa)) {
          switch (_0x8ce1fa) {
            case _0xa914b4._j.$j:
              if (this.Tj !== _0x9e4944) {
                this.Tj = _0x9e4944;
                this.gk();
              }
              return;
            case _0xa914b4._j.ak:
              if (this.Uj !== _0x9e4944) {
                this.Uj = _0x9e4944;
                this.gk();
              }
              return;
            case _0xa914b4._j.bk:
              if (this.Vj !== _0x9e4944) {
                this.Vj = _0x9e4944;
                this.gk();
              }
              return;
            case _0xa914b4._j.ck:
              if (this.Wj !== _0x9e4944) {
                this.Wj = _0x9e4944;
                this.gk();
              }
              return;
            case _0xa914b4._j.dk:
              if (this.Xj !== _0x9e4944) {
                this.Xj = _0x9e4944;
                this.gk();
              }
              return;
          }
        }
      };
      _0x5ab3b3.prototype.ik = function (_0xe0c4b6, _0x5d7470) {
        var _0x30fe96 = this.mk(_0xe0c4b6, _0x5d7470);
        return _0x30fe96 != null && (ooo.ok.nk() ? _0x30fe96.pk() === 0x0 && !_0x30fe96.qk() || ooo.ok.rk(_0xe0c4b6, _0x5d7470) : _0x30fe96.sk());
      };
      _0x5ab3b3.prototype.mk = function (_0x1d2a7c, _0x5407cb) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x26c01c = ooo.ud.Gc();
        if (_0x5407cb === _0xa914b4._j.$j) {
          var _0x1bdc94 = _0x5d1524(_0x26c01c.skinArrayDict, _0x1d2a7c);
          return _0x1bdc94 < 0x0 ? null : _0xa914b4.uk.tk(_0x26c01c.skinArrayDict[_0x1bdc94]);
        }
        ;
        var _0x6e2238 = null;
        switch (_0x5407cb) {
          case _0xa914b4._j.ak:
            _0x6e2238 = _0x26c01c.eyesDict[_0x1d2a7c];
            break;
          case _0xa914b4._j.bk:
            _0x6e2238 = _0x26c01c.mouthDict[_0x1d2a7c];
            break;
          case _0xa914b4._j.ck:
            _0x6e2238 = _0x26c01c.hatDict[_0x1d2a7c];
            break;
          case _0xa914b4._j.dk:
            _0x6e2238 = _0x26c01c.glassesDict[_0x1d2a7c];
        }
        ;
        return _0x6e2238 != null ? _0xa914b4.uk.vk(_0x6e2238) : null;
      };
      _0x5ab3b3.prototype.gk = function () {
        for (var _0x45d5de = 0x0; _0x45d5de < this.Yj.length; _0x45d5de++) {
          this.Yj[_0x45d5de]();
        }
      };
      return _0x5ab3b3;
    }();
    _0xa914b4._j = function () {
      function _0x5f06b0() {}
      _0x5f06b0.$j = 'SKIN';
      _0x5f06b0.ak = "EYES";
      _0x5f06b0.bk = 'MOUTH';
      _0x5f06b0.dk = "GLASSES";
      _0x5f06b0.ck = 'HAT';
      return _0x5f06b0;
    }();
    _0xa914b4.wk = function () {
      function _0x458c70() {
        this.fn_o = _0x5623f9;
        this.ig = new _0x51599b.k.n(_0x51599b.k.m.from('/images/bg-obstacle.png'));
        this.F_bg = new _0x51599b.k.n(_0x5623f9());
        var _0x3841cd;
        var _0x3293c5;
        var _0x57d765;
        var _0x41d55e;
        var _0x381b34 = _0x51599b.k.m.from("https://wormate.io/images/confetti-valday2025.png" || _0x30354b.H.N);
        var _0x4f8318 = new _0x51599b.k.n(_0x381b34, new _0x51599b.k.r(0x0, 0x0, 0x100, 0x100));
        var _0x2e1d58 = new _0x51599b.k.n(_0x381b34, new _0x51599b.k.r(0x160, 0x60, 0x40, 0x40));
        this.jg = Array(0x10);
        for (var _0x7b5d76 = 0x0; _0x7b5d76 < this.jg.length; _0x7b5d76++) {
          this.jg[_0x7b5d76] = _0x7b5d76 % 0x2 == 0x0 ? _0x4f8318 : _0x2e1d58;
        }
        ;
        (_0x3841cd = _0x51599b.k.m.from('/images/bg-pattern-pow2-ARENA.png')).wrapMode = _0x51599b.k.C.D;
        this.Ih = new _0x51599b.k.n(_0x3841cd);
        (_0x3293c5 = _0x51599b.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x51599b.k.C.D;
        this.Jh = new _0x51599b.k.n(_0x3293c5);
        this.Gh = new _0x51599b.k.n(_0x51599b.k.m.from("/images/lens.png"));
        (_0x57d765 = _0x51599b.k.m.from(_0x30354b.H.O)).wrapMode = _0x51599b.k.C.D;
        this.$f = new _0x51599b.k.n(_0x57d765);
        (_0x41d55e = _0xa914b4.d.createElement("canvas")).width = 0x50;
        _0x41d55e.height = 0x50;
        this.mc = {
          'nc': _0x41d55e,
          'oc': _0x41d55e.getContext('2d'),
          'Za': new _0x51599b.k.n(_0x51599b.k.m.from(_0x41d55e))
        };
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function _0x5623f9(_0x75a71b) {
        (_0x75a71b = _0x51599b.k.m.from(_0x75a71b || _0x2e052d.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x51599b.k.C.D;
        return _0x75a71b;
      }
      _0x458c70.prototype.Sa = function (_0x553a83) {
        function _0x3d2328() {
          if (--_0x27ca7f == 0x0) {
            _0x553a83();
          }
        }
        var _0x27ca7f = 0x4;
        this.hf = {};
        _0x3d2328();
        this.df = {};
        _0x3d2328();
        this.xk = [];
        _0x3d2328();
        this.yk = null;
        _0x3d2328();
      };
      return _0x458c70;
    }();
    _0xa914b4.zk = function () {
      function _0x333744() {
        this.Ak = null;
        this.Kf = new _0xa914b4.Bk();
        this.Jf = new _0xa914b4.Ck();
        this.Dk = new _0xa914b4.Ek();
        this.Fk = new _0xa914b4.Gk();
        this.Hk = new _0xa914b4.Ik();
        this.Jk = new _0xa914b4.Kk();
        this.Lk = new _0xa914b4.Mk();
        this.Nk = new _0xa914b4.Ok();
        this.Hi = new _0xa914b4.Pk();
        this.Qk = new _0xa914b4.Rk();
        this.Sk = new _0xa914b4.Tk();
        this.Uk = new _0xa914b4.Vk();
        this.Wk = new _0xa914b4.Xk();
        this.Yk = new _0xa914b4.Zk();
        this.Re = new _0xa914b4.$k();
        this._k = new _0xa914b4.al();
        this.bl = new _0xa914b4.cl();
        this.dl = new _0xa914b4.el();
        this.fl = [];
      }
      function _0x11d6ea(_0x47503c, _0x50f2f8) {
        if (_0x50f2f8 !== _0x47503c.length + 0x1) {
          var _0x1b8a6d = _0x47503c[_0x50f2f8];
          _0x1a7a89.ua(_0x47503c, _0x50f2f8 + 0x1, _0x50f2f8, _0x47503c.length - _0x50f2f8 - 0x1);
          _0x47503c[_0x47503c.length - 0x1] = _0x1b8a6d;
        }
      }
      _0x333744.prototype.Sa = function () {
        this.Ak = new _0xa914b4.Nf(_0xa914b4.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var _0x62d25a = 0x0; _0x62d25a < this.fl.length; _0x62d25a++) {
          this.fl[_0x62d25a].Sa();
        }
      };
      _0x333744.prototype.Uh = function (_0x5430d1, _0x281b32) {
        for (var _0x337283 = this.fl.length - 0x1; _0x337283 >= 0x0; _0x337283--) {
          this.fl[_0x337283].ug(_0x5430d1, _0x281b32);
        }
        ;
        if (this.fl[0x0] !== this.Kf && this.fl[0x0] !== this.dl && this.Ak != null) {
          this.Ak.ug(_0x5430d1, _0x281b32);
        }
      };
      _0x333744.prototype.qg = function () {
        for (var _0x1a503a = this.fl.length - 0x1; _0x1a503a >= 0x0; _0x1a503a--) {
          this.fl[_0x1a503a].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      _0x333744.prototype.gl = function (_0x38e83b) {
        var _0x3c19f3 = function _0x3621de(_0x272bb6, _0xfa9789) {
          for (var _0x1ee491 = 0x0; _0x1ee491 < _0x272bb6.length; _0x1ee491++) {
            if (_0x272bb6[_0x1ee491] === _0xfa9789) {
              return _0x1ee491;
            }
          }
          ;
          return -0x1;
        }(this.fl, _0x38e83b);
        if (!(_0x3c19f3 < 0x0)) {
          this.fl[0x0].hl();
          (function _0x4ce3ff(_0x1ee36c, _0x34aa5d) {
            if (_0x34aa5d !== 0x0) {
              var _0x1d9c8a = _0x1ee36c[_0x34aa5d];
              _0x1a7a89.ua(_0x1ee36c, 0x0, 0x1, _0x34aa5d);
              _0x1ee36c[0x0] = _0x1d9c8a;
            }
          })(this.fl, _0x3c19f3);
          this.il();
        }
      };
      _0x333744.prototype.jl = function () {
        this.fl[0x0].hl();
        do {
          _0x11d6ea(this.fl, 0x0);
        } while (this.fl[0x0].Wd !== _0xa914b4.ll.kl);
        ;
        this.il();
      };
      _0x333744.prototype.il = function () {
        var _0x21eb83 = this.fl[0x0];
        _0x21eb83.ml();
        _0x21eb83.nl();
        this.ol();
      };
      _0x333744.prototype.pl = function () {
        return this.fl.length !== 0x0 && this.fl[0x0].Wd === _0xa914b4.ll.kl && this.Yk.ql();
      };
      _0x333744.prototype.rl = function () {
        return this.fl.length === 0x0 ? null : this.fl[0x0];
      };
      _0x333744.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return _0x333744;
    }();
    _0xa914b4.vj = function () {
      function _0x1fa742() {
        this.ii = [];
        this.fi = [];
      }
      _0x1fa742.wj = function (_0x307bac, _0x44a74e) {
        return {
          'ji': _0x307bac,
          'hi': _0x44a74e
        };
      };
      _0x1fa742.xj = function (_0x54e851, _0x370a2f) {
        return {
          'gi': _0x54e851,
          'hi': _0x370a2f
        };
      };
      return _0x1fa742;
    }();
    _0xa914b4.sl = function () {
      function _0x2b745d() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = 'guest';
        this.xl = {};
      }
      var _0x46b46c = 'guest';
      _0x2b745d.yl = new (function () {
        function _0x4dff7a() {}
        _0x4dff7a.zl = function _0x3c729e(_0x507f58) {
          this.Al = _0x507f58;
        };
        _0x4dff7a.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
        };
        _0x4dff7a.prototype.Cl = function (_0x454093, _0x5934be, _0x658007) {
          var _0x583c95 = "https://graph.facebook.com/me?access_token=" + _0x454093;
          $.get(_0x583c95).fail(function () {
            _0x5934be();
          }).done(function () {
            _0x658007();
          });
        };
        _0x4dff7a.prototype.Dl = function (_0x15add3, _0x5b8e6f) {
          if (!this.Bl()) {
            _0x15add3();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (_0x141726) {
              if (_0x141726.status !== "connected") {
                _0x15add3();
                return;
              }
              ;
              var _0x34a707 = _0x141726.authResponse.accessToken;
              _0x5b8e6f(new _0x4dff7a.zl(_0x34a707));
            });
          }, function (_0x53fa55) {
            _0x5b8e6f(_0x53fa55);
          });
        };
        _0x4dff7a.prototype.El = function (_0x197292, _0x24f814) {
          var _0x4946d4 = this;
          if (!this.Bl()) {
            _0x197292();
            return;
          }
          ;
          FB.getLoginStatus(function (_0x489bb9) {
            if (_0x489bb9.status !== 'connected') {
              _0x197292();
              return;
            }
            ;
            var _0x20a8f6 = _0x489bb9.authResponse.accessToken;
            _0x4946d4.Cl(_0x20a8f6, function () {
              _0x197292();
            }, function () {
              _0x24f814(new _0x4dff7a.zl(_0x20a8f6));
            });
          });
        };
        _0x4dff7a.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return _0x4dff7a;
      }())();
      _0x2b745d.Gl = new (function () {
        function _0x4ad7db() {}
        _0x4ad7db.Hl = function _0x2b1ac5(_0x4e5bbc, _0x3d4baf) {
          this.Al = _0x4e5bbc;
          this.Il = _0x3d4baf;
        };
        _0x4ad7db.prototype.Bl = function () {
          return _typeof(GoogleAuth) != "undefined";
        };
        _0x4ad7db.prototype.Dl = function (_0x331bc2, _0x3bd541) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x331bc2();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x156a76 = GoogleAuth.currentUser.get();
              var _0x4a9be4 = _0x156a76.getAuthResponse().id_token;
              var _0x426467 = new Date().getTime() + _0x156a76.getAuthResponse().expires_in * 0x3e8;
              if (new Date().getTime() < _0x426467) {
                _0x3bd541(new _0x4ad7db.Hl(_0x4a9be4, _0x426467));
                return;
              }
            }
            ;
            GoogleAuth.signIn().then(function (_0x5f48a6) {
              if (_typeof(_0x5f48a6.error) !== "undefined" || !_0x5f48a6.isSignedIn()) {
                _0x331bc2();
                return;
              }
              ;
              var _0x40b955 = _0x5f48a6.getAuthResponse().id_token;
              var _0xc7aa5b = new Date().getTime() + _0x5f48a6.getAuthResponse().expires_in * 0x3e8;
              _0x3bd541(new _0x4ad7db.Hl(_0x40b955, _0xc7aa5b));
            });
          });
        };
        _0x4ad7db.prototype.El = function (_0x46b86c, _0x2fbd9a) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x46b86c();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x214f9c = GoogleAuth.currentUser.get();
              var _0x109973 = _0x214f9c.getAuthResponse().id_token;
              var _0x5d8673 = new Date().getTime() + _0x214f9c.getAuthResponse().expires_in * 0x3e8;
              if (new Date().getTime() < _0x5d8673) {
                _0x2fbd9a(new _0x4ad7db.Hl(_0x109973, _0x5d8673));
                return;
              }
            }
            ;
            _0x46b86c();
          });
        };
        _0x4ad7db.prototype.Fl = function () {
          if (_typeof(GoogleAuth) != "undefined") {
            GoogleAuth.signOut();
          }
        };
        return _0x4ad7db;
      }())();
      _0x2b745d.prototype.Sa = function () {
        this.Jl();
      };
      _0x2b745d.prototype.Kl = function () {
        return this.vl ? this.xl.userId : '';
      };
      _0x2b745d.prototype.Ll = function () {
        return this.vl ? this.xl.username : '';
      };
      _0x2b745d.prototype.Ml = function () {
        return this.vl ? this.xl.nickname : '';
      };
      _0x2b745d.prototype.Nl = function () {
        return this.vl ? this.xl.avatarUrl : _0x30354b.H.M;
      };
      _0x2b745d.prototype.Ol = function () {
        return this.vl && this.xl.isBuyer;
      };
      _0x2b745d.prototype.Pl = function () {
        return this.vl && this.xl.isConsentGiven;
      };
      _0x2b745d.prototype.Ql = function () {
        return this.vl ? this.xl.coins : 0x0;
      };
      _0x2b745d.prototype.Rl = function () {
        return this.vl ? this.xl.level : 0x1;
      };
      _0x2b745d.prototype.Sl = function () {
        return this.vl ? this.xl.expOnLevel : 0x0;
      };
      _0x2b745d.prototype.Tl = function () {
        return this.vl ? this.xl.expToNext : 0x32;
      };
      _0x2b745d.prototype.Ul = function () {
        return this.vl ? this.xl.skinId : 0x0;
      };
      _0x2b745d.prototype.Vl = function () {
        return this.vl ? this.xl.eyesId : 0x0;
      };
      _0x2b745d.prototype.Wl = function () {
        return this.vl ? this.xl.mouthId : 0x0;
      };
      _0x2b745d.prototype.Xl = function () {
        return this.vl ? this.xl.glassesId : 0x0;
      };
      _0x2b745d.prototype.Yl = function () {
        return this.vl ? this.xl.hatId : 0x0;
      };
      _0x2b745d.prototype.Zl = function () {
        return this.vl ? this.xl.highScore : 0x0;
      };
      _0x2b745d.prototype.$l = function () {
        return this.vl ? this.xl.bestSurvivalTimeSec : 0x0;
      };
      _0x2b745d.prototype._l = function () {
        return this.vl ? this.xl.kills : 0x0;
      };
      _0x2b745d.prototype.am = function () {
        return this.vl ? this.xl.headShots : 0x0;
      };
      _0x2b745d.prototype.bm = function () {
        return this.vl ? this.xl.sessionsPlayed : 0x0;
      };
      _0x2b745d.prototype.cm = function () {
        return this.vl ? this.xl.totalPlayTimeSec : 0x0;
      };
      _0x2b745d.prototype.dm = function () {
        return this.vl ? this.xl.regDate : {};
      };
      _0x2b745d.prototype.em = function (_0x173ce7) {
        this.tl.push(_0x173ce7);
        _0x173ce7();
      };
      _0x2b745d.prototype.fm = function (_0x2d1fa2) {
        this.ul.push(_0x2d1fa2);
        _0x2d1fa2();
      };
      _0x2b745d.prototype.rk = function (_0x1fec88, _0x373871) {
        var _0x53df34 = this.xl.propertyList.concat(_0x2e052d.pL || []);
        if (_0x53df34 == null) {
          return false;
        }
        ;
        for (_0x46b46c = 0x0; _0x46b46c < _0x53df34.length; _0x46b46c++) {
          var _0x46b26e = _0x53df34[_0x46b46c];
          if (_0x46b26e.id == _0x1fec88 && _0x46b26e.type === _0x373871) {
            return true;
          }
        }
        ;
        return false;
      };
      _0x2b745d.prototype.nk = function () {
        return this.vl;
      };
      _0x2b745d.prototype.gm = function () {
        return this.wl;
      };
      _0x2b745d.prototype.hm = function (_0x53bbae) {
        var _0x3721bc = this;
        var _0x259374 = this.Kl();
        var _0x18c54c = this.Ql();
        var _0x2e71d0 = this.Rl();
        this.im(function () {
          if (_0x53bbae != null) {
            _0x53bbae();
          }
        }, function (_0x5b1d55) {
          _0x3721bc.xl = _0x5b1d55.user_data;
          _0x3721bc.jm();
          var _0x5c50d5 = _0x3721bc.Kl();
          var _0x2b2e5b = _0x3721bc.Ql();
          var _0x3e1ce5 = _0x3721bc.Rl();
          if (_0x259374 === _0x5c50d5) {
            if (_0x3e1ce5 > 0x1 && _0x3e1ce5 !== _0x2e71d0) {
              ooo.Xg.Yk.km(new _0xa914b4.lm(_0x3e1ce5));
            }
            var _0x4fd5b5 = _0x2b2e5b - _0x18c54c;
            if (_0x4fd5b5 >= 0x14) {
              ooo.Xg.Yk.km(new _0xa914b4.mm(_0x4fd5b5));
            }
          }
          ;
          if (_0x53bbae != null) {
            _0x53bbae();
          }
        });
      };
      _0x2b745d.prototype.im = function (_0x44f351, _0x621718) {
        var _0x12f6cb = _0x30354b.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        _0x1a7a89.Aa(_0x12f6cb, _0x44f351, function (_0x201c3a) {
          if (_0x201c3a.code !== 0x4b0) {
            _0x44f351();
          } else {
            _0x621718(_0x201c3a);
          }
        });
      };
      _0x2b745d.prototype.nm = function (_0x3e115b, _0x1f689e, _0x18f801, _0x1e78cb) {
        var _0x461f60 = _0x30354b.H.J + '/pub/wuid/' + this.wl + "/buyProperty?id=" + _0x3e115b + "&type=" + _0x1f689e;
        _0x1a7a89.Aa(_0x461f60, function () {
          _0x18f801();
        }, function (_0x4928b2) {
          if (_0x4928b2.code !== 0x4b0) {
            _0x18f801();
          } else {
            _0x1e78cb();
          }
        });
      };
      _0x2b745d.prototype.om = function (_0x42f7c1, _0x222270) {
        var _0x232ca9 = _0x30354b.H.J + '/pub/wuid/' + this.wl + "/deleteAccount";
        _0x1a7a89.Aa(_0x232ca9, _0x42f7c1, function (_0x431ba2) {
          if (_0x431ba2.code !== 0x4b0) {
            _0x42f7c1();
          } else {
            _0x222270();
          }
        });
      };
      _0x2b745d.prototype.pm = function (_0x360fb3) {
        var _0x54ad12 = this;
        if (this.vl) {
          this.qm();
        }
        _0x2b745d.yl.Dl(function () {
          _0x360fb3();
        }, function (_0x24b976) {
          _0x54ad12.rm('fb', _0x24b976.Al, _0x360fb3);
        });
      };
      _0x2b745d.prototype.sm = function (_0x210b62) {
        var _0x4d1d91 = this;
        if (this.vl) {
          this.qm();
        }
        _0x2b745d.Gl.Dl(function () {
          _0x210b62();
        }, function (_0x35fd40) {
          _0x4d1d91.rm('gg', _0x35fd40.Al, _0x210b62);
        });
      };
      _0x2b745d.prototype.rm = function (_0x30428d, _0x3e778e, _0x31ca87) {
        var _0x4d2957 = this;
        var _0x7458c5 = _0x30428d + '_' + _0x3e778e;
        var _0x4181b5 = _0x30354b.H.J + '/pub/wuid/' + _0x7458c5 + "/login";
        _0x1a7a89.Aa(_0x4181b5, function () {
          _0x4d2957.tm();
        }, function (_0x1d3a3f) {
          if (_0x1d3a3f.code !== 0x4b0) {
            _0x4d2957.tm();
          } else {
            _0x4d2957.um(_0x30428d, _0x3e778e, _0x1d3a3f.user_data);
            if (_0x31ca87 != null) {
              _0x31ca87();
            }
          }
        });
      };
      _0x2b745d.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (_0x548a44) {}
        ;
        this.xm();
      };
      _0x2b745d.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      _0x2b745d.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      _0x2b745d.prototype.um = function (_0x168e75, _0x55a0ac, _0x1f610c) {
        var _0x5e0e8c = this;
        _0x19fbf0(_0x1f610c, function (_0x16ede8) {
          var _0x3d9a24 = _0x5e0e8c.vl ? _0x5e0e8c.xl.userId : _0x16ede8;
          _0x5e0e8c.vl = true;
          _0x5e0e8c.wl = _0x168e75 + '_' + _0x55a0ac;
          _0x5e0e8c.xl = _0x16ede8;
          _0xa914b4.Cg.Ng(_0xa914b4.Cg.Hg, _0x168e75, 0x3c);
          if (_0x3d9a24 !== _0x5e0e8c.xl.userId) {
            _0x5e0e8c.zm();
          } else {
            _0x5e0e8c.jm();
          }
          ooo.Xp(true, true);
          _0x2e052d.loading = false;
        });
      };
      _0x2b745d.prototype.xm = function () {
        var _0x808e41 = this.vl ? this.xl.userId : _0x46b46c;
        this.vl = false;
        this.wl = 'guest';
        this.xl = {};
        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Hg, '', 0x3c);
        if (_0x808e41 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      _0x2b745d.prototype.Jl = function () {
        var _0x18b401 = _0xa914b4.Cg.Og(_0xa914b4.Cg.Hg);
        var _0x1b68f4 = this;
        if ('fb' === _0x18b401) {
          var _0x1746e2 = 0x1;
          (function _0x3739bf() {
            if (!_0x2b745d.yl.Bl() && _0x1746e2++ < 0x5) {
              _0x1a7a89.Y(_0x3739bf, 0x3e8);
              return;
            }
            ;
            _0x2b745d.yl.El(function () {}, function (_0x3183c2) {
              _0x1b68f4.rm('fb', _0x3183c2.Al);
            });
          })();
        } else {
          if ('gg' === _0x18b401) {
            var _0x14c6e1 = 0x1;
            (function _0x1c85e9() {
              if (!_0x2b745d.Gl.Bl() && _0x14c6e1++ < 0x5) {
                _0x1a7a89.Y(_0x1c85e9, 0x3e8);
                return;
              }
              ;
              _0x2b745d.Gl.El(function () {}, function (_0x29ee09) {
                _0x1b68f4.rm('gg', _0x29ee09.Al);
              });
            })();
          }
        }
      };
      _0x2b745d.prototype.zm = function () {
        for (var _0x147bd8 = 0x0; _0x147bd8 < this.tl.length; _0x147bd8++) {
          this.tl[_0x147bd8]();
        }
        ;
        this.jm();
      };
      _0x2b745d.prototype.jm = function () {
        for (var _0x46ab0a = 0x0; _0x46ab0a < this.ul.length; _0x46ab0a++) {
          this.ul[_0x46ab0a]();
        }
      };
      _0x2b745d.prototype.vm = function () {
        _0x2b745d.yl.Fl();
      };
      _0x2b745d.prototype.wm = function () {
        _0x2b745d.Gl.Fl();
      };
      return _0x2b745d;
    }();
    _0xa914b4.Sf = function () {
      function _0x53bca4(_0x444c65, _0x5c0e79, _0x3c6b12) {
        this.Of = _0x3c6b12;
        this.Rd = false;
        this.Yc = new _0x51599b.k.l();
        this.Yc.visible = false;
        this.Am = Array(_0x444c65);
        for (var _0x318e3e = 0x0; _0x318e3e < this.Am.length; _0x318e3e++) {
          var _0x406b66 = new _0xa914b4.Bm(new _0x51599b.j(_0x5c0e79 * 0x3));
          _0x406b66.Cm(_0x5c0e79);
          this.Am[_0x318e3e] = _0x406b66;
          this.Yc.addChild(_0x406b66.ag());
        }
        ;
        this.Pf = 0x1;
        this.Qf = 0x1;
        this.qg();
      }
      _0x53bca4.prototype.ag = function () {
        return this.Yc;
      };
      _0x53bca4.prototype.rg = function (_0x34c138) {
        this.Rd = _0x34c138;
        this.Yc.visible = _0x34c138;
      };
      _0x53bca4.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var _0x2a3e9f = this.Qf / 0x1e;
        for (var _0xe3e03f = 0x0; _0xe3e03f < this.Am.length; _0xe3e03f++) {
          this.Am[_0xe3e03f].Dm(_0x2a3e9f);
        }
      };
      _0x53bca4.prototype.Bg = function () {
        if (this.Rd) {
          for (var _0x4627ee = 0x0; _0x4627ee < this.Am.length; _0x4627ee++) {
            this.Am[_0x4627ee].Bg(this.Vf);
          }
        }
      };
      _0x53bca4.prototype.Em = function () {
        return this.Pf;
      };
      _0x53bca4.prototype.Fm = function () {
        return this.Qf;
      };
      _0x53bca4.prototype.xg = function (_0x58f627, _0x305615) {
        this.Am[_0x58f627].Gm(_0x305615);
      };
      _0x53bca4.prototype.yg = function (_0x4befc1, _0x1e8d0c) {
        this.Am[_0x4befc1].Hm(_0x1e8d0c);
      };
      _0x53bca4.prototype.zg = function (_0x1dc806, _0x2d5cb9, _0xb0ae6d) {
        var _0x33592b = this.Am[_0x1dc806];
        var _0x1181a3 = _0x33592b.Im();
        var _0x2d2f42 = _0x33592b.Jm;
        for (var _0x5de734 = 0x0; _0x5de734 < _0x1181a3; _0x5de734++) {
          _0x2d2f42[_0x5de734 * 0x3] = _0x2d5cb9;
          _0x2d2f42[_0x5de734 * 0x3 + 0x1] = _0xb0ae6d;
          _0x2d2f42[_0x5de734 * 0x3 + 0x2] = 0x0;
        }
      };
      _0x53bca4.prototype.Ag = function (_0x1fbadf, _0x21f75b, _0x42b3a1) {
        var _0x4def35;
        var _0x5d3a31;
        var _0x15517b = this.Am[_0x1fbadf];
        var _0x1a10bb = _0x15517b.Im();
        var _0x59ab3b = _0x15517b.Jm;
        var _0x3dbc2a = _0x15517b.Km();
        var _0x41f9b4 = _0x59ab3b[0x0];
        var _0x568455 = _0x59ab3b[0x1];
        var _0x323efc = _0x21f75b - _0x41f9b4;
        var _0x47ad30 = _0x42b3a1 - _0x568455;
        var _0x363a4e = _0x1a7a89.la(_0x323efc, _0x47ad30);
        if (_0x363a4e > 0x0) {
          _0x59ab3b[0x0] = _0x21f75b;
          _0x59ab3b[0x1] = _0x42b3a1;
          _0x59ab3b[0x2] = _0x1a7a89.ta(_0x47ad30, _0x323efc);
          var _0x86cb4b = _0x3dbc2a * 0.25 / (_0x3dbc2a * 0.25 + _0x363a4e);
          var _0x4ede59 = 0x1 - _0x86cb4b * 0x2;
          for (var _0x493f99 = 0x1; _0x493f99 < _0x1a10bb; _0x493f99++) {
            _0x4def35 = _0x59ab3b[_0x493f99 * 0x3];
            _0x59ab3b[_0x493f99 * 0x3] = _0x59ab3b[_0x493f99 * 0x3 - 0x3] * _0x4ede59 + (_0x4def35 + _0x41f9b4) * _0x86cb4b;
            _0x41f9b4 = _0x4def35;
            _0x5d3a31 = _0x59ab3b[_0x493f99 * 0x3 + 0x1];
            _0x59ab3b[_0x493f99 * 0x3 + 0x1] = _0x59ab3b[_0x493f99 * 0x3 - 0x2] * _0x4ede59 + (_0x5d3a31 + _0x568455) * _0x86cb4b;
            _0x568455 = _0x5d3a31;
            _0x59ab3b[_0x493f99 * 0x3 + 0x2] = _0x1a7a89.ta(_0x59ab3b[_0x493f99 * 0x3 - 0x2] - _0x59ab3b[_0x493f99 * 0x3 + 0x1], _0x59ab3b[_0x493f99 * 0x3 - 0x3] - _0x59ab3b[_0x493f99 * 0x3]);
          }
        }
      };
      return _0x53bca4;
    }();
    _0xa914b4.Lm = function () {
      function _0xe768de(_0x1dd20b) {
        var _0x58065f;
        var _0x4c5790 = this;
        this.Of = _0x1dd20b;
        this.nc = _0x1dd20b.get()[0x0];
        (_0x58065f = {
          "transparent": true
        }).view = _0x4c5790.nc;
        this.Vf = new _0x51599b.k.o(_0x58065f);
        this.Rd = false;
        this.Mm = new _0xa914b4.Bm(new _0x51599b.j(_0x58bd5c * 0x3));
        this.Pf = 0x1;
        this.Qf = 0x1;
        this.Nm = "0lt0";
        this.Pm = "0lt0";
        this.Qm = "0lt0";
        this.Rm = "0lt0";
        this.Sm = "0lt0";
        this.qg();
        ooo.ud.Jc(function () {
          _0x4c5790.Mm.Tm();
        });
      }
      var _0x58bd5c = _0x1a7a89.ha(0x64, _0xa914b4.Xc.fd);
      _0xe768de.prototype.rg = function (_0x10a56d) {
        this.Rd = _0x10a56d;
      };
      _0xe768de.prototype.qg = function () {
        var _0x12df09 = _0x1a7a89.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x12df09;
        this.nc.width = _0x12df09 * this.Pf;
        this.nc.height = _0x12df09 * this.Qf;
        var _0x430767 = this.Qf / 0x4;
        this.Mm.Dm(_0x430767);
        var _0xcd86 = _0x1a7a89.fa(_0x1a7a89._(this.Pf / _0x430767) * 0x2 - 0x5, 0x1, _0x58bd5c);
        this.Mm.Cm(_0xcd86);
      };
      _0xe768de.prototype.ug = function () {
        if (this.Rd) {
          var _0x4a431f = _0x1a7a89.Ca() / 0xc8;
          var _0x2d6fda = _0x1a7a89.oa(_0x4a431f);
          this.Mm.Wm(this.Xm(this.Nm, _0x2d6fda), this.Ym(this.Nm, _0x2d6fda));
          this.Mm.Zm(this.$m(this.Pm, _0x2d6fda), this.$m(this.Qm, _0x2d6fda), this.$m(this.Rm, _0x2d6fda), this.$m(this.Sm, _0x2d6fda));
          var _0x1f37cc = this.Mm.Km();
          var _0x37334e = this.Mm.Im();
          var _0xe0172e = this.Mm.Jm;
          var _0x5ce3e9 = this.Pf - (this.Pf - _0x1f37cc * 0.5 * (_0x37334e - 0x1)) * 0.5;
          var _0x3cf4d6 = this.Qf * 0.5;
          var _0x546684 = 0x0;
          var _0x9fd28e = 0x0;
          for (var _0x12f0a7 = -0x1; _0x12f0a7 < _0x37334e; _0x12f0a7++) {
            var _0xb7ca5d = _0x12f0a7;
            var _0x36c6cf = _0x1a7a89.pa(_0xb7ca5d * 0x1 / 0xc * _0x30354b.T - _0x4a431f) * (0x1 - _0x1a7a89.ra(0x10, _0xb7ca5d * -0x1 / 0xc));
            if (_0x12f0a7 >= 0x0) {
              _0xe0172e[_0x12f0a7 * 0x3] = _0x5ce3e9 - _0x1f37cc * 0.5 * _0xb7ca5d;
              _0xe0172e[_0x12f0a7 * 0x3 + 0x1] = _0x3cf4d6 + _0x1f37cc * 0.5 * _0x36c6cf;
              _0xe0172e[_0x12f0a7 * 0x3 + 0x2] = _0x1a7a89.ta(_0x9fd28e - _0x36c6cf, _0xb7ca5d - _0x546684);
            }
            _0x546684 = _0xb7ca5d;
            _0x9fd28e = _0x36c6cf;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      _0xe768de.prototype.Gm = function (_0x504687) {
        this.Mm.Gm(_0x504687);
      };
      _0xe768de.prototype.an = function (_0x5744e8) {
        this.Nm = _0x5744e8 ? '0lt2' : "0lt1";
        this.Pm = "0lt0";
        this.Qm = "0lt0";
        this.Rm = "0lt0";
        this.Sm = "0lt0";
      };
      _0xe768de.prototype.bn = function (_0x289a4e) {
        this.Nm = "0lt0";
        this.Pm = _0x289a4e ? '0lt2' : "0lt1";
        this.Qm = "0lt0";
        this.Rm = "0lt0";
        this.Sm = "0lt0";
      };
      _0xe768de.prototype.cn = function (_0x3ed534) {
        this.Nm = "0lt0";
        this.Pm = "0lt0";
        this.Qm = _0x3ed534 ? '0lt2' : "0lt1";
        this.Rm = "0lt0";
        this.Sm = "0lt0";
      };
      _0xe768de.prototype.dn = function (_0x2cad90) {
        this.Nm = "0lt0";
        this.Pm = "0lt0";
        this.Qm = "0lt0";
        this.Rm = _0x2cad90 ? '0lt2' : "0lt1";
        this.Sm = "0lt0";
      };
      _0xe768de.prototype.en = function (_0x28b1d9) {
        this.Nm = "0lt0";
        this.Pm = "0lt0";
        this.Qm = "0lt0";
        this.Rm = "0lt0";
        this.Sm = _0x28b1d9 ? '0lt2' : "0lt1";
      };
      _0xe768de.prototype.Xm = function (_0x31862e, _0x543cea) {
        switch (_0x31862e) {
          case "0lt1":
            return 0.9 + _0x543cea * 0.1;
          case '0lt2':
            return 0.4 + _0x543cea * 0.3;
        }
        ;
        return 0x1;
      };
      _0xe768de.prototype.Ym = function (_0x9f2a94, _0x6c64f) {
        switch (_0x9f2a94) {
          case "0lt1":
            return 0.6 + _0x6c64f * 0.5;
          case '0lt2':
            return 0.3 + _0x6c64f * 0.3;
        }
        ;
        return 0x1;
      };
      _0xe768de.prototype.$m = function (_0x33dc9b, _0x3fcab9) {
        switch (_0x33dc9b) {
          case "0lt1":
            return 0.9 + _0x3fcab9 * 0.1;
          case '0lt2':
            return 0.6 + _0x3fcab9 * 0.4;
        }
        ;
        return 0x1;
      };
      return _0xe768de;
    }();
    _0xa914b4.uk = function () {
      function _0x3ab2b8(_0x1be523, _0x4dfeb6, _0x3e36a8, _0x5add39, _0x311d30) {
        this.gn = _0x1be523;
        this.hn = _0x4dfeb6;
        this['in'] = _0x3e36a8;
        this.jn = _0x5add39;
        this.kn = _0x311d30;
      }
      _0x3ab2b8.tk = function (_0x4d53c4) {
        return new _0x3ab2b8(_0x4d53c4.price, _0x4d53c4.guest, _0x4d53c4.nonbuyable, _0x4d53c4.nonbuyableCause, _0x4d53c4.description);
      };
      _0x3ab2b8.vk = function (_0x784f62) {
        return new _0x3ab2b8(_0x784f62.price, _0x784f62.guest, _0x784f62.nonbuyable, _0x784f62.nonbuyableCause, _0x784f62.description);
      };
      _0x3ab2b8.prototype.pk = function () {
        return this.gn;
      };
      _0x3ab2b8.prototype.sk = function () {
        return this.hn;
      };
      _0x3ab2b8.prototype.qk = function () {
        return this['in'];
      };
      _0x3ab2b8.prototype.ln = function () {
        return this.jn;
      };
      _0x3ab2b8.prototype.mn = function () {
        return this.kn;
      };
      return _0x3ab2b8;
    }();
    _0xa914b4.Zf = function () {
      function _0x2abd5c(_0x1e4af4) {
        this.nn = {};
        function _0x4eb676() {
          var _0x89fc74 = ['https://wormx.store/images/arkaplan/bg1.jpg', "https://wormx.store/images/arkaplan/bg2.jpg", "https://wormx.store/images/arkaplan/bg3.jpg"];
          var _0x17379a = localStorage.getItem("lastBackground");
          var _0x1a42a3 = _0x89fc74.filter(_0x24f1d3 => _0x24f1d3 !== _0x17379a);
          var _0x23632c = _0x1a42a3[Math.floor(Math.random() * _0x1a42a3.length)];
          localStorage.setItem("lastBackground", _0x23632c);
          return _0x23632c;
        }
        var _0x6b113d = _0x51599b.k.m.from(_0x4eb676());
        this.nn[_0x5a1287] = _0x6b113d;
        var _0xc8014c = _0x51599b.k.q.from(_0x245ac3, _0x5cc1a3, this.nn);
        this._f = new _0x51599b.k.v(_0x40c2cb, _0xc8014c);
        this._f.blendMode = _0x51599b.k.w.B;
        this._f.alpha = 0.6;
      }
      var _0x1f0d66 = "a1_" + _0x1a7a89.xa();
      var _0x2e8939 = 'a2_' + _0x1a7a89.xa();
      var _0x5a1287 = "u3_" + _0x1a7a89.xa();
      var _0x34a4f0 = "u4_" + _0x1a7a89.xa();
      var _0x5d0a6b = "v1_" + _0x1a7a89.xa();
      var _0x40c2cb = new _0x51599b.k.u().addAttribute(_0x1f0d66, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2).addAttribute(_0x2e8939, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2);
      var _0x245ac3 = "precision mediump float; attribute vec2 " + _0x1f0d66 + "; attribute vec2 " + _0x2e8939 + "; uniform mat3 " + "translationMatrix" + "; uniform mat3 " + "projectionMatrix" + "; uniform vec4 " + _0x34a4f0 + "; varying vec2 " + _0x5d0a6b + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + _0x5d0a6b + " = " + _0x2e8939 + "; gl_Position = vec4((" + "projectionMatrix" + " * " + "translationMatrix" + " * vec3(" + _0x1f0d66 + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + _0x34a4f0 + "; vec2 uv = " + _0x2e8939 + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); " + _0x5d0a6b + " = v2; }";
      var _0x5cc1a3 = "precision highp float; varying vec2 " + _0x5d0a6b + "; uniform sampler2D " + _0x5a1287 + "; void main() { gl_FragColor = texture2D(" + _0x5a1287 + ", " + _0x5d0a6b + "); }";
      _0x2abd5c.prototype.tg = function (_0x12ecd7, _0x48daf0) {
        this._f.scale.x = _0x12ecd7;
        this._f.scale.y = _0x48daf0;
        this.nn[_0x34a4f0] = [_0x12ecd7, _0x48daf0, 0x1 / _0x12ecd7 + 0x1, 0x1 / _0x48daf0 + 0x1];
      };
      return _0x2abd5c;
    }();
    _0xa914b4.th = function () {
      function _0x496b44() {
        this.nn = {};
        this.nn[_0x21e2ee] = [0x1, 0.5, 0.25, 0.5];
        this.nn[_0x55eb34] = _0x51599b.k.n.WHITE;
        this.nn[_0x5506ce] = [0x0, 0x0];
        this.nn[_0x234f32] = [0x0, 0x0];
        var _0x29eab1 = _0x51599b.k.q.from(_0x17bc34, _0x3bc422, this.nn);
        this._f = new _0x51599b.k.v(_0x1fdde7, _0x29eab1);
      }
      var _0x99b19d = "a1_" + _0x1a7a89.xa();
      var _0x54b72d = "a2_" + _0x1a7a89.xa();
      var _0x21e2ee = "u3_" + _0x1a7a89.xa();
      var _0x55eb34 = "u4_" + _0x1a7a89.xa();
      var _0x5506ce = 'u5_' + _0x1a7a89.xa();
      var _0x234f32 = "u6_" + _0x1a7a89.xa();
      var _0x428813 = "v1_" + _0x1a7a89.xa();
      var _0x1fdde7 = new _0x51599b.k.u().addAttribute(_0x99b19d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x54b72d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x17bc34 = "precision mediump float; attribute vec2 " + _0x99b19d + "; attribute vec2 " + _0x54b72d + "; uniform mat3 " + "translationMatrix" + "; uniform mat3 " + "projectionMatrix" + "; varying vec2 " + _0x428813 + "; void main(){" + _0x428813 + '=' + _0x54b72d + "; gl_Position=vec4((" + "projectionMatrix" + '*' + "translationMatrix" + '*vec3(' + _0x99b19d + ", 1.0)).xy, 0.0, 1.0); }";
      var _0x3bc422 = "precision highp float; varying vec2 " + _0x428813 + "; uniform vec4 " + _0x21e2ee + "; uniform sampler2D " + _0x55eb34 + "; uniform vec2 " + _0x5506ce + "; uniform vec2 " + _0x234f32 + "; void main(){vec4 color=texture2D(" + _0x55eb34 + ", " + _0x428813 + '*' + _0x5506ce + '+' + _0x234f32 + "); vec4 colorMix=" + _0x21e2ee + "; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }";
      _0x496b44.prototype.nd = function (_0xc422c7, _0x571fac, _0x1a165b, _0x325270) {
        var _0x4ff494 = this.nn[_0x21e2ee];
        _0x4ff494[0x0] = _0xc422c7;
        _0x4ff494[0x1] = _0x571fac;
        _0x4ff494[0x2] = _0x1a165b;
        _0x4ff494[0x3] = _0x325270;
      };
      _0x496b44.prototype.Hh = function (_0x3ee73b) {
        this.nn[_0x55eb34] = _0x3ee73b;
      };
      _0x496b44.prototype.Bg = function (_0x3003a0, _0x2a49b7, _0xaea0ab, _0x5d4612) {
        this._f.position.x = _0x3003a0;
        this._f.position.y = _0x2a49b7;
        this._f.scale.x = _0xaea0ab;
        this._f.scale.y = _0x5d4612;
        var _0x49f6b3 = this.nn[_0x5506ce];
        _0x49f6b3[0x0] = _0xaea0ab * 0.2520615384615385;
        _0x49f6b3[0x1] = _0x5d4612 * 0.4357063736263738;
        var _0x1e0c20 = this.nn[_0x234f32];
        _0x1e0c20[0x0] = _0x3003a0 * 0.2520615384615385;
        _0x1e0c20[0x1] = _0x2a49b7 * 0.4357063736263738;
      };
      return _0x496b44;
    }();
    _0xa914b4.bd = function () {
      function _0x347521() {
        this.gd = new _0x51599b.k.s();
        this.pn = 0x0;
        this.qn = 0x0;
      }
      _0x347521.prototype.kd = function (_0x1a1bad) {
        this.gd.texture = _0x1a1bad.nb();
        this.gd.anchor.set(_0x1a1bad.hb, _0x1a1bad.ib);
        this.pn = _0x1a1bad.jb;
        this.qn = _0x1a1bad.kb;
      };
      _0x347521.prototype.nd = function (_0x4e1ee7) {
        this.gd.tint = parseInt(_0x4e1ee7.substring(0x1), 0x10);
      };
      _0x347521.prototype.Bd = function (_0x137377) {
        this.gd.width = _0x137377 * this.pn;
        this.gd.height = _0x137377 * this.qn;
      };
      _0x347521.prototype.Vd = function (_0x41c345) {
        this.gd.rotation = _0x41c345;
      };
      _0x347521.prototype.Ud = function (_0x23acc2, _0x8c8c9a) {
        this.gd.position.set(_0x23acc2, _0x8c8c9a);
      };
      _0x347521.prototype.Td = function (_0x3ae76d) {
        this.gd.visible = _0x3ae76d;
      };
      _0x347521.prototype.Qd = function () {
        return this.gd.visible;
      };
      _0x347521.prototype.Rj = function (_0x1b9a81) {
        this.gd.alpha = _0x1b9a81;
      };
      _0x347521.prototype.zd = function () {
        return this.gd;
      };
      _0x347521.prototype.G = function () {
        _0x51599b.k.F.G(this.gd);
      };
      return _0x347521;
    }();
    _0xa914b4.Ui = function () {
      function _0x4d50ca(_0x28a667) {
        this.Qh = _0x28a667;
        this.ki = new _0xa914b4.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0x0;
        this.rn = 0x0;
        this.Lj = 0x1;
        this.Ld = 0x0;
        this.hi = 0x0;
        this.Nd = {};
        this.Kd = 0x0;
        this.sn = new _0x51599b.j(400);
        this.tn = new _0x51599b.j(400);
        this.Jd = new _0x51599b.j(400);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      _0x4d50ca.prototype.$i = function () {
        if (this.vn != null) {
          _0x51599b.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          _0x51599b.k.F.G(this.wn);
        }
      };
      _0x4d50ca.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = '';
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      _0x4d50ca.prototype.Zi = function (_0x1fff92) {
        this.ki = _0x1fff92;
        this.yn(this.cj);
      };
      _0x4d50ca.prototype.Td = function (_0x196904) {
        var _0x2e8e3e = this.cj;
        this.cj = _0x196904;
        this.yn(_0x2e8e3e);
      };
      _0x4d50ca.prototype.fj = function (_0x4cfe68) {
        this.hi = _0x4cfe68 * 0x32;
        var _0x9273ca = _0x4cfe68;
        if (_0x4cfe68 > this.Qh.hh) {
          _0x9273ca = _0x1a7a89.sa((_0x4cfe68 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var _0x38bf8f = _0x1a7a89.qa(_0x1a7a89.ra(_0x9273ca * 0x5, 0.707106781186548) * 0x4 + 0x19);
        var _0x3a80b4 = _0x1a7a89.ha(0xc8, _0x1a7a89.ia(0x3, (_0x38bf8f - 0x5) * 0x5 + 0x1));
        var _0x205db2 = this.Kd;
        this.Id = (0x5 + _0x38bf8f * 0.9) * 0.025;
        this.Kd = _0x1a7a89._(_0x3a80b4);
        this.rn = _0x3a80b4 - this.Kd;
        if (_0x205db2 > 0x0 && _0x205db2 < this.Kd) {
          var _0x47cd54 = this.sn[_0x205db2 * 0x2 - 0x2];
          var _0x2dd093 = this.sn[_0x205db2 * 0x2 - 0x1];
          var _0x2df9c7 = this.tn[_0x205db2 * 0x2 - 0x2];
          var _0x431d10 = this.tn[_0x205db2 * 0x2 - 0x1];
          var _0x167fc6 = this.Jd[_0x205db2 * 0x2 - 0x2];
          var _0x1617f0 = this.Jd[_0x205db2 * 0x2 - 0x1];
          for (var _0x3ed085 = _0x205db2; _0x3ed085 < this.Kd; _0x3ed085++) {
            this.sn[_0x3ed085 * 0x2] = _0x47cd54;
            this.sn[_0x3ed085 * 0x2 + 0x1] = _0x2dd093;
            this.tn[_0x3ed085 * 0x2] = _0x2df9c7;
            this.tn[_0x3ed085 * 0x2 + 0x1] = _0x431d10;
            this.Jd[_0x3ed085 * 0x2] = _0x167fc6;
            this.Jd[_0x3ed085 * 0x2 + 0x1] = _0x1617f0;
          }
        }
      };
      _0x4d50ca.prototype.kj = function (_0x1d1a34, _0x55f1e5) {
        this.Kd = _0x55f1e5;
        for (var _0x20cb08 = 0x0; _0x20cb08 < this.Kd; _0x20cb08++) {
          this.sn[_0x20cb08 * 0x2] = this.tn[_0x20cb08 * 0x2] = this.Jd[_0x20cb08 * 0x2] = _0x1d1a34();
          this.sn[_0x20cb08 * 0x2 + 0x1] = this.tn[_0x20cb08 * 0x2 + 0x1] = this.Jd[_0x20cb08 * 0x2 + 0x1] = _0x1d1a34();
        }
      };
      _0x4d50ca.prototype.hj = function (_0xa1e3e2, _0x15a79f, _0x2e1f91) {
        this.Fd = _0x2e1f91;
        for (var _0x5ae9fa = 0x0; _0x5ae9fa < this.Kd; _0x5ae9fa++) {
          this.sn[_0x5ae9fa * 0x2] = this.tn[_0x5ae9fa * 0x2];
          this.sn[_0x5ae9fa * 0x2 + 0x1] = this.tn[_0x5ae9fa * 0x2 + 0x1];
        }
        ;
        var _0x469a5f = _0xa1e3e2 - this.tn[0x0];
        var _0x2acf5b = _0x15a79f - this.tn[0x1];
        this.zn(_0x469a5f, _0x2acf5b, this.Kd, this.tn);
      };
      _0x4d50ca.prototype.zn = function (_0x358a85, _0x270d4f, _0x4d7edf, _0x448cbd) {
        var _0x3b9ab7 = _0x1a7a89.la(_0x358a85, _0x270d4f);
        if (!(_0x3b9ab7 <= 0x0)) {
          var _0x340141;
          var _0x5d5931 = _0x448cbd[0x0];
          _0x448cbd[0x0] += _0x358a85;
          var _0x254f4d;
          var _0x140565 = _0x448cbd[0x1];
          _0x448cbd[0x1] += _0x270d4f;
          var _0x591a96 = this.Id / (this.Id + _0x3b9ab7);
          var _0x33f94b = 0x1 - _0x591a96 * 0x2;
          var _0xa053e = 0x1;
          for (var _0xa47ce8 = _0x4d7edf - 0x1; _0xa053e < _0xa47ce8; _0xa053e++) {
            _0x340141 = _0x448cbd[_0xa053e * 0x2];
            _0x448cbd[_0xa053e * 0x2] = _0x448cbd[_0xa053e * 0x2 - 0x2] * _0x33f94b + (_0x340141 + _0x5d5931) * _0x591a96;
            _0x5d5931 = _0x340141;
            _0x254f4d = _0x448cbd[_0xa053e * 0x2 + 0x1];
            _0x448cbd[_0xa053e * 0x2 + 0x1] = _0x448cbd[_0xa053e * 0x2 - 0x1] * _0x33f94b + (_0x254f4d + _0x140565) * _0x591a96;
            _0x140565 = _0x254f4d;
          }
          ;
          _0x33f94b = 0x1 - (_0x591a96 = this.rn * this.Id / (this.rn * this.Id + _0x3b9ab7)) * 0x2;
          _0x448cbd[_0x4d7edf * 0x2 - 0x2] = _0x448cbd[_0x4d7edf * 0x2 - 0x4] * _0x33f94b + (_0x448cbd[_0x4d7edf * 0x2 - 0x2] + _0x5d5931) * _0x591a96;
          _0x448cbd[_0x4d7edf * 0x2 - 0x1] = _0x448cbd[_0x4d7edf * 0x2 - 0x3] * _0x33f94b + (_0x448cbd[_0x4d7edf * 0x2 - 0x1] + _0x140565) * _0x591a96;
        }
      };
      _0x4d50ca.prototype.Oh = function () {
        return {
          '_a': this.Jd[0x0],
          'ab': this.Jd[0x1]
        };
      };
      _0x4d50ca.prototype.dj = function (_0x58bb2e, _0x5c2087) {
        var _0x204ba4 = 0xf4240;
        var _0x44941e = _0x58bb2e;
        var _0xfbb272 = _0x5c2087;
        for (var _0x3f8fc5 = 0x0; _0x3f8fc5 < this.Kd; _0x3f8fc5++) {
          var _0x3a491a = this.Jd[_0x3f8fc5 * 0x2];
          var _0x14447a = this.Jd[_0x3f8fc5 * 0x2 + 0x1];
          var _0x2814af = _0x1a7a89.la(_0x58bb2e - _0x3a491a, _0x5c2087 - _0x14447a);
          if (_0x2814af < _0x204ba4) {
            _0x204ba4 = _0x2814af;
            _0x44941e = _0x3a491a;
            _0xfbb272 = _0x14447a;
          }
        }
        ;
        return {
          '_a': _0x44941e,
          'ab': _0xfbb272,
          'ej': _0x204ba4
        };
      };
      _0x4d50ca.prototype._i = function (_0x5e755c) {
        this.un = _0x5e755c;
      };
      _0x4d50ca.prototype.Pj = function (_0x270b96, _0xabab83) {
        this.Lj = _0x1a7a89.ga(this.Lj, this.bj ? this.Fd ? 0.9 + _0x1a7a89.pa(_0x270b96 / 0x190 * _0x30354b.T) * 0.1 : 0x1 : 0x0, _0xabab83, 0.00125);
        this.Ld = _0x1a7a89.ga(this.Ld, this.bj ? this.Fd ? 0x1 : 0x0 : 0x1, _0xabab83, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      _0x4d50ca.prototype.Qj = function (_0x3f6aec, _0x200bb5, _0x55e50d, _0x42bbe6) {
        if (this.cj && this.bj) {
          var _0x2d22ca = _0x1a7a89.ra(0.11112, _0x200bb5 / 0x5f);
          for (var _0x2cdf9f = 0x0; _0x2cdf9f < this.Kd; _0x2cdf9f++) {
            var _0x36758d = _0x1a7a89.ka(this.sn[_0x2cdf9f * 0x2], this.tn[_0x2cdf9f * 0x2], _0x55e50d);
            var _0x19b343 = _0x1a7a89.ka(this.sn[_0x2cdf9f * 0x2 + 0x1], this.tn[_0x2cdf9f * 0x2 + 0x1], _0x55e50d);
            this.Jd[_0x2cdf9f * 0x2] = _0x1a7a89.ka(_0x36758d, this.Jd[_0x2cdf9f * 0x2], _0x2d22ca);
            this.Jd[_0x2cdf9f * 0x2 + 0x1] = _0x1a7a89.ka(_0x19b343, this.Jd[_0x2cdf9f * 0x2 + 0x1], _0x2d22ca);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, _0x3f6aec, _0x200bb5, _0x42bbe6);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0x0];
          this.wn.Rh.y = this.Jd[0x1] - this.Id * 0x3;
        }
      };
      _0x4d50ca.prototype.yn = function (_0x598b92) {
        if (this.cj) {
          if (!_0x598b92) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            _0x51599b.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            _0x51599b.k.F.G(this.wn);
          }
        }
      };
      _0x4d50ca.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new _0xa914b4.Xc();
        } else {
          _0x51599b.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), '#ffffff');
        if (this.wn == null) {
          this.wn = new _0xa914b4.Bn('');
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          _0x51599b.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 0xe;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        this.wn.text = this.ki.Xa;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (false && null.Je == this.ki.Je) {
          _0x5a0b1f.vj = this.wn;
          let _0x569478 = _0x2e052d.sg.indexOf(null.ni);
          if (_0x569478 == -0x1) {
            if (_0x2e052d.ig != -0x1) {
              _0x2e052d.ig = -0x1;
            }
          } else {
            _0x2e052d.ig = null[_0x569478].s;
            _0x2e052d.re = false;
            _0x15410a();
          }
        }
      };
      _0x4d50ca.Ti = function _0x447f0a() {
        this.Je = 0x0;
        this.mi = _0xa914b4.dh.jh;
        this.ni = 0x0;
        this.Vi = 0x0;
        this.Wi = 0x0;
        this.Xi = 0x0;
        this.Yi = 0x0;
        this.Xa = '';
      };
      return _0x4d50ca;
    }();
    _0xa914b4.Bn = _0x1a7a89.ca(_0x51599b.k.t, function (_0x257bbf, _0x142d95, _0xf4d190) {
      _0x51599b.k.t.call(this, _0x257bbf, _0x142d95, _0xf4d190);
      this.Rh = {
        'x': 0x0,
        'y': 0x0
      };
    });
    _0xa914b4.Sb = function () {
      function _0x66f491(_0x290e6f, _0x25fb1f, _0x43bde8, _0x5ee019, _0x501c85) {
        this.Tj = _0x290e6f;
        this.Uj = _0x25fb1f;
        this.Vj = _0x43bde8;
        this.Wj = _0x5ee019;
        this.Xj = _0x501c85;
      }
      _0x66f491.prototype.Cn = function (_0x3a7714) {
        return new _0x66f491(_0x3a7714, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x66f491.prototype.Dn = function (_0x329738) {
        return new _0x66f491(this.Tj, _0x329738, this.Vj, this.Wj, this.Xj);
      };
      _0x66f491.prototype.En = function (_0x5a807a) {
        return new _0x66f491(this.Tj, this.Uj, _0x5a807a, this.Wj, this.Xj);
      };
      _0x66f491.prototype.Fn = function (_0x1868d3) {
        return new _0x66f491(this.Tj, this.Uj, this.Vj, _0x1868d3, this.Xj);
      };
      _0x66f491.prototype.Gn = function (_0x1c636e) {
        return new _0x66f491(this.Tj, this.Uj, this.Vj, this.Wj, _0x1c636e);
      };
      return _0x66f491;
    }();
    _0xa914b4.Bm = function () {
      function _0x43ffbc(_0x480cab) {
        this.Hn = new _0xa914b4.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = _0x480cab;
        this.$c = 0x0;
        this.mj = 0x1;
        this.Kn = 0x1;
        this.Ln = 0x1;
        this.Mn = 0x1;
        this.Nn = 0x1;
        this.On = 0x1;
        this.Pn = 0x1;
        this.Hm("#ffffff");
      }
      var _0x108783 = new _0xa914b4.Sb(0x0, 0x0, 0x0, 0x0, 0x0);
      _0x43ffbc.prototype.ag = function () {
        return this.Hn.Yc;
      };
      _0x43ffbc.prototype.Cm = function (_0x46d4e1) {
        this.$c = _0x46d4e1;
        if (this.Hn.$c !== _0x46d4e1) {
          for (var _0x20a109 = _0x46d4e1; _0x20a109 < this.Hn._c.length; _0x20a109++) {
            this.Hn._c[_0x20a109].Cd();
          }
          ;
          while (this.Hn.$c > _0x46d4e1) {
            this.Hn.$c -= 0x1;
            var _0x2bad4c = this.Hn._c[this.Hn.$c];
            _0x2bad4c.md.G();
            _0x2bad4c.ld.G();
          }
          ;
          while (this.Hn.$c < _0x46d4e1) {
            var _0x529152 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 0x1;
            this.Hn.Yc.addChild(_0x529152.ld.zd());
            this.Hn.Yc.addChild(_0x529152.md.zd());
            _0x529152.ld.Rj(this.Kn);
            _0x529152.md.Rj(this.Ln);
          }
          ;
          for (var _0x13128f = 0x0; _0x13128f < this.Hn.Zc.od.length; _0x13128f++) {
            this.Hn.Zc.od[_0x13128f].Rj(this.Mn);
          }
          ;
          for (var _0x43af45 = 0x0; _0x43af45 < this.Hn.Zc.pd.length; _0x43af45++) {
            this.Hn.Zc.pd[_0x43af45].Rj(this.Nn);
          }
          ;
          for (var _0x1e5561 = 0x0; _0x1e5561 < this.Hn.Zc.rd.length; _0x1e5561++) {
            this.Hn.Zc.rd[_0x1e5561].Rj(this.On);
          }
          ;
          for (var _0x2d3fc1 = 0x0; _0x2d3fc1 < this.Hn.Zc.qd.length; _0x2d3fc1++) {
            this.Hn.Zc.qd[_0x2d3fc1].Rj(this.Pn);
          }
        }
      };
      _0x43ffbc.prototype.Im = function () {
        return this.$c;
      };
      _0x43ffbc.prototype.Gm = function (_0x54c3e6) {
        this.In = _0x54c3e6;
        this.Jn = "#ffffff";
        this.Tm();
      };
      _0x43ffbc.prototype.Hm = function (_0x33889f) {
        this.In = _0x108783;
        this.Jn = _0x33889f;
        this.Tm();
      };
      _0x43ffbc.prototype.Tm = function () {
        this.Hn.hd(_0xa914b4.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      _0x43ffbc.prototype.Dm = function (_0x331c80) {
        this.mj = _0x331c80;
      };
      _0x43ffbc.prototype.Km = function () {
        return this.mj;
      };
      _0x43ffbc.prototype.Wm = function (_0xd3999f, _0x572d08) {
        this.Kn = _0xd3999f;
        this.Ln = _0x572d08;
        for (var _0x22af5c = 0x0; _0x22af5c < this.$c; _0x22af5c++) {
          var _0x229f5b = this.Hn._c[_0x22af5c];
          _0x229f5b.ld.Rj(this.Kn);
          _0x229f5b.md.Rj(this.Ln);
        }
      };
      _0x43ffbc.prototype.Zm = function (_0x1cfbc6, _0x235dd6, _0x4bb7c7, _0x80d17a) {
        this.Mn = _0x1cfbc6;
        this.Nn = _0x235dd6;
        this.On = _0x4bb7c7;
        this.Pn = _0x80d17a;
        for (var _0x11cc37 = 0x0; _0x11cc37 < this.Hn.Zc.od.length; _0x11cc37++) {
          this.Hn.Zc.od[_0x11cc37].Rj(this.Mn);
        }
        ;
        for (var _0x1e726a = 0x0; _0x1e726a < this.Hn.Zc.pd.length; _0x1e726a++) {
          this.Hn.Zc.pd[_0x1e726a].Rj(this.Nn);
        }
        ;
        for (var _0x1e541b = 0x0; _0x1e541b < this.Hn.Zc.rd.length; _0x1e541b++) {
          this.Hn.Zc.rd[_0x1e541b].Rj(this.On);
        }
        ;
        for (var _0x148f95 = 0x0; _0x148f95 < this.Hn.Zc.qd.length; _0x148f95++) {
          this.Hn.Zc.qd[_0x148f95].Rj(this.Pn);
        }
      };
      _0x43ffbc.prototype.Bg = function () {
        var _0xfa64ed = this.mj * 0x2;
        var _0x46b4b0 = this.mj * 0x2 * 1.5;
        if (this.$c > 0x0) {
          var _0x3b2a5a = this.Jm[0x0];
          var _0x25a534 = this.Jm[0x1];
          var _0x10a4f2 = this.Jm[0x2];
          this.Hn._c[0x0].Ad(_0x3b2a5a, _0x25a534, _0xfa64ed, _0x46b4b0, _0x10a4f2);
          this.Hn.Zc.Ad(_0x3b2a5a, _0x25a534, _0xfa64ed, _0x10a4f2);
        }
        ;
        for (var _0x50567e = 0x1; _0x50567e < this.$c; _0x50567e++) {
          var _0x14d4e2 = this.Jm[_0x50567e * 0x3];
          var _0x43e56b = this.Jm[_0x50567e * 0x3 + 0x1];
          var _0x3788a0 = this.Jm[_0x50567e * 0x3 + 0x2];
          this.Hn._c[_0x50567e].Ad(_0x14d4e2, _0x43e56b, _0xfa64ed, _0x46b4b0, _0x3788a0);
        }
      };
      _0x43ffbc.prototype._m = function (_0x4c104f) {
        _0x4c104f.render(this.Hn.Yc);
      };
      return _0x43ffbc;
    }();
    _0xa914b4.Uf = function () {
      function _0x2a7303(_0xcc8bdf) {
        this.Wd = _0xcc8bdf;
      }
      _0x2a7303.Tf = $('#background-canvas');
      _0x2a7303.Qn = $("#stretch-box");
      _0x2a7303.Rn = $("#social-buttons");
      _0x2a7303.Sn = $("#markup-wrap");
      _0x2a7303.Tn = $('#game-view');
      _0x2a7303.Un = $("#results-view");
      _0x2a7303.Vn = $('#main-menu-view');
      _0x2a7303.Wn = $("#popup-view");
      _0x2a7303.Xn = $('#toaster-view');
      _0x2a7303.Yn = $("#loading-view");
      _0x2a7303.Zn = $("#restricted-view");
      _0x2a7303.$n = $("#error-gateway-connection-view");
      _0x2a7303._n = $('#error-game-connection-view');
      _0x2a7303.prototype.Sa = function () {};
      _0x2a7303.prototype.ml = function () {};
      _0x2a7303.prototype.nl = function () {};
      _0x2a7303.prototype.hl = function () {};
      _0x2a7303.prototype.qg = function () {};
      _0x2a7303.prototype.ug = function (_0x18705e, _0x15c4a8) {};
      return _0x2a7303;
    }();
    _0x340522 = $("#final-caption");
    _0x1a3591 = $("#final-continue");
    _0x419f39 = $('#congrats-bg');
    _0x4d1e88 = $("#unl6wj4czdl84o9b");
    _0x58fb66 = $("#final-share-fb");
    _0x2a9bb1 = $("#final-message");
    _0x200c93 = $("#final-score");
    _0x5e44c6 = $("#final-place");
    _0x272953 = $("#final-board");
    _0x288b76 = $("#game-canvas");
    (_0x52da2e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
      var _0x172a13 = this;
      var _0x58107b = _0x288b76.get()[0x0];
      _0x58fb66.toggle(_0x30354b.co.bo);
      _0x340522.text(_0x1a7a89.U("index.game.result.title"));
      _0x1a3591.text(_0x1a7a89.U("index.game.result.continue"));
      _0x1a3591.html("Continue (Home)");
      _0x1a3591.after("<div id='final-replay'>Replay</div>");
      _0x1a3591.click(function () {
        ooo.ij['if']();
        _0x30354b.co['do'].Va();
        ooo.ij.Ye(_0xa914b4.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij['if']();
        ooo.to();
      });
      var _0x38efcd = [{
        'url': 'bkgnd0.png'
      }, {
        'url': 'bg_sky__6.png'
      }, {
        'url': 'bg_sky_7.png'
      }, {
        'url': "Galaxy-Star.png"
      }, {
        'url': "bg_sky_10.png"
      }, {
        'url': "bg_sky_9.png"
      }, {
        'url': "bg_sky__2.png"
      }, {
        'url': "bg_sky__1.png"
      }, {
        'url': "bg_sky_8.png"
      }, {
        'url': "bg_sky__5.png"
      }, {
        'url': "bg_sky_11.png"
      }, {
        'url': 'bg_sky_12.png'
      }];
      var _0x52ab02 = 0x0;
      function _0x335892() {
        _0x52ab02 = (_0x52ab02 + 0x1) % _0x38efcd.length;
        var _0x49c965 = _0x38efcd[_0x52ab02].url;
        var _0x4ac1b7 = "https://wormx.store/get_store.phpitem=" + _0x49c965;
        _0x2e052d.background = _0x4ac1b7;
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
        try {
          if (PIXI.utils.TextureCache[_0x4ac1b7]) {
            PIXI.utils.TextureCache[_0x4ac1b7].destroy(true);
            delete PIXI.utils.TextureCache[_0x4ac1b7];
          }
          if (typeof ooo !== "undefined" && ooo.ef && ooo.ef.fn_o) {
            var _0x41bb2f = ooo.ef.fn_o(_0x4ac1b7);
            ooo.ef.F_bg = new PIXI.Texture(_0x41bb2f);
          } else if (typeof PIXI !== "undefined") {
            ooo.ef.F_bg = PIXI.Texture.from(_0x4ac1b7);
          }
          if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh) {
            ooo.Xg.Kf.Wg.sh.Hh(ooo.ef.F_bg);
          }
        } catch (_0xcae055) {
          console.log("Background change error:", _0xcae055);
        }
      }
      let _0x547a1c = {
        'left': false,
        'right': false
      };
      function _0x39228d() {
        if (false && true) {
          if (false && true) {
            _0x2e052d.z = 0.95;
          }
          if (false && true) {
            _0x2e052d.z = 1.05;
          }
        }
        requestAnimationFrame(_0x39228d);
      }
      $("html").keydown(function (_0x32e966) {
        if (_0x32e966.keyCode !== 0x11 || !(_0x2e052d.ctrl = true)) {
          if (_0x32e966.keyCode !== 0x11) {
            _0x2e052d.ctrl = false;
          }
        }
        if (_0x32e966.keyCode === 0x35) {
          if (false || false) {
            _0x335892();
          }
        }
        if (_0x32e966.keyCode == 0xbc || _0x32e966.keyCode == 0x25) {
          _0x547a1c.left = true;
        }
        if (_0x32e966.keyCode == 0xbe || _0x32e966.keyCode == 0x27) {
          _0x547a1c.right = true;
        }
        if (_0x32e966.keyCode === 0x20) {
          _0x172a13.eo = true;
        }
        if (_0x32e966.keyCode === 0x31) {
          _0x565037();
        }
        if (_0x32e966.keyCode === 0x32) {
          if (false && false) {
            if (_0x2e052d.selectedHats && _0x2e052d.selectedHats.length > 0x0) {
              _0x2e052d.currentHatIndex = (_0x2e052d.currentHatIndex + 0x1) % _0x2e052d.selectedHats.length;
              let _0x30886d = _0x2e052d.selectedHats[_0x2e052d.currentHatIndex];
              _0x22fbe9(_0x30886d);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
            }
          }
        }
      }).keyup(function (_0x20a051) {
        _0x2e052d.ctrl = false;
        if (_0x20a051.keyCode == 0xbc || _0x20a051.keyCode == 0x25) {
          _0x547a1c.left = false;
        }
        if (_0x20a051.keyCode == 0xbe || _0x20a051.keyCode == 0x27) {
          _0x547a1c.right = false;
        }
        if (false && false) {
          if (_0x20a051.keyCode == 0x51 || _0x20a051.keyCode == 0x57) {
            if (_0x20a051.keyCode == 0x51) {
              _0x4232ce.texture = _0x4d18a9;
              _0x5ced67.texture = _0x5136fb;
              _0x4232ce.alpha = 0x1;
              _0x5ced67.alpha = 0.25;
              _0x27477d();
            }
            if (_0x20a051.keyCode == 0x57) {
              _0x5ced67.texture = _0x817ed8;
              _0x4232ce.texture = _0x3620cf;
              _0x4232ce.alpha = 0.25;
              _0x5ced67.alpha = 0x1;
              _0x56c7df();
            }
          } else {
            _0x5ced67.texture = _0x5136fb;
            _0x4232ce.texture = _0x3620cf;
            _0x5ced67.alpha = 0.25;
            _0x4232ce.alpha = 0.25;
            _0x29be32 = false;
            _0xde2d1b = 0x37;
            _0x42a707 = 0x1;
            _0x4d76e0 = true;
            clearInterval(_0x3d582d);
            _0x3d582d = null;
          }
          if (_0x20a051.keyCode == 0x5a) {
            _0x2e052d.z = 1.2;
            _0x3282ce.texture = _0x1d2074;
            _0x3282ce.alpha = 0x1;
          }
        }
        if (false && _0x20a051.keyCode == 0x52) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0x0;
          }
          const _0x554867 = new Date().getTime();
          const _0x1fafa3 = _0x554867 - window.lastRespawnTime;
          if (_0x1fafa3 < 0x3e8) {
            return;
          }
          window.lastRespawnTime = _0x554867;
          if ('' && '') {
            $("#port_id_s").val('');
            $("#port_name_s").val('');
            $('#port_id').val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          _0x2e052d.r1 = true;
          try {
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
              setTimeout(function () {
                document.getElementById('mm-action-play').click();
              }, 0x12c);
              return;
            }
          } catch (_0x42eae1) {}
          try {
            if (ooo.Mh && typeof ooo.Mh.gr === 'function') {
              ooo.Mh.gr();
            } else {
              if (ooo.Mh && ooo.Mh.Rq) {
                try {
                  ooo.Mh.go = 0x3;
                } catch (_0xe15aa) {}
                ooo.Mh.Rq.close();
              }
            }
            setTimeout(function () {
              try {
                const _0x19b731 = document.querySelectorAll(".error, .alert, .modal, .popup, .notification");
                _0x19b731.forEach(_0x937742 => {
                  try {
                    _0x937742.style.display = "none";
                  } catch (_0x1e82df) {}
                });
              } catch (_0x531976) {}
              document.getElementById('mm-action-play').click();
            }, 0x15e);
          } catch (_0xe0a59b) {
            document.getElementById("mm-action-play").click();
          }
        }
        if (false && _0x20a051.keyCode == 0x38) {
          document.getElementById("settings-show-names-switch").click();
          _0x2e052d.sn = false;
        }
        if (_0x20a051.keyCode === 0x20) {
          _0x172a13.eo = false;
        }
      });
      _0x39228d();
      window.addEventListener("load", function () {
        if (_0x2e052d.background) {
          var _0x3de4b9 = _0x2e052d.background;
          for (var _0x3c036b = 0x0; _0x3c036b < _0x38efcd.length; _0x3c036b++) {
            if (_0x38efcd[_0x3c036b].url === _0x3de4b9) {
              _0x52ab02 = _0x3c036b;
              break;
            }
          }
        }
      });
      _0x58107b.addEventListener("touchmove", function (_0x30a051) {
        if (false && false && true && false) {
          var _0x1606eb = btoa("WFT");
          if (_0x2e052d.mo1.x != -0x1 && _0x2e052d.mo1.y == -0x1 && btoa(_0x1606eb) == "VlZBPQ==" || _0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y != -0x1 && btoa(_0x1606eb) == "VlZBPQ==") {
            var _0x7711e = ooo.Xg.Kf.Wg.Ah;
            var _0x51b2b1 = _0x58107b.offsetHeight;
            var _0x233296 = _0x58107b.offsetWidth;
            var _0x160549 = _0x51b2b1 * 0.5;
            var _0x213ca4 = _0x233296 * 0.5;
            var _0x4fcc99 = btoa("TeamWFT");
            for (let _0x44daa2 = 0x0; _0x44daa2 < _0x30a051.changedTouches.length; _0x44daa2++) {
              var _0x159bea = _0x30a051.changedTouches[_0x44daa2].pageX;
              var _0x25851d = _0x30a051.changedTouches[_0x44daa2].pageY;
              var _0x12a30e = _0x30a051.changedTouches[_0x44daa2].identifier;
              if (true && btoa(_0x4fcc99) == "VkdWaGJWVlE=") {
                _0x51b2b1 *= 0.5;
                _0x233296 *= 0.5;
              }
              if (false && btoa(_0x4fcc99) == "VkdWaGJWVlE=") {
                _0x51b2b1 = _0x7711e.img_o_2.y + 0x6e;
                _0x233296 = _0x7711e.img_o_2.x + 0x6e;
              }
              if (false && btoa(_0x4fcc99) == "VkdWaGJWVlE=") {
                _0x51b2b1 = _0x7711e.img_o_3.y + 0x6e;
                _0x233296 = _0x7711e.img_o_3.x + 0x6e;
              }
              if (false && btoa(_0x4fcc99) == "VkdWaGJWVlE=" || false && btoa(_0x4fcc99) == "VkdWaGJWVlE=") {
                _0x51b2b1 = _0x7711e.img_o_4.y + 0x6e;
                _0x233296 = _0x7711e.img_o_4.x + 0x6e;
              }
              var _0x20624a = btoa("please don't copy my code");
              var _0xc429da = Math.atan2(_0x25851d - _0x51b2b1, _0x159bea - _0x233296);
              var _0x471aea = Math.cos(_0xc429da);
              var _0x53466a = Math.sin(_0xc429da);
              var _0x3a5ced = btoa("wormate.io");
              var _0x33ffb7 = _0x2e052d.mo1.x == _0x12a30e;
              btoa("teamwft");
              if (_0x33ffb7 && btoa(_0x3a5ced) == "VjI5eWJXRjBaUzVwYnc9PQ==") {
                if (_0x159bea <= 0x0 || _0x25851d <= 0x0) {
                  _0x2e052d.mo1.x = -0x1;
                  _0x7711e.img_p_1.alpha = 0.25;
                  if (false || false) {
                    _0x7711e.img_p_2.alpha = 0.25;
                  }
                } else {
                  _0x172a13.fo = _0xc429da;
                  var _0xeeb67 = 0x32;
                  if (true || false || false) {
                    _0xeeb67 = 0x6e;
                  }
                  var _0xd18fa8 = _0x233296 - _0x159bea;
                  var _0x59f91a = _0x51b2b1 - _0x25851d;
                  var _0x604d9 = Math.sqrt(_0xd18fa8 * _0xd18fa8 + _0x59f91a * _0x59f91a);
                  var _0x17edba = _0x213ca4 + _0x604d9 * _0x471aea - 0x44;
                  var _0x581cb7 = _0x160549 + _0x604d9 * _0x53466a - 0x44;
                  var _0x13615c = _0x213ca4 + _0xeeb67 * _0x471aea - 0x44;
                  var _0x5b9a2b = _0x160549 + _0xeeb67 * _0x53466a - 0x44;
                  var _0x1b756d = _0x213ca4 + _0x471aea * 0x4b - 0x44;
                  var _0x15a62e = _0x160549 + _0x53466a * 0x4b - 0x44;
                  var _0x65cc1e = _0x159bea - 0x55;
                  var _0x5e91f6 = _0x25851d - 0x55;
                  var _0x37e17e = _0x233296 + _0xeeb67 * _0x471aea - 0x55;
                  var _0x4eba53 = _0x51b2b1 + _0xeeb67 * _0x53466a - 0x55;
                  var _0x1e78e1 = _0x233296 + _0x471aea * 0x3 - 0x6e;
                  var _0x4d1b48 = _0x51b2b1 + _0x53466a * 0x3 - 0x6e;
                  if (_0x604d9 < _0xeeb67) {
                    if (_0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y != -0x1) {
                      _0x7711e.img_pf_1.x = _0x17edba;
                      _0x7711e.img_pf_1.y = _0x581cb7;
                    } else {
                      _0x7711e.img_p_1.x = _0x17edba;
                      _0x7711e.img_p_1.y = _0x581cb7;
                      if (false || false || false) {
                        _0x7711e.img_p_2.x = _0x17edba;
                        _0x7711e.img_p_2.y = _0x581cb7;
                      }
                    }
                  } else {
                    if (_0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y != -0x1) {
                      _0x7711e.img_pf_1.x = _0x13615c;
                      _0x7711e.img_pf_1.y = _0x5b9a2b;
                      if (false || false) {
                        if (_0x604d9 < 0x4b) {
                          _0x7711e.img_pf_1.x = _0x17edba;
                          _0x7711e.img_pf_1.y = _0x581cb7;
                        } else {
                          _0x7711e.img_pf_1.x = _0x1b756d;
                          _0x7711e.img_pf_1.y = _0x15a62e;
                        }
                      }
                    } else {
                      _0x7711e.img_p_1.x = _0x13615c;
                      _0x7711e.img_p_1.y = _0x5b9a2b;
                      if (false || false || false) {
                        _0x7711e.img_p_2.x = _0x13615c;
                        _0x7711e.img_p_2.y = _0x5b9a2b;
                      }
                    }
                  }
                }
              } else {
                if ((_0x33ffb7 = _0x2e052d.mo2.y == _0x12a30e) && btoa(_0x20624a) == 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09') {
                  if (_0x159bea <= 0x0 || _0x25851d <= 0x0) {
                    _0x2e052d.mo2.y = -0x1;
                    _0x7711e.img_f.visible = false;
                    _0x7711e.img_pf_1.visible = false;
                    _0x7711e.img_p_1.visible = true;
                    if (false || false || false) {
                      _0x7711e.img_p_2.visible = true;
                    }
                    if (false || false) {
                      _0x7711e.img_f.visible = true;
                    }
                    _0x172a13.eo = false;
                  } else {}
                }
              }
            }
          }
        } else if (!_0x16f9d2() || !_0x2e052d.joystick.checked) {
          if (_0x30a051 = _0x30a051 || window.event) {
            if ((_0x30a051 = _0x30a051.touches[0x0]).clientX !== undefined) {
              _0x172a13.fo = Math.atan2(_0x30a051.clientY - _0x58107b.offsetHeight * 0.5, _0x30a051.clientX - _0x58107b.offsetWidth * 0.5);
            } else {
              _0x172a13.fo = Math.atan2(_0x30a051.pageY - _0x58107b.offsetHeight * 0.5, _0x30a051.pageX - _0x58107b.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      _0x58107b.addEventListener("touchstart", function (_0x160cb7) {
        if (false && false && true && false) {
          var _0x34a499 = ooo.Xg.Kf.Wg.Ah;
          var _0x161ba4 = btoa("wormate.io");
          var _0x34babf = _0x58107b.offsetHeight;
          var _0x50878f = btoa("teamwft");
          var _0x197534 = _0x58107b.offsetWidth;
          var _0x168748 = btoa("please don't copy my code");
          var _0x24a13b = (_0x160cb7 = _0x160cb7 || window.event).touches.item(0x0).pageX;
          var _0x26bf66 = btoa("TeamWFT");
          var _0x1b261d = _0x160cb7.touches.item(0x0).pageY;
          var _0x505a24 = _0x160cb7.touches.length;
          var _0x2a8dca = btoa("WFT");
          var _0x563465 = _0x160cb7.touches.item(0x0).identifier;
          for (let _0x4fcd2c = 0x0; _0x4fcd2c < _0x505a24; _0x4fcd2c++) {
            if (_0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y != -0x1) {
              if (_0x160cb7.touches.item(_0x4fcd2c).identifier != _0x2e052d.mo2.y) {
                _0x24a13b = _0x160cb7.touches.item(_0x4fcd2c).pageX;
                _0x1b261d = _0x160cb7.touches.item(_0x4fcd2c).pageY;
                _0x563465 = _0x160cb7.touches.item(_0x4fcd2c).identifier;
              }
            } else {
              _0x24a13b = _0x160cb7.touches.item(_0x4fcd2c).pageX;
              _0x1b261d = _0x160cb7.touches.item(_0x4fcd2c).pageY;
              _0x563465 = _0x160cb7.touches.item(_0x4fcd2c).identifier;
            }
          }
          ;
          var _0x443f43 = 0x0;
          if (false && btoa(_0x168748) == 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09' || false && btoa(_0x161ba4) == "VjI5eWJXRjBaUzVwYnc9PQ==") {
            _0x443f43 = Math.sqrt((_0x24a13b - _0x34a499.img_f.x - 0x64) * (_0x24a13b - _0x34a499.img_f.x - 0x64) + (_0x1b261d - _0x34a499.img_f.y - 0x64) * (_0x1b261d - _0x34a499.img_f.y - 0x64));
          }
          if (_0x505a24 == 0x1 && (false && _0x443f43 > 0x28 || true) && (false && _0x443f43 > 0x28 || true)) {
            _0x2e052d.mo2.y = -0x1;
            _0x34a499.img_f.visible = false;
            _0x34a499.img_pf_1.visible = false;
            _0x34a499.img_p_1.alpha = 0.25;
            _0x34a499.img_p_1.visible = true;
            if (false || false) {
              _0x34a499.img_p_2.alpha = 0.25;
              _0x34a499.img_p_2.visible = true;
              _0x34a499.img_f.visible = true;
            }
            _0x172a13.eo = false;
          }
          if (_0x2e052d.mo1.x == -0x1 && _0x2e052d.mo1.y == -0x1 && btoa(_0x161ba4) == "VjI5eWJXRjBaUzVwYnc9PQ==" && (false && _0x443f43 > 0x28 || true && btoa(_0x50878f) == "ZDI5eWJYVnc=") && (false && _0x443f43 > 0x28 || true && btoa(_0x26bf66) == "VkdWaGJWVlE=")) {
            _0x2e052d.mo1.x = _0x563465;
            if (_0x2e052d.mo1.x == _0x2e052d.mo2.y && _0x2e052d.mo1.y == _0x2e052d.mo2.x) {
              _0x24a13b = _0x160cb7.touches.item(0x1).pageX;
              _0x1b261d = _0x160cb7.touches.item(0x1).pageY;
            }
            var _0x5ea45a = _0x197534 * 0.5 - 0x44;
            var _0x4d1f82 = _0x34babf * 0.5 - 0x44;
            var _0x5f3f5b = _0x24a13b - 0x6e;
            var _0x2b3e2d = _0x1b261d - 0x6e;
            var _0x19b4a1 = _0x24a13b - 0x55;
            var _0x47037c = _0x1b261d - 0x55;
            if (true && _0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y == -0x1) {
              _0x34a499.img_p_1.alpha = 0x1;
              _0x34a499.img_p_1.x = _0x5ea45a;
              _0x34a499.img_p_1.y = _0x4d1f82;
              _0x34a499.img_p_1.visible = true;
            }
            if (false && btoa(_0x168748) == 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09') {
              _0x34a499.img_o_3.alpha = 0x1;
              _0x34a499.img_o_3.x = _0x5f3f5b;
              _0x34a499.img_o_3.y = _0x2b3e2d;
              _0x34a499.img_i_3.alpha = 0x1;
              _0x34a499.img_i_3.x = _0x19b4a1;
              _0x34a499.img_i_3.y = _0x47037c;
              if (_0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y == -0x1) {
                _0x34a499.img_p_3.alpha = 0x1;
                _0x34a499.img_p_3.x = _0x5ea45a;
                _0x34a499.img_p_3.y = _0x4d1f82;
                _0x34a499.img_p_3.visible = true;
              }
            }
            if (false && btoa(_0x26bf66) == "VkdWaGJWVlE=" && _0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y == -0x1) {
              _0x34a499.img_p_2.alpha = 0x1;
              _0x34a499.img_p_2.x = _0x5ea45a;
              _0x34a499.img_p_2.y = _0x4d1f82;
              _0x34a499.img_p_2.visible = true;
            }
            if (false && btoa(_0x50878f) == "ZDI5eWJYVnc=" && _0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y == -0x1) {
              _0x34a499.img_p_2.alpha = 0x1;
              _0x34a499.img_p_2.x = _0x5ea45a;
              _0x34a499.img_p_2.y = _0x4d1f82;
              _0x34a499.img_p_2.visible = true;
            }
          } else if (_0x505a24 >= 0x2 && _0x2e052d.mo2.x == -0x1 && _0x2e052d.mo2.y == -0x1 && btoa(_0x50878f) == "ZDI5eWJYVnc=" || _0x505a24 == 0x1 && false && _0x443f43 <= 0x28 && btoa(_0x2a8dca) == "VlZBPQ==" || _0x505a24 == 0x1 && false && _0x443f43 <= 0x28 && btoa(_0x26bf66) == "VkdWaGJWVlE=") {
            _0x2e052d.mo2.y = _0x563465;
            _0x34a499.img_f.visible = true;
            _0x34a499.img_pf_1.visible = true;
            _0x34a499.img_p_1.visible = false;
            _0x34a499.img_pf_1.x = _0x34a499.img_p_1.x;
            _0x34a499.img_pf_1.y = _0x34a499.img_p_1.y;
            if (false || false || false) {
              _0x34a499.img_p_2.visible = false;
              _0x34a499.img_pf_1.x = _0x34a499.img_p_2.x;
              _0x34a499.img_pf_1.y = _0x34a499.img_p_2.y;
            }
            if (false && btoa(_0x50878f) == "ZDI5eWJYVnc=") {
              _0x34a499.img_p_3.visible = false;
              _0x34a499.img_pf_1.x = _0x34a499.img_p_3.x;
              _0x34a499.img_pf_1.y = _0x34a499.img_p_3.y;
            }
            if (true && true) {
              _0x34a499.img_f.x = _0x24a13b - 0x64;
              _0x34a499.img_f.y = _0x1b261d - 0x64;
            }
            _0x172a13.eo = true;
          }
          ;
          _0x160cb7.preventDefault();
        } else {
          if (_0x160cb7 = _0x160cb7 || window.event) {
            _0x172a13.eo = _0x160cb7.touches.length >= 0x2;
          }
          _0x160cb7.preventDefault();
        }
      }, true);
      _0x58107b.addEventListener('touchend', function (_0x19929c) {
        if (false && false && true && false) {
          var _0x526a85 = ooo.Xg.Kf.Wg.Ah;
          var _0x23ba93 = btoa("WFT");
          if (_0x19929c = _0x19929c || window.event) {
            if ((_0x19929c = _0x19929c.changedTouches[0x0]).clientX !== undefined) {
              _0x809c79(_0x19929c.clientX, _0x19929c.clientY);
            } else {
              _0x809c79(_0x19929c.pageX, _0x19929c.pageY);
            }
          }
          var _0x41a7e5 = btoa("TeamWFT");
          var _0x57c3f3 = _0x19929c.identifier;
          if (_0x57c3f3 == _0x2e052d.mo1.x && _0x2e052d.mo1.y == -0x1 && btoa(_0x41a7e5) == "VkdWaGJWVlE=") {
            _0x2e052d.mo1.x = -0x1;
            _0x526a85.img_p_1.alpha = 0.25;
            if (false && btoa(_0x23ba93) == "VlZBPQ==") {
              _0x526a85.img_o_3.alpha = 0.25;
              _0x526a85.img_i_3.alpha = 0.25;
              _0x526a85.img_p_3.alpha = 0.25;
            }
          }
          var _0x3c0fd5 = btoa("teamwft");
          if (_0x2e052d.mo2.x == -0x1 && _0x57c3f3 == _0x2e052d.mo2.y && btoa(_0x3c0fd5) == "ZDI5eWJYVnc=") {
            _0x2e052d.mo2.y = -0x1;
            _0x526a85.img_f.visible = false;
            _0x526a85.img_pf_1.visible = false;
            _0x526a85.img_p_1.visible = true;
            if (false || false && btoa(_0x41a7e5) == "VkdWaGJWVlE=" || false && btoa(_0x3c0fd5) == "ZDI5eWJYVnc=") {
              _0x526a85.img_p_2.visible = true;
            }
            if (false || false) {
              _0x526a85.img_f.visible = true;
            }
            _0x172a13.eo = false;
          }
        } else {
          if (_0x19929c = _0x19929c || window.event) {
            _0x172a13.eo = _0x19929c.touches.length >= 0x2;
          }
          if (false && false && (_0x19929c = _0x19929c || window.event)) {
            if ((_0x19929c = _0x19929c.changedTouches[0x0]).clientX !== undefined) {
              _0x809c79(_0x19929c.clientX, _0x19929c.clientY);
            } else {
              _0x809c79(_0x19929c.pageX, _0x19929c.pageY);
            }
          }
        }
      }, true);
      _0x58107b.addEventListener("mousemove", function (_0x2c5c77) {
        if (_0x2c5c77 = _0x2c5c77 || _0xa914b4.c.event && _typeof(_0x2c5c77.clientX) != 'undefined') {
          _0x172a13.fo = _0x1a7a89.ta(_0x2c5c77.clientY - _0x58107b.offsetHeight * 0.5, _0x2c5c77.clientX - _0x58107b.offsetWidth * 0.5);
        }
      }, true);
      _0x58107b.addEventListener("mousedown", function (_0x19eeb7) {
        _0x172a13.eo = true;
      }, true);
      _0x58107b.addEventListener("mouseup", function (_0x2c1525) {
        _0x172a13.eo = false;
      }, true);
      this.Wg = new _0xa914b4.lh(_0x288b76);
      this.go = 0x0;
      this.fo = 0x0;
      this.eo = false;
      _0x5a0b1f.eie = _0x172a13;
    })).prototype.Sa = function () {};
    _0x52da2e.prototype.ml = function () {
      _0xa914b4.Nf.rg(false);
      _0x51599b.f.h(_0xa914b4.Uf.Tf, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Tn, 0x1f4);
      if (this.go === 0x0) {
        _0x51599b.f.h(_0xa914b4.Uf.Un, 0x1);
      } else {
        _0x51599b.f.g(_0xa914b4.Uf.Un, 0x1f4);
      }
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x52da2e.prototype.ho = function () {
      this.go = 0x0;
      return this;
    };
    _0x52da2e.prototype.io = function () {
      _0x51599b.f.h(_0x419f39, 0x1);
      _0x1a7a89.Y(function () {
        _0x51599b.f.g(_0x419f39, 0x1f4);
      }, 0xbb8);
      _0x51599b.f.h(_0x4d1e88, 0x1);
      _0x1a7a89.Y(function () {
        _0x51599b.f.g(_0x4d1e88, 0x1f4);
      }, 0x1f4);
      this.go = 0x1;
      return this;
    };
    _0x52da2e.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === 0x1) {
        ooo.ij.mf();
      }
    };
    _0x52da2e.prototype.qg = function () {
      this.Wg.qg();
    };
    _0x52da2e.prototype.ug = function (_0x20813c, _0x5118f1) {
      this.Wg.ug(_0x20813c, _0x5118f1);
    };
    _0x52da2e.prototype.jo = function (_0x27b958, _0x10e105, _0xeaacdc) {
      var _0x17ecaa;
      var _0x31c3fd;
      var _0x36bd58;
      if (_0x10e105 >= 0x1 && _0x10e105 <= 0xa) {
        _0x17ecaa = _0x1a7a89.U('index.game.result.place.i' + _0x10e105);
        _0x31c3fd = _0x1a7a89.U("index.game.result.placeInBoard");
        _0x36bd58 = _0x1a7a89.U("index.game.social.shareResult.messGood").replace('{0}', _0xeaacdc).replace('{1}', _0x27b958).replace('{2}', _0x17ecaa);
      } else {
        _0x17ecaa = '';
        _0x31c3fd = _0x1a7a89.U("index.game.result.tryHit");
        _0x36bd58 = _0x1a7a89.U("index.game.social.shareResult.messNorm").replace("{0}", _0xeaacdc).replace("{1}", _0x27b958);
      }
      _0x2a9bb1.html(_0x1a7a89.U("index.game.result.your"));
      _0x200c93.html(_0x27b958);
      _0x5e44c6.html(_0x17ecaa);
      _0x272953.html(_0x31c3fd);
      if (_0x30354b.co.bo) {
        var _0xf06534;
        var _0x39a1a0;
        var _0x1f33ae;
        var _0x18cda3 = _0x1a7a89.U("index.game.result.share");
        _0x1a7a89.U("index.game.social.shareResult.caption");
        'wormate.io';
        _0xf06534 = _0x36bd58;
        _0x39a1a0 = _0x36bd58;
        (_0x1f33ae = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x18cda3 + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : _typeof(FB)) !== 'undefined' && _typeof(FB.ui) != "undefined") {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': "https://wormate.io",
              'name': 'wormate.io',
              'caption': _0xf06534,
              'description': _0x39a1a0,
              'picture': "https://wormate.io/images/og-share-img-new.jpg"
            }, function () {});
          }
        });
        _0x58fb66.empty().append(_0x1f33ae);
      }
    };
    _0x52da2e.prototype.ko = function () {
      return this.fo;
    };
    _0x52da2e.prototype.lo = function () {
      return this.eo;
    };
    _0xc0dbe0 = {
      'ho': 0x0,
      'io': 0x1
    };
    _0xa914b4.Bk = _0x52da2e;
    _0x285ddc = $("#loading-progress-cont");
    _0x14bf70 = $("#loading-progress-bar");
    _0x10fb6d = $('#loading-progress-text');
    (_0x442657 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
      this.mo = -0x1;
      this.no = '';
    })).prototype.Sa = function () {};
    _0x442657.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Yn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x442657.prototype.nl = function () {
      ooo.ij.Ye(_0xa914b4.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    _0x442657.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    _0x442657.prototype.oo = function () {
      this.po('', 0x0);
      _0x51599b.f.g(_0x285ddc, 0x64);
    };
    _0x442657.prototype.qo = function () {
      _0x51599b.f.h(_0x285ddc, 0x64);
    };
    _0x442657.prototype.po = function (_0x28bfd4, _0x26c4d2) {
      if (this.no !== _0x28bfd4) {
        this.no = _0x28bfd4;
      }
      var _0x4d73c7 = _0x1a7a89.fa(_0x1a7a89._(_0x26c4d2 * 0x64), 0x0, 0x64);
      if (this.mo !== _0x4d73c7) {
        _0x14bf70.css("width", _0x4d73c7 + '%');
        _0x10fb6d.html(_0x4d73c7 + " %");
      }
    };
    _0xa914b4.$k = _0x442657;
    _0xcef585 = $("#mm-line-top");
    $('#mm-line-center');
    $("#mm-line-bottom");
    _0x17d036 = $("#mm-bottom-buttons");
    _0x33b7e6 = $("#mm-menu-cont");
    _0x3ffe96 = $("#mm-loading");
    _0x1e5c4f = $("#mm-loading-progress-bar");
    _0x140b84 = $("#mm-loading-progress-text");
    $("#mm-event-text");
    _0x131730 = $("#mm-skin-canv");
    _0x164a9a = $('#mm-skin-prev');
    _0x24f3b4 = $("#mm-skin-next");
    _0x286f05 = $("#mm-skin-over");
    _0x295a90 = $('#mm-skin-over-button-list');
    _0x55d929 = $('#mm-params-nickname');
    _0x5ad346 = $('#mm-params-game-mode');
    _0x2db1b5 = $("#mm-action-play");
    _0x59d7a5 = $("#mm-action-guest");
    _0x5b67b0 = $("#mm-action-login");
    _0x91de9 = $("#mm-player-info");
    _0x549725 = $("#mm-store");
    _0x2486ba = $("#mm-leaders");
    _0x5c88b4 = $('#mm-settings');
    _0x12b3b7 = $("#mm-coins-box");
    _0xfa43bd = $("#mm-player-avatar");
    _0x53ae91 = $('#mm-player-username');
    _0x1e1d2d = $("#mm-coins-val");
    _0x34788b = $("#mm-player-exp-bar");
    _0x220d90 = $("#mm-player-exp-val");
    _0x51b631 = $("#mm-player-level");
    (_0x27e709 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.kl);
      this.mo = -0x1;
      this.no = '';
      var _0x4c9d35 = ["ÙƒÙ„Ø¨", 'fuck', "fuak", 'Ø¬Ø­Ø´', "Name Error", "Ø¹Ø±Ø¶Ùƒ", "Ù†Ø¸ÙŠÙ", "Ø·ÙŠØ¨Ø©", "Ø§Ø®ÙˆÙƒ", "Ø§Ø®ØªÙƒ", "Ø§Ù…Ùƒ", 'Ø§Ø¨ÙˆÙƒ', "Ù‚ÙˆØ§Ø¯", "Ù…Ù„Ø¹ÙˆÙ†"];
      function _0x9083fb(_0x591ef1) {
        if (!_0x591ef1) {
          return '';
        }
        return _0x591ef1.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, '').replace(/[Ù€]/g, '').replace(/[Ù‹ÙŒÙÙŽÙÙÙ‘Ù’]/g, '').replace(/[Ø£Ø¥Ø¢Ø§]/g, 'Ø§').replace(/[Ù‰ÙŠ]/g, 'ÙŠ').replace(/[Ø©]/g, 'Ù‡');
      }
      function _0x4b2c55(_0x594fc4, _0x4a3225) {
        if (!_0x594fc4) {
          return false;
        }
        var _0x46e34d = _0x594fc4.replace(/\*$/, '');
        var _0x3fa1c9 = _0x9083fb(_0x46e34d);
        var _0x3fb839 = Array.isArray(_0x4a3225) ? _0x4a3225 : Object.values(_0x4a3225);
        return _0x3fb839.some(function (_0x3c3d58) {
          var _0x103302 = _0x9083fb(_0x3c3d58);
          return _0x3fa1c9.includes(_0x103302);
        });
      }
      window.handleNicknameChange = function (_0x51c9e9) {
        if (!_0x51c9e9 || _0x51c9e9.trim() === '') {
          return '';
        }
        if (_0x4b2c55(_0x51c9e9, _0x4c9d35)) {
          return "Name Error*";
        }
        return _0x51c9e9;
      };
      fetch("https://wormx.store/2025/excel/name_banned_text.php").then(_0x330021 => _0x330021.json()).then(_0x5acd4e => {
        _0x4c9d35 = Array.isArray(_0x5acd4e) ? _0x5acd4e : Object.values(_0x5acd4e);
      })["catch"](_0x50da4e => {
        console.error("Error loading banned words:", _0x50da4e);
      });
      this.ro = new _0xa914b4.Lm(_0x131730);
      _0x5ad346.click(function () {
        ooo.ij['if']();
      });
      _0x131730.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      _0x164a9a.click(function () {
        ooo.ij['if']();
        ooo.so.kk();
      });
      _0x24f3b4.click(function () {
        ooo.ij['if']();
        ooo.so.jk();
      });
      _0x55d929.keypress(function (_0x5cfd2d) {
        _0x2e052d.r1 = false;
        if (_0x5cfd2d.keyCode === 0xd) {
          ooo.to();
        }
      });
      _0x2db1b5.click(function () {
        var _0x57259e = _0x55d929.val();
        if (_0x57259e && _0x57259e.trim() !== '') {
          _0x55d929.val(window.handleNicknameChange(_0x57259e));
        }
        ooo.ij['if']();
        ooo.to();
      });
      _0x59d7a5.click(function () {
        var _0x1efb46 = _0x55d929.val();
        if (_0x1efb46 && _0x1efb46.trim() !== '') {
          _0x55d929.val(window.handleNicknameChange(_0x1efb46));
        }
        ooo.ij['if']();
        ooo.to();
      });
      _0x5b67b0.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      _0x5c88b4.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      _0x91de9.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      _0x2486ba.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      _0x549725.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      _0x12b3b7.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var _0x8cfaaa = _0xa914b4.Cg.Og(_0xa914b4.Cg.Ig);
      if (_0x8cfaaa !== 'ARENA' && _0x8cfaaa !== "TEAM2") {
        _0x8cfaaa = 'ARENA';
      }
      _0x5ad346.val(_0x8cfaaa);
    })).prototype.Sa = function () {
      var _0x53f643 = this;
      function _0x3a9800(_0x387008, _0x49721a) {
        if (_0x387008.pm) {
          _0x49721a.skinId = _0x387008.pm.Tj;
          _0x49721a.eyesId = _0x387008.pm.Uj;
          _0x49721a.mouthId = _0x387008.pm.Vj;
          _0x49721a.hatId = _0x387008.pm.Wj;
          _0x49721a.glassesId = _0x387008.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          _0x3a9800(_0x2e052d, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), _0xa914b4._j.$j);
          ooo.so.lk(ooo.ok.Vl(), _0xa914b4._j.ak);
          ooo.so.lk(ooo.ok.Wl(), _0xa914b4._j.bk);
          ooo.so.lk(ooo.ok.Xl(), _0xa914b4._j.dk);
          ooo.so.lk(ooo.ok.Yl(), _0xa914b4._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), _0xa914b4._j.$j);
          ooo.so.lk(0x0, _0xa914b4._j.ak);
          ooo.so.lk(0x0, _0xa914b4._j.bk);
          ooo.so.lk(0x0, _0xa914b4._j.dk);
          ooo.so.lk(0x0, _0xa914b4._j.ck);
        }
      });
      ooo.ok.fm(function () {
        _0x2db1b5.toggle(ooo.ok.nk());
        _0x5b67b0.toggle(!ooo.ok.nk());
        _0x59d7a5.toggle(!ooo.ok.nk());
        _0x2486ba.toggle(ooo.ok.nk());
        _0x549725.toggle(ooo.ok.nk());
        _0x12b3b7.toggle(ooo.ok.nk());
        _0x91de9.toggle(true);
        _0x5c88b4.toggle(true);
        if (ooo.ok.nk()) {
          _0x286f05.hide();
          _0x53ae91.html(ooo.ok.Ll());
          _0xfa43bd.attr('src', ooo.ok.Nl());
          _0x1e1d2d.html(ooo.ok.Ql());
          _0x34788b.width(ooo.ok.Sl() * 0x64 / ooo.ok.Tl() + '%');
          _0x220d90.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          _0x51b631.html(ooo.ok.Rl());
          _0x55d929.val(ooo.ok.Ml());
        } else {
          _0x286f05.toggle(_0x30354b.co.bo && !ooo.xo());
          _0x53ae91.html(_0x53ae91.data("guest"));
          _0xfa43bd.attr('src', _0x30354b.H.M);
          _0x1e1d2d.html('10');
          _0x34788b.width('0');
          _0x220d90.html('');
          _0x51b631.html(0x1);
          _0x55d929.val(_0xa914b4.Cg.Og(_0xa914b4.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        _0x53f643.ro.Gm(ooo.so.ek());
      });
    };
    _0x27e709.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.g(_0xa914b4.Uf.Rn, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Sn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Vn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x27e709.prototype.yo = function () {
      _0x51599b.f.g(_0xcef585, 0x1f4);
      _0x51599b.f.g(_0x17d036, 0x1f4);
      _0x51599b.f.g(_0x33b7e6, 0x1f4);
      _0x51599b.f.h(_0x3ffe96, 0x64);
    };
    _0x27e709.prototype.zo = function () {
      _0x51599b.f.h(_0xcef585, 0x64);
      _0x51599b.f.h(_0x17d036, 0x64);
      _0x51599b.f.h(_0x33b7e6, 0x64);
      _0x51599b.f.g(_0x3ffe96, 0x1f4);
    };
    _0x27e709.prototype.po = function (_0x43bc53, _0x580452) {
      if (this.no !== _0x43bc53) {
        this.no = _0x43bc53;
      }
      var _0x3a6745 = _0x1a7a89.fa(_0x1a7a89._(_0x580452 * 0x64), 0x0, 0x64);
      if (this.mo !== _0x3a6745) {
        _0x1e5c4f.css("width", _0x3a6745 + '%');
        _0x140b84.html(_0x3a6745 + " %");
      }
    };
    _0x27e709.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    _0x27e709.prototype.hl = function () {
      this.ro.rg(false);
    };
    _0x27e709.prototype.qg = function () {
      this.ro.qg();
    };
    _0x27e709.prototype.ug = function (_0x1b80dc, _0x5d686e) {
      this.ro.ug();
    };
    _0x27e709.prototype.Ml = function () {
      return _0x55d929.val();
    };
    _0x27e709.prototype.Ao = function () {
      return _0x5ad346.val();
    };
    _0x27e709.prototype.uo = function () {
      var _0x34fe2c = $("#mm-advice-cont").children();
      var _0x272d9e = 0x0;
      _0x1a7a89.X(function () {
        _0x34fe2c.eq(_0x272d9e).fadeOut(0x1f4, function () {
          if (++_0x272d9e >= _0x34fe2c.length) {
            _0x272d9e = 0x0;
          }
          _0x34fe2c.eq(_0x272d9e).fadeIn(0x1f4).css("display", "inline-block");
        });
      }, 0xbb8);
    };
    _0x27e709.prototype.vo = function () {
      if (_0x30354b.co.bo && !ooo.xo()) {
        _0x286f05.show();
        var _0x355ee2 = _0x1a7a89.U("index.game.main.menu.unlockSkins.share");
        var _0x13ca1a = encodeURIComponent(_0x1a7a89.U('index.game.main.menu.unlockSkins.comeAndPlay'));
        _0x295a90.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x13ca1a + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + _0x355ee2 + '</span></a>').click(function _0x36cb0e() {
          ooo.Bo(true);
          _0x1a7a89.Y(function () {
            _0x286f05.hide();
          }, 0xbb8);
        }));
      }
    };
    _0xa914b4.Ck = _0x27e709;
    (_0x1de4b4 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
    })).prototype.Sa = function () {};
    _0x1de4b4.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.h(_0xa914b4.Uf.Tf, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0xa914b4.el = _0x1de4b4;
    (_0x1f2d0e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
    })).prototype.Sa = function () {};
    _0x1f2d0e.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Zn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x1f2d0e.prototype.nl = function () {};
    _0xa914b4.Xk = _0x1f2d0e;
    _0x277b9e = $("#toaster-stack");
    (_0x55c21e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    _0x55c21e.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Sn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.Xn, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x55c21e.prototype.nl = function () {
      this.Eo();
    };
    _0x55c21e.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0x0;
    };
    _0x55c21e.prototype.Fo = function (_0x4078fa) {
      this.Co.unshift(_0x4078fa);
      _0x1a7a89.Y(function () {
        ooo.Xg.ol();
      }, 0x0);
    };
    _0x55c21e.prototype.km = function (_0x30a00b) {
      this.Co.push(_0x30a00b);
      _0x1a7a89.Y(function () {
        ooo.Xg.ol();
      }, 0x0);
    };
    _0x55c21e.prototype.Eo = function () {
      var _0x3072a1 = this;
      if (this.Do == null) {
        if (this.Co.length === 0x0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var _0x470f30 = this.Co.shift();
        this.Do = _0x470f30;
        var _0x517759 = _0x470f30.ag();
        _0x51599b.f.g(_0x517759, 0x12c);
        _0x277b9e.append(_0x517759);
        _0x470f30.Go = function () {
          _0x517759.fadeOut(0x12c);
          _0x1a7a89.Y(function () {
            _0x517759.remove();
          }, 0x12c);
          if (_0x3072a1.Do === _0x470f30) {
            _0x3072a1.Do = null;
          }
          _0x3072a1.Eo();
        };
        _0x470f30.nl();
      }
    };
    _0xa914b4.Zk = _0x55c21e;
    _0xa914b4.ll = {
      'ao': 0x0,
      'kl': 0x1
    };
    _0x5d5c9a = $('#popup-menu-label');
    _0x1e0727 = $("#popup-menu-coins-box");
    _0x1503fc = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij['if']();
      ooo.Xg.jl();
    });
    _0x1e0727.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (_0x40d54a = _0x1a7a89.ca(_0xa914b4.Uf, function (_0x18598e, _0x154528) {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.kl);
      this.Xa = _0x18598e;
      this.Io = _0x154528;
      this.Jo = [];
    })).prototype.Sa = function () {
      _0x40d54a.parent.prototype.Sa.call(this);
      if (!_0x40d54a.Ko) {
        _0x40d54a.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            _0x1503fc.html(ooo.ok.Ql());
          } else {
            _0x1503fc.html('0');
          }
        });
      }
      _0x51599b.f.h(_0xa914b4.Ho.Lo, 0x64);
    };
    _0x40d54a.Mo = $("#coins-view");
    _0x40d54a.No = $("#leaders-view");
    _0x40d54a.Oo = $("#profile-view");
    _0x40d54a.Po = $('#login-view');
    _0x40d54a.Qo = $('#settings-view');
    _0x40d54a.Ro = $("#skins-view");
    _0x40d54a.So = $("#store-view");
    _0x40d54a.To = $("#wear-view");
    _0x40d54a.Uo = $('#withdraw-consent-view');
    _0x40d54a.Vo = $("#delete-account-view");
    _0x40d54a.Lo = $('#please-wait-view');
    _0x40d54a.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Rn, 0xc8);
      _0x51599b.f.g(_0xa914b4.Uf.Sn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0xc8);
      _0x51599b.f.g(_0xa914b4.Uf.Wn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0xc8);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0xc8);
      _0x5d5c9a.html(this.Xa);
      _0x1e0727.toggle(this.Io);
      this.Wo();
    };
    _0x40d54a.prototype.Wo = function () {};
    _0x40d54a.prototype.Xo = function (_0x22ad3d) {
      var _0x3a3459 = this;
      var _0x4b885a = _0x1a7a89.va(0x0, 0x7fffffff) & 0x7fffffff;
      this.Jo.push(_0x4b885a);
      _0x51599b.f.g(_0xa914b4.Ho.Lo, 0x64);
      _0x1a7a89.Y(function () {
        _0x3a3459.Yo(_0x4b885a);
      }, _0x22ad3d);
      return new _0x55cb8e(this, _0x4b885a);
    };
    _0x40d54a.prototype.Yo = function (_0x1b3e3f) {
      var _0x395465 = this.Jo.indexOf(_0x1b3e3f);
      if (!(_0x395465 < 0x0)) {
        this.Jo.splice(_0x395465, 0x1);
        if (this.Jo.length === 0x0) {
          _0x51599b.f.h(_0xa914b4.Ho.Lo, 0x64);
        }
      }
    };
    _0xa914b4.Ho = _0x40d54a;
    var _0x4804a5;
    var _0x4fb57a;
    var _0x2dc931;
    var _0x554555;
    var _0x2cbc88;
    var _0x47c6f5;
    var _0x2d816e;
    var _0x340522;
    var _0x1a3591;
    var _0x419f39;
    var _0x4d1e88;
    var _0x58fb66;
    var _0x2a9bb1;
    var _0x200c93;
    var _0x5e44c6;
    var _0x272953;
    var _0x288b76;
    var _0x52da2e;
    var _0xc0dbe0;
    var _0x285ddc;
    var _0x14bf70;
    var _0x10fb6d;
    var _0x442657;
    var _0xcef585;
    var _0x17d036;
    var _0x33b7e6;
    var _0x3ffe96;
    var _0x1e5c4f;
    var _0x140b84;
    var _0x131730;
    var _0x164a9a;
    var _0x24f3b4;
    var _0x286f05;
    var _0x295a90;
    var _0x55d929;
    var _0x5ad346;
    var _0x2db1b5;
    var _0x59d7a5;
    var _0x5b67b0;
    var _0x91de9;
    var _0x549725;
    var _0x2486ba;
    var _0x5c88b4;
    var _0x12b3b7;
    var _0xfa43bd;
    var _0x53ae91;
    var _0x1e1d2d;
    var _0x34788b;
    var _0x220d90;
    var _0x51b631;
    var _0x27e709;
    var _0x1de4b4;
    var _0x1f2d0e;
    var _0x277b9e;
    var _0x55c21e;
    var _0x5d5c9a;
    var _0x1e0727;
    var _0x1503fc;
    var _0x40d54a;
    var _0x256148;
    var _0x384e8a;
    var _0x32f0c0;
    var _0x587c85;
    var _0x2a41b9;
    var _0x688c31;
    var _0x4ea965;
    var _0x5cbaab;
    var _0x52aa98;
    var _0x6c52b7;
    var _0x4f4868;
    var _0x37c1ef;
    var _0x70bb44;
    var _0x1f9a6d;
    var _0x5fde7;
    var _0x1f7aab;
    var _0xda30de;
    var _0x13284c;
    var _0x4e727f;
    var _0x4f6938;
    var _0x2a1d3b;
    var _0x507be4;
    var _0xfb13de;
    var _0x24937c;
    var _0x81ee05;
    var _0x3e7911;
    var _0x19a387;
    var _0x593730;
    var _0x2dd8e8;
    var _0x121aca;
    var _0x43f2ee;
    var _0x425453;
    var _0x2bb5bf;
    var _0x16afba;
    var _0x1a821a;
    var _0x2e06af;
    var _0x5d5a9c;
    var _0x95b9ee;
    var _0x4be76f;
    var _0x4ec9f4;
    var _0x25795c;
    var _0xfef36c;
    var _0xb01087;
    var _0x2a74a6;
    var _0x4eb01b;
    var _0x25a2e3;
    var _0x4cbe00;
    var _0xf1357f;
    var _0x1c0d13;
    var _0xc94fd3;
    var _0x43c634;
    var _0x26bd28;
    var _0x4f6319;
    var _0x28865b;
    var _0x394091;
    var _0x107997;
    var _0x11b24f;
    var _0x31afcc;
    var _0x14a95b;
    var _0x3a49b3;
    var _0x50be74;
    var _0x53e7d2;
    var _0x22e324;
    var _0x2c3d31;
    var _0xe36ea9;
    var _0x66c51;
    var _0x252aee;
    var _0x29352b;
    var _0x5659d5;
    var _0x1d8a89;
    var _0x2491c3;
    var _0x19421c;
    var _0x2a404c;
    var _0xf3457a;
    var _0x57c2db;
    var _0x212326;
    var _0x323958;
    var _0x13da2d;
    var _0x5bb8c7;
    var _0x540d58;
    var _0x33d618;
    var _0x5ee0b0;
    var _0x221bb1;
    var _0x190535;
    var _0x38264b;
    var _0x14b9c0;
    var _0x50c267;
    var _0x199a03;
    var _0x17fe12;
    var _0x55cb8e = function () {
      function _0x35d2c8(_0x11d6f0, _0x25a5e5) {
        this.Zo = _0x11d6f0;
        this.$o = _0x25a5e5;
      }
      _0x35d2c8.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return _0x35d2c8;
    }();
    _0x256148 = $("#store-buy-coins_125000");
    _0x384e8a = $("#store-buy-coins_50000");
    _0x32f0c0 = $("#store-buy-coins_16000");
    _0x587c85 = $("#store-buy-coins_7000");
    _0x2a41b9 = $("#store-buy-coins_3250");
    _0x688c31 = $("#store-buy-coins_1250");
    (_0x4ea965 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.coins.tab"), false);
      var _0x4ef053 = this;
      _0x256148.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_125000");
      });
      _0x384e8a.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_50000");
      });
      _0x32f0c0.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_16000");
      });
      _0x587c85.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_7000");
      });
      _0x2a41b9.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_3250");
      });
      _0x688c31.click(function () {
        ooo.ij['if']();
        _0x4ef053.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      _0x4ea965.parent.prototype.Sa.call(this);
    };
    _0x4ea965.prototype.Wo = function () {
      _0x51599b.f.g(_0xa914b4.Ho.Mo, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x4ea965.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x4ea965.prototype.ap = function (_0x54dc59) {};
    _0xa914b4.Ik = _0x4ea965;
    _0x5cbaab = $('#highscore-table');
    _0x52aa98 = $("#leaders-button-level");
    _0x6c52b7 = $("#leaders-button-highscore");
    _0x4f4868 = $("#leaders-button-kills");
    'byKillsAndHeadShots';
    (_0x37c1ef = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U('index.game.popup.menu.leaders.tab'), true);
      var _0x20aacf = this;
      this.bp = {};
      this.cp = {
        'dp': {
          'ep': _0x52aa98,
          'fp': "byLevel"
        },
        'gp': {
          'ep': _0x6c52b7,
          'fp': "byHighScore"
        },
        'hp': {
          'ep': _0x4f4868,
          'fp': 'byKillsAndHeadShots'
        }
      };
      _0x52aa98.click(function () {
        ooo.ij['if']();
        _0x20aacf.ip(_0x20aacf.cp.dp);
      });
      _0x6c52b7.click(function () {
        ooo.ij['if']();
        _0x20aacf.ip(_0x20aacf.cp.gp);
      });
      _0x4f4868.click(function () {
        ooo.ij['if']();
        _0x20aacf.ip(_0x20aacf.cp.hp);
      });
    })).prototype.Sa = function () {
      _0x37c1ef.parent.prototype.Sa.call(this);
    };
    _0x37c1ef.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.No, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x37c1ef.prototype.nl = function () {
      var _0x592671 = this;
      ooo.ij.jf();
      var _0x108c01 = this.Xo(0x1388);
      var _0x81afca = _0x30354b.H.J + '/pub/leaders';
      _0x1a7a89.Aa(_0x81afca, function () {
        var _0x1ffe1b = {
          byLevel: [],
          byHighScore: [],
          byKillsAndHeadShots: []
        };
        _0x592671.bp = _0x1ffe1b;
        _0x592671.ip(_0x592671.jp ?? _0x592671.cp.dp);
        _0x108c01._o();
      }, function (_0x3a8608) {
        _0x592671.bp = _0x3a8608;
        _0x592671.ip(_0x592671.jp ?? _0x592671.cp.dp);
        _0x108c01._o();
      });
    };
    _0x37c1ef.prototype.ip = function (_0x417c91) {
      this.jp = _0x417c91;
      for (var _0x4b8e53 in this.cp) {
        if (this.cp.hasOwnProperty(_0x4b8e53)) {
          this.cp[_0x4b8e53].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass('pressed');
      var _0x42b7ff = this.bp[this.jp.fp];
      var _0x476149 = '';
      for (var _0x37f99c = 0x0; _0x37f99c < _0x42b7ff.length; _0x37f99c++) {
        var _0xf6fa68 = _0x42b7ff[_0x37f99c];
        _0x476149 += "<div class=\"table-row\"><span>" + (_0x37f99c + 0x1) + "</span><span><img src=\"" + _0xf6fa68.avatarUrl + "\"/></span><span>" + _0xf6fa68.username + "</span><span>" + _0xf6fa68.level + '</span><span>' + _0xf6fa68.highScore + "</span><span>" + _0xf6fa68.headShots + " / " + _0xf6fa68.kills + "</span></div>";
      }
      ;
      _0x5cbaab.empty();
      _0x5cbaab.append(_0x476149);
    };
    _0xa914b4.Kk = _0x37c1ef;
    _0x70bb44 = $("#popup-login-gg");
    _0x1f9a6d = $("#popup-login-fb");
    (_0x5fde7 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      var _0x14a940 = this;
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.login.tab"), false);
      _0x70bb44.click(function () {
        ooo.ij['if']();
        var _0x595e7f = _0x14a940.Xo(0x2710);
        _0x1a7a89.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x595e7f._o();
          });
        }, 0x1f4);
      });
      _0x1f9a6d.click(function () {
        ooo.ij['if']();
        var _0x326d87 = _0x14a940.Xo(0x2710);
        _0x1a7a89.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x326d87._o();
          });
        }, 0x1f4);
      });
    })).prototype.Sa = function () {
      _0x5fde7.parent.prototype.Sa.call(this);
    };
    _0x5fde7.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Po, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x5fde7.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0xa914b4.Ok = _0x5fde7;
    _0x1f7aab = $("#profile-avatar");
    _0xda30de = $("#profile-username");
    _0x13284c = $("#profile-experience-bar");
    _0x4e727f = $("#profile-experience-val");
    _0x4f6938 = $("#profile-level");
    _0x2a1d3b = $('#profile-stat-highScore');
    _0x507be4 = $("#profile-stat-bestSurvivalTime");
    _0xfb13de = $("#profile-stat-kills");
    _0x24937c = $("#profile-stat-headshots");
    _0x81ee05 = $("#profile-stat-gamesPlayed");
    _0x3e7911 = $("#profile-stat-totalTimeSpent");
    _0x19a387 = $("#profile-stat-registrationDate");
    (_0x593730 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      _0x593730.parent.prototype.Sa.call(this);
    };
    _0x593730.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Oo, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x593730.prototype.nl = function () {
      ooo.ij.jf();
      var _0x573655 = ooo.ok.dm();
      var _0x54ce61 = moment([_0x573655.year, _0x573655.month - 0x1, _0x573655.day]).format('LL');
      _0xda30de.html(ooo.ok.Ll());
      _0x1f7aab.attr('src', ooo.ok.Nl());
      _0x13284c.width(ooo.ok.Sl() * 0x64 / ooo.ok.Tl() + '%');
      _0x4e727f.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      _0x4f6938.html(ooo.ok.Rl());
      _0x2a1d3b.html(ooo.ok.Zl());
      _0x507be4.html(_0x1a7a89.$(ooo.ok.$l()));
      _0xfb13de.html(ooo.ok._l());
      _0x24937c.html(ooo.ok.am());
      _0x81ee05.html(ooo.ok.bm());
      _0x3e7911.html(_0x1a7a89.$(ooo.ok.cm()));
      _0x19a387.html(_0x54ce61);
    };
    _0xa914b4.Mk = _0x593730;
    _0x2dd8e8 = $("#settings-music-enabled-switch");
    _0x121aca = $("#settings-sfx-enabled-switch");
    _0x43f2ee = $("#settings-show-names-switch");
    _0x425453 = $('#popup-logout');
    _0x2bb5bf = $("#popup-logout-container");
    _0x16afba = $("#popup-delete-account");
    _0x1a821a = $('#popup-delete-account-container');
    _0x2e06af = $("#popup-withdraw-consent");
    (_0x5d5a9c = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U('index.game.popup.menu.settings.tab'), false);
      var _0x5ebd97 = this;
      _0x2dd8e8.click(function () {
        var _0x391c91 = !!_0x2dd8e8.prop('checked');
        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Fg, _0x391c91, 0x1e);
        ooo.ij.$e(_0x391c91);
        ooo.ij['if']();
      });
      _0x121aca.click(function () {
        var _0x2be197 = !!_0x121aca.prop("checked");
        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Gg, _0x2be197, 0x1e);
        ooo.ij.Xe(_0x2be197);
        ooo.ij['if']();
      });
      _0x43f2ee.click(function () {
        ooo.ij['if']();
      });
      _0x425453.click(function () {
        ooo.ij['if']();
        _0x5ebd97.Xo(0x1f4);
        ooo.ok.qm();
      });
      _0x16afba.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      _0x2e06af.click(function () {
        if (ooo.kp()) {
          ooo.ij['if']();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var _0x1b159e;
      var _0x488ced;
      var _0x2c2ae3;
      _0x5d5a9c.parent.prototype.Sa.call(this);
      _0x1b159e = _0xa914b4.Cg.Og(_0xa914b4.Cg.Fg) !== "false";
      _0x2dd8e8.prop("checked", _0x1b159e);
      ooo.ij.$e(_0x1b159e);
      _0x488ced = _0xa914b4.Cg.Og(_0xa914b4.Cg.Gg) !== "false";
      _0x121aca.prop("checked", _0x488ced);
      ooo.ij.Xe(_0x488ced);
      _0x2c2ae3 = _0xa914b4.Cg.Og(_0xa914b4.Cg.Eg) !== "false";
      _0x43f2ee.prop("checked", _0x2c2ae3);
      ooo.ok.em(function () {
        _0x2bb5bf.toggle(ooo.ok.nk());
        _0x1a821a.toggle(ooo.ok.nk());
      });
    };
    _0x5d5a9c.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Qo, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x5d5a9c.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        _0x2e06af.show();
      } else {
        _0x2e06af.hide();
      }
    };
    _0x5d5a9c.prototype.Gi = function () {
      return _0x43f2ee.prop("checked");
    };
    _0xa914b4.Pk = _0x5d5a9c;
    _0x95b9ee = $("#store-view-canv");
    _0x4be76f = $("#skin-description-text");
    _0x4ec9f4 = $("#skin-group-description-text");
    _0x25795c = $("#store-locked-bar");
    _0xfef36c = $("#store-locked-bar-text");
    _0xb01087 = $("#store-buy-button");
    _0x2a74a6 = $('#store-item-price');
    _0x4eb01b = $("#store-groups");
    _0x25a2e3 = $("#store-view-prev");
    _0x4cbe00 = $("#store-view-next");
    (_0xf1357f = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.skins.tab"), true);
      var _0x19625a = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new _0xa914b4.Lm(_0x95b9ee);
      _0xb01087.click(function () {
        ooo.ij['if']();
        _0x19625a.pp();
      });
      _0x25a2e3.click(function () {
        ooo.ij['if']();
        _0x19625a.lp.qp();
      });
      _0x4cbe00.click(function () {
        ooo.ij['if']();
        _0x19625a.lp.rp();
      });
    })).prototype.Sa = function () {
      _0xf1357f.parent.prototype.Sa.call(this);
      var _0x25b094 = this;
      ooo.ud.Jc(function () {
        var _0x3b3b3f = ooo.ud.Gc();
        _0x25b094.mp = [];
        for (var _0x2d6b74 = 0x0; _0x2d6b74 < _0x3b3b3f.skinGroupArrayDict.length; _0x2d6b74++) {
          _0x25b094.mp.push(new _0x1c0d13(_0x25b094, _0x3b3b3f.skinGroupArrayDict[_0x2d6b74]));
        }
        ;
        _0x25b094.np = {};
        for (var _0x351db9 = 0x0; _0x351db9 < _0x3b3b3f.skinArrayDict.length; _0x351db9++) {
          var _0x5cc5bd = _0x3b3b3f.skinArrayDict[_0x351db9];
          _0x25b094.np[_0x5cc5bd.id] = _0x5cc5bd;
        }
        ;
        _0x25b094.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x25b094.tp(false);
      });
    };
    _0xf1357f.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Ro, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0xf1357f.prototype.nl = function () {
      ooo.ij.Ye(_0xa914b4.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    _0xf1357f.prototype.hl = function () {
      this.op.rg(false);
    };
    _0xf1357f.prototype.qg = function () {
      this.op.qg();
    };
    _0xf1357f.prototype.ug = function (_0x56002f, _0x39f5c3) {
      this.op.ug();
    };
    _0xf1357f.prototype.sp = function () {
      var _0x5215c0 = this;
      var _0x4c5f11 = this;
      _0x4eb01b.empty();
      for (var _0x1de334 = 0x0; _0x1de334 < this.mp.length; _0x1de334++) {
        (function (_0x291db1) {
          var _0x1d150c = _0x5215c0.mp[_0x291db1];
          var _0x3ea5c4 = _0xa914b4.d.createElement('li');
          _0x4eb01b.append(_0x3ea5c4);
          var _0x5d7994 = $(_0x3ea5c4);
          if (_0x4c5f11.xp && _0x4c5f11.xp.isCustom) {
            _0x5d7994.addClass("iscustom");
          }
          _0x5d7994.html(_0x1d150c.up());
          _0x5d7994.click(function () {
            ooo.ij['if']();
            _0x4c5f11.vp(_0x1d150c);
          });
          _0x1d150c.wp = _0x5d7994;
        })(_0x1de334);
      }
      ;
      if (this.mp.length > 0x0) {
        var _0x3ac626 = ooo.so.Zj(_0xa914b4._j.$j);
        for (var _0x5aa2b0 = 0x0; _0x5aa2b0 < this.mp.length; _0x5aa2b0++) {
          var _0x539848 = this.mp[_0x5aa2b0];
          var _0x248069 = _0x539848.xp.list;
          for (var _0x27b538 = 0x0; _0x27b538 < _0x248069.length; _0x27b538++) {
            if (_0x248069[_0x27b538] === _0x3ac626) {
              _0x539848.yp = _0x27b538;
              this.vp(_0x539848);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0x0]);
      }
    };
    _0xf1357f.prototype.vp = function (_0x15735f) {
      if (this.lp !== _0x15735f) {
        this.lp = _0x15735f;
        _0x4eb01b.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        _0x4ec9f4.html('');
        if (_0x15735f.xp != null) {
          var _0x445e14 = ooo.ud.Gc().textDict[_0x15735f.xp.description];
          if (_0x445e14 != null) {
            _0x4ec9f4.html(_0x1a7a89.aa(_0x1a7a89.V(_0x445e14)));
          }
        }
        ;
        this.tp(true);
      }
    };
    _0xf1357f.prototype.zp = function () {
      return this.lp == null ? _0xa914b4.yj.Aj() : this.lp.Ap();
    };
    _0xf1357f.prototype.pp = function () {
      var _0x1fa6c6 = this.zp();
      if (_0x1fa6c6.Cj()) {
        var _0x1791aa = _0x1fa6c6.Mc();
        this.Bp(_0x1791aa);
      }
    };
    _0xf1357f.prototype.Bp = function (_0x2b4943) {
      var _0x20244f = ooo.so.mk(_0x2b4943, _0xa914b4._j.$j);
      if (_0x20244f != null) {
        var _0x7df2ab = _0x20244f.pk();
        if (!(ooo.ok.Ql() < _0x7df2ab)) {
          var _0x2d023c = ooo.so.Zj(_0xa914b4._j.$j);
          var _0x206aea = ooo.so.Zj(_0xa914b4._j.ak);
          var _0x7d847b = ooo.so.Zj(_0xa914b4._j.bk);
          var _0x3f89d1 = ooo.so.Zj(_0xa914b4._j.dk);
          var _0x5067cb = ooo.so.Zj(_0xa914b4._j.ck);
          var _0x1102ce = this.Xo(0x1388);
          ooo.ok.nm(_0x2b4943, _0xa914b4._j.$j, function () {
            _0x1102ce._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x2d023c, _0xa914b4._j.$j);
              ooo.so.lk(_0x206aea, _0xa914b4._j.ak);
              ooo.so.lk(_0x7d847b, _0xa914b4._j.bk);
              ooo.so.lk(_0x3f89d1, _0xa914b4._j.dk);
              ooo.so.lk(_0x5067cb, _0xa914b4._j.ck);
              ooo.so.lk(_0x2b4943, _0xa914b4._j.$j);
              _0x1102ce._o();
            });
          });
        }
      }
    };
    _0xf1357f.prototype.tp = function (_0x171779) {
      var _0x357871 = ooo.so.ek();
      var _0x2c3d7e = this.zp();
      if (_0x2c3d7e.Cj()) {
        var _0x547d30 = _0x2c3d7e.Mc();
        var _0x3b93f7 = ooo.so.mk(_0x547d30, _0xa914b4._j.$j);
        var _0x39c34a = false;
        $("#add-to-favorites-skin").remove();
        $("#manage-favorites-skin").remove();
        $("#skin-info-text").remove();
        $(".fav-buttons-container").remove();
        $(".favorites-popup").remove();
        if (ooo.so.ik(_0x547d30, _0xa914b4._j.$j)) {
          _0x25795c.hide();
          _0xb01087.hide();
          var _0xc99922 = $("<div class='fav-buttons-container' style='margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;'></div>");
          var _0x3aab9b = $("<button id='add-to-favorites-skin' class='favorite-button2' style='background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 410px 15px 15px 5px;'><span style='font-size:14px;'>+</span> Add</button>");
          var _0x19fdb5 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 412px 20px 20px 8px;'><span style='font-size:14px;'>â˜°</span> Favorite</button>");
          _0xc99922.append(_0x3aab9b);
          _0xc99922.append(_0x19fdb5);
          _0x4eb01b.append(_0xc99922);
          var _0x28aafd = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
          $('body').append(_0x28aafd);
          $(".close-favorites").click(function () {
            $(".favorites-popup").hide();
          });
          $(document).mouseup(function (_0x28508d) {
            var _0x578b99 = $(".favorites-popup");
            if (!_0x578b99.is(_0x28508d.target) && _0x578b99.has(_0x28508d.target).length === 0x0) {
              _0x578b99.hide();
            }
          });
          $.each($("[id^='skin-info-text']"), function () {
            if ($(this).attr('id') !== "skin-info-text") {
              $(this).remove();
            }
          });
          $(".favorites-content").on("scroll", function () {
            $(this).css('pointer-events', 'auto');
          });
          $(".favorites-popup").on("shown", function () {
            setTimeout(function () {
              $('.favorites-content').scrollTop(0x0);
            }, 0x64);
          });
          $(".clear-all-favorites").click(function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              _0x2e052d.favoriteSkins = [];
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
              _0x2c26f2();
              if (_0x3aab9b && _0x3aab9b.is(":visible")) {
                _0x3aab9b.text("â˜… Add").css("background-color", '#4CAF50');
              }
            }
          });
          _0x3aab9b.click(function () {
            if (!_0x2e052d.favoriteSkins) {
              _0x2e052d.favoriteSkins = [];
            }
            var _0x26c24e = false;
            try {
              for (var _0x103f0c = 0x0; _0x103f0c < _0x2e052d.favoriteSkins.length; _0x103f0c++) {
                if (_0x2e052d.favoriteSkins[_0x103f0c] === _0x547d30) {
                  _0x26c24e = true;
                  break;
                }
              }
            } catch (_0x451ed5) {
              _0x2e052d.favoriteSkins = [];
            }
            if (!_0x26c24e) {
              _0x2e052d.favoriteSkins.push(_0x547d30);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
              $(this).text('X').css('background-color', "#f44336");
            } else {
              var _0x3a9d5a = _0x2e052d.favoriteSkins.indexOf(_0x547d30);
              _0x2e052d.favoriteSkins.splice(_0x3a9d5a, 0x1);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
              $(this).text("â˜… Add").css("background-color", "#4CAF50");
            }
          });
          _0x19fdb5.click(function () {
            $.each($("[id^='skin-info-text']"), function (_0x47a30f) {
              if (_0x47a30f > 0x0) {
                $(this).remove();
              }
            });
            _0x2c26f2();
            $('.favorites-popup').show();
          });
        } else {
          if (_0x3b93f7 == null || _0x3b93f7.qk()) {
            _0x39c34a = true;
            _0x25795c.show();
            _0xb01087.hide();
            _0xfef36c.text(_0x1a7a89.U("index.game.popup.menu.store.locked"));
            if (_0x3b93f7 != null && _0x3b93f7.qk()) {
              var _0x2aae96 = ooo.ud.Gc().textDict[_0x3b93f7.ln()];
              if (_0x2aae96 != null) {
                _0xfef36c.text(_0x1a7a89.V(_0x2aae96));
              }
            }
          } else {
            _0x25795c.hide();
            _0xb01087.show();
            _0x2a74a6.html(_0x3b93f7.pk());
          }
        }
        _0x4be76f.html('');
        if (_0x3b93f7 != null && _0x3b93f7.mn() != null) {
          var _0x41a2f4 = ooo.ud.Gc().textDict[_0x3b93f7.mn()];
          if (_0x41a2f4 != null) {
            _0x4be76f.html(_0x1a7a89.aa(_0x1a7a89.V(_0x41a2f4)));
          }
        }
        if (StoreSkinID && _0x547d30) {
          StoreSkinID.html(_0x547d30);
        }
        this.op.Gm(_0x357871.Cn(_0x547d30));
        this.op.an(_0x39c34a);
        if (_0x171779) {
          ooo.so.lk(_0x547d30, _0xa914b4._j.$j);
        }
      }
    };
    function _0x565037() {
      if (!_0x2e052d.favoriteSkins) {
        _0x2e052d.favoriteSkins = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
      }
      if (_0x2e052d.favoriteSkins.length > 0x0) {
        if (_0x2e052d.currentFavSkinIndex === undefined) {
          _0x2e052d.currentFavSkinIndex = 0x0;
        } else {
          _0x2e052d.currentFavSkinIndex = (_0x2e052d.currentFavSkinIndex + 0x1) % _0x2e052d.favoriteSkins.length;
        }
        var _0x2f812c = _0x2e052d.favoriteSkins[_0x2e052d.currentFavSkinIndex];
        _0x12af67(_0x2f812c);
        localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
      }
    }
    function _0x12af67(_0x4f3331) {
      ooo.so.lk(_0x4f3331, _0xa914b4._j.$j);
      if (_0x5a0b1f && null && null.Je) {
        var _0x5ba4c3 = ooo.ud.Cc().Tb(_0x4f3331);
        if (null && _0x5ba4c3) {
          null.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(null.mi), _0x5ba4c3, ooo.ud.Cc().Vb(null.Vi), ooo.ud.Cc().Wb(null.Wi), ooo.ud.Cc().Xb(null.Xi), ooo.ud.Cc().Yb(null.Yi), "#ffffff");
        }
      }
    }
    function _0xfcfcde(_0x5bf065, _0x402269) {
      if (!_0x5bf065) {
        return '';
      }
      if (_0x5bf065.startsWith("data:")) {
        return _0x5bf065;
      }
      if (_0x5bf065.includes("get_skin.php")) {
        return _0x5bf065.startsWith("http") ? _0x5bf065.replace(/https?:\/\/[^\/]+/, "https://wormx.store") : "https://wormx.store" + _0x5bf065;
      }
      if (_0x5bf065.includes("/images/skins/")) {
        return "https://wormx.store/" + _0x5bf065;
      }
      if (_0x5bf065.includes("/static/assets/")) {
        return 'https://resources.wormate.io' + _0x5bf065;
      }
      if (_0x5bf065.includes("/images/skins/")) {
        return "https://wormx.store" + _0x5bf065;
      }
      if (!_0x5bf065.startsWith('http')) {
        return "https://wormate.io" + _0x5bf065;
      }
      return _0x5bf065;
    }
    function _0x2c26f2() {
      var _0x267c6d = $(".favorites-grid");
      _0x267c6d.empty();
      if (!_0x2e052d.favoriteSkins) {
        _0x2e052d.favoriteSkins = [];
        localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
      }
      try {
        if (_0x2e052d.favoriteSkins.length > 0x0) {
          for (var _0x80e4a0 = 0x0; _0x80e4a0 < _0x2e052d.favoriteSkins.length; _0x80e4a0++) {
            var _0x140e70 = _0x2e052d.favoriteSkins[_0x80e4a0];
            var _0x2e8bfc = $('<div>').attr("data-index", _0x80e4a0).attr('data-skin-id', _0x140e70).css({
              'display': "flex",
              'flex-direction': "column",
              'align-items': 'center',
              'padding': "2px",
              'background': "#252538",
              'border-radius': '6px',
              'position': "relative",
              'height': "50px",
              'width': '100%'
            });
            var _0x151210 = $("<div>").css({
              'width': "100%",
              'height': "46px",
              'background': "transparent",
              'border-radius': "4px",
              'overflow': 'visible',
              'position': "relative",
              'display': "flex",
              'justify-content': "center",
              'align-items': 'center'
            }).appendTo(_0x2e8bfc);
            var _0x438947 = $("<button>").text('X').css({
              'position': "absolute",
              'top': "3px",
              'right': "3px",
              'background': "#f44336",
              'color': 'white',
              'border': 'none',
              'padding': "1px 5px",
              'border-radius': "3px",
              'cursor': "pointer",
              'font-size': "11px",
              'z-index': '20'
            }).appendTo(_0x2e8bfc);
            var _0x403d43 = _0xfabd2a(_0x140e70);
            _0x151210.append(_0x403d43);
            _0x267c6d.append(_0x2e8bfc);
            _0x438947.click(function () {
              var _0x3b7f70 = $(this).closest("[data-index]");
              var _0xbc45ab = parseInt(_0x3b7f70.attr("data-index"));
              if (_0x2e052d.favoriteSkins && _0xbc45ab >= 0x0 && _0xbc45ab < _0x2e052d.favoriteSkins.length) {
                _0x2e052d.favoriteSkins.splice(_0xbc45ab, 0x1);
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
                _0x3b7f70.fadeOut(0x12c, function () {
                  $(this).remove();
                  _0x267c6d.find("[data-index]").each(function (_0x5296a0) {
                    $(this).attr("data-index", _0x5296a0);
                  });
                  if (_0x2e052d.favoriteSkins.length === 0x0) {
                    _0x478981(_0x267c6d);
                  }
                });
              }
            });
          }
        } else {
          _0x478981(_0x267c6d);
        }
      } catch (_0x209dc9) {
        _0x267c6d.append("<div style='text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;'>Error loading favorites</div>");
      }
    }
    function _0x478981(_0x58c337) {
      _0x58c337.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
    }
    function _0xfabd2a(_0x51ec44) {
      if (!window.textureCache) {
        window.textureCache = {};
      }
      try {
        let _0x17424c = null;
        if (typeof ooo !== "undefined") {
          if (ooo.ud && ooo.ud.Gc) {
            _0x17424c = ooo.ud.Gc();
          } else {
            if (ooo.ok && ooo.ok.xl && ooo.ok.xl.skinData) {
              _0x17424c = ooo.ok.xl.skinData;
            } else if (window.globalGameData) {
              _0x17424c = window.globalGameData;
            }
          }
        }
        if (!_0x17424c) {
          const _0x2ca18e = localStorage.getItem("wftsw");
          if (_0x2ca18e) {
            try {
              _0x17424c = JSON.parse(_0x2ca18e);
            } catch (_0x167bac) {}
          }
        }
        if (!_0x17424c) {
          throw new Error("Game data not available");
        }
        let _0x56ffaa = null;
        if (_0x17424c.skinArrayDict && Array.isArray(_0x17424c.skinArrayDict)) {
          _0x56ffaa = _0x17424c.skinArrayDict;
        } else {
          if (_0x17424c.skins && Array.isArray(_0x17424c.skins)) {
            _0x56ffaa = _0x17424c.skins;
          } else {
            throw new Error("Skin list not found in game data");
          }
        }
        let _0x32a7d9 = null;
        for (let _0x9e4c38 = 0x0; _0x9e4c38 < _0x56ffaa.length; _0x9e4c38++) {
          if (_0x56ffaa[_0x9e4c38] && _0x56ffaa[_0x9e4c38].id === _0x51ec44) {
            _0x32a7d9 = _0x56ffaa[_0x9e4c38];
            break;
          }
        }
        if (!_0x32a7d9) {
          throw new Error("Skin not found");
        }
        const _0x18bc84 = document.createElement('div');
        _0x18bc84.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n        ";
        const _0x198a7f = document.createElement('div');
        _0x198a7f.textContent = '#' + _0x51ec44;
        _0x198a7f.style.cssText = "\n            position: absolute;\n            top: 3px;\n            left: 2px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 11px;\n            padding: 1px 4px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x18bc84.appendChild(_0x198a7f);
        const _0x3c0ba0 = document.createElement('canvas');
        _0x3c0ba0.width = 0x258;
        _0x3c0ba0.height = 0x50;
        _0x3c0ba0.style.cssText = "\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            padding: 5px;\n        ";
        _0x18bc84.appendChild(_0x3c0ba0);
        const _0xe88ac0 = _0x3c0ba0.getContext('2d');
        _0xe88ac0.clearRect(0x0, 0x0, _0x3c0ba0.width, _0x3c0ba0.height);
        if (_0x32a7d9.base && Array.isArray(_0x32a7d9.base) && _0x32a7d9.base.length > 0x0) {
          let _0x35e939 = {};
          let _0x54bdb8 = [];
          _0x32a7d9.base.forEach(_0x130b17 => {
            if (!_0x130b17) {
              return;
            }
            if (_0x17424c.regionDict && _0x17424c.regionDict[_0x130b17]) {
              const _0x1afc6e = _0x17424c.regionDict[_0x130b17];
              if (_0x17424c.textureDict && _0x1afc6e.texture && _0x17424c.textureDict[_0x1afc6e.texture]) {
                const _0x49b57f = _0x17424c.textureDict[_0x1afc6e.texture];
                if (_0x49b57f && (_0x49b57f.file || _0x49b57f.relativePath)) {
                  let _0x3905aa = _0xfcfcde(_0x49b57f.relativePath || _0x49b57f.file, _0x1afc6e.texture);
                  if (!_0x35e939[_0x3905aa]) {
                    _0x35e939[_0x3905aa] = [];
                  }
                  _0x35e939[_0x3905aa].push({
                    'id': _0x130b17,
                    'region': _0x1afc6e
                  });
                  _0x54bdb8.push({
                    'id': _0x130b17,
                    'region': _0x1afc6e
                  });
                }
              }
            }
          });
          const _0x552a3a = [..._0x54bdb8].reverse();
          let _0x5c20de = [..._0x552a3a];
          while (_0x5c20de.length < 0x1b) {
            const _0x2ce77e = 0x1b - _0x5c20de.length;
            const _0x131152 = _0x552a3a.slice(0x0, Math.min(_0x2ce77e, _0x552a3a.length));
            _0x5c20de = [..._0x5c20de, ..._0x131152];
          }
          const _0x1c70ab = 16 * _0x5c20de.length + 60;
          _0x3c0ba0.width = Math.max(0x258, _0x1c70ab);
          _0xe88ac0.clearRect(0x0, 0x0, _0x3c0ba0.width, _0x3c0ba0.height);
          let _0x5ef370 = 0x0;
          function _0x49b454(_0x57c807) {
            _0x1bfc37(_0x57c807);
          }
          function _0x1bfc37(_0x5a3093) {
            const _0x254976 = _0x3c0ba0.height / 0x2;
            _0x5c20de.forEach((_0x68b004, _0x1a63bf) => {
              if (!_0x68b004) {
                return;
              }
              const _0x5b9360 = _0x68b004.region;
              const _0x384c46 = 40 + _0x1a63bf * 40 * 0x2 * 0.2;
              _0xe88ac0.save();
              _0xe88ac0.beginPath();
              _0xe88ac0.arc(_0x384c46, _0x254976, 40, 0x0, Math.PI * 0x2);
              _0xe88ac0.clip();
              const _0x5674c0 = Math.max(_0x5b9360.w, _0x5b9360.h);
              const _0x140c2f = 80 / _0x5674c0;
              const _0x59ef12 = _0x384c46 - _0x5b9360.w * _0x140c2f / 0x2;
              const _0x45b2c1 = _0x254976 - _0x5b9360.h * _0x140c2f / 0x2;
              _0xe88ac0.drawImage(_0x5a3093, _0x5b9360.x, _0x5b9360.y, _0x5b9360.w, _0x5b9360.h, _0x59ef12, _0x45b2c1, _0x5b9360.w * _0x140c2f, _0x5b9360.h * _0x140c2f);
              _0xe88ac0.restore();
            });
          }
          Object.keys(_0x35e939).forEach(_0x3854eb => {
            if (window.textureCache[_0x3854eb]) {
              _0x49b454(window.textureCache[_0x3854eb]);
              return;
            }
            const _0x4ba7b3 = new Image();
            _0x4ba7b3.onload = () => {
              window.textureCache[_0x3854eb] = _0x4ba7b3;
              _0x49b454(_0x4ba7b3);
              _0x5ef370++;
            };
            _0x4ba7b3.onerror = () => {
              _0x5ef370++;
            };
            _0x4ba7b3.src = _0x3854eb;
          });
          return _0x18bc84;
        }
      } catch (_0x40d468) {
        const _0x489f7a = document.createElement("div");
        _0x489f7a.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x489f7a.textContent = 'âš ï¸';
        return _0x489f7a;
      }
      const _0x479d3d = document.createElement("div");
      _0x479d3d.style.cssText = "\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: white;\n        background-color: #333;\n    ";
      _0x479d3d.textContent = 'ðŸŽ®';
      return _0x479d3d;
    }
    _0x1c0d13 = function () {
      function _0x70a583(_0x6a8608, _0x4453f8) {
        this.Cp = _0x6a8608;
        this.yp = 0x0;
        this.xp = _0x4453f8;
      }
      _0x70a583.prototype.qp = function () {
        if (--this.yp < 0x0) {
          this.yp = this.xp.list.length - 0x1;
        }
        this.Cp.tp(true);
      };
      _0x70a583.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0x0;
        }
        this.Cp.tp(true);
      };
      _0x70a583.prototype.up = function () {
        let _0x3e9d3e = _0x1a7a89.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -0x1 || !(_0x3e9d3e = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search('https://lh3.googleusercontent.com') == -0x1 || !(_0x3e9d3e = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            _0x3e9d3e = "<img src=\"https://wormx.store/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return _0x3e9d3e;
      };
      _0x70a583.prototype.Ap = function () {
        return this.yp >= this.xp.list.length ? _0xa914b4.yj.Aj() : _0xa914b4.yj.Bj(this.xp.list[this.yp]);
      };
      return _0x70a583;
    }();
    _0xa914b4.Rk = _0xf1357f;
    _0xc94fd3 = $('#store-go-coins-button');
    _0x43c634 = $("#store-go-skins-button");
    _0x26bd28 = $("#store-go-wear-button");
    (_0x4f6319 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.store.tab"), true);
      _0xc94fd3.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      _0x43c634.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      _0x26bd28.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      _0x4f6319.parent.prototype.Sa.call(this);
    };
    _0x4f6319.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.So, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x4f6319.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0xa914b4.Tk = _0x4f6319;
    _0x28865b = $("#wear-view-canv");
    _0x394091 = $("#wear-description-text");
    _0x107997 = $("#wear-locked-bar");
    _0x11b24f = $("#wear-locked-bar-text");
    _0x31afcc = $("#wear-buy-button");
    _0x14a95b = $("#wear-item-price");
    _0x3a49b3 = $("#wear-eyes-button");
    _0x50be74 = $("#wear-mouths-button");
    _0x53e7d2 = $("#wear-glasses-button");
    _0x22e324 = $("#wear-hats-button");
    _0x2c3d31 = $("#wear-tint-chooser");
    _0xe36ea9 = $("#wear-view-prev");
    _0x66c51 = $("#wear-view-next");
    (_0x252aee = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      var _0x4a6885 = this;
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.wear.tab"), true);
      var _0x4a52ed = this;
      this.Dp = [];
      this.ak = new _0x29352b(this, _0xa914b4._j.ak, _0x3a49b3);
      this.bk = new _0x29352b(this, _0xa914b4._j.bk, _0x50be74);
      this.dk = new _0x29352b(this, _0xa914b4._j.dk, _0x53e7d2);
      this.ck = new _0x29352b(this, _0xa914b4._j.ck, _0x22e324);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new _0xa914b4.Lm(_0x28865b);
      _0x31afcc.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Kp();
      });
      _0xe36ea9.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Ep.Lp();
      });
      _0x66c51.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Ep.Mp();
      });
      _0x3a49b3.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Np(_0x4a6885.ak);
      });
      _0x50be74.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Np(_0x4a6885.bk);
      });
      _0x53e7d2.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Np(_0x4a6885.dk);
      });
      _0x22e324.click(function () {
        ooo.ij['if']();
        _0x4a52ed.Np(_0x4a6885.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      _0x252aee.parent.prototype.Sa.call(this);
      var _0x11484e = this;
      ooo.ud.Jc(function () {
        var _0x4315c4 = ooo.ud.Gc();
        _0x11484e.Fp = _0x4315c4.eyesDict;
        _0x11484e.Gp = _0x4315c4.mouthDict;
        _0x11484e.Hp = _0x4315c4.glassesDict;
        _0x11484e.Ip = _0x4315c4.hatDict;
        _0x11484e.Jp = _0x4315c4.colorDict;
        _0x11484e.ak.Op(_0x4315c4.eyesVariantArray);
        _0x11484e.ak.Pp(_0x11484e.Fp);
        _0x11484e.bk.Op(_0x4315c4.mouthVariantArray);
        _0x11484e.bk.Pp(_0x11484e.Gp);
        _0x11484e.dk.Op(_0x4315c4.glassesVariantArray);
        _0x11484e.dk.Pp(_0x11484e.Hp);
        _0x11484e.ck.Op(_0x4315c4.hatVariantArray);
        _0x11484e.ck.Pp(_0x11484e.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x11484e.tp(false);
      });
    };
    _0x252aee.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.To, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x252aee.prototype.nl = function () {
      ooo.ij.Ye(_0xa914b4.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    _0x252aee.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x252aee.prototype.qg = function () {
      this.op.qg();
    };
    _0x252aee.prototype.ug = function (_0x11177b, _0x28d290) {
      this.op.ug();
    };
    _0x252aee.prototype.Np = function (_0x6bfb07) {
      this.Ep = _0x6bfb07;
      for (var _0x2721b4 = 0x0; _0x2721b4 < this.Dp.length; _0x2721b4++) {
        this.Dp[_0x2721b4].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    _0x252aee.prototype.Qp = function () {
      return this.Ep == null ? _0xa914b4.yj.Aj() : _0xa914b4.yj.Bj({
        'Je': this.Ep.Ap(),
        'Wd': this.Ep.Wd
      });
    };
    _0x252aee.prototype.Kp = function () {
      var _0x3b2fc5 = this.Qp();
      if (_0x3b2fc5.Cj()) {
        var _0x383934 = _0x3b2fc5.Mc();
        this.Rp(_0x383934.Je, _0x383934.Wd);
      }
    };
    _0x252aee.prototype.Rp = function (_0x27ed1b, _0x59d470) {
      var _0x5c8f31 = ooo.so.mk(_0x27ed1b, _0x59d470);
      if (_0x5c8f31 != null) {
        var _0x3d35c7 = _0x5c8f31.pk();
        if (!(ooo.ok.Ql() < _0x3d35c7)) {
          var _0x58f8b4 = ooo.so.Zj(_0xa914b4._j.$j);
          var _0x2993f9 = ooo.so.Zj(_0xa914b4._j.ak);
          var _0x2e7159 = ooo.so.Zj(_0xa914b4._j.bk);
          var _0x48b08c = ooo.so.Zj(_0xa914b4._j.dk);
          var _0x1f27e7 = ooo.so.Zj(_0xa914b4._j.ck);
          var _0x35bbfd = this.Xo(0x1388);
          ooo.ok.nm(_0x27ed1b, _0x59d470, function () {
            _0x35bbfd._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x58f8b4, _0xa914b4._j.$j);
              ooo.so.lk(_0x2993f9, _0xa914b4._j.ak);
              ooo.so.lk(_0x2e7159, _0xa914b4._j.bk);
              ooo.so.lk(_0x48b08c, _0xa914b4._j.dk);
              ooo.so.lk(_0x1f27e7, _0xa914b4._j.ck);
              ooo.so.lk(_0x27ed1b, _0x59d470);
              _0x35bbfd._o();
            });
          });
        }
      }
    };
    window.globalHatTextureCache = window.globalHatTextureCache || {};
    _0x252aee.prototype.tp = function (_0x34610b) {
      var _0x4166b0 = ooo.so.ek();
      var _0x5b8252 = this.Qp();
      if (_0x5b8252.Cj()) {
        var _0x10f443 = _0x5b8252.Mc();
        var _0x15aa9d = ooo.so.mk(_0x10f443.Je, _0x10f443.Wd);
        var _0x10147b = false;
        if (!_0x10f443.selectedHats) {
          _0x10f443.selectedHats = [];
        }
        if (ooo.so.ik(_0x10f443.Je, _0x10f443.Wd)) {
          _0x107997.hide();
          _0x31afcc.hide();
          if (_0x10f443.Wd === 'HAT') {
            this.addSelectedHatButton(_0x10f443.Je);
          } else {
            this.removeHatButtons();
          }
        } else {
          if (_0x15aa9d == null || _0x15aa9d.qk()) {
            _0x10147b = true;
            _0x107997.show();
            _0x31afcc.hide();
            _0x11b24f.text(_0x1a7a89.U("index.game.popup.menu.store.locked"));
            if (_0x15aa9d != null && _0x15aa9d.qk()) {
              var _0x38b474 = ooo.ud.Gc().textDict[_0x15aa9d.ln()];
              if (_0x38b474 != null) {
                _0x11b24f.text(_0x1a7a89.V(_0x38b474));
              }
            }
            this.removeHatButtons();
          } else {
            _0x107997.hide();
            _0x31afcc.show();
            _0x14a95b.html(_0x15aa9d.pk());
            this.removeHatButtons();
          }
        }
        _0x394091.html('');
        if (_0x15aa9d != null && _0x15aa9d.mn() != null) {
          var _0x5cece4 = ooo.ud.Gc().textDict[_0x15aa9d.mn()];
          if (_0x5cece4 != null) {
            _0x394091.html(_0x1a7a89.aa(_0x1a7a89.V(_0x5cece4)));
          }
        }
        var _0x5598f1 = this.op;
        switch (_0x10f443.Wd) {
          case "EYES":
            _0x5598f1.Gm(_0x4166b0.Dn(_0x10f443.Je));
            _0x5598f1.bn(_0x10147b);
            break;
          case "MOUTH":
            _0x5598f1.Gm(_0x4166b0.En(_0x10f443.Je));
            _0x5598f1.cn(_0x10147b);
            break;
          case "GLASSES":
            _0x5598f1.Gm(_0x4166b0.Gn(_0x10f443.Je));
            _0x5598f1.en(_0x10147b);
            break;
          case "HAT":
            _0x5598f1.Gm(_0x4166b0.Fn(_0x10f443.Je));
            _0x5598f1.dn(_0x10147b);
            break;
        }
        if (_0x34610b) {
          ooo.so.lk(_0x10f443.Je, _0x10f443.Wd);
        }
      }
    };
    _0x252aee.prototype.addSelectedHatButton = function (_0x235018) {
      this.currentHatId = _0x235018;
      if (!this.hatButtonContainer) {
        this.hatButtonContainer = $('<div>').attr('id', "hat-button-container").css({
          'position': "absolute",
          'bottom': "30px",
          'left': "-10px",
          'display': 'flex',
          'gap': '5px'
        }).appendTo('#wear-view');
        this.hatToggleButton = $("<button>").attr('id', "hat-toggle-button").css({
          'padding': "5px 10px",
          'background-color': "#4CAF50",
          'color': 'white',
          'border': 'none',
          'border-radius': "4px",
          'cursor': "pointer",
          'min-width': "32px"
        }).appendTo(this.hatButtonContainer);
        this.hatFavoritesButton = $("<button>").attr('id', "hat-favorites-button").css({
          'padding': "5px 10px",
          'background-color': "#2196F3",
          'color': "white",
          'border': "none",
          'border-radius': "4px",
          'cursor': 'pointer'
        }).text("â˜° Favorites").appendTo(this.hatButtonContainer);
        this.hatInfoText = $("<div>").attr('id', "hat-info-text").css({
          'position': "absolute",
          'bottom': "10px",
          'left': "-5px",
          'font-size': '12px',
          'color': "#fff"
        }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
        var _0x4f7b4f = this;
        this.hatFavoritesButton.on("click", function () {
          _0x4f7b4f.showFavoritesDialog();
        });
      }
      let _0x5d66a7 = _0x2e052d.selectedHats.includes(_0x235018);
      this.hatToggleButton.text(_0x5d66a7 ? 'X' : "â˜… Add");
      this.hatToggleButton.css("background-color", _0x5d66a7 ? "#f44336" : "#4CAF50");
      this.hatToggleButton.off("click");
      var _0x4f7b4f = this;
      this.hatToggleButton.on("click", function () {
        let _0x5e4309 = _0x2e052d.selectedHats.indexOf(_0x235018);
        if (_0x5e4309 >= 0x0) {
          _0x2e052d.selectedHats.splice(_0x5e4309, 0x1);
          $(this).text("Add").css('background-color', "#4CAF50");
        } else {
          _0x2e052d.selectedHats.push(_0x235018);
          $(this).text('X').css("background-color", "#f44336");
        }
        localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
      });
      this.hatButtonContainer.show();
      this.hatInfoText.show();
    };
    _0x252aee.prototype.removeHatButtons = function () {
      if (this.hatButtonContainer) {
        this.hatButtonContainer.hide();
      }
      if (this.hatInfoText) {
        this.hatInfoText.hide();
      }
    };
    function _0x1f30ff(_0x2f200b) {
      try {
        if (window.globalHatTextureCache[_0x2f200b] && window.globalHatTextureCache[_0x2f200b].valid) {
          return window.globalHatTextureCache[_0x2f200b];
        }
        const _0x1a7590 = ooo.ud.Cc().Yb(_0x2f200b);
        if (!_0x1a7590 || !_0x1a7590.dc || !_0x1a7590.dc.length) {
          return null;
        }
        const _0x4b140a = _0x1a7590.dc[0x0];
        let _0xb905e8 = null;
        if (_0x4b140a._a !== undefined) {
          _0xb905e8 = {
            'x': _0x4b140a._a || 0x0,
            'y': _0x4b140a.ab || 0x0,
            'width': _0x4b140a.bb || 0x0,
            'height': _0x4b140a.cb || 0x0
          };
        } else {
          if (_0x4b140a._frame) {
            _0xb905e8 = {
              'x': _0x4b140a._frame.x || 0x0,
              'y': _0x4b140a._frame.y || 0x0,
              'width': _0x4b140a._frame.width || 0x0,
              'height': _0x4b140a._frame.height || 0x0
            };
          } else {
            if (_0x4b140a.orig) {
              _0xb905e8 = {
                'x': _0x4b140a.orig.x || 0x0,
                'y': _0x4b140a.orig.y || 0x0,
                'width': _0x4b140a.orig.width || 0x0,
                'height': _0x4b140a.orig.height || 0x0
              };
            } else if (_0x4b140a.va && _0x4b140a.va.length >= 0x4) {
              _0xb905e8 = {
                'x': _0x4b140a.va[0x0] || 0x0,
                'y': _0x4b140a.va[0x1] || 0x0,
                'width': _0x4b140a.va[0x2] || 0x0,
                'height': _0x4b140a.va[0x3] || 0x0
              };
            }
          }
        }
        let _0x46a48e = null;
        if (_0x4b140a.Za && _0x4b140a.Za.baseTexture && _0x4b140a.Za.baseTexture.resource && _0x4b140a.Za.baseTexture.resource.source) {
          _0x46a48e = _0x4b140a.Za.baseTexture.resource.source;
        } else {
          if (_0x4b140a.baseTexture && _0x4b140a.baseTexture.resource && _0x4b140a.baseTexture.resource.source) {
            _0x46a48e = _0x4b140a.baseTexture.resource.source;
          } else {
            if (_0x4b140a.baseTexture && _0x4b140a.baseTexture.resource && _0x4b140a.baseTexture.resource.data) {
              _0x46a48e = _0x4b140a.baseTexture.resource.data;
            } else if (_0x4b140a.baseTexture && _0x4b140a.baseTexture.source) {
              _0x46a48e = _0x4b140a.baseTexture.source;
            }
          }
        }
        const _0x369d83 = {
          'hatId': _0x2f200b,
          'image': _0x46a48e || null,
          'coords': _0xb905e8 || null,
          'textureData': _0x4b140a,
          'hatData': _0x1a7590,
          'valid': !!(_0x46a48e && _0xb905e8)
        };
        window.globalHatTextureCache[_0x2f200b] = _0x369d83;
        return _0x369d83;
      } catch (_0x3093ed) {
        return null;
      }
    }
    function _0x5a0ec3(_0x1c57b5) {
      try {
        const _0x3bb4dc = document.createElement('div');
        _0x3bb4dc.style.cssText = "\n            width: 100%;\n            height: 100%;\n            position: relative;\n            overflow: visible;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        ";
        const _0x49ad15 = document.createElement('div');
        _0x49ad15.textContent = '#' + _0x1c57b5;
        _0x49ad15.style.cssText = "\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            background-color: rgba(0,0,0,0.6);\n            color: white;\n            font-size: 12px;\n            padding: 2px 5px;\n            border-radius: 3px;\n            z-index: 10;\n        ";
        _0x3bb4dc.appendChild(_0x49ad15);
        const _0x209e88 = document.createElement("canvas");
        _0x209e88.width = 0x50;
        _0x209e88.height = 0x50;
        _0x209e88.style.cssText = "\n            display: block;\n            object-fit: contain;\n        ";
        _0x3bb4dc.appendChild(_0x209e88);
        const _0xa8af73 = _0x209e88.getContext('2d', {
          'willReadFrequently': true
        });
        _0xa8af73.clearRect(0x0, 0x0, _0x209e88.width, _0x209e88.height);
        const _0x30f3e9 = _0x1f30ff(_0x1c57b5);
        if (!_0x30f3e9 || !_0x30f3e9.image || !_0x30f3e9.coords) {
          _0xa8af73.fillStyle = "#333";
          _0xa8af73.fillRect(0x0, 0x0, _0x209e88.width, _0x209e88.height);
          _0xa8af73.fillStyle = 'white';
          _0xa8af73.font = "18px Arial";
          _0xa8af73.textAlign = "center";
          _0xa8af73.fillText('#' + _0x1c57b5, _0x209e88.width / 0x2, _0x209e88.height / 0x2);
          return _0x3bb4dc;
        }
        try {
          if (_0x30f3e9.coords) {
            _0xa8af73.save();
            const _0x3fd7ff = Math.min((_0x209e88.width - 0xa) / _0x30f3e9.coords.width, (_0x209e88.height - 0xa) / _0x30f3e9.coords.height) * 0.9;
            const _0x4bca11 = _0x30f3e9.coords.width * _0x3fd7ff;
            const _0x2188ce = _0x30f3e9.coords.height * _0x3fd7ff;
            const _0x30521d = (_0x209e88.width - _0x4bca11) / 0x2;
            const _0x26066a = (_0x209e88.height - _0x2188ce) / 0x2;
            _0xa8af73.drawImage(_0x30f3e9.image, _0x30f3e9.coords.x, _0x30f3e9.coords.y, _0x30f3e9.coords.width, _0x30f3e9.coords.height, _0x30521d, _0x26066a, _0x4bca11, _0x2188ce);
            _0xa8af73.restore();
          } else {
            const _0x5da6d2 = Math.min((_0x209e88.width - 0xa) / _0x30f3e9.image.width, (_0x209e88.height - 0xa) / _0x30f3e9.image.height) * 0.8;
            const _0x1b5573 = _0x30f3e9.image.width * _0x5da6d2;
            const _0x20d2c3 = _0x30f3e9.image.height * _0x5da6d2;
            const _0x5e0db1 = (_0x209e88.width - _0x1b5573) / 0x2;
            const _0x49635e = (_0x209e88.height - _0x20d2c3) / 0x2;
            _0xa8af73.drawImage(_0x30f3e9.image, _0x5e0db1, _0x49635e, _0x1b5573, _0x20d2c3);
          }
        } catch (_0x564b41) {
          _0xa8af73.fillStyle = "#333";
          _0xa8af73.fillRect(0x0, 0x0, _0x209e88.width, _0x209e88.height);
          _0xa8af73.fillStyle = "white";
          _0xa8af73.font = "18px Arial";
          _0xa8af73.textAlign = 'center';
          _0xa8af73.fillText('#' + _0x1c57b5, _0x209e88.width / 0x2, _0x209e88.height / 0x2);
        }
        return _0x3bb4dc;
      } catch (_0x37ae32) {
        const _0x5e56e3 = document.createElement('div');
        _0x5e56e3.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
        _0x5e56e3.textContent = '#' + _0x1c57b5;
        return _0x5e56e3;
      }
    }
    _0x252aee.prototype.showFavoritesDialog = function () {
      $("#favorites-dialog, #favorites-overlay").remove();
      var _0xb76086 = $("<div>").attr('id', "favorites-overlay").css({
        'position': "fixed",
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': "100%",
        'background-color': "rgba(0, 0, 0, 0.5)",
        'z-index': "999"
      }).appendTo("body");
      var _0xf95096 = $("<div>").attr('id', "favorites-dialog").css({
        'position': 'fixed',
        'top': "50%",
        'left': "50%",
        'transform': "translate(-50%, -50%)",
        'background-color': "#1e1e2f",
        'border-radius': "8px",
        'box-shadow': "0 4px 8px rgba(0, 0, 0, 0.5)",
        'z-index': '1000',
        'width': "500px",
        'overflow': "hidden",
        'color': "white"
      }).appendTo("body");
      var _0x1b0206 = $("<div>").css({
        'padding': "15px 20px",
        'background-color': "#252538",
        'border-bottom': "1px solid #333345",
        'position': "relative",
        'display': "flex",
        'justify-content': "space-between",
        'align-items': 'center'
      }).appendTo(_0xf95096);
      $('<h3>').text("Favorite Hats").css({
        'margin': "0 0 0 5px",
        'font-size': "18px",
        'color': 'white',
        'padding-left': "15px"
      }).appendTo(_0x1b0206);
      var _0xcfeeea = $("<button>").html('&times;').css({
        'position': "absolute",
        'top': "8px",
        'left': "10px",
        'font-size': "22px",
        'background': "none",
        'border': 'none',
        'color': "#aaa",
        'cursor': 'pointer',
        'padding': "0 5px",
        'line-height': '1',
        'font-weight': "bold"
      }).appendTo(_0x1b0206);
      var _0x3b07ab = $("<button>").text("Clear All").css({
        'padding': "4px 8px",
        'background-color': "#f44336",
        'color': "white",
        'border': "none",
        'border-radius': "4px",
        'cursor': "pointer",
        'font-size': "12px"
      }).appendTo(_0x1b0206);
      var _0x3606fb = $('<div>').attr('id', 'favorites-content').css({
        'padding': "15px 20px",
        'max-height': "420px",
        'overflow-y': "auto"
      }).appendTo(_0xf95096);
      var _0x1f0d48 = $("<div>").attr("class", 'favorites-grid').css({
        'display': "grid",
        'grid-template-columns': "1fr 1fr 1fr",
        'gap': "12px",
        'padding': '0',
        'margin': '0'
      }).appendTo(_0x3606fb);
      var _0x42cfb5 = this;
      _0x3b07ab.on("click", function () {
        if (confirm("Are you sure you want to remove all favorite hats?")) {
          _0x2e052d.selectedHats = [];
          localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          _0x1f0d48.empty();
          $('<div>').css({
            'text-align': 'center',
            'padding': "10px",
            'color': "#aaa",
            'margin': "20px 0",
            'grid-column': "1 / span 3"
          }).text("You don't have any favorite hats yet.").appendTo(_0x1f0d48);
          if (_0x42cfb5.hatToggleButton && _0x42cfb5.hatToggleButton.is(":visible")) {
            _0x42cfb5.hatToggleButton.text("â˜… Add").css("background-color", "#4CAF50");
          }
        }
      });
      function _0x4dbcb7() {
        _0xf95096.remove();
        _0xb76086.remove();
      }
      _0xcfeeea.on("click", _0x4dbcb7);
      _0xb76086.on("click", _0x4dbcb7);
      if (!_0x2e052d.selectedHats || _0x2e052d.selectedHats.length === 0x0) {
        $("<div>").css({
          'text-align': 'center',
          'padding': "10px",
          'color': '#aaa',
          'margin': "20px 0",
          'grid-column': "1 / span 2"
        }).text("You don't have any favorite hats yet.").appendTo(_0x1f0d48);
      } else {
        _0x2e052d.selectedHats.forEach(function (_0x39eb7a) {
          _0x1f30ff(_0x39eb7a);
        });
        _0x2e052d.selectedHats.forEach(function (_0x4cebc5, _0x6c3113) {
          var _0x2b6f47 = $("<div>").attr('data-index', _0x6c3113).attr("data-hat-id", _0x4cebc5).css({
            'display': "flex",
            'flex-direction': "column",
            'align-items': "center",
            'padding': "2px",
            'background': '#252538',
            'border-radius': '6px',
            'position': 'relative',
            'height': '87px',
            'width': '100%'
          }).appendTo(_0x1f0d48);
          var _0x1ba9fc = $('<div>').css({
            'width': "100%",
            'height': "82px",
            'background': 'transparent',
            'border-radius': "4px",
            'overflow': 'visible',
            'position': 'relative',
            'display': "flex",
            'justify-content': "center",
            'align-items': "center"
          }).appendTo(_0x2b6f47);
          var _0x50c788 = $("<button>").text('X').css({
            'position': "absolute",
            'top': "4px",
            'right': "4px",
            'background': '#f44336',
            'color': "white",
            'border': 'none',
            'padding': "2px 6px",
            'border-radius': "3px",
            'cursor': 'pointer',
            'font-size': "12px",
            'z-index': '20'
          }).appendTo(_0x2b6f47);
          var _0x34ac89 = _0x5a0ec3(_0x4cebc5);
          _0x1ba9fc.append(_0x34ac89);
          _0x50c788.on("click", function (_0x339406) {
            _0x339406.stopPropagation();
            var _0x54ca87 = $(this).closest("[data-index]");
            var _0x45a53d = parseInt(_0x54ca87.attr("data-index"));
            var _0x126e7b = _0x54ca87.attr('data-hat-id');
            if (_0x2e052d.selectedHats && _0x45a53d >= 0x0 && _0x45a53d < _0x2e052d.selectedHats.length) {
              _0x2e052d.selectedHats.splice(_0x45a53d, 0x1);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
              _0x54ca87.fadeOut(0x12c, function () {
                $(this).remove();
                _0x1f0d48.find('[data-index]').each(function (_0x29e3e6) {
                  $(this).attr("data-index", _0x29e3e6);
                });
                if (_0x2e052d.selectedHats.length === 0x0) {
                  _0x1f0d48.empty();
                  $("<div>").css({
                    'text-align': 'center',
                    'padding': "10px",
                    'color': "#aaa",
                    'margin': "20px 0",
                    'grid-column': "1 / span 3"
                  }).text("You don't have any favorite hats yet.").appendTo(_0x1f0d48);
                }
                if (_0x42cfb5.currentHatId === _0x126e7b && _0x42cfb5.hatToggleButton) {
                  _0x42cfb5.hatToggleButton.text("â˜… Add").css("background-color", "#4CAF50");
                }
              });
            }
          });
        });
      }
      $(".favorites-content").on("scroll", function () {
        $(this).css("pointer-events", "auto");
      });
      $(".favorites-popup").on("shown", function () {
        setTimeout(function () {
          $(".favorites-content").scrollTop(0x0);
        }, 0x64);
      });
    };
    function _0x22fbe9(_0x351c5a) {
      try {
        if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
          ooo.Mh.Lh.ki.Yi = _0x351c5a;
          if (ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki) {
            ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = _0x351c5a;
          }
          if (_0x5a0b1f && null && null) {
            const _0x45c43a = _0x1d8812(null);
            if (_0x45c43a) {
              _0x15b6a5(_0x45c43a, _0x351c5a);
              return true;
            } else {
              const _0x322802 = ooo.ud.Cc().Yb(_0x351c5a);
              if (_0x322802) {
                _0x1684c0(null, _0x322802);
                return true;
              }
            }
          }
          return true;
        }
      } catch (_0x47111b) {}
      return false;
    }
    function _0x1d8812(_0x5ac100) {
      if (_0x5ac100.Zc && _0x5ac100.Zc.rd) {
        return _0x5ac100.Zc.rd;
      }
      return null;
    }
    function _0x15b6a5(_0x426a1e, _0x11f053) {
      if (_0x426a1e && _0x426a1e.length > 0x0) {
        const _0x3f9fa9 = ooo.ud.Cc().Yb(_0x11f053);
        if (_0x3f9fa9 && _0x3f9fa9.dc && _0x3f9fa9.dc.length > 0x0) {
          try {
            _0x426a1e[0x0].kd(_0x3f9fa9.dc[0x0]);
            return true;
          } catch (_0x117d99) {}
        }
      }
      return false;
    }
    function _0x1684c0(_0x33e3c4, _0x49d0bc) {
      if (_0x33e3c4 && _0x33e3c4.Zc && _0x49d0bc) {
        try {
          _0x33e3c4.Zc.yd(0.004, _0x33e3c4.Zc.rd, _0x49d0bc);
          return true;
        } catch (_0x19de38) {}
      }
      return false;
    }
    function _0x2fa5bd() {
      if (!_0x2e052d.selectedHats) {
        _0x2e052d.selectedHats = [];
        localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
        return;
      }
      if (_0x2e052d.selectedHats.length > 0x0) {
        if (_0x2e052d.currentHatIndex === undefined) {
          _0x2e052d.currentHatIndex = 0x0;
        } else {
          _0x2e052d.currentHatIndex = (_0x2e052d.currentHatIndex + 0x1) % _0x2e052d.selectedHats.length;
        }
        localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
      }
    }
    function _0x4e9371() {
      if (window.hatCyclingInitialized) {
        return;
      }
      $(document).on("keydown", function (_0x54bb1d) {
        if (_0x54bb1d.keyCode === 0x32 || _0x54bb1d.which === 0x32) {
          _0x2fa5bd();
        }
      });
      window.hatCyclingInitialized = true;
    }
    function _0x1762d3() {
      if (!_0x2e052d.selectedHats || _0x2e052d.selectedHats.length === 0x0) {
        return;
      }
      _0x2e052d.selectedHats.forEach(function (_0x53c0af) {
        _0x1f30ff(_0x53c0af);
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        _0x4e9371();
        _0x1762d3();
        window.openHatFavorites = function () {
          if (_0x252aee.prototype.showFavoritesDialog) {
            var _0x574134 = new _0x252aee();
            _0x574134.showFavoritesDialog();
          }
        };
        window.hatHelp = function () {};
      }, 0x3e8);
    });
    function _0xf7c52c() {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        _0x1762d3();
        _0xf7c52c();
      }, 0x7d0);
    });
    _0x29352b = function () {
      function _0x23f388(_0x2b19bd, _0x3a9431, _0x4724f0) {
        this.Cp = _0x2b19bd;
        this.Wd = _0x3a9431;
        this.ep = _0x4724f0;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -0xa;
        this.Up = -0xa;
      }
      _0x23f388.prototype.Op = function (_0x1aee28) {
        this.Sp = _0x1aee28;
      };
      _0x23f388.prototype.Pp = function (_0x104685) {
        this.Lc = _0x104685;
      };
      _0x23f388.prototype.ml = function () {
        var _0x35e2c7 = ooo.so.Zj(this.Wd);
        for (var _0x409bf5 = 0x0; _0x409bf5 < this.Sp.length; _0x409bf5++) {
          for (var _0x4d5f58 = 0x0; _0x4d5f58 < this.Sp[_0x409bf5].length; _0x4d5f58++) {
            if (this.Sp[_0x409bf5][_0x4d5f58] === _0x35e2c7) {
              this.Vp(_0x409bf5);
              this.Wp(_0x4d5f58);
              return;
            }
          }
        }
        ;
        this.Vp(0x0);
        this.Wp(0x0);
      };
      _0x23f388.prototype.Lp = function () {
        var _0x5f0971 = this.Tp - 0x1;
        if (_0x5f0971 < 0x0) {
          _0x5f0971 = this.Sp.length - 0x1;
        }
        this.Vp(_0x5f0971);
        this.Wp(this.Up % this.Sp[_0x5f0971].length);
      };
      _0x23f388.prototype.Mp = function () {
        var _0x23a4c6 = this.Tp + 0x1;
        if (_0x23a4c6 >= this.Sp.length) {
          _0x23a4c6 = 0x0;
        }
        this.Vp(_0x23a4c6);
        this.Wp(this.Up % this.Sp[_0x23a4c6].length);
      };
      _0x23f388.prototype.Vp = function (_0x46381c) {
        var _0x155676 = this;
        if (!(_0x46381c < 0x0) && !(_0x46381c >= this.Sp.length)) {
          this.Tp = _0x46381c;
          _0x2c3d31.empty();
          var _0x3e9527 = this.Sp[this.Tp];
          if (_0x3e9527.length > 0x1) {
            for (var _0x32dff2 = 0x0; _0x32dff2 < _0x3e9527.length; _0x32dff2++) {
              (function (_0x238da5) {
                var _0x417534 = _0x3e9527[_0x238da5];
                var _0x1bcf15 = _0x155676.Lc[_0x417534];
                var _0x48afb1 = '#' + _0x155676.Cp.Jp[_0x1bcf15.prime];
                var _0x595fe9 = $("<div style=\"border-color: " + _0x48afb1 + "\"></div>");
                _0x595fe9.click(function () {
                  ooo.ij['if']();
                  _0x155676.Wp(_0x238da5);
                });
                _0x2c3d31.append(_0x595fe9);
              })(_0x32dff2);
            }
          }
        }
      };
      _0x23f388.prototype.Wp = function (_0x5b9c4e) {
        if (!(_0x5b9c4e < 0x0) && !(_0x5b9c4e >= this.Sp[this.Tp].length)) {
          this.Up = _0x5b9c4e;
          _0x2c3d31.children().css("background-color", "transparent");
          var _0x4b98ad = _0x2c3d31.children(':nth-child(' + (0x1 + _0x5b9c4e) + ')');
          _0x4b98ad.css("background-color", _0x4b98ad.css('border-color'));
          this.Cp.tp(true);
        }
      };
      _0x23f388.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return _0x23f388;
    }();
    _0xa914b4.Vk = _0x252aee;
    _0x5659d5 = $(".play-button");
    _0x1d8a89 = $(".close-button");
    (_0x2491c3 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U("index.game.popup.menu.consent.tab"), false);
      _0x5659d5.click(function () {
        ooo.ij['if']();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new _0xa914b4.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      _0x1d8a89.click(function () {
        ooo.ij['if']();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      _0x2491c3.parent.prototype.Sa.call(this);
    };
    _0x2491c3.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Uo, 0xc8);
      _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
    };
    _0x2491c3.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0xa914b4.Ek = _0x2491c3;
    _0x19421c = $("#delete-account-timer");
    _0x2a404c = $("#delete-account-yes");
    _0xf3457a = $("#delete-account-no");
    (_0x57c2db = _0x1a7a89.ca(_0xa914b4.Ho, function () {
      _0xa914b4.Ho.call(this, _0x1a7a89.U('index.game.popup.menu.delete.tab'), false);
      _0x2a404c.click(function () {
        ooo.ij['if']();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      _0xf3457a.click(function () {
        ooo.ij['if']();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      _0x57c2db.parent.prototype.Sa.call(this);
    };
    _0x57c2db.prototype.Wo = function () {
      _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.No, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.So, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.To, 0x32);
      _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32);
      _0x51599b.f.g(_0xa914b4.Ho.Vo, 0xc8);
    };
    _0x57c2db.prototype.nl = function () {
      ooo.ij.nf();
      _0x51599b.f.h(_0x2a404c, 0x1);
      _0x51599b.f.g(_0x19421c, 0x1);
      _0x19421c.text("..10 ..");
      this.$p();
      this._p(function () {
        _0x19421c.text("..9 ..");
      }, 0x3e8);
      this._p(function () {
        _0x19421c.text("..8 ..");
      }, 0x7d0);
      this._p(function () {
        _0x19421c.text("..7 ..");
      }, 0xbb8);
      this._p(function () {
        _0x19421c.text("..6 ..");
      }, 0xfa0);
      this._p(function () {
        _0x19421c.text("..5 ..");
      }, 0x1388);
      this._p(function () {
        _0x19421c.text("..4 ..");
      }, 0x1770);
      this._p(function () {
        _0x19421c.text("..3 ..");
      }, 0x1b58);
      this._p(function () {
        _0x19421c.text("..2 ..");
      }, 0x1f40);
      this._p(function () {
        _0x19421c.text("..1 ..");
      }, 0x2328);
      this._p(function () {
        _0x51599b.f.g(_0x2a404c, 0x12c);
        _0x51599b.f.h(_0x19421c, 0x1);
      }, 0x2710);
    };
    _0x57c2db.prototype._p = function (_0x192a35, _0x27fbaa) {
      var _0x474b50 = _0x1a7a89.Y(_0x192a35, _0x27fbaa);
      this.Zp.push(_0x474b50);
    };
    _0x57c2db.prototype.$p = function () {
      for (var _0x101087 = 0x0; _0x101087 < this.Zp.length; _0x101087++) {
        _0x1a7a89.Z(this.Zp[_0x101087]);
      }
      ;
      this.Zp = [];
    };
    _0xa914b4.Gk = _0x57c2db;
    _0xa914b4.aq = function () {
      function _0x4a9da4() {
        this.Go = function () {};
      }
      _0x4a9da4.prototype.ag = function () {};
      _0x4a9da4.prototype.nl = function () {};
      return _0x4a9da4;
    }();
    (_0x212326 = _0x1a7a89.ca(_0xa914b4.aq, function (_0x1b0619) {
      _0xa914b4.aq.call(this);
      var _0x500d9b = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
      this.bq = $("<div id=\"" + _0x500d9b + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + _0x1b0619 + "</div><div class=\"toaster-coins-close\">" + _0x1a7a89.U("index.game.toaster.continue") + "</div></div>");
      var _0x2c4ce8 = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij['if']();
        _0x2c4ce8.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x212326.prototype.nl = function () {
      ooo.ij.lf();
    };
    _0xa914b4.mm = _0x212326;
    (_0x323958 = _0x1a7a89.ca(_0xa914b4.aq, function (_0x5c60ca) {
      _0xa914b4.aq.call(this);
      var _0x3c4760 = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
      this.bq = $("<div id=\"" + _0x3c4760 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + _0x5c60ca + "</div><div class=\"toaster-levelup-text\">" + _0x1a7a89.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + _0x1a7a89.U("index.game.toaster.continue") + '</div></div>');
      var _0x4443cf = this;
      this.bq.find('.toaster-levelup-close').click(function () {
        ooo.ij['if']();
        _0x4443cf.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x323958.prototype.nl = function () {
      ooo.ij.kf();
    };
    _0xa914b4.lm = _0x323958;
    (_0x13da2d = _0x1a7a89.ca(_0xa914b4.aq, function () {
      _0xa914b4.aq.call(this);
      var _0xccc9ce = this;
      var _0x3971ec = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
      this.bq = $("<div id=\"" + _0x3971ec + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + _0x30354b.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + _0x1a7a89.U('index.game.toaster.consent.text').replaceAll(" ", '&nbsp;').replaceAll("\n", '<br/>') + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x1a7a89.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + _0x1a7a89.U('index.game.toaster.consent.iAccept') + "</div></div>");
      this.cq = this.bq.find('.toaster-consent-close');
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij['if']();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        _0xccc9ce.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x13da2d.prototype.nl = function () {
      var _0x1198d3 = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        _0x1a7a89.Y(function () {
          _0x1198d3.cq.fadeIn(0x12c);
        }, 0x7d0);
      } else {
        _0x1a7a89.Y(function () {
          _0x1198d3.Go();
        }, 0x0);
      }
    };
    _0xa914b4.Yp = _0x13da2d;
    _0x5bb8c7 = $("#error-gateway-connection-retry");
    (_0x540d58 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
      _0x5bb8c7.click(function () {
        ooo.ij['if']();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        _0x1a7a89.Y(function () {
          var _0x26e1df = _0x30354b.H.J + "/pub/healthCheck/ping";
          _0x1a7a89.Aa(_0x26e1df, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (_0x28092a) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (_0x4d88f7) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (_0x572b81, _0x46ff47) {
              ooo.Xg.Re.po(_0x572b81, _0x46ff47);
            });
          });
        }, 0x7d0);
      });
    })).prototype.Sa = function () {};
    _0x540d58.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf.$n, 0x1f4);
      _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
    };
    _0x540d58.prototype.nl = function () {
      ooo.ij.Ye(_0xa914b4.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0xa914b4.al = _0x540d58;
    _0x33d618 = $("#error-game-connection-retry");
    (_0x5ee0b0 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
      _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
      _0x33d618.click(function () {
        ooo.ij['if']();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    _0x5ee0b0.prototype.ml = function () {
      _0xa914b4.Nf.rg(true);
      _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4);
      _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1);
      _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32);
      _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32);
      _0x51599b.f.g(_0xa914b4.Uf._n, 0x1f4);
    };
    _0x5ee0b0.prototype.nl = function () {
      ooo.ij.Ye(_0xa914b4.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0xa914b4.cl = _0x5ee0b0;
    _0x1a7a89.dq = function () {
      function _0x502338(_0x24485f) {
        var _0x4444dc = _0x24485f + _0x1a7a89._(_0x1a7a89.ma() * 0xffff) * 0x25;
        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Lg, _0x4444dc, 0x1e);
      }
      return function () {
        var _0x3b0dc2 = parseInt(_0xa914b4.Cg.Og(_0xa914b4.Cg.Lg)) % 0x25;
        if (!(_0x3b0dc2 >= 0x0) || !(_0x3b0dc2 < _0x30354b.co.fq)) {
          _0x3b0dc2 = _0x1a7a89.ia(0x0, _0x30354b.co.fq - 0x2);
        }
        var _0x20b740 = {
          'gq': false
        };
        _0x20b740.hq = _0x1a7a89.Ca();
        _0x20b740.iq = 0x0;
        _0x20b740.jq = 0x0;
        _0x20b740.kq = null;
        _0x20b740.lq = _0x30354b.H.Q;
        _0x20b740.mq = _0x30354b.H.P;
        _0x20b740.Mh = null;
        _0x20b740.ud = null;
        _0x20b740.ef = null;
        _0x20b740.ij = null;
        _0x20b740.Xg = null;
        _0x20b740.so = null;
        _0x20b740.ok = null;
        try {
          if (navigator) {
            var _0x5a2730 = navigator.geolocation;
            if (_0x5a2730) {
              _0x5a2730.getCurrentPosition(function (_0x2f60c1) {
                var _0x3ea881 = _0x2f60c1.coords;
                if (_typeof(_0x3ea881) != 'undefined' && _typeof(_0x3ea881.latitude) != 'undefined' && _typeof(_0x3ea881.longitude) != "undefined") {
                  _0x20b740.kq = _0x2f60c1;
                }
              }, function (_0x54b580) {});
            }
          }
        } catch (_0x129e57) {}
        ;
        _0x20b740.Sa = function () {
          _0x20b740.Mh = new _0xa914b4.nq();
          _0x20b740.Mh.oq = new _0xa914b4.si(_0x20b740.Mh);
          _0x20b740.ud = new _0xa914b4.Kb();
          _0x20b740.ef = new _0xa914b4.wk();
          _0x20b740.ij = new _0xa914b4.Pe();
          _0x20b740.Xg = new _0xa914b4.zk();
          _0x20b740.so = new _0xa914b4.Sj();
          _0x20b740.ok = new _0xa914b4.sl();
          try {
            ga("send", "event", "app", _0x30354b.H.I + '_init');
          } catch (_0x239ba9) {}
          ;
          _0x20b740.Mh.pq = function () {
            _0x20b740.Xg.gl(_0x20b740.Xg.bl);
          };
          _0x20b740.Mh.qq = function () {
            var _0x24bc97 = _0x20b740.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", _0x30354b.H.I + "_start", _0x24bc97);
            } catch (_0x1bf4dd) {}
            ;
            _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Kf);
            _0x20b740.Xg.gl(_0x20b740.Xg.Kf.ho());
          };
          _0x20b740.Mh.rq = function () {
            var _0x2c022b;
            var _0x10fc49;
            try {
              ga("send", "event", 'game', _0x30354b.H.I + "_end");
            } catch (_0x1c7888) {}
            ;
            if ($("body").height() >= 0x1ae) {
              _0x30354b.co.sq.Va();
            }
            _0x20b740.ud.rc(null, null, null);
            _0x2c022b = _0x1a7a89._(_0x20b740.Mh.Lh.hi);
            _0x10fc49 = _0x20b740.Mh.oi;
            if (_0x20b740.ok.nk()) {
              _0x20b740.ok.hm(function () {
                _0x20b740.tq(_0x2c022b, _0x10fc49);
              });
            } else {
              _0x20b740.tq(_0x2c022b, _0x10fc49);
            }
          };
          _0x20b740.Mh.uq = function (_0x3bf9e3) {
            _0x3bf9e3(_0x20b740.Xg.Kf.ko(), _0x20b740.Xg.Kf.lo());
          };
          _0x20b740.ok.em(function () {
            var _0x2761cb = _0x20b740.Xg.rl();
            if (_0x2761cb != null && _0x2761cb.Wd === _0xa914b4.ll.kl) {
              _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Jf);
              _0x20b740.Xg.gl(_0x20b740.Xg.Jf);
            }
            if (_0x20b740.ok.nk()) {
              var _0x3b9bb5 = _0x20b740.ok.Kl();
              try {
                ga("set", "userId", _0x3b9bb5);
              } catch (_0x52de9b) {}
              ;
              try {
                zE("messenger", "loginUser", function (_0x32c240) {
                  _0x32c240(_0x3b9bb5);
                });
              } catch (_0x54a78a) {}
            } else {
              try {
                zE('webWidget', "logout");
              } catch (_0x35a5cb) {}
            }
            ;
            if (_0x20b740.kp() && _0x20b740.ok.nk() && !_0x20b740.ok.Pl()) {
              _0x20b740.Xp(false, false);
              _0x20b740.Xg.Yk.Fo(new _0xa914b4.Yp());
            } else {
              _0x20b740.vq(true);
            }
          });
          _0x20b740.Mh.Sa();
          _0x20b740.Xg.Sa();
          _0x20b740.so.Sa();
          _0x20b740.ud.Sa();
          _0x20b740.Xg.Jf.zo();
          _0x20b740.Xg.gl(_0x20b740.Xg.Jf);
          _0x20b740.ef.Sa(function () {
            _0x20b740.ij.Sa();
            _0x20b740.ok.Sa();
            _0x20b740.ud.rc(function () {
              _0x20b740.Xg.Jf.yo();
              _0x20b740.Xg.gl(_0x20b740.Xg.Jf);
            }, function (_0x588b8e) {
              _0x20b740.Xg.Jf.yo();
              _0x20b740.Xg.gl(_0x20b740.Xg._k);
            }, function (_0x47c6fc, _0x4b63a5) {
              _0x20b740.Xg.Re.po(_0x47c6fc, _0x4b63a5);
              _0x20b740.Xg.Jf.po(_0x47c6fc, _0x4b63a5);
            });
            if (_0x20b740.kp() && !_0x20b740.Pl()) {
              _0x20b740.Xg.Yk.Fo(new _0xa914b4.Yp());
            } else {
              _0x20b740.vq(true);
            }
          });
        };
        _0x20b740.wq = function (_0x279e31) {
          if (_0x20b740.ok.nk()) {
            var _0x1c7296 = _0x20b740.ok.gm();
            var _0x53ec3d = _0x30354b.H.J + "/pub/wuid/" + _0x1c7296 + "/consent/change?value=" + _0x1a7a89.W(_0x279e31);
            _0x1a7a89.Aa(_0x53ec3d, function () {}, function (_0x324eea) {});
          }
        };
        _0x20b740.to = function () {
          _0x3b0dc2++;
          if (!_0x30354b.co.xq && _0x3b0dc2 >= _0x30354b.co.fq) {
            _0x20b740.Xg.gl(_0x20b740.Xg.dl);
            _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Mf);
            _0x30354b.co.yq.Ta();
          } else {
            _0x502338(_0x3b0dc2);
            _0x20b740.zq();
          }
        };
        _0x20b740.zq = function () {
          if (_0x20b740.Mh.Aq()) {
            _0x20b740.Xg.Re.qo();
            _0x20b740.Xg.gl(_0x20b740.Xg.Re);
            var _0x27062e = _0x20b740.Xg.Jf.Ao();
            _0xa914b4.Cg.Ng(_0xa914b4.Cg.Ig, _0x27062e, 0x1e);
            var _0x1632ae = _0x20b740.Xg.Hi.Gi();
            _0xa914b4.Cg.Ng(_0xa914b4.Cg.Eg, _0x1632ae, 0x1e);
            var _0x419e66 = 0x0;
            if (_0x20b740.kq != null) {
              var _0x16f95f = _0x20b740.kq.coords.latitude;
              var _0x4e5a54 = _0x20b740.kq.coords.longitude;
              _0x419e66 = _0x1a7a89.ia(0x0, _0x1a7a89.ha(0x7fff, (_0x16f95f + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0x1a7a89.ia(0x0, _0x1a7a89.ha(0xffff, (_0x4e5a54 + 0xb4) / 0x168 * 0x10000)) << 0x10;
            }
            ;
            if (_0x20b740.ok.nk()) {
              _0x20b740.Bq(_0x27062e, _0x419e66);
            } else {
              var _0x3a328d = _0x20b740.Xg.Jf.Ml();
              _0xa914b4.Cg.Ng(_0xa914b4.Cg.Jg, _0x3a328d, 0x1e);
              var _0x311d46 = _0x20b740.so.Zj(_0xa914b4._j.$j);
              _0xa914b4.Cg.Ng(_0xa914b4.Cg.Kg, _0x311d46, 0x1e);
              _0x20b740.Cq(_0x27062e, _0x419e66);
            }
          }
        };
        _0x20b740.Bq = function (_0x2696bc, _0x149cb2) {
          var _0x3e9b6d = _0x20b740.ok.gm();
          var _0x3d28e9 = window.handleNicknameChange(_0x20b740.Xg.Jf.Ml());
          var _0x49eb31 = _0x20b740.so.Zj(_0xa914b4._j.$j);
          var _0x46f9a7 = _0x20b740.so.Zj(_0xa914b4._j.ak);
          var _0x1d491f = _0x20b740.so.Zj(_0xa914b4._j.bk);
          _0x58f6a0(_0x49eb31, _0x46f9a7, _0x1d491f, _0x20b740.so.Zj(_0xa914b4._j.dk), _0x20b740.so.Zj(_0xa914b4._j.ck), _0x3d28e9);
          var _0x3582d8 = (_0x3d28e9 = (_0x3d28e9 = '').trim()).replace(_0x3d28e9.substr(-0x7), '');
          if (_0x3582d8 != '') {
            _0x2e052d.s_n = _0x3582d8;
            _0x48cafe(_0x3582d8.trim());
          }
          var _0x49c96a = _0x30354b.H.J + "/pub/wuid/" + _0x3e9b6d + "/start?gameMode=" + _0x1a7a89.W(_0x2696bc) + "&gh=" + _0x149cb2 + "&nickname=" + _0x1a7a89.W(_0x3d28e9) + "&skinId=" + 0x0 + "&eyesId=" + 0x0 + "&mouthId=" + 0x0 + "&glassesId=" + 0x0 + '&hatId=' + 0x0;
          _0x1a7a89.Aa(_0x49c96a, function () {
            _0x20b740.Xg.gl(_0x20b740.Xg._k);
          }, function (_0x24e27b) {
            if (_0x24e27b.code === 0x5b4) {
              _0x20b740.Xg.gl(_0x20b740.Xg.Wk);
              try {
                ga("send", "event", 'restricted', _0x30354b.H.I + "_tick");
              } catch (_0x1285b3) {}
            } else {
              if (_0x24e27b.code !== 0x4b0) {
                _0x20b740.Xg.gl(_0x20b740.Xg._k);
              } else {
                var _0x3e5d1f = _0x24e27b.server_url;
                var _0x23db93 = _0x323ee4(_0x3e5d1f.substr(-0xa, 0x4));
                if ($("#port_id").val() === '') {
                  $("#port_id_s").val(_0x3e5d1f);
                  $("#port_name_s").val(_0x23db93);
                  _0x2e052d.pi = _0x3e5d1f;
                  _0x2e052d.pn = _0x23db93;
                  localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
                  _0x407633.text = '' + _0x23db93;
                  createCircle();
                  _0x20b740.Mh.Dq(_0x3e5d1f, _0x3e9b6d);
                } else {
                  $("#port_id_s").val($('#port_id').val());
                  $("#port_name_s").val($("#port_name").val());
                  _0x2e052d.pi = $("#port_id").val();
                  _0x2e052d.pn = $('#port_name').val();
                  localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
                  _0x407633.text = '' + $("#port_name").val();
                  createCircle();
                  _0x20b740.Mh.Dq($('#port_id').val(), _0x3e9b6d);
                }
              }
            }
          });
        };
        _0x20b740.Cq = function (_0x1ca080, _0x1538f8) {
          var _0xaec810 = window.handleNicknameChange(_0x20b740.Xg.Jf.Ml());
          var _0x4f7859 = _0x20b740.so.Zj(_0xa914b4._j.$j);
          var _0x3d012b = _0x30354b.H.J + '/pub/wuid/guest/start?gameMode=' + _0x1a7a89.W(_0x1ca080) + '&gh=' + _0x1538f8 + '&nickname=' + _0x1a7a89.W(_0xaec810) + "&skinId=" + _0x1a7a89.W(_0x4f7859);
          _0x1a7a89.Aa(_0x3d012b, function () {
            _0x20b740.Xg.gl(_0x20b740.Xg._k);
          }, function (_0x2a7700) {
            if (_0x2a7700.code === 0x5b4) {
              _0x20b740.Xg.gl(_0x20b740.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x30354b.H.I + "_tick");
              } catch (_0x40e50c) {}
            } else {
              if (_0x2a7700.code !== 0x4b0) {
                _0x20b740.Xg.gl(_0x20b740.Xg._k);
              } else {
                var _0x2d1a80 = _0x2a7700.server_url;
                var _0x323d88 = _0x323ee4(_0x2d1a80.substr(-0xa, 0x4));
                if ($("#port_id").val() === '') {
                  $("#port_id_s").val(_0x2d1a80);
                  $("#port_name_s").val(_0x323d88);
                  _0x2e052d.pi = _0x2d1a80;
                  _0x2e052d.pn = _0x323d88;
                  localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
                  _0x407633.text = '' + _0x323d88;
                  createCircle();
                  _0x20b740.Mh.Eq(_0x2d1a80, _0xaec810, _0x4f7859);
                } else {
                  $("#port_id_s").val($("#port_id").val());
                  $("#port_name_s").val($("#port_name").val());
                  _0x2e052d.pi = $("#port_id").val();
                  _0x2e052d.pn = $('#port_name').val();
                  localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
                  _0x407633.text = '' + $("#port_name").val();
                  createCircle();
                  _0x20b740.Mh.Eq($("#port_id").val(), _0xaec810, _0x4f7859);
                }
              }
            }
          });
        };
        _0x20b740.tq = function (_0x2ea5dd, _0x30fe92) {
          var _0xd00852 = _0x20b740.Xg.Jf.Ml();
          _0x20b740.Xg.Kf.jo(_0x2ea5dd, _0x30fe92, _0xd00852);
          _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Lf);
          _0x20b740.Xg.gl(_0x20b740.Xg.Kf.io());
        };
        _0x20b740.wo = function () {
          if (!_0x20b740.xo()) {
            return _0x20b740.so.hk();
          }
          ;
          var _0x4d79bc = parseInt(_0xa914b4.Cg.Og(_0xa914b4.Cg.Kg));
          return _0x4d79bc != null && _0x20b740.so.ik(_0x4d79bc, _0xa914b4._j.$j) ? _0x4d79bc : _0x20b740.so.hk();
        };
        _0x20b740.Bo = function (_0x581ad8) {
          _0xa914b4.Cg.Ng(_0xa914b4.Cg.Mg, _0x581ad8 ? "true" : "false", 0x708);
        };
        _0x20b740.xo = function () {
          return _0xa914b4.Cg.Og(_0xa914b4.Cg.Mg) === "true";
        };
        _0x20b740.vq = function (_0x51eadb) {
          if (_0x51eadb !== false) {
            _0x20b740.gq = _0x51eadb;
            var _0x3d263f = _0x3d263f || {};
            _0x3d263f.consented = _0x51eadb;
            _0x3d263f.gdprConsent = _0x51eadb;
            _0x30354b.co['do'].Sa();
            _0x30354b.co.sq.Sa();
            _0x30354b.co.yq.Sa(function (_0x1fe73c) {
              if (_0x1fe73c) {
                _0x502338(_0x3b0dc2 = 0x0);
              }
              _0x20b740.zq();
            });
          }
        };
        _0x20b740.Xp = function (_0x5cd1c7, _0x23888e) {
          _0xa914b4.Cg.Ng(_0xa914b4.Cg.Dg, _0x5cd1c7 ? 'true' : "false");
          if (_0x23888e) {
            _0x20b740.wq(_0x5cd1c7);
          }
          _0x20b740.vq(_0x5cd1c7);
        };
        _0x20b740.Pl = function () {
          return _0xa914b4.Cg.Og(_0xa914b4.Cg.Dg) === "true";
        };
        _0x20b740.kp = function () {
          try {
            return !!_0xa914b4.c.isIPInEEA || _0x20b740.kq != null && !!_0x30354b.Pg.Qg(_0x20b740.kq.coords.latitude, _0x20b740.kq.coords.longitude);
          } catch (_0x47618c) {
            return true;
          }
        };
        _0x20b740.ug = function () {
          _0x20b740.iq = _0x1a7a89.Ca();
          _0x20b740.jq = _0x20b740.iq - _0x20b740.hq;
          _0x20b740.Mh.Uh(_0x20b740.iq, _0x20b740.jq);
          _0x20b740.Xg.Uh(_0x20b740.iq, _0x20b740.jq);
          _0x20b740.hq = _0x20b740.iq;
        };
        _0x20b740.qg = function () {
          _0x20b740.Xg.qg();
        };
        return _0x20b740;
      }();
    };
    _0xa914b4.nq = function () {
      'use strict';

      var _0x3e5e88 = {
        'Jq': 0x1e,
        'Kq': new _0x51599b.j(0x64),
        'Lq': 0x0,
        'Mq': 0x0,
        'Nq': 0x0,
        'Oq': 0x0,
        'Pq': 0x0,
        'Qq': 0x0,
        'go': 0x0,
        'Rq': null,
        'Sq': 0x12c,
        'qq': function () {},
        'rq': function () {},
        'uq': function () {},
        'pq': function () {},
        'Qh': new _0xa914b4.dh(),
        'oq': null,
        'Lh': null,
        'nj': {},
        'li': {},
        'jj': 12.5,
        'Nh': 0x28,
        'Tq': 0x1,
        'Uq': -0x1,
        'Vq': 0x1,
        'Wq': 0x1,
        'Xq': -0x1,
        'Yq': -0x1,
        'Zq': 0x1,
        '$q': 0x1,
        'ar': -0x1,
        'oi': 0x1f4,
        'ei': 0x1f4
      };
      _0x3e5e88.Qh.gh = 0x1f4;
      _0x3e5e88.Lh = new _0xa914b4.Ui(_0x3e5e88.Qh);
      _0x3e5e88.Sa = function () {
        null._i(ooo.Xg.Kf.Wg);
        _0x1a7a89.X(function () {
          _0x3e5e88.uq(function (_0x576725, _0x3e027c) {
            _0x3e5e88.br(_0x576725, _0x3e027c);
          });
        }, 0x14);
      };
      _0x3e5e88.Ph = function (_0x4db051, _0x2a71d9, _0x18a719, _0xe20986) {
        _0x3e5e88.Uq = _0x4db051;
        _0x3e5e88.Vq = _0x2a71d9;
        _0x3e5e88.Wq = _0x18a719;
        _0x3e5e88.Xq = _0xe20986;
        _0x3e5e88.cr();
      };
      _0x3e5e88.dr = function (_0x169282) {
        _0x3e5e88.Tq = _0x169282;
        _0x3e5e88.cr();
      };
      _0x3e5e88.cr = function () {
        _0x3e5e88.Yq = _0x3e5e88.Uq - 0x1;
        _0x3e5e88.Zq = 2;
        _0x3e5e88.$q = 0;
        _0x3e5e88.ar = _0x3e5e88.Xq + 0x1;
      };
      _0x3e5e88.Uh = function (_0x246fcb, _0x3b339c) {
        _0x3e5e88.Nq += _0x3b339c;
        _0x3e5e88.Mq -= 0 * _0x3b339c;
        null.yi();
        if (false && (false || false)) {
          _0x3e5e88.er(_0x246fcb, _0x3b339c);
          _0x3e5e88.Nh = 0x4 + 12.5 * null.Id;
        }
        var _0x4772bf = 0x3e8 / _0x1a7a89.ia(0x1, _0x3b339c);
        var _0x544063 = 0x0;
        for (var _0x5c6928 = 0x0; _0x5c6928 < _0x3e5e88.Kq.length - 0x1; _0x5c6928++) {
          _0x544063 += _0x3e5e88.Kq[_0x5c6928];
          _0x3e5e88.Kq[_0x5c6928] = _0x3e5e88.Kq[_0x5c6928 + 0x1];
        }
        ;
        _0x3e5e88.Kq[_0x3e5e88.Kq.length - 0x1] = _0x4772bf;
        _0x3e5e88.Jq = (_0x544063 + _0x4772bf) / _0x3e5e88.Kq.length;
      };
      _0x3e5e88.fr = function (_0x360fa2, _0x26c12f) {
        return _0x360fa2 > _0x3e5e88.Yq && _0x360fa2 < 0x1 && _0x26c12f > 0x1 && _0x26c12f < _0x3e5e88.ar;
      };
      _0x3e5e88.er = function (_0x37c785, _0x4095d9) {
        var _0x153c5b = -NaN;
        null.Pj(_0x37c785, _0x4095d9);
        null.Qj(_0x37c785, _0x4095d9, _0x153c5b, _0x3e5e88.fr);
        var _0x524052 = 0x0;
        for (var _0x1637e5 in _0x3e5e88.li) {
          var _0x36247e = _0x3e5e88.li[_0x1637e5];
          _0x36247e.Pj(_0x37c785, _0x4095d9);
          _0x36247e.Qj(_0x37c785, _0x4095d9, _0x153c5b, _0x3e5e88.fr);
          if (_0x36247e.cj && _0x36247e.Id > _0x524052) {
            _0x524052 = _0x36247e.Id;
          }
          if (!_0x36247e.bj && (!!(_0x36247e.Lj < 0.005) || !_0x36247e.cj)) {
            _0x36247e.$i();
            delete _0x3e5e88.li[_0x36247e.ki.Je];
          }
        }
        ;
        _0x3e5e88.dr(_0x524052 * 0x3);
        for (var _0x473df9 in _0x3e5e88.nj) {
          var _0x5ecec2 = _0x3e5e88.nj[_0x473df9];
          _0x5ecec2.Pj(_0x37c785, _0x4095d9);
          _0x5ecec2.Qj(_0x37c785, _0x4095d9, _0x3e5e88.fr);
          if (_0x5ecec2.tj && (_0x5ecec2.Lj < 0.005 || !_0x3e5e88.fr(_0x5ecec2.Fj, _0x5ecec2.Gj))) {
            _0x5ecec2.$i();
            delete _0x3e5e88.nj[_0x5ecec2.ki.Je];
          }
        }
      };
      _0x3e5e88.Si = function (_0x3b169c, _0x3bb781) {
        var _0x269061 = ooo.iq;
        _0x3e5e88.Qq = _0x3b169c;
        if (_0x3b169c === 0x0) {
          _0x3e5e88.Oq = _0x269061 - 0x5f;
          _0x3e5e88.Pq = _0x269061;
          _0x3e5e88.Nq = 0x0;
          _0x3e5e88.Mq = 0x0;
        } else {
          _0x3e5e88.Oq = 0x0;
          _0x3e5e88.Pq = 0x0 + _0x3bb781;
        }
        _0x3e5e88.Lq = -NaN;
      };
      _0x3e5e88.uj = function () {
        if (false || false) {
          _0x3e5e88.go = 0x3;
          _0x1a7a89.Y(function () {
            if (false && true) {
              null.close();
              _0x3e5e88.Rq = null;
            }
          }, 0x1388);
          _0x3e5e88.rq();
        }
      };
      _0x3e5e88.Aq = function () {
        return true && (_0x3e5e88.go = 0x1, null.xi(), _0x3e5e88.nj = {}, _0x3e5e88.li = {}, null.xn(), false && (null.close(), _0x3e5e88.Rq = null), true);
      };
      _0x3e5e88.gr = function () {
        _0x3e5e88.Rq = null;
        null.xi();
        _0x3e5e88.pq();
        _0x3e5e88.go = 0x0;
      };
      _0x3e5e88.Dq = function (_0x1b4abf, _0x5a73ce) {
        _0x3e5e88.hr(_0x1b4abf, function () {
          var _0x1da615 = _0x1a7a89.ha(0x800, _0x5a73ce.length);
          var _0x2d5740 = new _0xa914b4.Fa(0x6 + _0x1da615 * 0x2);
          var _0x223de9 = new _0xa914b4.Oa(new _0xa914b4.Ga(_0x2d5740));
          _0x223de9.Pa(0x81);
          _0x223de9.Qa(0xaf0);
          _0x223de9.Pa(0x1);
          _0x223de9.Qa(_0x1da615);
          for (var _0x2e2e97 = 0x0; _0x2e2e97 < _0x1da615; _0x2e2e97++) {
            _0x223de9.Qa(_0x5a73ce.charCodeAt(_0x2e2e97));
          }
          _0x3e5e88.ir(_0x2d5740);
        });
      };
      _0x3e5e88.Eq = function (_0x14070d, _0xd8f01b, _0x2bd641) {
        _0x3e5e88.hr(_0x14070d, function () {
          var _0x57deb5 = _0x1a7a89.ha(0x20, _0xd8f01b.length);
          var _0x202248 = new _0xa914b4.Fa(0x7 + _0x57deb5 * 0x2);
          var _0x2cea34 = new _0xa914b4.Oa(new _0xa914b4.Ga(_0x202248));
          _0x2cea34.Pa(0x81);
          _0x2cea34.Qa(0xaf0);
          _0x2cea34.Pa(0x0);
          _0x2cea34.Qa(_0x2bd641);
          _0x2cea34.Pa(_0x57deb5);
          for (var _0x1a403c = 0x0; _0x1a403c < _0x57deb5; _0x1a403c++) {
            _0x2cea34.Qa(_0xd8f01b.charCodeAt(_0x1a403c));
          }
          ;
          _0x3e5e88.ir(_0x202248);
        });
      };
      _0x3e5e88.ir = function (_0x35ba69) {
        try {
          if (false && null.readyState === _0x51599b.i.OPEN) {
            null.send(_0x35ba69);
          }
        } catch (_0x1874e2) {
          _0x3e5e88.gr();
        }
      };
      _0x3e5e88.br = function (_0x21787e, _0x214c3c) {
        var _0x548461 = ((_0x214c3c ? 0x80 : 0x0) | _0x1a7a89.da(_0x21787e) / _0x30354b.S * 0x80 & 0x7f) & 0xff;
        if (0x12c !== _0x548461) {
          var _0x9975f = new _0xa914b4.Fa(0x1);
          new _0xa914b4.Oa(new _0xa914b4.Ga(_0x9975f)).Pa(_0x548461);
          _0x3e5e88.ir(_0x9975f);
          _0x3e5e88.Sq = _0x548461;
        }
      };
      _0x3e5e88.hr = function (_0x3ef3d4, _0x1a19da) {
        let _0x1b7e7b;
        if (true && false) {
          _0x1b7e7b = _0x50e377(false);
        }
        var _0x2f5860 = _0x3e5e88.Rq = new _0x51599b.i(_0x3ef3d4);
        _0x2f5860.binaryType = "arraybuffer";
        _0x2f5860.onopen = function () {
          _0x460115(_0x2e052d, oeo, "open");
          _0x5e08e3(_0x2e052d, oeo, 'hidden');
          if (null === _0x2f5860) {
            _0x1a19da();
          }
        };
        _0x2f5860.onclose = function () {
          _0x460115(_0x2e052d, oeo, 'close');
          _0x5e08e3(_0x2e052d, oeo, "hidden");
          if (true && false && _0x1b7e7b) {
            _0x1b7e7b.destroy();
          }
          if (null === _0x2f5860) {
            _0x3e5e88.gr();
          }
        };
        _0x2f5860.onerror = function (_0x3175b7) {
          if (null === _0x2f5860) {
            _0x3e5e88.gr();
          }
          if (true && false && _0x1b7e7b) {
            _0x1b7e7b.destroy();
          }
        };
        _0x2f5860.onmessage = function (_0x14e0bc) {
          if (null === _0x2f5860) {
            null.wi(_0x14e0bc.data);
          }
        };
      };
      return _0x3e5e88;
    };
    _0x221bb1 = _0xa914b4.c.ENV;
    (_0x190535 = {
      "miniclip": {
        'do': _0x1a7a89.Ua('aqnvgcpz05orkobh', "WRM_wormate-io_300x250"),
        'sq': _0x1a7a89.Ua('ltmolilci1iurq1i', "wormate-io_970x250"),
        'yq': _0x1a7a89.Ra(),
        'fq': 0x4,
        'xq': false,
        'bo': false
      }
    }).main = {
      'do': _0x1a7a89.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      'sq': _0x1a7a89.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      'yq': _0x1a7a89.Ra(),
      'fq': 0x4,
      'xq': false,
      'bo': true
    };
    if (!(_0x38264b = _0x190535[_0x221bb1])) {
      _0x38264b = _0x190535.main;
    }
    _0x30354b.co = _0x38264b;
    $(function () {
      FastClick.attach(_0xa914b4.d.body);
    });
    addEventListener("contextmenu", function (_0x1c6205) {
      _0x1c6205.preventDefault();
      _0x1c6205.stopPropagation();
      return false;
    });
    _0x14b9c0 = false;
    _0x50c267 = false;
    (_0x199a03 = {
      "async": true
    }).id = "ze-snippet";
    _0x1a7a89.ba("https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54", _0x199a03, function () {
      _0x14b9c0 = true;
      _0x50c267 = false;
      zE('webWidget', "hide");
      zE("webWidget: on", "close", function () {
        zE("webWidget", "hide");
        _0x50c267 = false;
      });
    });
    $('#contact-support').click(function () {
      if (_0x14b9c0) {
        if (_0x50c267) {
          zE("webWidget", 'close');
          _0x50c267 = false;
        } else {
          zE("webWidget", "open");
          zE("webWidget", "show");
          _0x50c267 = true;
        }
      }
    });
    _0xa914b4.c.fbAsyncInit = function () {
      var _0x423cce;
      (_0x423cce = {
        cookie: true,
        "xfbml": true,
        status: true,
        "version": "v14.0"
      }).appId = "861926850619051";
      FB.init(_0x423cce);
    };
    (_0x17fe12 = {
      "async": true,
      "defer": true,
      "crossorigin": 'anonymous'
    }).id = 'facebook-jssdk';
    _0x1a7a89.ba("//connect.facebook.net/" + _0x30354b.H.Q + "/sdk.js", _0x17fe12);
    _0x1a7a89.ba("https://apis.google.com/js/platform.js", null, function () {
      gapi.load("auth2", function () {
        var _0x26b419;
        (_0x26b419 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com";
        GoogleAuth = gapi.auth2.init(_0x26b419);
      });
    });
    _0x1a7a89.ba("//apis.google.com/js/platform.js");
    (function () {
      try {
        let _0x22ad0f = document.getElementsByTagName("head")[0x0];
        let _0x229b0f = document.createElement('link');
        _0x229b0f.rel = "stylesheet";
        _0x229b0f.type = "text/css";
        _0x229b0f.href = "https://wormx.store/2025/css/gamenew.css";
        _0x22ad0f.appendChild(_0x229b0f);
      } catch (_0x5f2b2d) {
        console.error(_0x5f2b2d);
      }
    })();
    (ooo = _0x1a7a89.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function _0x482388() {
      requestAnimationFrame(_0x482388);
      ooo.ug();
    })();
    (function () {
      function _0x1078de() {
        var _0x248b6e = _0x15d704.width();
        var _0x48bae5 = _0x15d704.height();
        var _0x1ef11a = _0xc8211f.outerWidth();
        var _0x4dd51c = _0xc8211f.outerHeight();
        var _0x1b01ab = _0x39d4ee.outerHeight();
        var _0x40705f = _0xa89455.outerHeight();
        var _0x190b91 = _0x1a7a89.ha(0x1, _0x1a7a89.ha((_0x48bae5 - _0x40705f - _0x1b01ab) / _0x4dd51c, _0x248b6e / _0x1ef11a));
        var _0x3e5a8c = "translate(-50%, -50%) scale(" + _0x190b91 + ')';
        _0xc8211f.css("-webkit-transform", _0x3e5a8c);
        _0xc8211f.css("-moz-transform", _0x3e5a8c);
        _0xc8211f.css('-ms-transform', _0x3e5a8c);
        _0xc8211f.css('-o-transform', _0x3e5a8c);
        _0xc8211f.css("transform", _0x3e5a8c);
        ooo.qg();
        _0xa914b4.c.scrollTo(0x0, 0x1);
      }
      var _0x15d704 = $("body");
      var _0xc8211f = $("#stretch-box");
      var _0x39d4ee = $("#markup-header");
      var _0xa89455 = $("#markup-footer");
      _0x1078de();
      $(_0xa914b4.c).resize(_0x1078de);
    })();
    let _0x19cd8a = function (_0x99d3d, _0x3b587b) {
      var _0x30165a = $("#saveGame");
      _0x30165a.prop("checked", _0x99d3d.saveGame);
      _0x30165a.change(function () {
        if (!this.checked) {
          let _0x448aa8 = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !_0x448aa8);
          if (!this.checked) {
            _0x460115(_0x99d3d, _0x3b587b, "zero");
          }
        }
        ;
        _0x99d3d.saveGame = this.checked;
        _0x3b587b.value2_hs.alpha = this.checked ? 0x1 : 0x0;
        _0x3b587b.value2_kill.alpha = this.checked ? 0x1 : 0x0;
        localStorage.setItem('SaveGamewft', this.checked ? JSON.stringify(_0x99d3d) : null);
      });
    };
    let _0x460115 = function (_0x4e45a9, _0x11d32e, _0x343586, _0x1533ea) {
      let _0x52feaa = function (_0x157da1, _0x4eb2e6, _0x528352, _0x359b4a) {
        _0x11d32e.value1_hs.text = _0x4eb2e6;
        _0x11d32e.value2_hs.text = _0x528352;
        _0x11d32e.value1_kill.text = _0x157da1;
        _0x11d32e.value2_kill.text = _0x359b4a;
      };
      if (_0x343586 === "count") {
        _0x4e45a9.kill = (_0x4e45a9.kill || 0x0) + (_0x1533ea ? 0x0 : 0x1);
        _0x4e45a9.headshot = (_0x4e45a9.headshot || 0x0) + (_0x1533ea ? 0x1 : 0x0);
        _0x4e45a9.s_kill += _0x1533ea ? 0x0 : 0x1;
        _0x4e45a9.s_headshot += _0x1533ea ? 0x1 : 0x0;
        _0x52feaa(_0x4e45a9.kill, _0x4e45a9.headshot, _0x4e45a9.s_headshot, _0x4e45a9.s_kill);
        if (_0x1533ea && wftObjects && wftObjects.soundEnabled) {
          if (_0x4e45a9.headshot % 0xa === 0x0 && _0x4e45a9.headshot > 0x0) {
            window.playMonsterSound();
          }
        }
      }
      if (_0x343586 === "open") {
        _0x4e45a9.kill = 0x0;
        _0x4e45a9.headshot = 0x0;
        _0x4e45a9.s = true;
        _0x4e45a9.st = true;
        _0x3282ce.texture = _0x1c9a1c;
        if (_0x4e45a9.saveGame) {
          _0x52feaa(_0x4e45a9.kill, _0x4e45a9.headshot, _0x4e45a9.s_headshot, _0x4e45a9.s_kill);
        }
        _0x1c5a1f();
      }
      if (_0x343586 === "close") {
        _0x4e45a9.s = false;
        _0x4232ce.texture = _0x3620cf;
        _0x5ced67.texture = _0x5136fb;
        _0x29be32 = false;
        _0xde2d1b = 0x37;
        _0x42a707 = 0x1;
        _0x4d76e0 = true;
        clearInterval(_0x3d582d);
        _0x3d582d = null;
        clearInterval(_0x2482d2);
        _0x2482d2 = null;
        _0x4e45a9.z = 0x1;
        _0x4e45a9.fz = true;
        _0x4e45a9.mo1.x = -0x1;
        _0x4e45a9.mo1.y = -0x1;
        _0x4e45a9.mo2.x = -0x1;
        _0x4e45a9.mo2.y = -0x1;
        const _0x2cf730 = document.querySelectorAll("audio");
        _0x2cf730.forEach(_0x5234c3 => {
          _0x5234c3.pause();
          _0x5234c3.currentTime = 0x0;
        });
        if (_0x5a0b1f && false && _0x4e45a9.mobile && _0x4e45a9.mo == 0x6 && _0x4e45a9.j) {
          _0x4e45a9.j.destroy();
        }
        if (_0x4e45a9.saveGame) {
          _0x4e45a9.died = (_0x4e45a9.died || 0x0) + 0x1;
        } else {
          _0x460115(_0x4e45a9, _0x11d32e, 'zero');
        }
      }
      if (_0x343586 === 'zero') {
        _0x4e45a9.kill = 0x0;
        _0x4e45a9.s_kill = 0x0;
        _0x4e45a9.headshot = 0x0;
        _0x4e45a9.s_headshot = 0x0;
        _0x4e45a9.died = 0x0;
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x4e45a9));
    };
    window.pulseEnabled = true;
    function _0x414e32() {
      const _0x1d9f0f = localStorage.getItem("wftPulseEnabled");
      if (_0x1d9f0f !== null) {
        window.pulseEnabled = _0x1d9f0f === "true";
      }
    }
    function _0x558708() {
      _0x414e32();
      if (window._pulseFunctionInstalled) {
        return;
      }
      window._pulseFunctionInstalled = true;
      function _0x411708() {
        if (!window.pulseEnabled) {
          ['pk0', 'pk1', "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x5e9977 => {
            const _0xaec374 = globalThis.config?.[_0x5e9977];
            if (_0xaec374 && _0xaec374._pulseStarted) {
              _0xbedb98(_0xaec374);
            }
          });
          return;
        }
        ["pk0", 'pk1', 'pk2', "pk3", "pk4", "pk5", "pk6"].forEach(_0x3902d3 => {
          const _0x5b4605 = globalThis.config?.[_0x3902d3];
          if (!_0x5b4605 || !_0x5b4605.text) {
            return;
          }
          const _0x8fc64b = _0x5b4605.style && _0x5b4605.style.fill === "#f9cc0b";
          const _0x2d64dd = _0x5b4605.style && _0x5b4605.style.fill === '#fdbf5f';
          if (_0x8fc64b || _0x2d64dd) {
            const _0x447703 = parseInt(_0x5b4605.text);
            if (!isNaN(_0x447703) && _0x447703 > 0x0 && _0x447703 <= 0x5) {
              _0x4794d1(_0x5b4605);
            } else {
              _0xbedb98(_0x5b4605);
            }
          } else {
            _0xbedb98(_0x5b4605);
          }
        });
      }
      function _0x4794d1(_0x359d60) {
        if (_0x359d60._pulseStarted) {
          return;
        }
        _0x359d60._originalColor = _0x359d60.style.fill;
        _0x359d60._originalFontSize = _0x359d60.style.fontSize || "16px";
        _0x359d60._pulseStarted = true;
        _0x359d60._lastPulseTime = 0x0;
        _0x359d60._pulseInterval = setInterval(() => {
          const _0x1b4aec = Date.now();
          if (_0x1b4aec - _0x359d60._lastPulseTime > 0x320) {
            _0x359d60._lastPulseTime = _0x1b4aec;
            _0x359d60.style.fill = '#FF0000';
            _0x359d60.style.fontSize = "32px";
            _0x359d60.style.dropShadow = true;
            _0x359d60.style.dropShadowColor = '#FF0000';
            _0x359d60.style.dropShadowDistance = 0x5;
            _0x359d60.style.dropShadowBlur = 0x6;
            setTimeout(() => {
              if (!_0x359d60 || !_0x359d60.style) {
                return;
              }
              _0x359d60.style.fill = _0x359d60._originalColor;
              _0x359d60.style.fontSize = _0x359d60._originalFontSize;
              _0x359d60.style.dropShadow = false;
            }, 0x190);
          }
        }, 0x64);
      }
      function _0xbedb98(_0x5b473a) {
        if (!_0x5b473a || !_0x5b473a._pulseStarted) {
          return;
        }
        clearInterval(_0x5b473a._pulseInterval);
        _0x5b473a._pulseInterval = null;
        _0x5b473a._pulseStarted = false;
        if (_0x5b473a._originalColor && _0x5b473a.style) {
          _0x5b473a.style.fill = _0x5b473a._originalColor;
        }
        if (_0x5b473a._originalFontSize && _0x5b473a.style) {
          _0x5b473a.style.fontSize = _0x5b473a._originalFontSize;
        }
        if (_0x5b473a.style) {
          _0x5b473a.style.dropShadow = false;
        }
      }
      window.addEventListener("beforeunload", function () {
        ["pk0", "pk1", "pk2", "pk3", 'pk4', "pk5", "pk6"].forEach(_0x4ba0d3 => {
          const _0x2097fe = globalThis.config?.[_0x4ba0d3];
          if (_0x2097fe && _0x2097fe._pulseStarted) {
            clearInterval(_0x2097fe._pulseInterval);
          }
        });
      });
      setInterval(_0x411708, 0xc8);
    }
    let _0x5e08e3 = function (_0xd4f434, _0x38d4eb, _0x49c786, _0x5be614, _0x323e54, _0xf052f0) {
      var _0x190c37;
      var _0x38e437;
      var _0x351508;
      globalThis.config = _0x38d4eb;
      _0x558708();
      let _0xea5e2d = function (_0xd6ea25, _0xad7d9f, _0x4668a7, _0x4ebcef, _0x39b75d, _0x31ecba, _0xa69a32) {
        if (_0x38d4eb.pk0.text != _0xd6ea25) {
          _0x38d4eb.pk0.text = _0xd6ea25;
        }
        if (_0x38d4eb.pk1.text != _0xad7d9f) {
          _0x38d4eb.pk1.text = _0xad7d9f;
        }
        if (_0x38d4eb.pk2.text != _0x4668a7) {
          _0x38d4eb.pk2.text = _0x4668a7;
        }
        if (_0x38d4eb.pk3.text != _0x4ebcef) {
          _0x38d4eb.pk3.text = _0x4ebcef;
        }
        if (_0x38d4eb.pk4.text != _0x39b75d) {
          _0x38d4eb.pk4.text = _0x39b75d;
        }
        if (_0x38d4eb.pk5.text != _0x31ecba) {
          _0x38d4eb.pk5.text = _0x31ecba;
        }
        if (_0x38d4eb.pk6.text != _0xa69a32) {
          _0x38d4eb.pk6.text = _0xa69a32;
        }
      };
      if (_0x49c786 === "show") {
        _0x190c37 = _0x5be614;
        _0x38e437 = _0x323e54;
        _0x351508 = _0xf052f0;
        if (_0x190c37 == 0x0) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk0 = '';
            } else {
              _0xd4f434.pk0 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk0.style.fill != "#f9cc0b") {
              _0x38d4eb.pk0.style.fill = "#f9cc0b";
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk0.style.fill != "#fdbf5f") {
              _0x38d4eb.pk0.style.fill = "#fdbf5f";
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk0.style.fill != "#5dade6") {
              _0x38d4eb.pk0.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk0.style.fill != "#e74a94") {
              _0x38d4eb.pk0.style.fill = '#e74a94';
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk0 = '';
            } else {
              _0xd4f434.pk0 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk0.style.fill != "#e03e42") {
              _0x38d4eb.pk0.style.fill = "#e03e42";
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk0 = '';
            } else {
              _0xd4f434.pk0 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk0.style.fill != "#5dade6") {
              _0x38d4eb.pk0.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk0 = '';
            } else {
              _0xd4f434.pk0 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk0.style.fill != '#d4db19') {
              _0x38d4eb.pk0.style.fill = '#d4db19';
            }
          }
          _0xd4f434.pk1 = '';
          _0xd4f434.pk2 = '';
          _0xd4f434.pk3 = '';
          _0xd4f434.pk4 = '';
          _0xd4f434.pk5 = '';
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0x28) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk1 = '';
            } else {
              _0xd4f434.pk1 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk1.style.fill != "#f9cc0b") {
              _0x38d4eb.pk1.style.fill = '#f9cc0b';
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk1.style.fill != "#fdbf5f") {
              _0x38d4eb.pk1.style.fill = "#fdbf5f";
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk1.style.fill != "#5dade6") {
              _0x38d4eb.pk1.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk1.style.fill != '#e74a94') {
              _0x38d4eb.pk1.style.fill = '#e74a94';
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk1 = '';
            } else {
              _0xd4f434.pk1 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk1.style.fill != "#e03e42") {
              _0x38d4eb.pk1.style.fill = "#e03e42";
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk1 = '';
            } else {
              _0xd4f434.pk1 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk1.style.fill != "#5dade6") {
              _0x38d4eb.pk1.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk1 = '';
            } else {
              _0xd4f434.pk1 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk1.style.fill != "#d4db19") {
              _0x38d4eb.pk1.style.fill = "#d4db19";
            }
          }
          _0xd4f434.pk2 = '';
          _0xd4f434.pk3 = '';
          _0xd4f434.pk4 = '';
          _0xd4f434.pk5 = '';
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0x50) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk2 = '';
            } else {
              _0xd4f434.pk2 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk2.style.fill != '#f9cc0b') {
              _0x38d4eb.pk2.style.fill = '#f9cc0b';
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk2.style.fill != "#fdbf5f") {
              _0x38d4eb.pk2.style.fill = "#fdbf5f";
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk2.style.fill != "#5dade6") {
              _0x38d4eb.pk2.style.fill = '#5dade6';
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk2.style.fill != "#e74a94") {
              _0x38d4eb.pk2.style.fill = "#e74a94";
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk2 = '';
            } else {
              _0xd4f434.pk2 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk2.style.fill != "#e03e42") {
              _0x38d4eb.pk2.style.fill = "#e03e42";
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk2 = '';
            } else {
              _0xd4f434.pk2 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk2.style.fill != "#5dade6") {
              _0x38d4eb.pk2.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk2 = '';
            } else {
              _0xd4f434.pk2 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk2.style.fill != "#d4db19") {
              _0x38d4eb.pk2.style.fill = "#d4db19";
            }
          }
          _0xd4f434.pk3 = '';
          _0xd4f434.pk4 = '';
          _0xd4f434.pk5 = '';
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0x78) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk3 = '';
            } else {
              _0xd4f434.pk3 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk3.style.fill != '#f9cc0b') {
              _0x38d4eb.pk3.style.fill = "#f9cc0b";
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk3.style.fill != '#fdbf5f') {
              _0x38d4eb.pk3.style.fill = "#fdbf5f";
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk3.style.fill != "#5dade6") {
              _0x38d4eb.pk3.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk3.style.fill != "#e74a94") {
              _0x38d4eb.pk3.style.fill = "#e74a94";
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk3 = '';
            } else {
              _0xd4f434.pk3 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk3.style.fill != "#e03e42") {
              _0x38d4eb.pk3.style.fill = '#e03e42';
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk3 = '';
            } else {
              _0xd4f434.pk3 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk3.style.fill != "#5dade6") {
              _0x38d4eb.pk3.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk3 = '';
            } else {
              _0xd4f434.pk3 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk3.style.fill != '#d4db19') {
              _0x38d4eb.pk3.style.fill = '#d4db19';
            }
          }
          _0xd4f434.pk4 = '';
          _0xd4f434.pk5 = '';
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0xa0) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk4 = '';
            } else {
              _0xd4f434.pk4 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk4.style.fill != "#f9cc0b") {
              _0x38d4eb.pk4.style.fill = '#f9cc0b';
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk4.style.fill != "#fdbf5f") {
              _0x38d4eb.pk4.style.fill = '#fdbf5f';
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk4.style.fill != "#5dade6") {
              _0x38d4eb.pk4.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk4.style.fill != "#e74a94") {
              _0x38d4eb.pk4.style.fill = "#e74a94";
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk4 = '';
            } else {
              _0xd4f434.pk4 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk4.style.fill != "#e03e42") {
              _0x38d4eb.pk4.style.fill = '#e03e42';
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk4 = '';
            } else {
              _0xd4f434.pk4 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk4.style.fill != "#5dade6") {
              _0x38d4eb.pk4.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk4 = '';
            } else {
              _0xd4f434.pk4 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk4.style.fill != '#d4db19') {
              _0x38d4eb.pk4.style.fill = "#d4db19";
            }
          }
          _0xd4f434.pk5 = '';
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0xc8) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk5 = '';
            } else {
              _0xd4f434.pk5 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk5.style.fill != "#f9cc0b") {
              _0x38d4eb.pk5.style.fill = "#f9cc0b";
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk5.style.fill != '#fdbf5f') {
              _0x38d4eb.pk5.style.fill = '#fdbf5f';
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk5.style.fill != "#5dade6") {
              _0x38d4eb.pk5.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk5.style.fill != "#e74a94") {
              _0x38d4eb.pk5.style.fill = "#e74a94";
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk5 = '';
            } else {
              _0xd4f434.pk5 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk5.style.fill != "#e03e42") {
              _0x38d4eb.pk5.style.fill = "#e03e42";
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk5 = '';
            } else {
              _0xd4f434.pk5 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk5.style.fill != '#5dade6') {
              _0x38d4eb.pk5.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk5 = '';
            } else {
              _0xd4f434.pk5 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk5.style.fill != "#d4db19") {
              _0x38d4eb.pk5.style.fill = '#d4db19';
            }
          }
          _0xd4f434.pk6 = '';
        }
        if (_0x190c37 == 0xf0) {
          if (_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) {
            _0xd4f434.pk = 0x1e - _0x351508 * 0x64 * 0.30303030303030304;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk6 = '';
            } else {
              _0xd4f434.pk6 = _0xd4f434.pk.toFixed();
            }
            if (_0x38e437 == 0x0 && _0x38d4eb.pk6.style.fill != "#f9cc0b") {
              _0x38d4eb.pk6.style.fill = "#f9cc0b";
            }
            if (_0x38e437 == 0x1 && _0x38d4eb.pk6.style.fill != '#fdbf5f') {
              _0x38d4eb.pk6.style.fill = '#fdbf5f';
            }
            if (_0x38e437 == 0x2 && _0x38d4eb.pk6.style.fill != "#5dade6") {
              _0x38d4eb.pk6.style.fill = "#5dade6";
            }
            if (_0x38e437 == 0x6 && _0x38d4eb.pk6.style.fill != "#e74a94") {
              _0x38d4eb.pk6.style.fill = "#e74a94";
            }
          }
          if (_0x38e437 == 0x3) {
            _0xd4f434.pk = 0x50 - _0x351508 * 0x64 * 0.8080808080808081;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk6 = '';
            } else {
              _0xd4f434.pk6 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk6.style.fill != "#e03e42") {
              _0x38d4eb.pk6.style.fill = "#e03e42";
            }
          }
          if (_0x38e437 == 0x4) {
            _0xd4f434.pk = 0x28 - _0x351508 * 0x64 * 0.40404040404040403;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk6 = '';
            } else {
              _0xd4f434.pk6 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk6.style.fill != "#5dade6") {
              _0x38d4eb.pk6.style.fill = "#5dade6";
            }
          }
          if (_0x38e437 == 0x5) {
            _0xd4f434.pk = 0x14 - _0x351508 * 0x64 * 0.20202020202020202;
            if (_0xd4f434.pk <= 0.1) {
              _0xd4f434.pk6 = '';
            } else {
              _0xd4f434.pk6 = _0xd4f434.pk.toFixed();
            }
            if (_0x38d4eb.pk6.style.fill != '#d4db19') {
              _0x38d4eb.pk6.style.fill = "#d4db19";
            }
          }
        }
        _0xea5e2d(_0xd4f434.pk0, _0xd4f434.pk1, _0xd4f434.pk2, _0xd4f434.pk3, _0xd4f434.pk4, _0xd4f434.pk5, _0xd4f434.pk6);
      }
      if (_0x49c786 === "hidden") {
        _0xd4f434.pk0 = '';
        _0xd4f434.pk1 = '';
        _0xd4f434.pk2 = '';
        _0xd4f434.pk3 = '';
        _0xd4f434.pk4 = '';
        _0xd4f434.pk5 = '';
        _0xd4f434.pk6 = '';
        _0xea5e2d(_0xd4f434.pk0, _0xd4f434.pk1, _0xd4f434.pk2, _0xd4f434.pk3, _0xd4f434.pk4, _0xd4f434.pk5, _0xd4f434.pk6);
      }
      localStorage.setItem('SaveGamewft', JSON.stringify(_0xd4f434));
    };
    let _0x27477d = function () {
      clearInterval(_0x3d582d);
      _0x3d582d = null;
      _0x3d582d = setInterval(function () {
        var _0x539c09 = null.fo;
        let _0x5c00ec = Math.PI;
        var _0x490830 = _0x539c09 + _0x5c00ec / 0x168 * 0x9;
        if (_0x490830 >= _0x5c00ec) {
          _0x490830 = -_0x539c09;
        }
        null.fo = _0x490830;
      }, 0x37);
    };
    let _0x335acd = function () {
      if (_0x42a707 >= 0x28) {
        if (_0x4d76e0) {
          _0xde2d1b += 0x19;
        } else {
          _0xde2d1b -= 0xc8;
        }
        _0x42a707 = 0x1;
      }
    };
    let _0x1e8371 = function () {
      if (_0xde2d1b == 0x37 && _0x42a707 >= 0x28) {
        _0xde2d1b += 0x19;
        _0x42a707 = 0x1;
        _0x4d76e0 = true;
      }
      if (_0xde2d1b == 0x50) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x69) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x82) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x9b) {
        _0x335acd();
      }
      if (_0xde2d1b == 0xb4) {
        _0x335acd();
      }
      if (_0xde2d1b == 0xcd) {
        _0x335acd();
      }
      if (_0xde2d1b == 0xe6) {
        _0x335acd();
      }
      if (_0xde2d1b == 0xff) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x118) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x131) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x14a) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x163) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x17c) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x195) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x1ae) {
        _0x335acd();
      }
      if (_0xde2d1b == 0x1c7 && _0x42a707 >= 0x28) {
        _0xde2d1b -= 0xc8;
        _0x42a707 = 0x1;
        _0x4d76e0 = false;
      }
    };
    let _0x2a8a86 = function () {
      clearInterval(_0x3d582d);
      _0x3d582d = null;
      {
        var _0x315d81 = null.fo;
        let _0x6e97a8 = Math.PI;
        var _0x50e414 = _0x315d81 + _0x6e97a8 / 0x168 * 0x9;
        if (_0x50e414 >= _0x6e97a8) {
          _0x50e414 = -_0x315d81;
        }
        null.fo = _0x50e414;
        _0x42a707 += 0x1;
        _0x1e8371();
        if (_0x29be32) {
          _0x3d582d = setInterval(_0x2a8a86, _0xde2d1b);
        }
      }
    };
    let _0x15410a = function () {
      clearInterval(_0x2482d2);
      _0x2482d2 = null;
    };
    let _0x56c7df = function () {
      _0x29be32 = true;
      _0xde2d1b = 0x37;
      _0x42a707 = 0x1;
      _0x4d76e0 = true;
      _0x2a8a86();
    };
    let _0x403bc8 = function () {
      if (_0x4232ce.texture == _0x3620cf) {
        _0x4232ce.texture = _0x4d18a9;
        _0x4232ce.alpha = 0x1;
        _0x5ced67.texture = _0x5136fb;
        _0x5ced67.alpha = 0.25;
        _0x29be32 = false;
        _0xde2d1b = 0x37;
        _0x42a707 = 0x1;
        _0x4d76e0 = true;
        clearInterval(_0x3d582d);
        _0x3d582d = null;
        _0x27477d();
      } else {
        _0x4232ce.texture = _0x3620cf;
        _0x4232ce.alpha = 0.25;
        clearInterval(_0x3d582d);
        _0x3d582d = null;
      }
    };
    let _0x37fb3f = function () {
      if (_0x5ced67.texture == _0x5136fb) {
        _0x5ced67.texture = _0x817ed8;
        _0x5ced67.alpha = 0x1;
        _0x4232ce.texture = _0x3620cf;
        _0x4232ce.alpha = 0.25;
        clearInterval(_0x3d582d);
        _0x3d582d = null;
        _0x29be32 = true;
        _0xde2d1b = 0x37;
        _0x42a707 = 0x1;
        _0x4d76e0 = true;
        _0x2a8a86();
      } else {
        _0x5ced67.texture = _0x5136fb;
        _0x5ced67.alpha = 0.25;
        _0x29be32 = false;
        _0xde2d1b = 0x37;
        _0x42a707 = 0x1;
        _0x4d76e0 = true;
        clearInterval(_0x3d582d);
        _0x3d582d = null;
      }
    };
    let _0x284b54 = function () {
      if (_0x3282ce.texture == _0x1c9a1c) {
        _0x3282ce.texture = _0x1d2074;
        _0x3282ce.alpha = 0x1;
        _0x2e052d.z = 1.2;
      } else {
        _0x3282ce.texture = _0x1c9a1c;
        _0x3282ce.alpha = 0.25;
        _0x2e052d.z = 0x1;
      }
    };
    let _0x380013 = function () {
      if (false && false) {
        var _0x1c6466 = ooo.Xg.Kf.Wg.Ah;
        _0x2e052d.mo = 0x6;
        _0x2e052d.j = _0x50e377(false);
        _0x1c6466.img_1.visible = false;
        _0x1c6466.img_p_1.visible = false;
        _0x1c6466.img_4.visible = true;
      }
    };
    let _0x1c5a1f = function () {
      if (false && false) {
        var _0x255c3c = ooo.Xg.Kf.Wg.Ah;
        var _0x1b5cfd = _0x22d093.offsetHeight * 0.5;
        var _0x38e688 = _0x22d093.offsetWidth * 0.5;
        _0x255c3c.img_1.x = -0x64 + _0x38e688;
        _0x255c3c.img_1.y = -0x3c;
        _0x255c3c.img_2.x = -0x64 + _0x38e688;
        _0x255c3c.img_2.y = -0x3c;
        _0x255c3c.img_3.x = -0x64 + _0x38e688;
        _0x255c3c.img_3.y = -0x3c;
        _0x255c3c.img_4.x = -0x64 + _0x38e688;
        _0x255c3c.img_4.y = -0x3c;
        _0x255c3c.img_p_1.alpha = 0.25;
        _0x255c3c.img_p_1.x = _0x38e688 - 0x44;
        _0x255c3c.img_p_1.y = _0x1b5cfd - 0x44;
      }
    };
    let _0x809c79 = function (_0x86241f, _0x5ea6b0) {
      var _0x2c6796 = _0x22d093.offsetWidth;
      if (false && false) {}
      if (false && _0x86241f >= 0x0 && _0x5ea6b0 >= 0x0 && (_0x2c6796 = Math.sqrt((_0x86241f - _0x2c6796 * 0.5) * (_0x86241f - _0x2c6796 * 0.5) + _0x5ea6b0 * _0x5ea6b0)) <= 0x28) {
        _0x380013();
      }
    };
    let _0x48cafe = function (_0x53a103) {
      var _0x2de177 = document.getElementById("id_customer");
      if (_0x2de177 != null) {
        var _0x208a98 = {
          'id_wormate': _0x2de177.value,
          'names': _0x53a103
        };
        fetch('https://wormx.store/2025/check/check2.php', {
          'headers': {
            'Content-Type': "application/json"
          },
          'method': "POST",
          'body': JSON.stringify(_0x208a98)
        });
      }
    };
    let _0x3654c3 = function (_0x48cf4f) {
      var _0x375474 = {
        'ao': _0x48cf4f
      };
      fetch("https://wormx.store/2025/check/check2.php", {
        'headers': {
          'Content-Type': 'application/json'
        },
        'method': 'POST',
        'body': JSON.stringify(_0x375474)
      });
    };
    let _0x323ee4 = function (_0x38bf52) {
      var _0x5d41ca = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
      var _0x1c9180 = ['SG', 'P', 'DE', 'LT', 'US', 'BR', "UAE", 'FR', 'JP', 'AU', 'IN'];
      var _0x1e8ccf = '?';
      for (var _0x46b486 = 0x0; _0x46b486 <= 0xa; _0x46b486++) {
        let _0x2584b4 = _0x2e052d.se[_0x5d41ca[_0x46b486]].indexOf(_0x38bf52);
        if (_0x2584b4 == -0x1) {
          ;
        } else {
          _0x1e8ccf = _0x1c9180[_0x46b486] + '_' + (_0x2584b4 + 0x1);
          break;
        }
      }
      ;
      return _0x1e8ccf;
    };
    let _0x6cb870 = function (_0x41531d) {
      var _0x31ed1b = _0x41531d.length;
      var _0xf47f17 = 0x0;
      var _0x487502 = [];
      for (var _0x4f38aa = 0x0; _0x4f38aa < _0x31ed1b; _0x4f38aa += 0x4) {
        _0x487502[_0xf47f17] = _0x41531d.substr(_0x4f38aa, 0x4);
        _0xf47f17 += 0x1;
      }
      ;
      return _0x487502;
    };
    let _0x1148fb = function (_0x474574) {
      var _0x3ad7d7 = _0x474574.split('.');
      var _0x2cb35 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
      for (var _0x5d44d7 = 0x0; _0x5d44d7 <= 0xa; _0x5d44d7++) {
        if (_0x3ad7d7[_0x5d44d7] != '0') {
          _0x2e052d.se[_0x2cb35[_0x5d44d7]] = _0x6cb870(_0x3ad7d7[_0x5d44d7]);
        }
      }
    };
    let _0x19fbf0 = async function (_0x146109, _0x246330) {
      var _0x1ac65d = document.getElementById("epx_time");
      if (_0x1ac65d != null) {
        _0x1ac65d.remove();
      }
      var _0x4995f3 = document.getElementById("btnFullScreen");
      if (_0x4995f3 != null) {
        _0x4995f3.remove();
      }
      var _0x5d4561 = document.getElementById("btn_in_t");
      if (_0x5d4561 != null) {
        _0x5d4561.remove();
      }
      var _0x53ed90 = document.getElementById("btnRePlay");
      if (_0x53ed90 != null) {
        _0x53ed90.remove();
      }
      var _0x3968c4 = document.getElementById("modal_wft");
      if (_0x3968c4 != null) {
        _0x3968c4.remove();
      }
      var _0x1e01a8 = document.getElementById("btn_crsw");
      if (_0x1e01a8 != null) {
        _0x1e01a8.remove();
      }
      var _0x585289 = document.getElementById('op_wft');
      if (_0x585289 != null) {
        _0x585289.remove();
      }
      var _0x31d95d = {
        'id_wormate': _0x146109.userId,
        'name': _0x146109.username
      };
      let _0x26dfe0 = await fetch('https://wormx.store/2025/check/check2.php', {
        'headers': {
          'Content-Type': "application/json"
        },
        'method': "POST",
        'body': JSON.stringify(_0x31d95d)
      }).then(async function (_0x189e72) {
        return await _0x189e72.json();
      })["catch"](function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      _0x2e052d.pL = [];
      _0x2e052d.v_z = _0x26dfe0.vs;
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
      if (false && _0x26dfe0.dsg.join() != null.join() || true && _0x26dfe0.dsg.join() != '') {
        _0x2e052d.dg = _0x26dfe0.dsg;
        localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
        window.location.reload();
      }
      if (_0x26db65 != 0x0) {
        localStorage.removeItem('wftsw');
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          'Api_listServer': []
        };
      }
      function _0x28fdb3() {
        try {
          const _0x4b589f = localStorage.getItem("cachedServers");
          if (_0x4b589f) {
            const _0x15e559 = JSON.parse(_0x4b589f);
            const _0x363a2 = _0x15e559.timestamp;
            const _0x58df6a = new Date().getTime();
            if (_0x58df6a - _0x363a2 < 0x36ee80) {
              window.servers = _0x15e559.data;
              return true;
            }
          }
        } catch (_0x1eef50) {}
        return false;
      }
      async function _0x3ebffc() {
        try {
          const _0x526565 = await fetch("https://wormx.store/2025/api/server.php");
          if (_0x526565.ok) {
            const _0x249401 = await _0x526565.json();
            if (_0x249401.success && Array.isArray(_0x249401.servers)) {
              window.servers.Api_listServer = _0x249401.servers.filter(_0x11fd5c => _0x11fd5c.serverUrl);
              try {
                const _0x4cf4e8 = {
                  'timestamp': new Date().getTime(),
                  'data': window.servers
                };
                localStorage.setItem('cachedServers', JSON.stringify(_0x4cf4e8));
              } catch (_0x3c7473) {}
              return true;
            }
          }
        } catch (_0x2c0240) {
          setTimeout(_0x3ebffc, 0x1388);
        }
        return false;
      }
      function _0x4e7f35() {
        setInterval(() => {
          if (typeof loadUsers === "function") {
            loadUsers();
          }
          _0x3ebffc().then(_0x2f1aa3 => {
            if (_0x2f1aa3 && typeof createServers === "function") {
              createServers();
            }
          });
        }, 0x493e0);
      }
      async function _0xcd4e64() {
        const _0x201873 = _0x28fdb3();
        if (typeof loadUsers === "function") {
          loadUsers();
        }
        const _0x59655d = await _0x3ebffc();
        _0x4e7f35();
        return _0x201873 || _0x59655d;
      }
      if (_0x26dfe0.e === "not_connect") {
        $(".description-text").html(localStorage.getItem('ccg_2'));
      } else {
        if (_0x26dfe0.e === "not_empty") {
          $(".description-text").html(_0x26dfe0.cc);
          if (_0x26dfe0.cr != '') {
            $("#loa831pibur0w4gv").html('');
          }
          _0x458d85();
        } else if (_0x26dfe0.e === 'empty' || _0x26dfe0.e === "new") {
          _0x2be2f0();
        }
        _0x2e052d.pL = [..._0x26dfe0.propertyList];
      }
      function _0x458d85() {
        $(".description-text").append("\n<div class=\"title-wormate-server\">\n          W O R M A T E F R Ä° E N D S T U R K E Y\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- Ø²Ø± Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø£Ø³ÙÙ„ Ø§Ù„Ø£Ø¹Ù„Ø§Ù… Ù…Ø¨Ø§Ø´Ø±Ø© -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‡Ù†Ø§ Ù‚Ø¨Ù„ Ø­Ø§ÙˆÙŠØ© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xb17e40();
      }
      function _0x2be2f0() {
        $(".description-text").html("\n<div class=\"title-wormate-server\">\n          W O R M A T E F R Ä° E N D S T U R K E Y\n        </div>\n        \n        <div class=\"description-text-hiep\">\n \n    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n    <BR>\n    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n        <a><span class=\"flag br\" value=\"' + gameSettings.s_l + '/images/server-flags/tur.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n        <a><span class=\"flag mx\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n        <a><span class=\"flag us\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/us.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n        <a><span class=\"flag ca\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n        <a><span class=\"flag de\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/de.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n        <a><span class=\"flag fr\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n        <a><span class=\"flag sg\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n        <a><span class=\"flag jp\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n        <a><span class=\"flag au\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/au.png\"></span></a>\n      </li>\n      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n        <a><span class=\"flag gb\" value=\"' + gameSettings.s_l + '/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\n      </li>\n    </ul>\n      \n      <!-- Ø²Ø± Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø£Ø³ÙÙ„ Ø§Ù„Ø£Ø¹Ù„Ø§Ù… Ù…Ø¨Ø§Ø´Ø±Ø© -->\n      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n      </div>\n      \n      <div class=\"gachngang\"></div>\n      <div class=\"server-header\">\n        <div class=\"header-name\">SERVER</div>\n        <div class=\"header-region\">REGION</div>\n        <div class=\"header-status\">STATUS</div>\n        <div class=\"header-score\">SCORE</div>\n      </div>\n      <div class=\"gachngang\"></div>\n    </div>\n    \n    <!-- Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‡Ù†Ø§ Ù‚Ø¨Ù„ Ø­Ø§ÙˆÙŠØ© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª -->\n    <div class=\"background-image-container\">\n      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\n    </div>\n    \n    <div class=\"servers-container\">\n      <div class=\"servers-peru\"></div>\n      <div class=\"servers-mexico\" style=\"display:none\"></div>\n      <div class=\"servers-eeuu\" style=\"display:none\"></div>\n      <div class=\"servers-canada\" style=\"display:none\"></div>\n      <div class=\"servers-germania\" style=\"display:none\"></div>\n      <div class=\"servers-francia\" style=\"display:none\"></div>\n      <div class=\"servers-singapur\" style=\"display:none\"></div>\n      <div class=\"servers-japon\" style=\"display:none\"></div>\n      <div class=\"servers-australia\" style=\"display:none\"></div>\n      <div class=\"servers-granbretana\" style=\"display:none\"></div>\n    </div>\n  </div>\n</div>\n  ");
        _0xb17e40();
      }
      function _0xb17e40() {
        $('body').append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">âŸ· </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("body").append("<div id=\"image-tooltip\" class=\"image-tooltip\"></div>");
        window.currentDisplayMode = "timmap";
        $("#sort-toggle").removeClass('wormworld').text("Timmap Servers");
        function _0x104c94() {
          const _0x1a60e0 = {
            'mx': "servers-mexico",
            'br': 'servers-peru',
            'us': "servers-eeuu",
            'ca': 'servers-canada',
            'de': "servers-germania",
            'fr': "servers-francia",
            'sg': "servers-singapur",
            'jp': "servers-japon",
            'au': "servers-australia",
            'gb': 'servers-granbretana'
          };
          $('<style>').prop("type", "text/css").html("\n          .ui-tabs-nav .ui-tab:hover, \n          .ui-tabs-nav .ui-tab.ui-tab-active {\n            background-color: white !important;\n          }\n          .ui-tabs-nav .ui-tab {\n            border-color: white !important;\n          }\n        ").appendTo("head");
          Object.keys(_0x1a60e0).forEach((_0x1201ef, _0x423c1c) => {
            $('.' + _0x1201ef).on('click', function () {
              $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
              $(this).closest(".ui-tab").addClass("ui-tab-active");
              $("#addflag").attr("class", "flag " + _0x1201ef);
              $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").hide();
              $('.' + _0x1a60e0[_0x1201ef]).fadeIn(0x12c);
            });
          });
        }
        function _0x5382a7() {
          $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
          const _0x3b5ac7 = {
            'peru': 'DE',
            'mexico': 'UAE',
            'eeuu': "USA",
            'canada': 'LT',
            'germania': 'BR',
            'francia': 'FR',
            'singapur': 'SG',
            'japon': 'JP',
            'australia': 'IN',
            'granbretana': 'UK'
          };
          const _0x12142b = {
            'peru': "https://wormx.store/images/cors-proxy.phpimg=flg/de.png",
            'mexico': "https://wormx.store/images/cors-proxy.phpimg=flg/mx.png",
            'eeuu': "https://wormx.store/images/cors-proxy.phpimg=flg/us.png",
            'canada': "https://wormx.store/images/cors-proxy.phpimg=flg/ca.png",
            'germania': "https://wormx.store/images/server-flags/tur.png",
            'francia': "https://wormx.store/images/cors-proxy.phpimg=flg/fr.png",
            'singapur': "https://wormx.store/images/cors-proxy.phpimg=flg/sg.png",
            'japon': "https://wormx.store/images/cors-proxy.phpimg=flg/jp.png",
            'australia': "https://wormx.store/images/cors-proxy.phpimg=flg/au.png",
            'granbretana': "https://wormx.store/images/cors-proxy.phpimg=flg/gb.png"
          };
          const _0x437b09 = {};
          Object.keys(_0x3b5ac7).forEach(_0xe6ce56 => {
            _0x437b09[_0xe6ce56] = [];
          });
          if (window.servers && window.servers.Api_listServer && window.servers.Api_listServer.length > 0x0) {
            let _0x5c88bd = window.currentDisplayMode || 'timmap';
            window.servers.Api_listServer.forEach(_0x547b00 => {
              let _0x3ca72c = null;
              if (_0x5c88bd === "timmap" && _0x547b00.timmap) {
                _0x3ca72c = _0x547b00.timmap;
              } else if (_0x5c88bd === "wormworld" && _0x547b00.wormworld) {
                _0x3ca72c = _0x547b00.wormworld;
              }
              if (_0x3ca72c && _0x437b09[_0x547b00.region]) {
                _0x547b00.displayNumber = _0x3ca72c;
                _0x437b09[_0x547b00.region].push(_0x547b00);
              }
            });
            Object.keys(_0x437b09).forEach(_0xb24bc6 => {
              const _0x527d4c = _0x437b09[_0xb24bc6];
              const _0x5223bb = _0x3b5ac7[_0xb24bc6];
              if (_0x527d4c.length > 0x0) {
                _0x527d4c.sort((_0x13f35e, _0x14aba1) => (_0x13f35e.displayNumber || 0x0) - (_0x14aba1.displayNumber || 0x0));
                for (let _0x97007c = 0x0; _0x97007c < _0x527d4c.length; _0x97007c++) {
                  const _0x57575d = _0x527d4c[_0x97007c];
                  const _0x53972f = _0x57575d.displayNumber;
                  const _0x18611f = _0x57575d.image || "https://wormx.store/images/cors-proxy.phpimg=flg/default-server.png";
                  const _0x5e86fc = _0x57575d.imageUrl || '';
                  const _0x50708e = $('<div></div>').addClass("selectSala").attr({
                    'id': _0xb24bc6,
                    'value': _0x57575d.serverUrl,
                    'data-server-name': _0x57575d.name || "Server " + _0x53972f,
                    'data-region-name': _0x5223bb,
                    'data-region-flag': _0x12142b[_0xb24bc6],
                    'data-server-number': _0x53972f,
                    'data-server-image': _0x18611f
                  });
                  const _0x43b69b = _0x5e86fc && _0x5e86fc.trim() !== '';
                  const _0x574007 = $("<div></div>").addClass("server-image");
                  if (_0x43b69b) {
                    const _0xb3ec44 = _0x57575d.name || "Server " + _0x53972f;
                    _0x574007.addClass("server-image-with-link").data("url", _0x5e86fc).attr("data-server-name", _0xb3ec44);
                    _0x574007.on("click", function (_0x189d55) {
                      _0x189d55.stopPropagation();
                      const _0x1833f4 = $(this).data('url');
                      if (_0x1833f4) {
                        window.open(_0x1833f4, "_blank");
                      }
                    });
                    _0x574007.hover(function () {
                      const _0x4bb0c9 = $(this).data("server-name");
                      $("#server-link-tooltip").remove();
                      $("<div id=\"server-link-tooltip\"></div>").text("Visit " + _0x4bb0c9 + " page").css({
                        'position': 'fixed',
                        'background': "rgba(0,0,0,0.9)",
                        'color': "white",
                        'padding': "5px 10px",
                        'border-radius': "4px",
                        'font-size': '11px',
                        'white-space': 'nowrap',
                        'z-index': "99999",
                        'pointer-events': "none",
                        'box-shadow': "0 0 5px rgba(0,0,0,0.5)"
                      }).appendTo("body");
                      const _0x22761d = $(this).offset();
                      const _0x563a68 = $(this).width();
                      const _0x4b5582 = $(this).height();
                      const _0x29708e = $("#server-link-tooltip").outerWidth();
                      $("#server-link-tooltip").css({
                        'left': _0x22761d.left + _0x563a68 / 0x2 - _0x29708e / 0x2,
                        'top': _0x22761d.top + _0x4b5582 + 0xa
                      }).fadeIn(0xc8);
                    }, function () {
                      $('#server-link-tooltip').fadeOut(0xc8, function () {
                        $(this).remove();
                      });
                    });
                  }
                  _0x574007.append($("<img>").attr("src", _0x18611f));
                  const _0x397a56 = $('<div></div>').addClass("server-info").append($("<span></span>").addClass("server-number").text(_0x53972f + '.'), $("<span></span>").addClass('server-name').text(_0x57575d.name || "Server " + _0x53972f));
                  const _0x183038 = $("<div></div>").addClass("server-region").text(_0x5223bb + " " + _0x53972f);
                  const _0x409d47 = $("<div></div>").addClass("server-status").append($("<span></span>").addClass("green-dot"));
                  const _0x2982ed = $("<div></div>").addClass("server-score");
                  _0x50708e.append(_0x574007, _0x397a56, _0x183038, _0x409d47, _0x2982ed);
                  $(".servers-" + _0xb24bc6).append(_0x50708e);
                  _0x50708e.click(function () {
                    const _0x1fa9d5 = $(this).attr('data-region-name');
                    const _0x42c6f9 = $(this).attr("data-server-number");
                    const _0x42508c = $(this).attr("value");
                    const _0x400258 = $(this).attr("data-region-flag");
                    const _0xa5ec3d = $(this).attr("data-server-image");
                    const _0x144c5a = _0x1fa9d5 + " " + _0x42c6f9;
                    window.realServerName = _0x144c5a;
                    window.selectedServerInfo = {
                      'regionName': _0x1fa9d5,
                      'serverNumber': _0x42c6f9,
                      'regionFlag': _0x400258,
                      'serverImage': _0xa5ec3d,
                      'displayName': _0x144c5a
                    };
                    $("#port_id_s").val(_0x42508c);
                    $('#port_name_s').val(_0x144c5a);
                    $("#port_id").val($("#port_id_s").val());
                    $("#port_name").val($("#port_name_s").val());
                    try {
                      const _0x4a2919 = JSON.parse(localStorage.getItem("SaveGamewft") || '{}');
                      _0x4a2919.realServerName = _0x144c5a;
                      localStorage.setItem("SaveGamewft", JSON.stringify(_0x4a2919));
                    } catch (_0x3523ef) {
                      console.error("Ø®Ø·Ø£ ÙÙŠ Ø­ÙØ¸ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x3523ef);
                    }
                    if (typeof ctx !== "undefined") {
                      if (ctx.containerImgS && ctx.onclickServer) {
                        ctx.containerImgS.texture = ctx.onclickServer;
                      }
                    }
                    if (typeof retundFlagError === 'function') {
                      retundFlagError();
                    }
                    window.server_url = _0x42508c;
                    $("#mm-action-play").click();
                    $('#adbl-continue').click();
                    setTimeout(_0x28689d, 0x1f4);
                    setTimeout(_0x28689d, 0x7d0);
                  });
                }
              } else {
                $('.servers-' + _0xb24bc6).append("\n            <div style=\"text-align:center; padding:20px; color:#aaa;\">\n              No servers available in this region\n            </div>\n          ");
              }
            });
          } else {
            $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").html("\n        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n          Loading servers... Please wait.\n        </div>\n      ");
          }
          _0x4c9ec5();
        }
        function _0x494c67(_0x4d763d) {
          if (_0x4d763d >= 0xf4240) {
            return (_0x4d763d / 0xf4240).toFixed(0x2) + 'M';
          } else {
            return _0x4d763d >= 0x3e8 ? (_0x4d763d / 0x3e8).toFixed(0x1) + 'K' : _0x4d763d.toFixed(0x0);
          }
        }
        function _0x28689d() {
          if (!window.realServerName) {
            return;
          }
          document.querySelectorAll("text, span, div").forEach(_0x4ee316 => {
            const _0xdc9e6b = _0x4ee316.textContent || '';
            if (_0xdc9e6b.includes("wss://") || _0xdc9e6b.includes(".wormate.io") || _0xdc9e6b.includes('/wormy') || _0xdc9e6b.match(/[a-z]+-\d+/i)) {
              _0x4ee316.textContent = window.realServerName;
              if (_0x4ee316.text !== undefined) {
                _0x4ee316.text = window.realServerName;
              }
            }
          });
          if (window.mapText && window.mapText.text !== undefined) {
            window.mapText.text = window.realServerName;
          }
        }
        function _0x5903b7() {
          try {
            const _0x469a63 = window.savedData || window.savedData;
            if (_0x469a63 && typeof _0x469a63.Bq === "function") {
              const _0x315a9a = _0x469a63.Bq;
              _0x469a63.Bq = function (_0x23ef59, _0x37a396) {
                const _0x1b5794 = _0x315a9a.apply(this, arguments);
                setTimeout(function () {
                  try {
                    const _0x1a1dee = window.realServerName || function () {
                      try {
                        const _0x268342 = JSON.parse(localStorage.getItem("SaveGamewft") || '{}');
                        return _0x268342.realServerName || '';
                      } catch (_0x40cc2b) {
                        return '';
                      }
                    }();
                    if (window.mapText && window.mapText.text && _0x1a1dee) {
                      window.mapText.text = _0x1a1dee;
                    }
                  } catch (_0x5ec4b6) {
                    console.error("Ø®Ø·Ø£ ÙÙŠ ØªØ­Ø¯ÙŠØ« Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x5ec4b6);
                  }
                }, 0x64);
                return _0x1b5794;
              };
              console.log("âœ… ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ± Ø¨Ù†Ø¬Ø§Ø­");
            }
          } catch (_0x44d0fd) {
            console.error("âŒ Ø®Ø·Ø£ ÙÙŠ ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:", _0x44d0fd);
          }
        }
        window._0x4c9ec5 = function () {
          fetch("https://wormmedia.xyz:4000/api/live-scores?t=" + Date.now()).then(_0x355e28 => _0x355e28.json()).then(_0x444003 => {
            if (_0x444003 && _0x444003.success && Array.isArray(_0x444003.data)) {
              $(".selectSala").each(function () {
                const _0x5a4abb = $(this);
                const _0x74c37a = _0x5a4abb.attr("value").trim();
                const _0x58a6a7 = _0x444003.data.find(_0x26002a => _0x26002a.serverUrl === _0x74c37a);
                _0x5a4abb.find('.green-dot').css("display", "none");
                if (_0x58a6a7 && _0x58a6a7.players.length > 0x0) {
                  _0x5a4abb.data("players", JSON.stringify(_0x58a6a7.players));
                  const _0x30da87 = _0x58a6a7.players[0x0];
                  const _0x4872d1 = _0x494c67(_0x30da87.score);
                  const _0x3d970c = _0x30da87.score >= 0xf4240;
                  _0x5a4abb.find(".server-score").html("<span class=\"score-display " + (_0x3d970c ? 'million' : "regular") + "\">" + _0x4872d1 + "</span>");
                  const _0x19aa21 = _0x58a6a7.players.filter(_0x341436 => _0x341436.score >= 0xf4240).length;
                  if (_0x19aa21 >= 0x4) {
                    _0x5a4abb.find(".green-dot").css("display", "block");
                  }
                } else {
                  _0x5a4abb.find(".server-score").html('-');
                }
              });
            }
          })["catch"](_0x4ff9ca => console.error("API error:", _0x4ff9ca));
        };
        function _0x4146af() {
          $(document).on("mouseenter", ".server-score", function (_0x43357a) {
            $(".player-tooltip").remove();
            const _0x2e2e2f = $(this).closest('.selectSala');
            const _0x2106cc = _0x2e2e2f.data("players");
            if (!_0x2106cc) {
              return;
            }
            let _0x19643a = [];
            try {
              _0x19643a = typeof _0x2106cc === 'string' ? JSON.parse(_0x2106cc) : _0x2106cc;
            } catch (_0x5e0598) {
              return;
            }
            if (!_0x19643a || !_0x19643a.length) {
              return;
            }
            let _0x6170a = "<table>";
            const _0x9ed200 = Math.min(_0x19643a.length, 0xa);
            for (let _0x22c014 = 0x0; _0x22c014 < _0x9ed200; _0x22c014++) {
              const _0x25c49a = _0x19643a[_0x22c014];
              _0x6170a += "<tr>\n          <td class=\"rank\">" + (_0x22c014 + 0x1) + "-</td>\n          <td class=\"name\">" + (_0x25c49a.name || "Player_" + _0x25c49a.id) + "</td>\n          <td class=\"score\">" + _0x494c67(_0x25c49a.score) + "</td>\n        </tr>";
            }
            _0x6170a += "</table>";
            const _0x277f88 = $("<div class=\"player-tooltip\"></div>").html(_0x6170a).css({
              'top': _0x43357a.pageY + 0xa,
              'left': _0x43357a.pageX + 0xa
            });
            $("body").append(_0x277f88);
            $(this).data("tooltip", _0x277f88);
          });
          $(document).on('mouseleave', ".server-score", function () {
            const _0x1e1fab = $(this).data("tooltip");
            if (_0x1e1fab) {
              setTimeout(function () {
                _0x1e1fab.remove();
              }, 0x64);
            }
          });
          $(document).on("mousemove", ".server-score", function (_0x3f96f1) {
            const _0x226a3a = $(this).data('tooltip');
            if (_0x226a3a) {
              _0x226a3a.css({
                'top': _0x3f96f1.pageY + 0xa,
                'left': _0x3f96f1.pageX + 0xa
              });
            }
          });
        }
        $("#sort-toggle").on({
          'mouseenter': function (_0x230c45) {
            var _0x4a057d = $('#custom-tooltip');
            var _0x26e712 = $(this).offset();
            var _0x3820ff = $(this).outerWidth();
            var _0x33f3ce = _0x4a057d.outerWidth();
            _0x4a057d.css({
              'left': _0x26e712.left + _0x3820ff / 0x2 - _0x33f3ce / 0x2,
              'top': _0x26e712.top + 0x1e
            }).fadeIn(0xc8);
          },
          'mouseleave': function () {
            $("#custom-tooltip").fadeOut(0xc8);
          }
        });
        $('#sort-toggle').click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = 'wormworld';
            $(this).addClass("wormworld").text("WormWorld Servers");
            $(".server-number").css("color", "#00a8ff");
          } else {
            window.currentDisplayMode = 'timmap';
            $(this).removeClass("wormworld").text("Timmap Servers");
            $(".server-number").css("color", "#f00");
          }
          _0x5382a7();
          setTimeout(function () {
            if (window.currentDisplayMode === "wormworld") {
              $(".server-number").css("color", "#00a8ff");
            } else {
              $('.server-number').css("color", "#f00");
            }
          }, 0x64);
        });
        $(".ui-tab").on("click", _0x104c94);
        $(".flag").click(function () {
          let _0x4e7ae0 = $(this).attr("value");
          if (typeof theoKzObjects !== "undefined") {
            theoKzObjects.flag = _0x4e7ae0;
          }
          if (typeof ctx !== "undefined" && ctx.containerImgS) {
            ctx.containerImgS.texture = ctx.onclickServer;
          }
          if (typeof retundFlagError === "function") {
            retundFlagError();
          }
        });
        _0x104c94();
        _0x4146af();
        _0x5903b7();
        _0xcd4e64().then(_0x4ef1b9 => {
          if (_0x4ef1b9) {
            _0x5382a7();
            setTimeout(function () {
              let _0x57e5b6 = 0x0;
              let _0x4746ca = setInterval(function () {
                if (_0x57e5b6 >= 0x6) {
                  clearInterval(_0x4746ca);
                  window.currentDisplayMode = 'timmap';
                  $('#sort-toggle').removeClass("wormworld").text("Timmap Servers");
                  $(".server-number").css("color", "#f00");
                  _0x5382a7();
                  return;
                }
                if (_0x57e5b6 % 0x2 === 0x0) {
                  window.currentDisplayMode = 'wormworld';
                  $('#sort-toggle').addClass("wormworld").text("WormWorld Servers");
                  $(".server-number").css("color", "#00a8ff");
                } else {
                  window.currentDisplayMode = "timmap";
                  $("#sort-toggle").removeClass("wormworld").text("Timmap Servers");
                  $('.server-number').css('color', "#f00");
                }
                if (_0x57e5b6 === 0x0 || _0x57e5b6 === 0x1) {
                  _0x5382a7();
                }
                _0x57e5b6++;
              }, 0x2bc);
            }, 0x5dc);
          }
        });
      }
      _0x246330(_0x146109);
      window.PerformanceMonitor = {
        'lastTime': performance.now(),
        'frameCount': 0x0,
        'fps': 0x0,
        'cpuUsage': 0x0,
        'fpsDisplay': null,
        'cpuDisplay': null,
        'isFpsVisible': false,
        'isCpuVisible': false,
        'cpuSamples': [],
        'cpuSampleSize': 0xa,
        'lastCpuTime': 0x0,
        'isInitialized': false,
        '_cpuMonitoringInterval': null,
        '_animFrameId': null,
        'init'() {
          if (this.isInitialized) {
            return;
          }
          this.isInitialized = true;
          const _0x28055d = localStorage.getItem("showFpsCpu");
          if (_0x28055d !== null) {
            this.isFpsVisible = _0x28055d === "true";
            this.isCpuVisible = _0x28055d === "true";
          }
          this.createDisplayElements();
          if (this.isFpsVisible || this.isCpuVisible) {
            this.startAllMonitoring();
          }
          this.setupKeyboardControls();
          this.updateDisplays();
          this.setupToggleButton();
        },
        'startAllMonitoring'() {
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
        },
        'stopAllMonitoring'() {
          if (this._cpuMonitoringInterval) {
            console.log("Stopping CPU monitoring completely");
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
          }
          if (this._animFrameId) {
            console.log("Stopping FPS monitoring completely");
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
          }
        },
        'setupToggleButton'() {
          const _0x54e38 = document.getElementById("performance-monitor-toggle");
          if (_0x54e38) {
            _0x54e38.checked = this.isFpsVisible || this.isCpuVisible;
            _0x54e38.addEventListener("change", () => {
              const _0x27eac5 = _0x54e38.checked;
              this.toggle(_0x27eac5);
            });
          } else {
            setTimeout(() => {
              const _0x30dc3d = document.getElementById("performance-monitor-toggle");
              if (_0x30dc3d) {
                _0x30dc3d.checked = this.isFpsVisible || this.isCpuVisible;
                _0x30dc3d.addEventListener("change", () => {
                  this.toggle(_0x30dc3d.checked);
                });
              }
            }, 0x3e8);
          }
        },
        'createDisplayElements'() {
          const _0x3727d5 = document.getElementById("performance-monitor-style");
          if (!_0x3727d5) {
            const _0x5dc386 = document.createElement("style");
            _0x5dc386.id = "performance-monitor-style";
            _0x5dc386.textContent = "\n                .performance-monitor-container {\n                    position: fixed;\n                    right: 5px;\n                    bottom: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 9999;\n                    font-family: Arial, sans-serif;\n                    pointer-events: none;\n                    user-select: none;\n                }\n                .monitor-element {\n                    background-color: rgba(0, 0, 0, 0.5);\n                    font-size: 12px;\n                    height: 20px;\n                    line-height: 20px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                    padding: 0 8px;\n                    white-space: nowrap;\n                    box-sizing: border-box;\n                    display: none;\n                }\n            ";
            document.head.appendChild(_0x5dc386);
          }
          let _0xa1deb3 = document.querySelector('.performance-monitor-container');
          if (!_0xa1deb3) {
            _0xa1deb3 = document.createElement("div");
            _0xa1deb3.className = 'performance-monitor-container';
            document.body.appendChild(_0xa1deb3);
          }
          if (!this.fpsDisplay) {
            this.fpsDisplay = document.createElement('div');
            this.fpsDisplay.className = 'monitor-element';
            _0xa1deb3.appendChild(this.fpsDisplay);
          }
          if (!this.cpuDisplay) {
            this.cpuDisplay = document.createElement("div");
            this.cpuDisplay.className = 'monitor-element';
            _0xa1deb3.appendChild(this.cpuDisplay);
          }
        },
        'startCpuMonitoring'() {
          if (!this.isCpuVisible) {
            return;
          }
          if (this._cpuMonitoringInterval) {
            clearInterval(this._cpuMonitoringInterval);
          }
          this.lastCpuTime = performance.now();
          this.cpuSamples = [];
          this._cpuMonitoringInterval = setInterval(() => {
            if (!this.isCpuVisible) {
              clearInterval(this._cpuMonitoringInterval);
              this._cpuMonitoringInterval = null;
              console.log("CPU monitoring stopped because it was disabled");
              return;
            }
            this.measureCpuUsage();
          }, 0x1f4);
        },
        'measureCpuUsage'() {
          const _0x30d647 = performance.now();
          const _0x2e3197 = Math.max(0x0, 0x3c - this.fps) / 0x3c;
          let _0x197197 = 0x0;
          if (window.performance && window.performance.timing) {
            const _0x47c5a1 = window.performance.timing;
            _0x197197 = _0x47c5a1.domComplete - _0x47c5a1.navigationStart;
          }
          const _0x3da699 = Math.min(0x1, window.anApp ? 0.7 : 0.3);
          const _0x6e23ce = Math.min(0x64, Math.round((_0x2e3197 * 0x46 + _0x197197 / 0x3e8 * 0x1e) * _0x3da699));
          this.cpuSamples.push(_0x6e23ce);
          if (this.cpuSamples.length > this.cpuSampleSize) {
            this.cpuSamples.shift();
          }
          this.cpuUsage = Math.round(this.cpuSamples.reduce((_0xd45f3, _0x4b5e0b) => _0xd45f3 + _0x4b5e0b, 0x0) / this.cpuSamples.length);
          this.lastCpuTime = _0x30d647;
          this.updateDisplays();
        },
        'startMonitoring'() {
          if (!this.isFpsVisible) {
            return;
          }
          if (this._animFrameId) {
            cancelAnimationFrame(this._animFrameId);
          }
          const _0xd045ed = () => {
            if (!this.isFpsVisible) {
              cancelAnimationFrame(this._animFrameId);
              this._animFrameId = null;
              return;
            }
            const _0x17573c = performance.now();
            const _0x395b8b = _0x17573c - this.lastTime;
            this.frameCount++;
            if (_0x395b8b >= 0x3e8) {
              this.fps = Math.round(this.frameCount * 0x3e8 / _0x395b8b);
              this.frameCount = 0x0;
              this.lastTime = _0x17573c;
              this.updateDisplays();
            }
            this._animFrameId = requestAnimationFrame(_0xd045ed);
          };
          this._animFrameId = requestAnimationFrame(_0xd045ed);
        },
        'updateDisplays'() {
          if (!this.fpsDisplay || !this.cpuDisplay) {
            return;
          }
          if (this.isFpsVisible) {
            this.fpsDisplay.textContent = "FPS: " + this.fps;
            if (this.fps >= 0x3a) {
              this.fpsDisplay.style.color = "white";
            } else if (this.fps >= 0x1e) {
              this.fpsDisplay.style.color = "gold";
            } else {
              this.fpsDisplay.style.color = "red";
            }
            this.fpsDisplay.style.display = "block";
          } else {
            this.fpsDisplay.style.display = "none";
          }
          if (this.isCpuVisible) {
            this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + '%';
            if (this.cpuUsage <= 0x32) {
              this.cpuDisplay.style.color = "white";
            } else if (this.cpuUsage <= 0x50) {
              this.cpuDisplay.style.color = "gold";
            } else {
              this.cpuDisplay.style.color = "red";
            }
            this.cpuDisplay.style.display = "block";
          } else {
            this.cpuDisplay.style.display = "none";
          }
        },
        'setupKeyboardControls'() {
          if (this._hasSetupKeyboardControls) {
            return;
          }
          this._hasSetupKeyboardControls = true;
          document.addEventListener("keydown", _0x58174e => {
            if (_0x58174e.key === 'F2' || _0x58174e.code === 'F2' || _0x58174e.keyCode === 0x71) {
              _0x58174e.preventDefault();
              this.isCpuVisible = !this.isCpuVisible;
              if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                this.startCpuMonitoring();
              }
              this.saveSettings();
              this.updateDisplays();
              this.updateToggleButton();
              return false;
            } else {
              if (_0x58174e.key === 'F4' || _0x58174e.code === 'F4' || _0x58174e.keyCode === 0x73) {
                _0x58174e.preventDefault();
                this.isFpsVisible = !this.isFpsVisible;
                if (this.isFpsVisible && !this._animFrameId) {
                  this.startMonitoring();
                }
                this.saveSettings();
                this.updateDisplays();
                this.updateToggleButton();
                return false;
              } else {
                if (_0x58174e.altKey && (_0x58174e.key === '2' || _0x58174e.keyCode === 0x32)) {
                  _0x58174e.preventDefault();
                  this.isCpuVisible = !this.isCpuVisible;
                  if (this.isCpuVisible && !this._cpuMonitoringInterval) {
                    this.startCpuMonitoring();
                  }
                  this.saveSettings();
                  this.updateDisplays();
                  this.updateToggleButton();
                  return false;
                } else {
                  if (_0x58174e.altKey && (_0x58174e.key === '4' || _0x58174e.keyCode === 0x34)) {
                    _0x58174e.preventDefault();
                    this.isFpsVisible = !this.isFpsVisible;
                    if (this.isFpsVisible && !this._animFrameId) {
                      this.startMonitoring();
                    }
                    this.saveSettings();
                    this.updateDisplays();
                    this.updateToggleButton();
                    return false;
                  }
                }
              }
            }
          }, true);
        },
        'saveSettings'() {
          const _0x4205fe = this.isFpsVisible || this.isCpuVisible;
          localStorage.setItem("showFpsCpu", _0x4205fe);
        },
        'updateToggleButton'() {
          const _0x320939 = document.getElementById("performance-monitor-toggle");
          if (_0x320939) {
            _0x320939.checked = this.isFpsVisible || this.isCpuVisible;
          }
        },
        'toggle'(_0x517c73) {
          if (typeof _0x517c73 !== "boolean") {
            _0x517c73 = !this.isFpsVisible && !this.isCpuVisible;
          }
          const _0x32f0a1 = this.isFpsVisible;
          const _0xfcaae5 = this.isCpuVisible;
          this.isFpsVisible = _0x517c73;
          this.isCpuVisible = _0x517c73;
          this.saveSettings();
          if (_0x517c73) {
            if (!_0x32f0a1 && this.isFpsVisible) {
              this.startMonitoring();
            }
            if (!_0xfcaae5 && this.isCpuVisible) {
              this.startCpuMonitoring();
            }
          } else {
            this.stopAllMonitoring();
          }
          this.updateDisplays();
        },
        'enable'(_0x36f7ad) {
          if (_0x36f7ad) {
            if (!this.isInitialized) {
              this.init();
            } else {
              this.toggle(true);
            }
          } else {
            this.toggle(false);
          }
        }
      };
      $('.profile-user').append("<div class=\"idwormate\"><input type=\"text\" value=\"" + _0x146109.userId + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/>" + "<button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x146109.userId + "').then(()=> alert('Your ID " + _0x146109.userId + " copied!'));\">Copy</button>" + "<button id=\"btn_activate\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"window.open('https://t.me/wormateactivate/', '_blank');\">Activate</button>" + "<button id=\"resetScript\" style=\"width: 120px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #2196F3; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"resetScript();\">Version ðŸ”</button>" + "</div>");
      var _0x3290d2 = '';
      if (_0x26dfe0.e === "not_empty") {
        _0x3290d2 = "<input type=\"button\" value=\"" + _0x26dfe0.ccg[0x3] + "\" id=\"btnRePlay\">";
        _0x2e052d.s_w = _0x26dfe0.sw == 0x1;
      }
      _0x1148fb(_0x26dfe0.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + _0x26dfe0.ccg[0x4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + _0x26dfe0.ccg[0x5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + _0x3290d2 + "</div>");
      document.getElementById('btnFullScreen').addEventListener("click", function () {
        let _0x2e0f07 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (_0x2e0f07 && true) {
          try {
            _0x2e052d.fullscreen = true;
            _0x2e0f07.call(document.documentElement);
          } catch (_0x18c0b7) {}
        } else {
          _0x2e052d.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (_0x26dfe0.e === "not_empty") {
        document.getElementById('btnRePlay').addEventListener("click", function () {
          $("#port_id_s").val('');
          $("#port_name_s").val('');
          $('#port_id').val($('#port_id_s').val());
          $("#port_name").val($('#port_name_s').val());
          document.getElementById("mm-action-play").click();
        });
      }
      if (!window.wftObjects) {
        window.wftObjects = {
          'eat_animation': 0.0025,
          'smoothCamera': 0.5,
          'PortionSize': 0x2,
          'PortionAura': 1.2,
          'PortionTransparent': 0.8,
          'FoodTransparent': 0.3,
          'FoodSize': 0x2,
          'FoodShadow': 0x2,
          'zoomSpeed': 0.003,
          'soundEnabled': false,
          'soundVolume': 0x32,
          'soundEffect': "https://wormx.store/video/hs_2.mp3"
        };
      }
      try {
        const _0x570c1d = JSON.parse(localStorage.getItem("wftSettings"));
        if (_0x570c1d) {
          for (const _0x1d6d20 in _0x570c1d) {
            if (wftObjects.hasOwnProperty(_0x1d6d20)) {
              wftObjects[_0x1d6d20] = _0x570c1d[_0x1d6d20];
            }
          }
        }
      } catch (_0x39d057) {
        console.error("Error loading wft settings:", _0x39d057);
      }
      function _0x4ff036() {
        try {
          localStorage.setItem('wftSettings', JSON.stringify(wftObjects));
        } catch (_0x3f50df) {
          console.error("Error saving wft settings:", _0x3f50df);
        }
      }
      $("#op_wft").remove();
      $("#modal_wft").remove();
      $("    <button id=\"op_wft\" class=\"op_wft\">" + _0x26dfe0.ccg[0x6] + "</button> \n    <div id=\"modal_wft\" class=\"modal\"> \n      <div class=\"modal-content wft-modal\" style=\"max-width: 360px !important; width: 360px !important;\"> \n        <div class=\"center wft-header\" style=\"background-color: #ff8a18; background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0)); padding: 0 15px; height: 36px; line-height: 36px; border-radius: 8px 8px 0 0; position: relative; text-align: center;\"> \n          <span class=\"close\" style=\"position: absolute; left: 15px; top: 6px; color: white; font-size: 24px; font-weight: bold; cursor: pointer;\">Ã—</span> \n          <h2 class=\"modal-title\" style=\"margin: 0; font-size: 18px; color: white;\">Settings</h2>\n        </div> \n        <div id=\"modal_wft_body\" class=\"modal-body wft-body\" style=\"padding: 15px; background-color: #1e2339; color: #fff; border-radius: 0 0 8px 8px;\">\n          <!-- Ø³ÙŠØªÙ… ØªØ­Ø¯ÙŠØ« Ø§Ù„Ù…Ø­ØªÙˆÙ‰ -->\n        </div> \n      </div>\n    </div>\n  ").insertAfter('#mm-store');
      function _0x42b048() {
        const _0x2936bd = _0x26dfe0.e === 'not_empty' || _0x2b5765;
        if (!_0x2936bd) {
          $("#modal_wft .modal-content").addClass("wft-modal").css({
            'max-width': "360px",
            'width': "360px"
          });
          $(".settings-sidebar, .settings-layout, .settings-content").hide();
          $("#modal_wft_body").html("\n        <div style=\"text-align: center; margin: 10px auto;\">\n          <label for=\"id_customer\" style=\"display: block; margin-bottom: 5px; font-weight: bold; color: #ddd; text-align: center;\">User ID</label> \n          <div style=\"display: flex; margin: 0 auto; justify-content: center;\">\n            <input value=\"" + _0x146109.userId + "\" style=\"max-width: 200px; width: 200px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; margin-right: 10px;\" type=\"text\" id=\"id_customer\" readonly>\n           <button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x146109.userId + "').then(()=> alert('Your ID " + _0x146109.userId + " copied!'));\">Copy</button>\n          </div>\n        </div>\n        \n        <!-- Ø§Ù„Ø®Ø· Ø§Ù„ÙØ§ØµÙ„ Ø§Ù„Ø£ÙˆÙ„ ÙÙ‚Ø· -->\n        <div style=\"border-top: 1px solid #3a4061; margin: 15px 0;\"></div>\n        \n        <!-- Ø·Ø±ÙŠÙ‚Ø© ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© - Ø±Ø§Ø¨Ø· Ø§Ù„Ø§ØªØµØ§Ù„ -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <h3 style=\"color: white; margin: 0 0 8px 0; font-size: 16px;\">Premium Activation - ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ù…Ù…ÙŠØ²</h3>\n          <a href=\"https://wormatefriendsturkey.com/contact\" target=\"_blank\" style=\"display: block; background-color: #4CAF50; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px auto; width: 80%; max-width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s; border: 2px solid #65d269;\">\n            <span style=\"display: block; font-size: 16px;\">ðŸ”— Click Here To Activate</span>\n            <span style=\"display: block; font-size: 14px; margin-top: 4px;\">Ø§Ø¶ØºØ· Ù‡Ù†Ø§ Ù„Ù„ØªÙØ¹ÙŠÙ„</span>\n          </a>\n        </div>\n        \n        <!-- ØµÙˆØ±Ø© Ø§Ù„Ø¨Ø±ÙŠÙ…ÙŠÙ… Ù‚Ø¨Ù„ Ø²Ø± Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ -->\n        <div style=\"text-align: center; margin: 15px auto 10px;\">\n            <img src=\"https://wormx.store/images/cors-proxy.php?img=img/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px; height: auto; border-radius: 4px; display: block; margin: 0 auto;\">\n        </div>\n        \n        <!-- Ø®ÙŠØ§Ø± Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù… Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ ÙƒØ®ÙŠØ§Ø± Ø«Ø§Ù†ÙˆÙŠ -->\n        <div style=\"text-align: center; padding: 10px 0;\">\n          <a href=\"https://discord.gg/NHWXgJpE\" target=\"_blank\" style=\"display: inline-block; background-color: #5865F2; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.3s;\">\n            <svg style=\"width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;\" viewBox=\"0 0 24 24\" fill=\"white\">\n              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\n            </svg>\n            Join Our Discord\n            <span style=\"display: block; font-size: 0.8em; margin-top: 2px;\">Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ù…Ø¬ØªÙ…Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Discord</span>\n          </a>\n          <p style=\"margin-top: 8px; color: #aaa; font-size: 12px;\">\n            Get premium features by joining our Discord server\n            <span style=\"display: block; font-size: 0.9em; margin-top: 2px;\">Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙŠØ²Ø§Øª Ø§Ù„Ù…Ù…ÙŠØ²Ø© Ø¹Ø¨Ø± Discord</span>\n          </p>\n        </div>\n        \n        <div style=\"text-align: center;\">\n          <p style=\"color: #ddd; font-size: 14px; margin: 5px 0;\">\n            <i class=\"fas fa-crown\" style=\"color: #ffbb00;\"></i> Premium\n          </p>\n        </div>\n        ");
        } else {
          $("#modal_wft .modal-content").removeClass("wft-modal");
          $(".settings-sidebar, .settings-layout, .settings-content").show();
          const _0x2268a1 = $(".sidebar-item.active").data('tab');
          if (_0x2268a1) {
            $(".tab-content").hide();
            $('#' + _0x2268a1 + "-tab").show();
          } else {
            $('#game-settings-tab').show();
          }
          $('#mobile-tab-item').hide();
        }
      }
      window.openSettingsModal = function () {
        _0x42b048();
        $('#modal_backdrop').show();
        $("#modal_wft").css({
          'z-index': "9999",
          'display': "block"
        });
        $("body").css("overflow", "hidden");
      };
      window.closeSettingsModal = function () {
        $("#modal_wft").css("display", "none");
        $("#modal_backdrop").hide();
        $("body").css("overflow", '');
      };
      _0x42b048();
      function _0x38867f() {
        const _0x4aeb54 = _0x26dfe0.e === "not_empty" || _0x2b5765;
        if (!_0x4aeb54) {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").hide();
          $("[id^=\"div_\"]").not("#div_customer").hide();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest('.setting-item').hide();
          $("[id^=\"sel_\"]").hide();
          $(".switch, .slider-control, .section-title").hide();
          $("#backgrounds-tab, .background-grid, .background-item").hide();
          $("#cursors-tab, .cursor-container, .cursor-item").hide();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").hide();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").hide();
        } else {
          $(".settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item").show();
          $("[id^=\"div_\"]").show();
          $("#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled").closest(".setting-item").show();
          $("[id^=\"sel_\"]").show();
          $(".switch, .slider-control, .section-title").show();
          $("#backgrounds-tab, .background-grid, .background-item").show();
          $("#cursors-tab, .cursor-container, .cursor-item").show();
          $("#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider").show();
          $("#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider").show();
          $("#mobile-tab-item").hide();
        }
      }
      $(document).ready(function () {
        setTimeout(function () {
          _0x38867f();
        }, 0x64);
        $("#btn_copy").click(function () {
          var _0x2716da = document.getElementById("id_customer");
          _0x2716da.select();
          _0x2716da.setSelectionRange(0x0, 0x1869f);
          navigator.clipboard.writeText(_0x2716da.value);
          $("#myTooltip").html('' + _0x26dfe0.ccg[0xe] + '!');
          $("#myTooltip").css('visibility', "visible");
          $("#myTooltip").css('opacity', '1');
          setTimeout(function () {
            $("#myTooltip").css('visibility', 'hidden');
            $("#myTooltip").css('opacity', '0');
          }, 0x5dc);
        });
        document.getElementById("resetScript").addEventListener("click", async function () {
          localStorage.clear();
          sessionStorage.clear();
          if (window.indexedDB && indexedDB.databases) {
            let _0x3c3c56 = await indexedDB.databases();
            for (let _0x22f1e3 of _0x3c3c56) {
              if (_0x22f1e3.name) {
                await indexedDB.deleteDatabase(_0x22f1e3.name);
              }
            }
          }
          if (window.openDatabase) {
            console.warn("Web SQL otomatik olarak JavaScript ile temizlenemez.");
          }
          document.cookie.split(';').forEach(function (_0x3780eb) {
            document.cookie = _0x3780eb.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date(0x0).toUTCString() + ";path=/");
          });
          if ("caches" in window) {
            let _0x55cfcf = await caches.keys();
            for (let _0x2cb4bf of _0x55cfcf) {
              await caches["delete"](_0x2cb4bf);
            }
          }
          if ("serviceWorker" in navigator) {
            let _0x4aa8bc = await navigator.serviceWorker.getRegistrations();
            for (let _0x592e1a of _0x4aa8bc) {
              await _0x592e1a.unregister();
            }
          }
          localStorage.removeItem("scriptSeleccionado");
          location.reload();
        });
        $("#btn_copy").hover(function () {
          $("#myTooltip").css('visibility', "visible");
          $("#myTooltip").css("opacity", '1');
        }, function () {
          if ($("#myTooltip").text() !== _0x26dfe0.ccg[0xe] + '!') {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", '0');
          }
        });
        if (window.modalFixed) {
          return;
        }
        window.modalFixed = true;
        $("#op_wft").off("click").on("click", function (_0x5e97a6) {
          _0x5e97a6.preventDefault();
          window.openSettingsModal();
          return false;
        });
        var _0x3005d1 = $('#modal_wft');
        $('body').append(_0x3005d1.detach());
        var _0x128d68 = $("<div id='modal_backdrop'></div>").css({
          'position': 'fixed',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': "100%",
          'background-color': "rgba(0, 0, 0, 0.7)",
          'z-index': '9998',
          'display': 'none'
        });
        _0x3005d1.before(_0x128d68);
        function _0x14e4f0() {
          if ($("#op_wft").length && !$('#op_wft').data("hasClickHandler")) {
            $("#op_wft").off("click").on("click", function (_0x4c135f) {
              _0x4c135f.preventDefault();
              window.openSettingsModal();
              return false;
            }).data('hasClickHandler', true);
          }
        }
        _0x14e4f0();
        setInterval(_0x14e4f0, 0x1388);
        $('.close').off("click").on("click", function () {
          window.closeSettingsModal();
        });
        _0x128d68.on('click', function () {
          window.closeSettingsModal();
        });
      });
      var _0x329022 = document.getElementById('div_save');
      var _0xa40603 = document.getElementById('div_sound');
      var _0x57ee92 = document.getElementById('div_w1');
      var _0x21433b = document.getElementById("div_sm");
      var _0x29f47c = document.getElementById('sel_sc');
      var _0xdbfcf1 = document.getElementById("div_top");
      var _0x2b2ec0 = document.getElementById("sel_top");
      var _0x509c70 = document.getElementById("div_killmsg");
      var _0x245923 = document.getElementById('div_background');
      var _0x217352 = [{
        'name': 'Vietnam',
        'val': 'vn'
      }, {
        'name': "Thailand",
        'val': 'th'
      }, {
        'name': "Cambodia",
        'val': 'kh'
      }, {
        'name': 'Indonesia',
        'val': 'id'
      }, {
        'name': "Singapore",
        'val': 'sg'
      }, {
        'name': 'Japan',
        'val': 'jp'
      }, {
        'name': "Mexico",
        'val': 'mx'
      }, {
        'name': "Brazil",
        'val': 'br'
      }, {
        'name': "Canada",
        'val': 'ca'
      }, {
        'name': 'Germany',
        'val': 'de'
      }, {
        'name': 'France',
        'val': 'fr'
      }, {
        'name': 'England',
        'val': 'gb'
      }, {
        'name': 'Australia',
        'val': 'au'
      }, {
        'name': "USA",
        'val': 'us'
      }, {
        'name': 'Portugal',
        'val': 'pt'
      }, {
        'name': "Turkey",
        'val': 'tr'
      }, {
        'name': _0x26dfe0.ccg[0x24],
        'val': 'iq'
      }];
      let _0x264520 = document.getElementById("sel_country");
      if (_0x264520) {
        for (_0x246330 = 0x0; _0x246330 < _0x217352.length; _0x246330++) {
          let _0x558c8a = document.createElement('option');
          _0x558c8a.value = _0x217352[_0x246330].val;
          _0x558c8a.innerHTML = _0x217352[_0x246330].name;
          _0x264520.appendChild(_0x558c8a);
        }
        if (_0x31462e) {
          _0x264520.value = _0x31462e;
        }
        _0x264520.onchange = function () {
          let _0x3661af = _0x264520.value;
          _0x31462e = _0x3661af;
          localStorage.setItem('oco', _0x3661af);
          var _0x4678c3 = {
            'id_wormate': _0x146109.userId,
            'country': _0x3661af
          };
          fetch("https://wormx.store/2025/check/index.php", {
            'headers': {
              'Content-Type': 'application/json'
            },
            'method': 'POST',
            'body': JSON.stringify(_0x4678c3)
          });
          localStorage.removeItem('wftsw');
          window.location.reload();
        };
      }
      var _0x2b5765 = false;
      if (_0x26dfe0.cm === '' || _0x26dfe0.cm === undefined) {
        ;
      } else {
        var _0x5d4561 = document.getElementById("btn_in_t");
        var _0x8e8c1f = document.getElementById("mm-action-play");
        var _0x37addd = document.getElementById("port_id");
        if (_0x5d4561) {
          _0x5d4561.style.display = "block";
          _0x5d4561.onclick = function () {
            _0x37addd.value = _0x26dfe0.cm;
            _0x8e8c1f.click();
          };
          _0x2b5765 = true;
        }
      }
      if (_0x26dfe0.e === 'not_connect') {
        ;
      } else {
        _0x2e052d.h = _0x26dfe0.z == 'b';
        _0x2e052d.hz = _0x26dfe0.z == 'c';
        if (_0x26dfe0.e === "not_empty" || _0x2b5765) {
          var _0x22533d = ooo.Xg.Kf.Wg.Ah;
          if (_0x329022) {
            _0x329022.style.display = "block";
          }
          if (_0xa40603) {
            _0xa40603.style.display = "inline-block";
          }
          $("#zigzagup").prop("checked", _0x2e052d.flx);
          $("#zigzagup").change(function () {
            _0x2e052d.flx = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#wftspeed").prop("checked", true);
          $("#wftspeed").change(function () {
            _0x2e052d.vp = $(this).prop("checked");
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#saveGame").prop("checked", _0x2e052d.cs);
          $("#saveGame").change(function () {
            _0x2e052d.cs = $(this).prop('checked');
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          if (_0x57ee92) {
            _0x57ee92.style.display = 'inline-block';
          }
          if (_0x29f47c) {
            _0x29f47c.value = 0x0;
            _0x29f47c.onchange = function () {
              _0x2e052d.sc = parseInt(_0x29f47c.value);
              localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
            };
          }
          if (_0x21433b) {
            _0x21433b.style.display = "inline-block";
          }
          if (sel_sm) {
            sel_sm.value = 0x14;
            sel_sm.onchange = function () {
              _0x2e052d.sm = parseInt(sel_sm.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
            };
          }
          if (_0xdbfcf1) {
            _0xdbfcf1.style.display = "inline-block";
          }
          if (_0x2b2ec0) {
            _0x2b2ec0.value = 0xa;
            _0x2b2ec0.onchange = function () {
              _0x2e052d.to = parseInt(_0x2b2ec0.value);
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
            };
          }
          if (_0x264520 && _0x264520.value == 'iq' && _0x509c70) {
            _0x509c70.style.display = "inline-block";
            var _0x3dfe00 = $('#wftiq');
            _0x3dfe00.prop("checked", false);
            _0x3dfe00.change(function () {
              if (this.checked) {
                _0x2e052d.iq = true;
              } else {
                _0x2e052d.iq = false;
              }
              localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
            });
          } else {
            _0x2e052d.iq = false;
            if (_0x509c70) {
              _0x509c70.style.display = "none";
            }
          }
          const _0x570be2 = localStorage.getItem('showFpsCpu') === "true";
          $("#performance-monitor-toggle").prop('checked', _0x570be2);
          $("#performance-monitor-toggle").change(function () {
            const _0xecadeb = $(this).prop("checked");
            localStorage.setItem("showFpsCpu", _0xecadeb);
            if (window.PerformanceMonitor) {
              window.PerformanceMonitor.toggle(_0xecadeb);
            }
          });
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.init();
          }
          const _0x2b8ccd = localStorage.getItem("wftPulseEnabled") === "true" || localStorage.getItem('wftPulseEnabled') === null;
          $("#pulse_effects_enabled").prop("checked", _0x2b8ccd);
          window.pulseEnabled = _0x2b8ccd;
          $("#pulse_effects_enabled").change(function () {
            window.pulseEnabled = $(this).prop("checked");
            localStorage.setItem('wftPulseEnabled', window.pulseEnabled.toString());
          });
          _0x2e052d.c_1 = _0x26dfe0.streamer;
          if (_0x245923) {
            _0x245923.style.display = "block";
          }
          _0x19cd8a(_0x2e052d, oeo);
          _0x5a0b1f.on = true;
          if (_0x16f9d2()) {
            _0x2e052d.tt = _0x26dfe0.tt == 0x1;
            _0x22533d.img_1.visible = false && true;
            _0x22533d.img_2.visible = false && false;
            _0x22533d.img_3.visible = false && false;
            _0x22533d.img_4.visible = false && (false || false || false);
          } else {
            _0x2e052d.tt = false;
          }
          var _0x18596f = [{
            'nome': "Default",
            'uri': "https://wormx.store/get_store.phpitem=bkgnd0.png"
          }, {
            'nome': "Stardust",
            'uri': "https://wormx.store/get_store.phpitem=bg_sky__6.png"
          }, {
            'nome': "Nightdots",
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_7.png"
          }, {
            'nome': "Galaxy Star",
            'uri': "https://wormx.store/get_store.phpitem=Galaxy-Star.png"
          }, {
            'nome': "Hexvoid",
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_10.png"
          }, {
            'nome': 'Crystalblue',
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_9.png"
          }, {
            'nome': "Nebula",
            'uri': "https://wormx.store/get_store.phpitem=bg_sky__2.png"
          }, {
            'nome': 'Bluemist',
            'uri': "https://wormx.store/get_store.phpitem=bg_sky__1.png"
          }, {
            'nome': 'Prism',
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_8.png"
          }, {
            'nome': 'Cloudscape',
            'uri': "https://wormx.store/get_store.phpitem=bg_sky__5.png"
          }, {
            'nome': 'Desert',
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_11.png"
          }, {
            'nome': "Crystalblue 2",
            'uri': "https://wormx.store/get_store.phpitem=bg_sky_12.png"
          }];
          _0x2e052d.c_2 = _0x26dfe0.programmer;
          let _0x50465f = $(".background-grid");
          if (_0x50465f.length > 0x0) {
            _0x50465f.empty();
            _0x18596f.forEach(function (_0x2fbf43) {
              const _0x4f9de3 = _0x2e052d.background === _0x2fbf43.uri;
              const _0x1d07e8 = $("\n          <div class=\"background-item " + (_0x4f9de3 ? 'active' : '') + "\" data-bg=\"" + _0x2fbf43.uri + "\" data-bg-name=\"" + _0x2fbf43.nome + "\" style=\"cursor: pointer; border: 2px solid " + (_0x4f9de3 ? '#ffcc00' : "#333333") + "; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\n            <img src=\"" + _0x2fbf43.uri + "\" alt=\"" + _0x2fbf43.nome + "\" style=\"width: 100%; height: 65px; object-fit: cover;\">\n            <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">" + _0x2fbf43.nome + "</div>\n          </div>\n        ");
              _0x1d07e8.click(function () {
                $('.background-item').removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0x2cfd54 = $(this).data('bg');
                _0x2e052d.background = _0x2cfd54;
                localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
                if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                  ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x2cfd54));
                }
                $("#backgroundArena").val(_0x2cfd54);
              });
              _0x50465f.append(_0x1d07e8);
            });
          }
          let _0x4f31df = document.getElementById("backgroundArena");
          if (_0x4f31df) {
            for (_0x246330 = 0x0; _0x246330 < _0x18596f.length; _0x246330++) {
              let _0x137334 = document.createElement("option");
              _0x137334.value = _0x18596f[_0x246330].uri;
              _0x137334.setAttribute("data-imageSrc", _0x18596f[_0x246330].uri);
              _0x137334.setAttribute("data-descriptione", _0x18596f[_0x246330].nome);
              _0x137334.innerHTML = _0x18596f[_0x246330].nome;
              _0x4f31df.appendChild(_0x137334);
            }
            _0x2e052d.c_3 = _0x26dfe0.extension;
            _0x4f31df.value = _0x2e052d.background || _0x18596f[0x0].uri;
            if ($.fn.wftsle) {
              $("#backgroundArena").wftsle({
                'onSelected': function () {
                  _0x2e052d.background = $('#backgroundArena-value').val();
                  localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
                  if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
                    ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x2e052d.background));
                  }
                  const _0x1e0d1d = _0x2e052d.background;
                  $(".background-item").removeClass("active").css("border-color", "#333333");
                  $(".background-item[data-bg=\"" + _0x1e0d1d + "\"]").addClass('active').css("border-color", "#ffcc00");
                }
              });
            }
          }
          const _0x574593 = [{
            'name': "Turquoise Mouse Pointer",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/1.png"
          }, {
            'name': "White Mouse Pointer",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/2.png"
          }, {
            'name': "Pink Octopus Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/3.png"
          }, {
            'name': "Beetle Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/4.png"
          }, {
            'name': "TikTok Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/5.png"
          }, {
            'name': "Watermelon Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/6.png"
          }, {
            'name': "Red Lipstick Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/7.png"
          }, {
            'name': "Flame Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/8.png"
          }, {
            'name': "Cherries Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/9.png"
          }, {
            'name': "Pink Hearts Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/10.png"
          }, {
            'name': "Spray Can Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/11.png"
          }, {
            'name': "Beach Umbrella Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/12.png"
          }, {
            'name': "Three-colored Glove Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/13.png"
          }, {
            'name': "Pink Dolphin Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/14.png"
          }, {
            'name': "Mushroom Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/15.png"
          }, {
            'name': "Octopus Glove Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/16.png"
          }, {
            'name': "Yellow Cheese Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/17.png"
          }, {
            'name': "Roasting Marshmallow Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/18.png"
          }, {
            'name': "White Glove Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/19.png"
          }, {
            'name': "Red Pepper Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/20.png"
          }, {
            'name': "Magic Wand with Golden Star Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/21.png"
          }, {
            'name': "Strawberry and Chocolate Ice Cream Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/22.png"
          }, {
            'name': "Dagger Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/23.png"
          }, {
            'name': "Pizza Slice Cursor ",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/24.png"
          }, {
            'name': "Strawberry Candy Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/25.png"
          }, {
            'name': "Rose Branch Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/26.png"
          }, {
            'name': "Electrical Plug Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/27.png"
          }, {
            'name': "Heart on Stick Cursor",
            'url': "https://wormx.store/images/cors-proxy.phpimg=cursors/28.png"
          }];
          const _0x55f3f6 = localStorage.getItem("selectedCursor");
          if (_0x55f3f6) {
            _0x172c6e(_0x55f3f6);
            const _0x180ee1 = _0x574593.find(_0x172305 => _0x172305.url === _0x55f3f6);
            if (_0x180ee1) {
              $("#current-cursor-name").text("Current: " + _0x180ee1.name);
            }
          }
          const _0x30d57a = $(".cursor-container");
          if (_0x30d57a.length > 0x0) {
            _0x30d57a.empty();
            _0x574593.forEach(function (_0x256a37) {
              const _0x5e10a7 = _0x55f3f6 === _0x256a37.url;
              const _0x5dc5f6 = $("\n              <div class=\"cursor-item " + (_0x5e10a7 ? "active" : '') + "\" data-cursor=\"" + _0x256a37.url + "\" title=\"" + _0x256a37.name + "\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid " + (_0x5e10a7 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\n                  <img src=\"" + _0x256a37.url + "\" alt=\"" + _0x256a37.name + "\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\n              </div>\n          ");
              _0x5dc5f6.click(function () {
                $(".cursor-item").removeClass("active").css("border-color", "#333333");
                $(this).addClass("active").css("border-color", "#ffcc00");
                const _0x2426f2 = $(this).data('cursor');
                localStorage.setItem("selectedCursor", _0x2426f2);
                _0x172c6e(_0x2426f2);
                $('#current-cursor-name').text("Current: " + _0x256a37.name);
              });
              _0x30d57a.append(_0x5dc5f6);
            });
          }
          $("#default-cursor-btn").click(function () {
            localStorage.removeItem("selectedCursor");
            $("#game-cont, #game-canvas, body").css('cursor', "default");
            $("#current-cursor-name").text("Current: Default");
            $(".cursor-item").removeClass('active').css("border-color", '#333333');
          });
          function _0x172c6e(_0x5d60b0) {
            $("#game-cont, #game-canvas, body").css({
              'cursor': 'url(' + _0x5d60b0 + "), default"
            });
          }
          _0x2e052d.c_4 = _0x26dfe0.game;
          if (typeof _0x4232ce !== 'undefined' && typeof _0x5ced67 !== "undefined" && typeof _0x3282ce !== "undefined") {
            if (typeof _0x403bc8 === "function") {
              _0x4232ce.on("mousedown", _0x403bc8);
            }
            if (typeof _0x37fb3f === "function") {
              _0x5ced67.on("mousedown", _0x37fb3f);
            }
            if (typeof _0x284b54 === "function") {
              _0x3282ce.on("mousedown", _0x284b54);
            }
          }
          _0x2e052d.c_5 = _0x26dfe0.note;
        } else {
          $("#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw").hide();
        }
        if (_0x26dfe0.ccc && _0x26dfe0.ccc != 'iq' && _0x26dfe0.ccc != _0x31462e) {
          localStorage.setItem('oco', _0x26dfe0.ccc);
          localStorage.removeItem("wftsw");
          window.location.reload();
        }
        if (!_0x31462e) {
          localStorage.setItem("oco", 'iq');
        }
      }
      localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
      $(document).ready(function () {
        if ($(".settings-sidebar").length > 0x0) {
          $(".sidebar-item").click(function () {
            $('.sidebar-item').removeClass("active");
            $(this).addClass("active");
            $(".tab-content").hide();
            const _0x3a18f5 = $(this).data("tab") + "-tab";
            $('#' + _0x3a18f5).show();
          });
          $('#game-settings-tab').show();
          $(".tab-content").not("#game-settings-tab").hide();
          $("#mobile-tab-item").hide();
          function _0x2f3b9e() {
            if ($("#wftiq").prop('checked')) {
              $("#custom-messages-container").addClass("messages-disabled");
            } else {
              $("#custom-messages-container").removeClass("messages-disabled");
            }
          }
          _0x2f3b9e();
          $("#joystick_size").on("input", function () {
            var _0x140c87 = $(this).val();
            $("#joystick_size_value").text(_0x140c87);
            _0x3f7fbd(this);
          });
          $("#joystick_pxy").on("input", function () {
            var _0x3551da = $(this).val();
            $("#joystick_pxy_value").text(_0x3551da);
            _0x72bd5(this);
          });
          $("#wftiq").change(function () {
            _0x2f3b9e();
            _0x2e052d.iq = $(this).prop("checked");
            localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
          });
          $("#kill_msg").change(function () {
            _0x2e052d.killMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#headshot_msg").change(function () {
            _0x2e052d.headshotMsg = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#kill_show_name").change(function () {
            _0x2e052d.showKillName = $(this).prop("checked");
            localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
          });
          $("#headshot_show_name").change(function () {
            _0x2e052d.showHeadshotName = $(this).prop('checked');
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#kill_name_position").change(function () {
            _0x2e052d.killNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $("#headshot_name_position").change(function () {
            _0x2e052d.headshotNamePos = $(this).val();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $('#kill_custom_text').on('input', function () {
            if ($(this).val() !== '') {
              _0x2e052d.killMsgType = "custom";
              _0x2e052d.killCustomText = $(this).val();
            } else {
              _0x2e052d.killMsgType = 'preset';
            }
            localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
          });
          $("#headshot_custom_text").on("input", function () {
            if ($(this).val() !== '') {
              _0x2e052d.headshotMsgType = "custom";
              _0x2e052d.headshotCustomText = $(this).val();
            } else {
              _0x2e052d.headshotMsgType = "preset";
            }
            localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
          });
          if (_0x2e052d.killMsg) {
            $('#kill_msg').val(_0x2e052d.killMsg);
          }
          if (_0x2e052d.headshotMsg) {
            $("#headshot_msg").val(_0x2e052d.headshotMsg);
          }
          if (_0x2e052d.killMsgType === "custom" && _0x2e052d.killCustomText) {
            $('#kill_custom_text').val(_0x2e052d.killCustomText || '');
          }
          if (_0x2e052d.headshotMsgType === 'custom' && _0x2e052d.headshotCustomText) {
            $('#headshot_custom_text').val(_0x2e052d.headshotCustomText || '');
          }
          $('#kill_show_name').prop("checked", _0x2e052d.showKillName !== false);
          $("#headshot_show_name").prop("checked", _0x2e052d.showHeadshotName !== false);
          $('#kill_name_position').val(_0x2e052d.killNamePos || "after");
          $('#headshot_name_position').val(_0x2e052d.headshotNamePos || "after");
          $("#wftsound").prop('checked', wftObjects.soundEnabled || false);
          $('#sound_effect_selector').val(wftObjects.soundEffect || "https://wormx.store/video/hs_2.mp3");
          $("#volume_slider").val(wftObjects.soundVolume || 0x32);
          $("#volume_value").text(wftObjects.soundVolume || 0x32);
          let _0x273319 = null;
          function _0x1b65dd(_0x2d39c2, _0x4ab3a3) {
            if (_0x273319) {
              _0x273319.pause();
              _0x273319.currentTime = 0x0;
            }
            _0x2d39c2.volume = _0x4ab3a3 / 0x64;
            _0x2d39c2.currentTime = 0x0;
            _0x2d39c2.play();
            _0x273319 = _0x2d39c2;
          }
          $("#wftsound").prop("checked", true);
          $("#wftsound").change(function () {
            wftObjects.soundEnabled = $(this).prop("checked");
            _0x2e052d.vh = $(this).prop("checked");
            _0x4ff036();
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
            if (wftObjects.soundEnabled) {
              const _0x4012f8 = document.getElementById("s_h");
              if (_0x4012f8) {
                _0x1b65dd(_0x4012f8, wftObjects.soundVolume);
              }
            }
          });
          $("#sound_effect_selector").change(function () {
            wftObjects.soundEffect = $(this).val();
            _0x4ff036();
            const _0x37b7c4 = document.getElementById("s_h");
            if (_0x37b7c4) {
              const _0x1229c6 = _0x37b7c4.querySelector("source");
              if (_0x1229c6) {
                _0x1229c6.src = wftObjects.soundEffect;
                _0x37b7c4.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x1b65dd(_0x37b7c4, wftObjects.soundVolume);
                  }, 0x64);
                }
              }
            }
          });
          $("#monster_kill_selector").change(function () {
            const _0x59d03e = $(this).val();
            const _0x2d1dc2 = document.getElementById('monster_kill_sound');
            if (_0x2d1dc2) {
              const _0x174f21 = _0x2d1dc2.querySelector('source');
              if (_0x174f21) {
                _0x174f21.src = _0x59d03e;
                _0x2d1dc2.load();
                if (wftObjects.soundEnabled) {
                  setTimeout(() => {
                    _0x1b65dd(_0x2d1dc2, wftObjects.soundVolume);
                  }, 0x64);
                }
              }
            }
            if (!wftObjects.monsterKillSound) {
              wftObjects.monsterKillSound = {};
            }
            wftObjects.monsterKillSound = _0x59d03e;
            _0x4ff036();
          });
          $('#volume_slider').on("input", function () {
            wftObjects.soundVolume = parseInt($(this).val());
            $('#volume_value').text(wftObjects.soundVolume);
            const _0x2cd6ad = document.querySelectorAll("audio");
            _0x2cd6ad.forEach(_0x5d5ef0 => {
              _0x5d5ef0.volume = wftObjects.soundVolume / 0x64;
            });
            if (wftObjects.soundEnabled) {
              const _0x5ece1c = document.getElementById("s_h");
              if (_0x5ece1c) {
                _0x1b65dd(_0x5ece1c, wftObjects.soundVolume);
              }
            }
            _0x4ff036();
          });
          if (!window.laserOptions) {
            window.laserOptions = {
              'enabled': _0x2e052d.ls || false,
              'color': 0xffd700,
              'opacity': 0.5,
              'thickness': 0.1
            };
          }
          try {
            const _0x3d4d9d = JSON.parse(localStorage.getItem("laserOptions"));
            if (_0x3d4d9d) {
              window.laserOptions = _0x3d4d9d;
            }
          } catch (_0x3ee24e) {
            console.error("Error loading laser options:", _0x3ee24e);
          }
          $('#Laserup').prop('checked', window.laserOptions.enabled);
          const _0x18c513 = '#' + window.laserOptions.color.toString(0x10).padStart(0x6, '0');
          $('#laser_color_picker').val(_0x18c513);
          $("#laser_opacity_slider").val(window.laserOptions.opacity * 0x64);
          $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 0x64));
          $("#Laserup").change(function () {
            window.laserOptions.enabled = $(this).prop("checked");
            _0x2e052d.ls = $(this).prop('checked');
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
            localStorage.setItem("SaveGamewft", JSON.stringify(_0x2e052d));
          });
          $('#laser_color_picker').change(function () {
            const _0x48b45a = $(this).val();
            window.laserOptions.color = parseInt(_0x48b45a.replace('#', '0x'));
            localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
          });
          $("#laser_opacity_slider").on('input', function () {
            const _0x2077b7 = parseInt($(this).val());
            window.laserOptions.opacity = _0x2077b7 / 0x64;
            $('#laser_opacity_value').text(_0x2077b7);
            localStorage.setItem('laserOptions', JSON.stringify(window.laserOptions));
          });
          $("#reset_laser_settings").click(function () {
            window.laserOptions = {
              'enabled': _0x2e052d.ls,
              'color': 0xffd700,
              'opacity': 0.5,
              'thickness': 0.1
            };
            localStorage.setItem('laserOptions', JSON.stringify(window.laserOptions));
            $("#laser_color_picker").val("#FFD700");
            $("#laser_opacity_slider").val(0x32);
            $('#laser_opacity_value').text(0x32);
          });
          $(document).keydown(function (_0x5d812b) {
            if (_0x5d812b.which === 0x4c) {
              $("#Laserup").prop("checked", !$('#Laserup').prop("checked")).trigger('change');
            }
            if (_0x5d812b.which === 0x4f) {
              let _0x6e3779 = parseInt($("#laser_opacity_slider").val());
              if (_0x6e3779 < 0x64) {
                $('#laser_opacity_slider').val(_0x6e3779 + 0xa).trigger("input");
              }
            }
            if (_0x5d812b.which === 0x50) {
              let _0x5765c0 = parseInt($("#laser_opacity_slider").val());
              if (_0x5765c0 > 0xa) {
                $('#laser_opacity_slider').val(_0x5765c0 - 0xa).trigger('input');
              }
            }
          });
          $("#eating_speed_toggle").prop("checked", wftObjects.eat_animation >= 0x1);
          $("#spin_fast_slider").val(wftObjects.smoothCamera);
          $("#spin_fast_value").text(wftObjects.smoothCamera);
          $('#zoom_speed_slider').val(wftObjects.zoomSpeed);
          $("#zoom_speed_value").text(wftObjects.zoomSpeed);
          $("#portion_size_slider").val(wftObjects.PortionSize);
          $("#portion_size_value").text(wftObjects.PortionSize);
          $("#portion_aura_slider").val(wftObjects.PortionAura);
          $("#portion_aura_value").text(wftObjects.PortionAura);
          $("#food_size_slider").val(wftObjects.FoodSize);
          $("#food_size_value").text(wftObjects.FoodSize);
          $("#food_shadow_slider").val(wftObjects.FoodShadow);
          $("#food_shadow_value").text(wftObjects.FoodShadow);
          $("#eating_speed_toggle").change(function () {
            wftObjects.eat_animation = $(this).prop("checked") ? 0x1 : 0.0025;
            _0x4ff036();
          });
          $("#spin_fast_slider").on("input", function () {
            const _0x28f1a4 = parseFloat($(this).val());
            wftObjects.smoothCamera = _0x28f1a4;
            $("#spin_fast_value").text(_0x28f1a4);
            _0x4ff036();
          });
          $("#zoom_speed_slider").on('input', function () {
            const _0x3c9f47 = parseFloat($(this).val());
            wftObjects.zoomSpeed = _0x3c9f47;
            $("#zoom_speed_value").text(_0x3c9f47);
            _0x4ff036();
          });
          $('#portion_size_slider').on('input', function () {
            const _0xfcfa84 = parseFloat($(this).val());
            wftObjects.PortionSize = _0xfcfa84;
            $("#portion_size_value").text(_0xfcfa84);
            _0x4ff036();
          });
          $("#portion_aura_slider").on("input", function () {
            const _0x1cfd5a = parseFloat($(this).val());
            wftObjects.PortionAura = _0x1cfd5a;
            $('#portion_aura_value').text(_0x1cfd5a);
            _0x4ff036();
          });
          $("#food_size_slider").on("input", function () {
            const _0x3d92a3 = parseFloat($(this).val());
            wftObjects.FoodSize = _0x3d92a3;
            $("#food_size_value").text(_0x3d92a3);
            _0x4ff036();
          });
          $("#food_shadow_slider").on("input", function () {
            const _0x23d927 = parseFloat($(this).val());
            wftObjects.FoodShadow = _0x23d927;
            $("#food_shadow_value").text(_0x23d927);
            _0x4ff036();
          });
          $(".reset-btn").click(function () {
            const _0x6f7e21 = $(this).data("reset");
            const _0x4f67f5 = $(this).data("default");
            if (_0x6f7e21 && _0x4f67f5 !== undefined) {
              switch (_0x6f7e21) {
                case "spin_fast":
                  $("#spin_fast_slider").val(_0x4f67f5).trigger('input');
                  break;
                case "portion_size":
                  $("#portion_size_slider").val(_0x4f67f5).trigger("input");
                  break;
                case "portion_aura":
                  $("#portion_aura_slider").val(_0x4f67f5).trigger("input");
                  break;
                case "food_size":
                  $("#food_size_slider").val(_0x4f67f5).trigger("input");
                  break;
                case 'food_shadow':
                  $('#food_shadow_slider').val(_0x4f67f5).trigger("input");
                  break;
                case "zoom_speed":
                  $("#zoom_speed_slider").val(_0x4f67f5).trigger("input");
                  break;
              }
            }
          });
          function _0xfbc282() {
            const _0x1cc5b4 = setInterval(() => {
              if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
                clearInterval(_0x1cc5b4);
                window.utils.prototype.Qj = function (_0x484adb, _0x22a464, _0x4e0951) {
                  this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x22a464, window.wftObjects.eat_animation);
                  this.Ij = window.decoder.ga(this.Ij, this.Gj, _0x22a464, 0.0025);
                  this.Nj.Bg(this, _0x484adb, _0x22a464, _0x4e0951);
                };
                window.config.prototype.Bg = function (_0x246937, _0x115545, _0x47c22a, _0x7b1f18) {
                  if (!_0x7b1f18(_0x246937.Hj, _0x246937.Ij)) {
                    this.Wh.Cd();
                    return;
                  }
                  var _0x57a503 = _0x246937.Kj * (0x1 + window.decoder.pa(_0x246937.Mj + _0x115545 / 0xc8) * 0.3);
                  if (_0x246937.Ej) {
                    this.Wh.Ad(_0x246937.Hj, _0x246937.Ij, window.wftObjects.PortionSize * _0x246937.Jj, _0x246937.Lj * 0x1, window.wftObjects.PortionAura * _0x57a503, window.wftObjects.PortionTransparent * _0x246937.Lj);
                  } else {
                    this.Wh.Ad(_0x246937.Hj, _0x246937.Ij, window.wftObjects.FoodSize * _0x246937.Jj, _0x246937.Lj * 0x1, window.wftObjects.FoodShadow * _0x57a503, window.wftObjects.FoodTransparent * _0x246937.Lj);
                  }
                };
                const _0x4de0bf = window.savedGame.prototype.ug;
                window.savedGame.prototype.ug = function (_0x36394c, _0x444933) {
                  const _0x11963f = _0x4de0bf.apply(this, arguments);
                  if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
                    const _0x4b5e49 = window.ooo.Mh.Oh();
                    if (_0x4b5e49 && typeof _0x4b5e49._a !== "undefined") {
                      this.Fh.x = window.decoder.ja(this.Fh.x, _0x4b5e49._a, _0x444933, window.wftObjects.smoothCamera, 33.333);
                    }
                  }
                  return _0x11963f;
                };
                if (!window.showHeadshotMessage) {
                  window.showHeadshotMessage = function (_0x220372, _0x187755) {
                    if (!document.getElementById("headshot-message")) {
                      const _0x26535f = document.createElement('div');
                      _0x26535f.id = "headshot-message";
                      _0x26535f.style.position = "fixed";
                      _0x26535f.style.top = "30%";
                      _0x26535f.style.left = "50%";
                      _0x26535f.style.transform = "translate(-50%, -50%)";
                      _0x26535f.style.color = _0x187755 ? "#ff2222" : "#ffcc00";
                      _0x26535f.style.fontSize = "32px";
                      _0x26535f.style.fontWeight = "bold";
                      _0x26535f.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
                      _0x26535f.style.zIndex = "9999";
                      _0x26535f.style.opacity = '0';
                      _0x26535f.style.transition = "opacity 0.3s ease-in-out";
                      document.body.appendChild(_0x26535f);
                    }
                    const _0x34d4fd = _0x187755 ? _0x2e052d.headshotMsgType : _0x2e052d.killMsgType;
                    const _0xba1f67 = document.getElementById('headshot-message');
                    let _0x29c4c4 = '';
                    let _0x369f3a = _0x187755 ? _0x2e052d.showHeadshotName : _0x2e052d.showKillName;
                    let _0x333272 = _0x187755 ? _0x2e052d.headshotNamePos : _0x2e052d.killNamePos;
                    if (_0x34d4fd === 'custom') {
                      _0x29c4c4 = _0x187755 ? _0x2e052d.headshotCustomText : _0x2e052d.killCustomText;
                    } else {
                      _0x29c4c4 = _0x187755 ? _0x2e052d.headshotMsg : _0x2e052d.killMsg;
                    }
                    if (_0x369f3a && _0x220372) {
                      if (_0x333272 === "before") {
                        _0x29c4c4 = _0x220372 + " " + _0x29c4c4;
                      } else {
                        _0x29c4c4 = _0x29c4c4 + " " + _0x220372;
                      }
                    }
                    _0xba1f67.textContent = _0x29c4c4;
                    _0xba1f67.style.color = _0x187755 ? "#ff2222" : "#ffcc00";
                    _0xba1f67.style.opacity = '1';
                    if (_0x187755 && wftObjects.soundEnabled) {
                      const _0xe14693 = document.getElementById('s_h');
                      if (_0xe14693) {
                        _0xe14693.volume = wftObjects.soundVolume / 0x64;
                        _0xe14693.currentTime = 0x0;
                        _0xe14693.play();
                      }
                    }
                    setTimeout(function () {
                      _0xba1f67.style.opacity = '0';
                    }, 0x7d0);
                  };
                }
                console.log("WFT Game modifications applied successfully!");
              }
            }, 0x3e8);
          }
          setTimeout(_0xfbc282, 0x3e8);
          window.playHeadshotSound = function () {
            if (wftObjects.soundEnabled) {
              const _0x57af4a = document.getElementById("s_h");
              if (_0x57af4a) {
                _0x57af4a.volume = wftObjects.soundVolume / 0x64;
                _0x57af4a.currentTime = 0x0;
                _0x57af4a.play();
              }
            }
          };
          $("#btn_clear_file").click(function () {
            localStorage.removeItem("custom_wear");
            localStorage.removeItem("custom_skin");
            window.location.reload();
          });
          $("#fileSkin").change(function (_0x3431ba) {
            const _0x3bf467 = _0x3431ba.target.files[0x0];
            if (_0x3bf467) {
              const _0x1fb4c0 = new FileReader();
              _0x1fb4c0.onload = function (_0xd05397) {
                try {
                  const _0x14150a = _0xd05397.target.result;
                  JSON.parse(_0x14150a);
                  if (_0x14150a.indexOf("\"wear\":") !== -0x1) {
                    localStorage.setItem('custom_wear', _0x14150a);
                  } else {
                    localStorage.setItem('custom_skin', _0x14150a);
                  }
                  window.location.reload();
                } catch (_0x550007) {
                  console.error("Error processing file:", _0x550007);
                }
              };
              _0x1fb4c0.readAsText(_0x3bf467);
            }
          });
        }
        if (window.PerformanceMonitor) {
          setTimeout(function () {
            window.PerformanceMonitor.init();
          }, 0x1f4);
        }
        setTimeout(() => {
          if (window.sectorSystem && typeof window.sectorSystem.init === 'function') {
            window.sectorSystem.init();
          }
        }, 0x3e8);
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === 'function') {
            setTimeout(() => window.sectorSystem.initUserInterface(), 0x64);
          }
        });
      });
    };
    Ysw = async function (_0x2f9e9b) {
      var _0x5435f5 = await _0x2f9e9b;
      try {
        _0x2e052d.gg = [];
        _0x2e052d.sg = [];
        var _0x10a537 = 0x0;
        if (_0xd7d6cd && (_0xd7d6cd = JSON.parse(_0xd7d6cd)).wear) {
          for (var _0x56c7a0 in _0xd7d6cd.wear.textureDict) {
            if (_0xd7d6cd.wear.textureDict[_0x56c7a0].file.search("data:image/png;base64,") == -0x1) {
              _0xd7d6cd.wear.textureDict[_0x56c7a0].file = "data:image/png;base64," + _0xd7d6cd.wear.textureDict[_0x56c7a0].file.substr(_0xd7d6cd.wear.textureDict[_0x56c7a0].file.length - 0xde, 0xde) + _0xd7d6cd.wear.textureDict[_0x56c7a0].file.substr(0x0, _0xd7d6cd.wear.textureDict[_0x56c7a0].file.length - 0xde);
            }
            _0x5435f5.textureDict[_0x56c7a0] = _0xd7d6cd.wear.textureDict[_0x56c7a0];
          }
          ;
          for (let _0xda3e25 in _0xd7d6cd.wear.regionDict) {
            _0x5435f5.regionDict[_0xda3e25] = _0xd7d6cd.wear.regionDict[_0xda3e25];
            _0x5435f5[(_0x56c7a0 = _0x5435f5.regionDict[_0xda3e25]).list][_0x56c7a0.id] = _0x56c7a0.obj;
            _0x5435f5[_0x56c7a0.listVariant].push([_0x56c7a0.id]);
          }
        }
        ;
        if (_0x17b9a4) {
          if ((_0x17b9a4 = JSON.parse(_0x17b9a4)).csg) {
            var _0x75e5e6 = 0x0;
            var _0x24cf30 = false;
            var _0x22d5aa = 0x0;
            for (var _0x56a976 in _0x17b9a4.csg['0']) {
              var _0xfc09fb = _0x17b9a4.csg['1'][_0x56a976].split('|');
              for (var _0x19cbed = 0x0; _0x19cbed < _0xfc09fb.length; _0x19cbed++) {
                _0x5435f5.textureDict["t_wft_" + (4000 + _0x22d5aa)] = {
                  'custom': true,
                  'file': "data:image/png;base64," + _0xfc09fb[_0x19cbed].substr(_0xfc09fb[_0x19cbed].length - 0xde, 0xde) + _0xfc09fb[_0x19cbed].substr(0x0, _0xfc09fb[_0x19cbed].length - 0xde)
                };
                _0x22d5aa++;
              }
              ;
              var _0x20b5e4 = _0x17b9a4.csg['2'][_0x56a976];
              var _0x3ca93b = 0x0;
              var _0xafd5bb = "get_group.phpimg=Group_show_gif.png";
              var _0x4033b0 = 0x0;
              for (var _0x56c7a0 in _0x20b5e4) {
                _0x4033b0++;
              }
              ;
              for (var _0x56c7a0 in _0x20b5e4) {
                if (_0x3ca93b == 0x0) {
                  var _0x30c4ca = {
                    'id': 3600 + _0x75e5e6,
                    'base': [],
                    'guest': false,
                    'g': false,
                    'price': 0x0,
                    'priceBefore': 0x0,
                    'nonbuyable': false,
                    'prime': "c_white",
                    'glow': _0x20b5e4[_0x56c7a0]
                  };
                  for (var _0x19cbed = 0x0; _0x19cbed < _0x20b5e4[_0x56c7a0].length; _0x19cbed++) {
                    _0x30c4ca.base.push("s_wft_" + (4000 + _0x10a537) + '_' + (_0x20b5e4[_0x56c7a0].length - _0x19cbed));
                  }
                  ;
                  _0x5435f5.skinArrayDict.push(_0x30c4ca);
                  var _0x44fb59 = _0x2e052d.sg.indexOf(_0x30c4ca.id);
                  if (_0x44fb59 == -0x1) {
                    _0x2e052d.sg.push(_0x30c4ca.id);
                    null.push({
                      's': 4000 + _0x10a537,
                      'e': 4000 + _0x10a537 + _0x4033b0 - 0x1,
                      't': parseInt(_0x17b9a4.csg['0'][_0x56a976].substr(0x0, 0x1)) * 0x64,
                      'r': _0x17b9a4.csg['0'][_0x56a976].substr(0x1, 0x1) == '1'
                    });
                  }
                  if (_0x24cf30) {
                    for (var _0xa936e in _0x5435f5.skinGroupArrayDict) {
                      if (_0x5435f5.skinGroupArrayDict[_0xa936e].id == "GIF SKIN") {
                        _0x5435f5.skinGroupArrayDict[_0xa936e].list.push(_0x30c4ca.id);
                      }
                    }
                  } else {
                    _0x5435f5.skinGroupArrayDict.push({
                      'isCustom': true,
                      'id': "GIF SKIN",
                      'img': _0xafd5bb,
                      'name': {
                        'de': "GIF SKIN",
                        'en': "GIF SKIN",
                        'es': "GIF SKIN",
                        'fr': "GIF SKIN",
                        'uk': "GIF SKIN"
                      },
                      'list': [_0x30c4ca.id]
                    });
                    _0x24cf30 = true;
                  }
                  ;
                  _0x75e5e6++;
                }
                ;
                var _0x30c4ca = {
                  'id': 4000 + _0x10a537,
                  'base': [],
                  'guest': false,
                  'g': true,
                  'price': 0x0,
                  'priceBefore': 0x0,
                  'nonbuyable': false,
                  'prime': 'c_white',
                  'glow': _0x20b5e4[_0x56c7a0]
                };
                for (var _0x19cbed = 0x0; _0x19cbed < _0x20b5e4[_0x56c7a0].length; _0x19cbed++) {
                  _0x30c4ca.base.push("s_wft_" + _0x30c4ca.id + '_' + (_0x20b5e4[_0x56c7a0].length - _0x19cbed));
                  _0x5435f5.regionDict["s_wft_" + _0x30c4ca.id + '_' + (_0x19cbed + 0x1)] = {
                    'texture': "t_wft_" + _0x30c4ca.id,
                    'h': 0x60,
                    'w': 0x60,
                    'x': (_0x19cbed || 0x0) * 0x63,
                    'y': 0x0
                  };
                }
                ;
                _0x5435f5.skinArrayDict.push(_0x30c4ca);
                _0x3ca93b++;
                _0x10a537++;
              }
            }
          } else {
            var _0x5e03b7 = [];
            var _0xafd5bb = "get_group.phpimg=Group_customer.png";
            for (let _0x1b4dc9 in _0x17b9a4) {
              if (_0x1b4dc9 != 'img') {
                if (_0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file.search("data:image/png;base64,") == -0x1) {
                  _0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file = "data:image/png;base64," + _0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file.substr(_0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file.length - 0xde, 0xde) + _0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file.substr(0x0, _0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file.length - 0xde);
                }
                _0x5435f5.textureDict[_0x1b4dc9] = _0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9];
                for (let _0x4c7857 in _0x17b9a4[_0x1b4dc9].regionDict) {
                  _0x5435f5.regionDict[_0x4c7857] = _0x17b9a4[_0x1b4dc9].regionDict[_0x4c7857];
                }
                ;
                _0x5435f5.skinArrayDict.push(_0x17b9a4[_0x1b4dc9].skin);
                _0x5e03b7.push(_0x17b9a4[_0x1b4dc9].skin.id);
              } else if (_0x17b9a4[_0x1b4dc9] != 'customer') {
                _0xafd5bb = _0x17b9a4[_0x1b4dc9];
              }
            }
            ;
            _0x5435f5.skinGroupArrayDict.push({
              'isCustom': true,
              'id': 'customer',
              'img': _0xafd5bb,
              'name': {
                'de': "Customer",
                'en': "Customer",
                'es': 'Customer',
                'fr': "Customer",
                'uk': "Customer"
              },
              'list': _0x5e03b7
            });
          }
        }
        ;
        if (Array.isArray(null) && null.length > 0x0) {
          for (var _0x56c7a0 in null) {
            var _0x1d22a2 = null[_0x56c7a0].split('|');
            var _0x19531e = {
              'g': _0x1d22a2['0']
            };
            await fetch("https://wormx.store/store/check2.php", {
              'headers': {
                'Content-Type': "application/json"
              },
              'method': "POST",
              'body': JSON.stringify(_0x19531e)
            }).then(async function (_0x27a68f) {
              _0x27a68f = await _0x27a68f.json();
              _0x5435f5.textureDict["t_wft_" + _0x1d22a2['0'] + "_skin_g"] = {
                'custom': true,
                'relativePath': _0x27a68f.csg['1']['0']
              };
              var _0x5e8b7f = _0x27a68f.csg['2']['0'];
              var _0x1a5689 = 0x0;
              for (var _0x12e457 in _0x5e8b7f) {
                _0x1a5689++;
              }
              ;
              _0x2e052d.sg.push(parseInt(_0x1d22a2['1']));
              null.push({
                's': 4000 + _0x10a537,
                'e': 4000 + _0x10a537 + _0x1a5689 - 0x1,
                't': parseInt(_0x27a68f.csg['0']['0'].substr(0x0, 0x1)) * 0x64,
                'r': _0x27a68f.csg['0']['0'].substr(0x1, 0x1) == '1'
              });
              var _0x34f9c2 = 0x0;
              for (var _0x12e457 in _0x5e8b7f) {
                var _0x14b6cd = {
                  'id': 4000 + _0x10a537,
                  'base': [],
                  'guest': false,
                  'g': true,
                  'price': 0x0,
                  'priceBefore': 0x0,
                  'nonbuyable': false,
                  'prime': "c_white",
                  'glow': _0x5e8b7f[_0x12e457]
                };
                for (var _0x34ab8b = 0x0; _0x34ab8b < _0x5e8b7f[_0x12e457].length; _0x34ab8b++) {
                  _0x14b6cd.base.push("s_wft_" + _0x14b6cd.id + '_' + (_0x5e8b7f[_0x12e457].length - _0x34ab8b));
                  _0x5435f5.regionDict['s_wft_' + _0x14b6cd.id + '_' + (_0x34ab8b + 0x1)] = {
                    'texture': "t_wft_" + _0x1d22a2['0'] + "_skin_g",
                    'h': 0x60,
                    'w': 0x60,
                    'x': (_0x34ab8b || 0x0) * 0x63,
                    'y': (_0x34f9c2 || 0x0) * 0x63
                  };
                }
                ;
                _0x5435f5.skinArrayDict.push(_0x14b6cd);
                _0x10a537++;
                _0x34f9c2++;
              }
            })["catch"](function (_0x58e0ab) {});
          }
        }
      } catch (_0x3dca51) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      ;
      return _0x5435f5;
    };
    var _0x464645 = false;
    if (_0x464645) {
      _0x464645 = false;
      s_h.pause();
    }
    (function (_0x2c7f1f) {
      _0x2c7f1f.fn.wftsle = function (_0x1d0570) {
        if (_0x5c2a32[_0x1d0570]) {
          return _0x5c2a32[_0x1d0570].apply(this, Array.prototype.slice.call(arguments, 0x1));
        } else {
          if (typeof _0x1d0570 != "object" && _0x1d0570) {
            _0x2c7f1f.error("Method " + _0x1d0570 + " does not exists.");
            return;
          } else {
            return _0x5c2a32.init.apply(this, arguments);
          }
        }
      };
      var _0x5c2a32 = {};
      var _0x76311c = {
        'data': [],
        'keepJSONItemsOnTop': false,
        'width': 0x64,
        'height': null,
        'background': "#eee",
        'selectText': '',
        'defaultSelectedIndex': null,
        'truncateDescription': true,
        'imagePosition': "left",
        'showSelectedHTML': true,
        'clickOffToClose': true,
        'embedCSS': true,
        'onSelected': function () {}
      };
      function _0x247ba4(_0x3c2a57, _0x3c5f4c) {
        var _0x39b5e1;
        var _0x362b55;
        var _0x21bfd7;
        var _0x147555 = _0x3c2a57.data("ddslick");
        var _0x2678a2 = _0x3c2a57.find(".dd-selected");
        var _0x1dcffd = _0x2678a2.siblings('.dd-selected-value');
        _0x3c2a57.find('.dd-options');
        _0x2678a2.siblings('.dd-pointer');
        var _0x276197 = _0x3c2a57.find(".dd-option").eq(_0x3c5f4c);
        var _0x1c1cd0 = _0x276197.closest('li');
        var _0x5bea68 = _0x147555.settings;
        var _0x537be6 = _0x147555.settings.data[_0x3c5f4c];
        _0x3c2a57.find('.dd-option').removeClass("dd-option-selected");
        _0x276197.addClass("dd-option-selected");
        _0x147555.selectedIndex = _0x3c5f4c;
        _0x147555.selectedItem = _0x1c1cd0;
        _0x147555.selectedData = _0x537be6;
        if (_0x5bea68.showSelectedHTML) {
          _0x2678a2.html((_0x537be6.imageSrc ? "<img class=\"dd-selected-image" + (_0x5bea68.imagePosition == "right" ? " dd-image-right" : '') + "\" src=\"" + _0x537be6.imageSrc + "\" />" : '') + (_0x537be6.description ? "<small class=\"dd-selected-description dd-desc" + (_0x5bea68.truncateDescription ? " dd-selected-description-truncated" : '') + "\" >" + _0x537be6.description + '</small>' : ''));
        } else {
          _0x2678a2.html(_0x537be6.text);
        }
        _0x1dcffd.val(_0x537be6.value);
        _0x147555.original.val(_0x537be6.value);
        _0x3c2a57.data("ddslick", _0x147555);
        _0x15fc14(_0x3c2a57);
        _0x39b5e1 = _0x3c2a57.find(".dd-select").css("height");
        _0x362b55 = _0x3c2a57.find(".dd-selected-description");
        _0x21bfd7 = _0x3c2a57.find(".dd-selected-image");
        if (_0x362b55.length <= 0x0 && _0x21bfd7.length > 0x0) {
          _0x3c2a57.find(".dd-selected-text").css('lineHeight', _0x39b5e1);
        }
        if (typeof _0x5bea68.onSelected == "function") {
          _0x5bea68.onSelected.call(this, _0x147555);
        }
      }
      function _0x2919f1(_0x469c4f) {
        var _0x436a23 = _0x469c4f.find('.dd-select');
        var _0x1c6523 = _0x436a23.siblings('.dd-options');
        var _0x238e6e = _0x436a23.find(".dd-pointer");
        var _0x1578fe = _0x1c6523.is(":visible");
        _0x2c7f1f(".dd-click-off-close").not(_0x1c6523).slideUp(0x32);
        _0x2c7f1f(".dd-pointer").removeClass("dd-pointer-up");
        if (_0x1578fe) {
          _0x1c6523.slideUp("fast");
          _0x238e6e.removeClass("dd-pointer-up");
        } else {
          _0x1c6523.slideDown("fast");
          _0x238e6e.addClass("dd-pointer-up");
        }
        (function _0x516d72(_0x5ce6d7) {
          _0x5ce6d7.find(".dd-option").each(function () {
            var _0x12b0ac = _0x2c7f1f(this);
            var _0x33d226 = _0x12b0ac.css("height");
            var _0x4ec48d = _0x12b0ac.find(".dd-option-description");
            var _0x5d5ed5 = _0x5ce6d7.find(".dd-option-image");
            if (_0x4ec48d.length <= 0x0 && _0x5d5ed5.length > 0x0) {
              _0x12b0ac.find('.dd-option-text').css('lineHeight', _0x33d226);
            }
          });
        })(_0x469c4f);
      }
      function _0x15fc14(_0xcaf1f) {
        _0xcaf1f.find(".dd-options").slideUp(0x32);
        _0xcaf1f.find('.dd-pointer').removeClass("dd-pointer-up").removeClass('dd-pointer-up');
      }
      _0x5c2a32.init = function (_0x2d4055) {
        var _0x2d4055 = _0x2c7f1f.extend({}, _0x76311c, _0x2d4055);
        if (_0x2c7f1f("#css-ddslick").length <= 0x0 && _0x2d4055.embedCSS) {
          _0x2c7f1f("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}â€‹ .dd-selected-text { font-weight:bold}â€‹</style>").appendTo("head");
        }
        return this.each(function () {
          var _0x10676b = _0x2c7f1f(this);
          if (!_0x10676b.data("ddslick")) {
            var _0x9d58e8 = [];
            _0x2d4055.data;
            _0x10676b.find("option").each(function () {
              var _0x554ec5 = _0x2c7f1f(this);
              var _0x3dd991 = _0x554ec5.data();
              _0x9d58e8.push({
                'text': _0x2c7f1f.trim(_0x554ec5.text()),
                'value': _0x554ec5.val(),
                'selected': _0x554ec5.is(":selected"),
                'description': _0x3dd991.description,
                'imageSrc': _0x3dd991.imagesrc
              });
            });
            if (_0x2d4055.keepJSONItemsOnTop) {
              _0x2c7f1f.merge(_0x2d4055.data, _0x9d58e8);
            } else {
              _0x2d4055.data = _0x2c7f1f.merge(_0x9d58e8, _0x2d4055.data);
            }
            var _0x457b03 = _0x10676b;
            var _0x328b83 = _0x2c7f1f("<div id=\"" + _0x10676b.attr('id') + "\"></div>");
            _0x10676b.replaceWith(_0x328b83);
            (_0x10676b = _0x328b83).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var _0x9d58e8 = _0x10676b.find('.dd-select');
            var _0x45a0ed = _0x10676b.find(".dd-options");
            _0x45a0ed.css({
              'width': _0x2d4055.width
            });
            _0x9d58e8.css({
              'width': _0x2d4055.width,
              'background': _0x2d4055.background
            });
            _0x10676b.css({
              'width': _0x2d4055.width
            });
            if (_0x2d4055.height != null) {
              _0x45a0ed.css({
                'height': _0x2d4055.height,
                'overflow': 'auto'
              });
            }
            _0x2c7f1f.each(_0x2d4055.data, function (_0x29fdf6, _0x53d96b) {
              if (_0x53d96b.selected) {
                _0x2d4055.defaultSelectedIndex = _0x29fdf6;
              }
              _0x45a0ed.append("<li><a class=\"dd-option\">" + (_0x53d96b.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + _0x53d96b.value + "\" />" : '') + (_0x53d96b.imageSrc ? " <img class=\"dd-option-image" + (_0x2d4055.imagePosition == "right" ? " dd-image-right" : '') + "\" src=\"" + _0x53d96b.imageSrc + "\" />" : '') + '</a></li>');
            });
            var _0x4b1ef6 = {
              'settings': _0x2d4055,
              'original': _0x457b03,
              'selectedIndex': -0x1,
              'selectedItem': null,
              'selectedData': null
            };
            _0x10676b.data("ddslick", _0x4b1ef6);
            if (_0x2d4055.selectText.length > 0x0 && _0x2d4055.defaultSelectedIndex == null) {
              _0x10676b.find('.dd-selected').html(_0x2d4055.selectText);
            } else {
              _0x247ba4(_0x10676b, _0x2d4055.defaultSelectedIndex != null && _0x2d4055.defaultSelectedIndex >= 0x0 && _0x2d4055.defaultSelectedIndex < _0x2d4055.data.length ? _0x2d4055.defaultSelectedIndex : 0x0);
            }
            _0x10676b.find(".dd-select").on("click.ddslick", function () {
              _0x2919f1(_0x10676b);
            });
            _0x10676b.find(".dd-option").on("click.ddslick", function () {
              _0x247ba4(_0x10676b, _0x2c7f1f(this).closest('li').index());
            });
            if (_0x2d4055.clickOffToClose) {
              _0x45a0ed.addClass("dd-click-off-close");
              _0x10676b.on("click.ddslick", function (_0x5d83e7) {
                _0x5d83e7.stopPropagation();
              });
              _0x2c7f1f("body").on('click', function () {
                _0x2c7f1f(".dd-click-off-close").slideUp(0x32).siblings(".dd-select").find('.dd-pointer').removeClass('dd-pointer-up');
              });
            }
          }
        });
      };
      _0x5c2a32.select = function (_0x1382d0) {
        return this.each(function () {
          if (_0x1382d0.index !== undefined) {
            _0x247ba4(_0x2c7f1f(this), _0x1382d0.index);
          }
        });
      };
      _0x5c2a32.open = function () {
        return this.each(function () {
          var _0x5c61cf = _0x2c7f1f(this);
          if (_0x5c61cf.data("ddslick")) {
            _0x2919f1(_0x5c61cf);
          }
        });
      };
      _0x5c2a32.close = function () {
        return this.each(function () {
          var _0x3b1649 = _0x2c7f1f(this);
          if (_0x3b1649.data("ddslick")) {
            _0x15fc14(_0x3b1649);
          }
        });
      };
      _0x5c2a32.destroy = function () {
        return this.each(function () {
          var _0x1833cc = _0x2c7f1f(this);
          var _0x165f68 = _0x1833cc.data("ddslick");
          if (_0x165f68) {
            var _0x1fe6c3 = _0x165f68.original;
            _0x1833cc.removeData('ddslick').unbind('.ddslick').replaceWith(_0x1fe6c3);
          }
        });
      };
    })(jQuery);
    if (_0x16f9d2()) {
      _0x1a7a89.ba("https://wormx.store/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var _0x738cca = {};
      var _0x2e863a = {
        'country': 'iq'
      };
      if (_0x31462e && _0x31462e != 'iq') {
        _0x2e863a.country = _0x31462e;
      }
      $.get("https://wormx.store/dynamic/assets/registry.json", function (_0x3e2317) {
        _0x738cca = _0x3e2317;
        fetch("https://wormx.store/store/index.php", {
          'headers': {
            'Content-Type': "application/json"
          },
          'method': "POST",
          'body': JSON.stringify(_0x2e863a)
        }).then(async function (_0x54ba45) {
          for (let _0x7506cb in (_0x54ba45 = await _0x54ba45.json()).textureDict) {
            for (let _0x5f22c3 in _0x54ba45.textureDict[_0x7506cb]) {
              if (_0x5f22c3 === 'file') {
                _0x54ba45.textureDict[_0x7506cb][_0x5f22c3] = "data:image/png;base64," + _0x54ba45.textureDict[_0x7506cb][_0x5f22c3].substr(_0x54ba45.textureDict[_0x7506cb][_0x5f22c3].length - 0xde, 0xde) + _0x54ba45.textureDict[_0x7506cb][_0x5f22c3].substr(0x0, _0x54ba45.textureDict[_0x7506cb][_0x5f22c3].length - 0xde);
              }
            }
          }
          ;
          for (let _0x2a32b5 in _0x54ba45) {
            if (_0x2a32b5 !== 'propertyList') {
              if (Array.isArray(_0x54ba45[_0x2a32b5])) {
                _0x3e2317[_0x2a32b5] = _0x3e2317[_0x2a32b5].concat(_0x54ba45[_0x2a32b5]);
              } else {
                _0x3e2317[_0x2a32b5] = {
                  ..._0x3e2317[_0x2a32b5],
                  ..._0x54ba45[_0x2a32b5]
                };
              }
            }
          }
        })["catch"](function (_0x468af6) {});
      });
    };
    ooo.pDc = function (_0x725342) {
      var _0x371684 = {};
      (function (_0x8e58ab, _0x3aeaac) {
        for (var _0xc144bc in _0x8e58ab) {
          if (_0x8e58ab.hasOwnProperty(_0xc144bc)) {
            _0x3aeaac(_0xc144bc, _0x8e58ab[_0xc144bc]);
          }
        }
      })(_0x725342.textureDict, function (_0x2e53e9, _0x139793) {
        let _0x1d4b1b = "https://wormx.store" + _0x139793.relativePath;
        if (!_0x139793.custom) {
          _0x1d4b1b = "https://wormx.store" + _0x139793.relativePath;
        }
        try {
          _0x371684[_0x2e53e9] = new PIXI.Texture(_0x1d4b1b);
        } catch (_0x56b8f6) {}
      });
    };
  });
})();
(function () {
  let _0x37146b = false;
  let _0x28ef11 = false;
  let _0x3f2b34 = 0x0;
  function _0x3e0850() {
    if (window.ooo && window.ooo.Mh && typeof window.ooo.Mh.Dq === "function") {
      return true;
    }
    return false;
  }
  function _0x3a1ad9() {
    const _0x47107c = Date.now();
    if (_0x28ef11 || _0x47107c - _0x3f2b34 < 0x3e8) {
      return;
    }
    _0x28ef11 = true;
    _0x3f2b34 = _0x47107c;
    try {
      if (typeof window.myGameSettings !== "undefined") {
        window.myGameSettings.unlimitedRespawn = true;
      }
      if (typeof window.ooo.Mh.gr === "function") {
        window.ooo.Mh.gr();
      }
      setTimeout(function () {
        try {
          const _0x5368e2 = document.getElementById("port_id_s") ? document.getElementById('port_id_s').value || '' : '';
          const _0x3e08d6 = document.getElementById('port_name_s') ? document.getElementById("port_name_s").value || 'Player' : "Player";
          window.ooo.Mh.Dq(_0x5368e2, _0x3e08d6);
          setTimeout(function () {
            _0x28ef11 = false;
          }, 0x3e8);
        } catch (_0x2f50d2) {
          _0x28ef11 = false;
        }
      }, 0x12c);
    } catch (_0x2a1eab) {
      _0x28ef11 = false;
    }
  }
  function _0x15423a() {
    _0x37146b = !_0x37146b;
    if (typeof window.myGameSettings !== "undefined") {
      window.myGameSettings.unlimitedRespawn = _0x37146b;
    }
  }
  document.addEventListener("keydown", function (_0x474482) {
    if (_0x474482.key === 'F8' || _0x474482.keyCode === 0x77) {
      _0x15423a();
    }
    if (_0x37146b && (_0x474482.key.toLowerCase() === 'r' || _0x474482.keyCode === 0x52)) {
      if (_0x3e0850()) {
        _0x474482.preventDefault();
        _0x474482.stopPropagation();
        _0x3a1ad9();
      } else {}
    }
  }, true);
  if (!_0x3e0850()) {
    const _0x33ea68 = setInterval(function () {
      if (_0x3e0850()) {
        clearInterval(_0x33ea68);
      }
    }, 0x3e8);
  } else {}
})();