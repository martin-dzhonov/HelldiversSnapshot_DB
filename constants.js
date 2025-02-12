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
      "ERATA PRIME",
      "PHACT BAY",
      "PANDION-XXIV",
      "BORE ROCK",
      "PHERKAD SECUNDUS",
      "GAR HAREN",
      "GACRUX",
      "GATRIA",
      "HEETH",
      "MERIDIA",
      "CIRRUS",
      "FENRIR III",
      "FORI PRIME",
      "TERREK",
      "ACAMAR IV",
      "PARTION",
      "ESTANU",
      "ACHERNAR SECUNDUS",
      "HELLMIRE",
      "CRIMSICA",
      "GRAND ERRANT",
      "ANGEL'S VENTURE",
      "TURING",
      "OSHAUNE",
      "TRANDOR",
      "MORADESH",
      "VELD",
      "OMICRON",
      "ZAGON PRIME",
      "POLARIS PRIME",
      "PEACOCK",
      "NIVEL 43",
      "ACHIRD III",
      "DARIUS II",
      "SOCORRO III",
      "ERSON SANDS",
      "ESKER"
    ],
    "automaton": [
      "MATAR BAY",
      "CHOOHE",
      "MARTALE",
      "MENKENT",
      "PENTA",
      "AESIR PASS",
      "VOG-SOJOTH",
      "YED PRIOR",
      "ZEFIA",
      "LESATH",
      "CLASA",
      "MEISSA",
      "VERNEN WELLS",
      "CHORT BAY",
      "MASTIA",
      "GAELLIVARE",
      "MARFARK",
      "TARSH",
      "DRAUPNIR",
      "CHOEPESSA IV",
      "IMBER",
      "VANDALON IV",
      "USTOTU",
      "UBANEA",
      "PÖPLI IX",
      "SHELT",
      "ZZANIAH PRIME",
      "X-45",
      "WEZEN",
      "VEGA BAY",
      "WASAT",
      "VARYLIA 5",
      "TROOST",
      "TIEN KWAN",
      "TIBIT",
      "MINTORIA",
      "MERAK",
      "MANTES",
      "MALEVELON CREEK",
      "MAIA",
      "DEMIURG",
      "CLAORELL",
      "CHARON PRIME",
      "CHARBAL-VII",
      "INGMAR",
      "MORT",
      "DURGEN",
      "AURORA BAY",
      "BLISTICA",
      "CURIA",
      "SHALLUS"
    ],
    "illuminate": [
      "ALATHFAR XI",
      "PROPUS",
      "GEMMA",
      "VALMOX",
      "BELLATRIX",
      "KERTH SECUNDUS",
      "KRAZ",
      "OSUPSAM",
      "HEZE BAY",
      "CALYPSO",
      "RD-4",
      "STOUT",
      "IRULTA",
      "HYDROBIUS",
      "HADAR",
      "ANDAR",
      "ELYSIAN MEADOWS",
      "SPHERION",
      "HALDUS",
      "BUNDA SECUNDUS",
      "ALAMAK VII",
      "KHANDARK",
      "OASIS",
      "HORT",
      "CANOPUS",
      "KHARST",
      "VOLTERRA",
      "SEASSE",
      "AFOYAY BAY",
      "ACUBENS PRIME",
      "MOG",
      "ILDUNA PRIME",
      "MYRIUM",
      "RAS ALGETHI",
      "KEID",
      "BOTEIN",
      "ASPEROTH PRIME",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "GENESIS PRIME",
      "RASP",
      "SKAASH",
      "PARSH",
      "ZEA RUGOSIA",
      "TERMADON",
      "SIEMNOT",
      "SETIA",
      "SENGE 23",
      "RIRGA BAY",
      "HESOE PRIME",
      "BRINK-2",
      "ALAIRT III",
      "GRAFMERE",
      "REGNUS",
      "BASHYR",
      "JULHEIM",
      "EUKORIA",
      "SIRIUS",
      "LENG SCUNDUS",
      "HERTHON SECUNDUS",
      "IRO",
      "EMORATH"
    ],
}