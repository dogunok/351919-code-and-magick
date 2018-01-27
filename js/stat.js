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
window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, cloudX + gap, cloudY + gap, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, cloudX, cloudY, '#ffffff');
  ctx.fillStyle = '#000';
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], cloudX + barWidth + (barGap + barWidth) * i, barHeight + gap * 2 + barGap);
    ctx.fillText(Math.round(times[i]), cloudX + barWidth + (barGap + barWidth) * i, barGap - gap);
    ctx.fillRect(cloudX + barWidth + (barGap + barWidth) * i, barGap, barWidth, barHeight);
    switch (names[i]) {
      case 'Вы':
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        break;
    }
  }
};

