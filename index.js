const Discord = require('discord.js');
const client = new Discord.Client();
var bad_words = ["씨발", "개새끼", "tlqkf", "애미", "ㅅㅂ", "ㅄ", "ㅂㅅ", "등신", "병신", "미친", "느금", "ㄴㄱㅁ", "좆", "ㅈ같", 'ㅈ됬', 'ㅈ됐', 'ㅈ댓', 'ㅈ됨', 'ㅈ됏','ㅈ됫','시발','씹','ㄲㅈ','꺼져','새끼','ㄳㄲ','ㄱㅅㄲ', 'ㅅㄲ','창녀','걸레','남창','느개미','느개비','뒤져','닥쳐','ㄷㅊ','등신','똥꼬충','미치','ㅁㅊ','보전깨','피싸개','핏물싸개','뻐큐','fuck','sex','야스','tq','qt','rotorl','ac','쌍놈','쌍노무','쌍년','썅년','시팔',"씨팔",'염병','옘병','육변기','육시랄','존나','후장', '새기', 'ㅗ', '씻발', '싯팔', '싯발', '씻팔', '보짓', '자짓', '앰창', '애비', '허벌', '조까', '7ㅐ', '^^|', 'ㅅ발', 'ㅆ발', ,'qudtls', '니앱', 'qt', '@ㅐ', 'ㅆ!', ,'ㅅ!', '야발', '챙녀', '꼬추', '@ㅓ','call.event.swearing()'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
        for(i=0; i < bad_words.length; i++) {
            if(msg.content.toLowerCase().indexOf(bad_words[i]) != -1) {
                msg.reply(' <@&981536449876852756> <@&981536885199503430> 욕설 사용이 의심되는 거십니다 데스 wwww');
                console.log('욕설의 사용으로 인한 호출, '+msg.author.username+'('+msg.author+'): '+msg.content);
                break;
            }
        }
        if(msg.content.indexOf('<@1005377197764259841>') != -1) {
            msg.reply('반갑다는 거십니다 데스wwwww');
            console.log(msg.author.username+'('+msg.author+')'+', 사용자의 직접 호출')
        }
});

client.login(process.env.TOKEN);
