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

export const primariesCrops = [
    // [
    //     { x: 64, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 209, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 354, y: 829, regionWidth: 112, regionHeight: 78 },
    // ],
    [
        { x: 527, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 673, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 818, y: 829, regionWidth: 112, regionHeight: 78 },
    ],
    [
        { x: 989, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1134, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1279, y: 829, regionWidth: 112, regionHeight: 78 },
    ],
    [
        { x: 1454, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1599, y: 829, regionWidth: 112, regionHeight: 78 },
        { x: 1744, y: 829, regionWidth: 112, regionHeight: 78 },
    ]
];

export const briefingAreas = [
    { left: 123, top: 5, width: 410, height: 45 }, //planet name
    { left: 112, top: 219, width: 520, height: 30 }, //mission type
    { left: 885, top: 865, width: 215, height: 45 }, //difficulty
    { left: 1575, top: 750, width: 260, height: 250 }, //modifiers
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
      "GACRUX",
      "ERATA PRIME",
      "GATRIA",
      "CIRRUS",
      "PANDION-XXIV",
      "PARTION",
      "PHERKAD SECUNDUS",
      "GAR HAREN",
      "BORE ROCK",
      "MERIDIA",
      "HEETH",
      "ACAMAR IV",
      "FENRIR III",
      "POLARIS PRIME",
      "ANGEL'S VENTURE",
      "ACHERNAR SECUNDUS",
      "GRAND ERRANT",
      "TURING",
      "CRIMSICA",
      "TERREK",
      "ESKER",
      "PHACT BAY",
      "OSHAUNE",
      "ESTANU",
      "MORADESH",
      "ERSON SANDS",
      "TRANDOR",
      "VELD",
      "HELLMIRE",
      "FORI PRIME",
      "ACHIRD III",
      "DARIUS II",
      "SOCORRO III",
      "OMICRON",
      "ZAGON PRIME",
      "PEACOCK",
      "NIVEL 43"
    ],
    "automaton": [
      "VERNEN WELLS",
      "LESATH",
      "MARTALE",
      "VOG-SOJOTH",
      "MATAR BAY",
      "AESIR PASS",
      "YED PRIOR",
      "ZEFIA",
      "CLASA",
      "CHORT BAY",
      "TARSH",
      "GAELLIVARE",
      "DRAUPNIR",
      "MENKENT",
      "CHOEPESSA IV",
      "MASTIA",
      "WEZEN",
      "VANDALON IV",
      "SHELT",
      "CURIA",
      "VARYLIA 5",
      "MARFARK",
      "MANTES",
      "CHOOHE",
      "DURGEN",
      "X-45",
      "VEGA BAY",
      "USTOTU",
      "TROOST",
      "TIEN KWAN",
      "MALEVELON CREEK",
      "DEMIURG",
      "CHARBAL-VII",
      "PENTA",
      "IMBER",
      "ZZANIAH PRIME",
      "WASAT",
      "UBANEA",
      "TIBIT",
      "MINTORIA",
      "MERAK",
      "MEISSA",
      "MAIA",
      "CLAORELL",
      "CHARON PRIME",
      "INGMAR",
      "MORT",
      "AURORA BAY",
      "PÖPLI IX",
      "BLISTICA",
      "SHALLUS"
    ],
    "illuminate": [
      "ALAMAK VII",
      "TERMADON",
      "BELLATRIX",
      "ALATHFAR XI",
      "STOUT",
      "RIRGA BAY",
      "KHANDARK",
      "HORT",
      "KRAZ",
      "HYDROBIUS",
      "SPHERION",
      "HALDUS",
      "BRINK-2",
      "AFOYAY BAY",
      "GENESIS PRIME",
      "RD-4",
      "KEID",
      "CANOPUS",
      "ILDUNA PRIME",
      "VOLTERRA",
      "SEASSE",
      "EMORATH",
      "KHARST",
      "ELYSIAN MEADOWS",
      "CALYPSO",
      "RASP",
      "IRULTA",
      "RAS ALGETHI",
      "HESOE PRIME",
      "HERTHON SECUNDUS",
      "HADAR",
      "ASPEROTH PRIME",
      "EUKORIA",
      "OSUPSAM",
      "REGNUS",
      "BASHYR",
      "JULHEIM",
      "OASIS",
      "IRO",
      "MOG",
      "ZEA RUGOSIA",
      "GEMMA",
      "ANDAR",
      "ALAIRT III",
      "SIRIUS",
      "SIEMNOT",
      "SETIA",
      "HEZE BAY",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "GRAFMERE",
      "VALMOX",
      "SKAASH",
      "KERTH SECUNDUS",
      "MYRIUM",
      "BOTEIN",
      "ACUBENS PRIME",
      "PARSH"
    ]
}