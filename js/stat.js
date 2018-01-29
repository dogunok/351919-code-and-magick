'use strict';
var cloudWidth = 420;
var cloudHeight = 270;
var cloudX = 100;
var cloudY = 10;
var gap = 10;
var barGap = 50;
var barWidth = 40;
var barHeight = 150;
var text1 = 'Ура вы победили!';
var text2 = 'Список результатов:';
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
var getRandom = function () {
  return Math.random();
};
var placeText = function (ctx, text, x, y, size, colorText) {
  ctx.font = size;
  ctx.fillStyle = colorText;
  ctx.fillText(text, x, y);
};
var formationBar = function (ctx, x, y, widthBar, heightBar, colorBar) {
  ctx.fillStyle = colorBar;
  ctx.fillRect(x, y, widthBar, heightBar);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + gap, cloudY + gap, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#ffffff');
  placeText(ctx, text1, 120, 50, '16px PT Mono', '#000');
  placeText(ctx, text2, 120, 70, '16px PT Mono', '#000');
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    var fixedRandom = getRandom().toFixed(1);
    if (names[i] === 'Вы') {
      formationBar(ctx, cloudX + barWidth + (barGap + barWidth) * i, barGap * 2 + (barHeight - ((barHeight * times[i]) / maxTime)), barWidth, (barHeight * times[i]) / maxTime, 'rgba(255, 0, 0, 0.7)');
    } else {
      formationBar(ctx, cloudX + barWidth + (barGap + barWidth) * i, barGap * 2 + (barHeight - ((barHeight * times[i]) / maxTime)), barWidth, (barHeight * times[i]) / maxTime, 'rgba(8,54,137, ' + fixedRandom + ')');
    }
    placeText(ctx, names[i], cloudX + barWidth + (barGap + barWidth) * i, barHeight + gap * 2 + barGap * 2, '16px PT Mono', '#000');
    placeText(ctx, Math.round(times[i]), cloudX + barWidth + (barGap + barWidth) * i, barGap * 2 - gap + (barHeight - ((barHeight * times[i]) / maxTime)), '16px PT Mono', '#000');
  }
};
