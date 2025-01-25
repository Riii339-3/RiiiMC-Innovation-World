ServerEvents.recipes(event => {
    event.remove({output: "minecraft:furnace"})
    event.shaped(Item.of("minecraft:furnace", 1),
    [
        "AAA",
        "ABA",
        "AAA"
    ],
    {
        A: '#minecraft:stone_crafting_materials',
        B:'minecraft:flint'
    }
)
})