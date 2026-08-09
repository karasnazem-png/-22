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
    name: 'البابا مرقس الأول',
    reign: '61 - 68 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا مرقس الأول من أوائل من حملوا أمانة الكرسي الرسولي في الإسكندرية، وقد ارتبطت سيرته ببدء الرسالة الرسولية في مصر. ويُذكر في كتب السيرة الكنسية بأنه من الذين أسسوا أولى دعائم الكنيسة في المدينة، وارتبط اسمه بظهور الهوية الرسولية في الإسكندرية.'
  },
  {
    id: 2,
    name: 'البابا أنيانوس',
    reign: '68 - 83 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'اشتهر البابا أنيانوس في أولى مراحل تاريخ الكنيسة بالإخلاص والخدمة، وقد ذُكر في الروايات الكنسية بأنه من الذين ساهموا في تثبيت أسس القيادة الروحية في المجتمع المسيحي المبكر، وارتبطت سيرته بتأكيد الاستقرار الكنسي في الفترة التي نشأت فيها الجماعة الإسكندرية.'
  },
  {
    id: 3,
    name: 'البابا ميليوس',
    reign: '83 - 95 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'يُعدّ البابا ميليوس من الأسماء التي وردت في السجل الكنسي المبكر، وقد ارتبطت سيرته بالاستمرار في خدمة الكنيسة ونقل التقاليد الرسولية إلى الجيل الذي تبعه، وقد ذُكر في التاريخ الكنسي ضمن الذين حافظوا على الرسالة الأولى في المدينة.'
  },
  {
    id: 4,
    name: 'البابا كرذوذوس',
    reign: '95 - 106 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'تُذكر سيرة البابا كرذوذوس ضمن ترتيب البطاركة الأوائل، ويمثل هذا الاسم جزءًا من الذاكرة الكنسية التي حفظت أسماء القادة الذين سارت الكنيسة على أيديهم في بداياتها، ويُعد من الأسماء التي تدل على استمرار السلسلة البطريركية منذ العصر المبكر.'
  },
  {
    id: 5,
    name: 'البابا بريموس',
    reign: '106 - 118 م',
    birth: 'غير متوفر في المصادر المعتمدة',
    story: 'شغل البابا بريموس الكرسي الرسولي في مرحلة انتقالية من أوائل القرن الثاني، وارتبطت حياته بالاستمرار في خدمة الرعية وإبقاء الكنيسة على مسارها الروحي خلال زمنٍ كان فيه الترتيب الكنسي في نمو مستمر.'
  },
  {
    id: 6,
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
  }
];

const popeData = popes.map((pope, index) => ({
  ...pope,
  image: getPopeImage(index),
  source: sourceUrls[index] || ''
}));
