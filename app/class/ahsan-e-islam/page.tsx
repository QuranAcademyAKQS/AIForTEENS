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
    hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ أَطَاعَنِي فَقَدْ أَطَاعَ اللَّهَ، وَمَنْ عَصَانِي فَقَدْ عَصَى اللَّهَ" - "Whoever obeys me has obeyed Allah, and whoever disobeys me has disobeyed Allah." (Bukhari and Muslim)`,
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
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ" - "Allah said: 'Whoever shows enmity to a friend of Mine, I will declare war against him. My servant does not draw near to Me with anything more beloved to Me than the religious duties I have obligated upon him.'" (Bukhari)`,
        color: 'bg-blue-400',
        children: [
          {
            id: 'obligations',
            title: 'Fulfillment of Obligations and Duties',
            urduTitle: 'فرائض و واجبات کی ادائیگی',
            description: 'Conscious observance of performing obligations (Faraiz) and duties (Wajibat) as prescribed by Islamic law. This includes daily prayers, fasting, zakat, and other mandatory religious practices.',
            ayah: `حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ - "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient." (Quran 2:238)`,
            hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ، فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ" - "The first thing for which a person will be brought to account on the Day of Resurrection will be his prayer. If it is complete, he will be successful and prosper, and if it is incomplete, he will fail and lose." (Abu Dawud, Tirmidhi)`,
            color: 'bg-blue-300'
          },
          {
            id: 'avoidance',
            title: 'Avoidance of Forbidden and Disliked Things',
            urduTitle: 'حرام و مکروہات سے اجتناب',
            description: 'Conscious abstention from forbidden (Haram) and disliked (Makroohaat) things as defined by Islamic law. This includes avoiding prohibited foods, actions, and behaviors.',
            ayah: `وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ - "And do not approach immoralities - what is apparent of them and what is concealed." (Quran 6:151)`,
            hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ حَرَّمَ الْخَمْرَ وَثَمَنَهَا، وَحَرَّمَ الْمَيْتَةَ وَثَمَنَهَا، وَحَرَّمَ الْخِنْزِيرَ وَثَمَنَهُ" - "Allah has forbidden wine and its price, dead meat and its price, and pork and its price." (Abu Dawud)`,
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
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لِأَخِيهِ مِنْ عِرْضِهِ أَوْ شَيْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ قَبْلَ أَنْ لَا يَكُونَ دِينَارٌ وَلَا دِرْهَمٌ" - "Whoever has wronged his brother with regard to his honor or anything else, let him seek his forgiveness today, before there will be no dinar or dirham." (Bukhari)`,
        color: 'bg-blue-400',
        children: [
          {
            id: 'halal-earnings',
            title: 'Contentment with Halal and Pure Earnings',
            urduTitle: 'معاش میں حلال و طیب پر اکتفا',
            description: 'Regarding one\'s livelihood, to be content and suffice with what is lawful (Halal) and pure (Tayyib). This ensures that one\'s income and sustenance come from permissible sources.',
                    ayah: `يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ - "O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy." (Quran 2:168)`,
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ" - "Allah is pure and accepts only what is pure. Allah has commanded the believers to do what He commanded the messengers." (Muslim)`,
            color: 'bg-blue-300'
          },
          {
            id: 'social-veil',
            title: 'Islamic Veil in Social Interaction',
            urduTitle: 'معاشرت میں شرعی پرده',
            description: 'In the context of one\'s social life, observing Islamic veil (Shar\'i Pardah) outside and at home, and abstaining from non-mahram (unrelated individuals) and mixed gatherings.',
            color: 'bg-blue-300'
          },
          {
            id: 'service',
            title: 'Service to Creation',
            urduTitle: 'خدمت خلق',
            description: 'In one\'s life, regarding mutual dealings, giving special attention to fulfilling rights (Adaigi Huqooq), fulfilling promises (Eifa-e-Ahad), returning trusts (Ada-e-Amanat), and serving creation (Khidmat-e-Khalq).',
                    ayah: `إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ - "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice." (Quran 4:58)`,
        hadees: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ ﷺ: "مَنْ كَانَتْ لَهُ مَظْلَمَةٌ لِأَخِيهِ مِنْ عِرْضِهِ أَوْ شَيْءٍ فَلْيَتَحَلَّلْهُ مِنْهُ الْيَوْمَ قَبْلَ أَنْ لَا يَكُونَ دِينَارٌ وَلَا دِرْهَمٌ" - "Whoever has wronged his brother with regard to his honor or anything else, let him seek his forgiveness today, before there will be no dinar or dirham." (Bukhari)`,
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
        color: 'bg-green-400'
      },
      {
        id: 'sincerity',
        title: 'Spirit of "Religion is Sincerity"',
        urduTitle: 'الدین النصیحہ کی روح',
        color: 'bg-green-400'
      },
      {
        id: 'prioritization',
        title: 'Prioritization of Nearest to Nearest',
        urduTitle: 'الا قرب فالا قرب کی ترتیب',
        color: 'bg-green-400'
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
              <div className="font-urdu urdu-text truncate">
                {item.urduTitle}
              </div>
              <div className="text-sm opacity-90 truncate">{item.title}</div>
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
        .urdu-text {
          line-height: 2;
          margin-bottom: 0.5rem;
        }
        .urdu-title {
          line-height: 2.2;
          margin-bottom: 0.75rem;
        }
        .urdu-description {
          line-height: 2.1;
          margin-bottom: 1rem;
        }
      `}</style>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Left side - Message of Tanzeem-e-Islami */}
            <div className="text-right text-xs opacity-80 w-48 flex-shrink-0">
              <div className="font-urdu urdu-text truncate">تنظیم اسلامی کا پیغام</div>
              <div className="truncate">Message of Tanzeem-e-Islami</div>
              <div className="font-urdu urdu-text truncate">بانی تنظیم : ڈاکٹر اسرار احمد</div>
              <div className="truncate">Founder: Dr. Israr Ahmed</div>
            </div>
            
            {/* Center - Main title */}
            <div className="text-center flex-1 px-4">
              <h1 className="text-4xl font-bold mb-2 font-urdu urdu-title">
                تنظیم اسلامی میں احسان اسلام کے تقاضے
              </h1>
              <p className="text-xl opacity-90">Demands of Ehsan-e-Islam in Tanzeem-e-Islami</p>
            </div>
            
            {/* Right side - System of Khilafat-e-Rashida */}
            <div className="text-left text-xs opacity-80 w-48 flex-shrink-0">
              <div className="font-urdu urdu-text truncate">خلافت راشدہ کا نظام</div>
              <div className="truncate">System of Khilafat-e-Rashida</div>
              <div className="font-urdu urdu-text truncate">امیر تنظیم : شجاع الدین شیخ</div>
              <div className="truncate">Ameer: Shujauddin Sheikh</div>
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
    </div>
  );
} 