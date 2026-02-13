export const dir_latest = `Screenshots/ulatest`;

export const factionNames = ['automaton', 'terminid', 'illuminate'];
export const difficulties = ["SUICIDE MISSION", "IMPOSSIBLE", "HELLDIVE", "SUPER HELLDIVE"];
export const subfactionNames = ["JET BRIGADE", "INCENERATION CORPS"];

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
    'Adreno-Defibrillator',
    'Feet First',
    'Desert Stormer'
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
    "VG-70": "variable",
    "M7S": "m7s",
    "MA5C": "ma5c",
    "M90A": "m90a",
    "AR-2": "coyote",
    "AR/GL-21": "one_two",
    "P-35": "re_educator",
    "R-72": "censor",
    "AR-59": "suppressor",
    "LAS-13": "trident"
}

//Rock Solid
//Reduced Signature
//Supplementary Adrenaline

//AR/GL-21 One-Two
//AX/FLAM-75 Hot Dog
//CQC-9 Defoliation Tool
//M-1000 Maxigun

//P-35 Re-Educator
//R-72 Censor
//AR-59 Suppressor
//TM-1 Lure Mine
//B/MD C4 Pack

//LAS-13 Trident
//CQC-20 Breaching Hammer
//EAT-411 Leveller
//GL-28 Belf-fed Grenade Launcher
//G/SH-39 Shield


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
        "SABOTAGE SUPPLY BASES",
        "CLEANSE INFESTED DISTRICT",
        "DESTROY SPORE LUNG",
        "EXTRACT E-711",
        "CONDUCT MOBILE E-711 EXTRACTION",
        "RESTART PUMPS"
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
      "TERREK",
      "CRIMSICA",
      "ACHIRD III",
      "FORI PRIME",
      "NIVEL 43",
      "TURING",
      "GRAND ERRANT",
      "PANDION-XXIV",
      "BORE ROCK",
      "URSICA XI",
      "DARIUS II",
      "GACRUX",
      "PHERKAD SECUNDUS",
      "ACAMAR IV",
      "OSHAUNE",
      "INARI",
      "MERIDIAN BLACK HOLE",
      "PHACT BAY",
      "POLARIS PRIME",
      "ESTANU",
      "ERATA PRIME",
      "HELLMIRE",
      "ANGEL'S VENTURE",
      "CIRRUS",
      "VELD",
      "FENRIR III",
      "GATRIA",
      "MORADESH",
      "ALTA V",
      "ESKER",
      "SULFURA",
      "PARTION",
      "GAR HAREN",
      "ACHERNAR SECUNDUS",
      "TRANDOR",
      "AZTERRA",
      "KRAKATWO",
      "NUBLARIA I",
      "FORT UNION",
      "OMICRON",
      "ZAGON PRIME",
      "PEACOCK",
      "SOCORRO III",
      "ERSON SANDS",
      "HEETH",
      "CARAMOOR",
      "SLIF",
      "CRUCIBLE",
      "VOLTERRA"
    ],
    "automaton": [
      "LESATH",
      "MARFARK",
      "VERNEN WELLS",
      "BOREA",
      "MATAR BAY",
      "VOG-SOJOTH",
      "YED PRIOR",
      "MARTALE",
      "PENTA",
      "DUMA TYR",
      "CHORT BAY",
      "CHARON PRIME",
      "CLASA",
      "MENKENT",
      "TARSH",
      "CHOEPESSA IV",
      "AESIR PASS",
      "BLISTICA",
      "VARYLIA 5",
      "FENMIRE",
      "MASTIA",
      "CURIA",
      "GAELLIVARE",
      "BARABOS",
      "MINTORIA",
      "BEKVAM III",
      "ZZANIAH PRIME",
      "CHOOHE",
      "JULHEIM",
      "CHARBAL-VII",
      "ZOSMA",
      "VANDALON IV",
      "MEISSA",
      "MANTES",
      "CLAORELL",
      "INGMAR",
      "CYBERSTAN",
      "ZEFIA",
      "X-45",
      "WEZEN",
      "VEGA BAY",
      "WASAT",
      "USTOTU",
      "UBANEA",
      "TROOST",
      "TIEN KWAN",
      "TIBIT",
      "MERAK",
      "MALEVELON CREEK",
      "MAIA",
      "DEMIURG",
      "MORT",
      "DRAUPNIR",
      "DURGEN",
      "CAPH",
      "AURORA BAY",
      "DOLPH",
      "GUNVALD",
      "PÖPLI IX",
      "OSLO STATION",
      "OUTPOST 32",
      "IMBER",
      "SHELT",
      "SHALLUS",
      "EMERIA"
    ],
    "illuminate": [
      "IRULTA",
      "REAF",
      "SUPER EARTH",
      "GRAFMERE",
      "KERTH SECUNDUS",
      "OASIS",
      "ALAMAK VII",
      "PARSH",
      "HEZE BAY",
      "MYRIUM",
      "SHETE",
      "HYDROBIUS",
      "ALARAPH",
      "KARLIA",
      "GENESIS PRIME",
      "EFFLUVIA",
      "ZEA RUGOSIA",
      "SEYSHEL BEACH",
      "RD-4",
      "HORT",
      "SETIA",
      "ALAIRT III",
      "RIRGA BAY",
      "HESOE PRIME",
      "HERTHON SECUNDUS",
      "VALMOX",
      "REGNUS",
      "SEASSE",
      "AIN-5",
      "MOG",
      "WIDOW'S HARBOR",
      "AFOYAY BAY",
      "RASP",
      "NEW HAVEN",
      "TERMADON",
      "STOUT",
      "STOR THA PRIME",
      "SPHERION",
      "SKAT BAY",
      "SIRIUS",
      "SIEMNOT",
      "SENGE 23",
      "ROGUE 5",
      "RAS ALGETHI",
      "PROPUS",
      "LENG SCUNDUS",
      "KRAZ",
      "KLAKA 5",
      "KHANDARK",
      "KEID",
      "HALDUS",
      "HADAR",
      "GEMMA",
      "CANOPUS",
      "BUNDA SECUNDUS",
      "BRINK-2",
      "OSUPSAM",
      "BOTEIN",
      "BELLATRIX",
      "ASPEROTH PRIME",
      "ANDAR",
      "ALATHFAR XI",
      "ADHARA",
      "ACUBENS PRIME",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "ALDERIDGE COVE",
      "ELYSIAN MEADOWS",
      "CALYPSO",
      "NEW STOCKHOLM",
      "IRO",
      "BASHYR",
      "SKAASH",
      "ILDUNA PRIME",
      "EMORATH",
      "EUKORIA",
      "KHARST",
      "PILEN V",
      "KLEN DAHTH II"
    ],
   
  }