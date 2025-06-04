// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001080808080808080808080808080806020909090909090909090909090909070209090909090909090909090909090702090a0b0a09090b0a0909090909090702090a0a0a09090a0a09090a0b0a090702090909090909090909090a0a0a09070209090909090909090909090909090702090a0b0a090909090909090909090702090909090909090909090909090907020909090909090a0a09090909090907020909090909090b0a09090909090907020909090909090a0a09090b0a09090702090a0b090909090909090a0a09090702090a0a09090909090909090909090702090a0a09090909090909090909090703040404040404040404040404040405`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010103030101010101010102010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020201010101010101010101010101010101010101010101020101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
