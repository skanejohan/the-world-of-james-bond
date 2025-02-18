import dn from '../assets/dn.webp';
import frwl from '../assets/frwl.jpg';
import gf from '../assets/gf.jpg';
import tb from '../assets/tb.webp';
import yolt from '../assets/yolt.jpg';
import ohmss from '../assets/ohmss.jpg';
import daf from '../assets/daf.jpg';
import lald from '../assets/lald.jpg';
import tmwtgg from '../assets/tmwtgg.jpg';
import tswlm from '../assets/tswlm.jpg';
import mr from '../assets/mr.jpg';
import fyeo from '../assets/fyeo.jpg';
import op from '../assets/op.jpg';
import avtak from '../assets/avtak.webp';
import tld from '../assets/tld.jpg';
import ltk from '../assets/ltk.jpg';
import ge from '../assets/ge.webp';
import tnd from '../assets/tnd.jpg';
import twine from '../assets/twine.webp';
import dad from '../assets/dad.jpg';
import cr from '../assets/cr.webp';
import qos from '../assets/qos.webp';
import sf from '../assets/sf.webp';
import sp from '../assets/sp.webp';
import nttd from '../assets/nttd.webp';

import { IMovie } from '../types';
import { ScenesDN } from './scenes_dn';

export const Movies : IMovie[] = [
    {id: 1, title: "Dr. No", year: 1962, poster: dn, scenes: ScenesDN},
    {id: 2, title: "From Russia With Love", year: 1963, poster: frwl, scenes: []},
    {id: 3, title: "Goldfinger", year: 1964, poster: gf, scenes: [] },
    {id: 4, title: "Thunderball", year: 1965, poster: tb, scenes: [] },
    {id: 5, title: "You Only Live Twice", year: 1967, poster: yolt, scenes: [] },
    {id: 6, title: "On Her Majesty's Secret Service", year: 1969, poster: ohmss, scenes: [] },
    {id: 7, title: "Diamonds Are Forever", year: 1971, poster: daf, scenes: [] },
    {id: 8, title: "Live And Let Die", year: 1973, poster: lald, scenes: [] },
    {id: 9, title: "The Man With The Golden Gun", year: 1974, poster: tmwtgg, scenes: [] },
    {id: 10, title: "The Spy Who Loved Me", year: 1977, poster: tswlm, scenes: [] },
    {id: 11, title: "Moonraker", year: 1979, poster: mr, scenes: [] },
    {id: 12, title: "For Your Eyes Only", year: 1981, poster: fyeo, scenes: [] },
    {id: 13, title: "Octopussy", year: 1983, poster: op, scenes: [] },
    {id: 14, title: "A View To A Kill", year: 1985, poster: avtak, scenes: [] },
    {id: 15, title: "The Living Daylights", year: 1987, poster: tld, scenes: [] },
    {id: 16, title: "License To Kill", year: 1989, poster: ltk, scenes: [] },
    {id: 17, title: "Goldeneye", year: 1995, poster: ge, scenes: [] },
    {id: 18, title: "Tomorrow Never Dies", year: 1997, poster: tnd, scenes: [] },
    {id: 19, title: "The World Is Not Enough", year: 1999, poster: twine, scenes: [] },
    {id: 20, title: "Die Another Day", year: 2002, poster: dad, scenes: [] },
    {id: 21, title: "Casino Royale", year: 2006, poster: cr, scenes: [] },
    {id: 22, title: "Quantum Of Solace", year: 2008, poster: qos, scenes: [] },
    {id: 23, title: "Skyfall", year: 2012, poster: sf, scenes: [] },
    {id: 24, title: "Spectre", year: 2015, poster: sp, scenes: [] },
    {id: 25, title: "No Time To Die", year: 2021, poster: nttd, scenes: [] },
]
