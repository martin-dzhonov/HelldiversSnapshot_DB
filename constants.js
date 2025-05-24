export const dir_latest = `Screenshots/ulatest`;

export const factionNames = ['automaton', 'terminid', 'illuminate'];
export const difficulties = ["SUICIDE MISSION", "IMPOSSIBLE", "HELLDIVE", "SUPER HELLDIVE"];

export const loadoutCrops = [
    [
        { x: 526, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 611, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 696, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 781, y: 844, regionWidth: 66, regionHeight: 66 }
    ],
    [
        { x: 987, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1072, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1157, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1242, y: 844, regionWidth: 66, regionHeight: 66 }
    ],
    [
        { x: 1451, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1536, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1621, y: 844, regionWidth: 66, regionHeight: 66 },
        { x: 1706, y: 844, regionWidth: 66, regionHeight: 66 }
    ]
];

export const weaponsCrops = [
    // [
    //     { x: 64, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 209, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 354, y: 829, regionWidth: 112, regionHeight: 78 },
    // ],
    [
        { x: 527, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 989, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1454, y: 829, regionWidth: 112, regionHeight: 78 },
    ],
    [
        { x: 673, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1134, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1599, y: 829, regionWidth: 112, regionHeight: 78 },
    ],
    [
        { x: 818, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1279, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1744, y: 829, regionWidth: 112, regionHeight: 78 },
    ]
];

export const briefingAreas = [
    { left: 123, top: 5, width: 410, height: 45 }, //planet name
    { left: 112, top: 219, width: 520, height: 30 }, //mission type
    { left: 885, top: 865, width: 215, height: 45 }, //difficulty
    //{ left: 1575, top: 750, width: 260, height: 250 }, //modifiers
    { left: 135, top: 900, width: 34, height: 16 }, //player levels
    { left: 135, top: 835, width: 34, height: 16 }, //player levels
    { left: 135, top: 770, width: 34, height: 16 }, //player levels
];

export const playerLvlAreas = [
    // { left: 123, top: 5, width: 410, height: 45 }, //planet name
    // { left: 112, top: 219, width: 520, height: 30 }, //mission type
    // { left: 885, top: 865, width: 215, height: 45 }, //difficulty
    //{ left: 1575, top: 750, width: 260, height: 250 }, //modifiers
    { left: 136, top: 900, width: 32, height: 16 },
    { left: 136, top: 835, width: 32, height: 16 },
    { left: 136, top: 770, width: 32, height: 16 }, 
    // { left: 600, top: 232, width: 90, height: 18 },
    // { left: 1060, top: 232, width: 90, height: 18 },
    // { left: 1525, top: 232, width: 90, height: 18 }, 
];

export const briefingColorCoords = [
    { left: 84, top: 900},
    { left: 84, top: 830},
    { left: 84, top: 760},
]

export const loadoutColorCoords = [
    { left: 585, top: 225},
    { left: 1046, top: 225},
    { left: 1510, top: 225},
]

export const playerLvlAreasBackup = [
    { left: 95, top: 845, width: 70, height: 15 },
    { left: 95, top: 780, width: 70, height: 15 },
    { left: 95, top: 715, width: 70, height: 15 }, 
];

export const playerColors = [
    { r: 248, g: 138, b: 255 },//purple
    { r: 110, g: 215, b: 85 },//green
    { r: 255, g: 157, b: 68 },//orange
    { r: 129, g: 172, b: 255 },//blue
]

export const modifierNames = {
    "COMPLEX": "Complex Strategem Plotting",
    "DEFENCES": "AA Defences",
    "FLUCTUATIONS": "Orbital Fluctuations",
    "GUNSHIP": "Gunship Patrols",
    "SPORES": "Atmospheric Spores",
    "ROVING": "Roving Shriekers",
    "INTERFERENCE": "Atmospheric Interference",
    "POOR": "Poor Intel"
}

// "POLARIS PRIME",
// "ACHERNAR SECUNDUS"

export const factionPlanets = {
    "terminid": [
      "TERREK",
      "NUBLARIA I",
      "AZTERRA",
      "VELD",
      "ACHIRD III",
      "ESTANU",
      "GRAND ERRANT",
      "BORE ROCK",
      "PANDION-XXIV",
      "PHERKAD SECUNDUS",
      "GAR HAREN",
      "DARIUS II",
      "GACRUX",
      "ANGEL'S VENTURE",
      "FENRIR III",
      "ERATA PRIME",
      "FORI PRIME",
      "PHACT BAY",
      "NIVEL 43",
      "TURING",
      "MORADESH",
      "ESKER",
      "HELLMIRE",
      "KRAKATWO",
      "CRIMSICA",
      "GATRIA",
      "PARTION",
      "ACAMAR IV",
      "SULFURA",
      "SLIF",
      "OSHAUNE",
      "TRANDOR",
      "CIRRUS",
      "MERIDIAN BLACK HOLE",
      "OMICRON",
      "URSICA XI",
      "SOCORRO III",
      "ERSON SANDS",
      "HEETH",
      "FORT UNION",
      "ZAGON PRIME",
      "PEACOCK"
    ],
    "automaton": [
      "VOG-SOJOTH",
      "GAELLIVARE",
      "ZZANIAH PRIME",
      "VERNEN WELLS",
      "CHARON PRIME",
      "CHOEPESSA IV",
      "ZEFIA",
      "BLISTICA",
      "MARFARK",
      "CLASA",
      "VEGA BAY",
      "AESIR PASS",
      "CLAORELL",
      "CHORT BAY",
      "CHARBAL-VII",
      "MASTIA",
      "MATAR BAY",
      "LESATH",
      "PÖPLI IX",
      "JULHEIM",
      "VARYLIA 5",
      "MENKENT",
      "CHOOHE",
      "IMBER",
      "TARSH",
      "MORT",
      "VANDALON IV",
      "MARTALE",
      "DOLPH",
      "WASAT",
      "TIBIT",
      "MINTORIA",
      "MALEVELON CREEK",
      "MAIA",
      "PENTA",
      "BEKVAM III",
      "SHELT",
      "MANTES",
      "CURIA",
      "WEZEN",
      "USTOTU",
      "UBANEA",
      "TROOST",
      "MEISSA",
      "DEMIURG",
      "DRAUPNIR",
      "DURGEN",
      "DUMA TYR",
      "YED PRIOR",
      "X-45",
      "TIEN KWAN",
      "MERAK",
      "INGMAR",
      "CAPH",
      "AURORA BAY",
      "SHALLUS"
    ],
    "illuminate": [
      "SUPER EARTH",
      "NEW HAVEN",
      "PILEN V",
      "WIDOW'S HARBOR",
      "CALYPSO",
      "MYRIUM",
      "KHANDARK",
      "ANDAR",
      "ALATHFAR XI",
      "ELYSIAN MEADOWS",
      "BELLATRIX",
      "ILDUNA PRIME",
      "VOLTERRA",
      "HORT",
      "HEZE BAY",
      "OSUPSAM",
      "ACUBENS PRIME",
      "SKAASH",
      "KERTH SECUNDUS",
      "KHARST",
      "ZEA RUGOSIA",
      "STOUT",
      "SEASSE",
      "RIRGA BAY",
      "PROPUS",
      "HESOE PRIME",
      "HALDUS",
      "CANOPUS",
      "ALAIRT III",
      "LIBERTY RIDGE",
      "REGNUS",
      "BASHYR",
      "IRULTA",
      "TERMADON",
      "SPHERION",
      "SIEMNOT",
      "ROGUE 5",
      "KRAZ",
      "GEMMA",
      "BRINK-2",
      "ASPEROTH PRIME",
      "ALARAPH",
      "ALAMAK VII",
      "AFOYAY BAY",
      "BALDRICK PRIME",
      "GENESIS PRIME",
      "IRO",
      "VALMOX",
      "MOG",
      "RASP",
      "REAF",
      "STOR THA PRIME",
      "SKAT BAY",
      "SIRIUS",
      "SHETE",
      "SETIA",
      "SENGE 23",
      "RD-4",
      "RAS ALGETHI",
      "LENG SCUNDUS",
      "KLAKA 5",
      "KEID",
      "KARLIA",
      "HYDROBIUS",
      "HERTHON SECUNDUS",
      "HADAR",
      "BUNDA SECUNDUS",
      "BOTEIN",
      "ALDERIDGE COVE",
      "OASIS",
      "GRAFMERE",
      "EMORATH",
      "PARSH",
      "EUKORIA"
    ],
  }