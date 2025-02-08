def on_item_interacted_ender_eye():
    player.execute("say Hi!")
    blocks.place(TNT, pos(0, 0, 0))
player.on_item_interacted(ENDER_EYE, on_item_interacted_ender_eye)

def on_mob_killed_allay():
    player.teleport(pos(10000, 10000, 10000))
    mobs.kill(mobs.target(NEAREST_PLAYER))
mobs.on_mob_killed(ALLAY, on_mob_killed_allay)
