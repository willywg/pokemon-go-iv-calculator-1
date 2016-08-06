const Moves = require('./moves.json')
const Pokemon = require('./pokemon.json')

// "Quick" "attacks"

const quickMoves = {
  "ACID_FAST": ["EKANS", "ARBOK", "ODDISH", "GLOOM", "VILEPLUME", "BELLSPROUT", "WEEPINBELL", "VICTREEBEL", "TENTACRUEL", "GRIMER", "MUK", "KOFFING", "WEEZING"],
  "BITE_FAST": ["WARTORTLE", "BLASTOISE", "RATICATE", "ARBOK", "NIDORAN_FEMALE", "NIDORINA", "NIDOQUEEN", "NIDORINO", "ZUBAT", "GOLBAT", "MEOWTH", "GROWLITHE", "ARCANINE", "GYARADOS", "AERODACTYL"],
  "BUBBLE_FAST": ["SQUIRTLE", "POLIWAG", "POLIWHIRL", "POLIWRATH", "TENTACOOL", "KRABBY", "HORSEA"],
  "BUG_BITE_FAST": ["CATERPIE", "METAPOD", "BUTTERFREE", "WEEDLE", "KAKUNA", "BEEDRILL", "PARAS", "PARASECT", "VENONAT", "VENOMOTH"],
  "BULLET_PUNCH_FAST": ["MACHAMP", "HITMONCHAN"],
  "CONFUSION_FAST": ["BUTTERFREE", "VENONAT", "VENOMOTH", "GOLDUCK", "KADABRA", "ALAKAZAM", "SLOWPOKE", "SLOWBRO", "DROWZEE", "HYPNO", "EXEGGCUTE", "EXEGGUTOR", "MR_MIME", "MEWTWO"],
  "CUT_FAST": ["FARFETCHD"],
  "DRAGON_BREATH_FAST": ["SEADRA", "GYARADOS", "DRATINI", "DRAGONAIR", "DRAGONITE"],
  "EMBER_FAST": ["CHARMANDER", "CHARMELEON", "CHARIZARD", "VULPIX", "NINETALES", "GROWLITHE", "PONYTA", "RAPIDASH", "MAGMAR", "FLAREON", "MOLTRES"],
  "FEINT_ATTACK_FAST": ["NINETALES", "JIGGLYPUFF", "WIGGLYTUFF", "PERSIAN", "DODRIO"],
  "FIRE_FANG_FAST": ["ARCANINE"],
  "FROST_BREATH_FAST": ["DEWGONG", "CLOYSTER", "JYNX", "LAPRAS", "ARTICUNO"],
  "FURY_CUTTER_FAST": ["NIDOKING", "PARASECT", "FARFETCHD", "SCYTHER", "PINSIR", "KABUTOPS"],
  "ICE_SHARD_FAST": ["SEEL", "DEWGONG", "SHELLDER", "CLOYSTER", "LAPRAS"],
  "KARATE_CHOP_FAST": ["MANKEY", "PRIMEAPE", "MACHOP", "MACHOKE", "MACHAMP", "MAGMAR"],
  "LICK_FAST": ["GASTLY", "HAUNTER", "LICKITUNG", "SNORLAX"],
  "LOW_KICK_FAST": ["PRIMEAPE", "MACHOP", "MACHOKE", "RAPIDASH", "HITMONLEE", "KANGASKHAN", "ELECTABUZZ"],
  "METAL_CLAW_FAST": ["SANDSLASH", "KINGLER"],
  "MUD_SHOT_FAST": ["SANDSHREW", "SANDSLASH", "DIGLETT", "DUGTRIO", "POLIWAG", "POLIWHIRL", "POLIWRATH", "GRAVELER", "GOLEM", "KRABBY", "KINGLER", "GOLDEEN", "OMANYTE", "KABUTO", "KABUTOPS"],
  "MUD_SLAP_FAST": ["GRIMER", "CUBONE", "MAROWAK", "RHYHORN", "RHYDON", "KANGASKHAN"],
  "PECK_FAST": ["SPEAROW", "FEAROW", "NIDORAN_MALE", "DODUO", "GOLDEEN", "SEAKING"],
  "POISON_JAB_FAST": ["BEEDRILL", "NIDOQUEEN", "NIDORINO", "NIDOKING", "TENTACRUEL", "MUK", "SEAKING"],
  "POISON_STING_FAST": ["WEEDLE", "KAKUNA", "EKANS", "NIDORAN_FEMALE", "NIDORINA", "NIDORAN_MALE", "TENTACOOL"],
  "POUND_FAST": ["CLEFAIRY", "CLEFABLE", "JIGGLYPUFF", "WIGGLYTUFF", "DROWZEE", "CHANSEY", "JYNX", "DITTO", "MEW"],
  "PSYCHO_CUT_FAST": ["KADABRA", "ALAKAZAM", "MEWTWO"],
  "QUICK_ATTACK_FAST": ["PIDGEY", "RATTATA", "RATICATE", "SPEAROW", "PIKACHU", "VULPIX", "ZUBAT", "DODUO", "STARYU", "STARMIE", "EEVEE", "PORYGON"],
  "RAZOR_LEAF_FAST": ["IVYSAUR", "VENUSAUR", "ODDISH", "GLOOM", "VILEPLUME", "WEEPINBELL", "VICTREEBEL"],
  "ROCK_SMASH_FAST": ["CUBONE", "MAROWAK", "HITMONLEE", "HITMONCHAN", "RHYHORN", "RHYDON", "PINSIR"],
  "ROCK_THROW_FAST": ["GEODUDE", "GRAVELER", "GOLEM", "ONIX", "OMASTAR"],
  "SCRATCH_FAST": ["CHARMANDER", "CHARMELEON", "SANDSHREW", "PARAS", "DIGLETT", "MEOWTH", "PERSIAN", "MANKEY", "KABUTO"],
  "SHADOW_CLAW_FAST": ["HAUNTER", "GENGAR"],
  "SPARK_FAST": ["RAICHU", "MAGNEMITE", "MAGNETON", "VOLTORB", "ELECTRODE"],
  "SPLASH_FAST": ["MAGIKARP"],
  "STEEL_WING_FAST": ["PIDGEOTTO", "PIDGEOT", "FEAROW", "DODRIO", "SCYTHER", "AERODACTYL", "DRAGONITE"],
  "SUCKER_PUNCH_FAST": ["DUGTRIO", "GASTLY", "GENGAR"],
  "TACKLE_FAST": ["BULBASAUR", "SQUIRTLE", "CATERPIE", "METAPOD", "PIDGEY", "RATTATA", "GEODUDE", "PONYTA", "SHELLDER", "ONIX", "VOLTORB", "ELECTRODE", "KOFFING", "WEEZING", "TAUROS", "EEVEE", "PORYGON"],
  "THUNDER_SHOCK_FAST": ["PIKACHU", "RAICHU", "MAGNEMITE", "MAGNETON", "ELECTABUZZ", "JOLTEON", "ZAPDOS"],
  "VINE_WHIP_FAST": ["BULBASAUR", "IVYSAUR", "VENUSAUR", "BELLSPROUT", "TANGELA"],
  "WATER_GUN_FAST": ["WARTORTLE", "BLASTOISE", "PSYDUCK", "GOLDUCK", "SLOWPOKE", "SLOWBRO", "SEEL", "HORSEA", "SEADRA", "STARYU", "STARMIE", "VAPOREON", "OMANYTE", "OMASTAR"],
  "WING_ATTACK_FAST": ["CHARIZARD", "PIDGEOTTO", "PIDGEOT", "GOLBAT"],
  "ZEN_HEADBUTT_FAST": ["CLEFAIRY", "CLEFABLE", "PSYDUCK", "ABRA", "HYPNO", "EXEGGUTOR", "LICKITUNG", "CHANSEY", "MR_MIME", "TAUROS", "SNORLAX"],
}




// "CHARGE" "MOVES"

const chargeMoves = {
  "AERIAL_ACE": ["BEEDRILL","PIDGEY","PIDGEOTTO","PIDGEOT","SPEAROW","FEAROW","FARFETCHD","DODUO","DODRIO"],
  "AIR_CUTTER": ["PIDGEY","PIDGEOTTO","PIDGEOT","ZUBAT","GOLBAT","FARFETCHD","DODRIO"],
  "ANCIENT_POWER": ["GOLEM","EXEGGCUTE","OMANYTE","OMASTAR","KABUTO","KABUTOPS","AERODACTYL"],
  "AQUA_JET": ["SQUIRTLE","WARTORTLE","SEEL","DEWGONG","KABUTO"],
  "AQUA_TAIL": ["SQUIRTLE","PSYDUCK","SEEL","GOLDEEN","VAPOREON","DRATINI","DRAGONAIR"],
  "BLIZZARD": ["TENTACRUEL","DEWGONG","CLOYSTER","SEADRA","LAPRAS","ARTICUNO"],
  "BODY_SLAM": ["RATTATA","NIDORAN_MALE", "NIDORAN_FEMALE", "CLEFAIRY","VULPIX","JIGGLYPUFF","MEOWTH","GROWLITHE","POLIWAG","EEVEE","SNORLAX"],
  "BONE_CLUB": ["CUBONE","MAROWAK"],
  "BRICK_BREAK": ["RAICHU","MANKEY","MACHOP","MACHOKE","HITMONCHAN","KANGASKHAN"],
  "BRINE": ["OMANYTE"],
  "BUBBLE_BEAM": ["POLIWAG","POLIWHIRL","TENTACOOL","SHELLDER","KRABBY","HORSEA","STARYU"],
  "BUG_BUZZ": ["BUTTERFREE","VENOMOTH","SCYTHER"],
  "BULLDOZE": ["SANDSLASH","ARCANINE","CUBONE","RHYHORN"],
  "CROSS_CHOP": ["PSYDUCK","MANKEY","PRIMEAPE","MACHOP","MACHOKE","MACHAMP"],
  "CROSS_POISON": ["PARAS","PARASECT"],
  "DARK_PULSE": ["ARBOK","MEOWTH","MUK","GASTLY","HAUNTER","GENGAR","KOFFING","WEEZING"],
  "DAZZLING_GLEAM": ["CLEFABLE","WIGGLYTUFF","KADABRA","ALAKAZAM","CHANSEY"],
  "DIG": ["RATTATA","RATICATE","SANDSHREW","NIDORINA","NIDORINO","DIGLETT","GEODUDE","GRAVELER","CUBONE","MAROWAK","EEVEE"],
  "DISARMING_VOICE": ["CLEFAIRY","JIGGLYPUFF"],
  "DISCHARGE": ["PIKACHU","MAGNEMITE","MAGNETON","VOLTORB","ELECTRODE","JOLTEON","PORYGON","ZAPDOS"],
  "DRAGON_CLAW": ["CHARIZARD","DRAGONITE"],
  "DRAGON_PULSE": ["HORSEA","SEADRA","GYARADOS","LAPRAS","DRAGONAIR","DRAGONITE","MEW"],
  "DRAINING_KISS": ["JYNX"],
  "DRILL_PECK": ["SPEAROW","DODUO","DODRIO"],
  "DRILL_RUN": ["FEAROW","RAPIDASH","SEAKING"],
  "EARTHQUAKE": ["SANDSLASH","NIDOQUEEN","NIDOKING","DUGTRIO","GOLEM","MAROWAK","RHYDON","KANGASKHAN","TAUROS","SNORLAX","MEW"],
  "FIRE_BLAST": ["CHARIZARD","NINETALES","ARCANINE","PONYTA","RAPIDASH","MAGMAR","FLAREON","MOLTRES","MEW"],
  "FIRE_PUNCH": ["CHARMELEON","HITMONCHAN","MAGMAR"],
  "FLAME_BURST": ["CHARMANDER","CHARMELEON"],
  "FLAME_CHARGE": ["CHARMANDER","VULPIX","PONYTA"],
  "FLAME_WHEEL": ["GROWLITHE","PONYTA"],
  "FLAMETHROWER": ["CHARMANDER","CHARMELEON","CHARIZARD","VULPIX","NINETALES","GROWLITHE","ARCANINE","MAGMAR","FLAREON","MOLTRES"],
  "FLASH_CANNON": ["BLASTOISE","MAGNETON","HORSEA"],
  "GUNK_SHOT": ["EKANS","ARBOK"],
  "HEAT_WAVE": ["NINETALES","RAPIDASH","FLAREON","MOLTRES"],
  "HORN_ATTACK": ["NIDORAN_MALE", "NIDORINO","RHYHORN","GOLDEEN","TAUROS"],
  "HURRICANE": ["PIDGEOT","MEW"],
  "HYDRO_PUMP": ["WARTORTLE","BLASTOISE","GOLDUCK","POLIWRATH","TENTACRUEL","CLOYSTER","SEADRA","STARMIE","GYARADOS","VAPOREON","OMASTAR"],
  "HYPER_BEAM": ["RATICATE","WIGGLYTUFF","ELECTRODE","LICKITUNG","AERODACTYL","SNORLAX","DRAGONITE","MEWTWO","MEW"],
  "HYPER_FANG": ["RATTATA","RATICATE"],
  "ICE_BEAM": ["WARTORTLE","BLASTOISE","GOLDUCK","SLOWBRO","LAPRAS","ARTICUNO"],
  "ICE_PUNCH": ["POLIWRATH","HITMONCHAN","JYNX"],
  "ICY_WIND": ["SEEL","DEWGONG","SHELLDER","CLOYSTER","SEAKING","ARTICUNO"],
  "IRON_HEAD": ["ONIX","TAUROS","AERODACTYL"],
  "LEAF_BLADE": ["VICTREEBEL","FARFETCHD"],
  "LOW_SWEEP": ["MANKEY","PRIMEAPE","MACHOP","HITMONLEE"],
  "MAGNET_BOMB": ["MAGNEMITE","MAGNETON"],
  "MEGAHORN": ["NIDOKING","RHYDON","SEAKING"],
  "MOONBLAST": ["CLEFAIRY","CLEFABLE","ODDISH","GLOOM","VILEPLUME","MEW"],
  "MUD_BOMB": ["DIGLETT","DUGTRIO","POLIWAG","POLIWHIRL","GRIMER"],
  "NIGHT_SLASH": ["MEOWTH","PERSIAN","PRIMEAPE","SCYTHER"],
  "OMINOUS_WIND": ["GOLBAT","GASTLY"],
  "PETAL_BLIZZARD": ["VENUSAUR","GLOOM","VILEPLUME"],
  "PLAY_ROUGH": ["JIGGLYPUFF","WIGGLYTUFF","PERSIAN"],
  "POISON_FANG": ["NIDORAN_FEMALE", "NIDORINA","ZUBAT","GOLBAT","VENONAT","VENOMOTH"],
  "POWER_GEM": ["PERSIAN","STARYU","STARMIE"],
  "POWER_WHIP": ["BULBASAUR","IVYSAUR","BELLSPROUT","WEEPINBELL","LICKITUNG","TANGELA"],
  "PSYBEAM": ["VENONAT","PSYDUCK","KADABRA","DROWZEE","CHANSEY","STARMIE","MR_MIME","PORYGON"],
  "PSYCHIC": ["BUTTERFREE","CLEFABLE","VENOMOTH","GOLDUCK","ALAKAZAM","SLOWPOKE","SLOWBRO","DROWZEE","HYPNO","EXEGGCUTE","EXEGGUTOR","CHANSEY","MR_MIME","MEWTWO","MEW"],
  "PSYSHOCK": ["ABRA","SLOWPOKE","DROWZEE","HYPNO","JYNX"],
  "ROCK_SLIDE": ["SANDSHREW","GEODUDE","GRAVELER","ONIX","OMASTAR"],
  "ROCK_TOMB": ["SANDSHREW","SANDSLASH","DIGLETT","GEODUDE","OMANYTE","KABUTO"],
  "SCALD": ["POLIWHIRL"],
  "SEED_BOMB": ["BULBASAUR","ODDISH","PARAS","WEEPINBELL","EXEGGCUTE","EXEGGUTOR"],
  "SHADOW_BALL": ["ABRA","KADABRA","ALAKAZAM","HAUNTER","GENGAR","HYPNO","WEEZING","MR_MIME","MEWTWO"],
  "SIGNAL_BEAM": ["BUTTERFREE","VENONAT","ABRA","VOLTORB","PORYGON"],
  "SLUDGE": ["GRIMER","KOFFING"],
  "SLUDGE_BOMB": ["BULBASAUR","IVYSAUR","VENUSAUR","BEEDRILL","EKANS","NIDORAN_FEMALE", "NIDORINA","NIDORAN_MALE", "NIDORINO","ZUBAT","ODDISH","GLOOM","BELLSPROUT","WEEPINBELL","VICTREEBEL","GRIMER","MUK","GASTLY","HAUNTER","KOFFING","WEEZING","TANGELA"],
  "SLUDGE_WAVE": ["ARBOK","NIDOQUEEN","NIDOKING","TENTACRUEL","MUK","GENGAR"],
  "SOLAR_BEAM": ["IVYSAUR","VENUSAUR","VILEPLUME","PARASECT","VICTREEBEL","EXEGGUTOR","TANGELA","MEW"],
  "STOMP": ["HITMONLEE","LICKITUNG","RHYHORN","KANGASKHAN"],
  "STONE_EDGE": ["NIDOQUEEN","DUGTRIO","MACHAMP","GRAVELER","GOLEM","ONIX","HITMONLEE","RHYDON","KABUTOPS"],
  "STRUGGLE": ["CATERPIE","METAPOD","WEEDLE","KAKUNA","MAGIKARP","DITTO"],
  "SUBMISSION": ["POLIWRATH","MACHOKE","MACHAMP","PINSIR"],
  "SWIFT": ["DODUO","STARYU","EEVEE"],
  "THUNDER": ["PIKACHU","RAICHU","ELECTABUZZ","JOLTEON","ZAPDOS","MEW"],
  "THUNDER_PUNCH": ["RAICHU","HITMONCHAN","ELECTABUZZ"],
  "THUNDERBOLT": ["PIKACHU","MAGNEMITE","VOLTORB","ELECTRODE","ELECTABUZZ","JOLTEON","ZAPDOS"],
  "TWISTER": ["PIDGEY","PIDGEOTTO","SPEAROW","FEAROW","GYARADOS","DRATINI"],
  "VICE_GRIP": ["KRABBY","KINGLER","PINSIR"],
  "WATER_PULSE": ["SQUIRTLE","TENTACOOL","SLOWPOKE","SLOWBRO","SHELLDER","KRABBY","KINGLER","GOLDEEN","VAPOREON","KABUTOPS"],
  "WRAP": ["EKANS","BELLSPROUT","TENTACOOL","DRATINI","DRAGONAIR"],
  "X_SCISSOR": ["BEEDRILL","PARAS","PARASECT","KINGLER","SCYTHER","PINSIR"],
}

Pokemon.forEach((mon) => {
  mon.moves1 = []
  mon.moves2 = []
})

Object.keys(quickMoves).forEach((moveName) => {
  const pokemon = quickMoves[moveName]

  const move = Moves.filter(x => x.Name === moveName)[0]

  if (!move) {
    throw new Error(`Problem with ${moveName}`)
  }

  pokemon.forEach((pokemonName) => {
    const mon = Pokemon.filter(x => x.name === pokemonName)[0]

    if (!mon) {
      throw new Error(`Problem with ${pokemonName}`)
    }

    const STAB_MULTIPLIER = (mon.type1 === move.Type || mon.type2 === move.Type) ? 1.25 : 1
    const DPS = (move.Power / (move.DurationMs / 1000)) * STAB_MULTIPLIER

    mon.moves1.push({
      Id: move.Id,
      Name: move.Name,
      Power: move.Power,
      DurationMs: move.DurationMs,
      Energy: move.EnergyDelta,
      DPS,
    })
  })
})

Object.keys(chargeMoves).forEach((moveName) => {
  const move = Moves.filter(x => x.Name === moveName)[0]

  const pokemon = chargeMoves[moveName]

  if (!move) {
    throw new Error(`Problem with ${moveName}`)
  }

  pokemon.forEach((pokemonName) => {
    const mon = Pokemon.filter(x => x.name === pokemonName)[0]

    if (!mon) {
      throw new Error(`Problem with ${pokemonName}`)
    }

    const STAB_MULTIPLIER = (mon.type1 === move.Type || mon.type2 === move.Type) ? 1.25 : 1
    const DPS = (move.Power / (move.DurationMs / 1000)) * STAB_MULTIPLIER

    mon.moves2.push({
      Id: move.Id,
      Name: move.Name,
      Type: move.Type,
      Power: move.Power,
      DurationMs: move.DurationMs,
      Energy: move.EnergyDelta,
      RAW_DPS: move.DPS,
      DPS,
    })
  })
})

console.log(JSON.stringify(Pokemon))
