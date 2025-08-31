'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, Scale, Users, Target, Shield, Heart, Star } from 'lucide-react';

interface ChartItem {
  id: string;
  title: string;
  urduTitle?: string;
  description?: string;
  urduDescription?: string;
  ayah?: string;
  ayahUrdu?: string;
  hadees?: string;
  hadeesUrdu?: string;
  children?: ChartItem[];
  color: string;
  icon?: React.ReactNode;
}

const chartData: ChartItem[] = [
  {
    id: 'sharia',
    title: 'Adherence to Sharia',
    urduTitle: 'پابندی شریعت',
    description: 'Continuous Struggle (Jihad) for Adherence to Sharia - This encompasses all aspects of Islamic law and practice, including acts of worship, social interactions, and personal conduct. It requires conscious effort to fulfill religious obligations while avoiding forbidden actions.',
    urduDescription: 'شریعت کی پابندی کے لیے مسلسل جدوجہد (جہاد) - یہ اسلامی قانون اور عمل کے تمام پہلوؤں کو شامل کرتا ہے، جس میں عبادات، سماجی تعلقات اور ذاتی رویہ شامل ہیں۔ اس کے لیے مذہبی فرائض کی ادائیگی اور ممنوعہ اعمال سے بچنے کے لیے شعوری کوشش درکار ہے۔',
    ayah: `يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ - "O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy." (Quran 2:208)`,
    ayahUrdu: `اے ایمان والو! اسلام میں پورے کے پورے داخل ہو جاؤ اور شیطان کے قدموں کی پیروی نہ کرو۔ بےشک وہ تمہارا کھلا دشمن ہے۔`,
    hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ أَطَاعَنِي فَقَدْ أَطَاعَ اللَّهَ، وَمَنْ عَصَانِي فَقَدْ عَصَى اللَّهَ" - "Whoever obeys me has obeyed Allah, and whoever disobeys me has disobeyed Allah." (Bukhari: 2957, Muslim: 1840)`,
    hadeesUrdu: `جو میری اطاعت کرے گا اس نے اللہ کی اطاعت کی، اور جو میری نافرمانی کرے گا اس نے اللہ کی نافرمانی کی۔`,
    color: 'bg-blue-500',
    icon: <Shield className="w-5 h-5" />,
    children: [
      {
        id: 'worship',
        title: 'Worship / Rights of Allah',
        urduTitle: 'عبادات / حقوق الله',
        description: 'Acts of Worship (Ibadat) which are Rights of Allah (Huqooq Allah), meaning conscious observance of performing obligations (Faraiz) and duties (Wajibat) and abstaining from forbidden (Haram) and disliked (Makroohaat) things.',
        urduDescription: 'عبادات (حقوق اللہ) - اللہ کے حقوق کی ادائیگی، جس میں فرائض و واجبات کی شعوری پابندی اور حرام و مکروہات سے اجتناب شامل ہے۔',
        ayah: `وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ - "And I did not create the jinn and mankind except to worship Me." (Quran 51:56)`,
        ayahUrdu: 'اور میں نے جنات اور انسانوں کو صرف اپنی عبادت کے لیے پیدا کیا ہے۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ" - "Allah said: 'Whoever shows enmity to a friend of Mine, I will declare war against him. My servant does not draw near to Me with anything more beloved to Me than the religious duties I have obligated upon him.'" (Bukhari: 6502)`,
        hadeesUrdu: 'اللہ تعالیٰ فرماتا ہے: "جس نے میرے کسی دوست سے دشمنی کی، میں اس کے خلاف اعلانِ جنگ کرتا ہوں۔ اور میرا بندہ جن چیزوں کے ذریعے میرا قرب چاہتا ہے، ان میں سب سے زیادہ پسندیدہ وہ ہیں جو میں نے اس پر فرض کی ہیں۔"',
        color: 'bg-blue-400',
        children: [
          {
            id: 'obligations',
            title: 'Fulfillment of Obligations and Duties',
            urduTitle: 'فرائض و واجبات کی ادائیگی',
            description: 'Conscious observance of performing obligations (Faraiz) and duties (Wajibat) as prescribed by Islamic law. This includes daily prayers, fasting, zakat, and other mandatory religious practices.',
            ayah: `حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ - "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient." (Quran 2:238)`,
            ayahUrdu: 'نمازوں کی حفاظت کرو اور درمیانی نماز کی بھی اور اللہ کے لیے عاجزی کے ساتھ کھڑے ہو۔',
            hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ، فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ" - "The first thing for which a person will be brought to account on the Day of Resurrection will be his prayer. If it is complete, he will be successful and prosper, and if it is incomplete, he will fail and lose." (Abu Dawud: 864, Tirmidhi: 413)`,
            hadeesUrdu: 'بےشک قیامت کے دن بندے کے اعمال میں سب سے پہلے اس کی نماز کا حساب لیا جائے گا۔ اگر وہ درست ہوئی تو وہ کامیاب اور کامران ہوگا، اور اگر خراب ہوئی تو وہ ناکام اور خسارے میں رہے گا۔',
            color: 'bg-blue-300'
          },
          {
            id: 'avoidance',
            title: 'Avoidance of Forbidden and Disliked Things',
            urduTitle: 'حرام و مکروہات سے اجتناب',
            description: 'Conscious abstention from forbidden (Haram) and disliked (Makroohaat) things as defined by Islamic law. This includes avoiding prohibited foods, actions, and behaviors.',
            ayah: `وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ - "And do not approach immoralities - what is apparent of them and what is concealed." (Quran 6:151)`,
            ayahUrdu: 'اور بےحیائی کے کاموں کے قریب نہ جاؤ، خواہ وہ ظاہر ہوں یا پوشیدہ۔',
            hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ حَرَّمَ الْخَمْرَ وَثَمَنَهَا، وَحَرَّمَ الْمَيْتَةَ وَثَمَنَهَا، وَحَرَّمَ الْخِنْزِيرَ وَثَمَنَهُ" - "Allah has forbidden wine and its price, dead meat and its price, and pork and its price." (Abu Dawud: 3484)`,
            hadeesUrdu: 'بےشک اللہ نے شراب اور اس کی قیمت کو حرام کیا ہے، اور مردار اور اس کی قیمت کو حرام کیا ہے، اور سور اور اس کی قیمت کو حرام کیا ہے۔',
            color: 'bg-blue-300'
          }
        ]
      },
      {
        id: 'dealings',
        title: 'Dealings / Rights of Servants',
        urduTitle: 'معاملات / حقوق العباد',
        description: 'Dealings/Transactions (Muamalat) which are simultaneously Limits of Allah (Hudood Allah) and Rights of Servants (Huqooq ul Ibad). This includes proper social conduct, financial dealings, and interpersonal relationships.',
        urduDescription: 'معاملات (حقوق العباد) - اللہ کی حدود اور بندوں کے حقوق، جس میں سماجی تعلقات، مالی معاملات اور انسانی روابط شامل ہیں۔',
        ayah: `إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَالْبَغْيِ ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ - "Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression. He admonishes you that perhaps you will be reminded." (Quran 16:90)`,
        ayahUrdu: 'بےشک اللہ عدل اور احسان کا حکم دیتا ہے اور رشتہ داروں کو دینے کا، اور بےحیائی اور برے کام اور سرکشی سے منع کرتا ہے۔ وہ تمہیں نصیحت کرتا ہے تاکہ تم یاد رکھو۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لِأَخِيهِ مِنْ عِرْضِهِ أَوْ شَيْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ قَبْلَ أَنْ لَا يَكُونَ دِينَارٌ وَلَا دِرْهَمٌ" - "Whoever has wronged his brother with regard to his honor or anything else, let him seek his forgiveness today, before there will be no dinar or dirham." (Bukhari: 2449)`,
        hadeesUrdu: 'جس کے پاس اپنے بھائی کی طرف سے کوئی ظلم ہو، خواہ اس کی عزت کا ہو یا کسی اور چیز کا، تو آج ہی اس سے معافی مانگ لے، اس سے پہلے کہ نہ دینار ہوں گے نہ درہم۔',
        color: 'bg-blue-400',
        children: [
          {
            id: 'halal-earnings',
            title: 'Contentment with Halal and Pure Earnings',
            urduTitle: 'معاش میں حلال و طیب پر اکتفا',
            description: 'Regarding one\'s livelihood, to be content and suffice with what is lawful (Halal) and pure (Tayyib). This ensures that one\'s income and sustenance come from permissible sources.',
            urduDescription: 'اپنی معاش کے حوالے سے حلال و طیب پر اکتفاء و قناعت کرنا۔',
                    ayah: `يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ - "O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy." (Quran 2:168)`,
            ayahUrdu: 'اے لوگو! زمین میں جو حلال اور پاک چیزیں ہیں ان میں سے کھاؤ اور شیطان کے قدموں کی پیروی نہ کرو۔ بےشک وہ تمہارا کھلا دشمن ہے۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ" - "Allah is pure and accepts only what is pure. Allah has commanded the believers to do what He commanded the messengers." (Muslim)`,
            hadeesUrdu: 'بےشک اللہ پاک ہے اور صرف پاک چیز ہی قبول کرتا ہے۔ اور بےشک اللہ نے مومنین کو وہی حکم دیا ہے جو اس نے رسولوں کو دیا ہے۔',
            color: 'bg-blue-300'
          },
          {
            id: 'social-veil',
            title: 'Islamic Veil in Social Interaction',
            urduTitle: 'معاشرت میں شرعی پرده',
            description: 'In the context of one\'s social life, observing Islamic veil (Shar\'i Pardah) outside and at home, and abstaining from non-mahram (unrelated individuals) and mixed gatherings.',
            urduDescription: 'معاشرتی زندگی میں شرعی پردہ کا اہتمام، گھر سے باہر اور گھر کے اندر، اور غیر محرم اور مخلوط محافل سے اجتناب۔',
            ayah: `يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ ۚ ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ فَلَا يُؤْذَيْنَ ۗ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا - "O Prophet, tell your wives and your daughters and the women of the believers to bring down over themselves [part] of their outer garments. That is more suitable that they will be known and not be abused. And ever is Allah Forgiving and Merciful." (Quran 33:59)`,
            ayahUrdu: 'اے نبی! اپنی بیویوں اور اپنی بیٹیوں اور مومنوں کی عورتوں سے کہہ دو کہ وہ اپنی چادروں میں سے اپنے اوپر لٹکا لیا کریں۔ یہ زیادہ مناسب ہے تاکہ وہ پہچانی جائیں اور ستائی نہ جائیں۔ اور اللہ بخشنے والا رحم کرنے والا ہے۔',
            hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ الْمَرْأَةَ عَوْرَةٌ، فَإِذَا خَرَجَتِ اسْتَشْرَفَهَا الشَّيْطَانُ" - "Indeed, a woman is a private part. When she goes out, Satan makes her look attractive." (Tirmidhi)`,
            hadeesUrdu: 'بےشک عورت پردہ ہے، جب وہ باہر نکلتی ہے تو شیطان اسے دیکھتا ہے۔',
            color: 'bg-blue-300'
          },
          {
            id: 'service',
            title: 'Service to Creation',
            urduTitle: 'خدمت خلق',
            description: 'In one\'s life, regarding mutual dealings, giving special attention to fulfilling rights (Adaigi Huqooq), fulfilling promises (Eifa-e-Ahad), returning trusts (Ada-e-Amanat), and serving creation (Khidmat-e-Khalq).',
            urduDescription: 'زندگی میں باہمی معاملات میں حقوق کی ادائیگی، وعدوں کی وفا، امانتوں کی واپسی اور خلق کی خدمت پر خصوصی توجہ دینا۔',
                    ayah: `إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ - "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice." (Quran 4:58)`,
            ayahUrdu: 'بےشک اللہ تمہیں حکم دیتا ہے کہ امانتیں ان کے اہل کو پہنچاؤ اور جب تم لوگوں کے درمیان فیصلہ کرو تو عدل کے ساتھ فیصلہ کرو۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لِأَخِيهِ مِنْ عِرْضِهِ أَوْ شَيْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ قَبْلَ أَنْ لَا يَكُونَ دِينَارٌ وَلَا دِرْهَمٌ" - "Whoever has wronged his brother with regard to his honor or anything else, let him seek his forgiveness today, before there will be no dinar or dirham." (Bukhari: 2449)`,
            hadeesUrdu: 'جس کے پاس اپنے بھائی کی طرف سے کوئی ظلم ہو، خواہ اس کی عزت کا ہو یا کسی اور چیز کا، تو آج ہی اس سے معافی مانگ لے، اس سے پہلے کہ نہ دینار ہوں گے نہ درہم۔',
            color: 'bg-blue-300'
          }
        ]
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics and Objectives',
    urduTitle: 'اخلاقیات و اهداف',
    description: 'The moral and ethical framework that guides individual behavior and character development. This includes following the example of Prophet Muhammad ﷺ, rejecting false ideologies, maintaining sincerity in religious practice, and prioritizing relationships based on Islamic principles.',
    urduDescription: 'اخلاقیات و اهداف - فرد کے رویہ اور کردار کی نشوونما کا اخلاقی فریم ورک، جس میں رسول اللہ ﷺ کی پیروی، باطل نظریات کا رد، مذہبی عمل میں خلوص اور اسلامی اصولوں پر مبنی تعلقات شامل ہیں۔',
    ayah: `لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا - "There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day and [who] remembers Allah often." (Quran 33:21)`,
    hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ" - "I was sent to perfect good character." (Ahmad, Al-Hakim)`,
    color: 'bg-green-500',
    icon: <Heart className="w-5 h-5" />,
    children: [
      {
        id: 'following-prophet',
        title: 'Following the Messenger of Allah ﷺ and Interaction with Companions',
        urduTitle: 'اتباع رسول الله ﷺ و تعامل صحابة',
        description: 'Following the example of Prophet Muhammad ﷺ in all aspects of life and learning from the companions\' way of life and interactions.',
        urduDescription: 'رسول اللہ ﷺ کی پیروی اور صحابہ کرام کے ساتھ تعامل اور ان کی زندگی سے سیکھنا۔',
        ayah: `لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا - "There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day and [who] remembers Allah often." (Quran 33:21)`,
        ayahUrdu: 'بےشک تمہارے لیے رسول اللہ میں ایک بہترین نمونہ ہے، اس کے لیے جو اللہ اور آخرت کی امید رکھتا ہے اور اللہ کو بہت یاد کرتا ہے۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "أَصْحَابِي كَالنُّجُومِ بِأَيِّهِمُ اقْتَدَيْتُمْ اهْتَدَيْتُمْ" - "My companions are like stars. Whichever of them you follow, you will be guided." (Abu Dawud)`,
        hadeesUrdu: 'میرے صحابہ ستاروں کی طرح ہیں، تم ان میں سے جس کی پیروی کرو گے ہدایت پاؤ گے۔',
        color: 'bg-green-400',
        children: [
          {
            id: 'prophet-example',
            title: 'Following the example of Muhammad ﷺ in manners, characteristics, and daily life',
            urduTitle: 'شمائل، خصائل اور شب و روز میں اسوہ محمد ی ﷺ کی اتباع',
            color: 'bg-green-300'
          }
        ]
      },
      {
        id: 'reject-false',
        title: 'Rejection of False Ideologies',
        urduTitle: 'باطل نظریات کا رد',
        description: 'Rejecting and staying away from false ideologies and beliefs that contradict Islamic teachings.',
        urduDescription: 'باطل نظریات اور عقائد کا رد کرنا اور ان سے دور رہنا جو اسلامی تعلیمات کے خلاف ہیں۔',
        ayah: `وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ وَمَا لَكُم مِّن دُونِ اللَّهِ مِنْ أَوْلِيَاءَ ثُمَّ لَا تُنصَرُونَ - "And do not incline toward those who do wrong, lest you be touched by the Fire, and you would not have other than Allah any protectors; then you would not be helped." (Quran 11:113)`,
        ayahUrdu: 'اور ظالموں کی طرف نہ جھکو ورنہ تمہیں بھی آگ لگ جائے گی، اور تمہارے لیے اللہ کے سوا کوئی مددگار نہیں ہوگا، پھر تم مدد نہیں پاؤ گے۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ تَشَبَّهَ بِقَوْمٍ فَهُوَ مِنْهُمْ" - "Whoever imitates a people is one of them." (Abu Dawud)`,
        hadeesUrdu: 'جو کسی قوم کی مشابہت اختیار کرے گا وہ انہی میں سے ہے۔',
        color: 'bg-green-400'
      },
      {
        id: 'sincerity',
        title: 'Spirit of "Religion is Sincerity"',
        urduTitle: 'الدین النصیحہ کی روح',
        description: 'Maintaining sincerity and pure intentions in all religious practices and dealings with others.',
        urduDescription: 'تمام مذہبی اعمال اور دوسروں کے ساتھ معاملات میں خلوص اور پاک نیت کا اہتمام۔',
        ayah: `إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ - "Allah only accepts from the righteous [who fear Him]." (Quran 5:27)`,
        ayahUrdu: 'بےشک اللہ صرف متقین سے قبول کرتا ہے۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ" - "Indeed, Allah does not look at your appearance or wealth, but He looks at your hearts and actions." (Muslim)`,
        hadeesUrdu: 'بےشک اللہ تمہاری صورتوں اور مالوں کو نہیں دیکھتا، بلکہ تمہارے دلوں اور اعمال کو دیکھتا ہے۔',
        color: 'bg-green-400'
      },
      {
        id: 'prioritization',
        title: 'Prioritization of Nearest to Nearest',
        urduTitle: 'الا قرب فالا قرب کی ترتیب',
        description: 'Prioritizing relationships and responsibilities based on proximity and closeness, starting with family and extending to the broader community.',
        urduDescription: 'تعلقات اور ذمہ داریوں کو قربت اور نزدیکی کے مطابق ترتیب دینا، خاندان سے شروع کر کے وسیع تر معاشرے تک۔',
        ayah: `وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ - "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy." (Quran 4:36)`,
        ayahUrdu: 'اور اللہ کی عبادت کرو اور اس کے ساتھ کسی کو شریک نہ کرو، اور والدین کے ساتھ احسان کرو، اور رشتہ داروں، یتیموں اور مسکینوں کے ساتھ۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي" - "The best of you is the best to his family, and I am the best to my family." (Tirmidhi)`,
        hadeesUrdu: 'تم میں سب سے بہتر وہ ہے جو اپنے اہل کے لیے بہتر ہے، اور میں اپنے اہل کے لیے سب سے بہتر ہوں۔',
        color: 'bg-orange-400'
      }
    ]
  },
  {
    id: 'dawah',
    title: 'Call to Religion / Da\'wah',
    urduTitle: 'دعوت دین',
    description: 'The responsibility to invite others to Islam and guide them towards righteous behavior. This includes enjoining good (Amr bil Ma\'ruf) and forbidding evil (Nahi anil Munkar) through various means - by hand, tongue, and heart. It encompasses both individual and collective spheres of influence.',
    urduDescription: 'دعوت دین - دوسروں کو اسلام کی طرف بلانے اور نیک رویہ کی طرف رہنمائی کرنے کی ذمہ داری، جس میں امر بالمعروف اور نہی عن المنکر شامل ہے۔',
    ayah: `كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ - "You are the best nation produced [as an example] for mankind. You enjoin what is right and forbid what is wrong and believe in Allah." (Quran 3:110)`,
    hadees: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ" - "Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart, and that is the weakest of faith." (Muslim)`,
    color: 'bg-purple-500',
    icon: <Target className="w-5 h-5" />,
    children: [
      {
        id: 'enjoin-good',
        title: 'Enjoining Good',
        urduTitle: 'امر بالمعروف',
        description: 'Encouraging and promoting good deeds and righteous behavior among people.',
        urduDescription: 'لوگوں میں نیک کاموں اور اچھے اعمال کی ترغیب اور فروغ۔',
        ayah: `وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ - "And let there be [arising] from you a nation inviting to [all that is] good, enjoining what is right and forbidding what is wrong, and those will be the successful." (Quran 3:104)`,
        ayahUrdu: 'اور تم میں سے ایک جماعت ایسی ہونی چاہیے جو خیر کی طرف بلائے اور نیکی کا حکم دے اور برائی سے روکے، اور یہی لوگ کامیاب ہیں۔',
        hadees: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ" - "Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart, and that is the weakest of faith." (Muslim)`,
        hadeesUrdu: 'تم میں سے جو کوئی برائی دیکھے تو اسے اپنے ہاتھ سے بدل دے، اگر نہ کر سکے تو زبان سے، اگر نہ کر سکے تو دل سے، اور یہ ایمان کا کمزور ترین درجہ ہے۔',
        color: 'bg-purple-400',
        children: [
          {
            id: 'by-hand',
            title: 'By Hand',
            urduTitle: 'بالید',
            color: 'bg-purple-300'
          },
          {
            id: 'by-tongue',
            title: 'By Tongue',
            urduTitle: 'بالسان',
            color: 'bg-purple-300'
          },
          {
            id: 'by-heart',
            title: 'By Heart',
            urduTitle: 'بالقلب',
            color: 'bg-purple-300'
          }
        ]
      },
      {
        id: 'forbid-evil',
        title: 'Forbidding Evil',
        urduTitle: 'نهي عن المنكر',
        description: 'Preventing and discouraging evil deeds and sinful behavior among people.',
        urduDescription: 'لوگوں میں برے کاموں اور گناہ کے اعمال کو روکنا اور ان سے منع کرنا۔',
        ayah: `كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ - "You are the best nation produced [as an example] for mankind. You enjoin what is right and forbid what is wrong and believe in Allah." (Quran 3:110)`,
        ayahUrdu: 'تم بہترین امت ہو جو لوگوں کے لیے نکالی گئی ہے، تم نیکی کا حکم دیتے ہو اور برائی سے روکتے ہو اور اللہ پر ایمان رکھتے ہو۔',
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الْأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ لَا يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا" - "Whoever calls to guidance will have a reward similar to those who follow him, without that diminishing anything from their rewards." (Muslim)`,
        hadeesUrdu: 'جو ہدایت کی طرف بلائے گا اس کے لیے اتنا ہی اجر ہے جتنا اس کے پیروکاروں کا، اس سے ان کے اجر میں کچھ کم نہیں ہوگا۔',
        color: 'bg-purple-400',
        children: [
          {
            id: 'forbid-by-hand',
            title: 'By Hand',
            urduTitle: 'بالید',
            color: 'bg-purple-300'
          },
          {
            id: 'forbid-by-tongue',
            title: 'By Tongue',
            urduTitle: 'بالسان',
            color: 'bg-purple-300'
          },
          {
            id: 'forbid-by-heart',
            title: 'By Heart',
            urduTitle: 'بالقلب',
            color: 'bg-purple-300'
          }
        ]
      },
      {
        id: 'individual-sphere',
        title: 'Individual Sphere and Connection',
        urduTitle: 'انفرادی دائره وتعلق',
        color: 'bg-purple-400'
      },
      {
        id: 'collective-sphere',
        title: 'Collective Sphere and Connection',
        urduTitle: 'اجتماعی دائره و تعلق',
        color: 'bg-purple-400'
      }
    ]
  },
  {
    id: 'establishment',
    title: 'Establishment of Religion',
    urduTitle: 'اقامت دین',
    description: 'The comprehensive effort to establish Islamic principles and values in society. This includes developing capabilities for religious service, practicing patience and sacrifice, fulfilling obligations of bearing witness, and contributing to the betterment of the community through various forms of service and obedience.',
    urduDescription: 'اقامت دین - معاشرے میں اسلامی اصولوں اور اقدار کو قائم کرنے کی جامع کوشش، جس میں مذہبی خدمت کی صلاحیتوں کی نشوونما، صبر و قربانی، گواہی کی ذمہ داریوں کی ادائیگی اور مختلف طریقوں سے خدمت شامل ہیں۔',
    ayah: `وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ ۚ هُوَ اجْتَبَاكُمْ وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ - "And strive for Allah with the striving due to Him. He has chosen you and has not placed upon you in the religion any difficulty." (Quran 22:78)`,
    hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ جَاهَدَ فِي سَبِيلِ اللَّهِ فَهُوَ حَقٌّ عَلَى اللَّهِ أَنْ يُدْخِلَهُ الْجَنَّةَ أَوْ يُرْجِعَهُ إِلَى مَسْكَنِهِ الَّذِي خَرَجَ مِنْهُ مَعَ مَا نَالَ مِنْ أَجْرٍ أَوْ غَنِيمَةٍ" - "Whoever strives in the cause of Allah, it is incumbent upon Allah to admit him into Paradise or return him to his home from which he came out, with whatever reward or booty he has gained." (Bukhari and Muslim)`,
    color: 'bg-orange-500',
    icon: <Star className="w-5 h-5" />,
    children: [
      {
        id: 'dislike-false',
        title: 'Heartfelt Dislike for False Systems',
        urduTitle: 'باطل نظام سے قلبی کر اہت',
        color: 'bg-orange-400'
      },
      {
        id: 'hear-obey',
        title: 'Hearing and Obeying in Good',
        urduTitle: 'سمع واطاعت في المعروف',
        color: 'bg-orange-400'
      },
      {
        id: 'capabilities',
        title: 'Capabilities',
        urduTitle: 'صلاحیتیں',
        color: 'bg-orange-400',
        children: [
          {
            id: 'best-religion',
            title: 'For the best religion',
            urduTitle: 'بہترین دین کے لیے',
            color: 'bg-orange-300'
          },
          {
            id: 'least-world',
            title: 'For the least of this world',
            urduTitle: 'کمترین دنیا کے لیے',
            color: 'bg-orange-300'
          }
        ]
      },
      {
        id: 'spend-wealth',
        title: 'Spending Wealth',
        urduTitle: 'انفاق مال',
        color: 'bg-orange-400'
      },
      {
        id: 'patience',
        title: 'Patience in Adversities',
        urduTitle: 'مصائب پر صبر',
        color: 'bg-orange-400'
      },
      {
        id: 'self-sacrifice',
        title: 'Sacrifice of Self',
        urduTitle: 'بذل نفس',
        color: 'bg-orange-400'
      },
      {
        id: 'witness',
        title: 'Obligation of Bearing Witness to People',
        urduTitle: 'فریضہ شہادت علی الناس',
        color: 'bg-orange-400'
      },
      {
        id: 'own-duties',
        title: 'One\'s Own Duties',
        urduTitle: 'اپنے فرائض',
        color: 'bg-orange-400'
      },
      {
        id: 'others-rights',
        title: 'Rights of Others',
        urduTitle: 'دوسروں کے حقوق',
        color: 'bg-orange-400'
      },
      {
        id: 'forgiveness',
        title: 'Forgiveness and Overlooking',
        urduTitle: 'عفو و در گزر',
        color: 'bg-orange-400'
      },
      {
        id: 'selflessness',
        title: 'Selflessness and Sacrifice',
        urduTitle: 'ایثار و قربانی',
        color: 'bg-orange-400'
      },
      {
        id: 'obey-leader',
        title: 'Obedience to the Leader',
        urduTitle: 'اطاعت امیر',
        color: 'bg-orange-400'
      }
    ]
  }
];

const dailyGoals = [
  {
    id: 'quran-recitation',
    title: 'Recitation of Quran',
    urduTitle: 'تلاوت قرآن',
    detail: 'At least one Juz/part',
    urduDetail: 'کم از کم ایک پاره'
  },
  {
    id: 'quran-understanding',
    title: 'Understanding of Quran',
    urduTitle: 'فہم قرآن',
    detail: 'Translation and Tafsir',
    urduDetail: 'ترجمه و تفسیر'
  },
  {
    id: 'quran-memorization',
    title: 'Memorization of Quran',
    urduTitle: 'حفظ قرآن',
    detail: 'Increase in memorized portion',
    urduDetail: 'ذخیرہ حفظ میں اضافہ'
  },
  {
    id: 'tahajjud',
    title: 'Observance of Tahajjud',
    urduTitle: 'اہتمام تہجد',
    detail: 'And recite the Quran with measured recitation',
    urduDetail: 'ورتل القرآن ترتیلا'
  },
  {
    id: 'supplications',
    title: 'Prescribed Supplications',
    urduTitle: 'ادعیہ ماثوره',
    detail: 'Daily supplications, Special invocations',
    urduDetail: 'روز مرہ کی دعائیں، خصوصی مناجات'
  }
];

const avoidanceGoals = [
  {
    id: 'simplicity',
    title: 'Simplicity in Eating and Drinking',
    urduTitle: 'خوردونوش میں سادگی'
  },
  {
    id: 'tongue-protection',
    title: 'Protection of the Tongue',
    urduTitle: 'زبان کی حفاظت'
  },
  {
    id: 'avoid-laziness',
    title: 'Avoidance of Laziness',
    urduTitle: 'تن آسانی سے گریز'
  },
  {
    id: 'avoid-useless-talk',
    title: 'Avoidance of Useless Talk and Gatherings',
    urduTitle: 'لایعنی گفتگو و محافل سے کنارہ کشی'
  },
  {
    id: 'gaze-protection',
    title: 'Protection of the Gaze',
    urduTitle: 'نظر کی حفاظت'
  },
  {
    id: 'avoid-extravagance',
    title: 'Avoidance of Extravagance and Wastefulness',
    urduTitle: 'اسراف و تبذیر سے اجتناب'
  }
];

const curricularObjectives = [
  {
    id: 'individual-curriculum',
    title: 'Individual Curriculum',
    urduTitle: 'انفرادی نصاب',
    details: 'مبتدی، ملتزم، ذمہ داران، مدرسین',
    englishDetails: 'Beginners, Committed, Responsible persons, Teachers'
  },
  {
    id: 'family-gatherings',
    title: 'Family/Household Gatherings',
    urduTitle: 'اسرہ جاتی اجتماعات',
    details: 'حلقه قرآنی، اجتماعات أسره',
    englishDetails: 'Quranic Circle, Family Gatherings'
  },
  {
    id: 'dawah-training-gatherings',
    title: 'Dawah and Training Gatherings',
    urduTitle: 'دعوتی و تربیتی اجتماعات',
    details: 'مقامی، حلقہ جاتی، مرکزی',
    englishDetails: 'Local, Regional, Central'
  },
  {
    id: 'graded-courses',
    title: 'Graded Courses',
    urduTitle: 'درجه دار کورسز',
    details: 'مبتدی، ملتزم، نقباء، مدرسین',
    englishDetails: 'Beginners, Committed, Leaders, Teachers'
  },
  {
    id: 'additional-organizational-courses',
    title: 'Additional Organizational Courses',
    urduTitle: 'اضافی تنظیمی کورسز',
    details: 'علمی و فکری رہنمائی، حزب اللہ کے اوصاف، دوره ترجمه قرآن',
    englishDetails: 'Intellectual and Ideological Guidance, Qualities of Hizbullah, Quran Translation Course'
  }
];

const dawahObjectives = [
  {
    id: 'individual-dawah',
    title: 'Individual Dawah/Invitation',
    urduTitle: 'انفرادی دعوت'
  },
  {
    id: 'family-report',
    title: 'Report in Family Gathering',
    urduTitle: 'اجتماع اسرہ میں رپورٹ'
  },
  {
    id: 'dawah-gatherings-campaigns',
    title: 'Holding Dawah Gatherings and Campaigns',
    urduTitle: 'دعوتی اجتماعات و مہمات کا انعقاد'
  },
  {
    id: 'dawah-training-consultative',
    title: 'Dawah Training and Consultative Gatherings',
    urduTitle: 'دعوتی تربیتی و مشاورتی اجتماعات'
  }
];

const oversightSystems = [
  {
    id: 'self-accountability',
    title: 'System of Self-Accountability',
    urduTitle: 'خود احتسابی کا نظام',
    items: [
      'Review of Past Times after Five Daily Prayers',
      'Review of the Past Day at Tahajjud Time or Before Sleeping',
      'Weekly Review of the Past Week at a Fixed Time',
      'Monthly Review of the Past Month at a Fixed Time'
    ]
  },
  {
    id: 'personal-review',
    title: 'System of Personal Review',
    urduTitle: 'شخصی جائزہ کا نظام',
    items: [
      'Once every 2 months about comrades from local Ameer/leaders',
      'Once every 3 months about leaders from circle Ameer/local Ameers',
      'Once a month about local organizational Ameers from Deputy Chief Administrator/Ameers of circles',
      'Once every 6 months about circle Ameers from Chief Administrator and his deputies'
    ]
  }
];

const ChartBox = ({ item, level = 0, onItemClick }: { 
  item: ChartItem; 
  level?: number; 
  onItemClick: (item: ChartItem) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: level * 0.1 }}
      className="mb-4"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          ${item.color} text-white p-4 rounded-lg shadow-lg cursor-pointer
          border-2 border-white/20 hover:border-white/40 transition-all duration-300
          hover:shadow-xl hover:shadow-black/20
          ${level === 0 ? 'text-lg font-bold' : level === 1 ? 'text-base font-semibold' : 'text-sm'}
          ${level === 0 ? 'w-full h-32 flex items-center' : ''}
        `}
        onClick={() => onItemClick(item)}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left side - Arrow for all items */}
          {item.children && (
            <motion.button
              animate={{ rotate: isExpanded ? -90 : 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="p-1 hover:bg-white/20 rounded flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
          )}
          
          {/* Right side - Text for all items */}
          <div className="flex items-center gap-2 text-right flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <div className="font-urdu urdu-text truncate text-lg">
                {item.urduTitle}
              </div>
              <div className="text-sm opacity-75 truncate">{item.title}</div>
            </div>
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          </div>
        </div>
      </motion.div>
      
      {item.children && isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-6 border-l-2 border-white/20 pl-4"
        >
          {item.children.map((child) => (
            <ChartBox
              key={child.id}
              item={child}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

const GoalCard = ({ title, urduTitle, detail, urduDetail, color = 'bg-emerald-600' }: {
  title: string;
  urduTitle: string;
  detail?: string;
  urduDetail?: string;
  color?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`${color} text-white p-4 rounded-lg shadow-lg`}
  >
    <div className="font-urdu mb-2 urdu-text">
      {urduTitle}
    </div>
    <div className="text-sm font-semibold mb-1">{title}</div>
    {detail && (
      <div className="text-xs opacity-90">
        <div className="font-urdu urdu-text">
          {urduDetail}
        </div>
        <div>{detail}</div>
      </div>
    )}
  </motion.div>
);

export default function AhsanEIslamPage() {
  const [selectedItem, setSelectedItem] = useState<ChartItem | null>(null);
  const [activeSection, setActiveSection] = useState<'main' | 'daily' | 'avoidance' | 'curricular' | 'dawah' | 'oversight'>('main');
  const [itemHistory, setItemHistory] = useState<ChartItem[]>([]);
  const [showHadithPopup, setShowHadithPopup] = useState(false);
  const [showIslamPopup, setShowIslamPopup] = useState(false);
  const [showImanPopup, setShowImanPopup] = useState(false);
  const [showIhsanPopup, setShowIhsanPopup] = useState(false);

  const handleItemClick = (item: ChartItem) => {
    setSelectedItem(item);
    setItemHistory([item]);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setItemHistory([]);
  };

  const goBack = () => {
    if (itemHistory.length > 1) {
      const newHistory = itemHistory.slice(0, -1);
      setItemHistory(newHistory);
      setSelectedItem(newHistory[newHistory.length - 1]);
    }
  };

  const navigateToItem = (item: ChartItem) => {
    setSelectedItem(item);
    setItemHistory([...itemHistory, item]);
  };

  // Keyboard support for closing popup
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closePopup();
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" dir="rtl" style={{ direction: 'rtl' }}>
      <style jsx>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        
        .urdu-text {
          line-height: 2.2;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          font-weight: 500;
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Alvi Nastaleeq', serif;
        }
        .urdu-title {
          line-height: 2.4;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 600;
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Alvi Nastaleeq', serif;
        }
        .urdu-description {
          line-height: 2.2;
          margin-bottom: 1.2rem;
          font-size: 1.05rem;
          font-weight: 400;
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Alvi Nastaleeq', serif;
        }
        
        .quranic-ayah {
          font-family: 'Amiri', 'Scheherazade', 'Noto Naskh Arabic', serif;
          font-size: 1.4rem;
          line-height: 2.5;
          font-weight: 500;
        }
        
        .quranic-hadith {
          font-family: 'Amiri', 'Scheherazade', 'Noto Naskh Arabic', serif;
          font-size: 1.4rem;
          line-height: 2.5;
          font-weight: 500;
        }
        
        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Alvi Nastaleeq', serif;
        }
        
        /* Increase base font sizes for better readability */
        body {
          font-size: 16px;
          line-height: 1.6;
        }
        
        h1 {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        
        h2 {
          font-size: 2rem;
          line-height: 1.3;
        }
        
        h3 {
          font-size: 1.5rem;
          line-height: 1.4;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .text-sm {
          font-size: 1rem !important;
        }
        
        .text-base {
          font-size: 1.1rem !important;
        }
        
        .text-lg {
          font-size: 1.25rem !important;
        }
        
        .text-xl {
          font-size: 1.5rem !important;
        }
        
        .text-2xl {
          font-size: 1.75rem !important;
        }
        
        .text-4xl {
          font-size: 2.5rem !important;
        }
      `}</style>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Left side - Message of Tanzeem-e-Islami */}
            <div className="text-right text-xs opacity-80 w-56 flex-shrink-0">
              <div className="font-urdu urdu-text mb-1">تنظیم اسلامی کا پیغام</div>
              <div className="mb-1">Message of Tanzeem-e-Islami</div>
              <div className="font-urdu urdu-text mb-1">بانی تنظیم : ڈاکٹر اسرار احمد</div>
              <div>Founder: Dr. Israr Ahmed</div>
            </div>
            
            {/* Center - Main title */}
            <div className="text-center flex-1 px-4">
              <h1 className="text-4xl font-bold mb-2 font-urdu urdu-title">
                تنظیم اسلامی میں احسان اسلام کے تقاضے
              </h1>
              <p className="text-xl opacity-90 mb-1">Demands of Ehsan-e-Islam in Tanzeem-e-Islami</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button 
                  onClick={() => setShowIhsanPopup(true)}
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-urdu urdu-text rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  احسان
                </button>
                <button 
                  onClick={() => setShowImanPopup(true)}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-urdu urdu-text rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  ایمان
                </button>
                <button 
                  onClick={() => setShowIslamPopup(true)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-urdu urdu-text rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  اسلام
                </button>
              </div>
            </div>
            
            {/* Right side - System of Khilafat-e-Rashida */}
            <div className="text-left text-xs opacity-80 w-56 flex-shrink-0">
              <div className="font-urdu urdu-text mb-1">خلافت راشدہ کا نظام</div>
              <div className="mb-1">System of Khilafat-e-Rashida</div>
              <div className="font-urdu urdu-text mb-1">امیر تنظیم : شجاع الدین شیخ</div>
              <div>Ameer: Shujauddin Sheikh</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {[
              { id: 'oversight', label: 'Oversight System', urduLabel: 'نگرانی کا نظام' },
              { id: 'dawah', label: 'Dawah Objectives', urduLabel: 'دعوتی و تحریکی اہداف' },
              { id: 'curricular', label: 'Curricular Objectives', urduLabel: 'نصابی اہداف' },
              { id: 'avoidance', label: 'Avoidance Goals', urduLabel: 'پر ہیز کے اہداف' },
              { id: 'daily', label: 'Daily Goals', urduLabel: 'روز مرہ کے اہداف' },
              { id: 'main', label: 'Individual Goals', urduLabel: 'انفرادی اہداف' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300
                  ${activeSection === section.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                  }
                `}
              >
                <div className="font-urdu text-sm urdu-text">
                  {section.urduLabel}
                </div>
                <div className="text-xs">{section.label}</div>
              </button>
            ))}
          </div>
          

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Chart */}
          <div>
            {activeSection === 'main' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">انفرادی اہداف</span>
                  <br />
                  <span>Individual Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chartData.map((item) => (
                    <ChartBox
                      key={item.id}
                      item={item}
                      onItemClick={handleItemClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'daily' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">روز مرہ کے اہداف</span>
                  <br />
                  <span>Daily Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dailyGoals.map((goal) => (
                    <GoalCard
                      key={goal.id}
                      title={goal.title}
                      urduTitle={goal.urduTitle}
                      detail={goal.detail}
                      urduDetail={goal.urduDetail}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'avoidance' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">پر ہیز کے اہداف</span>
                  <br />
                  <span>Avoidance Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {avoidanceGoals.map((goal) => (
                    <GoalCard
                      key={goal.id}
                      title={goal.title}
                      urduTitle={goal.urduTitle}
                      color="bg-red-600"
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'curricular' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">نصابی اہداف</span>
                  <br />
                  <span>Curricular Objectives</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curricularObjectives.map((objective) => (
                    <div key={objective.id} className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                      <div className="font-urdu mb-2 urdu-text">
                        {objective.urduTitle}
                      </div>
                      <div className="text-sm font-semibold mb-1">{objective.title}</div>
                      <div className="text-xs opacity-90">
                        <div className="font-urdu urdu-text">
                          {objective.details}
                        </div>
                        <div>{objective.englishDetails}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'dawah' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">دعوتی و تحریکی اہداف</span>
                  <br />
                  <span>Dawah and Movement Objectives</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dawahObjectives.map((objective) => (
                    <GoalCard
                      key={objective.id}
                      title={objective.title}
                      urduTitle={objective.urduTitle}
                      color="bg-purple-600"
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'oversight' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">نگرانی کا نظام</span>
                  <br />
                  <span>System of Oversight</span>
                </h2>
                <div className="space-y-6">
                  {oversightSystems.map((system) => (
                    <div key={system.id} className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                        <span className="font-urdu urdu-title">{system.urduTitle}</span>
                        <br />
                        <span>{system.title}</span>
                      </h3>
                      <ul className="space-y-2">
                        {system.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Scale className="w-8 h-8" />
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="font-urdu text-xl font-bold urdu-title">
            تنظیم اسلامی
          </div>
          <div className="text-sm opacity-90">Tanzeem-e-Islami</div>
        </div>
      </div>

      {/* Full Screen Details Popup */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {itemHistory.length > 1 && (
                    <button
                      onClick={goBack}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      title="Go back"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  {selectedItem.icon && <span className="text-2xl">{selectedItem.icon}</span>}
                  <div className="text-right">
                    <h2 className="text-2xl font-bold font-urdu urdu-title">
                      {selectedItem.urduTitle}
                    </h2>
                    {itemHistory.length > 1 && (
                      <div className="text-sm opacity-75 mt-1 font-urdu urdu-text">
                        سطح {itemHistory.length} • {itemHistory.length - 1} سطح اوپر
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Breadcrumb Navigation */}
              {itemHistory.length > 1 && (
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-urdu urdu-text">راستہ:</span>
                    {itemHistory.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-2">
                        {index > 0 && (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                        <button
                          onClick={() => {
                            const newHistory = itemHistory.slice(0, index + 1);
                            setItemHistory(newHistory);
                            setSelectedItem(item);
                          }}
                          className={`hover:text-emerald-600 transition-colors ${
                            index === itemHistory.length - 1 ? 'font-semibold text-emerald-600' : ''
                          }`}
                        >
                          <span className="font-urdu urdu-text">{item.urduTitle}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem.urduDescription && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    <span className="font-urdu urdu-text">تفصیل</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedItem.id === 'worship' && (
                      <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg mb-4">
                        <div className="text-right">
                          <span className="text-sm text-amber-600 font-semibold">1.1.1.</span>
                          <p className="font-urdu text-amber-800 leading-relaxed urdu-text mt-1">
                            عبادات جو اللہ کے حقوق ہیں، یعنی فرائض و واجبات کی شعوری پابندی اور حرام و مکروہات سے اجتناب۔
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedItem.id === 'dealings' && (
                      <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg mb-4">
                        <div className="text-right">
                          <span className="text-sm text-blue-600 font-semibold">1.1.2.</span>
                          <div className="w-2 h-2 bg-blue-500 rounded-full inline-block ml-2"></div>
                          <p className="font-urdu text-blue-800 leading-relaxed urdu-text mt-1">
                            معاملات جو بیک وقت حدود الله و حقوق العباد ہیں
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedItem.id === 'halal-earnings' && (
                      <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg mb-4">
                        <div className="text-right">
                          <span className="text-sm text-green-600 font-semibold">1.1.2.1</span>
                          <p className="font-urdu text-green-800 leading-relaxed urdu-text mt-1">
                            اپنی معاش کے حوالے سے حلال و طیب پر اکتفاء و قناعت کرنا۔
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedItem.id === 'social-veil' && (
                      <div className="bg-purple-50 border-r-4 border-purple-500 p-4 rounded-lg mb-4">
                        <div className="text-right">
                          <span className="text-sm text-purple-600 font-semibold">1.1.2.2</span>
                          <p className="font-urdu text-purple-800 leading-relaxed urdu-text mt-1">
                            اپنی معاشرت کے ضمن میں باہر اور گھر میں شرعی پردہ کا اہتمام ، نامحرموں اور مخلوط محافل سے اجتناب ۔
                          </p>
                        </div>
                      </div>
                    )}
                    {selectedItem.id === 'service' && (
                      <div className="bg-indigo-50 border-r-4 border-indigo-500 p-4 rounded-lg mb-4">
                        <div className="text-right">
                          <span className="text-sm text-indigo-600 font-semibold">1.1.2.3</span>
                          <span className="text-indigo-600 ml-2">★</span>
                          <p className="font-urdu text-indigo-800 leading-relaxed urdu-text mt-1">
                            اپنی زندگی میں باہمی معاملات کے حوالے سے ادائیگی حقوق، ایفائے عہد، ادائے امانت، خدمت خلق پر خصوصی توجہ دینا۔
                          </p>
                        </div>
                      </div>
                    )}
                    <p className="font-urdu text-gray-600 leading-relaxed urdu-text">{selectedItem.urduDescription}</p>
                  </div>
                </div>
              )}

              {selectedItem.ayah && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">📖</span>
                    <span className="font-urdu urdu-text">قرآنی حوالہ</span>
                  </h3>
                  <div className="bg-emerald-50 border-r-4 border-emerald-500 p-4 rounded-lg">
                    <div className="text-right mb-3">
                      <p className="quranic-ayah">{selectedItem.ayah.split(' - ')[0]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                        {selectedItem.ayahUrdu || 'اللہ تعالیٰ کا فرمان ہے کہ...'}
                      </p>
                      {selectedItem.ayah.split(' - ')[1] && (
                        <p className="text-xs italic text-gray-500 mt-2 ltr:text-left rtl:text-right">
                          {selectedItem.ayah.split(' - ')[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {selectedItem.hadees && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">🕌</span>
                    <span className="font-urdu urdu-text">حدیث شریف</span>
                  </h3>
                  <div className="bg-emerald-50 border-r-4 border-emerald-500 p-4 rounded-lg">
                    <div className="text-right mb-3">
                      <p className="quranic-hadith">{selectedItem.hadees.split(' - ')[0]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                        {selectedItem.hadeesUrdu || 'رسول اللہ ﷺ کا ارشاد ہے کہ...'}
                      </p>
                      {selectedItem.hadees.split(' - ')[1] && (
                        <p className="text-xs italic text-gray-500 mt-2 ltr:text-left rtl:text-right">
                          {selectedItem.hadees.split(' - ')[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {selectedItem.children && selectedItem.children.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <span className="font-urdu urdu-text">ذیلی اقسام</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.children.map((child) => (
                      <motion.div
                        key={child.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => navigateToItem(child)}
                      >
                        <div className="font-urdu text-lg font-semibold text-gray-800 mb-2 urdu-text">
                          {child.urduTitle}
                        </div>
                        {child.children && child.children.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="text-xs text-gray-500 mb-2 font-urdu urdu-text">
                              {child.children.length} ذیلی اقسام شامل ہیں
                            </div>
                            <div className="space-y-1">
                              {child.children.slice(0, 3).map((subChild) => (
                                <div key={subChild.id} className="text-xs text-gray-600">
                                  • <span className="font-urdu urdu-text">{subChild.urduTitle}</span>
                                </div>
                              ))}
                              {child.children.length > 3 && (
                                <div className="text-xs text-emerald-600 font-urdu urdu-text">
                                  + {child.children.length - 3} مزید...
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}


            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Islam Popup */}
      {showIslamPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowIslamPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-2xl font-bold font-urdu urdu-title mb-2">
                    اسلام
                  </h2>
                  <p className="text-lg opacity-90">Islam</p>
                </div>
                <button
                  onClick={() => setShowIslamPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Hadith Text */}
                <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                  <div className="text-right mb-3">
                    <p className="quranic-hadith">
                      الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلَاةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                      اسلام یہ ہے کہ تم گواہی دو کہ اللہ کے سوا کوئی معبود نہیں اور محمد ﷺ اللہ کے رسول ہیں اور نماز قائم کرو اور زکٰوۃ دو اور رمضان کے روزے رکھو اور بیت اللہ کا حج کرو اگر تمہارے لیے اس کی طاقت ہو۔
                    </p>
                    <p className="text-xs italic text-gray-500 mt-2">
                      Islam is to testify that there is no deity except Allah and that Muhammad is the Messenger of Allah, to establish prayer, to give charity, to fast in Ramadan, and to perform pilgrimage to the House if you are able to do so.
                    </p>
                  </div>
                </div>

                {/* Five Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🕌</div>
                    <h3 className="font-bold text-blue-800 mb-1 font-urdu urdu-text">شہادت</h3>
                    <p className="text-sm text-blue-700">Testimony of Faith</p>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🙏</div>
                    <h3 className="font-bold text-blue-800 mb-1 font-urdu urdu-text">نماز</h3>
                    <p className="text-sm text-blue-700">Prayer</p>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">💝</div>
                    <h3 className="font-bold text-blue-800 mb-1 font-urdu urdu-text">زکٰوۃ</h3>
                    <p className="text-sm text-blue-700">Charity</p>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🌙</div>
                    <h3 className="font-bold text-blue-800 mb-1 font-urdu urdu-text">روزہ</h3>
                    <p className="text-sm text-blue-700">Fasting</p>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">🕋</div>
                    <h3 className="font-bold text-blue-800 mb-1 font-urdu urdu-text">حج</h3>
                    <p className="text-sm text-blue-700">Pilgrimage</p>
                  </div>
                </div>

                {/* Quranic Reference */}
                <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">📖</span>
                    <span className="font-urdu urdu-text">قرآنی حوالہ</span>
                  </h3>
                  <div className="text-right mb-3">
                    <p className="quranic-ayah">
                      إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ
                    </p>
                  </div>
                  <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                    بےشک اللہ کے نزدیک دین اسلام ہے۔
                  </p>
                  <p className="text-xs italic text-gray-500 mt-2">
                    "Indeed, the religion in the sight of Allah is Islam." (Quran 3:19)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Iman Popup */}
      {showImanPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowImanPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-2xl font-bold font-urdu urdu-title mb-2">
                    ایمان
                  </h2>
                  <p className="text-lg opacity-90">Iman (Faith)</p>
                </div>
                <button
                  onClick={() => setShowImanPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Hadith Text */}
                <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg">
                  <div className="text-right mb-3">
                    <p className="quranic-hadith">
                      الْإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                      ایمان یہ ہے کہ تم اللہ پر اور اس کے فرشتوں پر اور اس کی کتابوں پر اور اس کے رسولوں پر اور آخرت کے دن پر ایمان لاؤ اور تقدیر پر ایمان لاؤ خیر اور شر کی۔
                    </p>
                    <p className="text-xs italic text-gray-500 mt-2">
                      Iman is to believe in Allah, His angels, His books, His messengers, the Last Day, and to believe in divine decree, both good and evil.
                    </p>
                  </div>
                </div>

                {/* Six Pillars of Iman */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">☝️</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">اللہ پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Allah</p>
                  </div>
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">✨</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">فرشتوں پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Angels</p>
                  </div>
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📚</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">کتابوں پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Books</p>
                  </div>
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📨</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">رسولوں پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Messengers</p>
                  </div>
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">⏰</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">آخرت پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Hereafter</p>
                  </div>
                  <div className="bg-green-100 border border-green-300 p-4 rounded-lg text-center">
                    <div className="text-2xl mb-2">📋</div>
                    <h3 className="font-bold text-green-800 mb-1 font-urdu urdu-text">تقدیر پر ایمان</h3>
                    <p className="text-sm text-green-700">Belief in Divine Decree</p>
                  </div>
                </div>

                {/* Quranic Reference */}
                <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <span className="text-green-600">📖</span>
                    <span className="font-urdu urdu-text">قرآنی حوالہ</span>
                  </h3>
                  <div className="text-right mb-3">
                    <p className="quranic-ayah">
                      آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ
                    </p>
                  </div>
                  <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                    رسول ایمان لائے اس چیز پر جو ان کی طرف ان کے رب سے نازل ہوئی اور مومن بھی۔ سب نے اللہ پر اور اس کے فرشتوں پر اور اس کی کتابوں پر اور اس کے رسولوں پر ایمان لایا۔
                  </p>
                  <p className="text-xs italic text-gray-500 mt-2">
                    "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers." (Quran 2:285)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Ihsan Popup */}
      {showIhsanPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowIhsanPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-2xl font-bold font-urdu urdu-title mb-2">
                    احسان
                  </h2>
                  <p className="text-lg opacity-90">Ihsan (Excellence)</p>
                </div>
                <button
                  onClick={() => setShowIhsanPopup(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Hadith Text */}
                <div className="bg-orange-50 border-r-4 border-orange-500 p-4 rounded-lg">
                  <div className="text-right mb-3">
                    <p className="quranic-hadith">
                      الْإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                      احسان یہ ہے کہ تم اللہ کی عبادت اس طرح کرو گویا تم اسے دیکھ رہے ہو، اگر تم اسے نہیں دیکھتے تو وہ تمہیں دیکھتا ہے۔
                    </p>
                    <p className="text-xs italic text-gray-500 mt-2">
                      Ihsan is to worship Allah as if you see Him, and if you do not see Him, then He sees you.
                    </p>
                  </div>
                </div>

                {/* Ihsan Explanation */}
                <div className="bg-orange-100 border border-orange-300 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-orange-800 mb-4 font-urdu urdu-text text-center">
                    احسان کی تعریف و تشریح
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-orange-700 mb-2 font-urdu urdu-text">پہلا درجہ</h4>
                      <p className="text-sm text-orange-600 font-urdu urdu-text">
                        اللہ کی عبادت اس طرح کرو گویا تم اسے دیکھ رہے ہو۔ یہ اعلیٰ ترین درجہ ہے جہاں انسان کو اللہ کی حضوری کا احساس ہوتا ہے۔
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-700 mb-2 font-urdu urdu-text">دوسرا درجہ</h4>
                      <p className="text-sm text-orange-600 font-urdu urdu-text">
                        اگر تم اسے نہیں دیکھتے تو وہ تمہیں دیکھتا ہے۔ یہ وہ درجہ ہے جہاں انسان کو اللہ کی نگرانی کا احساس ہوتا ہے۔
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quranic Reference */}
                <div className="bg-orange-50 border-r-4 border-orange-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <span className="text-orange-600">📖</span>
                    <span className="font-urdu urdu-text">قرآنی حوالہ</span>
                  </h3>
                  <div className="text-right mb-3">
                    <p className="quranic-ayah">
                      إِنَّ اللَّهَ مَعَ الصَّابِرِينَ
                    </p>
                  </div>
                  <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                    بےشک اللہ صبر کرنے والوں کے ساتھ ہے۔
                  </p>
                  <p className="text-xs italic text-gray-500 mt-2">
                    "Indeed, Allah is with the patient." (Quran 2:153)
                  </p>
                </div>

                {/* Additional Hadith */}
                <div className="bg-orange-50 border-r-4 border-orange-500 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <span className="text-orange-600">🕌</span>
                    <span className="font-urdu urdu-text">حدیث شریف</span>
                  </h3>
                  <div className="text-right mb-3">
                    <p className="quranic-hadith">
                      إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ
                    </p>
                  </div>
                  <p className="font-urdu text-sm text-gray-600 urdu-text leading-relaxed">
                    بےشک اللہ نے ہر چیز پر احسان لکھ دیا ہے۔
                  </p>
                  <p className="text-xs italic text-gray-500 mt-2">
                    "Indeed, Allah has prescribed excellence (ihsan) in everything." (Muslim)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 