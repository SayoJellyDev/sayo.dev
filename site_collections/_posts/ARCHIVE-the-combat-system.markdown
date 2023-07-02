---
layout: post
title:  "The Combat System"
date:   2021-09-26 20:00:00 +1000
image: /images/projects/bound/GameIcon.png
categories: blog Development
project: Bound
excerpt_separator: <!-- excerpt_end -->
---
<!-- excerpt_start -->
Let's talk about the combat system!

I've already talked about the combat system in the previous post ([Bound Information Post](https://sayo.dev/blog/development/2021/08/26/what-is-Bound.html)), but I wanted to expand on it and detail it more out, explain what I got and show examples of what's to come.
<!-- excerpt_end -->

*Additionally, this has been created as a guideline for myself! So that I don't go off track with the combat system or how the ability system and the combat system interact!*

# The Combat System
##### (And how is it going to work?)
<p></p>
## Current Position in Progress?
Currently, the combat system has combos that are hot-swapped to match the weapon the player is using (though the player can't equip gear just yet). Each attack produces a hitbox, which lingers for a set duration and then disappears. Combos will reset after a set duration after each attack.

Each weapon will contain a unique combo set fitting to the weapon type. For example, swords having quick combos and scythes having large sweeping attacks that are much slower!

## What is the plan?
Well, we will start talking about the Weapons!

### Weapons!
I've already said that there will be different types of weapons. Each with potential interactions and or abilities alongside them. But first, what weapon choices does the player have?
The first few weapons I'd like added will be:

- Sword (Close-Range)
- Scythe (Mid-Range)
- Grimore (Ranged)

These three I'd love to have added and working. Once these are working correctly, the combat system will be functional enough to continue working on other game systems, such as quest and classes!

These won't be the only weapons I'd like to have in the game so that you know!
Additional weapons such as:

- Bow (Ranged)
- Dagger (Close-Range)
- Greatsword (Mid-Range)

But I'd like to get the game into a playable state before putting more focus into this system!

Okay, since that's out of the way, what about the potential effects I had mentioned above?

Like the last three weapons mentioned above, I won't add the weapon effects/abilities until the game is playable. Then I'll put more focus into getting item effects working and interacting with the system! But, what kind of effects would we be looking at? 

Effects such as stacking increase damage per hit (with a cap on stacks) and increase movement/attack speed and such. These aren't final but gives you a rough idea of what kind of effects could show up!

Time to end the weapons section and talk about the Combos! And how combos will contribute to the game!

### Combos
I want combos to be a big part of Bound! It's always wonderful playing a game with flowing combos that come out like my butter, smooth and clean. But I still do want the hard-hitting and powerful attacks!

But what exactly does this look like? Let's go over how the combos will look! What does it feel like, and how would I implement this?

Each part of the combo should have weight and feel to them!
Things like force in the attack, how the player is moved based on this force. And how the enemy's position is offset based on the attack and many more! Variables will be set to determine each of these things in our combos!

Variables such as:

- The hitbox size
- The damage it will deal
- The delay before the next attack
- The duration the attack lingers for (for specific attacks)
- The players offset (on performing the attack)
- The enemy offset (on being hit by the attack)

These makeup basic attack information that we then can supply to the relevant systems and entities to "react" to being hit or performing the action!

### Classes and their abilities!
I'd also like to talk about how abilities are going to work too briefly! The combat system will play a big part in this game, and the abilities will need to synergise, improve or work around this system!

#### What's the go?
Well, I'll be using the Huntress as an example of how abilities will work with the combat system!
The Huntress will have (at this current point in time) three abilities and a Passive, not including the primary and secondary attacks from the Weapons!

The first ability will be a simple, quick dash, ignoring entity collisions and passing through them. This ability will also deal low damage but helps catch up to enemies or escape them! 

The second ability will be a simple damage buff. Then the third ability will create a mimick of yourself, mimicking your attacks and class abilities for a set duration before going on cooldown! 

And finally, the passive will be a damage over time effect, applied on each attack made! 

Each of these is very much possible to change, adjust, or completely being removed and replaced! But each of these abilities supports the combat system, providing buffs, movement and additional sources of damage! 

Each class will perform differently and shine in different sections of the game, but this gives us a very rough idea of what's to come!

## Endnotes
There will be a lot of work needed to be completed to get each of these parts and systems working and ready. I have a baseline setup, allowing for different combos, each having set variables interacting with the entities within the game. 

There are also additional features within the system I'd like to have working, such as a lock on/targeting system, to make it easier to hit enemies! (But more on that later)

Have fun ~ [Jelly](/)