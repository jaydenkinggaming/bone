function doSomething (array: any[], num: number, bool: boolean, position: Position) {
	
}
player.onItemInteracted(ENDER_EYE, function () {
	
})
mobs.onMobKilled(ALLAY, function () {
    player.teleport(pos(10000, IRON_SHOVEL, 10000))
    blocks.place(TNT, pos(0, 0, 0))
    player.execute(
    "say Hi!"
    )
    mobs.kill(
    mobs.target(NEAREST_PLAYER)
    )
    shapes.circle(
    CRACKED_STONE_BRICK_MONSTER_EGG,
    pos(5, 5, 5),
    5,
    Axis.Y,
    ShapeOperation.Hollow
    )
})
player.teleport(pos(0, 0, 0))
