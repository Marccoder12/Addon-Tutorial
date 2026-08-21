import { system, world } from "@minecraft/server";

system.beforeEvents.startup.subscribe(e => {
    const blockComponentRegistry = e.blockComponentRegistry;
    blockComponentRegistry.registerCustomComponent("fpat:sit_on_chair", {
        onPlayerInteract: (data) => {
            const player = data.player;
            const block = data.block;
            const block_facing_direction = block.permutation.getState("minecraft:cardinal_direction");
            const sittableEntity = block.dimension.spawnEntity("fpat:sittable",
                {
                    x: block.location.x + 0.5,
                    y: block.location.y + 0.5,
                    z: block.location.z + 0.5
                });
            switch (block_facing_direction) {
                case "south":
                    sittableEntity.setRotation({ x: 0, y: 180 });
                    break;
                case "north":
                    sittableEntity.setRotation({ x: 0, y: 0 });
                    break;
                case "west":
                    sittableEntity.setRotation({ x: 0, y: 270 });
                    break;
                case "east":
                    sittableEntity.setRotation({ x: 0, y: 90 });
                    break;
            }
            sittableEntity.getComponent("minecraft:rideable")?.addRider(player);

        }
    })
})