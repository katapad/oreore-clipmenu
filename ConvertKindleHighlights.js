
/*
https://kindle.amazon.co.jp/your_highlights
 */
var ConvertKindleHighlights, clipText;

ConvertKindleHighlights = (function() {
  function ConvertKindleHighlights() {}

  ConvertKindleHighlights.prototype.convert = function(clipText) {
    var i, len, line, lines, location, result;
    clipText = clipText.replace(/Add a note\n?/gm, '');
    lines = clipText.split('\n');
    result = [];
    for (i = 0, len = lines.length; i < len; i++) {
      line = lines[i];
      if (line === 'Add a note') {
        continue;
      }
      location = line.match(/Read more at location (\d{1,10}).*Delete this highlight$/);
      line = line.replace(/Read more at location .*Delete this highlight$/, '');
      if (location) {
        result.push("location: " + location[1] + "\n" + line);
      } else {
        result.push(line);
      }
    }
    return result.join('\n\n');
  };

  return ConvertKindleHighlights;

})();

clipText = clipText || "abc def Read more at location 119   • Delete this highlight\nAdd a note\n本当の問題は、自分が本心からやりたいRead more at location 122   • Delete this highlight\nAdd a note";

console.log(new ConvertKindleHighlights().convert(clipText));

return new ConvertKindleHighlights().convert(clipText);
