/* eslint-disable valid-jsdoc */
'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var lotWizard = 4;
/**
 * функция рандомного целого значения
 * @param min минимальное значение
 * @param max максимальное значение
 * @returns {*}
 */
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var wizards = [];
/**
 * С помощью цикла добавляем нужное колличество элементов в массив
 */
for (var j = 0; j < lotWizard; j++) {
  wizards.push({
    name: WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length - 1)],
    family: WIZARD_FAMILY[getRandom(0, WIZARD_FAMILY.length - 1)],
    coatColor: WIZARD_COAT_COLOR[getRandom(0, WIZARD_COAT_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandom(0, WIZARD_EYES_COLOR.length - 1)]
  });
}

/**
 * Функция вывода параметров мага
 * @param wizard массив из которого берутся значения
 * @returns {Node}
 */
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.family;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
