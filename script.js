const stories = [
  {
    title: "Super Zene",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story1.jpg",
    episodes: [
      { name: "Veer Rahena", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%201.m4a" },
      { name: "Company", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%202.m4a" },
      { name: "Sunahra Kavach", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%203.m4a" },
      { name: "Doctor Khurana", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%204.m4a" },
      { name: "Titan Ki Khoj", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%205.m4a" },
      { name: "Kale Crystal Ki Shakti", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%206.m4a" },
      { name: "Sanki Aur Furtile Tidde", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%207.m4a" },
      { name: "Furtile Tiddon Ka Safaya", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%208.m4a" },
      { name: "Gangadhar Hi Shaktimaan Hai", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%209.m4a" },
      { name: "Grandmaster", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@b7aa0e7bfff9069cd549a0ba73afdcf291253bfa/Ep%20-%2010.m4a" },
      { name: "Sacred blood Alion", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x11.m4a" },
      { name: "Sacred Bolld Gear", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x12.m4a" },
      { name: "Sunset point", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x13.m4a" },
      { name: "dollar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x14.m4a" },
      { name: "dollar ki talash", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x15.m4a" },
      { name: "Naya mehaman", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x16.m4a" },
      { name: "Ansh ka khatma", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x17.m4a" },
      { name: "4 Crore", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x18.m4a" },
      { name: "Business partner", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x19.m4a" },
      { name: "Ghar wapasi", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x20.m4a" },
      { name: "Chamkile bichhoo", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x21.m4a" },
      { name: "Takshika gufa", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x22.m4a" },
      { name: "Awani se Mulaqat", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x23.m4a" },
      { name: "kaun hai woh?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x24.m4a" },
      { name: "6 crore", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x25.m4a" },
      { name: "EP 26", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x26.m4a" },
      { name: "EP 27", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x27.m4a" },
      { name: "EP 28", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x28.m4a" },
      { name: "EP 29", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x29.m4a" },
      { name: "EP 30", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x30.m4a" },
      { name: "EP 31", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x31.m4a" },
      { name: "EP 32", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x32.m4a" },
      { name: "EP 33", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x33.m4a" },
      { name: "EP 34", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x34.m4a" },
      { name: "EP 35", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x35.m4a" },
      { name: "EP 36", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x36.m4a" },
      { name: "EP 37", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x37.m4a" },
      { name: "EP 38", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x38.m4a" },
      { name: "EP 39", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x39.m4a" },
      { name: "EP 40", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x40.m4a" },
      { name: "EP 41", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x41.m4a" },
      { name: "EP 42", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x42.m4a" },
      { name: "EP 43", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x43.m4a" },
      { name: "EP 44", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x44.m4a" },
      { name: "EP 45", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x45.m4a" },
      { name: "EP 46", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x46.m4a" },
      { name: "EP 47", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x47.m4a" },
      { name: "EP 48", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x48.m4a" },
      { name: "EP 49", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x49.m4a" },
      { name: "EP 50", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x50.m4a" },
      { name: "EP 51", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S1@c1f681c0acd6426a2d47555417c316c431cd2637/1x51.m4a" },
      { name: "Raksha", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x52.m4a" },
{ name: "Pehchan", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x53.m4a" },
{ name: "Display", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x54.m4a" },
{ name: "Mera Banda", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x55.m4a" },
{ name: "Awani Ka Offer", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x56.m4a" },
{ name: "Plan", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x57.m4a" },
{ name: "Chacha Bhatija", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x58.m4a" },
{ name: "Chacha Ka Video", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x59.m4a" },
{ name: "Woh Kaun Hain?", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x60.m4a" },
{ name: "Viral Video", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x61.m4a" },
{ name: "Ek Tarfa Mohabbat", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x62.m4a" },
{ name: "Aasmaan Se Girey", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x63.m4a" },
{ name: "Khajoor Mein Atkey", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x64.m4a" },
{ name: "Purana Dost", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x65.m4a" },
{ name: "Practice Session", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x66.m4a" },
{ name: "Teen Darzan Teer", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x67.m4a" },
{ name: "Chaar Darzan Teer", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x68.m4a" },
{ name: "Jai Veeru Ki Jodi", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x69.m4a" },
{ name: "Z Steel Arrow", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x70.m4a" },
{ name: "Mission Sacred Blood Alien", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x71.m4a" },
{ name: "Team Selection", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x72.m4a" },
{ name: "Itni Badi Chhipkali", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x73.m4a" },
{ name: "Hidden Motive", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x74.m4a" },
{ name: "Saazish", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x75.m4a" },
{ name: "Sunehra Sher Aur Kala Gorilla", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x76.m4a" },
{ name: "Aakhiri Waar", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x77.m4a" },
{ name: "Sach Sach Batao!", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x78.m4a" },
{ name: "Udne Wali Devil’s Soul", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x79.m4a" },
{ name: "Tambe Ke Daant Wala Genda!", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x80.m4a" },
{ name: "Unexpected Guest", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x81.m4a" },
{ name: "Unexpected Gift", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x82.m4a" },
{ name: "Chidiya Ud!", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x83.m4a" },
{ name: "Ek Chhota Sa, Cute Puppy", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x84.m4a" },
{ name: "Thappad Se Dar Nahi Lagta Sah...", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x85.m4a" },
{ name: "Gehre Daldal Ki Kahaani", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x86.m4a" },
{ name: "Khanjar Aur Chakoo", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x87.m4a" },
{ name: "Khanjar vs Talwaar", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x88.m4a" },
{ name: "What a Surprise", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x89.m4a" },
{ name: "Yuvraj Sehgal", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x90.m4a" },
{ name: "Jor Ka Jhatka", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x91.m4a" },
{ name: "Nafrat Aur Jealousy", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x92.m4a" },
{ name: "Alien Attack", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x93.m4a" },
{ name: "The Shuras", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x94.m4a" },
{ name: "Breaking News", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x95.m4a" },
{ name: "Live Telecast", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x96.m4a" },
{ name: "Live Reaction", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x97.m4a" },
{ name: "Dollar Ki Maut?", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x98.m4a" },
{ name: "Viral Video Again!", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x99.m4a" },
{ name: "Kahaan Hai Dollar?", src: "https://cdn.jsdelivr.net/gh/mamta351835/S1@c6ae63abf11f3971c2831bc10b68fd3b34ef0aaa/1x100.m4a" },
    ]
  },
  {
    title: "Super Yoddha",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story2.jpg",
    episodes: [
      { name: "Ek Shart", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep1.m4a" },
      { name: "Jaduyi Angoothi", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep2.m4a" },
      { name: "Bazaar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep3.m4a" },
      { name: "Ek Naye Din Ki Shuruaat", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep4.m4a" },
      { name: "Ek Aur Chunauti", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep5.m4a" },
      { name: "Dhamaaka", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep6.m4a" },
      { name: "Kathin Prasikshan", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep7.m4a" },
      { name: "Neelami", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep8.m4a" },
      { name: "Toofan", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep9.m4a" },
      { name: "Naqabposh", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@e424a296f5d99e39aeade58847f4acd9fef49045/Ep10.m4a" },
      { name: "Tohfa", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x11.m4a" },
      { name: "Samay Ret Ki Tarah Hota Hai", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x12.m4a" },
      { name: "Mazaak", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x13.m4a" },
      { name: "Dhruv Ka Test", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x14.m4a" },
      { name: "Aaina Ateet Ka", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x15.m4a" },
      { name: "Zameen Se Aasmaan Tak", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x16.m4a" },
      { name: "Ab Baari Hai Dhruv Ke Test Ki", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x17.m4a" },
      { name: "Youth Ceremony", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x18.m4a" },
      { name: "Sunny Ka Challenge", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x19.m4a" },
      { name: "Ek Naya Challenge", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x20.m4a" },
      { name: "Sanvi Ka Badla", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x21.m4a" },
      { name: "Humein Jaldi Shaktiyaan Dhundhni Hongi", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x22.m4a" },
      { name: "Kya Hai Us Darwaze Ke Peeche?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x23.m4a" },
      { name: "Rok Sako To Rok Lo", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x24.m4a" },
      { name: "Karishmai Powder", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x25.m4a" },
      { name: "Rank 4 Ka Hakeem?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x26.m4a" },
      { name: "Nilaami Shuru Hone Vali Hai", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x27.m4a" },
      { name: "Kaun Lagaega Sabse Unchi Boli?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x28.m4a" },
      { name: "Ye Khaas Mehmaan Kaun Hai?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x29.m4a" },
      { name: "Aakhir Kab Milega Karishmai Powder", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S2@aa068b4fb7c3369bd29ca8f73f90e27bf5ebcb9d/2x30.m4a" },
      { name: "Vo Mukaam Kab Haasil Hoga?", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x31.m4a" },
      { name: "Tumhe Ira Kaisi Lagti Hai?", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x32.m4a" },
      { name: "Tumhein Mesodoria Chorna Hoga", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x33.m4a" },
      { name: "Ye Davaa Itni Sasti Kaise?", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x34.m4a" },
      { name: "Main Bhi Davaa Bana Sakta Hoon", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x35.m4a" },
      { name: "Aag Bahut Tez Hai!", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x36.m4a" },
      { name: "Shaurya Dal Ki Pareshani", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x37.m4a" },
      { name: "Hakeem Ka Ehsaan", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x38.m4a" },
      { name: "Ye Sab Bakwaas Hai Dhruv!", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x39.m4a" },
      { name: "Kisme Kitna Hai Dum", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x40.m4a" },
      { name: "Do Dal… Mil Rahe Hain", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x41.m4a" },
      { name: "Hakim Ka Pardafash", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x42.m4a" },
      { name: "Bazaar Mein Hungama", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x43.m4a" },
      { name: "Macky vs Dhruv", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x44.m4a" },
      { name: "Bacche To Bacche, Baap Re Baap", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x45.m4a" },
      { name: "Adhish Ki Zid", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x46.m4a" },
      { name: "Adhish Ka Khatma", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x47.m4a" },
      { name: "Ira Ki Kamzori", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x48.m4a" },
      { name: "Jal Gaye Amish", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x49.m4a" },
      { name: "Aamish Ka Khatma", src: "https://cdn.jsdelivr.net/gh/sou57g/sy@5a3c89fa898be5ce106e9a4429a0b66529f8a8b9/2x50.m4a" },
      { name: "Raksh Academy Ka Admission", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x51.m4a" },
      { name: "Naam Hai Lobo", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x52.m4a" },
      { name: "Muqabla Zeeshan Se", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x53.m4a" },
      { name: "Ye Ladka Sachmuch Kamaal Hai", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x54.m4a" },
      { name: "Dhruv Ki Takat Ki Sacchai", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x55.m4a" },
      { name: "Madam Aur Dhruv Ki Bahas", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x56.m4a" },
      { name: "Madam Zubaida Se Lagi Shart", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x57.m4a" },
      { name: "Shaurya Dal Ke Mehmaan", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x58.m4a" },
      { name: "Mesodoria Chorne Ki Taiyari", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x59.m4a" },
      { name: "Bye Bye Mesodoria", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x60.m4a" },
      { name: "Zayaan Ki Pareshani", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x61.m4a" },
      { name: "Sabr Ka Imtehaan", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x62.m4a" },
      { name: "Is Gulaab Mein Aisa Kya Hai?", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x63.m4a" },
      { name: "Sher Ki Khaal Nikaalne Chale!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x64.m4a" },
      { name: "Tilismi Jaanvar", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x65.m4a" },
      { name: "Peeche Se Hamla", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x66.m4a" },
      { name: "Khatarnak Gufa", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x67.m4a" },
      { name: "Pathrila Saanp! Ab Kya Kiya Jaye?", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x68.m4a" },
      { name: "Poison Master Ka Rahasya", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x69.m4a" },
      { name: "Arshaan Ki Chaal", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x70.m4a" },
      { name: "Bhaag Dhruv Bhaag!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x71.m4a" },
      { name: "Ek Aur Chunauti… Dharashayi!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x72.m4a" },
      { name: "Dhruv Ka Anokha Safar", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x73.m4a" },
      { name: "Training Ki Nayi Jagah", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x74.m4a" },
      { name: "Ye Roshni Koi Mamuli Roshni Nahi", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x75.m4a" },
      { name: "Dhruv Ki Training: Round 2", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x76.m4a" },
      { name: "Maine Kar Dikhaya Acharya!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x77.m4a" },
      { name: "Zakhmi Gorilla", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x78.m4a" },
      { name: "Bhediyon Ki Dastak", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x79.m4a" },
      { name: "Kya Dhruv Ye Takneek Seekh Payega?", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x80.m4a" },
      { name: "Ye Dava Nahin Lava Hai", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x81.m4a" },
      { name: "Bhediya Toli Ki Musibat", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x82.m4a" },
      { name: "Muqabla Takkar Ka", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x83.m4a" },
      { name: "Badle Ki Shuruaat", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x84.m4a" },
      { name: "Training Mein Rukawat", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x85.m4a" },
      { name: "Dhruv Ko Is Jungle Se Bachao", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x86.m4a" },
      { name: "Aage Bhediya, Peeche Khaai", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x87.m4a" },
      { name: "Musa Ka Khauff", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x88.m4a" },
      { name: "Dhruv Aasmaan Mein", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x89.m4a" },
      { name: "Ek Takatavar Yoddha Kise Kehte…", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x90.m4a" },
      { name: "Ek Bada Muqabla… Kaun Jeete…", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x91.m4a" },
      { name: "Ye Sher Nahin Jhukega", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x92.m4a" },
      { name: "Vo Ladki Mujhe Hi Jaan Se Mare…", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x93.m4a" },
      { name: "Galti Se… Mistake", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x94.m4a" },
      { name: "Badan Ki Garmi", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x95.m4a" },
      { name: "Jaanleva Garmahat", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x96.m4a" },
      { name: "Honi Ko Kaun Taal Sakta Hai", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x97.m4a" },
      { name: "Khoonkhar Sher Ki Gufa!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x98.m4a" },
      { name: "Purple Crystal Haasil Karna Hain!", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x99.m4a" },
      { name: "Ye Dawaa Kab Kaam Karegi?", src: "https://cdn.jsdelivr.net/gh/sou57g/S1@08f6e3ad843cbf88e2b7608834c6d3cb0a701bcc/1x100.m4a" },
    ]
  },
  {
    title: "Millionaire",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story3.jpg",
    episodes: [{ name: "Unlucky Lucky", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x1.m4a" },
{ name: "Lucky Ka Bank Account", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x2.m4a" },
{ name: "Kismat Ka Pitara", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x3.m4a" },
{ name: "Jhootha Pyaar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x4.m4a" },
{ name: "Hostel Reunion", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x5.m4a" },
{ name: "Koyal par Mandraya Baaz", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x6.m4a" },
{ name: "Paiso Ka Ghamand", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x7.m4a" },
{ name: "Lion se Panga", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x8.m4a" },
{ name: "Koyal ka Pinjara", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x9.m4a" },
{ name: "Nayi Ummeed", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x10.m4a" },
{ name: "Lucky ka Sabar", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x11.m4a" },
{ name: "Koyal ki Uljhan", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x12.m4a" },
{ name: "Unknown Number", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x13.m4a" },
{ name: "Param Sundari", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x14.m4a" },
{ name: "Down to Earth", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x15.m4a" },
{ name: "Lucky Aur Raghini", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x16.m4a" },
{ name: "Asli Hero Kaun", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x17.m4a" },
{ name: "Hospital Main Party", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x18.m4a" },
{ name: "Lucky ka Promise", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x19.m4a" },
{ name: "Hotel Sun & Moon", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x20.m4a" },
{ name: "Reserved Table", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S3@031f1f0ab47057cb74b99c58c113d5c9cd3778cb/3x21.m4a" },
 ]
  },
  {
    title: "The Warrior",
    thumbnail: "https://AlexEmperor998.github.io/Emperor_FM/story4.jpg",
    episodes: [{ name: "आकाश विष मोती के लिए जंग", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x1.m4a" },
{ name: "अंत या आरम्भ?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x2.m4a" },
{ name: "सुंदर महिलाएं मुसीबतों की जड़", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x3.m4a" },
{ name: "शादी में रुकावट ?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x4.m4a" },
{ name: "शादी का जुलूस", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x5.m4a" },
{ name: "अजगर कब जागेगा?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x6.m4a" },
{ name: "मिस्टिक वेंस बचपन से खराब नहीं थी!", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x7.m4a" },
{ name: "तुमने मुझसे शादी क्यों की?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x8.m4a" },
{ name: "शादी की पहली रात", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x9.m4a" },
{ name: "वाइफी क्या तुम जग रही हो?", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x10.m4a" },
{ name: "मिली स्टार कंसलिंग ग्रास", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x11.m4a" },
{ name: "लाल बालों वाली रहस्यमयी लड़की", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x12.m4a" },
{ name: "बचपन की यादें", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x13.m4a" },
{ name: "आर्या की जलन", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x14.m4a" },
{ name: "चूरू संप्रदाय से आये पत्र से हड़कंप", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x15.m4a" },
{ name: "आरव का गुस्सा", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x16.m4a" },
{ name: "आर्या ने सिखाया आरव को सबक", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x17.m4a" },
{ name: "मैं एक चमत्कारी डॉक्टर हूँ", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x18.m4a" },
{ name: "एक्यूपंक्चर तकनीक", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x19.m4a" },
{ name: "गहन शक्ति के लिए कपड़े हटाने होंगे", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x20.m4a" },
{ name: "आरव को पता चली अथर्व की सच्चाई", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x21.m4a" },
{ name: "आर्या और अथर्व ने किया बेड शेयर", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x22.m4a" },
{ name: "चुरू संप्रदाय से आये मेहमान!", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x23.m4a" },
{ name: "कालवीर की नजर आर्या पर", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x24.m4a" },
{ name: "सारिका का अथर्व के लिए जानलेवा कदम", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x25.m4a" },
{ name: "चोरी हुआ गहन शक्ति ओपनिंग पाउडर", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x26.m4a" },
{ name: "सारिका पर लगा चोरी का आरोप", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x27.m4a" },
{ name: "सारिका के बचाव में खड़ा हुआ अथर्व", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x28.m4a" },
{ name: "योजना पड़ी उल्टी", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x29.m4a" },
{ name: "अथर्व का सच आया सबके सामने!", src: "https://cdn.jsdelivr.net/gh/alexkumar4/S4@901c662084983b9f84cd74c64bec08d03c0fadf6/4x30.m4a" },
{ name: "अर्थव को चुरूस कबील छोडना होगा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x31.m4a" },
{ name: "मेरी शिष्या को धमकाने की गुस्साखी!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x32.m4a" },
{ name: "कालवीर की घिनौनी इच्छा पर परी ने पानी...", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x33.m4a" },
{ name: "अर्थव के बदले की शुरुआत", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x34.m4a" },
{ name: "आरव की भयानक दुरदशा किसने की?", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x35.m4a" },
{ name: "अर्थव का सनसनीखेज बर्थ सीक्रेट", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x36.m4a" },
{ name: "मेरा नाम अर्थव देव होगा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x37.m4a" },
{ name: "अर्थव के इलाज ने बदली आर्या की ज़िंदगी", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x38.m4a" },
{ name: "ज़ुबाती आर्या", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x39.m4a" },
{ name: "लाल बालों वाली रहस्यमयी लड़की ने बचाया!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x40.m4a" },
{ name: "पॉचे नंबर का स्वर्गीय खजाना", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x41.m4a" },
{ name: "ईश्वर की शक्ति के साथ मिस्टिक वैंस का...", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x42.m4a" },
{ name: "जैस्मिन की तीन शर्तें", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x43.m4a" },
{ name: "ईविल गॉड का अमर रक्त अर्थव को?", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x44.m4a" },
{ name: "अर्थव के रूप से सदमे में जैस्मिन", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x45.m4a" },
{ name: "ईविल गॉड की सात गहन कलाएं", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x46.m4a" },
{ name: "मैं खुद को मरने नहीं दूँगा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x47.m4a" },
{ name: "ईविल गॉड के पांच गुप्त स्थान", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x48.m4a" },
{ name: "फ्लेम ड्रैगन की गुफा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x49.m4a" },
{ name: "अहंकार - लालच की कीमत चुकानी होगी", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x50.m4a" },
{ name: "फ्लेम ड्रैगन की गुफा के अंदर पहुंचा अर्थव", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x51.m4a" },
{ name: "जैस्मिन की जान खतरे में", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x52.m4a" },
{ name: "जैस्मिन में तुम्हें मरने नहीं दूँगा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x53.m4a" },
{ name: "ईविल गॉड का अग्नि बीज", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x54.m4a" },
{ name: "ईश्वर विरोधी शक्ति", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x55.m4a" },
{ name: "स्टार गॉड की शेडो", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x56.m4a" },
{ name: "अर्थव पहुंचा न्यू मून सिटी", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x57.m4a" },
{ name: "स्मार्ट ग्रहण कोर मेरे लिए बेकार!!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x58.m4a" },
{ name: "अर्थव की जानलेवा आभा का राज", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x59.m4a" },
{ name: "अतिव्याचारी सम्राट की दिव्य नसे", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x60.m4a" },
{ name: "अपनी मिस्टिक वैंस के बारे में मत बताना", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x61.m4a" },
{ name: "मेरे द्वारा दूसरी पत्नी लाने पर आपत्ति नहीं", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x62.m4a" },
{ name: "अब से तुम मुझे जीजा जी नहीं कहोगे", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x63.m4a" },
{ name: "सातो समुदायों का जमावड़ा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x64.m4a" },
{ name: "पहला मुकाबला", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x65.m4a" },
{ name: "अर्थव vs समीर", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x66.m4a" },
{ name: "पहले मुकाबले का परिणाम", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x67.m4a" },
{ name: "अर्थव ने दी सातो समुदायों को चुनौती!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x68.m4a" },
{ name: "तीसरे प्रतिद्वंदी से घातक युद्ध?", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x69.m4a" },
{ name: "क्या कोई है? जो मुझे चुनौती देगा!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x70.m4a" },
{ name: "टक्कर का मुकाबला", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x71.m4a" },
{ name: "\"मैं हार स्वीकार करता हूँ\"", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x72.m4a" },
{ name: "\"मैं तुम्हें नशा कर दूँगा\"", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x73.m4a" },
{ name: "ईविल गॉड की पहली चाल", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x74.m4a" },
{ name: "अर्थव V/s लषित शुरू", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x75.m4a" },
{ name: "जो पंगा लेगा वो मरेगा या अपंग होगा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x76.m4a" },
{ name: "अर्थव की योजना से कमलदीप हैरान", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x77.m4a" },
{ name: "मैं प्रोफाउंड पॅल्स को धूल में बदल दूँगा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x78.m4a" },
{ name: "प्रलयकारी आपदा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x79.m4a" },
{ name: "कहीं मुझसे प्यार तो नहीं हो गया?", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4@dc5fe19ed3a5b92fb67269ab6a675cce1aa70bf5/4x80.m4a" },
{ name: "स्मार्ट गहन कोर बेचना है !!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x81.m4a" },
{ name: "स्मार्ट गहन कोर चुरु साम्राज्य को बचा दो!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x82.m4a" },
{ name: "अर्थ पहुंचा चुरु समुदाय की शाखा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x83.m4a" },
{ name: "अर्थ का चिकित्सा कौशल!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x84.m4a" },
{ name: "कृपया मेरे बेटे को बचा लीजिए", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x85.m4a" },
{ name: "भय बदलने की कला!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x86.m4a" },
{ name: "अर्थ की तारांक को फटकार", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x87.m4a" },
{ name: "द्रैगन का गहन कोर चाहिए", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x88.m4a" },
{ name: "राजकोष में डकैती", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x89.m4a" },
{ name: "वापस लौटा तारांक", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x90.m4a" },
{ name: "तारांक को लगा सदमा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x91.m4a" },
{ name: "छोटे कमिने आज तू जीवित नहीं बचेगा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x92.m4a" },
{ name: "अमृता पहुंची मदद के लिए", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x93.m4a" },
{ name: "अर्थ की जिंदगी और मौत का संघर्ष", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x94.m4a" },
{ name: "अमृता के दुखद आँसू", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x95.m4a" },
{ name: "तीन अश्लील दरिंदे", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x96.m4a" },
{ name: "\"केवल आप ही हमें बचा सकती हैं\"", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x97.m4a" },
{ name: "फीनिक्स के अवशेष", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x98.m4a" },
{ name: "\"वह सुंदर लड़की हमें सौंप दो\"", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x99.m4a" },
{ name: "अमृता vs कालिया", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x100.m4a" },
{ name: "फीनिक्स की पवित्र भूमि का अपमान", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x101.m4a" },
{ name: "फीनिक्स वंश का रहस्य", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x102.m4a" },
{ name: "फीनिक्स की दिव्य आत्मा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x103.m4a" },
{ name: "परीक्षा के पहले चरण में सफलता", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x104.m4a" },
{ name: "अर्थ पहुंचा पिछली जिंदगी में", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x105.m4a" },
{ name: "मैं असफल हो गया!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x106.m4a" },
{ name: "फीनिक्स की रक्तरेखा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x107.m4a" },
{ name: "दिव्य फीनिक्स गोली", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x108.m4a" },
{ name: "अमृता निकली गुफा से बाहर", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x109.m4a" },
{ name: "कालिया के हाथों में बेचारी अमृता!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x110.m4a" },
{ name: "तीनों उपकप्तानों की मौत", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x111.m4a" },
{ name: "\"मुझे बरछी दो..मैं मरना नहीं चाहता\"", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x112.m4a" },
{ name: "फीनिक्स का 'विनाशी ' दानव कमल", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x113.m4a" },
{ name: "अमृता को मिला सबक", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x114.m4a" },
{ name: "क्या हम एक ही कमरे में रुक सकते है?", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x115.m4a" },
{ name: "अमृता और अर्थ का एक ही बिस्तर पर ...", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x116.m4a" },
{ name: "इंपीरियल सिटी पहुंचे अर्थ - अमृता", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x117.m4a" },
{ name: "तुझे अमृता को कलंकीत किया है!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x118.m4a" },
{ name: "इनर पैलेस के शिखर बहुत शक्तिशाली", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x119.m4a" },
{ name: "अमृता के शाही परिवार का सत्ता संघर्ष", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x120.m4a" },
{ name: "तुम मेरी बराबरी नहीं कर सकते!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x121.m4a" },
{ name: "जानान का बदला", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x122.m4a" },
{ name: "मुरोंग की खतरनाक चाल!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x123.m4a" },
{ name: "तुम्हें प्रोफाउंड पैलेस छोड़ना होगा", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x124.m4a" },
{ name: "हैरानी, आश्चर्य, सदमा!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x125.m4a" },
{ name: "तीन महीने का समय!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x126.m4a" },
{ name: "तीन शर्तें!!!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x127.m4a" },
{ name: "मैं लूंगा अधिपति की विशाल तलवार!", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x128.m4a" },
{ name: "अर्थ का उद्देश्य", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x129.m4a" },
{ name: "रौद्र का महान मार्ग", src: "https://cdn.jsdelivr.net/gh/galaxykumar63-alt/S4a@0b7a1c3f8b3b81b9037acdf3235d44155f91ddaf/4x130.m4a" },
   ]
  },
  {
    title: "Story 5",
    thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
    title: "Story 6",
    thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
    episodes: [{ name: "Coming Soon", src: "" }]
  },
  {
  title: "Story 7",
  thumbnail: "https://static.wixstatic.com/media/daf650_100844930ba14a5f8a901283413a897f~mv2.gif",
  episodes: [{ name: "Coming Soon", src: "" }]
},
];

const home = document.getElementById("home");
const playerSection = document.getElementById("playerSection");
const player = document.getElementById("audioPlayer");
const storyTitleDisplay = document.getElementById("storyTitleDisplay");
const episodeNameDisplay = document.getElementById("episodeNameDisplay");
const playerThumbnail = document.getElementById("playerThumbnail");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalDurationEl = document.getElementById("totalDuration");
const playPauseBtn = document.getElementById("playPauseBtn");
const episodeListEl = document.getElementById("episodeList");
const speedSelect = document.getElementById("speedSelect");

let currentStoryIndex = null;
let currentEpisodeIndex = 0;

function loadHome() {
  home.innerHTML = '<div class="story-grid"></div>';
  const grid = home.querySelector(".story-grid");

  stories.forEach((story, index) => {

    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <img src="${story.thumbnail}" class="card-thumb">
      <h3>${story.title}</h3>
    `;
    card.onclick = () => openStory(index);
    grid.appendChild(card);
    
    if (index === 3) {
      const resumeCard = document.createElement("div");
      resumeCard.className = "story-card resume-card";
      resumeCard.innerHTML = `
        <div class="resume-icon">▶</div>
        <h3>Resume Last Played</h3>
      `;
      resumeCard.onclick = resumeLast;
      grid.appendChild(resumeCard);
    }


    // ===== ✅ Story 7 ke niche Ad =====
    if (index === 6) {

      const adContainer = document.createElement("div");
      adContainer.style.textAlign = "center";
      adContainer.style.margin = "15px 0";

      // atOptions script
      const script1 = document.createElement("script");
      script1.innerHTML = `
        atOptions = {
          'key' : '52a6621e17223b5ce0bb93e8244fd49f',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      const script2 = document.createElement("script");
      script2.src = "https://www.highperformanceformat.com/52a6621e17223b5ce0bb93e8244fd49f/invoke.js";

      adContainer.appendChild(script1);
      adContainer.appendChild(script2);

      grid.appendChild(adContainer);
    }

  });
}

function openStory(index) {
  currentStoryIndex = index;
  currentEpisodeIndex = 0;
  
  const savedEpisode = localStorage.getItem(`last_ep_${index}`);
  if (savedEpisode !== null) {
    currentEpisodeIndex = parseInt(savedEpisode);
  }
  
  renderEpisodeList();
  playEpisode();
}

function playEpisode() {
  const story = stories[currentStoryIndex];
  const episode = story.episodes[currentEpisodeIndex];
  
  if (!episode || !episode.src) return;

  home.classList.add("hidden");
  playerSection.classList.remove("hidden");
  
  storyTitleDisplay.innerText = story.title;
  episodeNameDisplay.innerText = episode.name;
  playerThumbnail.src = story.thumbnail;
  player.src = episode.src;
  
  localStorage.setItem(`last_ep_${currentStoryIndex}`, currentEpisodeIndex);
  
  const savedTime = localStorage.getItem(`progress_${currentStoryIndex}_${currentEpisodeIndex}`);
  if (savedTime) {
    player.currentTime = parseFloat(savedTime);
  }
  
  player.play();
  playPauseBtn.innerText = "⏸";
  updateActiveEpisode();
}

function togglePlay() {
  if (player.paused) {
    player.play();
    playPauseBtn.innerText = "⏸";
  } else {
    player.pause();
    playPauseBtn.innerText = "▶";
  }
}

function changeTime(seconds) {
  player.currentTime += seconds;
}

function changeSpeed(speed) {
  player.playbackRate = parseFloat(speed);
}

function nextEpisode() {
  if (currentEpisodeIndex < stories[currentStoryIndex].episodes.length - 1) {
    currentEpisodeIndex++;
    playEpisode();
  }
}

function goHome() {
  player.pause();
  playerSection.classList.add("hidden");
  home.classList.remove("hidden");
}

function renderEpisodeList() {
  episodeListEl.innerHTML = "";
  const story = stories[currentStoryIndex];
  story.episodes.forEach((ep, idx) => {
    const li = document.createElement("li");
    li.className = "episode-item";
    li.innerHTML = `
      <span class="ep-num">${idx + 1}.</span>
      <span class="ep-name">${ep.name}</span>
      <button class="ep-play-btn">▶</button>
    `;
    li.onclick = () => {
      currentEpisodeIndex = idx;
      playEpisode();
    };
    episodeListEl.appendChild(li);
  });
}

function updateActiveEpisode() {
  const items = episodeListEl.querySelectorAll(".episode-item");
  items.forEach((item, idx) => {
    if (idx === currentEpisodeIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

player.ontimeupdate = () => {
  const current = player.currentTime;
  const duration = player.duration;
  if (!isNaN(duration)) {
    progressBar.max = duration;
    progressBar.value = current;
    currentTimeEl.innerText = formatTime(current);
    totalDurationEl.innerText = formatTime(duration);
    
    localStorage.setItem(`progress_${currentStoryIndex}_${currentEpisodeIndex}`, current);
    localStorage.setItem("last_story_index", currentStoryIndex);
  }
};

progressBar.oninput = () => {
  player.currentTime = progressBar.value;
};

player.onended = () => {
  nextEpisode();
};

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function resumeLast() {
  const lastStory = localStorage.getItem("last_story_index");
  if (lastStory !== null) {
    currentStoryIndex = parseInt(lastStory);
    const lastEp = localStorage.getItem(`last_ep_${currentStoryIndex}`);
    currentEpisodeIndex = lastEp !== null ? parseInt(lastEp) : 0;
    renderEpisodeList();
    playEpisode();
  } else {
    alert("No last played data found.");
  }
}

loadHome();
