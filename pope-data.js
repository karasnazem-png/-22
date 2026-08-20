const sharedPopeImage = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80';
const sourceUrls = [
  'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-001-Pope-Mark-the-Evangelist_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-002-Pope-Anianus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-003-Pope-Avilius_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-004-Pope-Kedron_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-005-Pope-Primus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-006-Pope-Justus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-007-Pope-Eumenes_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-008-Pope-Markianos.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-009-Pope-Celadion_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-010-Pope-Agrippinus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-011-Pope-Julian_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-012-Pope-Demetrius_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-013-Pope-Theoclas_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-014-Pope-Dionysius_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-015-Pope-Maximus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-016-Pope-Theonas_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-017-Pope-Peter-the-Martyr_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-018-Pope-Achillas_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-019-Pope-Alexander-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-020-Pope-Athanasius-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-021-Pope-Peter-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-022-Pope-Timothy-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-023-Pope-Theophilus-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-024-Pope-Cyril-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-025-Pope-Dioscorus-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-026-Pope-Timothy-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-027-Pope-Peter-III_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-028-Pope-Athanasius-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-029-Pope-John-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-030-Pope-John-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-031-Pope-Dioscorus-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-032-Pope-Timothy-III_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-033-Pope-Theodosius-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-034-Pope-Peter-IV_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-035-Pope-Damian_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-036-Pope-Anastasius_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-037-Pope-Andronicus_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-038-Pope-Benjamin-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-039-Pope-Agatho_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-040-Pope-John-III_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-041-Pope-Isaac_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-042-Pope-Simeon-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-043-Pope-Alexander-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-044-Pope-Cosmas-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-045-Pope-Theodorus-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrThodox-Popes/Life-of-Coptic-Pope-046-Pope-Khail-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-Orثodox-Popes/Life-of-Coptic-Pope-047-Pope-Mina-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-048-Pope-John-IV_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-049-Pope-Mark-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-050-Pope-Jacob_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-051-Pope-Simeon-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-052-Pope-Joseph-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-053-Pope-Khail-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-054-Pope-Cosmas-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-055-Pope-Shenouda-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-056-Pope-Michael-I----Khail-III_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-057-Pope-Gabriel-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-058-Pope-Cosmas-III_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-059-Pope-Macarius-I_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-060-Pope-Theophanius_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-061-Pope-Mina-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-062-Pope-Abraham_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-063-Pope-Philotheos_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-064-Pope-Zacharias_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-065-Pope-Shenouda-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-066-Pope-Christodolos_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-067-Pope-Cyril-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-068-Pope-Michael-II----IV_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-069-Pope-Macarius-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-070-Pope-Gabriel-II_.html',
  'https://st-takla.org/Saints/Coptic-Synaxarium-OrOrthodox-Saints-Biography-00-Coptic-OrOrthodox-Popes/Life-of-Coptic-Pope-071-Pope-Michael-III----V_.html'
];
function getPopeImage(index) {
  return sharedPopeImage;
}

const popes = [
{
    id: 1,
    image: 'assets/images/pope-1.png',
    name: 'البابا مرقس الأول',
    reign: '61 - 68 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا مرقس الأول من أوائل من حملوا أمانة الكرسي الرسولي في الإسكندرية، وقد ارتبطت سيرته ببدء الرسالة الرسولية في مصر. ويُذكر في كتب السيرة الكنسية بأنه من الذين أسسوا أولى دعائم الكنيسة في المدينة، وارتبط اسمه بظهور الهوية الرسولية في الإسكندرية.'
  
  
  
  
  
  },
{
    id: 2,
    image: 'assets/images/pope-2.png',
    name: 'البابا أنيانوس',
    reign: '68 - 83 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'اشتهر البابا أنيانوس في أولى مراحل تاريخ الكنيسة بالإخلاص والخدمة، وقد ذُكر في الروايات الكنسية بأنه من الذين ساهموا في تثبيت أسس القيادة الروحية في المجتمع المسيحي المبكر، وارتبطت سيرته بتأكيد الاستقرار الكنسي في الفترة التي نشأت فيها الجماعة الإسكندرية.'
  
  
  
  
  
  },
{
    id: 3,
    image: 'assets/images/pope-3.png',
    name: 'البابا ميليوس',
    reign: '83 - 95 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا ميليوس من الأسماء التي وردت في السجل الكنسي المبكر، وقد ارتبطت سيرته بالاستمرار في خدمة الكنيسة ونقل التقاليد الرسولية إلى الجيل الذي تبعه، وقد ذُكر في التاريخ الكنسي ضمن الذين حافظوا على الرسالة الأولى في المدينة.'
  
  
  
  
  
  },
{
    id: 4,
    image: 'assets/images/pope-4.png',
    name: 'البابا كرذوذوس',
    reign: '95 - 106 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرة البابا كرذوذوس ضمن ترتيب البطاركة الأوائل، ويمثل هذا الاسم جزءًا من الذاكرة الكنسية التي حفظت أسماء القادة الذين سارت الكنيسة على أيديهم في بداياتها، ويُعد من الأسماء التي تدل على استمرار السلسلة البطريركية منذ العصر المبكر.'
  
  
  
  
  
  },
{
    id: 5,
    image: 'assets/images/pope-5.png',
    name: 'البابا بريموس',
    reign: '106 - 118 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'شغل البابا بريموس الكرسي الرسولي في مرحلة انتقالية من أوائل القرن الثاني، وارتبطت حياته بالاستمرار في خدمة الرعية وإبقاء الكنيسة على مسارها الروحي خلال زمنٍ كان فيه الترتيب الكنسي في نمو مستمر.'
  
  
  
  
  
  },
{
    id: 6,
    image: 'assets/images/pope-6.png',
    name: 'البابا يسطس',
    reign: '118 - 129 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا يسطس في السلك البطريركي المبكر ضمن من حفظوا اسم الكنيسة في الذاكرة التاريخية على مر العصور، وقد أُدرج اسمه ضمن البطاركة الذين ما زالت أسماؤهم ترتبط بتاريخ الكنيسة الإسكندرية.'
  
  
  
  
  
  },
{
    id: 7,
    name: 'البابا أومانيوس',
    reign: '129 - 141 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين عُرفت أسماؤهم في المراجع التاريخية، ويمثل البابا أومانيوس جزءًا من السلسلة التي تعاقبت على الكرسي المرقسي عبر القرون الأولى من تاريخ الكنيسة.'
  
  
  
  
  
  },
{
    id: 8,
    name: 'البابا مرقيانوس',
    reign: '141 - 152 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يأتي البابا مرقيانوس في الترتيب التاريخي باعتباره واحدًا من البطاركة الذين ساهموا في استمرار حياة الكنيسة في مصر، ويُذكر اسمه ضمن من حافظوا على مسيرة الكنيسة في زمنٍ تعاقب فيه القادة الروحيون.'
  
  
  
  
  
  },
{
    id: 9,
    name: 'البابا كلاديانوس',
    reign: '152 - 166 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سُجل اسم البابا كلاديانوس ضمن البطاركة الأوائل، وأصبح جزءًا من الذاكرة التي يرتبط بها تاريخ الكنيسة القبطية، ويمثل هذا الاسم جزءًا من السلسلة التي بدأت من الفترات الأولى لقيام الكنيسة في مصر.'
  
  
  
  
  
  },
{
    id: 10,
    name: 'البابا أغريبينوس',
    reign: '166 - 178 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من الأسماء التي اشتهرت في الترتيب البيزنطي والقبطي، ويظهر البابا أغريبينوس في مواضع مختلفة من كتب التاريخ الكنسي كأحد من حملوا مسؤولية الكرسي الرسولي في القرون الأولى.'
  
  
  
  
  
  },
{
    id: 11,
    name: 'البابا يوليانوس',
    reign: '178 - 188 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته ضمن فترات التتابع البطريركي، وهي صورة من صور استمرارية الكنيسة عبر القرون.'
  
  
  
  
  
  },
{
    id: 12,
    name: 'البابا ديمتريوس الأول',
    reign: '188 - 230 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'أحد أبرز الأسماء بين البطاركة المبكرين، وارتبطت سيرته بقوة الكنيسة في الفترة التي كانت فيها الإسكندرية مركزًا روحيًا مهمًا.'
  
  
  
  
  
  },
{
    id: 13,
    name: 'البابا ياروكلاس',
    reign: '230 - 246 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُدرج في السلسلة التاريخية كأحد السفراء الروحيين الذين حافظوا على استمرار الكرسي الرسولي.'
  
  
  
  
  
  },
{
    id: 14,
    name: 'البابا ديونسيوس',
    reign: '246 - 264 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من الأسماء التي تُذكر في تاريخ الكنيسة القبطية بسبب مكانته وأثره في المحافظة على التقاليد الكنسية.'
  
  
  
  
  
  },
{
    id: 15,
    name: 'البابا مكسيموس',
    reign: '264 - 282 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُعرف سيرته في كتب التاريخ باعتبارها جزءًا من المنظومة التي ربطت الخلافة البطريركية بالهوية القبطية.'
  
  
  
  
  
  },
{
    id: 16,
    name: 'البابا ثاؤنا',
    reign: '282 - 301 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يأتي في السجل التاريخي كواحد من الذين حملوا راية الكنيسة في زمنٍ شهد تحديات كبيرة.'
  
  
  
  
  
  },
{
    id: 17,
    name: 'البابا بطرس الأول',
    reign: '302 - 311 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته ضمن من عُرفوا بالشهادة والصبر، وهو مثال على قوة الإيمان في زمن الاضطهاد.'
  
  
  
  
  
  },
{
    id: 18,
    name: 'البابا أرشلاوس',
    reign: '311 - 312 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من قائدي الكنيسة في المرحلة الانتقالية بعد الاضطهاد، وارتبط اسمه بترسيخ البطريركية في الذاكرة الجمعية.'
  
  
  
  
  
  },
{
    id: 19,
    name: 'البابا ألكسندروس الأول',
    reign: '312 - 328 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد من الشخصيات البارزة في تاريخ الكنيسة القبطية بسبب دوره في توحيد الرعية خلال فترة حرجة.'
  
  
  
  
  
  },
{
    id: 20,
    name: 'البابا أثناسيوس الأول',
    reign: '328 - 373 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من أعظم مراجع الكنيسة القبطية، وارتبطت سيرته بالتحولات الفكرية والروحية التي ألهمت الأجيال.'
  
  
  
  
  
  },
{
    id: 21,
    name: 'البابا بطرس الثاني',
    reign: '373 - 379 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في الترتيب التاريخي كواحد من القادة الروحيين الذين حافظوا على سير الكنيسة في زمن التحديات.'
  
  
  
  
  
  },
{
    id: 22,
    name: 'البابا تيموثاوس الأول',
    reign: '379 - 385 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'شغل منصب البطريرك في مرحلة مهمة من تاريخ الكنيسة، وترك ذكرًا في السجل الكنسي الذي يُستند إليه اليوم.'
  
  
  
  
  
  },
{
    id: 23,
    name: 'البابا ثاؤفيلس',
    reign: '385 - 412 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين عُرفوا بقدرتهم على قيادة الكنيسة عبر التغيرات الهامة التي طرأت في المجتمعات المسيحية.'
  
  
  
  
  
  },
{
    id: 24,
    name: 'البابا كيرلس الأول',
    reign: '412 - 444 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد من أشهر أسماء الكنيسة القبطية، وتُذكر سيرته في كثير من الكتب باعتبارها من أهم صفحات التقاليد المسيحية.'
  
  
  
  
  
  },
{
    id: 25,
    name: 'البابا ديسقورس الأول',
    reign: '444 - 454 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في تاريخ الكنيسة كواحد من القادة الذين سعى إلى حماية العقيدة في زمن التوترات الكنسية.'
  
  
  
  
  
  },
{
    id: 26,
    name: 'البابا تيموثاوس الثاني',
    reign: '455 - 477 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يمثل جزءًا من التراث البطريركي القبطى الذي استمر عبر القرون رغم التبدلات السياسية.'
  
  
  
  
  
  },
{
    id: 27,
    name: 'البابا بطرس الثالث',
    reign: '477 - 489 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سُجل اسمه في الحركات التي حافظت على استمرارية الكرسي الرسولي في الإسكندرية.'
  
  
  
  
  
  },
{
    id: 28,
    name: 'البابا أثناسيوس الثاني',
    reign: '489 - 496 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ينتمي إلى سلسلة من البطاركة الذين تركوا بصمة في الذاكرة الدينية للكنيسة القبطية.'
  
  
  
  
  
  },
{
    id: 29,
    name: 'البابا يوأنس الأول',
    reign: '496 - 505 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر كواحد من الذين حملوا أمانة القيادة الروحية خلال فترة من التوتر والاضطراب.'
  
  
  
  
  
  },
{
    id: 30,
    name: 'البابا يوأنس الثاني',
    reign: '505 - 516 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'مما يميز سيرته أنها تُقرأ ضمن مسيرة البطاركة الذين حافظوا على الاستمرار الروحي للكنيسة.'
  
  
  
  
  
  },
{
    id: 31,
    name: 'البابا ديسقورس الثاني',
    reign: '516 - 518 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُدرج في السجلات التاريخية كواحد من الذين عاصروا التحولات الهامة في الكنيسة الإسكندرية.'
  
  
  
  
  
  },
{
    id: 32,
    name: 'البابا تيموثاوس الثالث',
    reign: '518 - 536 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تظهر سيرته في سياق الحفاظ على الهوية الكنسية خلال فترات انتقالية في تاريخ الشرق المسيحي.'
  
  
  
  
  
  },
{
    id: 33,
    name: 'البابا ثيودوسيوس الأول',
    reign: '536 - 567 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين تُحفظ أسماؤهم في الذاكرة الدينية باعتبارهم جزءًا من جسد الكنيسة الجامعة.'
  
  
  
  
  
  },
{
    id: 34,
    name: 'البابا بطرس الرابع',
    reign: '567 - 569 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته في التواريخ التي تستعرض انتقال السلطة البطريركية بين القرون المتعاقبة.'
  
  
  
  
  
  },
{
    id: 35,
    name: 'البابا دميان',
    reign: '569 - 605 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد من الأسماء التي تضفي عمقًا على سجل البطريركيات في المرحلة المبكرة من العصور الوسطى.'
  
  
  
  
  
  },
{
    id: 36,
    name: 'البابا أنسطاسيوس',
    reign: '605 - 616 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ارتبطت سيرته بالاستمرار الكنسي في عصرٍ شهد تحولات كبيرة في المنطقة وداخل الكنيسة.'
  
  
  
  
  
  },
{
    id: 37,
    name: 'البابا أندرونيقوس',
    reign: '616 - 623 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في السيرة الكنسية كواحد من مناحي التتابع الروحي في عهدٍ كان فيه البطريرك أداة للاتصال بين الناس والكنيسة.'
  
  
  
  
  
  },
{
    id: 38,
    name: 'البابا بنيامين الأول',
    reign: '623 - 662 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين تُحفظ أسماؤهم في.records التاريخية، ويمثلون استمرارًا لرسالة الكنيسة في مصر.'
  
  
  
  
  
  },
{
    id: 39,
    name: 'البابا أغاثون',
    reign: '662 - 680 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُقرأ سيرته كجزء من المرحلة التي أصبحت فيها الكنيسة القبطية أكثر تميزًا في الذاكرة العامة.'
  
  
  
  
  
  },
{
    id: 40,
    name: 'البابا يوأنس الثالث',
    reign: '680 - 689 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعتبر من البطاركة الذين حملوا مسؤولية القيادة خلال فترات اضطراب سياسية ودينية.'
  
  
  
  
  
  },
{
    id: 41,
    name: 'البابا إسحق',
    reign: '690 - 692 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سُجلت سيرته ضمن قائمة البطاركة التي تعكس استمرار العمل الكنسي عبر القرون.'
  
  
  
  
  
  },
{
    id: 42,
    name: 'البابا سيمون الأول',
    reign: '692 - 700 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر كواحد من القادة الروحيين الذين حافظوا على مكانة الكرسي الرسولي في أجواء متغيرة.'
  
  
  
  
  
  },
{
    id: 43,
    name: 'البابا الكسندروس الثاني',
    reign: '704 - 729 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من الشخصيات البارزة في سلسلة البطاركة التي تعاقبت خلال القرون الوسطى في مصر.'
  
  
  
  
  
  },
{
    id: 44,
    name: 'البابا قزمان الأول',
    reign: '729 - 730 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تظهر سيرته ضمن السجل الذي يوثق انتقال السلطة الروحية في تلك الحقبة.'
  
  
  
  
  
  },
{
    id: 45,
    name: 'البابا ثيؤذوروس الأول',
    reign: '730 - 742 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في كتب التاريخ كواحد من القادة الذين حافظوا على استمرار الخدمات الروحية في الإسكندرية.'
  
  
  
  
  
  },
{
    id: 46,
    name: 'البابا خائيل الأول',
    reign: '743 - 767 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سيرته جزء من سرد البطاركة الذين تنقلت أسماؤهم عبر مراحل تاريخية مختلفة.'
  
  
  
  
  
  },
{
    id: 47,
    name: 'البابا مينا الأول',
    reign: '767 - 776 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُدرج في الترتيب البطريركي باعتباره من القادة الذين بنوا على تراث الكرسي الرسولي.'
  
  
  
  
  
  },
{
    id: 48,
    name: 'البابا يؤانس الرابع',
    reign: '777 - 799 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تظهر سيرته في السجل البطريركي كدليل على استمرارية الكنيسة في زمن التغييرات الثقافية.'
  
  
  
  
  
  },
{
    id: 49,
    name: 'البابا مرقس الثاني',
    reign: '799 - 819 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين عُرفت أسماؤهم في تاريخ الكنيسة القبطية خلال القرون الوسطى.'
  
  
  
  
  
  },
{
    id: 50,
    name: 'البابا يعقوب',
    reign: '819 - 830 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته ضمن سلسلة البطاركة التي حافظت على التقاليد في مرحلةٍ حرجة من التاريخ.'
  
  
  
  
  
  },
{
    id: 51,
    name: 'البابا سيمون الثاني',
    reign: '830 - 830 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من الأسماء التي تطرق إليها السرد التاريخي بشكل مختصر لكنه مهم في الترتيب البطريركي.'
  
  
  
  
  
  },
{
    id: 52,
    name: 'البابا يوساب الأول',
    reign: '831 - 849 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد من القادة الذين حافظوا على مكانة الكرسي الرسولي في وقتٍ كانت فيه الكنيسة في حاجة إلى الاستقرار.'
  
  
  
  
  
  },
{
    id: 53,
    name: 'البابا خائيل الثاني',
    reign: '849 - 851 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سيرته تمثل جزءًا من السجل التاريخي الذي يُستشهد به عند الحديث عن تسلسل البطاركة.'
  
  
  
  
  
  },
{
    id: 54,
    name: 'البابا قزمان الثاني',
    reign: '851 - 858 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين تُحفظ أسماؤهم في الترتيب الإسكندري، ويمثلون خيطًا من الاستمرارية.'
  
  
  
  
  
  },
{
    id: 55,
    name: 'البابا شنودة الأول',
    reign: '859 - 880 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تشتهر سيرته بكونها من أكثر الروايات ارتباطًا بالهوية القبطية في الذاكرة الدينية الحديثة.'
  
  
  
  
  
  },
{
    id: 56,
    name: 'البابا ميخائيل الأول',
    reign: '880 - 907 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في السجل الكنسي باعتباره من القادة الذين ساهموا في استمرار الكنيسة عبر العصور المتعاقبة.'
  
  
  
  
  
  },
{
    id: 57,
    name: 'البابا غبريال الأول',
    reign: '909 - 920 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُعرض سيرته كجزء من تاريخ الكنيسة الذي يربط المعاصرة بالتراث القديم.'
  
  
  
  
  
  },
{
    id: 58,
    name: 'البابا قزمان الثالث',
    reign: '920 - 932 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين شكّلوا صفحة في تاريخ الكنيسة خلال القرون الوسطى المتأخرة.'
  
  
  
  
  
  },
{
    id: 59,
    name: 'البابا مكاريوس الأول',
    reign: '932 - 952 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سُجلت سيرته في التاريخ الكنسي باعتبارها من السلالات التي حفظت المكانة الدينية للكرسي المرقسي.'
  
  
  
  
  
  },
{
    id: 60,
    name: 'البابا ثاؤفانيوس',
    reign: '952 - 956 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تمثل سيرته جزءًا من المشهد الذي ربط بين التاريخ الكنسي والهوية القبطية الحديثة.'
  
  
  
  
  
  },
{
    id: 61,
    name: 'البابا مينا الثاني',
    reign: '956 - 974 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في السجل التاريخي كواحد من الذين حملوا رسالة الكنيسة في مرحلةٍ كانت فيها الرعية بحاجة إلى الاستقرار.'
  
  
  
  
  
  },
{
    id: 62,
    name: 'البابا ابرآم',
    reign: '975 - 979 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ينتمي إلى سلسلة من البطاركة التي تُقرأ في سياق التوارث الروحي للكنيسة القبطية.'
  
  
  
  
  
  },
{
    id: 63,
    name: 'البابا فيلوثاؤس',
    reign: '979 - 1003 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته باعتبارها جزءًا من التراكم التاريخي الذي مهد لمرحلة لاحقة من الاستقرار الكنسي.'
  
  
  
  
  
  },
{
    id: 64,
    name: 'البابا زكريا',
    reign: '1004 - 1032 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُشكل اسمه جزءًا من سيرة البطاركة الذين تستذكرهم الكنيسة في ذكرى الروحانية والقيادة.'
  
  
  
  
  
  },
{
    id: 65,
    name: 'البابا شنودة الثاني',
    reign: '1032 - 1046 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر في السجلات التاريخية باعتباره أحد الأسماء التي ساهمت في ترسيخ هوية الكنيسة في ذلك العصر.'
  
  
  
  
  
  },
{
    id: 66,
    name: 'البابا خرسطوذولس',
    reign: '1046 - 1077 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تأتي سيرته ضمن الترتيب الذي يوضح كيف استمرت الكنيسة في إيصال رسالتها عبر الأجيال.'
  
  
  
  
  
  },
{
    id: 67,
    name: 'البابا كيرلس الثاني',
    reign: '1078 - 1092 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يمثل جزءًا من تاريخ الكنيسة الذي يُقرأ اليوم كجزء من الهوية الروحية والإنسانية للمجتمع القبطي.'
  
  
  
  
  
  },
{
    id: 68,
    name: 'البابا ميخائيل الثاني',
    reign: '1092 - 1102 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تظهر سيرته في سياق البطاركة الذين درّبوا الذاكرة التاريخية للكنيسة على التذكر والتقدير.'
  
  
  
  
  
  },
{
    id: 69,
    name: 'البابا مكاريوس الثاني',
    reign: '1102 - 1128 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'من البطاركة الذين يُذكرون عند الحديث عن الاستمرارية الروحية في مرحلة انتقالية من تاريخ الكنيسة.'
  
  
  
  
  
  },
{
    id: 70,
    name: 'البابا غبريال الثاني',
    reign: '1131 - 1145 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُحاط سيرته بالتراث الذي يُستحضر في العصور الحديثة عند الحديث عن البطاركة والكرسي الرسولي.'
  
  
  
  
  
  },
{
    id: 71,
    name: 'البابا ميخائيل الثالث',
    reign: '1145 - 1146 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يأتي في نهاية السلسلة التي قصدت إلى توثيق تاريخ الكنيسة القبطية عبر أسماء كثيرة ومختلفة.'
  
  
  
  
  
  },
{
    id: 72,
    name: 'البابا يوأنس الخامس',
    reign: '1147 - 1166 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا يوأنس الخامس من البطاركة الذين امتد ذكرهم عبر تاريخ الكنيسة القبطية، وارتبطت سيرته بمرحلة انتقالية في قاعدة القيادة الروحية للإسكندرية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-072-Pope-John-V_.html'
  
  
  
  
  
  },
{
    id: 73,
    name: 'البابا مرقص الثالث',
    reign: '1166 - 1189 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا مرقص الثالث ضمن السلسلة التي استمرت فيها الكنيسة القبطية في خدمة الرعية والرسالة الإسكندرية عبر القرون الوسطى.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-073-Pope-Mark-III_.html'
  
  
  
  
  
  },
{
    id: 74,
    name: 'البابا يوأنس السادس',
    reign: '1189 - 1216 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يشكل البابا يوأنس السادس جزءًا من تقويم البطاركة الذين حافظوا على استمرارية الكنيسة في فترة من التغيّرات السياسية والاجتماعية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-074-Pope-John-VI_.html'
  
  
  
  
  
  },
{
    id: 75,
    name: 'البابا كيرلس الثالث',
    reign: '1235 - 1243 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يرتبط اسم البابا كيرلس الثالث بعهدٍ أسهم في الحفاظ على الهوية الروحية للكنيسة القبطية في مرحلةٍ تاريخية حافلة بالتحديات.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-075-Pope-Cyril-III_.html'
  
  
  
  
  
  },
{
    id: 76,
    name: 'البابا اثناسيوس الثالث',
    reign: '1250 - 1261 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُحفظ اسم البابا أثناسيوس الثالث في تاريخ الكنيسة القبطية كواحد من القادة الذين أسهموا في استقرار الرعية والحفاظ على تعاليمها.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-076-Pope-Athanasius-III_.html'
  
  
  
  
  
  },
{
    id: 77,
    name: 'البابا غبريال الثالث',
    reign: '1268 - 1271 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا غبريال الثالث في سرد البطاركة الذين حافظوا على التقاليد الكنسية في زمنٍ شهد تغيّرات متعددة في المشرق المسيحي.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-077-Pope-Gabriel-III_.html'
  
  
  
  
  
  },
{
    id: 78,
    name: 'البابا يوأنس السابع',
    reign: '1271 - 1293 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يمثل البابا يوأنس السابع جزءًا من السلسلة البطريركية التي استمرت في إرساء التقاليد الروحية داخل الكنيسة الإسكندرية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-078-Pope-John-VII_.html'
  
  
  
  
  
  },
{
    id: 79,
    name: 'البابا ثيؤدوسيوس الثاني',
    reign: '1294 - 1300 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا ثيؤدوسيوس الثاني من أسماء البطاركة الذين حفظت لهم الذاكرة القبطية حكاية الاستمرارية والقيادة الروحية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-079-Pope-Theodosius-II_.html'
  
  
  
  
  
  },
{
    id: 80,
    name: 'البابا يوأنس الثامن',
    reign: '1300 - 1320 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرته ضمن سلسلة البطاركة الذين ساهموا في استقرار الكنيسة في مرحلة انتقالية من تاريخ مصر المسيحية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-080-Pope-John-VIII_.html'
  
  
  
  
  
  },
{
    id: 81,
    name: 'البابا يوأنس التاسع',
    reign: '1320 - 1327 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا يوأنس التاسع من القادة الذين دوّنت لهم السجلات الكنيسة تاريخها في القرون الوسطى.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-081-Pope-John-IX_.html'
  
  
  
  
  
  },
{
    id: 82,
    name: 'البابا بنيامين الثاني',
    reign: '1327 - 1339 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُشير اسم البابا بنيامين الثاني إلى استمرار التراث البطريركي القبطى في مرحلة أبرزت حضور الكنيسة في المجتمع المصري.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-082-Pope-Benjamin-II_.html'
  
  
  
  
  
  },
{
    id: 83,
    name: 'البابا بطرس الخامس',
    reign: '1340 - 1348 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا بطرس الخامس في تناسل البطاركة الذين حافظوا على الروح الرعوية في مرحلة تاريخية كانت تحتاج إلى الاستقرار.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-083-Pope-Peter-V_.html'
  
  
  
  
  
  },
{
    id: 84,
    name: 'البابا مرقس الرابع',
    reign: '1348 - 1363 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تمتد سيرته عبر التفاصيل التي تذكرها الذاكرة الكنسية عن البطاركة الذين واصلوا التدبير الروحي بعد زمن التغيّر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-084-Pope-Mark-IV_.html'
  
  
  
  
  
  },
{
    id: 85,
    name: 'البابا يوأنس العاشر',
    reign: '1363 - 1369 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يرتبط اسم البابا يوأنس العاشر بالهوية البطريركية التي استمرت عبر مختلف مراحل التاريخ القبطي.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-085-Pope-John-X_.html'
  
  
  
  
  
  },
{
    id: 86,
    name: 'البابا غبريال الرابع',
    reign: '1370 - 1378 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'شهدت سيرته مرحلةً استثنائية في تاريخ الكنيسة القبطية، وكان اسمه من ضمن أسماء الموارث الروحيين في هذا العصر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-086-Pope-Gabriel-IV_.html'
  
  
  
  
  
  },
{
    id: 87,
    name: 'البابا متاؤس الأول',
    reign: '1378 - 1408 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا متاؤس الأول من البطاركة الذين يرمز اسمهم إلى استمرارية الكرسي الرسولي في الإسكندرية عبر القرون.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-087-Pope-Matthew-I_.html'
  
  
  
  
  
  },
{
    id: 88,
    name: 'البابا غبريال الخامس',
    reign: '1409 - 1427 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ارتبط اسم البابا غبريال الخامس بتكوين تراث الكنيسة القبطية خلال أواخر العصور الوسطى.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-088-Pope-Gabriel-V_.html'
  
  
  
  
  
  },
{
    id: 89,
    name: 'البابا يوأنس الحادي عشر',
    reign: '1427 - 1452 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا يوأنس الحادي عشر في السلسلة البطريركية التي أدت إلى ترسيخ الخيط الروحي للكنيسة القبطية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-089-Pope-John-XI_.html'
  
  
  
  
  
  },
{
    id: 90,
    name: 'البابا متاؤس الثاني',
    reign: '1452 - 1465 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُحفظ اسم البابا متاؤس الثاني كجزء من سجل البطاركة الذين أسهموا في حفظ الهوية الروحية للكنيسة في عصرٍ متجدد.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-090-Pope-Matthew-II_.html'
  
  
  
  
  
  },
{
    id: 91,
    name: 'البابا غبريال السادس',
    reign: '1466 - 1474 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا غبريال السادس جزءًا من سلسلة البطاركة التي حافظت على التقاليد في القرن الخامس عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-091-Pope-Gabriel-VI_.html'
  
  
  
  
  
  },
{
    id: 92,
    name: 'البابا ميخائيل الرابع',
    reign: '1477 - 1478 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا ميخائيل الرابع في تاريخ الكنيسة القبطية كاسم صغير في المدة لكنه مهم في السلسلة البطريركية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-092-Pope-Michael-IV----VI_.html'
  
  
  
  
  
  },
{
    id: 93,
    name: 'البابا يوأنس الثاني عشر',
    reign: '1480 - 1483 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُحفظ البابا يوأنس الثاني عشر في سجل البطاركة الذين حافظوا على الذاكرة الروحية في أواخر القرن الخامس عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-093-Pope-John-XII_.html'
  
  
  
  
  
  },
{
    id: 94,
    name: 'البابا يوأنس الثالث عشر',
    reign: '1484 - 1524 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا يوأنس الثالث عشر من أبرز البطاركة في القرن الخامس عشر، وقد ارتبط اسمه بمرحلة مهمة في تطور الحياة الكنسية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-094-Pope-John-XIII_.html'
  
  
  
  
  
  },
{
    id: 95,
    name: 'البابا غبريال السابع',
    reign: '1525 - 1568 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعرف البابا غبريال السابع في تاريخ الكنيسة القبطية بعهدٍ طويل ساهم في ترسيخ التقاليد والهوية الروحية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-095-Pope-Gabriel-VII_.html'
  
  
  
  
  
  },
{
    id: 96,
    name: 'البابا يوأنس الرابع عشر',
    reign: '1571 - 1586 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا يوأنس الرابع عشر ضمن قائمة البطاركة الذين حافظوا على استمرارية الكرسي في القرن السادس عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-096-Pope-John-XIV_.html'
  
  
  
  
  
  },
{
    id: 97,
    name: 'البابا غبريال الثامن',
    reign: '1587 - 1603 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سجلت سيرة البابا غبريال الثامن جزءًا من تاريخ الكنيسة القبطية في مرحلةٍ مثّلت نقطة تعاقب حيوية في القرون الحديثة.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-097-Pope-Gabriel-VIII_.html'
  
  
  
  
  
  },
{
    id: 98,
    name: 'البابا مرقس الخامس',
    reign: '1603 - 1619 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا مرقس الخامس كأحد القادة الذين حافظوا على طابع الكنيسة القبطية خلال القرن السابع عشر المبكر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-098-Pope-Mark-V_.html'
  
  
  
  
  
  },
{
    id: 99,
    name: 'البابا يوأنس الخامس عشر',
    reign: '1619 - 1629 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ينتمي البابا يوأنس الخامس عشر إلى السلسلة البطريركية التي استمرت في رعاية الرعية خلال تحديات القرن السابع عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-099-Pope-John-XV_.html'
  
  
  
  
  
  },
{
    id: 100,
    name: 'البابا متاؤس الثالث',
    reign: '1631 - 1646 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا متاؤس الثالث من البطاركة الذين ساهموا في ترسيخ هوية الكنيسة طوال القرن السابع عشر المبكر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-100-Pope-Matthew-III_.html'
  
  
  
  
  
  },
{
    id: 101,
    name: 'البابا مرقس السادس',
    reign: '1646 - 1656 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تذكر السجلات أن البابا مرقس السادس كان جزءًا من مسار البطاركة الذين حافظوا على رسالة الكنيسة في أجواء متغيرة.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-101-Pope-Mark-VI_.html'
  
  
  
  
  
  },
{
    id: 102,
    name: 'البابا متاؤس الرابع',
    reign: '1660 - 1675 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا متاؤس الرابع في تاريخ البطاركة كاسمٍ مرتبط بالاستمرارية الروحية في قرنٍ كانت فيه الكنيسة تتألف من خلال قيادتها.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-102-Pope-Matthew-IV_.html'
  
  
  
  
  
  },
{
    id: 103,
    name: 'البابا يوأنس السادس عشر',
    reign: '1676 - 1718 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يشكل البابا يوأنس السادس عشر جزءًا من توالي البطاركة الذين حفظوا للكنيسة قوامها خلال القرن السابع عشر والثامن عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-103-Pope-John-XVI_.html'
  
  
  
  
  
  },
{
    id: 104,
    name: 'البابا بطرس السادس',
    reign: '1718 - 1726 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا بطرس السادس من البطاركة الذين تركوا أثرًا على السرد التاريخي للكنيسة القبطية في القرن الثامن عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-104-Pope-Peter-VI_.html'
  
  
  
  
  
  },
{
    id: 105,
    name: 'البابا يوأنس السابع عشر',
    reign: '1727 - 1745 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُحفظ سيرة البابا يوأنس السابع عشر في تاريخ الكنيسة القبطية كملف من الروحانية والاستمرار خلال القرن الثامن عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-105-Pope-John-XVII_.html'
  
  
  
  
  
  },
{
    id: 106,
    name: 'البابا مرقس السابع',
    reign: '1745 - 1769 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا مرقس السابع في السجل الكنسي باعتباره من حاملي أمانة القيادة في حقبةٍ تعاقبت فيها الأجيال البطريركية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-106-Pope-Mark-VIII_.html'
  
  
  
  
  
  },
{
    id: 107,
    name: 'البابا يوأنس الثامن عشر',
    reign: '1769 - 1796 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ارتبط اسم البابا يوأنس الثامن عشر بتاريخ الكنيسة في الفترة التي أعقبت قرونًا من الاستقرار والتبدل في المجتمع المصري.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-107-Pope-John-XVIII_.html'
  
  
  
  
  
  },
{
    id: 108,
    name: 'البابا مرقس الثامن',
    reign: '1796 - 1809 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا مرقس الثامن من البطاركة الذين أسهموا في استدامة الكرسي الرسولي في القرن الثامن عشر.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-108-Pope-Mark-IX_.html'
  
  
  
  
  
  },
{
    id: 109,
    name: 'البابا بطرس السابع',
    reign: '1809 - 1852 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'سجلت سيرته جزءًا من السلسلة التي حافظت على الهوية القبطية في عصرٍ تغيّرت فيه البلاد والسياسة.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-109-Pope-Peter-VII_.html'
  
  
  
  
  
  },
{
    id: 110,
    name: 'البابا كيرلس الرابع',
    reign: '1853 - 1861 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا كيرلس الرابع في السرد التاريخي باعتباره من قادة الكنيسة الذين حملوا مسؤولية التجديد والاستمرارية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-110-Pope-Cyril-IV_.html'
  
  
  
  
  
  },
{
    id: 111,
    name: 'البابا ديمتريوس الثاني',
    reign: '1862 - 1870 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'ارتبط اسم البابا ديمتريوس الثاني بتاريخ الكنيسة القبطية في أوائل القرن التاسع عشر، وهو جزء من سلسلة القيادة الكنسية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-111-Pope-Demetrius-II_.html'
  
  
  
  
  
  },
{
    id: 112,
    name: 'البابا كيرلس الخامس',
    image: 'assets/images/pope-112.png',
    reign: '1874 - 1927 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا كيرلس الخامس من أبرز البطاركة الحديثة، وقد ارتبط اسمه بمرحلةٍ غنية في تاريخ الكنيسة الوطنية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-112-Pope-Cyril-V_.html'
  
  
  
  
  
  },
{
    id: 113,
    name: 'البابا يوأنس التاسع عشر',
    reign: '1928 - 1942 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُذكر البابا يوأنس التاسع عشر كواحد من رؤساء الكنيسة القبطية الذين حملوا مسؤولية القيادة في أوائل القرن العشرين.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-113-Pope-John-XIX_.html'
  
  
  
  
  
  },
{
    id: 114,
    name: 'البابا مكاريوس الثالث',
    reign: '1944 - 1945 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يشكل البابا مكاريوس الثالث جزءًا من صفحة البطاركة الحديثة في الكنيسة القبطية خلال فترة التحول السياسي والاجتماعي.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-114-Pope-Macarius-III_.html'
  
  
  
  
  
  },
{
    id: 115,
    name: 'البابا يوساب الثاني',
    reign: '1946 - 1956 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُحفظ البابا يوساب الثاني في تاريخ الكنيسة على أنه من قادة العصر الحديث الذين أسهموا في إبقاء الكنيسة على مسارها.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-115-Pope-Yusab-II.html'
  
  
  
  
  
  },
{
    id: 116,
    name: 'البابا كيرلس السادس',
    reign: '1959 - 1971 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا كيرلس السادس أحد البطاركة الذين عايشوا مرحلة محورية في حياة الكنيسة القبطية في مصر خلال القرن العشرين.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-116-Pope-Cyril-VI_.html'
  
  
  
  
  
  },
{
    id: 117,
    name: 'البابا شنوده الثالث',
    reign: '1971 - 2012 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعد البابا شنوده الثالث من أبرز البطاركة في العصر الحديث، وقد ارتبط اسمه بالقيادة الروحية والرسالة العامة للكنيسة القبطية.',
    source: 'https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Life-of-Coptic-Pope-117-Pope-Shenouda-III_.html'
  
  
  
  
  
  },
{
    id: 118,
    name: 'البابا تواضروس الثاني',
    reign: '2012 - الآن',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'البابا تواضروس الثاني هو البطريرك الحالي، ويشغل كرسي الإسكندرية وبطريرك الكرازة المرقسية في العصر الحديث.',
    source: 'https://st-takla.org/Saints/popes/118/pope-tawadrous-ii.html'
  
  
  
  
  
  },
];

const popeData = popes.map((pope, index) => ({
  ...pope,
  // prefer explicit image set above; fall back to shared/default when missing
  image: getPopeImage(index),
  source: pope.source || sourceUrls[index] || ''
}));
