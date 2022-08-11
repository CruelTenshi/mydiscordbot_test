const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const bad_words = ["씨발", "개새끼", "tlqkf", "애미", "ㅅㅂ", "ㅄ", "ㅂㅅ", "등신", "병신", "미친", "느금", "ㄴㄱㅁ", "좆", "ㅈ같", 'ㅈ됬', 'ㅈ됐', 'ㅈ댓', 'ㅈ됨', 'ㅈ됏','ㅈ됫','시발','ㄲㅈ','꺼져','새끼','ㄳㄲ','ㄱㅅㄲ', 'ㅅㄲ','창녀','걸레','남창','느개미','느개비','뒤져','닥쳐','ㄷㅊ','등신','똥꼬충','미치','ㅁㅊ','보전깨','피싸개','핏물싸개','뻐큐','fuck','sex','야스','tq','qt','rotorl','ac','쌍놈','쌍노무','쌍년','썅년','시팔',"씨팔",'염병','옘병','육변기','육시랄','존나','후장', '새기', 'ㅗㅗ', '씻발', '싯팔', '싯발', '씻팔', '보짓', '자짓', '앰창', '애비', '허벌', '조까', '7ㅐ', 'ㅅ발', 'ㅆ발','qudtls', '니앱', 'qt', , '야발', '챙녀', '꼬추', '걸래', 'bitch', '년아', '놈아', '얼싸', '쉬벌', '년이', '놈이', 'ㅗ', '십팔', '씹빨', '십발', '씌발', '🖕', 'ㅣ발','ㅂㅏㄹ', 'ㅏㄹ', '시이바', '씨이바', '씨이빠', '세기', '세끼', '🤏', '🤌', '👉👌', '소추', '대추', '시이발', '씨이발', 'ㅈ같', '느그매', 'qkf', '쒸발', '느거매', '느거배', '씨빨', 'ㅗ', 'ㅆ바', 'ㅆ발', 'ㅅ바', 'ㅅ발', 'ㅂ신', '족같', '젖', '좃', '좉', '좇', '줫', '줱', '줟', '졷', '섹스', 'tprtm', '븅인', '빙신', '비웅신', '비융신', 'ㅈ됨', 'ㅈ댐', 'ㅈ됌', '시벌', '씨벌', '싸발', '야스', '야추', '야발', '시바', '씨바', '씨파', 't발', 'tl', '|발', '|qkf', '이발', '븅신', '비응신', '융신', '응신', '웅신', 'ㄸ치','딸치','딸딸이', 'ㄸㄸ이', 'ㄸㄸㅇ', 'ㅐ미', '씨봐', '시봐', '봘', '붤', '씨불', '시불', 'ㄱ|', '77|', '77ㅣ', 'ㅓ미', '유두', '지랄', 'ㅈㄹ', 'ㄴㄱ', '뒤져', '뒤졌', '뒤졋', '뒤지', '뒤진', '근첩', '근근', '운지', '재기', '바닥딸', '벽딸'];
const activity_list = [
    {type:'WATCHING', message:'업데이트 노트'},
    {type:'PLAYING', message:'메이플 디렉팅'},
    {type:'LISTENING', message:'웡키 사운드'}
];
const { MessageEmbed } = require('discord.js');
const bot_profile = new MessageEmbed()
		.setColor('#f0808b')
		.setTitle('관리자 큐베쨩')
		.setURL('https://discord.com/api/oauth2/authorize?client_id=1005377197764259841&permissions=8&scope=bot%20applications.commands')
		.setAuthor({ name: 'Made by Hajun-Jo', iconURL: 'https://w.namu.la/s/dcbf94d7f9d2469c56298ee9c7f940fcd7f9eb40fd60d96e774045f23ddca050f8913861c0bcc55890a9bbfc0036257d07875fc7d5ec1d4cefebf10df23406a083e81b6e8780048f386da84dc0d58530d48e566b64c03ee5c6b7c015a68f97e6'})
		.setDescription('서버의 운영을 돕기 위해 개발되어 여러가지 기능을 포함합니다.\n아직 개발 단계이며 차후 더많은 기능을 포함할 예정입니다.')
		.setThumbnail('https://i.imgur.com/TeOgBAE.png')
		.addFields(
			{ name: '최근 업데이트 내역', value: '임베드가 추가되었습니다.\n상태 변화가 추가되었습니다.\n명령어가 추가되었습니다.' },
			{ name: '\u200B', value: '\u200B' },
			{ name: '기능1', value: '욕설 탐지', inline: true },
			{ name: '기능2', value: '상태 변화', inline: true },
			{ name: '기능3', value: '명령어 사용', inline: true },
		)
		.setImage('https://i.imgur.com/f6jLUAt.png')
		.setTimestamp()
		.setFooter({ text: '아직 베타 단계입니다!', iconURL: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU' });

var activity_sequence = 0;
var edit_text = "";

client.on('ready', () => { //실행되었을 때 호출
    console.log(`"${client.user.tag}"으로 로그인`);
    setInterval(() => { //7초 간격으로 호출, activity_list[activity_sequence] 상태로 변경
        if(activity_sequence < activity_list.length) {
            client.user.setActivity(activity_list[activity_sequence].message, {type:activity_list[activity_sequence].type});
            activity_sequence++;
        } else {
            activity_sequence = 0;
            client.user.setActivity(activity_list[activity_sequence].message, {type:activity_list[activity_sequence].type});
        }
    }, 7000);
});

client.on('messageCreate', msg => { //새로운 메세지를 감지했을 때 호출 
    if(msg.author.bot) return;
    if(msg.author.id === client.user.id) return; //메세지 작성자가 자신일 때 반환

    edit_text = msg.content.replace(/\@|\!|1|2|3|4|5|6|7|8|9|0|\?|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\;|\:|\,|\.|\/|\'|\"|\>|\<|\-|\_|\~|\`|\ㅛ|\ㅑ|\ㅔ|\ㅁ|\ㅇ|\ㅎ|\ㅏ|\ㅣ|\ㅋ|\ㅌ|\ㅊ|\ㅍ|\ㅠ|\ㅜ|\ㅡ|\ /g, "");
    //특수 문자 및 숫자 제거
    for(i=0; i < bad_words.length; i++) { //bad_words 배열의 문자가 있는지 확인
        if(edit_text.toLowerCase().indexOf(bad_words[i]) != -1) {
            msg.reply('괘씸한 새기들. 서버 닫아.');
            console.log(`[욕설의 사용으로 인한 호출] ${msg.author.username}(${msg.author.id}): ${msg.content}`);
            break;
        }
    }

    if(msg.content.indexOf('<@1005377197764259841>') != -1) {
		msg.reply({embeds:[bot_profile]});
    }
});

client.on('interactionCreate', async interaction => { //슬래쉬 명령어가 사용되었을 때, 호출
    if(!interaction.isCommand()) return;
	const { commandName } = interaction;
    if (commandName === '원기쨩') {
		await interaction.reply({embeds:[bot_profile]});
	}
});

client.login(process.env.TOKEN);
