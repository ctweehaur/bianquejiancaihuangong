const translationData = [
    {
        zhStructure: [
            {w: "扁鹊", p: "biǎn què"}, {w: "前来拜见", p: "qián lái bài jiàn"}, {w: "蔡桓公", p: "cài huán gōng"}, "，",
            {w: "在旁边站了一会儿", p: "zài páng biān zhàn le yí huì r"}, "。官方",
            {w: "扁鹊说", p: "biǎn què shuō"}, "：“", {w: "您的", p: "nín de"}, {w: "小病", p: "xiǎo bìng"},
            {w: "在皮肤纹理间", p: "zài pí fū wén lǐ jiān"}, "，", {w: "如果不及时医治", p: "bù rú guǒ jí shí yī zhì"}, "，",
            {w: "恐怕会", p: "kǒng pà huì"}, {w: "往深处发展", p: "wǎng shēn chù fā zhǎn"}, "。”",
            {w: "桓公回答说", p: "huán gōng huí dá shuō"}, "：“", {w: "我", p: "wǒ"}, {w: "没有病", p: "méi yǒu bìng"}, "。”"
        ],
        en: "Bian Que visited Duke Huan of Cai and stood nearby for a while. Bian Que said, 'You have a small sickness in your skin tissue. If not treated, it will go deeper.' The Duke replied, 'I am not sick.'"
    },
    {
        zhStructure: [
            {w: "扁鹊离开后", p: "biǎn què lí kāi hòu"}, "，", {w: "桓公说", p: "huán gōng shuō"}, "：“",
            {w: "医生就喜欢", p: "yī shēng jiù xǐ huan"}, {w: "给没病的人", p: "gěi méi bìng de rén"}, {w: "治病", p: "zhì bìng"}, "，",
            {w: "把这当成", p: "bǎ zhè dāng chéng"}, {w: "自己的功劳", p: "zì jǐ de gōng láo"}, "。”"
        ],
        en: "After Bian Que left, the Duke said, 'Doctors just love to treat healthy people so they can claim it as their own success.'"
    },
    {
        zhStructure: [
            {w: "过了十天", p: "guò le shí tiān"}, "，", {w: "扁鹊", p: "biǎn què"}, {w: "再次拜见", p: "zài cì bài jiàn"}, "，",
            {w: "说", p: "shuō"}, "：“", {w: "您的病", p: "nín de bìng"}, {w: "已经在肌肉皮肤里了", p: "yǐ jīng zài jī fū lǐ le"}, "，",
            {w: "不治的话", p: "bú zhì de huà"}, {w: "会更加严重", p: "huì gèng jiā yán zhòng"}, "。”",
            {w: "桓公不理睬他", p: "huán gōng bù lǐ cǎi tā"}, "，", {w: "扁鹊走后", p: "biǎn què zǒu hòu"}, "，",
            {w: "桓公又很不高兴", p: "huán gōng yòu hěn bù gāo xìng"}, "。"
        ],
        en: "Ten days later, Bian Que came again and said, 'Your sickness is now in your flesh. It will get worse if untreated.' The Duke ignored him and felt annoyed again."
    },
    {
        zhStructure: [
            {w: "又过了十天", p: "yòu guò le shí tiān"}, "，", {w: "扁鹊", p: "biǎn què"}, {w: "再次拜见", p: "zài cì bài jiàn"}, "，",
            {w: "说", p: "shuō"}, "：“", {w: "您的病", p: "nín de bìng"}, {w: "已经进入肠胃了", p: "yǐ jīng jìn rù cháng wèi le"}, "，",
            {w: "不治会", p: "bú zhì huì"}, {w: "陷得更深", p: "xiàn de gèng shēn"}, "。”",
            {w: "桓公依然不理睬", p: "huán gōng yī rán bù lǐ cǎi"}, "，", {w: "桓公心里", p: "huán gōng xīn lǐ"},
            {w: "更加不悦", p: "gèng jiā bú yuè"}, "。"
        ],
        en: "Another ten days passed, Bian Que visited again and said, 'Your sickness has reached your stomach and intestines.' The Duke still ignored him and grew angrier."
    },
    {
        zhStructure: [
            {w: "又过了十天", p: "yòu guò le shí tiān"}, "，", {w: "扁鹊", p: "biǎn què"}, {w: "远远看到", p: "yuǎn yuǎn kàn dào"},
            {w: "桓公", p: "huán gōng"}, "，", {w: "掉转头", p: "diào zhuǎn tóu"}, {w: "就快步跑开了", p: "jiù kuài bù pǎo kāi le"}, "。",
            {w: "桓公特意", p: "huán gōng tè yì"}, {w: "派人去问他原因", p: "pài rén qù wèn tā yuán yīn"}, "。"
        ],
        en: "Ten days later, Bian Que saw the Duke from a distance, turned around immediately, and ran away. The Duke sent a messenger to find out why."
    },
    {
        zhStructure: [
            {w: "扁鹊说", p: "biǎn què shuō"}, "：“", {w: "病在皮肤纹理", p: "bìng zài pí fū wén lǐ"}, "，",
            {w: "用热敷", p: "yòng rè fū"}, {w: "就能治好", p: "jiù néng zhì hǎo"}, "；",
            {w: "病在肌肉皮肤", p: "bìng zài jī fū"}, "，", {w: "针灸", p: "zhēn jiǔ"}, {w: "就能治好", p: "jiù néng zhì hǎo"}, "；",
            {w: "病在肠胃", p: "bìng zài cháng wèi"}, "，", {w: "服汤药", p: "fú tāng yào"}, {w: "就能治好", p: "jiù néng zhì hǎo"}, "；",
            {w: "但是一旦", p: "dàn shì yí dàn"}, {w: "深入骨髓", p: "shēn rù gǔ suǐ"}, "，",
            {w: "那是阎王管辖的范围了", p: "nà shì yán wáng guǎn xiá de fàn wéi le"}, "，",
            {w: "谁也没办法", p: "shéi yě méi fàn fǎ"}, "。"
        ],
        en: "Bian Que explained, 'Skin sickness can be cured by hot compresses; flesh sickness by acupuncture; stomach sickness by herbal soups. But once it reaches the bone marrow, it is controlled by Fate, and no one can save it.'"
    },
    {
        zhStructure: [
            {w: "现在", p: "xiàn zài"}, {w: "病在骨髓", p: "bìng zài gǔ suǐ"}, "，",
            {w: "所以我不再请求医治了", p: "suǒ yǐ wǒ bú zài qǐng qiú yī zhì le"}, "。”",
            {w: "过了五天", p: "guò le wǔ tiān"}, "，", {w: "桓公身体剧痛", p: "huán gōng shēn tǐ jù tòng"}, "，",
            {w: "派人寻找扁鹊", p: "pài rén xún zhǎo biǎn què"}, "，", {w: "扁鹊已经", p: "biǎn què yǐ jīng"},
            {w: "逃往秦国了", p: "táo wǎng qín guó le"}, "，", {w: "桓公于是死去了", p: "huán gōng yú shì sǐ qù le"}, "。"
        ],
        en: "Now it is in the bone marrow, so I did not ask to treat him. Five days later, the Duke felt severe pain and sent men to find Bian Que, but he had fled to Qin. The Duke then died."
    }
];
