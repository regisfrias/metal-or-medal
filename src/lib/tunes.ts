export interface tuneType {
  name: string
  sheet: string
  rightAnswer: string
}

export const tunes: Array<tuneType> = [
  {
    name: 'A',
    sheet: 'X: 1\nT: The Rite of Spring\nC: I. Stravinsky\nM: 2/4\nL: 1/8\nQ: "Lento" 1/2=50 "Tempo rubato"\n%%staves {(RH extra) (LH)}\nK: Eb\nV:RH clef=treble\nV:LH clef=bass\n[V: RH] !f! .[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].L[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n[V: LH]     .[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|\n.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|',
    rightAnswer: 'MEDAL',
  },
  {
    name: 'B',
    sheet: 'X: 1\nT: The Rite of Spring\nC: I. Stravinsky\n%%staves {(RH extra) (LH)}\nV:RH clef=treble\nV:LH clef=bass\nL: 1/8\nP: 142\nQ: 1/8=126\n[V: RH]\nM: 3/16\n!f! z1/2 [^FADcd]1/2 Hz1/2|\\\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\n[V: LH]\nM: 3/16\nz1/2 [_e,,_b,,C]1/2 Hz1/2|\\\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\n[V: RH]\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\\\nM: 3/16\nz1/2 [D^FAcd]|\n[V: LH]\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\\\nM: 3/16\n[D,,D,]1/2[_e,,_b,,C]|\\\n',
    rightAnswer: 'MEDAL',
  },
  {
    name: 'C',
    sheet: '',
    rightAnswer: 'METAL',
  },
];