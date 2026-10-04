// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const seedID = [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:black_quartz_seeds'
]

const essenceID = [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:black_quartz_essence'
]

ServerEvents.tags('item', allthemods => {
    for (let seeds of seedID) {
        allthemods.add('c:seeds', seeds)
        allthemods.add('mysticalagriculture:seeds', seeds)
        if (Platform.isLoaded("extended_industrialization")) {
            allthemods.add('extended_industrialization:farmer_plantable', seeds)
        }
        if (Platform.isLoaded("ars_nouveau")) {
            allthemods.add('ars_nouveau:whirlisprig/denied_drop', seeds)
        }
    }
    allthemods.add('mysticalagriculture:essences', essenceID)
})

ServerEvents.tags('block', allthemods => {
    for (let seeds of seedID) {
        let crop = seeds.replace('seeds', 'crop')
        allthemods.add('cucumber:mineable/sickle', crop)
        allthemods.add('silentgear:mineable/sickle', crop)
        allthemods.add('minecraft:crops', crop)
        if (Platform.isLoaded("computercraft")) {
            allthemods.add('computercraft:turtle_hoe_harvestable', crop)
        }
        if (Platform.isLoaded("the_bumblezone")) {
            allthemods.add('the_bumblezone:essence/life/grow_plants', crop)
        }
        allthemods.add('minecraft:bee_growables', crop)
        allthemods.add('mysticalagriculture:crops', crop)
        if (Platform.isLoaded("pneumaticcraft")) {
            allthemods.add('pneumaticcraft:crop_support_growable', crop)
        }
        if (Platform.isLoaded("ae2")) {
            allthemods.add('ae2:growth_acceleratable', crop)
        }
        allthemods.add('minecraft:sword_efficient', crop)
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.