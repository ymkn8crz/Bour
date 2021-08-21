// Pacific-League mock data
const pacific = {
  annotations: [
    { name: '創設年度' },
    { name: '本拠地' },
    { name: 'リーグ優勝回数' },
    { name: '主なOB' },
    { name: '現監督' },
    { name: '現在籍選手' },
  ],
  teams:[
    // オリックス
    {
      id: 7,
      leagueId: 2,
      teamName: 'オリックス・バファローズ',
      birth: 1936,
      home: {
        area: '大阪府大阪市西区',
        stadium: '京セラドーム大阪',
      },
      leagueChampion: 12,
      coach: '中嶋聡',
      player: {
        retired: [
          { name: '谷佳知' },
          { name: '北川博敏' },
          { name: '平野恵一' },
        ],
        active: [
          { name: '山本由伸' },
          { name: '吉田正尚' },
          { name: '宮城大弥' },
        ],
      },
      memo: '今季ついに優勝候補に名乗りを挙げたパリーグ球団。2004年に大阪近鉄バファローズと合併してから一度も優勝していない。試合に勝利するとSNS上でバファローズポンタが「おりほー」と叫び盛り上げている。',
    },
    // 楽天
    {
      id: 8,
      leagueId: 2,
      teamName: '東北楽天ゴールデンイーグルス',
      birth: 2005,
      home: {
        area: '宮城県仙台市宮城野区',
        stadium: '楽天生命パーク宮城',
      },
      leagueChampion: 1,
      coach: '石井一久',
      player: {
        retired: [
          { name: '山崎武司' },
          { name: '岩隈久志' },
          { name: '星野仙一' },
        ],
        active: [
          { name: '田中将大' },
          { name: '浅村栄斗' },
          { name: '松井裕樹' },
        ],
      },
      memo: '2005年に新規参入したパリーグ球団。近年は親会社の豊富な資金力を生かした選手補強が絶えない。2013年は創設9年目で日本一を果たし、東日本大震災で被災した東北県民に大きな希望を与えた。',
    },
    // ソフトバンク
    {
      id: 9,
      leagueId: 2,
      teamName: '福岡ソフトバンクホークス',
      birth: 1938,
      home: {
        area: '福岡県福岡市中央区',
        stadium: '福岡PayPayドーム',
      },
      leagueChampion: 19,
      coach: '工藤公康',
      player: {
        retired: [
          { name: '斉藤和巳' },
          { name: '城島健司' },
          { name: '松中信彦' },
        ],
        active: [
          { name: '柳田悠岐' },
          { name: '甲斐拓也' },
          { name: '千賀滉大' },
        ],
      },
      memo: '直近10年で7度の日本一を果たし、圧倒的な成績をあげているパリーグ球団。巨大な資金力と徹底した育成力による選手層の厚さが武器。孫正義オーナーはカネは出すけど口は出さない、オーナーのあるべき姿である。',
    },
    // ロッテ
    {
      id: 10,
      leagueId: 2,
      teamName: '千葉ロッテマリーンズ',
      birth: 1950,
      home: {
        area: '千葉県千葉市美浜区',
        stadium: 'ZOZOマリンスタジアム',
      },
      leagueChampion: 6,
      coach: '井口資仁',
      player: {
        retired: [
          { name: '福浦和也' },
          { name: '今江敏晃' },
          { name: '西岡剛' },
        ],
        active: [
          { name: '荻野貴司' },
          { name: '中村奨吾' },
          { name: '益田直也' },
        ],
      },
      memo: '熱狂的な応援スタイルでプロ野球を盛り上げるパリーグ球団。ポストシーズンでは無類の強さを発揮する。2005年日本一を果たし、インターネットスラング「334」を生み出した。',
    },
    // 西武
    {
      id: 11,
      leagueId: 2,
      teamName: '埼玉西武ライオンズ',
      birth: 1950,
      home: {
        area: '埼玉県所沢市',
        stadium: 'メットライフドーム',
      },
      leagueChampion: 23,
      coach: '辻発彦',
      player: {
        retired: [
          { name: '松井稼頭央' },
          { name: '和田一浩' },
          { name: '秋山翔吾' },
        ],
        active: [
          { name: '源田壮亮' },
          { name: '平良海馬' },
          { name: '中村剛也' },
        ],
      },
      memo: 'リーグ最多の優勝回数を誇るパリーグ球団。常に長打力の高い選手を揃えている。メットライフドームは壁面が無いため、日本で唯一「場外ホームランの出るドーム球場」である。',
    },
    // 日本ハム
    {
      id: 12,
      leagueId: 2,
      teamName: '北海道日本ハムファイターズ',
      birth: 1946,
      home: {
        area: '北海道札幌市豊平区',
        stadium: '札幌ドーム',
      },
      leagueChampion: 7,
      coach: '栗山英樹',
      player: {
        retired: [
          { name: '小笠原道大' },
          { name: 'ダルビッシュ有' },
          { name: '大谷翔平' },
        ],
        active: [
          { name: '近藤健介' },
          { name: '伊藤大海' },
          { name: '西川遥輝' },
        ],
      },
      memo: '若手選手の育成力に定評のあるパリーグ球団。高校野球で有名になった若手選手が入団するケースが多い。札幌ドームは外野が広くフェンスも高いため、守備力の高さが求められる。',
    },
  ]
}

export default pacific