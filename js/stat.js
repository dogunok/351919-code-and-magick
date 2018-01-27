var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT =150;
//Общая функция для создания облака
var renderCloud = function (ctx,x ,y, color) {
  ctx.fillStyle = color;
  ctx.fillRect (x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
};
window.renderStatistics = function(ctx, names, times) {
//создаем 2 облака
  renderCloud(ctx, CLOUD_X+GAP, CLOUD_Y+GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y,'#ffffff');
ctx.fillStyle = '#000';
for (var i = 0;i < names.length;i++){
  ctx.fillText(names[i], CLOUD_X+BAR_WIDTH +(BAR_GAP+BAR_WIDTH)*i,BAR_HEIGHT+GAP*2+BAR_GAP );
  ctx.fillText(Math.round(times[i]), CLOUD_X+BAR_WIDTH +(BAR_GAP+BAR_WIDTH)*i,BAR_GAP-GAP );
  ctx.fillRect(CLOUD_X+BAR_WIDTH +(BAR_GAP+BAR_WIDTH)*i, BAR_GAP,BAR_WIDTH, BAR_HEIGHT);
    switch(names[i]){
      case 'Вы':
       ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      break;
    }
}
 };

