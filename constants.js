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
    { left: 585, top: 205},
    { left: 1046, top: 205},
    { left: 1510, top: 205},
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
};

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
    'Ballistic Padding'
];

export const weaponNames = {
    "AR-23":"liberator",
    "AR-23P":"liberator_pen",
    "AR-23C":"liberator_conc",
    "AR-23A":"liberator_car",
    "AR-32": "pacifier",
    "StA-52":"sta_52",
    "AR-61":"tenderizer",
    "BR-14":"adjucator",
    "R-2124":"constitution",
    "R-2": "amendment",
    "R-63":"diligence",
    "R-63CS":"diligence_cs",
    "PLAS-39":"accelerator",
    "MP-98":"knight",
    "StA-11":"sta_11",
    "SMG-32":"reprimand",
    "SMG-37":"defender",
    "SMG-72":"pummeler",
    "SG-8":"punisher",
    "SG-8S":"slugger",
    "SG-20":"halt",
    "SG-451":"cookout",
    "SG-225":"breaker",
    "SG-225SP":"spray_n_pray",
    "SG-225IE":"breaker_inc",
    "CB-9":"crossbow",
    "R-36":"eruptor",
    "SG-8P":"punisher_plas",
    "ARC-12":"blitzer",
    "LAS-5":"scythe",
    "LAS-16":"sickle",
    "LAS-17":"sickle_d",
    "PLAS-1":"scorcher",
    "PLAS-101":"purifier",
    "FLAM-66":"torcher",
    "JAR-5":"dominator",
    "R-6":"deadeye"
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
        "EVACUATE CITIZENS"
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

// export const primaryWeapons = {
//     liberator: createStrategem("Liberator", "AR-23"),
//     liberator_pen: createStrategem("Liberator Penetrator", "AR-23P"),
//     liberator_conc: createStrategem("Liberator Concussive", "AR-23C"),
//     liberator_car: createStrategem("Liberator Carabine", "AR-23A"),
//     sta_52: createStrategem("StA-52", "StA-52"),
//     tenderizer: createStrategem("Tenderizer", "AR-61"),
//     adjucator: createStrategem("Adjucator", "BR-14"),
//     constitution: createStrategem("Constitution", "R-2124"),
//     diligence: createStrategem("Diligence", "R-63"),
//     diligence_cs: createStrategem("Diligence Counter Sniper", "R-63CS"),
//     accelerator: createStrategem("Accelerator Rifle", "PLAS-39"),
//     knight: createStrategem("Knight", "MP-98"),
//     sta_11: createStrategem("StA-11", "StA-11"),
//     reprimand: createStrategem("Reprimand", "SMG-32"),
//     defender: createStrategem("Defender", "SMG-37"),
//     pummeler: createStrategem("Pummeler", "SMG-72"),
//     punisher: createStrategem("Punisher", "MP-98"),
//     slugger: createStrategem("Slugger", "SG-8S"),
//     halt: createStrategem("Halt", "SG-20"),
//     cookout: createStrategem("Cookout", "SG-451"),
//     breaker: createStrategem("Breaker", "SG-225"),
//     spray_n_pray: createStrategem("Breaker Spray&Pray", "SG-225SP"),
//     breaker_inc: createStrategem("Breaker Incendiary", "SG-225IE"),
//     crossbow: createStrategem("Exploding Crossbow", "CB-9"),
//     eruptor: createStrategem("Eruptor", "R-36"),
//     punisher_plas: createStrategem("Punisher Plasma", "SG-8P"),
//     blitzer: createStrategem("Blitzer", "ARC-12"),
//     scythe: createStrategem("Scythe", "LAS-5"),
//     sickle: createStrategem("Sickle", "LAS-16"),
//     sickle_d: createStrategem("Double Edge Sickle", "LAS-17"),
//     scorcher: createStrategem("Scorcher", "PLAS-1"),
//     purifier: createStrategem("Purifier", "PLAS-101"),
//     torcher: createStrategem("Torcher", "FLAM-66"),
//     dominator: createStrategem("Dominator", "JAR-5"),
//     deadeye: createStrategem("Deadeye", "R-6"),
// };

// "POLARIS PRIME",
// "ACHERNAR SECUNDUS"

export const factionPlanets = {
    "terminid": [
      "NUBLARIA I",
      "SLIF",
      "ACHIRD III",
      "VELD",
      "ESTANU",
      "KRAKATWO",
      "GRAND ERRANT",
      "BORE ROCK",
      "DARIUS II",
      "PANDION-XXIV",
      "PHERKAD SECUNDUS",
      "GACRUX",
      "ALTA V",
      "GAR HAREN",
      "CARAMOOR",
      "INARI",
      "TERREK",
      "ERATA PRIME",
      "VOLTERRA",
      "ANGEL'S VENTURE",
      "CRUCIBLE",
      "GATRIA",
      "MORADESH",
      "CRIMSICA",
      "AZTERRA",
      "FENRIR III",
      "MERIDIAN BLACK HOLE",
      "OMICRON",
      "ZAGON PRIME",
      "PHACT BAY",
      "PEACOCK",
      "PARTION",
      "OSHAUNE",
      "NIVEL 43",
      "FORI PRIME",
      "ACAMAR IV",
      "TURING",
      "SOCORRO III",
      "ERSON SANDS",
      "TRANDOR",
      "URSICA XI",
      "HEETH",
      "CIRRUS",
      "ESKER",
      "HELLMIRE",
      "SULFURA",
      "FORT UNION"
    ],
    "automaton": [
      "VERNEN WELLS",
      "AESIR PASS",
      "LESATH",
      "CHARON PRIME",
      "MARFARK",
      "VOG-SOJOTH",
      "ZZANIAH PRIME",
      "CHOEPESSA IV",
      "VEGA BAY",
      "ZEFIA",
      "BLISTICA",
      "CLASA",
      "CHARBAL-VII",
      "GAELLIVARE",
      "CLAORELL",
      "VANDALON IV",
      "MENKENT",
      "MARTALE",
      "WEZEN",
      "USTOTU",
      "MANTES",
      "MALEVELON CREEK",
      "MORT",
      "DUMA TYR",
      "BEKVAM III",
      "TARSH",
      "MASTIA",
      "ZOSMA",
      "YED PRIOR",
      "X-45",
      "WASAT",
      "VARYLIA 5",
      "UBANEA",
      "TROOST",
      "TIEN KWAN",
      "TIBIT",
      "MINTORIA",
      "MERAK",
      "MEISSA",
      "MATAR BAY",
      "MAIA",
      "DEMIURG",
      "CHORT BAY",
      "CHOOHE",
      "INGMAR",
      "DRAUPNIR",
      "DURGEN",
      "CAPH",
      "PENTA",
      "AURORA BAY",
      "DOLPH",
      "PÖPLI IX",
      "JULHEIM",
      "IMBER",
      "SHELT",
      "CURIA",
      "SHALLUS"
    ],
    "illuminate": [
      "ALAIRT III",
      "ZEA RUGOSIA",
      "ALARAPH",
      "HERTHON SECUNDUS",
      "HYDROBIUS",
      "SUPER EARTH",
      "HALDUS",
      "ALAMAK VII",
      "KEID",
      "ACUBENS PRIME",
      "MOG",
      "SHETE",
      "SEASSE",
      "RIRGA BAY",
      "RAS ALGETHI",
      "BELLATRIX",
      "CALYPSO",
      "GENESIS PRIME",
      "RASP",
      "KHARST",
      "PILEN V",
      "WIDOW'S HARBOR",
      "TERMADON",
      "STOUT",
      "STOR THA PRIME",
      "SPHERION",
      "SKAT BAY",
      "SIRIUS",
      "SIEMNOT",
      "SETIA",
      "SENGE 23",
      "ROGUE 5",
      "RD-4",
      "PROPUS",
      "LENG SCUNDUS",
      "KRAZ",
      "KLAKA 5",
      "KHANDARK",
      "KARLIA",
      "HORT",
      "HEZE BAY",
      "HESOE PRIME",
      "HADAR",
      "GEMMA",
      "CANOPUS",
      "BUNDA SECUNDUS",
      "BRINK-2",
      "OSUPSAM",
      "BOTEIN",
      "ASPEROTH PRIME",
      "ANDAR",
      "ALATHFAR XI",
      "AFOYAY BAY",
      "BALDRICK PRIME",
      "LIBERTY RIDGE",
      "ALDERIDGE COVE",
      "ELYSIAN MEADOWS",
      "OASIS",
      "GRAFMERE",
      "IRO",
      "VALMOX",
      "REGNUS",
      "BASHYR",
      "SKAASH",
      "ILDUNA PRIME",
      "EMORATH",
      "IRULTA",
      "REAF",
      "PARSH",
      "KERTH SECUNDUS",
      "MYRIUM",
      "EUKORIA",
      "NEW HAVEN"
    ]
  }