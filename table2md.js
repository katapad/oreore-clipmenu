var TableParser, text;

TableParser = (function() {
  function TableParser() {}

  TableParser.prototype.parse = function(text) {
    var i, line, lines, result, _i, _len;
    lines = text.split('\n');
    result = '';
    for (i = _i = 0, _len = lines.length; _i < _len; i = ++_i) {
      line = lines[i];
      if (i === 0) {
        text = this._parseHead(line);
      } else {
        text = this._parseBody(line);
      }
      result += text + '\n';
    }
    return result;
  };

  TableParser.prototype._parseHeadLength = function(line) {
    var cell, cells, _i, _len, _results;
    cells = line.split('\t');
    _results = [];
    for (_i = 0, _len = cells.length; _i < _len; _i++) {
      cell = cells[_i];
      _results.push(cell.length);
    }
    return _results;
  };

  TableParser.prototype._parseHead = function(line) {
    var cell, cells, head, sep, separator, _i, _len;
    cells = line.split('\t');
    head = cells.join(' | ');
    head = "| " + head + " |";
    separator = '';
    for (_i = 0, _len = cells.length; _i < _len; _i++) {
      cell = cells[_i];
      sep = '| === ';
      separator += sep.replace('===', this._getSep(cell.length));
    }
    separator += '|';
    return head + '\n' + separator;
  };

  TableParser.prototype._getSep = function(length) {
    var i, result, _i;
    result = '';
    for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
      result += '-';
    }
    return result;
  };

  TableParser.prototype._parseBody = function(line) {
    var cells, result;
    cells = line.split('\t');
    result = cells.join(' | ');
    result = "| " + result + " |";
    return result;
  };

  return TableParser;

})();

text = new TableParser().parse(clipText);

return text;
