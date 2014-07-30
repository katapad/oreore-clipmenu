
_convert = (text)->
  _convertText text

_convertText = (text) ->
  result = ""
  lines = text.split("\n")
  lastName = ""
  result += "\n\n"
  i = 0

  while i < lines.length
    line = lines[i]
    if line is ""
      ++i
      continue
    nameReg = new RegExp(/^\[([\d+\/?]+)\s+([\d+:?]+)\]\s*([^:]+)\s*:(.*)/)

    if nameReg.test(line)
      name = line.replace(nameReg, "$3")
      t = line.replace(nameReg, "$4")
      unless lastName is name
        result +=  '\n\n' + name + "  \n"

      lastName = name
      #t = _checkLink(t)
      t = t.replace(/^\s/, '')
      result +=  t + "\n"
    else
      #line = _checkLink(line)
      line = line.replace(/^\s/, '')
      result +=  line + "\n"
    i++
  result = result.replace(/^\n{4}/, '')
  result

_checkLink = (t) ->
  t.replace /(https*:\/\/[\x21-\x7e]+)/g, "<a href=\"$1\" target=\"_blank\">$1</a>"

return _convert clipText