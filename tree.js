class Skill {
    //constructor
    constructor(jsonSkill) {
        this.id = jsonSkill.id;
        this.label = jsonSkill.Label;
        this.desc = jsonSkill.Desc;
        this.aspects = jsonSkill.aspects;
    }
}


const SKILLS_URL = 'https://raw.githubusercontent.com/TheHeidal/TreeOfWisdoms/main/skills.json';
const SKILLS_FULL = fetch(SKILLS_URL)
    .then(response => response.json())
    .then(jsonData => {
        // console.log(jsonData.elements);
        var skills = new Object();
        for (var jsonSkill of jsonData.elements) {
            console.log(jsonSkill);
            skills[jsonSkill.id] = new Skill(jsonSkill);
        }
        console.log(skills);
    })
    .catch(err => console.error('Error fetching JSON:', err));