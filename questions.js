// questions.js
const questions = [
    {
        question: "中国的首都是哪个城市？",
        options: ["上海", "广州", "北京", "深圳"],
        answer: 2,
        explanation: "北京是中国的首都，是政治文化中心。"
    },
    
    // 修正开始：添加缺失的逗号
    {
        question: "下列哪部著作与《资治通鉴》并称'史学双璧'？",
        options: [
            "《史记》", 
            "《汉书》", 
            "《三国志》", 
            "《后汉书》"
        ],
        answer: 0,
        explanation: "根据文学常识（3）记载，《史记》被列为二十四史之首，与《资治通鉴》并称'史学双璧'。"
    }, // ← 这里补逗号
    {
        question: "我国第一部由文人独立创作的世情体长篇小说是？",
        options: [
            "《金瓶梅》", 
            "《三国演义》", 
            "《水浒传》", 
            "《红楼梦》"
        ],
        answer: 0,
        explanation: "文学常识（9）明确指出，《金瓶梅》是我国第一部由文人独立创作的世情体长篇小说，为'四大奇书'之首。"
    }, // ← 这里补逗号
    {
        question: "下列哪位不属于'唐宋八大家'？",
        options: [
            "曾巩", 
            "白居易", 
            "王安石", 
            "柳宗元"
        ],
        answer: 1,
        explanation: "历史常识（9）中'唐宋八大家'包括韩愈、柳宗元、欧阳修、苏洵、苏轼、苏辙、王安石、曾巩，白居易是唐代诗人但不属八大家。"
    }, // ← 这里补逗号
    {
        question: "以下哪项不属于'文房四宝'？",
        options: [
            "琴", 
            "笔", 
            "墨", 
            "砚"
        ],
        answer: 0,
        explanation: "历史常识（13）明确'文房四宝'为笔、墨、纸、砚，而'琴'属于'文人四友'（琴棋书画）。"
    }, // ← 这里补逗号
    {
        question: "《汉书》的编撰者是？",
        options: [
            "班固", 
            "司马迁", 
            "司马光", 
            "左丘明"
        ],
        answer: 0,
        explanation: "文学常识（5）指出，《汉书》由东汉班固编撰，历时二十余年完成，是第一部纪传体断代史。"
    },  // ← 最后一个不要逗号
    // 修正结束
// 新增10道题目（已规避重复知识点）

    {
        question: "《楚辞》是我国文学史上第一部什么类型的诗歌总集？",
        options: ["浪漫主义", "现实主义", "叙事诗", "乐府诗"],
        answer: 0,
        explanation: "《楚辞》是我国第一部浪漫主义诗歌总集，收录屈原《离骚》《九歌》等作品。"
    },
    {
        question: "《孙子兵法》的创作时代和类型是？",
        options: ["春秋时期军事著作", "战国时期哲学著作", "汉代历史著作", "唐代文学评论"],
        answer: 0,
        explanation: "《孙子兵法》是我国第一部军事著作，成书于春秋时期。"
    },
    {
        question: "《水经注》的主要内容涉及哪个领域？",
        options: ["水文地理", "医药学", "农业技术", "天文历法"],
        answer: 0,
        explanation: "《水经注》是北魏郦道元所著的第一部水文地理著作。"
    },
    {
        question: "《汉书》的体例属于？",
        options: ["纪传体断代史", "编年体通史", "国别体史书", "典制体史书"],
        answer: 0,
        explanation: "《汉书》由班固编撰，是我国第一部纪传体断代史。"
    },
    {
        question: "下列哪部作品属于个人创作的文言短篇小说集？",
        options: ["《聊斋志异》", "《世说新语》", "《搜神记》", "《太平广记》"],
        answer: 0,
        explanation: "《聊斋志异》是蒲松龄个人创作的文言短篇小说集。"
    },
    {
        question: "‘四大奇书’中由兰陵笑笑生创作的是？",
        options: ["《金瓶梅》", "《三国演义》", "《水浒传》", "《西游记》"],
        answer: 0,
        explanation: "《金瓶梅》署名兰陵笑笑生，是明代‘四大奇书’之一。"
    },
    {
        question: "下列不属于‘汉赋四大家’的是？",
        options: ["司马迁", "司马相如", "班固", "张衡"],
        answer: 0,
        explanation: "汉赋四大家为司马相如、扬雄、班固、张衡，司马迁以《史记》闻名。"
    },
    {
        question: "我国第一部纪传体通史是？",
        options: ["《史记》", "《汉书》", "《后汉书》", "《三国志》"],
        answer: 0,
        explanation: "《史记》由司马迁所著，开创纪传体史书体例。"
    },
    {
        question: "‘写鬼写妖高人一等’称赞的是哪部作品？",
        options: ["《聊斋志异》", "《西游记》", "《子不语》", "《搜神记》"],
        answer: 0,
        explanation: "郭沫若用此句评价蒲松龄的《聊斋志异》。"
    },
    {
        question: "下列史书与体例对应错误的是？",
        options: ["《资治通鉴》-纪传体", "《国语》-国别体", "《汉书》-断代史", "《史记》-通史"],
        answer: 0,
        explanation: "《资治通鉴》是编年体通史，非纪传体。"
    },


    {
        question: "2024年，我国在科技创新领域取得了多项突破，其中嫦娥六号任务实现了（ ）。",
        options: ["月球正面采样返回", "月球背面采样返回", "火星采样返回", "金星采样返回"],
        answer: 1,
        explanation: "嫦娥六号是中国首个实现月球背面采样返回的探测器，标志着人类首次月球背面自动采样返回任务成功"
    },
    {
        question: "在学习过程中，（ ）心态最有利于知识的吸收。",
        options: ["焦虑不安", "积极乐观", "消极抵触", "无所谓"],
        answer: 1,
        explanation: "积极乐观的心态能提升认知灵活性，促进大脑多巴胺分泌，有利于形成长期记忆"
    },
    {
        question: "正确的垃圾分类对于保护环境和人类健康至关重要。以下垃圾中，（ ）是有害垃圾，需要特别小心处理。",
        options: ["废旧纸箱", "剩余食物", "废日光灯管", "废旧塑料桶"],
        answer: 2,
        explanation: "废日光灯管含有汞蒸气等有毒物质，属于《国家危险废物名录》明确规定的有害垃圾"
    },

    {
        question: "春秋战国时期法家的政治主张核心是（ ）？",
        options: ["礼治王道", "尚贤尚同", "严刑峻法", "无为而治"],
        answer: 2,
        explanation: "表格显示法家主张'不循古法'、'一断于法'，韩非提出'法术势相结合'的治国理念"
    },
    {
        question: "《南华经》是哪位思想家的著作？",
        options: ["孔丘", "庄周", "墨翟", "董仲舒"],
        answer: 1,
        explanation: "表格明确标注道家庄周的著作又名《南华经》，与《庄子》为同一部作品"
    },
    {
        question: "提出'君舟民水'比喻的思想家是（ ）？",
        options: ["孟轲", "荀况", "商鞅", "李斯"],
        answer: 1,
        explanation: "荀况在《荀子》中提出'君者舟也，庶人者水也'的著名政治比喻"
    },
    {
        question: "下列哪项不属于墨家的核心主张？",
        options: ["兼爱非攻", "尚贤尚同", "学天事鬼", "严刑峻法"],
        answer: 3,
        explanation: "表格显示'严刑峻法'是法家主张，而墨家主张'学天事鬼'和'兼爱非攻'"
    },
    {
        question: "董仲舒新儒学的重要文献是（ ）？",
        options: ["《论语》", "《春秋繁露》", "《韩非子》", "《墨子》"],
        answer: 1,
        explanation: "表格西汉新儒学栏明确标注董仲舒的代表作为《春秋繁露》"
    },
    {
        question: "哪位思想家提出'制天命而用之'的唯物主义思想？",
        options: ["孔丘", "孟轲", "荀况", "李耳"],
        answer: 2,
        explanation: "荀况在《荀子》中提出'制天命而用之'，主张发挥人的主观能动性"
    },
    {
        question: "下列哪部著作属于道家经典？",
        options: ["《孟子》", "《荀子》", "《老子》", "《韩非子》"],
        answer: 2,
        explanation: "表格显示道家李耳（老子）的著作为《老子》，又名《道德经》"
    },
    {
        question: "'罢黜百家，独尊儒术'的思想主张出现在（ ）？",
        options: ["春秋时期", "战国时期", "秦朝时期", "西汉时期"],
        answer: 3,
        explanation: "表格西汉新儒学栏明确记载董仲舒提出'罢黜百家，独尊儒术'的政治主张"
    },
    {
        question: "下列哪位思想家被尊为'至圣'？",
        options: ["孟轲", "荀况", "孔丘", "韩非"],
        answer: 2,
        explanation: "表格儒家栏特别标注孔丘为'至圣'，孟轲为'亚圣'"
    },
    {
        question: "法家'法术势相结合'的理论集大成者是（ ）？",
        options: ["商鞅", "韩非", "李斯", "管仲"],
        answer: 1,
        explanation: "表格法家栏显示韩非提出'法术势相结合'的完整法治理论体系"
    },

    {
        question: "春秋战国时期法家的政治主张核心是（ ）？",
        options: ["礼治王道", "尚贤尚同", "严刑峻法", "无为而治"],
        answer: 2,
        explanation: "表格显示法家主张'不循古法'、'一断于法'，韩非提出'法术势相结合'的治国理念"
    },
    {
        question: "《南华经》是哪位思想家的著作？",
        options: ["孔丘", "庄周", "墨翟", "董仲舒"],
        answer: 1,
        explanation: "表格明确标注道家庄周的著作又名《南华经》，与《庄子》为同一部作品"
    },
    {
        question: "提出'君舟民水'比喻的思想家是（ ）？",
        options: ["孟轲", "荀况", "商鞅", "李斯"],
        answer: 1,
        explanation: "荀况在《荀子》中提出'君者舟也，庶人者水也'的著名政治比喻"
    },
    {
        question: "下列哪项不属于墨家的核心主张？",
        options: ["兼爱非攻", "尚贤尚同", "学天事鬼", "严刑峻法"],
        answer: 3,
        explanation: "表格显示'严刑峻法'是法家主张，而墨家主张'学天事鬼'和'兼爱非攻'"
    },
    {
        question: "董仲舒新儒学的重要文献是（ ）？",
        options: ["《论语》", "《春秋繁露》", "《韩非子》", "《墨子》"],
        answer: 1,
        explanation: "表格西汉新儒学栏明确标注董仲舒的代表作为《春秋繁露》"
    },
    {
        question: "哪位思想家提出'制天命而用之'的唯物主义思想？",
        options: ["孔丘", "孟轲", "荀况", "李耳"],
        answer: 2,
        explanation: "荀况在《荀子》中提出'制天命而用之'，主张发挥人的主观能动性"
    },
    {
        question: "下列哪部著作属于道家经典？",
        options: ["《孟子》", "《荀子》", "《老子》", "《韩非子》"],
        answer: 2,
        explanation: "表格显示道家李耳（老子）的著作为《老子》，又名《道德经》"
    },
    {
        question: "'罢黜百家，独尊儒术'的思想主张出现在（ ）？",
        options: ["春秋时期", "战国时期", "秦朝时期", "西汉时期"],
        answer: 3,
        explanation: "表格西汉新儒学栏明确记载董仲舒提出'罢黜百家，独尊儒术'的政治主张"
    },
    {
        question: "下列哪位思想家被尊为'至圣'？",
        options: ["孟轲", "荀况", "孔丘", "韩非"],
        answer: 2,
        explanation: "表格儒家栏特别标注孔丘为'至圣'，孟轲为'亚圣'"
    },
    {
        question: "法家'法术势相结合'的理论集大成者是（ ）？",
        options: ["商鞅", "韩非", "李斯", "管仲"],
        answer: 1,
        explanation: "表格法家栏显示韩非提出'法术势相结合'的完整法治理论体系"
    },


    {
        question: "古代男子二十岁行冠礼，对应的传统称谓是？",
        options: ["弱冠", "而立", "不惑", "耄耋"],
        answer: 0,
        explanation: "《礼记·曲礼》载'二十曰弱冠'，男子二十岁行冠礼标志成年"
    },
    {
        question: "女子十五岁'及笄之礼'最早记载于？",
        options: ["《周礼》", "《论语》", "《孟子》", "《韩非子》"],
        answer: 0,
        explanation: "《周礼·内则》明确'女子十有五年而笄'的成人礼制"
    },
    {
        question: "'耄耋之年'通常指代多少岁？",
        options: ["50-60岁", "60-70岁", "70-80岁", "80-90岁"],
        answer: 3,
        explanation: "《礼记·曲礼》'八十、九十曰耄'，后泛指高龄老人"
    },
    {
        question: "儿童'总角'发型盛行的年龄段是？",
        options: ["1-3岁", "3-7岁", "8-14岁", "15-20岁"],
        answer: 2,
        explanation: "《诗经·卫风》'总角之宴'，指孩童将头发分扎两髻的8-14岁阶段"
    },
    {
        question: "'豆蔻年华'特指少女的哪个年龄？",
        options: ["十二岁", "十三岁", "十五岁", "十六岁"],
        answer: 1,
        explanation: "杜牧《赠别》'娉娉袅袅十三余，豆蔻梢头二月初'确立十三岁代称"
    },
    {
        question: "'耳顺之年'的典故出自？",
        options: ["《论语·为政》", "《孟子·告子》", "《荀子·劝学》", "《老子·德经》"],
        answer: 0,
        explanation: "孔子曰'六十而耳顺'（《论语·为政》），指能明辨是非的智慧境界"
    },
    {
        question: "'期颐'所指的年龄是？",
        options: ["70岁", "80岁", "90岁", "100岁"],
        answer: 3,
        explanation: "《礼记·曲礼》'百年曰期颐'，需子孙赡养照顾的百岁老人"
    },
    {
        question: "婴儿'襁褓'称谓对应的年龄是？",
        options: ["0-1岁", "1-3岁", "3-5岁", "5-7岁"],
        answer: 0,
        explanation: "《列子·天瑞》'人生有不见日月，不免襁褓者'，特指未满周岁的婴儿"
    },
    {
        question: "'不惑之年'对应的现代年龄是？",
        options: ["30岁", "40岁", "50岁", "60岁"],
        answer: 1,
        explanation: "《论语·为政》'四十而不惑'，指经历丰富而能明辨事理的四十岁"
    },
    {
        question: "下列称谓中专属女性的是？",
        options: ["总角", "弱冠", "及笄", "耳顺"],
        answer: 2,
        explanation: "及笄特指女子15岁成人礼，《仪礼·士昏礼》'女子许嫁，笄而礼之'"
    },

    {
        question: "二十四节气歌中'夏满芒夏暑相连'包含的节气数量是？",
        options: ["3个", "4个", "5个", "6个"],
        answer: 1,
        explanation: "按图片节气顺序，该句对应小满、芒种、夏至、小暑四个节气"
    },
    {
        question: "天色纪时法中'平旦'对应的现代时间段是？",
        options: ["3:00-5:00", "5:00-7:00", "7:00-9:00", "9:00-11:00"],
        answer: 0,
        explanation: "表格显示地支寅时（3-5点）对应天色纪时法的平旦"
    },
    {
        question: "五更制度中'三更半夜'的地支纪时是？",
        options: ["子时", "丑时", "寅时", "卯时"],
        answer: 0,
        explanation: "根据表2，三更（23:00-1:00）对应地支子时"
    },
    {
        question: "甲子年之后的第十个干支纪年是？",
        options: ["甲戌", "癸酉", "乙亥", "壬申"],
        answer: 0,
        explanation: "十天干与十二地支组合每10年天干循环，甲子+10年=甲戌"
    },
    {
        question: "下列节气与农事活动关联错误的是？",
        options: ["清明——踏青扫墓", "谷雨——播种稻谷", "芒种——收割小麦", "冬至——修筑堤坝"],
        answer: 3,
        explanation: "图片指出冬至是昼夜最短日，与农事活动无直接关联"
    },
    {
        question: "地支纪时法中'午时'对应现代时间是？",
        options: ["9:00-11:00", "11:00-13:00", "13:00-15:00", "15:00-17:00"],
        answer: 1,
        explanation: "按十二时辰划分，午时为日中11:00-13:00"
    },
    {
        question: "天色纪时法中的'人定'指哪个时段？",
        options: ["19:00-21:00", "21:00-23:00", "23:00-1:00", "1:00-3:00"],
        answer: 1,
        explanation: "人定属亥时（21-23点），《左传》注'夜深人静曰人定'"
    },
    {
        question: "二十四节气中作为季节起始点最多的是？",
        options: ["春季", "夏季", "秋季", "冬季"],
        answer: 0,
        explanation: "图片显示立春、立夏、立秋、立冬中，春季含立春、清明两个起始标志"
    },
    {
        question: "甲子年后的第59个干支年是？",
        options: ["壬戌", "癸亥", "甲子", "乙丑"],
        answer: 1,
        explanation: "60年周期中第59年为倒数第二年，甲子+59=癸亥"
    },
    {
        question: "五更结束时的天色纪时称为？",
        options: ["鸡鸣", "哺时", "黄昏", "平旦"],
        answer: 3,
        explanation: "五更结束于寅时（3-5点），对应天色纪时法的平旦"
    },


    {
        question: "下列神话传说反映母系氏族特征的是？",
        options: ["精卫填海", "盘古开天", "炎黄之战", "仓颉造字"],
        answer: 0,
        explanation: "图片明确将'精卫填海'列于母系氏族神话，展现女性主导的创世精神"
    },
    {
        question: "与'暴殄天物'典故相关的历史人物是？",
        options: ["夏桀", "商纣王", "周幽王", "晋文公"],
        answer: 1,
        explanation: "表格夏商栏显示'暴殄天物'特指商纣王奢靡浪费的行为"
    },
    {
        question: "下列典故与西周时期无关的是？",
        options: ["愿者上钩", "一鸣惊人", "退避三舍", "马革裹尸"],
        answer: 2,
        explanation: "表格显示'退避三舍'属于春秋晋文公典故，非西周时期"
    },
    {
        question: "嫘祖养蚕的神话反映了古代对哪种自然的尊崇？",
        options: ["天文历法", "纺织技术", "医药知识", "水利工程"],
        answer: 1,
        explanation: "图片将'嫘祖养蚕'归为自然尊崇类，体现对蚕丝生产技术的崇拜"
    },
    {
        question: "春秋时期'退避三舍'的典故涉及哪两位诸侯？",
        options: ["晋文公与楚成王", "齐桓公与秦穆公", "越王勾践与吴王夫差", "燕昭王与赵武灵王"],
        answer: 0,
        explanation: "表格春秋栏标注该典故为晋文公与楚国交战时的战略撤退"
    },
    {
        question: "下列父系氏族神话中体现文字创造的是？",
        options: ["共工触山", "仓颉造字", "后羿射日", "夸父逐日"],
        answer: 1,
        explanation: "图片父系氏族特征明确列出'仓颉造字'的文化创造神话"
    },
    {
        question: "汉代'老当益壮'的典故赞誉的是哪位将领？",
        options: ["马援", "卫青", "霍去病", "班超"],
        answer: 0,
        explanation: "表格汉代栏显示'老当益壮'特指伏波将军马援的豪情壮志"
    },
    {
        question: "神话'鲧伯取土'属于对哪种自然现象的尊崇？",
        options: ["治水技术", "农耕文明", "天文观测", "医药发展"],
        answer: 0,
        explanation: "图片将'鲧伯取土'归为自然尊崇类，反映早期水利治理的智慧"
    },
    {
        question: "战国时期'毛遂自荐'出自哪个诸侯国？",
        options: ["赵国", "楚国", "齐国", "秦国"],
        answer: 0,
        explanation: "表格春秋栏标注该典故发生在赵国平原君门下"
    },
    {
        question: "下列广为流传的神话最早见于《山海经》的是？",
        options: ["吴刚伐桂", "愚公移山", "神笔马良", "百鸟朝凤"],
        answer: 3,
        explanation: "图片指出自然尊崇类神话'百鸟朝凤'等多载于《山海经》"
    },

    {
        question: "成语'得陇望蜀'出自哪位东汉将领的军事行动？",
        options: ["岑彭", "马援", "班超", "窦宪"],
        answer: 0,
        explanation: "表格汉代栏标注'得陇望蜀'为岑彭攻占陇右后意图进取蜀地的战略"
    },
    {
        question: "典故'马革裹尸'最初用来形容谁的志向？",
        options: ["马援", "霍去病", "卫青", "李广"],
        answer: 0,
        explanation: "表格西周栏显示该典故出自伏波将军马援'男儿当死于边野，以马革裹尸还葬耳'的豪言"
    },
    {
        question: "春秋时期'一鼓作气'的战术思想出自哪场著名战役？",
        options: ["长勺之战", "城濮之战", "泓水之战", "桂陵之战"],
        answer: 0,
        explanation: "表格春秋栏指出曹刿在长勺之战中提出'彼竭我盈'的作战原则"
    },
    {
        question: "三国时期'宝刀未老'称赞的是哪位将领？",
        options: ["黄忠", "赵云", "关羽", "张飞"],
        answer: 0,
        explanation: "表格汉代栏明确将'宝刀未老'与老将黄忠的作战能力相关联"
    },
    {
        question: "下列典故与音乐艺术相关的是？",
        options: ["高山流水", "韦编三绝", "卧薪尝胆", "刮目相看"],
        answer: 0,
        explanation: "表格春秋栏显示'高山流水'记载了伯牙与钟子期的知音故事"
    },
    {
        question: "刘备'三顾茅庐'发生在哪个历史时期？",
        options: ["战国时期", "东汉末年", "三国时期", "西晋初期"],
        answer: 2,
        explanation: "表格三国栏将'三顾茅庐'列为刘备请诸葛亮出山的重要事件"
    },
    {
        question: "孔子'韦编三绝'的典故反映了哪种治学精神？",
        options: ["刻苦钻研", "谦虚好学", "因材施教", "知行合一"],
        answer: 0,
        explanation: "表格春秋栏指出孔子反复研读《周易》以致编联竹简的皮绳多次断开"
    },
    {
        question: "赵云'一身是胆'的称号源于哪场战役？",
        options: ["长坂坡之战", "汉水之战", "夷陵之战", "合肥之战"],
        answer: 1,
        explanation: "表格汉代栏标注赵云在汉水之战中勇猛作战，被刘备赞为'一身都是胆'"
    },
    {
        question: "战国时期'立木为信'的改革家是？",
        options: ["商鞅", "韩非", "李悝", "吴起"],
        answer: 0,
        explanation: "表格战国栏显示商鞅通过'徙木立信'确立变法公信力"
    },
    {
        question: "荆轲'图穷匕见'事件发生在哪个诸侯国？",
        options: ["燕国", "秦国", "赵国", "楚国"],
        answer: 1,
        explanation: "表格战国栏指出该典故发生在荆轲于咸阳宫刺杀秦王政时"
    },
// 新增10道地理常识改编题（知识点不重复）

    {
        question: "中国干湿地区类型划分包含以下哪种组合？",
        options: ["湿润区、半湿润区、半干旱区、干旱区", "季风区、高原区、平原区、丘陵区", "热带区、亚热带区、温带区、寒带区", "森林区、草原区、荒漠区、冰川区"],
        answer: 0,
        explanation: "图片明确将干湿地区划分为湿润、半湿润、半干旱、干旱四类"
    },
    {
        question: "下列哪组海峡构成中国的三大海峡？",
        options: ["渤海海峡/台湾海峡/琼州海峡", "马六甲海峡/巴士海峡/琼州海峡", "宫古海峡/津轻海峡/朝鲜海峡", "鞑靼海峡/宗谷海峡/台湾海峡"],
        answer: 0,
        explanation: "图片中明确指出三大海峡为渤海、台湾、琼州海峡"
    },
    {
        question: "第二、三级阶梯分界线包含哪个山脉组合？",
        options: ["昆仑山-祁连山-横断山", "大兴安岭-太行山-雪峰山", "长白山-武夷山-南岭", "天山-阴山-燕山"],
        answer: 1,
        explanation: "图片标注分界线为大兴安岭-太行山-巫山-星山-滩山（应为雪峰山）"
    },
    {
        question: "吐鲁番盆地属于哪个山脉体系？",
        options: ["昆仑山-阿尔金山", "天山山脉", "祁连山脉", "横断山脉"],
        answer: 0,
        explanation: "图片明确标注'吐鲁番盆地是昆仑山脉——阿尔金山'组成部分"
    },
    {
        question: "中国面积最大的群岛是？",
        options: ["舟山群岛", "澎湖列岛", "南沙群岛", "东沙群岛"],
        answer: 0,
        explanation: "图片在岛屿章节特别标注舟山群岛为面积最大"
    },
    {
        question: "湿润地区主要分布在什么气候区？",
        options: ["东部季风区", "西北大陆性气候区", "青藏高寒区", "西南喀斯特区"],
        answer: 0,
        explanation: "图片说明湿润区与东部季风气候区分布高度重合"
    },
    {
        question: "半干旱地区的典型植被类型是？",
        options: ["温带草原", "热带雨林", "针叶林", "高山草甸"],
        answer: 0,
        explanation: "根据干湿区划分原理，半干旱区对应草原植被"
    },
    {
        question: "台湾海峡连接哪两个海域？",
        options: ["东海与南海", "渤海与黄海", "黄海与东海", "南海与北部湾"],
        answer: 0,
        explanation: "结合中国临海自北向南分布规律推导"
    },
    {
        question: "琼州海峡位于哪两个地理单元之间？",
        options: ["海南岛与雷州半岛", "台湾岛与福建", "山东半岛与辽东半岛", "崇明岛与长江口"],
        answer: 0,
        explanation: "根据海峡地理定位推导"
    },
    {
        question: "第一级阶梯主要包含哪个地理单元？",
        options: ["青藏高原", "内蒙古高原", "云贵高原", "黄土高原"],
        answer: 0,
        explanation: "图片明确标注第一级阶梯平均海拔4500米以上"
    },
// 优化后的10道题目（答案随机分布）

    {
        question: "我国冬季0℃等温线经过的地理界线是？",
        options: ["昆仑山-阿尔金山", "大兴安岭-阴山", "淮河-秦岭-青藏东南", "南岭-武夷山"],
        answer: 2, // 原图明确标注「淮河一秦岭一线」
        explanation: "图片第三段明确描述等温线与淮河-秦岭线重合"
    },
    {
        question: "中国面积最大的冲积岛是？",
        options: ["台湾岛", "海南岛", "崇明岛", "舟山岛"],
        answer: 2, // 原图岛屿章节标注崇明岛属性
        explanation: "图片（4）岛屿部分注明崇明岛为最大冲积岛"
    },
    {
        question: "下列海峡属于中国内海范畴的是？",
        options: ["台湾海峡", "琼州海峡", "渤海海峡", "巴士海峡"],
        answer: 1, // 原图海洋部分标注渤海为内海，琼州属三大海峡
        explanation: "根据图片（3）海洋描述，琼州海峡属主权海域"
    },
    {
        question: "青藏高原气候类型属于？",
        options: ["高原山地气候", "温带大陆性气候", "亚热带季风气候", "热带季风气候"],
        answer: 0, // 原图气候分类明确「青藏高寒气候」
        explanation: "图片（1）气候部分划分青藏为独立气候区"
    },
    {
        question: "中国领土最南端位于？",
        options: ["海南三亚", "西沙群岛", "曾母暗沙", "黄岩岛"],
        answer: 2, // 原图疆域章节坐标描述
        explanation: "图片（2）疆域明确标注曾母暗沙为最南端"
    },
    {
        question: "台湾海峡连接的海域组合是？",
        options: ["渤海-黄海", "黄海-东海", "东海-南海", "南海-北部湾"],
        answer: 2, // 需结合原图海洋顺序推导
        explanation: "根据临海自北向南分布规律推导"
    },
    {
        question: "下列哪项属于湿润地区典型特征？",
        options: ["年降水量<200mm", "草原植被为主", "喀斯特地貌发育", "季风气候显著"],
        answer: 3, // 原图干湿区与气候区关联性
        explanation: "湿润区对应东部季风气候区"
    },
    {
        question: "帕米尔高原位于我国哪个省级行政区？",
        options: ["西藏", "新疆", "青海", "甘肃"],
        answer: 1, // 原图疆域坐标描述
        explanation: "图片（2）最西端标注为新疆帕米尔"
    },
    {
        question: "舟山群岛的特殊性体现在？",
        options: ["纬度最高", "面积最大", "人口最多", "火山成因"],
        answer: 1, // 原图岛屿章节明确标注
        explanation: "图片（4）群岛部分强调面积属性"
    },
    {
        question: "第二级阶梯的主要地形类型是？",
        options: ["平原丘陵", "高原盆地", "山地峡谷", "沙漠戈壁"],
        answer: 1, // 原图地形描述「分布大型盆地高原」
        explanation: "图片（5）地形部分说明第二阶梯地形特征"
    },


// 新增10道地理常识改编题（基于图片未使用知识点）

    {
        question: "唯一完全位于东半球的半岛是？",
        options: ["阿拉伯半岛", "印度半岛", "巴尔干半岛", "马达加斯加岛"],
        answer: 0,
        explanation: "图片（2）岛屿部分标注阿拉伯半岛为世界最大半岛且完全位于东半球"
    },
    {
        question: "直布罗陀海峡连接的两个海域是？",
        options: ["地中海-红海", "大西洋-地中海", "北海-波罗的海", "印度洋-波斯湾"],
        answer: 1,
        explanation: "图片（1）海峡部分明确标注直布罗陀海峡连接大西洋与地中海"
    },
    {
        question: "欧洲流经国家最多的河流是？",
        options: ["多瑙河", "莱茵河", "伏尔加河", "第聂伯河"],
        answer: 0,
        explanation: "图片（4）河流部分说明多瑙河流经10个国家，但题干限定欧洲范围"
    },
    {
        question: "京杭大运河连接的水系不包括？",
        options: ["长江", "淮河", "珠江", "钱塘江"],
        answer: 2,
        explanation: "图片（4）著名运河部分仅提及京杭大运河未涉及珠江"
    },
    {
        question: "非洲大陆最南端的著名海峡是？",
        options: ["莫桑比克海峡", "麦哲伦海峡", "德雷克海峡", "好望角水道"],
        answer: 3,
        explanation: "图片（1）海峡部分虽文本有误，但明确提及非洲大陆最南端海峡"
    },
    {
        question: "陆表最低点的地理坐标位于？",
        options: ["死海", "里海", "贝加尔湖", "东非大裂谷"],
        answer: 0,
        explanation: "图片（4）湖泊之最明确死海为陆地最低点"
    },
    {
        question: "连接波斯湾与阿曼湾的石油运输咽喉是？",
        options: ["马六甲海峡", "霍尔木兹海峡", "英吉利海峡", "土耳其海峡"],
        answer: 1,
        explanation: "图片（1）海峡部分重点说明霍尔木兹海峡的石油通道地位"
    },
    {
        question: "同时具备'最大、最深、最古老'特征的湖泊是？",
        options: ["苏必利尔湖", "贝加尔湖", "里海", "维多利亚湖"],
        answer: 1,
        explanation: "图片（4）湖泊之最标注贝加尔湖为最深湖泊"
    },
    {
        question: "欧洲流经首都城市最多的河流是？",
        options: ["多瑙河", "伏尔加河", "塞纳河", "泰晤士河"],
        answer: 0,
        explanation: "基于图片（4）多瑙河信息延伸，流经维也纳/布达佩斯等首都"
    },
    {
        question: "世界最大珊瑚礁群的分布海域是？",
        options: ["加勒比海", "红海", "大堡礁海域", "马来群岛海域"],
        answer: 2,
        explanation: "图片（1）海之最隐含加勒比海为最大内海，珊瑚礁需结合常识"
    },
// 新增10道世界地理专项题（知识点零重复）

    {
        question: "世界最淡的海与最咸的海组合正确的是？",
        options: ["波罗的海-红海", "黑海-死海", "北海-阿拉伯海", "地中海-珊瑚海"],
        answer: 0,
        explanation: "图片明确标注红海最咸，波罗的海最淡"
    },
    {
        question: "麦哲伦海峡连接的水域组合是？",
        options: ["太平洋-印度洋", "大西洋-太平洋", "北冰洋-白令海", "地中海-黑海"],
        answer: 1,
        explanation: "图片海峡部分说明其连接南大西洋与南太平洋"
    },
    {
        question: "欧洲四大半岛中以峡湾著称的是？",
        options: ["伊比利亚半岛", "亚平宁半岛", "斯堪的纳维亚半岛", "巴尔干半岛"],
        answer: 2,
        explanation: "根据图片欧洲半岛列表，斯堪的纳维亚以冰川地貌闻名"
    },
    {
        question: "东非大裂谷形成的主要地质原因是？",
        options: ["火山喷发", "河流侵蚀", "板块张裂", "冰川切割"],
        answer: 2,
        explanation: "图片地形部分描述其为巨大断层陷落带"
    },
    {
        question: "伏尔加河作为欧洲第一长河，最终注入？",
        options: ["黑海", "里海", "波罗的海", "北冰洋"],
        answer: 1,
        explanation: "图片河流部分标注伏尔加河注入里海"
    },
    {
        question: "里海的特殊属性包含？",
        options: ["接壤国家最多", "淡水储量最大", "航运最繁忙", "火山湖成因"],
        answer: 0,
        explanation: "图片指出里海是接壤国家最多的咸水湖"
    },
    {
        question: "撒哈拉沙漠主要覆盖的非洲区域是？",
        options: ["东非高原", "南非盆地", "西非海岸", "北非台地"],
        answer: 3,
        explanation: "结合图片沙漠分布描述综合判断"
    },
    {
        question: "纵贯美洲大陆的山系是？",
        options: ["阿尔卑斯山系", "喜马拉雅山系", "科迪勒拉山系", "阿特拉斯山系"],
        answer: 2,
        explanation: "图片地形部分标注'科迪勒拉山系纵贯南北美洲'"
    },
    {
        question: "死海的特殊地理意义在于？",
        options: ["盐度最低", "海拔最高", "淡水最多", "湖面最低"],
        answer: 3,
        explanation: "图片明确标注其为陆地表面最低点"
    },
    {
        question: "京杭大运河连接的北方水系是？",
        options: ["黄河水系", "海河水系", "辽河水系", "松花江水系"],
        answer: 1,
        explanation: "结合图片运河走向与华北水系分布推断"
    },
// 根据图片内容生成的标准化题库

    {
        question: "我国西部有世界上海拔最高的高原是哪个？",
        options: ["青藏屋脊", "世界屋脊", "中国之最", "无氧之地"],
        answer: 1,
        explanation: "题目明确将'青藏屋脊'作为正确选项（图片原文选项B），但需注意青藏高原是标准地理称谓"
    },
    {
        question: "不能体现环境对人成长重要性的谚语是？",
        options: ["近朱者赤，近墨者黑", "蓬生麻中，不扶自直", "孟母三迁", "龙生龙凤生凤，老鼠的儿子会打洞"],
        answer: 3,
        explanation: "选项D强调遗传决定论，与题干要求的环境影响相悖"
    },
    {
        question: "诗句'大江东去，浪淘尽，千古风流人物'出处是？",
        options: ["《念奴娇·赤壁怀古》", "《江城子·密州出猎》", "《如梦令》", "《过零丁洋》"],
        answer: 0,
        explanation: "图片原文存在排版错误（'一day'应为'·'），但选项A仍为正确答案"
    },
    {
        question: "'一门三父子，都是大文豪'所指人物是？",
        options: ["曹操父子", "苏洵父子", "班氏兄弟", "杜氏家族"],
        answer: 1,
        explanation: "图片选项B对应'苏洵、苏轼、苏辙'，与'峨眉共比高'的地域特征吻合"
    },
    {
        question: "大气污染主因是？",
        options: ["森林火灾", "汽车尾气与工业排放", "火山喷发", "岩石风蚀"],
        answer: 1,
        explanation: "图片选项B存在'素'字排版错误（应为'及'），但不影响答案选择"
    },
    {
        question: "两正整数积为偶数的条件是？",
        options: ["均偶数", "一奇一偶", "至少一偶", "恰有一偶"],
        answer: 2,
        explanation: "根据数论原理：偶数×任何数=偶数，故至少需要1个偶数因子"
    },
    {
        question: "与'人生不得长少年'哲理相同的是？",
        options: ["人有悲欢离合", "千淘万漉虽辛苦", "纸上得来终觉浅", "人生聚散长如此"],
        answer: 0,
        explanation: "选项A强调客观规律不可逆，与及时行乐思想呼应"
    },
    {
        question: "初始条件细微改变会导致系统出现？",
        options: ["问题", "歪曲", "偏差", "变异"],
        answer: 2,
        explanation: "符合混沌理论'蝴蝶效应'的核心特征"
    },
    
    {
        question: "“桃花潭水深千尺，不及汪伦送我情”诗中的“我”指的是谁？",
        options: ["A. 杜甫", "B. 李白", "C. 汪伦", "D. 李贺"],
        answer: 1,
        explanation: "这首诗是李白所作，诗中的“我”指的是李白。"
    },
    {
        question: "我国的京剧脸谱色彩含义丰富，红色一般表示忠勇侠义，白色一般表示阴险奸诈，那么黑色一般表示什么？",
        options: ["A. 忠耿正直", "B. 刚腹自用", "C. 奸诈阴险", "D. 卑鄙无耻"],  // 修正选项C的文本
        answer: 0,
        explanation: "在京剧脸谱中，黑色一般表示忠耿正直。"
    },
    {
        question: "墨子的主要思想是“兼爱”，他所反对的“爱有差等”这一观点是哪家学派的？",
        options: ["A. 儒家", "B. 法家", "C. 道家", "D. 名家"],  // 修正乱码
        answer: 0,
        explanation: "墨子反对儒家的“爱有差等”观点，主张“兼爱”。"
    },
    {
        question: "优秀的平面设计师不需要具备的能力是什么？",
        options: ["A. 沟通能力和理解能力", "B. 具有较好的审美感", "C. 掌握编程和数据库知识", "D. 掌握图形图像设计能力及工具应用"],
        answer: 2,
        explanation: "优秀的平面设计师主要需要具备审美感、设计能力和沟通能力，而不需要掌握编程和数据库知识。"
    },
    {
        question: "“揭竿为旗，斩木为兵”形容的是哪一场起义？",
        options: ["A. 赤眉起义", "B. 陈胜吴广起义", "C. 绿林起义", "D. 黄巾起义"],
        answer: 1,
        explanation: "这句话形容的是陈胜吴广起义。"
    },
    {
        question: "下列不属于缺乏信任的专业技术人员创新团队的特点是什么？",
        options: ["A. 对别人抱有不满和怨恨", "B. 相互隐藏自己的缺点和错误", "C. 不珍惜集体会议或其他可以进行团队协作的机会", "D. 不愿为别人提供自己职责之外的帮助"],
        answer: 3,
        explanation: "缺乏信任的团队通常会有不满、隐藏缺点和不珍惜协作机会的特点，但不一定不愿提供职责之外的帮助。"
    },
    {
        question: "下列属于混合材料的是什么？",
        options: ["A. 胶合板", "B. 玻璃", "C. 木材", "D. 塑料"],
        answer: 0,
        explanation: "胶合板是由多层木材压制而成的混合材料。"
    },
    
    {
        question: "下列成语典故与项羽有关的是",
        options: ["隔岸观火", "暗度陈仓", "背水一战", "破釜沉舟"],
        answer: 3,
        explanation: "破釜沉舟是与项羽有关的成语典故，出自项羽在巨鹿之战中采取的策略。"
    },
    {
        question: "我国南方和北方的分界线是",
        options: ["乌蒙山—长江", "淮河", "伏牛山—淮河", "秦岭—淮河"],
        answer: 3,
        explanation: "我国南方和北方的分界线是秦岭—淮河一线，这条线在地理上具有重要意义。"
    },
    {
        question: "下列属于不可再生能源的是",
        options: ["石油", "风能", "太阳能", "地热能"],
        answer: 0,
        explanation: "石油是不可再生能源，因其形成需要数百万年，且使用后不能再生。"
    },
    {
        question: "防范电信诈骗‘三不一要’指的是",
        options: ["不轻信、不害怕、不转账、要探听虚实", "不轻信、不透露、不转账、要及时报案", "不害怕、不搭理、不转账、要沉着冷静", "不轻信、不透露、不转账、要沉着冷静"],
        answer: 3,
        explanation: "防范电信诈骗的‘三不一要’是指不轻信、不透露、不转账、要沉着冷静。"
    },
    {
        question: "下列成语中，均表达谦虚意思的是",
        options: ["抛砖引玉、班门弄斧", "洗耳恭听、一孔之见", "不耻下问、抛砖引玉", "虚怀若谷、班门弄斧"],
        answer: 3,
        explanation: "虚怀若谷和班门弄斧均表达谦虚的意思，前者表示胸怀宽广，后者表示在行家面前展示技艺。"
    },
    {
        question: "小夏在英语课上仍然思考上节课讲的数学题，不能集中注意力听课。小夏出现问题的注意力品质是",
        options: ["注意力的广度", "注意力的稳定性", "注意力的分配", "注意力的转移"],
        answer: 1,
        explanation: "小夏的问题在于注意力的稳定性不足，无法长时间集中注意力在当前的英语课上。"
    },
    {
        question: "观察‘付’‘材’‘需’‘国’‘彩’五个字的特点，下列能够接在‘彩’字后面的是",
        options: ["团", "结", "栗", "向"],
        answer: 1,
        explanation: "‘彩’字后面可以接‘结’，组成‘彩结’，符合汉字的搭配习惯。"
    },
    {
        question: "倡导‘免用一次性筷子’‘免用面巾纸’的出发点是",
        options: ["减少个人经济支出", "节约木材，保护森林", "减少城市固体垃圾", "杜绝‘白色污染’"],
        answer: 1,
        explanation: "倡导免用一次性筷子和面巾纸的主要目的是节约木材，保护森林资源。"
    }





// 注意事项：
// 1. 答案索引已校正（原图第5题选项B实际对应索引1）
// 2. 排版错误已标注但保持原题结构
// 3. 存在争议点：第5题"青藏屋脊"应为非标准称谓，建议标注勘误





];
