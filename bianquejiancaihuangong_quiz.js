const quizQuestions = [
    {
        id: 1,
        textStructure: [{w: "文中", p: "wén zhōng"}, "“", {w: "望桓侯而还走", p: "wàng huán hòu ér xuán zǒu"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "走", p: "zǒu"}, "”", {w: "字正确的", p: "zì zhèng què de"}, {w: "古义", p: "gǔ yì"}, {w: "是", p: "shì"}, "？"],
        en: "What is the original classical meaning of the word 'zǒu' in this text?",
        options: [
            { textStructure: [{w: "散步", p: "sàn bù"}, "、", {w: "慢慢移动", p: "màn màn yí dòng"}], en: "To stroll or walk slowly.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这不符合", p: "zhè bù fú hé"}, {w: "扁鹊发现", p: "biǎn què fā xiàn"}, {w: "没救后", p: "méi jiù hòu"}, {w: "害怕的", p: "hài pà de"}, {w: "紧急语境", p: "jǐn jí yǔ jìng"}, "。"], explanationEn: "Incorrect. Walking slowly does not fit the emergency when Bian Que realized the illness was fatal." },
            { textStructure: [{w: "快步跑", p: "kuài bù pǎo"}, "、", {w: "逃跑", p: "táo pǎo"}], en: "To run away quickly or flee.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "古汉语中", p: "gǔ hàn yǔ zhōng"}, "“", {w: "走", p: "zǒu"}, "”", {w: "的意思是", p: "de yì si shì"}, {w: "跑", p: "pǎo"}, "，“", {w: "步行", p: "bù xíng"}, "”", {w: "用", p: "yòng"}, "“", {w: "步", p: "bù"}, "”", {w: "或", p: "huò"}, "“", {w: "履", p: "lǚ"}, "”", {w: "表示", p: "biǎo shì"}, "。"], explanationEn: "Correct. In classical Chinese, 'zǒu' means to run, while modern 'walk' was expressed by other characters like 'bù'." },
            { textStructure: [{w: "离开", p: "lí kāi"}, "、", {w: "辞职", p: "cí zhí"}], en: "To leave or resign from office.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "词义", p: "cí yì"}, {w: "完全对不上", p: "wán quán duì bú shàng"}, "。"], explanationEn: "Incorrect. This meaning is completely unrelated to his physical action." },
            { textStructure: [{w: "死掉", p: "sǐ diào"}, "（", {w: "去世", p: "qù shì"}, "）"], en: "To pass away or expire.", correct: false, explanationStructure: [{w: "胡说", p: "hú shuō"}, "，", {w: "扁鹊当时", p: "biǎn què dāng shí"}, {w: "还活着", p: "hái huó zhe"}, "。"], explanationEn: "Incorrect. Bian Que was running to save his own life, he did not die here." }
        ]
    },
    {
        id: 2,
        textStructure: [{w: "蔡桓公", p: "cài huán gōng"}, {w: "之所以", p: "zhī suǒ yǐ"}, {w: "病死", p: "bìng sǐ"}, "，", {w: "用一个", p: "yòng yí gè"}, {w: "著名的", p: "zhù míng de"}, {w: "华人成语", p: "huá rén chéng yǔ"}, {w: "来概括", p: "lái gài kuò"}, {w: "他的行为", p: "tā de xíng wéi"}, {w: "是", p: "shì"}, "？"],
        en: "Which famous idiom best describes Duke Huan's fatal behavior?",
        options: [
            { textStructure: [{w: "亡羊补牢", p: "wáng yáng bǔ láo"}], en: "Mending the pen after the sheep are lost.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "桓公最后", p: "huán gōng zuì hòu"}, {w: "没有做出", p: "méi yǒu zuò chū"}, {w: "有效的", p: "yǒu xiào de"}, {w: "挽救措施", p: "wǎn jiù cuò shī"}, "。"], explanationEn: "Incorrect. He did not make any useful repairs or corrections before it was too late." },
            { textStructure: [{w: "讳疾忌医", p: "huì jí jì yī"}], en: "Hiding one's illness and avoiding doctors.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "比喻怕人", p: "bǐ yù pà rén"}, {w: "批评而", p: "pī píng ér"}, {w: "掩饰错误", p: "yǎn shì cuò wù"}, "，", {w: "不愿接受", p: "bú yuàn jiē shòu"}, {w: "劝告", p: "quàn gào"}, "。"], explanationEn: "Correct. 'Huì jí jì yī' means hiding problems and refusing professional help because of pride, leading to total failure." },
            { textStructure: [{w: "画蛇添足", p: "huà shé tiān zú"}], en: "Drawing a snake and adding feet.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这指的是", p: "zhè zhǐ shì"}, {w: "多此一举", p: "duō cǐ yì jǔ"}, "，", {w: "跟故事", p: "gēn gù shì"}, {w: "完全无关", p: "wán quán wú guān"}, "。"], explanationEn: "Incorrect. This means doing unnecessary extra work, which does not apply here." },
            { textStructure: [{w: "守株待兔", p: "shǒu zhū dài tù"}], en: "Waiting by the stump for a rabbit.", correct: false, explanationStructure: [{w: "完全偏离", p: "wán quán piān lí"}, {w: "故事情节", p: "gù shì qíng jié"}, "。"], explanationEn: "Incorrect. This means waiting foolishly for luck without putting in hard work." }
        ]
    },
    {
        id: 3,
        textStructure: [{w: "关于", p: "guān yú"}, {w: "通假字", p: "tōng jiǎ zì"}, "“", {w: "还走", p: "xuán zǒu"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "还", p: "xuán"}, "”", {w: "字，", "下列"}, {w: "说明正确", p: "shuō míng zhèng què"}, {w: "的是", p: "de shì"}, "？"],
        en: "Which instruction about the loan character '还' (xuán) is correct?",
        options: [
            { textStructure: [{w: "读作", p: "dú zuò"}, " hái，", {w: "意思是", p: "yì si shì"}, {w: "还有", p: "hái yǒu"}], en: "Pronounced 'hái', meaning 'still'.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "带入文句", p: "dài rù wén jù"}, {w: "语意完全", p: "yǔ yì wán quán"}, {w: "无法通顺", p: "wú fǎ tōng shùn"}, "。"], explanationEn: "Incorrect. This modern reading makes the classical sentence totally meaningless." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " xuán，", {w: "通", p: "tōng"}, "“", {w: "旋", p: "xuán"}, "”，", {w: "意思是", p: "yì si shì"}, {w: "掉转", p: "diào zhuǎn"}, {w: "身体", p: "shēn tǐ"}], en: "Pronounced 'xuán', meaning to turn around instantly.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "指扁鹊", p: "zhǐ biǎn què"}, {w: "一看到", p: "yí kàn dào"}, {w: "桓公就", p: "huán gōng jiù"}, {w: "转身快跑", p: "zhuǎn shēn kuài pǎo"}, "。"], explanationEn: "Correct. It serves as a phonetic loan character for '旋', meaning to turn right around to flee." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " huán，", {w: "意思是", p: "yì si shì"}, {w: "归还", p: "guī huán"}, {w: "借的钱", p: "jiè de qián"}], en: "Pronounced 'huán', meaning to return borrowed money.", correct: false, explanationStructure: [{w: "字意", p: "zì yì"}, {w: "毫无逻辑", p: "háo wú luó jí"}, "。"], explanationEn: "Incorrect. This meaning is completely absurd in a medical story." },
            { textStructure: [{w: "读作", p: "dú zuò"}, " fǎn，", {w: "同", p: "tóng"}, "“", {w: "返", p: "fǎn"}, "”"], en: "Pronounced 'fǎn', same as '返'.", correct: false, explanationStructure: [{w: "把别的课文", p: "bǎ bié de kè wén"}, {w: "记混淆了", p: "jì hùn xiáo le"}, "。"], explanationEn: "Incorrect. You are confusing this with a word from the 'Zengzi' text." }
        ]
    },
    {
        id: 4,
        textStructure: [{w: "根据", p: "gēn jù"}, {w: "扁鹊的", p: "biǎn què de"}, {w: "台词", p: "tái cí"}, "，", {w: "当小病", p: "dāng xiǎo bìng"}, {w: "处于", p: "chǔ yú"}, "“", {w: "肌肤", p: "jī fū"}, "”", {w: "层级时", p: "céng jí shí"}, "，", {w: "中医", p: "zhōng yī"}, {w: "最适合", p: "zuì shì hé"}, {w: "运用的", p: "yùn yòng de"}, {w: "疗法是", p: "liáo fǎ shì"}, "？"],
        en: "According to Bian Que, which therapy is best when the illness is in the 'flesh'?",
        options: [
            { textStructure: [{w: "汤熨", p: "tàng wèi"}, "（", {w: "药热敷", p: "yào rè fū"}, "）"], en: "Hot compresses.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，“", {w: "汤熨", p: "tàng wèi"}, "”", {w: "是用来治疗", p: "shì yòng lái zhì liáo"}, {w: "皮肤腠理", p: "pí fū còu lǐ"}, {w: "最浅层的病", p: "zuì qiǎn céng de bìng"}, "。"], explanationEn: "Incorrect. Hot compresses are for the shallowest skin tissue layer only." },
            { textStructure: [{w: "针石", p: "zhēn shí"}, "（", {w: "针灸和刮痧刺穴", p: "zhēn jiǔ hé guā shā cì xué"}, "）"], en: "Acupuncture and stone needles.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "在肌肤，针石之所及也", p: "zài jī fū zhēn shí zhī suǒ jí yě"}, "”", {w: "属于", p: "shǔ yú"}, {w: "第二层", p: "dì èr céng"}, {w: "医疗手段", p: "yī liáo shǒu duàn"}, "。"], explanationEn: "Correct. Bian Que stated that acupuncture ('针石') is effective for flesh-level illnesses." },
            { textStructure: [{w: "火齐", p: "huǒ jì"}, "（", {w: "喝药汤剂", p: "hē yào tāng jì"}, "）"], en: "Drinking hot herbal soups.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "汤药", p: "tāng yào"}, {w: "是用来", p: "shì yòng lái"}, {w: "对付肠胃", p: "duì fù cháng wèi"}, {w: "深层疾病的", p: "shēn céng jí bìng de"}, "。"], explanationEn: "Incorrect. Herbal soups are used once the disease moves inside the stomach and intestines." },
            { textStructure: [{w: "直接放弃", p: "zhí jiē fàng qì"}, "，", {w: "准备后事", p: "zhǔn bèi hòu shì"}], en: "Give up entirely and prepare for the funeral.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是病在", p: "zhè shì bìng zài"}, {w: "骨髓时的", p: "gǔ suǐ shí de"}, {w: "绝望情况", p: "jué wàng qíng kuàng"}, "。"], explanationEn: "Incorrect. Giving up is only for the final bone marrow stage." }
        ]
    },
    {
        id: 5,
        textStructure: [{w: "扁鹊", p: "biǎn què"}, {w: "最后", p: "zuì hòu"}, {w: "为什么要", p: "wèi shén me yào"}, {w: "逃往秦国", p: "táo wǎng qín guó"}, "？"],
        en: "Why did Bian Que eventually flee to the State of Qin?",
        options: [
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "秦国给他的", p: "qín guó gěi tā de"}, {w: "薪水和福利", p: "xīn shuǐ hé fú lì"}, {w: "更高", p: "gèng gāo"}], en: "Because Qin offered him a higher salary and benefits.", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "他逃跑是", p: "táo pǎo shì"}, {w: "为了保命", p: "wèi le bǎo mìng"}, "，", {w: "不是为了", p: "bú shì wèi le"}, {w: "跳槽赚钱", p: "tiào cáo zhuàn qián"}, "。"], explanationEn: "Incorrect. He fled to save his life, not for a better paying job." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "桓公病入骨髓", p: "huán gōng bìng rù gǔ suǐ"}, "，", {w: "无药可救", p: "wú yào kě jiù"}, "，", {w: "留下来", p: "liú xià lái"}, {w: "会被治罪处死", p: "huì bèi zhì zuì chǔ sǐ"}], en: "Because the Duke was dying, and staying meant execution.", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "古代伴君如伴虎", p: "gǔ dài bàn jūn rú bàn hǔ"}, "，", {w: "国君死后", p: "guó jūn sǐ hòu"}, {w: "太医往往", p: "tài yī wǎng wǎng"}, {w: "会被无辜", p: "huì bèi wú gū"}, {w: "陪葬或杀头", p: "péi zàng huò shā tóu"}, "。"], explanationEn: "Correct. The Duke's disease was past cure. If Bian Que stayed, the royal family would execute him for failing to save the ruler." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "他想去秦国", p: "tā xiǎng qù qín guó"}, {w: "旅游度假", p: "lǚ yóu dù jià"}], en: "Because he wanted to take a holiday in Qin.", correct: false, explanationStructure: [{w: "开玩笑", p: "kāi wán xiào"}, "，", {w: "当时的形势", p: "dāng shí de xíng shì"}, {w: "极其危急", p: "jí qí wēi jí"}, "。"], explanationEn: "Incorrect. The situation was dangerous; he was escaping, not traveling for fun." },
            { textStructure: [{w: "因为", p: "yīn wèi"}, {w: "蔡桓公", p: "cài huán gōng"}, {w: "写信", p: "xiě xìn"}, {w: "驱逐他", p: "qū zhú tā"}, {w: "出境", p: "chū jìng"}], en: "Because Duke Huan wrote a letter to banish him.", correct: false, explanationStructure: [{w: "内容不符", p: "nèi róng bù fú"}, "，", {w: "桓公最后", p: "huán gōng zuì hòu"}, {w: "还在派人", p: "hái zài pài rén"}, {w: "求他治病", p: "qiú tā zhì bìng"}, "。"], explanationEn: "Incorrect. The Duke was actually searching for him to beg for treatment at the end." }
        ]
    }
];
