const container = [
    {
        "word": "ウィスウィスーーの後",
        "sound": "./sounds/妖怪登場BGM.mp3"
    },
    {
        "word": "また会おうでウィスーー",
        "sound": "./sounds/ゲラポー.m4a"
    },
    {
        "word": "ゲラポー終わり",
        "sound": "./sounds/劇はじめ.mp3"
    },
    {
        "word": "そのまま",
        "sound": "./sounds/さくらニュータウン.mp3"
    },
    {
        "word" :"早く食べたいな",
        "sound": "./sounds/爆発.mp3"
    },
    {
        "word": "探してみる→探しながら",
        "sound": "./sounds/妖怪探索BGM.mp3"
    },
    {
        "word": "人面犬が現れる",
        "sound": "./sounds/妖怪登場BGM.mp3"
    },
    {
        "word": "俺の友達出てこい、ジバニャン",
        "sound": "./sounds/妖怪召喚BGM1.mp3"
    },
    {
        "word": "そのまま",
        "sound": "./sounds/妖怪召喚BGM2.mp3"
    },
    {
        "word": "ジバニャンが出てくる",
        "sound": "./sounds/妖怪登場BGM.mp3"
    },
    {
        "word": "突撃するでウィス",
        "sound": "./sounds/爆発.mp3"
    },
    {
        "word": "圏外でウィス→妖怪ウォッチであたりを照らす",
        "sound": "./sounds/妖怪探索BGM.mp3"
    },
    {
        "word": "コマさんが逃げてくる",
        "sound": "./sounds/妖怪登場BGM.mp3"
    },
    {
        "word": "リュックを投げた後",
        "sound": "./sounds/爆発.mp3"
    },
    {
        "word": "私の名はブリー隊長だ",
        "sound": "./sounds/妖怪登場BGM.mp3"
    },
    {
        "word": "みんなも手拍子お願い",
        "sound": "./sounds/ドゥビズバ.mp3"
    },
    {
        "word": "退場",
        "sound": "./sounds/妖怪テーマ.mp3"
    },
]

const main = document.getElementById("main");

container.forEach((item, num) => {
    const li = document.createElement("li");
    const audio = document.createElement("audio");
    audio.src = item.sound;
    audio.controls = true;
    li.textContent = num + "." + item.word + "→";
    li.appendChild(audio);
    main.appendChild(li);
})
