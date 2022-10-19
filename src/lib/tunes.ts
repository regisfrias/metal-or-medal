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
    sheet: `
X: 1
T: You'll Never Guess
C: John Doe
%%staves {(RH extra) (LH)}
V:RH clef=treble
V:LH clef=bass
L: 1/8
P: 142
Q: 1/8=126
[V: RH]
M: 3/16
  !f! z1/2 [^FADcd]1/2 Hz1/2|
M: 2/16
  z1/2 [D^FAcd]1/2|
M: 3/16
  z1/2 [D_E^FA(c(d]|
M: 2/8
  [c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|
[V: LH]
M: 3/16
  z1/2 [_e,,_b,,C]1/2 Hz1/2|
M: 2/16
  [D,,D,]1/2[_e,,_b,,C]1/2|
M: 3/16
  z1/2 ([^C]|
M: 2/8
  [^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|
[V: RH]
M: 2/16
  z1/2 [D^FAcd]1/2|
M: 3/16
  z1/2 [D_E^FA(c(d]|
M: 2/8
  [c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|
M: 3/16
  z1/2 [D^FAcd]|
[V: LH]
M: 2/16
  [D,,D,]1/2[_e,,_b,,C]1/2|
M: 3/16
  z1/2 ([^C]|
M: 2/8
  [^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|
M: 3/16
  [D,,D,]1/2[_e,,_b,,C]|
    `,
    rightAnswer: 'MEDAL',
    link: 'https://open.spotify.com/track/3nOuH30XlAOYlOSPClArlH?si=f821584583334f40'
  },
  {
    name: 'The Rite of Spring – Danse sacrale',
    composer: 'Igor Stravinsky',
    sheet: `
X: 1
T: Awe Song
C: Some One Awe Some
%%staves {(RH extra) (LH)}
V:RH clef=treble
V:LH clef=bass
L: 1/8
P: 142
Q: 1/8=126
[V: RH]
M: 3/16
  !f! z1/2 [^FADcd]1/2 Hz1/2|\
M: 2/16
  z1/2 [D^FAcd]1/2|\
M: 3/16
  z1/2 [D_E^FA(c(d]|\
M: 2/8
  [c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|
[V: LH]
M: 3/16
  z1/2 [_e,,_b,,C]1/2 Hz1/2|\
M: 2/16
  [D,,D,]1/2[_e,,_b,,C]1/2|\
M: 3/16
  z1/2 ([^C]|\
M: 2/8
  [^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|
[V: RH]
M: 2/16
  z1/2 [D^FAcd]1/2|\
M: 3/16
  z1/2 [D_E^FA(c(d]|\
M: 2/8
  [c)d)]1/2[G_Bce]1/2[F_AB^c]1/2[D^FA=c]1/2|\
M: 3/16
  z1/2 [D^FAcd]|
[V: LH]
M: 2/16
  [D,,D,]1/2[_e,,_b,,C]1/2|\
M: 3/16
  z1/2 ([^C]|\
M: 2/8
  [^C])1/2[^C_E]1/2[=CD]1/2[CD]1/2|\
M: 3/16
  [D,,D,]1/2[_e,,_b,,C]|\
    `,
    rightAnswer: 'MEDAL',
    link: 'https://open.spotify.com/track/0ivNJZGwjRiMFnhnRuN6vv?si=66a80a534f84458d&nd=1'
  },
  {
    name: 'Sonate Op. 53 "Waldstein"',
    composer: 'Ludwig van Beethoven',
    sheet: `
X: 1
T: Won\'t tell
C: Anonymous for You
%%staves {(RH extra) (LH)}
V:RH clef=bass
V:LH clef=bass
L: 1/8
Q: 1/4=160 "Allegro com brio."
[V: RH]
M: 4/4
 !pp! z [C,E,][C,E,][C,E,] [C,E,][C,E,][C,E,][C,E,]|[C,E,][C,E,][C,E,][C,E,] [C,E,][C,E,][D,^F,][D,^F,]|([D,G,]3 B,1/2A,1/2 G,) z z2|[K: clef=treble]{^c'}(d'2 d'1/2)=c'1/2b1/2a1/2 g2 z2|
[_B,,D,][_B,,D,][_B,,D,][_B,,D,] [_B,,D,][_B,,D,][_B,,D,][_B,,D,]|[_B,,D,][_B,,D,][_B,,D,][_B,,D,] [_B,,D,][_B,,D,][C,E,][C,E,]|([C,F,]3 A,1/2G,1/2 F,) z z2|[K: clef=treble] {=b}(c'2 c'1/2)_b1/2_a1/2g1/2 f2 z2|
[V: LH]
M: 4/4
  C,,[C,,G,,][C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,G,,][C,,G,,]|[C,,G,,][C,,G,,][C,,G,,][C,,G,,] [C,,G,,][C,,G,,][C,,A,,][C,,A,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|[B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,] [B,,,G,,][B,,,G,,][B,,,G,,][B,,,G,,]|
[_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,] [_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,]|[_B,,,F,,][_B,,,F,,][_B,,,F,,][_B,,,F,,] [_B,,,F,,][_B,,,F,,][_B,,,G,,][_B,,,G,,]|[A,,,F,,][A,,,F,,][A,,,F,,][A,,,F,,] [A,,,F,,][A,,,F,,][A,,,F,,][A,,,F,,]|[_A,,,F,,][_A,,,F,,][_A,,,F,,][_A,,,F,,] [_A,,,F,,][_A,,,F,,][_A,,,F,,][_A,,,F,,]|
    `,
    rightAnswer: 'MEDAL',
    link: 'https://crqeditions.bandcamp.com/track/track-1-beethoven-piano-sonata-no-21-in-c-major-op-53-waldstein-movt-1-allegro-con-brio',
  },
  {
    name: 'Apparition de l\'Église Éternelle',
    composer: 'Olivier Messiaen',
    sheet: `
X: 1
T: Heavy Shit
C: Heavy Weight
%%staves {(RH extra) (LH)}
V:RH clef=treble
V:LH clef=bass
L: 1/8
P: 142
Q: "Très lent" 1/8=54
[V: RH]
  !f! [^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,=C=G=c]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=A,D=Ad]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,CEce]2[=F,C=Fc=f]2|[^C,^F,^C^F^c]7 z|
  [^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,=C=G=c]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=A,D=Ad]4|[^G,^A,D=G^G] [^G,B,E^G^A]2 [=G,CEce]2[=F,C=Fc=f]2|!ff! [^C,^F,^C^F^c]7 z|
  !f! [G,=C^Fd]2 [B,_DG_e] [=D=FBg]2 [B,_DGe] [C=D_A=f]4|[_D_E=A^f] [E^Fc_a]2|[=F,_B,=F_B=f_b]7 z|
[V: LH]
  D,, E,,2 C,, C,,2 C,,|D,, E,,2 D,, D,,2 D,,|D,, E,,2 C,,2 F,,2|^F,, ^F,,2 ^F,, ^F,, ^F,,2 z|
  D,, E,,2 C,, C,,2 C,,|D,, E,,2 D,, D,,2 D,,|D,, E,,2 C,,2 F,,2|^F,, ^F,,2 ^F,, ^F,, ^F,,2 z|
  _E,2 =F, _A,2 F, ^F, F,2 F,|G, =A,2|_B,, _B,,2 _B,, _B,, _B,,2 z|
    `,
    rightAnswer: 'MEDAL',
    link: 'https://karlisaacjohnson.bandcamp.com/track/olivier-messiaen-apparition-de-l-glise-ternelle?from=search&search_item_id=2343530158&search_item_type=t&search_match_part=%3F&search_page_id=2221070074&search_page_no=1&search_rank=1&search_sig=845e8c0d988a0aa035e2a73cd336dd9f'
  },
  {
    name: 'The Philosopher',
    composer: 'Death',
    sheet: `
X: 1
T: Arpeggios Obscuros
C: L'Arpeggiatore
%%staves {(RH extra) (LH)}
L: 1/8
K: Dm
R: Allegro
Q: 1/4=120
M: 4/4
V:RH clef=treble
V:LH clef=bass
[V: RH]
  (3A,DF (3AFD (3A,DF (3AFD| (3A,EG (3cGE (3A,EG (3BGE| (3A,DF (3AFD (3A,DF (3AFD| (3A,^CE (3AE^C (3A,^CE (3GEC |
  (3A,DF (3AFD (3A,DF (3AFD| (3A,EG (3cGE (3A,EG (3BGE| (3A,DF (3AFD (3A,DF (3AFD| (3A,^CE (3AE^C (3A,^CE (3GEC |]
[V: LH]
  [D,,D,A,]8|[A,,G,D]4 (3zG,F, (3A,G,E,| [F,,F,C]6 (3zA,,B,, | [^C,^G,]8 |
  [D,,D,A,]8|[A,,G,D]4 (3zG,F, (3A,G,E,| [F,,F,C]6 (3zA,,B,, | [^C,^G,]8 |]
    `,
    rightAnswer: 'METAL',
    link: 'https://death.bandcamp.com/track/the-philosopher-5'
  },
  {
    name: 'Heartwork',
    composer: 'Carcass',
    sheet: `
X: 1
T: Some Thing
C: Some Body
%%staves {(RH extra) (LH)}
K: Emin
V:RH clef=bass
V:LH clef=bass-8
L: 1/8
Q: "Presto" 1/4=187
[V: RH]
  [E,,G,,]2 [B,,D,]2 [F,A,]2 [G,B,]2|[A,C]2 [G,B,]2 [F,A,]2 [G,B,]2|[D,,F,,D,F,]8|[B,,,D,,B,,D,]4 [D,,F,,D,F,]4|
  [E,,G,,]2 [B,,D,]2 [F,A,]2 [G,B,]2|[A,C]2 [G,B,]2 ([F,A,]1/2[G,B,]1/2[F,A,]) [E,G,]2|[F,,A,,F,A,]8|[C,,E,,C,E,]4 [^D,,^F,,^D,^F,]4|
[V: LH]
  (E,,8|E,,8)|D,,8|B,,,4^D,,4|
  E,,2 B,,2 F,2 G,2|A,2 G,2 (F,1/2G,1/2F,) E,2|F,,8|C,,4^D,,4|
    `,
    rightAnswer: 'METAL',
    link: 'https://carcass.bandcamp.com/track/heartwork'
  },
];
