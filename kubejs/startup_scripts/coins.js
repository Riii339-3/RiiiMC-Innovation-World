StartupEvents.registry('item', event => {
    let coin_materials = ["copper", "iron", "silver", "gold", "diamond"]
    for (let i in coin_materials) {
        event.create(`coin_${i}`).texture(`coins:item/${i}`)
    }

})