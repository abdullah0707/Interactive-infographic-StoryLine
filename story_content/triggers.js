function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MD0lpM6xq8":
        Script1();
        break;
      case "6cuQKat9yCK":
        Script2();
        break;
      case "6ifMU8deydj":
        Script3();
        break;
      case "5XRTPiovZ7G":
        Script4();
        break;
      case "5gSa1wiemh5":
        Script5();
        break;
      case "5VmFH7I3Wzf":
        Script6();
        break;
      case "63wI3K0VfCR":
        Script7();
        break;
      case "6PzzOkSuO6U":
        Script8();
        break;
      case "6BhZ2IdELmw":
        Script9();
        break;
      case "6ABxFXMPVGi":
        Script10();
        break;
      case "6nP2PnmTtHD":
        Script11();
        break;
      case "5udO9LZwUdB":
        Script12();
        break;
      case "6IySEAW3jWs":
        Script13();
        break;
      case "6TsevRT9qTd":
        Script14();
        break;
      case "5hhqGw9C3yD":
        Script15();
        break;
      case "5lyG8znxkRx":
        Script16();
        break;
      case "5oxeZALueKS":
        Script17();
        break;
      case "5jjE65PNAFH":
        Script18();
        break;
      case "6LeWuFmwG99":
        Script19();
        break;
      case "5iHCgYYuyGI":
        Script20();
        break;
      case "6LQWftUQmvF":
        Script21();
        break;
      case "6kKaPl5Zbgi":
        Script22();
        break;
      case "5nyfV8j7HLg":
        Script23();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6454g1Nutb5');
const duration = 1250;
const easing = 'ease-out';
const id = '5xmYKryxtHM';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6kKIVfzEfJM');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6icaHvmWM4f');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6Ydh2Fsz1kq');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6EXgQLVtE87');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5dItUWVTyU7');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5VQGE9jVjyF');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5yU8mLOglMG');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5oSSiPiFNG0');
const duration = 1250;
const easing = 'ease-in-out';
const id = '6f6eJgvOZ4a';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
