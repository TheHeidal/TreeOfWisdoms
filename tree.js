const SKILLS_JSON_STRING = `{
    "elements": [
        {
            "id": "s.preliminalmeter",
            "Label": "Preliminal Meter",
            "Desc": "'Nine modes, nine horizons': the subtle rhythms of words which open ways.",
            "aspects": {
                "knock": 2,
                "rose": 1,
                "w.illumination": 1,
                "w.ithastry": 1,
                "skill": 1
            },
            "ambits": {
                "knock": 99,
                "rose": 99,
                "memory": 1,
                "gervinite": 1,
                "enduring.reflection": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.pyroglyphics",
            "Label": "Pyroglyphics",
            "Desc": "One script that all the world must read, even the blind, and it is written in flames.' Matters of fireworks and their kin - lights, colours, infernal detonations.",
            "aspects": {
                "forge": 2,
                "lantern": 1,
                "w.illumination": 1,
                "w.ithastry": 1,
                "skill.chandlery": 1,
                "skill": 1
            },
            "ambits": {
                "forge": 99,
                "lantern": 99,
                "liquid": 1,
                "wire.orichalcum": 1,
                "ichor.vitreous": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.inks.containment",
            "Label": "Inks of Containment",
            "Desc": "The inks in which the Histories are preserved.",
            "aspects": {
                "winter": 2,
                "moon": 1,
                "w.preservation": 1,
                "w.horomachistry": 1,
                "effective.contamination.theoplasma": 1,
                "skill": 1
            },
            "ambits": {
                "winter": 99,
                "moon": 99,
                "beverage": 1,
                "flower": 1,
                "nectar": 99,
                "sky": 99,
                "scale": 99,
                "relic.living": 1,
                "liquid.solomon": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.inks.revelation",
            "Label": "Inks of Revelation",
            "Desc": "The inks in which the Histories are revealed.",
            "aspects": {
                "lantern": 2,
                "moth": 1,
                "w.hushery": 1,
                "w.ithastry": 1,
                "skill": 1
            },
            "ambits": {
                "lantern": 99,
                "moth": 99,
                "glass": 1,
                "liquid": 1,
                "nectar": 99,
                "sky": 99,
                "rose": 99,
                "essence.xanthotic": 1,
                "ichor.auroral": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.inks.power",
            "Label": "Inks of Power",
            "Desc": "The inks in which the Histories are written.",
            "aspects": {
                "rose": 2,
                "scale": 1,
                "w.hushery": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "rose": 99,
                "scale": 99,
                "leaf": 1,
                "light": 1,
                "nectar": 99,
                "sky": 99,
                "forge": 99,
                "essence.iotic": 1,
                "leathy": 1,
                "ichor.auroral": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.drums.dances",
            "Label": "Drums & Dances",
            "Desc": "The first musics were not made by mortals, but taken; from sand-coil and sea-thorn, from flint-heart and dragon-womb.",
            "aspects": {
                "heart": 2,
                "nectar": 1,
                "w.bosk": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "heart": 99,
                "nectar": 99,
                "instrument": 1,
                "scale": 99,
                "music.thunderskin": 1,
                "pyrus.auricalcinus": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.strings.songs",
            "Label": "Strings & Songs",
            "Desc": "The harmonies of the lower skies are here reproduced.",
            "aspects": {
                "sky": 2,
                "heart": 1,
                "w.nyctodromy": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "heart": 99,
                "instrument": 1,
                "music.thunderskin": 1,
                "mazarine.fife": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.bells.brazieries",
            "Label": "Bells & Brazieries",
            "Desc": "That resonance which lingers from the hammer's touch",
            "aspects": {
                "forge": 2,
                "sky": 1,
                "w.horomachistry": 1,
                "w.ithastry": 1,
                "skill": 1
            },
            "ambits": {
                "forge": 99,
                "sky": 99,
                "metal": 1,
                "instrument": 1,
                "wire.orichalcum": 1,
                "ascendant.harmony": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.horns.ivories",
            "Label": "Horns & Ivories",
            "Desc": "The Hunter, the Way, and their memories.",
            "aspects": {
                "scale": 2,
                "knock": 1,
                "w.skolekosophy": 1,
                "w.bosk": 1,
                "skill": 1
            },
            "ambits": {
                "scale": 99,
                "knock": 99,
                "egg": 1,
                "memory": 1,
                "toxin.glassfinger": 1,
                "relic.living": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.surgeries.exsanguinations",
            "Label": "Surgeries & Exsanguinations",
            "Desc": "Surgery entails the flow of blood, and the flow of blood entails purification, but the door also opens the other way.",
            "aspects": {
                "heart": 2,
                "knock": 1,
                "w.hushery": 1,
                "w.preservation": 1,
                "effective.contamination.infestation": 1,
                "skill": 1
            },
            "ambits": {
                "heart": 99,
                "knock": 99,
                "liquid": 1,
                "liquid.gideon": 1,
                "toxin.glassfinger": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.stitching.binding",
            "Label": "Stitching & Binding",
            "Desc": "Nothing is entirely broken nor entirely whole - not so long as we have our needles.",
            "aspects": {
                "sky": 2,
                "heart": 1,
                "w.ithastry": 1,
                "w.preservation": 1,
                "effective.contamination.infestation": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "heart": 99,
                "fabric": 1,
                "egg": 1,
                "winter": 99,
                "frithweft": 1,
                "fabric": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.furs.feathers",
            "Label": "Furs & Feathers",
            "Desc": "Beasts, birds, husbandry, harvest.",
            "aspects": {
                "sky": 2,
                "scale": 1,
                "w.nyctodromy": 1,
                "w.bosk": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "scale": 99,
                "egg": 1,
                "instrument": 1,
                "grail": 99,
                "pale.mommet": 1,
                "mazarine.fife": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.pearl.tide",
            "Label": "Pearl & Tide",
            "Desc": "The depths of the sea, the waves upon the shore, and the memories of their withdrawal.",
            "aspects": {
                "rose": 2,
                "moon": 1,
                "w.nyctodromy": 1,
                "w.bosk": 1,
                "skill": 1
            },
            "ambits": {
                "rose": 99,
                "moon": 99,
                "liquid": 1,
                "memory": 1,
                "asimel": 1,
                "lenten.rose": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.insects.nectars",
            "Label": "Insects & Nectars",
            "Desc": "The Hive, the Nest, and the Chrysalis are the three secret principalities of the lesser world. Two of those three know the temptations of sweetness.",
            "aspects": {
                "nectar": 2,
                "moon": 1,
                "w.nyctodromy": 1,
                "w.bosk": 1,
                "skill.chandlery": 1,
                "skill": 1
            },
            "ambits": {
                "nectar": 99,
                "moon": 99,
                "egg": 1,
                "beverage": 1,
                "larva.chimeric": 1,
                "leathy": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.herbs.infusions",
            "Label": "Herbs & Infusions",
            "Desc": "Pluck it, powder it, mix it, warm it, drink it. But not that one.",
            "aspects": {
                "heart": 2,
                "nectar": 1,
                "w.preservation": 1,
                "w.bosk": 1,
                "effective.contamination.corruption": 1,
                "skill": 1
            },
            "ambits": {
                "heart": 99,
                "nectar": 99,
                "liquid": 1,
                "beverage": 1,
                "liquid.gideon": 1,
                "pyrus.auricalcinus": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.spices.savours",
            "Label": "Spices & Savours",
            "Desc": "There is no sacrifice without sustenance.",
            "aspects": {
                "nectar": 2,
                "forge": 1,
                "w.ithastry": 1,
                "w.bosk": 1,
                "skill": 1,
                "spicing": 1
            },
            "ambits": {
                "nectar": 99,
                "forge": 99,
                "liquid": 1,
                "wood": 1,
                "honeyscar.jasmine": 1,
                "pyrus.auricalcinus": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.leaves.thorns",
            "Label": "Leaves & Thorns",
            "Desc": "There is no scent without sorrow.",
            "aspects": {
                "nectar": 2,
                "grail": 1,
                "w.birdsong": 1,
                "w.bosk": 1,
                "skill": 1
            },
            "ambits": {
                "nectar": 99,
                "grail": 99,
                "flower": 1,
                "wood": 1,
                "rubywise.ruin": 1,
                "pyrus.auricalcinus": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.orchids.narcotics",
            "Label": "Orchids & Narcotics",
            "Desc": "There is no greed without beauty.",
            "aspects": {
                "grail": 2,
                "nectar": 1,
                "w.bosk": 1,
                "w.skolekosophy": 1,
                "skill": 1
            },
            "ambits": {
                "grail": 99,
                "nectar": 99,
                "flower": 1,
                "beverage": 1,
                "rubywise.ruin": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.serpents.venoms",
            "Label": "Serpents & Venoms",
            "Desc": "These are the Mother's neglected children, and we prefer that they pass not through any door.",
            "aspects": {
                "scale": 2,
                "moon": 1,
                "w.hushery": 1,
                "w.skolekosophy": 1,
                "host.technique.summon.echidna": 1,
                "skill": 1
            },
            "ambits": {
                "scale": 99,
                "moon": 99,
                "liquid": 1,
                "egg": 1,
                "toxin.glassfinger": 1,
                "perinculate": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sights.sensations",
            "Label": "Sights & Sensations",
            "Desc": "To mix the rarest colours, a merciless detachment is required.",
            "aspects": {
                "sky": 2,
                "winter": 1,
                "w.hushery": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "winter": 99,
                "light": 1,
                "flower": 1,
                "ascendant.harmony": 1,
                "liquid.solomon": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.desires.dissolutions",
            "Label": "Desires & Dissolutions",
            "Desc": "The boundaries between flesh, pearl, and pleasure are equally contingent.",
            "aspects": {
                "grail": 2,
                "moon": 1,
                "w.bosk": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "grail": 99,
                "moon": 99,
                "flower": 1,
                "wood": 1,
                "pale.mommet": 1,
                "asimel": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.resurgences.emergences",
            "Label": "Resurgences & Emergences",
            "Desc": "Birth and death are only directions. Between the two we find a crossroads.",
            "aspects": {
                "moth": 2,
                "grail": 1,
                "w.bosk": 1,
                "w.preservation": 1,
                "effective.contamination.infestation": 1,
                "skill": 1
            },
            "ambits": {
                "moth": 99,
                "grail": 99,
                "fabric": 1,
                "egg": 1,
                "pale.mommet": 1,
                "larva.chimeric": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.rhyme.remembrance",
            "Label": "Rhyme & Remembrance",
            "Desc": "To speak with the dead; to torment the living; to celebrate both",
            "aspects": {
                "winter": 2,
                "moon": 1,
                "w.skolekosophy": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "winter": 99,
                "moon": 99,
                "egg": 1,
                "remains": 1,
                "stymphling": 1,
                "essential.periost": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.disciplines.thehammer",
            "Label": "Disciplines of the Hammer",
            "Desc": "To purify and to combine the selves and the essences. The Hammer shapes gates and shatters doors, within us and without.",
            "aspects": {
                "edge": 2,
                "forge": 1,
                "w.illumination": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "edge": 99,
                "forge": 99,
                "memory": 1,
                "metal": 1,
                "winning.move": 1,
                "wire.orichalcum": 1,
                "salts.bitterblack": 1,
                "essence.xanthotic": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.disciplines.thescar",
            "Label": "Disciplines of the Scar",
            "Desc": "To master boundaries through their determination. The Scar marks wisdom and regrets; one is often born from the other.",
            "aspects": {
                "edge": 2,
                "lantern": 1,
                "w.illumination": 1,
                "w.hushery": 1,
                "skill": 1
            },
            "ambits": {
                "edge": 99,
                "lantern": 99,
                "leaf": 1,
                "memory": 1,
                "perinculate": 1,
                "old.moment": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.auroralcontemplations",
            "Label": "Auroral Contemplations",
            "Desc": "'To know what will pass in what has passed.' The practitioners of this discipline see endings and beginnings, passages and transitions, in the same mode as dawn and sunset.",
            "aspects": {
                "lantern": 2,
                "edge": 1,
                "w.illumination": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "lantern": 99,
                "edge": 99,
                "memory": 1,
                "liquid": 1,
                "light": 1,
                "rose": 99,
                "winning.move": 1,
                "ichor.auroral": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.applebrighteuphonies",
            "Label": "Applebright Euphonies",
            "Desc": "'Breath is the temptation of the soul.' Pleasures and insights that the Church would call 'the Secrets', the Sisterhood 'the Mysteries', and the Bureau 'unsanctioned.'",
            "aspects": {
                "sky": 2,
                "grail": 1,
                "w.illumination": 1,
                "w.bosk": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "grail": 99,
                "flower": 1,
                "instrument": 1,
                "rubywise.ruin": 1,
                "ascendant.harmony": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.watchmansparadoxes",
            "Label": "Watchman's Paradoxes",
            "Desc": "'That amber preserves and is preserved by light; that to hatch is not to die; that the Sun.' There is a place behind the world called the Mansus. Deeds that would be impossible in the world are inevitable there. The Watchman, who knows all the ways of the Mansus, also knows how to make these deeds possible in the waking world.",
            "aspects": {
                "lantern": 2,
                "sky": 1,
                "w.illumination": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "lantern": 99,
                "sky": 99,
                "glass": 1,
                "light": 1,
                "ichor.vitreous": 1,
                "essence.xanthotic": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.raggedcrossroads",
            "Label": "Ragged Crossroads",
            "Desc": "'To understand why four paths were not taken.'",
            "aspects": {
                "edge": 2,
                "winter": 1,
                "w.illumination": 1,
                "w.skolekosophy": 1,
                "skill": 1
            },
            "ambits": {
                "edge": 99,
                "winter": 99,
                "memory": 1,
                "flower": 1,
                "essential.periost": 1,
                "toxin.glassfinger": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.meniscatereflections",
            "Label": "Meniscate Reflections",
            "Desc": "'Without is purified, within is erased.'",
            "aspects": {
                "forge": 2,
                "edge": 1,
                "w.illumination": 1,
                "w.preservation": 1,
                "effective.contamination.theoplasma": 1,
                "skill": 1
            },
            "ambits": {
                "forge": 99,
                "edge": 99,
                "memory": 1,
                "liquid": 1,
                "perinculate": 1,
                "wire.orichalcum": 1,
                "salts.bitterblack": 1,
                "essence.xanthotic": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.putrefactions.calcinations",
            "Label": "Putrefactions & Calcinations",
            "Desc": "'Death alters; Snow endures.' - Solomon Husher",
            "aspects": {
                "winter": 2,
                "moon": 1,
                "w.ithastry": 1,
                "w.skolekosophy": 1,
                "skill": 1
            },
            "ambits": {
                "winter": 99,
                "moon": 99,
                "leaf": 1,
                "liquid": 1,
                "asimel": 1,
                "essential.periost": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.solutions.separations",
            "Label": "Solutions & Separations",
            "Desc": "The surgeon plies the knife and the mason plies the chisel. There are subtler tools than either.",
            "aspects": {
                "moth": 2,
                "knock": 1,
                "w.ithastry": 1,
                "w.skolekosophy": 1,
                "skill": 1
            },
            "ambits": {
                "moth": 99,
                "knock": 99,
                "liquid": 1,
                "memory": 1,
                "toxin.glassfinger": 1,
                "honey": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.path.pilgrim",
            "Label": "Path & Pilgrim",
            "Desc": "'The traveller is always returning. One who does not is no traveller.' - Arun Peel",
            "aspects": {
                "rose": 2,
                "scale": 1,
                "w.birdsong": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "rose": 99,
                "scale": 99,
                "memory": 1,
                "enduring.reflection": 1,
                "relic.living": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.purifications.exaltations",
            "Label": "Purifications & Exaltations",
            "Desc": "'No-one ever truly wants to be truly changed. Azoth and refulgin are justly feared. But no-one who has been changed would choose to go back.' - George Collers",
            "aspects": {
                "sky": 2,
                "lantern": 1,
                "w.illumination": 1,
                "w.ithastry": 1,
                "effective.contamination.corruption": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "lantern": 99,
                "liquid": 1,
                "instrument": 1,
                "forge": 99,
                "wire.orichalcum": 1,
                "salts.bitterblack": 1,
                "essence.iotic": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.transformations.liberations",
            "Label": "Transformations & Liberations",
            "Desc": "Forge and Moth are less different than we think. Every change is in some way a release.",
            "aspects": {
                "forge": 2,
                "moth": 1,
                "w.illumination": 1,
                "w.ithastry": 1,
                "skill.chandlery": 1,
                "skill": 1
            },
            "ambits": {
                "forge": 99,
                "moth": 99,
                "liquid": 1,
                "egg": 1,
                "lantern": 99,
                "essence.iotic": 1,
                "larva.chimeric": 1,
                "salts.bitterblack": 1,
                "essence.xanthotic": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.lockworks.clockworks",
            "Label": "Lockworks & Clockworks",
            "Desc": "The little ways of little machines.",
            "aspects": {
                "knock": 2,
                "sky": 1,
                "w.skolekosophy": 1,
                "w.ithastry": 1,
                "skill": 1
            },
            "ambits": {
                "knock": 99,
                "sky": 99,
                "metal": 1,
                "glass": 1,
                "gervinite": 1,
                "wire.silver": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.seastories",
            "Label": "Sea Stories",
            "Desc": "The sea has always been the widest road.",
            "aspects": {
                "moon": 2,
                "grail": 1,
                "w.birdsong": 1,
                "w.nyctodromy": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "grail": 99,
                "fabric": 1,
                "liquid": 1,
                "rubywise.ruin": 1,
                "asimel": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.wolfstories",
            "Label": "Wolf Stories",
            "Desc": "Sometimes we eat the wolf, and sometimes the wolf eats us.",
            "aspects": {
                "moon": 2,
                "scale": 1,
                "w.skolekosophy": 1,
                "w.birdsong": 1,
                "host.technique.summon.echidna": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "scale": 99,
                "memory": 1,
                "remains": 1,
                "stymphling": 1,
                "old.moment": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sandstories",
            "Label": "Sand Stories",
            "Desc": "Of wandering tribes, watchful vagabonds, and winged devourers.",
            "aspects": {
                "rose": 2,
                "moon": 1,
                "w.skolekosophy": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "rose": 99,
                "moon": 99,
                "egg": 1,
                "light": 1,
                "enduring.reflection": 1,
                "ichor.auroral": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "rose": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.skystories",
            "Label": "Sky Stories",
            "Desc": "The nine winds gossip, and sometimes we can listen.",
            "aspects": {
                "sky": 2,
                "rose": 1,
                "w.horomachistry": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "rose": 99,
                "memory": 1,
                "instrument": 1,
                "enduring.reflection": 1,
                "mazarine.fife": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.snowstories",
            "Label": "Snow Stories",
            "Desc": "Of wind, woe, and winter.",
            "aspects": {
                "winter": 2,
                "moon": 1,
                "w.hushery": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "winter": 99,
                "moon": 99,
                "egg": 1,
                "remains": 1,
                "stymphling": 1,
                "essential.periost": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.stonestories",
            "Label": "Stone Stories",
            "Desc": "Of the earth, of its forms, of dwellers living and dead.",
            "aspects": {
                "scale": 2,
                "nectar": 1,
                "w.preservation": 1,
                "w.birdsong": 1,
                "effective.contamination.infestation": 1,
                "skill": 1
            },
            "ambits": {
                "scale": 99,
                "nectar": 99,
                "remains": 1,
                "egg": 1,
                "old.moment": 1,
                "essential.periost": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.vak",
            "Label": "Vak",
            "Desc": "Before gods arose from blood, before ever ape stood upright, this was the language heard in the House of the Sun.... 'I am Vak,' the Peacock Door boasted, 'both the tongue and the Goddess. I am the only entrance into secret light. I was worshipped before you upright apes, and I will be still when all of you are ugly ash. Listen, and I will prove it.",
            "aspects": {
                "knock": 2,
                "rose": 1,
                "w.nyctodromy": 1,
                "w.birdsong": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "rose",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "rose": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.mandaic",
            "Label": "Deep Mandaic",
            "Desc": "The most secret script of the innermost rites of the deep sects of the deep desert. The birth-tongue, it is claimed, of the Mother of Ants herself.",
            "aspects": {
                "forge": 2,
                "lantern": 1,
                "w.horomachistry": 1,
                "w.ithastry": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "forge": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.killasimi",
            "Label": "Killasimi",
            "Desc": "If there is speech in Nowhere; if there is a language used by the Dead; if the House of the Moon has a native tongue; then it must be Killasimi. If none of this is true, it is still not a language to be spoken in daylight. Each word breathes woe. Read it, as they say, and weep.",
            "aspects": {
                "winter": 2,
                "moon": 1,
                "w.skolekosophy": 1,
                "w.bosk": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.fucine",
            "Label": "Fucine",
            "Desc": "A people lived east of the lost lake Fucino. Horace warned that theirs was the land of witches. This was their language, called by some 'the dry tongue' and by others 'the tongue of witches'.",
            "aspects": {
                "heart": 2,
                "knock": 1,
                "w.hushery": 1,
                "w.ithastry": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sabazine",
            "Label": "Sabazine",
            "Desc": "There is a History where Alexander defeated first the Great Knot of Sabazos, and then the King of Kings. There is another History where, instead, he learnt from them. How many more? If we curl our hands into the correct shapes, we may yet understand.",
            "aspects": {
                "moth": 2,
                "lantern": 1,
                "w.birdsong": 1,
                "w.horomachistry": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "lantern": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.cracktrack",
            "Label": "Cracktrack",
            "Desc": "In the Tracks of Beasts, in the Convolutions of his own Carapace, in Egg-vein and Shell-shadow, the Many-Eyed One found the Signs which can be History.",
            "aspects": {
                "nectar": 2,
                "scale": 1,
                "w.illumination": 1,
                "w.preservation": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.hyksos",
            "Label": "Hyksos",
            "Desc": "The Shepherd-Kings brought this speech west from Canaan to use in their wards and snares. Had they never come to Egypt, they might never found a way to write it; given its addictive qualities, that might have been for the best.",
            "aspects": {
                "grail": 2,
                "edge": 1,
                "w.nyctodromy": 1,
                "w.skolekosophy": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.ericapaean",
            "Label": "Ericapaean",
            "Desc": "A language of surpassing beauty and allusiveness, revealed through the ecstatic apprehensions of the Orphics, the Eleusinians, and the Sibyls of the Rhine. Ericapaean, these mystics claimed, allows the elaboration of hues, sensations and states of mind too subtle for grosser tongues.",
            "aspects": {
                "lantern": 2,
                "winter": 1,
                "w.illumination": 1,
                "w.hushery": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "winter": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.ramsund",
            "Label": "Ramsund",
            "Desc": "This language has been called <i>'mantiq al-tair'</i> and <i>'lenga aucel'</i> and <i>'the speech of birds'</i> and <i>'Ramsund'</i> and <i>'the hazelnut tongue'</i>, but it's a language of secrets, and its true name may never be used. The aviform Hours use it at their Roost, or so the story goes",
            "aspects": {
                "moth": 2,
                "sky": 1,
                "w.preservation": 1,
                "w.birdsong": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sacrasolisinvicti",
            "Label": "Sacra Solis Invicti",
            "Desc": "The rites of the Church of the Unconquered Sun, and certain secrets of the gods-from-Light.",
            "aspects": {
                "lantern": 2,
                "sky": 1,
                "w.illumination": 1,
                "w.horomachistry": 1,
                "effective.contamination.curse": 1,
                "skill": 1
            },
            "ambits": {
                "lantern": 99,
                "sky": 99,
                "glass": 1,
                "wood": 1,
                "essence.xanthotic": 1,
                "mazarine.fife": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.tridesmahiera",
            "Label": "Tridesma Hiera",
            "Desc": "The rites of the Sisterhood of the Triple Knot, which include certain mysteries of the dwellers in the Wood behind the World.",
            "aspects": {
                "moon": 2,
                "grail": 1,
                "w.bosk": 1,
                "w.preservation": 1,
                "effective.contamination.curse": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "grail": 99,
                "fabric": 1,
                "egg": 1,
                "nectar": 99,
                "rubywise.ruin": 1,
                "asimel": 1,
                "leathy": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sacralimiae",
            "Label": "Sacra Limiae",
            "Desc": "The rites of an order of immortals who have tried to remain apart. These rites touch on secrets of Hours of the Mansus - chiefly gods-who-were-flesh and gods-from-Light.",
            "aspects": {
                "moth": 2,
                "sky": 1,
                "w.horomachistry": 1,
                "w.hushery": 1,
                "effective.contamination.curse": 1,
                "skill": 1
            },
            "ambits": {
                "moth": 99,
                "sky": 99,
                "memory": 1,
                "wood": 1,
                "honey": 1,
                "ascendant.harmony": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sickle.eclipse",
            "Label": "Sickle & Eclipse",
            "Desc": "Salt and silver; balance, necessity and rebuke.",
            "aspects": {
                "edge": 2,
                "moon": 1,
                "w.nyctodromy": 1,
                "w.preservation": 1,
                "effective.contamination.corruption": 1,
                "skill": 1
            },
            "ambits": {
                "edge": 99,
                "moon": 99,
                "leaf": 1,
                "remains": 1,
                "perinculate": 1,
                "stymphling": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.hill.hollow",
            "Label": "Hill & Hollow",
            "Desc": "The ways of the hill-children and the gods-from-stone. Old paths, old secrets, the songs that still echo beneath the earth.",
            "aspects": {
                "moon": 2,
                "scale": 1,
                "w.preservation": 1,
                "w.birdsong": 1,
                "effective.contamination.infestation": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "scale": 99,
                "egg": 1,
                "old.moment": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "scale": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.pentiments.precursors",
            "Label": "Pentiments & Precursors",
            "Desc": "Feats and feits of forgotten things: the Carapace Cross, the line of Antaios, the world of a low red sun. 'Though much is taken, much abides.'",
            "aspects": {
                "scale": 2,
                "grail": 1,
                "w.skolekosophy": 1,
                "w.birdsong": 1,
                "host.technique.summon.echidna": 1,
                "skill": 1
            },
            "ambits": {
                "scale": 99,
                "grail": 99,
                "fabric": 1,
                "egg": 1,
                "pale.mommet": 1,
                "relic.living": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "grail": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.coil.chasm",
            "Label": "Coil & Chasm",
            "Desc": "Worms, Seven-Coils, dangerous places; how earthquakes are bound and why they are released.",
            "aspects": {
                "scale": 2,
                "nectar": 1,
                "w.nyctodromy": 1,
                "w.skolekosophy": 1,
                "host.technique.summon.echidna": 1,
                "skill": 1
            },
            "ambits": {
                "scale": 99,
                "nectar": 99,
                "wood": 1,
                "memory": 1,
                "pyrus.auricalcinus": 1,
                "old.moment": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "nectar": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.rites.theroots",
            "Label": "Rites of the Roots",
            "Desc": "The oldest Hours are the gods-from-blood, who rose from sacrifice. That blood was always spilt on the roots, and the rites of its spilling are still remembered.",
            "aspects": {
                "nectar": 2,
                "moth": 1,
                "w.bosk": 1,
                "w.preservation": 1,
                "skill": 1
            },
            "ambits": {
                "nectar": 99,
                "moth": 99,
                "memory": 1,
                "beverage": 1,
                "honey": 1,
                "pyrus.auricalcinus": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "nectar",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "nectar": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.door.wall",
            "Label": "Door & Wall",
            "Desc": "'The lock seeks its key, the wall seeks its door, and we who would pass learn at last that they are not our servants.' - Willem Harries",
            "aspects": {
                "knock": 2,
                "forge": 1,
                "w.nyctodromy": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "knock": 99,
                "forge": 99,
                "metal": 1,
                "liquid": 1,
                "wire.orichalcum": 1,
                "toxin.glassfinger": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.edictsliminal",
            "Label": "Edicts Liminal",
            "Desc": "The precepts of limitation and division; established by the enigmatic conclave of Hours sometimes called the Chancel.",
            "aspects": {
                "moth": 2,
                "knock": 1,
                "w.nyctodromy": 1,
                "w.skolekosophy": 1,
                "skill": 1
            },
            "ambits": {
                "moth": 99,
                "knock": 99,
                "liquid": 1,
                "memory": 1,
                "toxin.glassfinger": 1,
                "honey": 1,
                "honey.cuckoo": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moth": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.edictsmartial",
            "Label": "Edicts Martial",
            "Desc": "The precepts of struggle and conflict which drive the cosmic engine of change sometimes called the Corrivality.",
            "aspects": {
                "moon": 2,
                "edge": 1,
                "w.illumination": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "edge": 99,
                "leaf": 1,
                "memory": 1,
                "confounding.parable": 1,
                "winning.move": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "edge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.edictsinviolable",
            "Label": "Edicts Inviolable",
            "Desc": "The precepts of occlusion and dissolution; their jealous enforcement is the nature of the Calyptra.",
            "aspects": {
                "heart": 2,
                "moon": 1,
                "w.horomachistry": 1,
                "w.preservation": 1,
                "skill": 1
            },
            "ambits": {
                "heart": 99,
                "moon": 99,
                "liquid": 1,
                "flower": 1,
                "liquid.gideon": 1,
                "stymphling": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.thegreatsignsandthegreatscars",
            "Label": "The Great Signs and the Great Scars",
            "Desc": "Some glyphs are too obscure to reside in any language, but too potent to remain unwritten.",
            "aspects": {
                "grail": 2,
                "knock": 1,
                "w.hushery": 1,
                "w.horomachistry": 1,
                "skill": 1
            },
            "ambits": {
                "grail": 99,
                "knock": 99,
                "fabric": 1,
                "memory": 1,
                "pale.mommet": 1,
                "gervinite": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "grail",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "grail": 1,
                        "knock": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.maggephenemysteries",
            "Label": "Maggephene Mysteries",
            "Desc": "'The greater plagues may not be cured, only bound. The very greatest of all may only be entreated… and it is death to do so improperly.'",
            "aspects": {
                "moon": 2,
                "heart": 1,
                "w.hushery": 1,
                "w.preservation": 1,
                "effective.contamination.corruption": 1,
                "skill": 1
            },
            "ambits": {
                "moon": 99,
                "heart": 99,
                "liquid": 1,
                "flower": 1,
                "liquid.gideon": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "moon": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.weaving.knotworking",
            "Label": "Weaving & Knotworking",
            "Desc": "'Hee hee hee hee hee hee hee hee hee. Hee.' - Valentine Dewulf",
            "aspects": {
                "heart": 2,
                "moth": 1,
                "w.bosk": 1,
                "w.birdsong": 1,
                "skill": 1
            },
            "ambits": {
                "heart": 99,
                "moth": 99,
                "fabric": 1,
                "memory": 1,
                "winter": 99,
                "frithweft": 1,
                "fabric": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moth",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "heart": 1,
                        "moth": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.anbary.lapidary",
            "Label": "Anbary & Lapidary",
            "Desc": "'Lightning is a little life, and jewels are its eyes.' - Eva Dewulf",
            "aspects": {
                "sky": 2,
                "forge": 1,
                "w.horomachistry": 1,
                "w.ithastry": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "forge": 99,
                "liquid": 1,
                "lantern": 99,
                "essence.iotic": 1,
                "ichor.vitreous": 1,
                "essence.xanthotic": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.quenchings.quellings",
            "Label": "Quenchings & Quellings",
            "Desc": "Arts which quench fires and bring solace to the troubled mind. 'A true adept is never troubled by fire, nor by fever, nor by restless spirit.' - Ambrose Westcott",
            "aspects": {
                "winter": 2,
                "heart": 1,
                "w.preservation": 1,
                "w.hushery": 1,
                "effective.contamination.theoplasma": 1,
                "skill": 1
            },
            "ambits": {
                "winter": 99,
                "heart": 99,
                "liquid": 1,
                "flower": 1,
                "frithweft": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "winter",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "heart",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "winter": 1,
                        "heart": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.glassblowing.vesselcrafting",
            "Label": "Glassblowing & Vesselcrafting",
            "Desc": "'We are all vessels. Let us contain only what will grace us when the light shines through.' - Thirza Blake",
            "aspects": {
                "knock": 2,
                "sky": 1,
                "w.ithastry": 1,
                "w.hushery": 1,
                "skill": 1
            },
            "ambits": {
                "knock": 99,
                "sky": 99,
                "metal": 1,
                "glass": 1,
                "lantern": 99,
                "gervinite": 1,
                "toxin.glassfinger": 1,
                "ichor.vitreous": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "knock",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "knock": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.glaziery.lightsmithing",
            "Label": "Glaziery & Lightsmithing",
            "Desc": "'Break a window. What have you made? A way? A new light? A weapon?' - Natalia Brulleau",
            "aspects": {
                "lantern": 2,
                "sky": 1,
                "w.illumination": 1,
                "w.ithastry": 1,
                "skill.chandlery": 1,
                "skill": 1
            },
            "ambits": {
                "lantern": 99,
                "sky": 99,
                "metal": 1,
                "glass": 1,
                "knock": 99,
                "ichor.vitreous": 1,
                "essence.xanthotic": 1,
                "gervinite": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "lantern",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "lantern": 1,
                        "sky": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.sharps",
            "Label": "Sharps",
            "Desc": "Knives, dangers, and things out of place.",
            "aspects": {
                "edge": 2,
                "moon": 1,
                "w.skolekosophy": 1,
                "w.hushery": 1,
                "skill": 1
            },
            "ambits": {
                "edge": 99,
                "moon": 99,
                "memory": 1,
                "remains": 1,
                "perinculate": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "edge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "edge": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.ouranoscopy",
            "Label": "Ouranoscopy",
            "Desc": "'Consider the Star. Hath each Star, its Seven Names. Observe that these Names are Never Shared.' - Thomas Dewulf",
            "aspects": {
                "sky": 2,
                "moon": 1,
                "w.horomachistry": 1,
                "w.hushery": 1,
                "skill": 1
            },
            "ambits": {
                "sky": 99,
                "moon": 99,
                "lens": 1,
                "wood": 1,
                "winter": 99,
                "ascendant.harmony": 1,
                "asimel": 1,
                "essential.periost": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "sky",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "moon",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "sky": 1,
                        "moon": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        },
        {
            "id": "s.henavek",
            "Label": "Henavek",
            "Desc": "Kernewek Henavek; the oldest form of the language now called Cornish; or something even older.",
            "aspects": {
                "scale": 2,
                "forge": 1,
                "w.bosk": 1,
                "w.ithastry": 1,
                "skill.language": 1,
                "skill": 1
            },
            "xtriggers": {
                "skillingup": [
                    {
                        "id": "scale",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "forge",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    },
                    {
                        "id": "skill",
                        "morpheffect": "mutate",
                        "level": 1,
                        "additive": true
                    }
                ]
            },
            "slots": [
                {
                    "id": "a1",
                    "label": "Effort",
                    "actionid": "consider",
                    "essential": {
                        "ability": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x1",
                    "label": "Lesson",
                    "actionid": "consider",
                    "essential": {
                        "lesson": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x2",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    }
                },
                {
                    "id": "x3",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 2
                    }
                },
                {
                    "id": "x4",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 3
                    }
                },
                {
                    "id": "x5",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 4
                    }
                },
                {
                    "id": "x6",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 5
                    }
                },
                {
                    "id": "x7",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 6
                    }
                },
                {
                    "id": "x8",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 7
                    }
                },
                {
                    "id": "x9",
                    "label": "Memory",
                    "actionid": "consider",
                    "essential": {
                        "memory": 1
                    },
                    "required": {
                        "scale": 1,
                        "forge": 1
                    },
                    "ifaspectspresent": {
                        "skill": 8
                    }
                }
            ]
        }
    ]
}`;
const SKILLS_FULL = JSON.parse(skillsJSON);

class Skill {

};

var 

for ()


console.log(skills.elements);