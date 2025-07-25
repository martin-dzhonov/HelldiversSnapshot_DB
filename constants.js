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
    // [
    //     { x: 527, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 989, y: 829, regionWidth: 112, regionHeight: 78 },
    //     { x: 1454, y: 829, regionWidth: 112, regionHeight: 78 },
    // ],
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
    { left: 124, top: 211, width: 380, height: 25 }, //mission type
    { left: 885, top: 865, width: 215, height: 45 }, //difficulty
    { left: 135, top: 900, width: 34, height: 16 }, //player levels
    { left: 135, top: 835, width: 34, height: 16 }, //player levels
    { left: 135, top: 770, width: 34, height: 16 }, //player levels
    //{ left: 1575, top: 750, width: 260, height: 250 }, //modifiers
];

export const playerLvlAreas = [
    { left: 136, top: 900, width: 32, height: 16 },
    { left: 136, top: 835, width: 32, height: 16 },
    { left: 136, top: 770, width: 32, height: 16 },
];

export const briefingColorCoords = [
    { left: 84, top: 900 },
    { left: 84, top: 830 },
    { left: 84, top: 760 },
]

export const loadoutColorCoords = [
    { left: 585, top: 205 },
    { left: 1046, top: 205 },
    { left: 1510, top: 205 },
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

export const armorNames = [
    'Servo-Assisted',
    'Fortified',
    'Extra Padding',
    'Med-Kit',
    'Engineering Kit',
    'Inflammable',
    'Advanced Filtration',
    'Siege-Ready',
    'Gunslinger',
    'Democracy Protects',
    'Scout',
    'Electrical Conduit',
    'Unflinching',
    'Acclimated',
    'Integrated Explosives',
    'Reinforced Epaulettes',
    'Peak Physique',
    'Ballistic Padding',
    'Adreno-Defibrillator'
];

export const weaponNames = {
    "AR-23": "liberator",
    "AR-23P": "liberator_pen",
    "AR-23C": "liberator_conc",
    "AR-23A": "liberator_car",
    "AR-32": "pacifier",
    "StA-52": "sta_52",
    "AR-61": "tenderizer",
    "BR-14": "adjucator",
    "R-2124": "constitution",
    "R-2": "amendment",
    "R-63": "diligence",
    "R-63CS": "diligence_cs",
    "PLAS-39": "accelerator",
    "MP-98": "knight",
    "StA-11": "sta_11",
    "SMG-32": "reprimand",
    "SMG-37": "defender",
    "SMG-72": "pummeler",
    "SG-8": "punisher",
    "SG-8S": "slugger",
    "SG-20": "halt",
    "SG-451": "cookout",
    "SG-225": "breaker",
    "SG-225SP": "spray_n_pray",
    "SG-225IE": "breaker_inc",
    "CB-9": "crossbow",
    "R-36": "eruptor",
    "SG-8P": "punisher_plas",
    "ARC-12": "blitzer",
    "LAS-5": "scythe",
    "LAS-16": "sickle",
    "LAS-17": "sickle_d",
    "PLAS-1": "scorcher",
    "PLAS-101": "purifier",
    "FLAM-66": "torcher",
    "JAR-5": "dominator",
    "R-6": "deadeye",
    "VG-70": "variable"
}

export const missionNames = [
    [
        "LAUNCH ICBM",
        "ENABLE E-710 EXTRACTION",
        "RETRIEVE VALUABLE DATA",
        "SPREAD DEMOCRACY",
        "PURGE HATCHERIES",
        "NUKE NURSERY",
        "EMERGENCY EVACUATION",
        "CONDUCT GEOLOGICAL SURVEY",
        "DEPLOY DARK FLUID",
        "DESTROY COMMAND BUNKERS",
        "SABOTAGE AIR BASE",
        "FREE COLONY",
        "EVACUATE COLONISTS",
        "RETRIEVE RECON CRAFT INTEL",
        "NEUTRALIZE ORBITAL DEFENSES",
        "ENABLE OIL EXTRACTION",
        "COLLECT METEOROLOGICAL DATA",
        "COLLECT GLOOM SPORE READINGS",
        "EXTRACT RESEARCH PROBE DATA",
        "COLLECT GLOOM-INFUSED OIL",
        "CHART TERMINID TUNNELS",
        "FREE THE CITY",
        "TAKE DOWN OVERSHIP",
        "EVACUATE CITIZENS",
        "RESTORE AIR QUALITY",
        "SABOTAGE SUPPLY BASES"
    ],
    [
        "ERADICATE TERMINID SWARM",
        "ERADICATE AUTOMATON FORCES",
        "BLITZ: SEARCH AND DESTROY",
        "BLITZ: DESTROY ILLUMINATE WARP SHIPS",
        "EVACUATE HIGH-VALUE ASSETS",
        "DEFEND EVACUATION SITE",
        "RETRIEVE ESSENTIAL PERSONNEL",
        "BLITZ: SECURE RESEARCH SITE",
        "REPEL INVASION FLEET"
    ],
];

export const modifierNames = {
    "COMPLEX": "Complex Strategem Plotting",
    "DEFENCES": "AA Defences",
    "FLUCTUATIONS": "Orbital Fluctuations",
    "GUNSHIP": "Gunship Patrols",
    "SPORES": "Atmospheric Spores",
    "ROVING": "Roving Shriekers",
    "INTERFERENCE": "Atmospheric Interference",
    "POOR": "Poor Intel"
};

// "POLARIS PRIME",
// "ACHERNAR SECUNDUS"

export const factionPlanets = {
    "terminid": [
      "ACHIRD III",
      "ESTANU",
      "PHACT BAY",
      "DARIUS II",
      "BORE ROCK",
      "PANDION-XXIV",
      "TRANDOR",
      "GRAND ERRANT",
      "GACRUX",
      "PHERKAD SECUNDUS",
      "SLIF",
      "GATRIA",
      "VELD",
      "NUBLARIA I",
      "ERATA PRIME",
      "TERREK",
      "ACAMAR IV",
      "ANGEL'S VENTURE",
      "MORADESH",
      "INARI",
      "ALTA V",
      "VOLTERRA",
      "FORI PRIME",
      "KRAKATWO",
      "NIVEL 43",
      "CRIMSICA",
      "AZTERRA",
      "OSHAUNE",
      "GAR HAREN",
      "SOCORRO III",
      "MERIDIAN BLACK HOLE",
      "HELLMIRE",
      "CRUCIBLE",
      "OMICRON",
      "ZAGON PRIME",
      "PEACOCK",
      "PARTION",
      "TURING",
      "FENRIR III",
      "ERSON SANDS",
      "URSICA XI",
      "HEETH",
      "CIRRUS",
      "ESKER",
      "CARAMOOR",
      "SULFURA",
      "FORT UNION"
    ],
    "automaton": [
      "CLAORELL",
      "LESATH",
      "VERNEN WELLS",
      "DUMA TYR",
      "JULHEIM",
      "VARYLIA 5",
      "AESIR PASS",
      "CHOEPESSA IV",
      "GAELLIVARE",
      "CHARBAL-VII",
      "TARSH",
      "OSLO STATION",
      "VOG-SOJOTH",
      "CURIA",
      "DRAUPNIR",
      "CLASA",
      "WEZEN",
      "BOREA",
      "VEGA BAY",
      "MINTORIA",
      "MATAR BAY",
      "MARTALE",
      "MALEVELON CREEK",
      "CHORT BAY",
      "DURGEN",
      "ZZANIAH PRIME",
      "ZOSMA",
      "ZEFIA",
      "YED PRIOR",
      "X-45",
      "WASAT",
      "VANDALON IV",
      "USTOTU",
      "UBANEA",
      "TROOST",
      "TIEN KWAN",
      "TIBIT",
      "MERAK",
      "MENKENT",
      "MEISSA",
      "MARFARK",
      "MANTES",
      "MAIA",
      "DEMIURG",
      "CHOOHE",
      "CHARON PRIME",
      "INGMAR",
      "MORT",
      "CAPH",
      "PENTA",
      "AURORA BAY",
      "BEKVAM III",
      "DOLPH",
      "GUNVALD",
      "PÖPLI IX",
      "BLISTICA",
      "IMBER",
      "SHELT",
      "SHALLUS",
      "MASTIA"
    ],
    "illuminate": [
      "ALAMAK VII",
      "NEW STOCKHOLM",
      "ALAIRT III",
      "SUPER EARTH",
      "OASIS",
      "AFOYAY BAY",
      "GENESIS PRIME",
      "AIN-5",
      "ALARAPH",
      "HERTHON SECUNDUS",
      "HALDUS",
      "PILEN V",
      "CALYPSO",
      "KLAKA 5",
      "BELLATRIX",
      "MOG",
      "RD-4",
      "RAS ALGETHI",
      "KHANDARK",
      "OSUPSAM",
      "VALMOX",
      "NEW HAVEN",
      "TERMADON",
      "STOUT",
      "STOR THA PRIME",
      "SPHERION",
      "SKAT BAY",
      "SIRIUS",
      "SIEMNOT",
      "SHETE",
      "SETIA",
      "SENGE 23",
      "SEASSE",
      "RIRGA BAY",
      "ROGUE 5",
      "PROPUS",
      "LENG SCUNDUS",
      "KRAZ",
      "KEID",
      "KARLIA",
      "HYDROBIUS",
      "HORT",
      "HEZE BAY",
      "HESOE PRIME",
      "HADAR",
      "GEMMA",
      "CANOPUS",
      "BUNDA SECUNDUS",
      "BRINK-2",
      "BOTEIN",
      "ASPEROTH PRIME",
      "ANDAR",
      "ALATHFAR XI",
      "ACUBENS PRIME",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "ALDERIDGE COVE",
      "ELYSIAN MEADOWS",
      "GRAFMERE",
      "IRO",
      "REGNUS",
      "BASHYR",
      "RASP",
      "SKAASH",
      "ILDUNA PRIME",
      "EMORATH",
      "IRULTA",
      "REAF",
      "PARSH",
      "KERTH SECUNDUS",
      "MYRIUM",
      "EUKORIA",
      "KHARST",
      "ZEA RUGOSIA",
      "WIDOW'S HARBOR"
    ],
  }