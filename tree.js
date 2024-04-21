const imgURLPrefix = 'https://uadaf.theevilroot.xyz/rowenarium/static/bhimages';

class Skill {
    //constructor
    constructor(jsonSkill) {
        this.id = jsonSkill.id;
        this.label = jsonSkill.Label;
        this.desc = jsonSkill.Desc;
        this.aspects = jsonSkill.aspects; //Objec
        this.arts = Object.keys(this.aspects).filter(aspect => aspect.startsWith('w.'))
    }

    makeCard() {
        console.log('making %s', this.id)
        // Card Div
        const card = document.createElement("div");
        card.className = "skill card";
        card.id = this.id;
        document.getElementById("skills").append(card);
        // Top Div
        const images = document.createElement("div");
        card.append(images);
        // Arts symbols Div
        const arts = document.createElement("div"); arts.className = "arts";
        images.append(arts);

        // Arts Imgs
        console.assert((this.arts.length === 2), 'wrong number of arts!', this);
        function makeArtsImg(aspectStr) {
            const art = document.createElement("img");
            art.attributes['src'] = `${imgURLPrefix}/aspects/${aspectStr}.png`;
            art.attributes['alt'] = aspectStr.slice(2); //chop off 'w.'
            return art;
        };
        const art0 = makeArtsImg(this.arts[0]);
        const art1 = makeArtsImg(this.arts[1]);
        arts.append(art0, art1);
        //
        const skillImg = document.createElement("img");
        skillImg.attributes["src"] = `${imgURLPrefix}/elements/${this.id}.png`;
    }

}

function downloadImages(imageUrls) {
    // Iterate through the array of image URLs
    imageUrls.forEach(function (url) {
        // Fetch the image
        fetch(url)
            .then(response => response.blob()) // Convert response to Blob
            .then(blob => {
                // Create a URL object
                const imgUrl = URL.createObjectURL(blob);

                // Create an anchor element
                const link = document.createElement('a');
                link.href = imgUrl;

                // Set the download attribute to force download
                link.setAttribute('download', '');

                // Simulate a click to trigger download
                document.body.appendChild(link);
                link.click();

                // Clean up: remove the URL object and anchor element
                URL.revokeObjectURL(imgUrl);
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading image:', error);
            });
    });
}

function generateSkills() {
    const SKILLS_URL = 'https://raw.githubusercontent.com/TheHeidal/TreeOfWisdoms/main/skills.json';
    const SKILLS_FULL = fetch(SKILLS_URL)
        // de-JSON
        .then(response => response.json())
        // create map of skills
        .then(jsonData => {
            // console.log(jsonData.elements);
            var skills = new Map();
            for (var jsonSkill of jsonData.elements) {
                skills[jsonSkill.id] = new Skill(jsonSkill);
                skills[jsonSkill.id].makeCard();
            }
            return skills;
        })
        // .then(skills => {
        //     var ids = Object.keys(skills);
        //     // console.log(ids);
        //     var urlStrings = ids.map(skill => `${imgURLPrefix}/elements/${skill}.png`);
        //     // console.log(urlStrings);
        //     var realURLS = urlStrings.map(url => new URL(url));
        //     console.log(realURLS);
        // })
        // .then(urls => downloadImages(urls))
        .catch(err => console.error('Error fetching JSON:', err));
    return SKILLS_FULL;
};

document.body.onload = generateSkills();


// downloadImages(imageUrls);
