const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    },
    BRUTUS: {
        title: "Senator",
        region: "Rome",
        dietaryPreference: "Vegan",
        pastGifts: ["Silver Dagger", "Marble Bust"]
    }
  };
  
guests.CICERO.pastGifts.push("Golden Lyre");

const antonyRegion = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

// Question 1: The region will be Egypt because changes made from one variable is reflected in the other