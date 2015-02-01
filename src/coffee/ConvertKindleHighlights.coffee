
###
https://kindle.amazon.co.jp/your_highlights

###
class ConvertKindleHighlights
  constructor: () ->

  convert: (clipText)->
    clipText = clipText.replace(/Add a note\n?/gm, '')
    lines = clipText.split('\n')
    result = []
    for line in lines
      if line is 'Add a note'
        continue
      location = line.match(/Read more at location (\d{1,10}).*Delete this highlight$/)
      line = line.replace(/Read more at location .*Delete this highlight$/, '')


      if location
        result.push "location: " + location[1] + "\n" +line
      else
        result.push line

    return result.join('\n\n')



clipText = clipText || """
abc def Read more at location 119   • Delete this highlight
Add a note
本当の問題は、自分が本心からやりたいRead more at location 122   • Delete this highlight
Add a note
"""

console.log new ConvertKindleHighlights().convert(clipText)

return new ConvertKindleHighlights().convert(clipText)


