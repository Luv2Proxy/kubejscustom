/*
  This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
  As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/

let stews = []
if (Platform.isLoaded("biomeswevegone")) {
    stews.push("biomeswevegone:white_puffball_stew")
}
if (Platform.isLoaded("rootsclassic")) {
    stews.push("rootsclassic:rooty_stew")
}
if (Platform.isLoaded("undergarden")) {
    stews.push("undergarden:bloody_stew")
    stews.push("undergarden:inky_stew")
    stews.push("undergarden:indigo_stew")
    stews.push("undergarden:veiled_stew")
}

if (stews.length > 0) {
    ItemEvents.modification(allthemods => {
        stews.forEach(stew => {
              allthemods.modify(stew, item => {
                  item.maxStackSize = 16
              })
        })
    })
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.