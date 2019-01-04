function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ALlUhHxZzx":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email=player.GetVar("tomail");
var subject=player.GetVar("subject");
var bodytxt=player.GetVar("Feedback");

var mailto_link='mailto:'+email+'?subject='+subject+'&body='+bodytxt+"%0d%0A";

win=window.open(mailto_link,'emailWin');
}

