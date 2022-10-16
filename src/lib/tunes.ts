export interface TuneType {
  name: string
  composer: string
  sheet: string
  rightAnswer: string
  link: string
}

export const tunes: Array<TuneType> = [
  {
    name: 'The Rite of Spring – Augurs of Spring',
    composer: 'Igor Stravinsky',
    sheet: 'X: 1\nT: You\'ll Never Guess\nC: John Doe\nM: 2/4\nL: 1/8\nQ: "Lento" 1/2=50\n%%staves {(RH extra) (LH)}\nK: Eb\nV:RH clef=treble\nV:LH clef=bass\n[V: RH] !f! .[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].L[G,B,_DE]|.[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.L[G,B,_DE].[G,B,_DE].[G,B,_DE].[G,B,_DE]|.[G,B,_DE].L[G,B,_DE].[G,B,_DE].[G,B,_DE]|\n[V: LH]     .[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|\n.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|.[_F,,A,,_C,_F,].L[_F,,A,,_C,_F,].[_F,,A,,_C,_F,].[_F,,A,,_C,_F,]|',
    rightAnswer: 'MEDAL',
    link: 'https://open.spotify.com/track/3nOuH30XlAOYlOSPClArlH?si=f821584583334f40'
  },
  {
    name: 'The Rite of Spring – Danse sacrale',
    composer: 'Igor Stravinsky',
    sheet: 'X: 1\nT: What is this?\nC: Some One Awe Some\n%%staves {(RH extra) (LH)}\nV:RH clef=treble\nV:LH clef=bass\nL: 1/8\nQ: 1/8=126\n[V: RH]\nM: 3/16\n!f! z1/2 [^FADcd]1/2 Hz1/2|\\\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\n[V: LH]\nM: 3/16\nz1/2 [_e,,_b,,C]1/2 Hz1/2|\\\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\n[V: RH]\nM: 2/16\nz1/2 [D^FAcd]1/2|\\\nM: 3/16\nz1/2 [D_E^FA(c(d]|\\\nM: 2/8\n[c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\\\nM: 3/16\nz1/2 [D^FAcd]|\n[V: LH]\nM: 2/16\n[D,,D,]1/2[_e,,_b,,C]1/2|\\\nM: 3/16\nz1/2 ([^C]|\\\nM: 2/8\n[^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\\\nM: 3/16\n[D,,D,]1/2[_e,,_b,,C]|\\\n',
    rightAnswer: 'MEDAL',
    link: 'https://open.spotify.com/track/0ivNJZGwjRiMFnhnRuN6vv?si=66a80a534f84458d&nd=1'
  },
  {
    name: 'Sonate Op. 53 "Waldstein"',
    composer: 'Ludwig van Beethoven',
    sheet: 'X: 1\nT: Won\'t tell\nC: Anonymous for You\n%%staves {(RH extra) (LH)}\nV:RH clef=bass\nV:LH clef=bass\nL: 1/8\nQ: 1/4=160 "Allegro com brio."\n[V: RH]\nM: 4/4\n !pp! z [C,E,][C,E,][C,E,] [C,E,][C,E,][C,E,][C,E,]|[C,E,][C,E,][C,E,][C,E,] [C,E,][C,E,][D,^F,][D,^F,]|([D,G,]3 B,1/2A,1/2 G,) z z2|[K: clef=treble]{^c\'}(d\'2 d\'1/2)=c\'1/2b1/2a1/2 g2 z2|\n[_B,,D,][_B,,D,][_B,,D,][_B,,D,] [_B,,D,][_B,,D,][_B,,D,][_B,,D,]|[_B,,D,][_B,,D,][_B,,D,][_B,,D,] [_B,,D,][_B,,D,][C,E,][C,E,]|([C,F,]3 A,1/2G,1/2 F,) z z2|[K: clef=treble] {=b}(c\'2 c\'1/2)_b1/2_a1/2g1/2 f2 z2|\n[V: LH]\nM: 4/4\n  C,,[C,,G,,][C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,G,,][C,,G,,]|[C,,G,,][C,,G,,][C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,A,,][C,,A,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|\n[_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,] [_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,]|[_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,] [_B,,,F,,][_B,,,F,,][_B,,,G,,][_B,,,G,,]|[A,,,F,,][A,,,F,,][A,,,F,,][A,,,F,,] [A,,,F,,][A,,,F,,][A,,,F,,][A,,,F,,]|[_A,,,F,,][_A,,,F,,][_A,,,F,,][_A,,,F,,] [_A,,,F,,][_A,,,F,,][_A,,,F,,][_A,,,F,,]|',
    rightAnswer: 'MEDAL',
    link: 'https://crqeditions.bandcamp.com/track/track-1-beethoven-piano-sonata-no-21-in-c-major-op-53-waldstein-movt-1-allegro-con-brio',
  },
  {
    name: 'Apparition de l\'Église Éternelle',
    composer: 'Olivier Messiaen',
    sheet: 'X: 1\nT: Heavy Shit\nC: Heavy Weight\n%%staves {(RH extra) (LH)}\nV:RH clef=treble\nV:LH clef=bass\nL: 1/8\nQ: "Très lent" 1/8=54\n[V: RH]\n  !f! [^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,=C=G=c]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=A,D=Ad]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,CEce]2[=F,C=Fc=f]2|[^C,^F,^C^F^c]7 z|\n  [^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,=C=G=c]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=A,D=Ad]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,CEce]2[=F,C=Fc=f]2|!ff! [^C,^F,^C^F^c]7 z|\n  !f! [G,=C^Fd]2 [B,_DG_e] [=D=FBg]2 [B,_DGe] [C=D_A=f]4|[_D_E=A^f] [E^Fc_a]2|[=F,_B,=F_B=f_b]7 z|\n[V: LH]\n  D,, E,,2 C,, C,,2 C,,|D,, E,,2 D,, D,,2 D,,|D,, E,,2 C,,2 F,,2|^F,, ^F,,2 ^F,, ^F,, ^F,,2 z|\n  D,, E,,2 C,, C,,2 C,,|D,, E,,2 D,, D,,2 D,,|D,, E,,2 C,,2 F,,2|^F,, ^F,,2 ^F,, ^F,, ^F,,2 z|\n  _E,2 =F, _A,2 F, ^F, F,2 F,|G, =A,2|_B,, _B,,2 _B,, _B,, _B,,2 z|\n',
    rightAnswer: 'MEDAL',
    link: 'https://karlisaacjohnson.bandcamp.com/track/olivier-messiaen-apparition-de-l-glise-ternelle?from=search&search_item_id=2343530158&search_item_type=t&search_match_part=%3F&search_page_id=2221070074&search_page_no=1&search_rank=1&search_sig=845e8c0d988a0aa035e2a73cd336dd9f'
  },
  {
    name: 'The Philosopher',
    composer: 'Death',
    sheet: 'X: 1\nT: Arpeggios Obscuros\nC: L\'Arpeggiatore\n%%staves {(RH extra) (LH)}\nL: 1/8\nK: Dm\nR: Allegro moderato\nQ: 1/4=120\nM: 4/4\nV:RH clef=treble\nV:LH clef=bass\n[V: RH]\n(3A,DF (3AFD (3A,DF (3AFD| (3A,EG (3cGE (3A,EG (3BGE| (3A,DF (3AFD (3A,DF (3AFD| (3A,^CE (3AE^C (3A,^CE (3GEC |\n(3A,DF (3AFD (3A,DF (3AFD| (3A,EG (3cGE (3A,EG (3BGE| (3A,DF (3AFD (3A,DF (3AFD| (3A,^CE (3AE^C (3A,^CE (3GEC |]\n[V: LH]\n[D,,D,A,]8|[A,,G,D]4 (3zG,F, (3A,G,E,| [F,,F,C]6 (3zA,,B,, | [^C,^G,]8 |\n[D,,D,A,]8|[A,,G,D]4 (3zG,F, (3A,G,E,| [F,,F,C]6 (3zA,,B,, | [^C,^G,]8 |]\n',
    rightAnswer: 'METAL',
    link: 'https://death.bandcamp.com/track/the-philosopher-5'
  },
  {
    name: 'Heartwork',
    composer: 'Carcass',
    sheet: 'X: 1\nT: Some Heart\nC: Some Body\n%%staves {(RH extra) (LH)}\nK: Emin\nM: 2/2\nV:RH clef=treble\nV:LH clef=bass\nL: 1/8\nQ: "Andante moderato" 1/2=92\n[V: RH]\n  [E,G,]2 [B,D]2 [FA]2 [GB]2|[Ac]2 [GB]2 [FA]2 [GB]2|[D,F,DF]8|[B,,D,B,D]4 [^D,F,^DF]4|\n  [E,G,]2 [B,D]2 [FA]2 [GB]2|[Ac]2 [GB]2 ([FA]1/2[GB]1/2[FA]) [EG]2|[F,A,FA]8|[C,E,CE]4 [^D,F,^DF]4|: EGB(^c dc)BE|^DGB(^c dc)BG|\n  DAdg (f1/2g1/2f)dA|^C^G,E,^C, E,^G,^C^D:|\n[V: LH]\n  (E,,8|E,,8)|D,,8|B,,,4^D,,4|\n  E,,2 B,,2 F,2 G,2|A,2 G,2 (F,1/2G,1/2F,) E,2|F,,8|C,,4^D,,4|:[E,,E,]8|[^D,,^D,]8|\n  [=D,,=D,]8|[^C,,^C,]8:|',
    rightAnswer: 'METAL',
    link: 'https://carcass.bandcamp.com/track/heartwork'
  },
];
