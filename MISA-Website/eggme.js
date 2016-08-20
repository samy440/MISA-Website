var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
  jQuery('#egggif').fadeIn(500, function() {
    window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
  });
}).listen();