'use strict';

window.HomeControl = function(controlDiv) {
  var dashBoard = document.createElement('div');
  dashBoard.innerHTML = window.templates.home();
  dashBoard.id = 'dashboard';
  dashBoard.className = 'dashboard';
  controlDiv.appendChild(dashBoard);
};