// npb mock data
const npb = {
  annotations: [
    { name: '創設年度' },
    { name: '本拠地' },
    { name: 'リーグ優勝回数' },
    { name: '主なOB' },
    { name: '現監督' },
    { name: '現在籍選手' },
  ],
  teams:[
    // 阪神
    {
      id: 1,
      leagueId: 1,
      teamName: '阪神タイガース',
      birth: 1935,
      home: {
        area: '兵庫県西宮市',
        stadium: '阪神甲子園球場',
      },
      leagueChampion: 5,
      coach: '矢野燿大',
      player: {
        retired: [
          { name: '岡田彰布' },
          { name: '金本知憲' },
          { name: '藤川球児' },
        ],
        active: [
          { name: '青柳晃洋' },
          { name: '岩崎優' },
          { name: '梅野隆太郎' },
        ],
      },
      memo: '日本でも一番の人気を争うセリーグ球団。マスコットはトラッキーとラッキーとキー太。阪神が優勝すれば景気が良くなるという伝説がある。阪神ファンは熱い人が多くいつも阪神の試合は観客が多い。しかし、優勝回数は80年近い歴史の中でも5回しかなく、日本一も1回しかない。阪神の優勝を願う人は多い。阪神がどれだけ負けても応援することをやめないのが真の阪神ファンである。',
    },
    // 読売
    {
      id: 2,
      leagueId: 1,
      teamName: '読売ジャイアンツ',
      birth: 1934,
      home: {
        area: '東京都文京区',
        stadium: '東京ドーム',
      },
      leagueChampion: 38,
      coach: '原辰徳',
      player: {
        retired: [
          { name: '長嶋茂雄' },
          { name: '王貞治' },
          { name: '松井秀喜' },
        ],
        active: [
          { name: '坂本勇人' },
          { name: '岡本和真' },
          { name: '菅野智之' },
        ],
      },
      memo: '日本で一番優勝回数の多いセリーグ球団。9年連続優勝したこともある。常にスター選手を輩出している。東京ドームは比較的ホームランが出やすいような構造になっているため「ドームラン」と言われている。',
    },
    // ヤクルト
    {
      id: 3,
      leagueId: 1,
      teamName: '東京ヤクルトスワローズ',
      birth: 1950,
      home: {
        area: '東京都新宿区',
        stadium: '明治神宮野球場',
      },
      leagueChampion: 7,
      coach: '高津臣吾',
      player: {
        retired: [
          { name: '野村克也' },
          { name: '古田敦也' },
          { name: '宮本慎也' },
        ],
        active: [
          { name: '山田哲人' },
          { name: '村上宗隆' },
          { name: '青木宣親' },
        ],
      },
      memo: '若くて長打力の高い選手が揃うセリーグ球団。明治神宮野球場はホームランが出やすい構造になっている。マスコットのつば九郎はフリップ芸が得意。応援歌「東京音頭」は他球団のファン（特に阪神）にも人気である。',
    },
    // 中日
    {
      id: 4,
      leagueId: 1,
      teamName: '中日ドラゴンズ',
      birth: 1936,
      home: {
        area: '愛知県名古屋市東区',
        stadium: 'バンテリンドーム ナゴヤ',
      },
      leagueChampion: 9,
      coach: '与田剛',
      player: {
        retired: [
          { name: '星野仙一' },
          { name: '落合博満' },
          { name: '岩瀬仁紀' },
        ],
        active: [
          { name: '大野雄大' },
          { name: '柳裕也' },
          { name: '福留孝介' },
        ],
      },
      memo: '高い投手力と守備力が武器のセリーグ球団。バンテリンドームナゴヤはマウンドが硬いため、投手が実力を発揮しやすい構造になっている。マスコットはドアラ。',
    },
    // 広島
    {
      id: 5,
      leagueId: 1,
      teamName: '広島東洋カープ',
      birth: 1950,
      home: {
        area: '広島県広島市南区',
        stadium: 'MAZDA Zoom-Zoom スタジアム広島',
      },
      leagueChampion: 9,
      coach: '佐々岡真司',
      player: {
        retired: [
          { name: '山本浩二' },
          { name: '黒田博樹' },
          { name: '前田健太' },
        ],
        active: [
          { name: '菊池涼介' },
          { name: '鈴木誠也' },
          { name: '栗林良吏' },
        ],
      },
      memo: '若い選手の育成に長けたセリーグ球団。2016年からは3連覇を成し遂げ、「カープ女子」が生まれた。原爆の道標として生まれた市民球団である。ジェット風船やトランペットの応援はカープ発祥である。',
    },
    // DeNA
    {
      id: 6,
      leagueId: 1,
      teamName: '横浜DeNAベイスターズ',
      birth: 1950,
      home: {
        area: '神奈川県横浜市中区',
        stadium: '横浜スタジアム',
      },
      leagueChampion: 2,
      coach: '三浦大輔',
      player: {
        retired: [
          { name: '高木豊' },
          { name: '佐々木主浩' },
          { name: '筒香嘉智' },
        ],
        active: [
          { name: '山崎康晃' },
          { name: '佐野恵太' },
          { name: '宮崎敏郎' },
        ],
      },
      memo: 'IT企業DeNAが親会社になってから人気球団にのし上がったセリーグ球団。徹底したファンサービスが有名。横浜スタジアムは近代的に改修され、東京五輪の試合会場にもなった。',
    },
  ]
}

export default npb