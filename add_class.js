function postSlack() {
  var url = 'https://hooks.slack.com/services/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';
  //var sheet    = SpreadsheetApp.openById('145yO5RR5dNv7hFJmSjhu4Xcmj84pEgBEaJBGjN8OIL8');
  //var sentence = sheet.getSheetByName('GAS練習用').getRange(2,1).getValue();
  //var payload  = {
    //'text'      : "<!channel>"+ "\n" + sentence + mention + "\n" + "テキスト" ,
    //'username'  : 'GAS練習用',
    //'channel'  　　: 'tech',
  //};
  
  var data = {
    "text" : "出席確認をします。",
    "attachments" : [{
        //"title": "add_class",
        //"text": "出席か欠席を選択して下さい",
        "fallback": "エラーが発生しています。ELITE CAMP運営部にお問い合わせください",
        "callback_id": "ButtonResponce",
        "color": "#3AA3E3",
        "attachment_type": "default",
        "actions": [
            {  "name": "button",
               "text": "出席する",
               "style": "primary",
               "type": "button",
               "value": "ok",
            },
            {  "name": "button",
               "text": "欠席する",
               "style": "danger",
               "type": "button",
               "value": "no",
            }]
        }]
  };
  
  var options = {
    'method'      : 'post'                 ,
    'contentType' : 'application/json'     ,
    'payload'     : JSON.stringify(data),
  };
  UrlFetchApp.fetch(url, options);
}

function doPost(e) {
  var parameter = e.parameter;
  var data = parameter.payload;
  var json = JSON.parse(decodeURIComponent(data));
  
  if (json.actions[0].name == "button"){
      var text = "You clicked " + json.actions[0].value;
  }else if (json.actions[0].name == "select"){
      var text = "You selected" + json.actions[0].selected_options[0].value;
  }
  
  var replyMessage = {
      "replace_original": true,
      "response_type": "in_channel",
      "text": "aaaaa\n" + text
  };

  return ContentService.createTextOutput(JSON.stringify(replyMessage)).setMimeType(ContentService.MimeType.JSON);
  }




