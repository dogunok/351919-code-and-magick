var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var renderCloud = function (ctx,x ,y, color) {
  ctx.fillStyle = color ;
  ctx.fillRect (x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
};
window.renderStatistics = function(ctx , names , times) {
  renderCloud(ctx,110,20,'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx,100,10,'#ffffff');
  };

