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
    },
  ]
}

export default npb