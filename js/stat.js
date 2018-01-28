'use strict';
var cloudWidth = 420;
var cloudHeight = 270;
var cloudX = 100;
var cloudY = 10;
var gap = 10;
var barGap = 50;
var barWidth = 40;
var barHeight = 150;
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
function getRandom() {
  return Math.random();
}
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, cloudX + gap, cloudY + gap, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#ffffff');
  ctx.fillStyle = '#083689';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var fixedRandom = getRandom().toFixed(1);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
    } else {
      ctx.fillStyle = 'rgba(8,54,137, ' + fixedRandom + ')';
    }
    ctx.fillRect(cloudX + barWidth + (barGap + barWidth) * i, barGap * 2 + (barHeight - ((barHeight * times[i]) / maxTime)), barWidth, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], cloudX + barWidth + (barGap + barWidth) * i, barHeight + gap * 2 + barGap * 2);
    ctx.fillText(Math.round(times[i]), cloudX + barWidth + (barGap + barWidth) * i, barGap * 2 - gap + (barHeight - ((barHeight * times[i]) / maxTime)));
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 50);
    ctx.fillText('Список результатов:', 120, 70);
  }
};
