var subTitles = [
    "Jim's absurd programming",
    "Average programmer on the hood",
    "Do you like it so far?",
    "Fun Fact: the site's made in 11ty :D",
    "Sleep through day, then we play, all through the late night",
    "I live in your wifi.... sort of",
    "きみは実にバカだなあ。",
    "本気で釣られたあ!",
    "おｋ！",
    "おっおっおっおっおっおっおっおっおっおっおっおっ",
    "Es gracioso saber idiomas lo juro",
    "Приходите в мой дом, мои двери открыты",
    "Imagine you can fly. You're doing it? Now jump out ur window!",
    "I hate FNF so much I like it",
    "FlxAnimate 5.0.0 in 3047? 👀",
    "Reject commenting blogs, embrace just reading them",
    "On a Monday, can I see you?",
    "Another day then, maybe Tuesday?",
    "Hear me out",
    "Can your Zig do that huh? didn't think so bro",
    "Schieße",
    "Fun Fact: the site was gonna be in pure Haxe vanilla js",
    "Your favorite FlxAnimate creator",
    "Anoche tuve una revelación, tengo que salir...",
    "y terminar bailando pogo en medio de un bosque",
    "Bro, open source 101 duh",
    "Hola Chayma",
    "But look I made you some content!",
    "Cariño, pintas en color",
    "Whiiiteeee womannnnn, a white woman's instagram"
];
if (getRandomInt(4) == 2)
    document.getElementById("subTitle-header").innerText = subTitles[getRandomInt(subTitles.length)];

function getRandomInt(max)
{
    var inf = (max == null) ? 0x7FFFFFFF : max;

    return Math.floor(Math.random() * inf);
}