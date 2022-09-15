export interface TuneType {
  name: string
  composer: string
  sheet: string
  rightAnswer: string
}

export const tunes: Array<TuneType> = [
  {
    name: 'The Rite of Spring – Introduction',
    composer: 'Igor Stravinsky',
    sheet: 'X: 1\nT: You\'ll Never Guess\nC: John Doe\nM: 2/4\nL: 1/8\nQ: "Lento" 1/2=50\n%%staves {(RH extra) (LH)}\nK: Eb\nV:RH clef=treble\nV:LH clef=bass\n[V: RH] !f! .[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].L[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n[V: LH]     .[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|\n.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|',
    rightAnswer: 'MEDAL',
  },
  {
    name: 'The Rite of Spring – Danse sacrale',
    composer: 'Igor Stravinsky',
    sheet: 'X: 1\nT: What is this?\nC: Some One Awe Some\n%%staves {(RH extra) (LH)}\nV:RH clef=treble\nV:LH clef=bass\nL: 1/8\nP: 142\nQ: 1/8=126\n[V: RH]\nM: 3/16\n!f! z1/2 [^FADcd]1/2 Hz1/2|\\\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\n[V: LH]\nM: 3/16\nz1/2 [_e,,_b,,C]1/2 Hz1/2|\\\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\n[V: RH]\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\\\nM: 3/16\nz1/2 [D^FAcd]|\n[V: LH]\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\\\nM: 3/16\n[D,,D,]1/2[_e,,_b,,C]|\\\n',
    rightAnswer: 'MEDAL',
  },
  {
    name: 'Sonate Op. 53 "Waldstein"',
    composer: 'Ludwig van Beethoven',
    sheet: 'X: 1\nT: Won\'t tell\nC: Anonymous for You\n%%staves {(RH extra) (LH)}\nV:RH clef=bass\nV:LH clef=bass\nL: 1/8\nP: 142\nQ: 1/4=160 "Allegro com brio."\n[V: RH]\nM: 4/4\n!pp! z [C,E,][C,E,] [C,E,][C,E,][C,E,][C,E,]|[C,E,][C,E,][C,E,][C,E,] [C,E,][C,E,][D,^F,][D,^F,]|([D,G,]3 B,1/2A,1/2 G,,) z z2|[K: clef=treble](d\'2 d\'1/2)c\'1/2b1/2a1/2 g2 z2|\n[V: LH]\nM: 4/4\nC,,[C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,G,,][C,,G,,]|[C,,G,,][C,,G,,][C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,A,,][C,,A,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|',
    rightAnswer: 'MEDAL',
  },
];
