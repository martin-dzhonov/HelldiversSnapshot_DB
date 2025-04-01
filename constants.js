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
    { left: 136, top: 900, width: 32, height: 16 }, //player levels
    { left: 136, top: 835, width: 32, height: 16 }, //player levels
    { left: 136, top: 770, width: 32, height: 16 }, //player levels
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

export const factionPlanets = {
    "terminid": [
      "ACHIRD III",
      "BORE ROCK",
      "GRAND ERRANT",
      "DARIUS II",
      "PANDION-XXIV",
      "PHERKAD SECUNDUS",
      "GACRUX",
      "GAR HAREN",
      "FENRIR III",
      "MORADESH",
      "FORI PRIME",
      "ANGEL'S VENTURE",
      "TERREK",
      "ESKER",
      "PHACT BAY",
      "ERATA PRIME",
      "GATRIA",
      "TURING",
      "HEETH",
      "PARTION",
      "ESTANU",
      "SOCORRO III",
      "MERIDIAN BLACK HOLE",
      "HELLMIRE",
      "ACAMAR IV",
      "CRIMSICA",
      "CIRRUS",
      "OMICRON",
      "ZAGON PRIME",
      "PEACOCK",
      "OSHAUNE",
      "NIVEL 43",
      "ERSON SANDS",
      "TRANDOR",
      "VELD"
    ],
    "automaton": [
      "MARTALE",
      "BEKVAM III",
      "VEGA BAY",
      "MATAR BAY",
      "MARFARK",
      "MENKENT",
      "AESIR PASS",
      "BLISTICA",
      "CHORT BAY",
      "WASAT",
      "ZEFIA",
      "CLASA",
      "MEISSA",
      "PENTA",
      "VOG-SOJOTH",
      "MINTORIA",
      "CLAORELL",
      "ZZANIAH PRIME",
      "SHELT",
      "LESATH",
      "TARSH",
      "CHOEPESSA IV",
      "MASTIA",
      "VARYLIA 5",
      "TIEN KWAN",
      "CHOOHE",
      "CHARON PRIME",
      "VERNEN WELLS",
      "YED PRIOR",
      "X-45",
      "WEZEN",
      "VANDALON IV",
      "USTOTU",
      "UBANEA",
      "TROOST",
      "TIBIT",
      "MERAK",
      "MANTES",
      "MALEVELON CREEK",
      "MAIA",
      "DEMIURG",
      "CHARBAL-VII",
      "INGMAR",
      "MORT",
      "DRAUPNIR",
      "DURGEN",
      "GAELLIVARE",
      "AURORA BAY",
      "PÖPLI IX",
      "IMBER",
      "CURIA",
      "SHALLUS"
    ],
    "illuminate": [
      "KERTH SECUNDUS",
      "SETIA",
      "ELYSIAN MEADOWS",
      "ANDAR",
      "CANOPUS",
      "IRO",
      "ALAMAK VII",
      "SIEMNOT",
      "SEASSE",
      "CALYPSO",
      "RASP",
      "KHANDARK",
      "OSUPSAM",
      "BOTEIN",
      "SPHERION",
      "PROPUS",
      "KRAZ",
      "BUNDA SECUNDUS",
      "ACUBENS PRIME",
      "BASHYR",
      "ILDUNA PRIME",
      "STOUT",
      "RIRGA BAY",
      "ROGUE 5",
      "RD-4",
      "KLAKA 5",
      "HESOE PRIME",
      "HALDUS",
      "GEMMA",
      "ASPEROTH PRIME",
      "AFOYAY BAY",
      "VALMOX",
      "EMORATH",
      "IRULTA",
      "PARSH",
      "MYRIUM",
      "KHARST",
      "ZEA RUGOSIA",
      "TERMADON",
      "SIRIUS",
      "SHETE",
      "SENGE 23",
      "RAS ALGETHI",
      "LENG SCUNDUS",
      "KEID",
      "HYDROBIUS",
      "HORT",
      "HEZE BAY",
      "HERTHON SECUNDUS",
      "HADAR",
      "BRINK-2",
      "BELLATRIX",
      "ALATHFAR XI",
      "ALAIRT III",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "GENESIS PRIME",
      "OASIS",
      "GRAFMERE",
      "MOG",
      "REGNUS",
      "SKAASH",
      "JULHEIM",
      "EUKORIA",
      "VOLTERRA"
    ]
  }