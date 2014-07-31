# ClipMenu Actions

util for me!

[JavaScriptアクションの書き方 - ClipMenu.com](http://www.clipmenu.com/ja/help/custom-actions)

## Getting Started

使うだけなら以下にCloneしてください。

	/Users/なまえ/Library/Application Support/ClipMenu/script/action
	
### 開発したいときは

watch + coffee

	$ gulp 

	


## `ConvertSkypeText.js` Skype ログのコピペを整形するやつ(Mac専用)

`ConvertSkypeText.js` はSkypeのlogを以下のような感じに整形してくれます

```
>Aさん
あめんぼあかいなあいうえお

>B氏
合格です。
よろしくおねがいいたします。

```


## `table2md.js`

Excelなどに書いたテーブルをmd形式に変換します。

	hoge	fuga	bar
	OK	N/A	N/A
	OK	N/A	N/A
	OK	OK	OK
	OK	OK	OK
	
	↓変換後
	
	| hoge | fuga | bar |
	| ---- | ---- | ---- | ---- |
	| OK | N/A | N/A |
	| OK | N/A | N/A |
	| OK | OK | OK |
	| OK | OK | OK |