import { useState, useEffect, useRef } from "react";
import "./App.css";

const MW = {
  MW1: {
    name: "Turmeric Lemon Water",
    emoji: "🍋",
    g1: "#F9A825",
    g2: "#E65100",
    time: "5 min",
    cal: 20,
    benefit: "Liver flush + Vitamin C boost",
    note: "Drink 15 min before breakfast on empty stomach",
    ings: [
      ["Warm water", "300ml"],
      ["Lemon juice", "½ lemon"],
      ["Turmeric", "¼ tsp"],
      ["Raw honey", "½ tsp"],
      ["Black pepper — activates turmeric 2000%!", "Tiny pinch"],
    ],
    steps: [
      "Warm 300ml water to comfortable drinking temp — NOT boiling",
      "Squeeze half a lemon in",
      "Add turmeric + tiny pinch black pepper (this is the magic combo!)",
      "Add honey last. Stir gently",
      "Drink slowly on empty stomach. Wait 15 min before breakfast",
    ],
  },
  MW2: {
    name: "Methi Soak Water",
    emoji: "🌿",
    g1: "#43A047",
    g2: "#1B5E20",
    time: "Overnight",
    cal: 5,
    benefit: "Reduces LDL cholesterol by 25%",
    note: "SET UP TONIGHT for tomorrow morning!",
    ings: [
      ["Methi (fenugreek) seeds", "1 tsp"],
      ["Water (in a glass)", "300ml"],
    ],
    steps: [
      "TONIGHT: Add methi seeds to a glass of water. Cover with a small plate",
      "Leave on kitchen counter overnight — no fridge needed!",
      "TOMORROW MORNING: Drink the water on empty stomach",
      "Optional: chew the softened seeds for extra benefit!",
      "Rinse glass and set up again for next night",
    ],
  },
  MW3: {
    name: "Jeera Water",
    emoji: "✨",
    g1: "#FFB300",
    g2: "#E65100",
    time: "10 min",
    cal: 5,
    benefit: "Boosts digestion + speeds metabolism",
    note: "Must boil the seeds — don't just soak",
    ings: [
      ["Cumin (jeera) seeds", "1 tsp"],
      ["Water", "300ml"],
    ],
    steps: [
      "Add jeera seeds and water to a small pot",
      "Boil on medium flame for 5 full minutes",
      "Water turns beautiful golden-yellow when ready",
      "Strain into your cup",
      "Let cool slightly. Drink warm, not hot",
    ],
  },
  MW4: {
    name: "Amla Ginger Drink",
    emoji: "💚",
    g1: "#7CB342",
    g2: "#2E7D32",
    time: "3 min",
    cal: 15,
    benefit: "Highest Vitamin C, directly reverses liver fat",
    note: "Drink IMMEDIATELY — Vitamin C is lost within minutes!",
    ings: [
      ["Amla juice OR amla powder", "1 tbsp / 1 tsp"],
      ["Fresh ginger, grated", "½ tsp"],
      ["Water", "150ml"],
      ["Black salt (optional)", "Tiny pinch"],
    ],
    steps: [
      "Grate fresh ginger into a small glass",
      "Add amla juice or powder",
      "Add water + black salt",
      "Stir well",
      "Drink IMMEDIATELY — amla loses Vitamin C very quickly!",
    ],
  },
  MW5: {
    name: "Tulsi Green Tea",
    emoji: "🍵",
    g1: "#00897B",
    g2: "#004D40",
    time: "5 min",
    cal: 5,
    benefit: "Burns liver fat — EGCG is research-backed magic",
    note: "80°C water ONLY — boiling water destroys all benefits!",
    ings: [
      ["Green tea bag (or 1 tsp loose)", "1"],
      ["Fresh tulsi leaves", "3–4 leaves"],
      ["Ginger, grated", "½ tsp"],
      ["Hot water — 80°C NOT boiling", "250ml"],
    ],
    steps: [
      "Boil water, then let it cool for 2 full minutes — green tea needs 80°C",
      "Place tea bag, tulsi, and ginger in your cup",
      "Pour cooled water over them",
      "Steep exactly 3–4 minutes. Use a timer!",
      "Remove tea bag. Drink without milk or sugar",
    ],
  },
};

const MEALS = {
  B1: {
    n: "Moong Dal Cheela",
    e: "🫓",
    g1: "#FFA726",
    g2: "#E65100",
    c: 200, p: 12, f: 5, t: "20 min", d: "Easy", s: "low", type: "b",
    tags: ["High Protein", "Liver Friendly", "Heart Healthy"],
    sn: "Makes 2 cheelas. Serve HOT — they lose crispiness quickly!",
    i: [
      ["Yellow moong dal (soak 4–6 hrs)", "½ cup"],
      ["Green chili, finely chopped", "1 small"],
      ["Fresh ginger, grated", "1 tsp"],
      ["Onion, finely chopped", "2 tbsp"],
      ["Fresh coriander", "2 tbsp"],
      ["Turmeric + cumin seeds", "¼ tsp each"],
      ["Salt", "To taste"],
      ["Oil or ghee", "½ tsp"],
    ],
    st: [
      "Soak moong dal overnight or 4–6 hrs. Drain",
      "Grind dal with VERY little water — batter must be thick, not runny!",
      "Mix in all spices, onion, chili, coriander",
      "Heat non-stick tawa medium. Wipe with oiled paper",
      "Pour ladle of batter, spread thin like a dosa",
      "Cook 2–3 min until edges turn golden and lift easily",
      "Flip carefully. Cook 2 more min. Serve with green chutney",
    ],
  },
  B2: {
    n: "Methi Thepla + Curd",
    e: "💚",
    g1: "#43A047",
    g2: "#1B5E20",
    c: 265, p: 10, f: 5, t: "20 min", d: "Easy", s: "low-medium", type: "b",
    tags: ["Traditional", "Cholesterol Reducer", "Classic"],
    sn: "Makes 2 thin theplas. Methi in the dough = same benefit as methi water!",
    i: [
      ["Whole wheat flour (chakki atta)", "4 tbsp (40g)"],
      ["Besan (gram flour)", "1 tbsp"],
      ["Fresh methi leaves, finely chopped", "½ cup packed"],
      ["Curd for binding", "2 tbsp"],
      ["Turmeric + chili + ajwain", "¼ tsp each"],
      ["Ginger-garlic paste", "½ tsp"],
      ["Salt", "To taste"],
      ["Oil", "½ tsp"],
      ["Plain curd to serve", "½ cup"],
    ],
    st: [
      "Mix wheat flour, besan, methi leaves and all spices",
      "Add 2 tbsp curd — this binds the dough (usually no water needed!)",
      "Knead into soft dough. Add drops of water only if too dry",
      "Divide into 2 balls. Roll each THIN — 3mm max",
      "Cook on medium tawa, pressing gently with a cloth",
      "Flip when golden bubbles appear. Light smear of oil on top",
      "Serve warm with cold plain curd",
    ],
  },
  B3: {
    n: "Mix Veg Paratha + Curd",
    e: "🫓",
    g1: "#EF6C00",
    g2: "#B71C1C",
    c: 275, p: 8, f: 5, t: "25 min", d: "Medium", s: "low-medium", type: "b",
    tags: ["Classic Indian", "Filling", "Kid-Friendly"],
    sn: "1 thin paratha. Thinner = less calories + more crispy!",
    i: [
      ["Whole wheat flour", "4 tbsp (40g)"],
      ["Carrot, finely grated (SQUEEZE OUT water!)", "3 tbsp"],
      ["Onion, finely chopped", "2 tbsp"],
      ["Spinach, finely chopped", "2 tbsp"],
      ["Green chili + ginger", "1 small + ½ tsp"],
      ["Ajwain + cumin + turmeric", "¼ tsp each"],
      ["Salt", "To taste"],
      ["Ghee", "½ tsp"],
      ["Plain curd to serve", "½ cup"],
    ],
    st: [
      "Knead soft wheat dough. Rest 10 min",
      "Mix filling — SQUEEZE grated carrot dry before adding!",
      "Roll dough flat, add filling in center, fold like envelope",
      "Gently roll thin again — thinner is always better",
      "Cook on hot tawa, pressing edges. Flip when golden spots appear",
      "Spread ghee on surface",
      "Serve with cold curd + mint chutney",
    ],
  },
  B4: {
    n: "Besan Palak Chilla",
    e: "💚",
    g1: "#00897B",
    g2: "#1B5E20",
    c: 165, p: 9, f: 4, t: "15 min", d: "Easy", s: "low", type: "b",
    tags: ["Highest Iron", "Low Calorie", "Liver Detox"],
    sn: "Makes 2 chillas. Eat immediately — they lose crispiness fast!",
    i: [
      ["Besan (gram flour)", "4 tbsp (40g)"],
      ["Spinach, very finely chopped", "¼ cup packed"],
      ["Onion + tomato, finely chopped", "2 tbsp + 1 tbsp"],
      ["Turmeric + ajwain + chili", "¼ tsp each"],
      ["Ginger + salt", "½ tsp + to taste"],
      ["Water", "~5 tbsp (thick batter)"],
      ["Oil", "½ tsp"],
    ],
    st: [
      "Mix besan + all dry spices in a bowl",
      "Add water SLOWLY while stirring — batter must be thick, like dahi. No lumps!",
      "Fold in spinach, onion, and tomato",
      "Heat non-stick tawa medium. Wipe with oiled paper",
      "Pour ladle, spread into thin circle",
      "Cook 2–3 min until edges are crispy and lift easily",
      "Flip, cook 2 min. Serve hot with mint chutney",
    ],
  },
  B5: {
    n: "Vegetable Poha + Curd",
    e: "🍚",
    g1: "#FFC107",
    g2: "#FF8F00",
    c: 245, p: 7, f: 4, t: "15 min", d: "Easy", s: "medium", type: "b",
    tags: ["Quick", "Traditional", "Light"],
    sn: "ALWAYS pair with ¼ cup curd on side — lowers glucose spike by 20%!",
    i: [
      ["Medium poha (flattened rice)", "½ cup (60g)"],
      ["Oil + mustard seeds", "1 tsp + ½ tsp"],
      ["Curry leaves", "5–6"],
      ["Onion, finely chopped", "1 small"],
      ["Green peas + grated carrot", "¼ cup each"],
      ["Turmeric", "¼ tsp"],
      ["Roasted peanuts", "1 tbsp"],
      ["Salt + lemon + coriander", "To taste"],
      ["Curd on side", "¼ cup"],
    ],
    st: [
      "Put poha in strainer. Run water 10 sec. Drain 5 min — moist not soggy",
      "Heat oil → mustard seeds (wait for pop!) → curry leaves → onion 2 min",
      "Add peas + carrot + turmeric + salt. Cook 3 min",
      "Add poha. Fold GENTLY — don't stir hard or it breaks",
      "Cook 2 min. Add peanuts, lemon, coriander",
      "Serve with cold curd on side — this step matters!",
    ],
  },
  B6: {
    n: "Ragi Dosa",
    e: "🟤",
    g1: "#8D6E63",
    g2: "#4E342E",
    c: 195, p: 5, f: 5, t: "20 min", d: "Medium", s: "low-medium", type: "b",
    tags: ["Highest Calcium", "Anti-Diabetic", "South Indian"],
    sn: "Makes 2 crispy dosas. Ragi batter sets fast — spread quickly!",
    i: [
      ["Ragi flour (finger millet)", "4 tbsp (40g)"],
      ["Rice flour", "2 tbsp"],
      ["Curd", "¼ cup"],
      ["Onion + green chili + ginger", "3 tbsp + 1 + ½ tsp"],
      ["Cumin seeds + salt", "¼ tsp + to taste"],
      ["Water", "To thin batter"],
      ["Oil", "½ tsp"],
    ],
    st: [
      "Mix ragi flour + rice flour + curd + water into thin, flowing batter",
      "Add onion, chili, cumin, ginger, salt. Mix well",
      "Rest batter 10 minutes — very important!",
      "Heat tawa on MEDIUM-HIGH. Must be very hot!",
      "Grease lightly. Pour batter and SPREAD QUICKLY — ragi sets fast",
      "Cook 2–3 min. Drops of oil at edges. Flip when crispy",
      "Cook 2 more min. Serve with coconut or tomato chutney",
    ],
  },
  B7: {
    n: "Mixed Sprouts Chaat",
    e: "🌱",
    g1: "#66BB6A",
    g2: "#1B5E20",
    c: 155, p: 11, f: 6, t: "5 min + overnight", d: "Easy", s: "low", type: "b",
    tags: ["Highest Protein", "Raw Power", "Detox"],
    sn: "Sprout the moong NIGHT BEFORE. Just 5 min to put together in morning!",
    i: [
      ["Moong sprouts (see sprouting steps!)", "¾ cup"],
      ["Onion + tomato + cucumber, chopped", "1 small each + ¼"],
      ["Roasted cumin powder", "½ tsp"],
      ["Chaat masala + black salt", "½ tsp + ¼ tsp"],
      ["Lemon juice + coriander", "1–2 tsp + 1 tbsp"],
    ],
    st: [
      "NIGHT BEFORE: Soak moong dal 8 hours in water",
      "Drain, wrap in damp cotton cloth, keep in warm corner 14–16 hrs",
      "Morning: ½ inch sprout tails = ready! Steam 3–4 min if you prefer cooked",
      "Combine sprouts + onion + tomato + cucumber in bowl",
      "Add all spices, black salt, lemon juice",
      "Toss gently. Eat IMMEDIATELY — gets watery if left!",
    ],
  },
  B8: {
    n: "Power Curd Bowl",
    e: "🥣",
    g1: "#7E57C2",
    g2: "#283593",
    c: 230, p: 10, f: 5, t: "10 min", d: "Easy", s: "low-medium", type: "b",
    tags: ["Omega-3 Rich", "B12 Source", "Anti-Inflammatory"],
    sn: "Grind flaxseeds FRESH every morning — stored ground flax goes rancid!",
    i: [
      ["Homemade curd (low-fat)", "1 cup (200g)"],
      ["Soaked almonds, peeled (overnight soak)", "5 almonds"],
      ["Walnut halves", "2 (10g)"],
      ["Flaxseeds — grind FRESH!", "1 tsp"],
      ["Chia seeds", "1 tsp"],
      ["Seasonal fruit (apple/papaya/banana)", "1 small portion"],
      ["Cinnamon powder", "¼ tsp"],
    ],
    st: [
      "Night before: soak 5 almonds in a small bowl of water",
      "Morning: peel almonds — skins block minerals. 1 min but worth it!",
      "Grind 1 tsp flaxseeds fresh in small grinder or mortar",
      "Whisk curd until smooth and creamy",
      "Layer: curd → halved almonds → walnuts → flax+chia+cinnamon",
      "Add fruit on top. No sugar — cinnamon gives natural sweetness!",
      "Eat within 10 minutes of preparing",
    ],
  },
  L1: {
    n: "Rice + Moong Dal + Bhindi",
    e: "🍱",
    g1: "#43A047",
    g2: "#1B5E20",
    c: 465, p: 17, f: 11, t: "40 min", d: "Medium", s: "low-medium", type: "l",
    tags: ["LDL Reducer", "Complete Meal", "Heart Healthy"],
    sn: "CRITICAL: Bhindi must be completely DRY before cutting. Wet bhindi = slimy!",
    i: [
      ["Brown rice", "½ cup dry"],
      ["Yellow moong dal", "½ cup dry"],
      ["Bhindi — wash & DRY before cutting", "200g"],
      ["Ghee + cumin + garlic", "1 tsp + 1 tsp + 4 cloves"],
      ["Onion + tomatoes", "2 small + 2 medium"],
      ["Spices: turmeric, coriander, chili, amchur", "¼ tsp each"],
      ["Salt + coriander for garnish", "To taste"],
    ],
    st: [
      "START RICE: Soak 30 min. Pressure cook 2 whistles",
      "MOONG DAL: Pressure cook 2 whistles. Tadka: ghee→cumin→garlic→tomato→dal+spices",
      "BHINDI KEY: Pat every piece DRY with paper towel BEFORE cutting",
      "Heat oil on HIGH flame. Add bhindi. Cook UNCOVERED, stir every 2 min for 8–10 min",
      "High heat removes the sliminess! Add spices + amchur. Cook 3 more min",
      "Plate everything with cucumber-tomato salad",
    ],
  },
  L2: {
    n: "Roti + Chana Dal + Torai + Curd",
    e: "🍽️",
    g1: "#FF8F00",
    g2: "#E65100",
    c: 430, p: 20, f: 12, t: "35 min", d: "Medium", s: "low-medium", type: "l",
    tags: ["High Protein", "Classic Indian", "Liver Friendly"],
    sn: "Torai cooks in its own water — keep lid on, don't add water!",
    i: [
      ["Whole wheat flour (for 2 rotis)", "60g"],
      ["Chana dal (soaked 2 hrs)", "½ cup dry"],
      ["Torai (ridge gourd), peeled & diced", "250g"],
      ["Onions + tomatoes + garlic + ginger", "Standard"],
      ["Ghee + oil + all spices", "Standard"],
      ["Curd to serve", "½ cup"],
    ],
    st: [
      "CHANA DAL: Pressure cook soaked dal 2–3 whistles. Tadka with ghee, cumin, onion, garlic, tomato, spices",
      "TORAI: Heat oil → mustard+cumin → onion 3 min → tomato → add torai+turmeric+salt",
      "Cover tightly. Cook medium-low 10–12 min. Torai releases its own water!",
      "ROTIS: Knead soft dough, roll thin, cook on hot tawa, puff on direct flame",
      "Serve: 2 rotis + chana dal + torai + cold curd",
    ],
  },
  L3: {
    n: "Khichdi + Kadhi + Salad",
    e: "🫕",
    g1: "#FFC107",
    g2: "#F57F17",
    c: 385, p: 14, f: 9, t: "30 min", d: "Easy", s: "low", type: "l",
    tags: ["Best Detox Meal", "Gut Healing", "Easy Digest"],
    sn: "Khichdi must be MUSHY. Mushy = better digestion + longer satiety!",
    i: [
      ["Yellow moong dal", "¼ cup"],
      ["Brown rice", "¼ cup"],
      ["Sour curd for kadhi", "½ cup"],
      ["Besan for kadhi", "1 tbsp"],
      ["Ghee", "1.5 tsp total"],
      ["Cumin + mustard + hing + curry leaves", "Standard"],
      ["Ginger + turmeric + salt", "Standard"],
      ["Carrot + green peas", "¼ cup each"],
    ],
    st: [
      "KHICHDI: Ghee→cumin+hing→ginger→vegetables→rice+dal+water+turmeric+salt",
      "Pressure cook 2–3 whistles. Must be beautifully mushy!",
      "KADHI: Whisk curd+besan+1.5 cups water PERFECTLY smooth — zero lumps!",
      "In deep pot: ghee→mustard+cumin+hing+curry leaves. Add curd mixture",
      "Bring to boil WHILE STIRRING. Simmer 10–12 min stirring occasionally",
      "Pour kadhi over khichdi. Serve with salad",
    ],
  },
  L4: {
    n: "Rajma + Brown Rice",
    e: "🫘",
    g1: "#E53935",
    g2: "#880E4F",
    c: 430, p: 18, f: 14, t: "50 min + soak", d: "Medium", s: "medium", type: "l",
    tags: ["Highest Fiber", "Cholesterol Fighter", "Very Filling"],
    sn: "Soak rajma overnight (min 8 hrs). Under-cooked rajma is hard to digest!",
    i: [
      ["Rajma (kidney beans), soaked overnight", "½ cup dry"],
      ["Brown rice", "½ cup dry"],
      ["Onion, finely chopped", "1 medium"],
      ["Tomatoes + garlic + ginger", "1 large + 3 cloves + 1 tsp"],
      ["Ghee + cumin + all spices", "Standard"],
      ["Salt + lemon + coriander", "To taste"],
    ],
    st: [
      "Pressure cook soaked rajma 4–5 whistles — beans MUST be very soft",
      "KEY STEP: Cook onion in ghee 8–10 min until DEEP golden-brown. DON'T RUSH!",
      "This deep-cooked onion is the secret. Take your time — it makes the rajma!",
      "Add garlic+ginger 2 min → tomato+spices (cook till oil separates, 5 min)",
      "Add rajma + ½ cup cooking water. Simmer 10 min",
      "Mash few beans with spoon for thick gravy. Finish with lemon",
    ],
  },
  L5: {
    n: "Paneer Bhurji + Roti + Curd",
    e: "🧀",
    g1: "#FFA726",
    g2: "#EF6C00",
    c: 470, p: 24, f: 7, t: "30 min", d: "Easy", s: "low-medium", type: "l",
    tags: ["Highest Protein", "B12 Source", "Everyone's Favourite!"],
    sn: "Don't overcook paneer — fold gently at end, just 3–4 min!",
    i: [
      ["Paneer, crumbled (low-fat preferred)", "100g"],
      ["Oil", "1 tsp"],
      ["Onion + capsicum + tomato", "1 medium + ½ + 1 medium"],
      ["Garlic + ginger + green chili", "2 cloves + ½ tsp + 1"],
      ["Spices: turmeric, coriander, chili, garam masala", "¼ tsp each"],
      ["Salt + lemon + coriander", "To taste"],
      ["Whole wheat flour (2 rotis)", "60g"],
      ["Curd to serve", "½ cup"],
    ],
    st: [
      "Heat oil → cumin → onion 4 min (golden) → garlic+ginger+chili 2 min",
      "Add capsicum — cook 2 min, keep it slightly crunchy",
      "Add tomato + all spices. Cook thick till oil separates (~5 min)",
      "Add crumbled paneer. Fold GENTLY — don't mash it!",
      "Cook 3–4 min on medium. Lemon + coriander to finish",
      "Serve with 2 fresh rotis + cold curd",
    ],
  },
  L6: {
    n: "Rice + Toor Dal + Aloo Tamatar",
    e: "🍱",
    g1: "#FFB300",
    g2: "#E65100",
    c: 445, p: 15, f: 10, t: "40 min", d: "Easy", s: "low-medium", type: "l",
    tags: ["Everyday Classic", "Comfort Food", "Desi Favourite"],
    sn: "Let tomatoes cook completely before adding potato — this is the foundation!",
    i: [
      ["Brown rice", "½ cup dry"],
      ["Toor (arhar) dal", "½ cup dry"],
      ["Potato, diced small", "1 medium (130g)"],
      ["Tomatoes, chopped", "2 medium"],
      ["Garlic + ginger + all spices", "Standard"],
      ["Fresh coriander for garnish", "As needed"],
    ],
    st: [
      "TOOR DAL: Pressure cook 3–4 whistles. Tadka: ghee→mustard+cumin+hing+curry leaves+garlic→tomato",
      "ALOO TAMATAR: Heat oil → cumin+hing → garlic+ginger 1 min",
      "Add tomatoes + spices. Cook 5 min until completely broken down — this is the key!",
      "Add potato, stir to coat in thick masala",
      "Cover medium heat 12–15 min, stir twice",
      "Mash 2–3 potato pieces for thicker sauce. Garnish coriander",
    ],
  },
  L7: {
    n: "Roti + Chhole + Onion Salad",
    e: "🫘",
    g1: "#FF8F00",
    g2: "#BF360C",
    c: 400, p: 18, f: 15, t: "45 min + soak", d: "Medium", s: "medium", type: "l",
    tags: ["Highest Fiber Lunch", "Very Satisfying", "North Indian Classic"],
    sn: "Soak chickpeas overnight. Secret = deeply golden-brown onion base!",
    i: [
      ["Chickpeas, soaked overnight", "½ cup dry"],
      ["Whole wheat flour (2 rotis)", "60g"],
      ["Onion + tomato + garlic + ginger", "1 large each + 3 cloves + 1 tsp"],
      ["Oil + cumin + bay leaf", "1 tsp + ½ tsp + 1"],
      ["Chhole masala + standard spices", "1 tbsp + standard"],
      ["Salt + lemon + raw onion for salad", "To taste + ½ onion"],
    ],
    st: [
      "Pressure cook soaked chickpeas 5–6 whistles until very soft",
      "Cook onion in oil for 8–10 min until DEEP GOLDEN-BROWN. Take your time!",
      "This is the secret — don't rush the onion!",
      "Add garlic+ginger 2 min → tomato+chhole masala+spices (thick paste, 5 min)",
      "Add chickpeas + ½ cup cooking liquid. Simmer 15 min",
      "Onion salad: sliced onion + lemon + coriander + black salt",
    ],
  },
  L8: {
    n: "Roti + Mix Veg + Moong Dal",
    e: "🥗",
    g1: "#00897B",
    g2: "#1A237E",
    c: 450, p: 16, f: 12, t: "40 min", d: "Medium", s: "low-medium", type: "l",
    tags: ["Most Vitamins", "Colorful Plate", "Full Nutrition"],
    sn: "Use whatever vegetables are in the fridge — this recipe is flexible!",
    i: [
      ["Carrot + French beans + peas + capsicum", "50g each"],
      ["Small potato", "1 (75g)"],
      ["Onion + tomato", "1 small each"],
      ["Oil + cumin + ginger-garlic paste", "Standard"],
      ["All spices + garam masala", "Standard"],
      ["Yellow moong dal", "½ cup dry"],
      ["Whole wheat flour (2 rotis)", "60g"],
    ],
    st: [
      "MIX VEG: Ghee→cumin→onion 3 min → ginger-garlic → tomato+spices (thick, 4 min)",
      "Add all vegetables + ¼ cup water. Cover medium 12–15 min",
      "MOONG DAL: Pressure cook 2 whistles. Standard tadka with ghee, cumin, garlic, tomato",
      "ROTIS: Knead soft dough, roll thin, cook on hot tawa",
      "Plate the colorful sabzi + dal + rotis. Rainbow on your plate = maximum vitamins!",
    ],
  },
  DN1: {
    n: "Veg Soup + 1 Roti",
    e: "🍲",
    g1: "#0097A7",
    g2: "#006064",
    c: 165, p: 5, f: 8, t: "25 min", d: "Easy", s: "very-low", type: "dn",
    tags: ["Lightest Dinner", "Immune Boost", "Warming Soup"],
    sn: "Blend half the soup for creamy texture without extra calories.",
    i: [
      ["Mixed veg: carrot, beans, peas", "1 cup (150g)"],
      ["Tomato + garlic + ginger", "1 medium + 2 cloves + 1 tsp"],
      ["Ghee + black pepper + turmeric", "½ tsp + ½ tsp + ¼ tsp"],
      ["Water + salt + lemon", "1.5 cups + to taste"],
      ["Whole wheat flour (for roti)", "30g"],
    ],
    st: [
      "Heat ghee → garlic+ginger 1 min → tomato → all vegetables",
      "Add 1.5 cups water + turmeric + pepper + salt",
      "Simmer 15–20 min until vegetables are soft",
      "Blend half the soup for creamy richness",
      "Squeeze lemon. Taste and adjust",
      "Make 1 thin roti. Serve together",
    ],
  },
  DN2: {
    n: "Moong Dal Soup + Sautéed Greens",
    e: "🥗",
    g1: "#43A047",
    g2: "#1B5E20",
    c: 185, p: 11, f: 7, t: "20 min", d: "Easy", s: "very-low", type: "dn",
    tags: ["Detox Power", "Liver Friendly", "High Protein Dinner"],
    sn: "Greens MUST be eaten immediately — they lose nutrients quickly once cooked.",
    i: [
      ["Yellow moong dal", "⅓ cup"],
      ["Spinach OR methi leaves", "2 cups"],
      ["Garlic (minced for dal + sliced for greens)", "4 cloves total"],
      ["Ghee + oil + cumin + spices", "½ tsp each"],
    ],
    st: [
      "DAL SOUP: Pressure cook moong very soft. Blend smooth",
      "Tadka: ghee→cumin→minced garlic (golden) → add to dal + spices+salt+lemon",
      "GREENS: Heat oil on HIGH → sliced garlic 30 sec (golden not burnt!)",
      "Add greens — toss 2 min ONLY. Salt + lemon. Remove immediately!",
      "Serve dal soup in bowl, greens on side plate",
    ],
  },
  DN3: {
    n: "Light Khichdi + Curd",
    e: "🫕",
    g1: "#FFC107",
    g2: "#E65100",
    c: 235, p: 9, f: 5, t: "20 min", d: "Easy", s: "low", type: "dn",
    tags: ["Comfort Food", "Easy Digest", "Warming"],
    sn: "Should be very mushy — porridge-like consistency for easy night digestion.",
    i: [
      ["Yellow moong dal", "¼ cup"],
      ["Brown rice", "3 tbsp"],
      ["Ghee", "½ tsp"],
      ["Cumin + hing + turmeric + ginger + salt", "¼ tsp each"],
      ["Water", "1.5 cups"],
      ["Plain curd to serve", "½ cup"],
    ],
    st: [
      "Heat ghee → cumin+hing → ginger",
      "Add washed rice+dal+water+turmeric+salt",
      "Pressure cook 2–3 whistles. MUST be very soft, almost porridge-like",
      "Let pressure release naturally — 5 min",
      "Serve in bowl with cold curd on side",
      "Optional: thin drizzle of ghee on top for comfort",
    ],
  },
  DN4: {
    n: "Roti + Light Bhindi + Raita",
    e: "🌿",
    g1: "#2E7D32",
    g2: "#1B5E20",
    c: 200, p: 7, f: 8, t: "25 min", d: "Easy", s: "low", type: "dn",
    tags: ["Light Dinner", "LDL Reducer", "Heart Friendly"],
    sn: "CRITICAL: Bhindi must be DRY before cooking. Light dinner portion only.",
    i: [
      ["Bhindi (okra), thoroughly dried & sliced", "150g"],
      ["Whole wheat flour (for roti)", "30g"],
      ["Plain curd (for raita)", "½ cup"],
      ["Cucumber, grated (for raita)", "¼ medium"],
      ["Oil + cumin + spices", "½ tsp + standard"],
      ["Roasted cumin powder + black salt for raita", "¼ tsp each"],
    ],
    st: [
      "DRY BHINDI: Pat completely dry. Cook on HIGH heat uncovered, stir every 2 min for 6–8 min",
      "Season lightly with turmeric, salt, amchur",
      "RAITA: Whisk curd smooth. Fold in grated cucumber + roasted cumin + black salt",
      "Chill raita slightly — the contrast with hot bhindi is delicious!",
      "Make 1 thin roti",
      "Serve all three together",
    ],
  },
  DN5: {
    n: "Mixed Dal + 1 Roti + Salad",
    e: "🍽️",
    g1: "#FF8F00",
    g2: "#E65100",
    c: 255, p: 12, f: 9, t: "25 min", d: "Easy", s: "low", type: "dn",
    tags: ["Double Dal Power", "Light", "High Protein Dinner"],
    sn: "Moong + masoor together = complete amino acid profile! Better than either alone.",
    i: [
      ["Yellow moong dal", "3 tbsp"],
      ["Masoor dal (red lentils)", "2 tbsp"],
      ["Ghee + cumin + garlic", "½ tsp + ½ tsp + 2 cloves"],
      ["Small tomato", "1"],
      ["Turmeric + salt + lemon + coriander", "To taste"],
      ["Whole wheat flour (for roti)", "30g"],
      ["Cucumber + tomato for salad", "Side portion"],
    ],
    st: [
      "Pressure cook both dals together — just 2 whistles",
      "Tadka: ghee→cumin→garlic (golden) → tomato mash 2 min",
      "Add cooked dal + turmeric + salt. Simmer 5 min",
      "Finish with lemon + fresh coriander",
      "Make 1 thin roti",
      "Simple salad: cucumber + tomato + lemon + black salt",
    ],
  },
  DN6: {
    n: "Tomato Soup + Small Daliya",
    e: "🍅",
    g1: "#E53935",
    g2: "#B71C1C",
    c: 175, p: 5, f: 7, t: "20 min", d: "Easy", s: "very-low", type: "dn",
    tags: ["Lycopene Rich", "Very Light", "Liver Healing"],
    sn: "Cooked tomatoes have MORE lycopene than raw. This soup is medicine!",
    i: [
      ["Tomatoes", "3 medium"],
      ["Onion + garlic", "1 small + 2 cloves"],
      ["Ghee + black pepper + turmeric + salt", "Standard"],
      ["Broken wheat (daliya)", "3 tbsp"],
      ["Water + cumin + salt", "½ cup + pinch"],
    ],
    st: [
      "SOUP: Ghee→onion+garlic 3 min → tomatoes (cook 8 min till completely soft)",
      "Add water+spices. Blend smooth. Strain for silky texture. Reheat",
      "DALIYA: Toast 3 tbsp daliya in ¼ tsp ghee for 1 min until fragrant",
      "Add ½ cup water + cumin + salt. Cover on low 10 min",
      "Serve soup in mug/bowl, daliya in small bowl",
      "Fun fact: cooked tomato lycopene is 5× more bioavailable than raw!",
    ],
  },
  DN7: {
    n: "Roti + Sautéed Methi + Curd",
    e: "🌿",
    g1: "#00897B",
    g2: "#006064",
    c: 195, p: 8, f: 6, t: "20 min", d: "Easy", s: "low", type: "dn",
    tags: ["Liver Detox", "Cholesterol Fighter", "Lightest Option"],
    sn: "HIGH HEAT for methi — sauté quickly, 2 min only. Overcooked = bitter!",
    i: [
      ["Fresh methi (fenugreek) leaves", "2 cups"],
      ["Garlic, thinly sliced", "3 cloves"],
      ["Oil + chili flakes + salt + lemon", "½ tsp + standard"],
      ["Whole wheat flour (for roti)", "30g"],
      ["Plain curd", "½ cup"],
    ],
    st: [
      "Heat oil on HIGH — must be very hot before adding garlic",
      "Add sliced garlic — sizzle 30 sec until golden (not brown or burnt!)",
      "Add methi leaves — they'll wilt dramatically",
      "Toss quickly 2 minutes ONLY. Chili flakes + salt",
      "Squeeze lemon. Remove from heat immediately",
      "Make 1 roti. Serve with cold curd — the contrast is delicious!",
    ],
  },
};

const SNACKS_DATA = {
  SC1: {
    n: "Masala Makhana", e: "🍿", c: 95, time: "10 min", crunch: 5, type: "crunchy",
    tags: ["Most Crunchy", "Zero Guilt", "Addictive"],
    g1: "#FFA726", g2: "#E65100",
    why: "Fox nuts = low calorie, high magnesium, high fiber. Perfect heart snack.",
    i: [
      ["Fox nuts (makhana / phool makhana)", "1 cup (30g)"],
      ["Ghee", "½ tsp"],
      ["Turmeric + black pepper + chili", "¼ tsp each"],
      ["Chaat masala + black salt", "½ tsp + pinch"],
    ],
    st: [
      "Heat ghee in a wide pan on medium flame",
      "Add makhana. Roast stirring constantly for 7–8 minutes",
      "They're ready when they SNAP loudly when you bite one!",
      "Remove from heat. Immediately toss with all spices",
      "Let cool 2 minutes — they get CRUNCHIER as they cool!",
      "Store in airtight container — stays crunchy 3–4 days",
    ],
  },
  SC2: {
    n: "Spicy Roasted Chana", e: "🟤", c: 80, time: "5 min", crunch: 4, type: "crunchy",
    tags: ["High Protein", "Ready in 5 min", "Portable"],
    g1: "#8D6E63", g2: "#4E342E",
    why: "20g = 5g protein + 2g fiber. Best travel snack — keeps you full for 2 hrs.",
    i: [
      ["Roasted chana (from market, already roasted)", "20g (small handful)"],
      ["Lemon juice", "1 tsp"],
      ["Chaat masala + black salt", "¼ tsp each"],
      ["Chili powder (optional)", "Pinch"],
    ],
    st: [
      "Measure chana into a small bowl",
      "Squeeze lemon over it",
      "Add chaat masala, black salt, and chili",
      "Toss and eat immediately!",
      "Tip: Keep a small pouch in your bag for hunger emergencies",
    ],
  },
  SC3: {
    n: "Kurmura Chaat", e: "💨", c: 85, time: "5 min", crunch: 5, type: "crunchy",
    tags: ["Like Bhel", "Super Light", "Refreshing"],
    g1: "#FFB300", g2: "#F57F17",
    why: "1 cup puffed rice = only 60 calories. Very filling per calorie!",
    i: [
      ["Puffed rice (murmura)", "1 cup (20g)"],
      ["Onion + tomato, very finely chopped", "2 tbsp each"],
      ["Lemon + chaat masala + black salt", "1 tsp + ¼ tsp + pinch"],
      ["Fresh coriander", "1 tbsp"],
      ["Roasted peanuts (optional)", "1 tsp"],
    ],
    st: [
      "Combine puffed rice, onion, tomato in a large bowl",
      "Add lemon, chaat masala, black salt, coriander",
      "Toss everything",
      "⚡ EAT WITHIN 60 SECONDS — murmura gets soggy immediately!",
      "The first bite is the crunchiest — don't wait!",
    ],
  },
  SC4: {
    n: "Kali Mirch Peanuts", e: "🥜", c: 100, time: "8 min", crunch: 4, type: "crunchy",
    tags: ["Protein Rich", "Heart Healthy Fats", "Simple"],
    g1: "#F9A825", g2: "#E65100",
    why: "Peanuts = plant protein + MUFA fat + resveratrol. Heart health trifecta.",
    i: [
      ["Raw peanuts (with or without skin)", "20g"],
      ["Black pepper, coarsely ground", "¼ tsp"],
      ["Rock salt / black salt", "Pinch"],
      ["Lemon juice", "½ tsp"],
    ],
    st: [
      "Dry roast peanuts in a pan on medium heat, stirring constantly",
      "Roast 6–8 min until skins crack and peanuts turn light golden",
      "Remove from heat while still hot",
      "Sprinkle black pepper + salt. Squeeze lemon. Toss while warm",
      "Let cool 2 min — they crisp up even more!",
    ],
  },
  ST1: {
    n: "Paneer Tikka (Dry)", e: "🧀", c: 150, time: "20 min", crunch: 1, type: "treat",
    tags: ["Weekend Treat", "High Protein", "Tandoori Style"],
    g1: "#FF7043", g2: "#B71C1C",
    why: "100g paneer = 18g protein. Tikka style = all flavour, minimum oil.",
    freq: "2–3x per week max",
    i: [
      ["Paneer, cubed (2cm cubes)", "75g"],
      ["Thick curd", "2 tbsp"],
      ["Besan", "1 tsp"],
      ["Turmeric + chili + coriander + garam masala", "¼ tsp each"],
      ["Ginger-garlic paste + lemon", "½ tsp each"],
      ["Oil for cooking", "½ tsp"],
      ["Capsicum + onion pieces (optional)", "A few"],
    ],
    st: [
      "Mix curd + besan + spices + ginger-garlic + lemon into thick marinade",
      "Toss paneer in marinade. Marinate min 20 min — longer is better!",
      "Heat tawa on HIGH until smoking hot. Add ½ tsp oil",
      "Place marinated paneer. DON'T TOUCH for 2 min — let char marks form!",
      "Flip carefully. Cook 2 more min per side for charred spots",
      "Serve with raw onion rings + lemon + mint chutney",
    ],
  },
  ST2: {
    n: "Dark Chocolate + Walnuts", e: "🍫", c: 120, time: "0 min", crunch: 2, type: "treat",
    tags: ["Once a Week", "Antioxidants", "Guilt-Free Treat"],
    g1: "#5D4037", g2: "#1A0A00",
    why: "70%+ dark chocolate = flavonoids that lower BP. Walnuts = omega-3.",
    freq: "1 square, once a week only (Saturday/Sunday)",
    i: [
      ["Dark chocolate — MUST be 70%+ cocoa (check label!)", "1 square (10g)"],
      ["Walnut halves", "2 (10g)"],
    ],
    st: [
      "CHECK THE LABEL: must say 70% cocoa or higher",
      "Let chocolate melt SLOWLY on your tongue — don't chew immediately",
      "This releases more flavour and makes 1 square feel like more",
      "Eat walnuts alongside — omega-3 + flavonoids = powerful combo",
      "Best time: 4:30–5 PM",
      "Remember: 1 square only, once a week. Savour every bite!",
    ],
  },
  ST3: {
    n: "Banana Walnut Smoothie", e: "🥤", c: 180, time: "5 min", crunch: 0, type: "treat",
    tags: ["Weekend Treat", "Post-Walk", "Natural Sweet"],
    g1: "#F9A825", g2: "#FF8F00",
    why: "Potassium (banana) + omega-3 (walnut) + B12 (curd) = heart triple threat!",
    freq: "Saturday/Sunday after a walk",
    i: [
      ["Ripe banana — riper = sweeter!", "1 medium"],
      ["Low-fat curd or milk", "½ cup"],
      ["Walnut halves", "2 (10g)"],
      ["Cinnamon", "¼ tsp"],
      ["Ice cubes", "2–3"],
    ],
    st: [
      "Add all ingredients to a blender",
      "Blend 30 seconds until completely smooth",
      "No sugar needed — ripe banana is naturally sweet!",
      "Pour and drink within 5 minutes (smoothies oxidize quickly)",
      "Best enjoyed after a morning walk",
    ],
  },
};

const EV_DATA = {
  EV1: { n: "Spiced Chaas", e: "🥛", c: 50, d: "Curd + water + jeera powder + black salt. Cooling & digestive." },
  EV2: { n: "Green Tea + Walnuts", e: "🍵", c: 80, d: "Brewed green tea + 2 walnut halves. Omega-3 boost." },
  EV3: { n: "Fresh Coconut Water", e: "🥥", c: 45, d: "Fresh coconut water. Best natural electrolyte drink." },
  EV4: { n: "Golden Milk", e: "🌟", c: 100, d: "Warm milk + turmeric + pepper + honey. Anti-inflammatory." },
};

const MS_DATA = {
  S1: { n: "Almonds + Fruit", e: "🍎", c: 110 },
  S2: { n: "Papaya + Seeds", e: "🍈", c: 90 },
  S3: { n: "Roasted Chana", e: "🟤", c: 80 },
  S4: { n: "Banana + Walnut", e: "🍌", c: 120 },
};

const SCHED = [
  { d: 1,  mw: "MW1", b: "B1", s: "S1", l: "L1", ev: "EV1", dn: "DN1" },
  { d: 2,  mw: "MW2", b: "B7", s: "S2", l: "L2", ev: "EV2", dn: "DN2" },
  { d: 3,  mw: "MW3", b: "B2", s: "S3", l: "L3", ev: "EV1", dn: "DN3" },
  { d: 4,  mw: "MW4", b: "B4", s: "S4", l: "L4", ev: "EV2", dn: "DN4" },
  { d: 5,  mw: "MW5", b: "B8", s: "S1", l: "L5", ev: "EV4", dn: "DN5" },
  { d: 6,  mw: "MW1", b: "B3", s: "S2", l: "L6", ev: "EV1", dn: "DN6" },
  { d: 7,  mw: "MW2", b: "B6", s: "S3", l: "L7", ev: "EV2", dn: "DN7" },
  { d: 8,  mw: "MW3", b: "B5", s: "S4", l: "L8", ev: "EV3", dn: "DN1" },
  { d: 9,  mw: "MW4", b: "B1", s: "S1", l: "L1", ev: "EV4", dn: "DN2" },
  { d: 10, mw: "MW5", b: "B7", s: "S2", l: "L2", ev: "EV1", dn: "DN3" },
  { d: 11, mw: "MW1", b: "B2", s: "S3", l: "L3", ev: "EV2", dn: "DN4" },
  { d: 12, mw: "MW2", b: "B4", s: "S4", l: "L4", ev: "EV3", dn: "DN5" },
  { d: 13, mw: "MW3", b: "B8", s: "S1", l: "L5", ev: "EV4", dn: "DN6" },
  { d: 14, mw: "MW4", b: "B3", s: "S2", l: "L6", ev: "EV1", dn: "DN7" },
  { d: 15, mw: "MW5", b: "B6", s: "S3", l: "L7", ev: "EV2", dn: "DN1" },
  { d: 16, mw: "MW1", b: "B5", s: "S4", l: "L8", ev: "EV3", dn: "DN2" },
  { d: 17, mw: "MW2", b: "B1", s: "S1", l: "L1", ev: "EV4", dn: "DN3" },
  { d: 18, mw: "MW3", b: "B7", s: "S2", l: "L2", ev: "EV1", dn: "DN4" },
  { d: 19, mw: "MW4", b: "B2", s: "S3", l: "L4", ev: "EV2", dn: "DN5" },
  { d: 20, mw: "MW5", b: "B4", s: "S4", l: "L3", ev: "EV3", dn: "DN6" },
  { d: 21, mw: "MW1", b: "B8", s: "S1", l: "L5", ev: "EV4", dn: "DN7" },
  { d: 22, mw: "MW2", b: "B3", s: "S2", l: "L6", ev: "EV1", dn: "DN1" },
  { d: 23, mw: "MW3", b: "B6", s: "S3", l: "L7", ev: "EV2", dn: "DN2" },
  { d: 24, mw: "MW4", b: "B5", s: "S4", l: "L8", ev: "EV3", dn: "DN3" },
  { d: 25, mw: "MW5", b: "B1", s: "S1", l: "L2", ev: "EV4", dn: "DN4" },
  { d: 26, mw: "MW1", b: "B7", s: "S2", l: "L1", ev: "EV1", dn: "DN5" },
  { d: 27, mw: "MW2", b: "B2", s: "S3", l: "L3", ev: "EV2", dn: "DN6" },
  { d: 28, mw: "MW3", b: "B4", s: "S4", l: "L4", ev: "EV3", dn: "DN7" },
  { d: 29, mw: "MW4", b: "B8", s: "S1", l: "L5", ev: "EV4", dn: "DN1" },
  { d: 30, mw: "MW5", b: "B3", s: "S2", l: "L7", ev: "EV1", dn: "DN2" },
];

const SPIKE = {
  "very-low":  { label: "Very Low", dot: "🟢", bg: "#DCFCE7", color: "#14532D" },
  "low":       { label: "Low",      dot: "🟢", bg: "#DCFCE7", color: "#14532D" },
  "low-medium":{ label: "Low-Med",  dot: "🟡", bg: "#FEF9C3", color: "#713F12" },
  "medium":    { label: "Medium",   dot: "🟠", bg: "#FFEDD5", color: "#7C2D12" },
};

const WEEK_INFO = [
  { e: "🌱", title: "Detox & Reset",      desc: "Gut resets. Bloating reduces by Day 5." },
  { e: "⚡", title: "Build & Stabilize",  desc: "Energy improves. Waist reduction begins." },
  { e: "🔥", title: "Optimize & Deepen", desc: "Visible fat loss. Cholesterol dropping." },
  { e: "🏆", title: "Lock It In",         desc: "Habits formed. This is your lifestyle now." },
];

const STORAGE_KEY = "diet-app-state-v1";

// ─── RECIPE MODAL ─────────────────────────────────────────────────────────────

function RecipeModal({ item, onClose }) {
  const [tab, setTab] = useState("ing");
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState(new Set());

  if (!item) return null;

  const ings = item.i || item.ings || [];
  const steps = item.st || item.steps || [];
  const allChecked = checked.size >= ings.length && ings.length > 0;

  const toggleCheck = (i) => {
    const nc = new Set(checked);
    nc.has(i) ? nc.delete(i) : nc.add(i);
    setChecked(nc);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 0", flexShrink: 0 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "#E5DDD5" }} />
        </div>

        {/* Header */}
        <div style={{
          background: `linear-gradient(140deg, ${item.g1 || "#FFA726"}, ${item.g2 || "#E65100"})`,
          padding: "14px 20px 18px",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 8 }}>{item.e || item.emoji}</div>
              <div style={{ color: "#fff", fontSize: 19, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.25 }}>
                {item.n || item.name}
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                {(item.t || item.time) && (
                  <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>
                    ⏱ {item.t || item.time}
                  </span>
                )}
                {(item.c || item.cal) && (
                  <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>
                    🔥 {item.c || item.cal} cal
                  </span>
                )}
                {item.p && (
                  <span style={{ background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>
                    💪 {item.p}g protein
                  </span>
                )}
              </div>
              {item.tags && (
                <div style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}>
                  {item.tags.map((t, i) => (
                    <span key={i} style={{ background: "rgba(255,255,255,0.16)", color: "#fff", borderRadius: 8, padding: "2px 8px", fontSize: 11, fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                color: "rgba(255,255,255,0.85)", fontSize: 20, background: "rgba(255,255,255,0.18)",
                border: "none", cursor: "pointer", padding: 0, lineHeight: 1,
                width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginLeft: 10,
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "2px solid #F5EEE5", flexShrink: 0, background: "#fff" }}>
          {[
            ["ing", "🛒 Ingredients"],
            ["cook", "👨‍🍳 Method"],
          ].map(([k, label]) => (
            <button
              key={k}
              onClick={() => { setTab(k); if (k === "cook") setStep(0); }}
              style={{
                flex: 1, padding: "13px 8px", border: "none", background: "none",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                color: tab === k ? (item.g2 || "#E65100") : "#B0A090",
                borderBottom: tab === k ? `2.5px solid ${item.g2 || "#E65100"}` : "2.5px solid transparent",
                transition: "all 0.2s", marginBottom: -2,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ overflowY: "auto", flex: 1, padding: "16px 16px 24px" }}>
          {tab === "ing" && (
            <div>
              {(item.sn || item.note) && (
                <div style={{ background: "#FFFBF0", border: "1px solid #F5D78E", borderRadius: 14, padding: "11px 14px", marginBottom: 12, fontSize: 13, color: "#7A500A", lineHeight: 1.6, display: "flex", gap: 8 }}>
                  <span>💡</span>
                  <span>{item.sn || item.note}</span>
                </div>
              )}
              {item.why && (
                <div style={{ background: "#F0FDF4", border: "1px solid #86EFAC", borderRadius: 14, padding: "11px 14px", marginBottom: 12, fontSize: 13, color: "#166534", lineHeight: 1.6, display: "flex", gap: 8 }}>
                  <span>🌿</span>
                  <span>{item.why}</span>
                </div>
              )}
              {item.freq && (
                <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 12, padding: "8px 14px", marginBottom: 12, fontSize: 12, color: "#1E40AF", fontWeight: 600 }}>
                  📅 Frequency: {item.freq}
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {ings.map((ing, i) => {
                  const isChecked = checked.has(i);
                  return (
                    <div
                      key={i}
                      onClick={() => toggleCheck(i)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "11px 13px", borderRadius: 14, cursor: "pointer",
                        background: isChecked ? "#F0FDF4" : "#FAFAF8",
                        opacity: isChecked ? 0.7 : 1,
                        transition: "all 0.2s",
                        border: `1px solid ${isChecked ? "#86EFAC" : "#EDE8E2"}`,
                      }}
                    >
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        border: isChecked ? "none" : "2px solid #D4C8BE",
                        background: isChecked ? "#22C55E" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontSize: 12, fontWeight: 800,
                        transition: "all 0.2s",
                        boxShadow: isChecked ? "0 2px 6px rgba(34,197,94,0.4)" : "none",
                      }}>
                        {isChecked && "✓"}
                      </div>
                      <div style={{ flex: 1, textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "#9CA3AF" : "#2D1B0A", fontSize: 14, fontWeight: 500 }}>
                        {Array.isArray(ing) ? ing[0] : ing.item}
                      </div>
                      <div style={{ background: "#FFF3DE", color: "#B45309", borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0, whiteSpace: "nowrap" }}>
                        {Array.isArray(ing) ? ing[1] : ing.qty}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ textAlign: "center", color: "#B0A090", fontSize: 12, marginTop: 12, fontWeight: 500 }}>
                {checked.size} of {ings.length} ticked ✓
              </div>

              {allChecked && (
                <button
                  onClick={() => { setTab("cook"); setStep(0); }}
                  style={{
                    width: "100%", marginTop: 14,
                    background: `linear-gradient(135deg, ${item.g1 || "#FFA726"}, ${item.g2 || "#E65100"})`,
                    color: "white", border: "none", borderRadius: 16, padding: "15px",
                    fontSize: 15, fontWeight: 800, cursor: "pointer", letterSpacing: -0.2,
                    boxShadow: `0 4px 16px ${item.g2 || "#E65100"}55`,
                  }}
                >
                  All ready! Let's Cook →
                </button>
              )}
            </div>
          )}

          {tab === "cook" && (
            <div>
              {/* Step dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 20 }}>
                {steps.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setStep(i)}
                    style={{
                      height: 6, borderRadius: 3, cursor: "pointer",
                      width: i === step ? 28 : 8,
                      background: i < step ? "#22C55E" : i === step ? (item.g1 || "#FFA726") : "#E5DDD5",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <div style={{ textAlign: "center", color: item.g1 || "#FFA726", fontSize: 11, fontWeight: 800, marginBottom: 10, letterSpacing: 1.5, textTransform: "uppercase" }}>
                Step {Math.min(step + 1, steps.length)} of {steps.length}
              </div>

              {/* Current step card */}
              <div style={{
                background: "#FFFBF2", borderRadius: 20, padding: "24px 20px", marginBottom: 16,
                minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid #F5D78E",
                boxShadow: "0 4px 20px rgba(250,200,80,0.12)",
              }}>
                <div style={{ fontSize: 15.5, color: "#2D1B0A", lineHeight: 1.75, textAlign: "center", fontWeight: 600 }}>
                  {steps[step] || ""}
                </div>
              </div>

              {/* Navigation buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    style={{ flex: 1, background: "#F5F0EA", border: "none", borderRadius: 14, padding: "13px", fontSize: 14, color: "#6B5E54", cursor: "pointer", fontWeight: 700 }}
                  >
                    ← Back
                  </button>
                )}
                {step < steps.length - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    style={{
                      flex: 1,
                      background: `linear-gradient(135deg, ${item.g1 || "#FFA726"}, ${item.g2 || "#E65100"})`,
                      border: "none", borderRadius: 14, padding: "13px",
                      fontSize: 14, color: "white", cursor: "pointer", fontWeight: 800,
                      boxShadow: `0 4px 14px ${item.g2 || "#E65100"}44`,
                    }}
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    onClick={onClose}
                    style={{
                      flex: 1, background: "linear-gradient(135deg,#22C55E,#16A34A)",
                      border: "none", borderRadius: 14, padding: "13px",
                      fontSize: 14, color: "white", cursor: "pointer", fontWeight: 800,
                      boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
                    }}
                  >
                    🎉 Done! Enjoy!
                  </button>
                )}
              </div>

              {/* Step list */}
              <div style={{ marginTop: 22 }}>
                <div style={{ fontSize: 10, color: "#B0A090", marginBottom: 8, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
                  All Steps
                </div>
                {steps.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setStep(i)}
                    style={{
                      display: "flex", gap: 10, padding: "9px 10px", borderRadius: 12,
                      marginBottom: 4, cursor: "pointer",
                      background: i === step ? "#FFFBF0" : "transparent",
                      alignItems: "flex-start", transition: "background 0.15s",
                      border: i === step ? "1px solid #F5D78E" : "1px solid transparent",
                    }}
                  >
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                      background: i < step ? "#22C55E" : i === step ? (item.g1 || "#FFA726") : "#E5DDD5",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "white", fontSize: 11, fontWeight: 800, marginTop: 1,
                    }}>
                      {i < step ? "✓" : i + 1}
                    </div>
                    <div style={{ fontSize: 12, color: i === step ? "#2D1B0A" : "#A89888", lineHeight: 1.5, fontWeight: i === step ? 600 : 400 }}>
                      {s.length > 70 ? s.substring(0, 70) + "…" : s}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MEAL ROW ─────────────────────────────────────────────────────────────────

function MealRow({ emoji, label, time, name, cal, spike, done, onDone, onView, grad }) {
  const sp = SPIKE[spike] || SPIKE["low"];
  return (
    <div style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 12 }}>
      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 50, flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: "#B0A090", fontWeight: 700, marginBottom: 4, whiteSpace: "nowrap" }}>{time}</span>
        <div style={{ fontSize: 18 }}>{emoji}</div>
        <div style={{ flex: 1, width: 2, background: "linear-gradient(to bottom, #F0E8DC, transparent)", marginTop: 6 }} />
      </div>

      {/* Card */}
      <div style={{
        flex: 1, background: "#fff", borderRadius: 18, overflow: "hidden",
        boxShadow: "0 2px 16px rgba(180,100,20,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        border: "1px solid #F0EAE0",
      }}>
        {/* Gradient header */}
        <div style={{
          background: `linear-gradient(135deg, ${grad?.[0] || "#FFA726"}, ${grad?.[1] || "#E65100"})`,
          padding: "11px 14px", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
            <div style={{ fontSize: 15, color: "#fff", fontWeight: 800, lineHeight: 1.3, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 8 }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{cal}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>cal</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "9px 13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{
            fontSize: 11, background: sp.bg, color: sp.color,
            borderRadius: 10, padding: "3px 8px", fontWeight: 700,
          }}>
            {sp.dot} {sp.label} spike
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={onView}
              style={{ background: "#FFF3DE", color: "#B45309", border: "none", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
            >
              Recipe
            </button>
            <button
              onClick={onDone}
              style={{
                background: done ? "#22C55E" : "#F5F0EA",
                color: done ? "#fff" : "#A08060",
                border: done ? "none" : "1.5px solid #E0D8D0",
                borderRadius: 10, padding: "6px 10px", fontSize: 15, fontWeight: 800,
                cursor: "pointer", transition: "all 0.2s", minWidth: 36, textAlign: "center",
                boxShadow: done ? "0 2px 8px rgba(34,197,94,0.3)" : "none",
              }}
            >
              {done ? "✓" : "○"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TODAY VIEW ───────────────────────────────────────────────────────────────

function TodayView({ day, setDay, onView, done, onDone }) {
  const dayRef = useRef(null);

  useEffect(() => {
    if (dayRef.current) {
      const el = dayRef.current.querySelector(`[data-day="${day}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [day]);

  const ds = SCHED[day - 1] || SCHED[0];
  const wk = Math.ceil(day / 7);
  const wi = WEEK_INFO[wk - 1];
  const hour = new Date().getHours();

  let eatNowMsg = "";
  if      (hour >= 5  && hour < 8)  eatNowMsg = "🌅 Morning drink time! Start your day with your healing drink.";
  else if (hour >= 8  && hour < 10) eatNowMsg = "☀️ Breakfast time! Your morning fuel is waiting.";
  else if (hour >= 10 && hour < 12) eatNowMsg = "🍎 Mid-morning snack time! Keep energy levels steady.";
  else if (hour >= 12 && hour < 15) eatNowMsg = "🌞 Lunch time! Your biggest meal of the day.";
  else if (hour >= 15 && hour < 18) eatNowMsg = "🌤️ Evening snack time! A light, satisfying bite.";
  else if (hour >= 18 && hour < 20) eatNowMsg = "🌙 Dinner time! Light and early — before 7:30 PM!";

  const mealsDone = [`mw-${day}`, `b-${day}`, `l-${day}`, `dn-${day}`].filter((k) => done.has(k)).length;
  const bm  = MEALS[ds.b];
  const lm  = MEALS[ds.l];
  const dnm = MEALS[ds.dn];
  const mwd = MW[ds.mw];

  return (
    <div>
      {/* Hero Header */}
      <div style={{ background: "linear-gradient(145deg,#1A3C1A,#2D6A2D,#1E4A1E)", padding: "22px 16px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Your 30-Day Plan</div>
            <div style={{ fontSize: 30, color: "#fff", fontWeight: 900, letterSpacing: -1, lineHeight: 1.1, marginTop: 3 }}>
              Day {day}
              <span style={{ fontSize: 16, fontWeight: 500, color: "rgba(255,255,255,0.65)", marginLeft: 6 }}>of 30</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 30 }}>{wi?.e}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginTop: 2, fontWeight: 600 }}>{wi?.title}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 10, overflow: "hidden", height: 7, marginBottom: 12 }}>
          <div style={{
            height: "100%", borderRadius: 10,
            background: "linear-gradient(90deg,#F9C440,#FFAA00)",
            transition: "width 0.6s ease",
            width: `${((day - 1) / 29) * 100}%`,
            boxShadow: "0 0 8px rgba(249,196,64,0.6)",
          }} />
        </div>

        {/* Meal dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
            {mealsDone}/4 meals done today
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{
                width: 9, height: 9, borderRadius: "50%",
                background: i < mealsDone ? "#F9C440" : "rgba(255,255,255,0.25)",
                transition: "background 0.3s",
                boxShadow: i < mealsDone ? "0 0 6px rgba(249,196,64,0.7)" : "none",
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Day picker */}
      <div
        ref={dayRef}
        style={{ display: "flex", gap: 7, overflowX: "auto", padding: "12px 14px", background: "#fff", borderBottom: "1px solid #F0E8DC", scrollbarWidth: "none" }}
      >
        {SCHED.map(({ d }) => {
          const isToday = d === day;
          const wn = Math.ceil(d / 7);
          return (
            <div
              key={d}
              data-day={d}
              onClick={() => setDay(d)}
              style={{
                flexShrink: 0, width: 44, height: 56, borderRadius: 14,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                background: isToday ? "linear-gradient(140deg,#F9C440,#E65100)" : "#FAF8F4",
                border: isToday ? "none" : "1px solid #EDE8E2",
                transition: "all 0.2s",
                boxShadow: isToday ? "0 4px 14px rgba(230,101,0,0.4)" : "none",
                transform: isToday ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div style={{ fontSize: 9, color: isToday ? "rgba(255,255,255,0.8)" : "#B0A090", fontWeight: 700 }}>W{wn}</div>
              <div style={{ fontSize: 17, fontWeight: 900, color: isToday ? "#fff" : "#2D1B0A", lineHeight: 1 }}>{d}</div>
            </div>
          );
        })}
      </div>

      {/* Time-sensitive banner */}
      {eatNowMsg && (
        <div style={{
          margin: "12px 14px 0",
          background: "linear-gradient(135deg,#FFFDF0,#FFF8E0)",
          border: "1px solid #F5D78E",
          borderRadius: 14, padding: "11px 14px",
          fontSize: 13, color: "#7A500A", fontWeight: 600, lineHeight: 1.5,
        }}>
          {eatNowMsg}
        </div>
      )}

      {/* Meal timeline */}
      <div style={{ padding: "14px 14px 100px" }}>

        {/* Morning drink */}
        <div style={{
          background: "#fff", borderRadius: 18, padding: "14px", marginBottom: 12,
          border: "1px solid #F0EAE0",
          boxShadow: "0 2px 16px rgba(180,100,20,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: "#B0A090", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>
                6:30 AM · Morning Drink
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#2D1B0A", marginTop: 3, lineHeight: 1.3 }}>{mwd?.name}</div>
              <div style={{ fontSize: 12, color: "#7A6A5A", marginTop: 4, lineHeight: 1.4 }}>{mwd?.benefit}</div>
            </div>
            <div style={{ fontSize: 42, flexShrink: 0, marginLeft: 10 }}>{mwd?.emoji}</div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button
              onClick={() => onView(mwd)}
              style={{ flex: 1, background: "#FFF3DE", color: "#B45309", border: "none", borderRadius: 11, padding: "9px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
            >
              View Recipe
            </button>
            <button
              onClick={() => onDone(`mw-${day}`)}
              style={{
                background: done.has(`mw-${day}`) ? "#22C55E" : "#F5F0EA",
                color: done.has(`mw-${day}`) ? "#fff" : "#A08060",
                border: done.has(`mw-${day}`) ? "none" : "1.5px solid #E0D8D0",
                borderRadius: 11, padding: "9px 14px", fontSize: 16, fontWeight: 800,
                cursor: "pointer", minWidth: 44, textAlign: "center",
                transition: "all 0.2s",
                boxShadow: done.has(`mw-${day}`) ? "0 2px 8px rgba(34,197,94,0.3)" : "none",
              }}
            >
              {done.has(`mw-${day}`) ? "✓" : "○"}
            </button>
          </div>
        </div>

        {/* Black Coffee */}
        <div style={{
          background: "#EEF3FF", borderRadius: 14, padding: "11px 14px", marginBottom: 12,
          border: "1px solid #C7D7FD", display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ fontSize: 30 }}>☕</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#1E40AF", letterSpacing: 0.2 }}>7:00 AM · Black Coffee</div>
            <div style={{ fontSize: 12, color: "#3B82F6", marginTop: 2, lineHeight: 1.4 }}>
              Plain black coffee, no sugar no milk. Proven liver protector.
            </div>
          </div>
        </div>

        <MealRow
          emoji="🌅" label="Breakfast · 8:00 AM" time="8 AM"
          name={bm?.n} cal={bm?.c} spike={bm?.s}
          done={done.has(`b-${day}`)} onDone={() => onDone(`b-${day}`)}
          onView={() => onView(bm)} grad={bm ? [bm.g1, bm.g2] : null}
        />

        {/* Mid-morning snack */}
        <div style={{
          background: "#F0FDF4", borderRadius: 14, padding: "11px 14px", marginBottom: 12,
          border: "1px solid #86EFAC", display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ fontSize: 26 }}>{MS_DATA[ds.s]?.e}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: "#15803D", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>10:30 AM · Mid-Morning Snack</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#166534", marginTop: 2 }}>{MS_DATA[ds.s]?.n}</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 900, color: "#16A34A" }}>{MS_DATA[ds.s]?.c}<br /><span style={{ fontSize: 10, fontWeight: 500 }}>cal</span></div>
        </div>

        <MealRow
          emoji="☀️" label="Lunch · 1:00 PM" time="1 PM"
          name={lm?.n} cal={lm?.c} spike={lm?.s}
          done={done.has(`l-${day}`)} onDone={() => onDone(`l-${day}`)}
          onView={() => onView(lm)} grad={lm ? [lm.g1, lm.g2] : null}
        />

        {/* Evening snack */}
        <div style={{
          background: "#FFFBF0", borderRadius: 14, padding: "11px 14px", marginBottom: 12,
          border: "1px solid #F5D78E", display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ fontSize: 26 }}>{EV_DATA[ds.ev]?.e}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: "#B45309", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>5:00 PM · Evening Snack</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginTop: 2 }}>{EV_DATA[ds.ev]?.n}</div>
            <div style={{ fontSize: 11, color: "#B0A090", marginTop: 2, lineHeight: 1.4 }}>{EV_DATA[ds.ev]?.d}</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 900, color: "#B45309", flexShrink: 0 }}>{EV_DATA[ds.ev]?.c}<br /><span style={{ fontSize: 10, fontWeight: 500 }}>cal</span></div>
        </div>

        <MealRow
          emoji="🌙" label="Dinner · Before 7:30 PM" time="7 PM"
          name={dnm?.n} cal={dnm?.c} spike={dnm?.s}
          done={done.has(`dn-${day}`)} onDone={() => onDone(`dn-${day}`)}
          onView={() => onView(dnm)} grad={dnm ? [dnm.g1, dnm.g2] : null}
        />

        {/* Daily reminders */}
        <div style={{
          marginTop: 4, padding: "12px 14px", background: "#FFFBF0",
          borderRadius: 14, border: "1px solid #F5D78E",
          display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap",
        }}>
          {["🚶 Walk 20–30 min after lunch", "💧 2.5L water today", "🚫 Nothing after 8 PM"].map((r, i) => (
            <span key={i} style={{ fontSize: 12, color: "#7A500A", fontWeight: 600, background: "rgba(249,196,64,0.2)", borderRadius: 8, padding: "3px 8px" }}>
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CALENDAR VIEW ────────────────────────────────────────────────────────────

function CalendarView({ day, setDay }) {
  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28, 29, 30],
  ];
  const wColors = [
    "linear-gradient(135deg,#2E7D32,#1B5E20)",
    "linear-gradient(135deg,#1565C0,#0D47A1)",
    "linear-gradient(135deg,#E65100,#BF360C)",
    "linear-gradient(135deg,#6A1B9A,#4A148C)",
  ];
  return (
    <div style={{ padding: "20px 14px 100px" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 900, color: "#2D1B0A", letterSpacing: -0.5 }}>30-Day Calendar</div>
        <div style={{ fontSize: 13, color: "#B0A090", marginTop: 3 }}>Tap any day to jump to that day's plan</div>
      </div>
      {weeks.map((wk, wi) => (
        <div key={wi} style={{ marginBottom: 16, borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <div style={{ background: wColors[wi], padding: "12px 16px" }}>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>Week {wi + 1}</div>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 800, marginTop: 2 }}>
              {WEEK_INFO[wi]?.e} {WEEK_INFO[wi]?.title}
            </div>
          </div>
          <div style={{
            background: "#fff", padding: "12px",
            display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 7,
          }}>
            {wk.map((d) => (
              <div
                key={d}
                onClick={() => setDay(d)}
                style={{
                  aspectRatio: "1", borderRadius: 12, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                  background: d === day ? "linear-gradient(135deg,#F9C440,#E65100)" : "#FAF8F4",
                  border: d === day ? "none" : "1px solid #EDE8E2",
                  boxShadow: d === day ? "0 4px 12px rgba(230,101,0,0.35)" : "none",
                  transition: "all 0.2s",
                  transform: d === day ? "scale(1.05)" : "scale(1)",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 900, color: d === day ? "#fff" : "#2D1B0A", lineHeight: 1 }}>{d}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "#FFFBF0", padding: "9px 16px", borderTop: "1px solid #F0E8DC" }}>
            <div style={{ fontSize: 12, color: "#7A500A", fontWeight: 500 }}>{WEEK_INFO[wi]?.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── SNACKS VIEW ──────────────────────────────────────────────────────────────

function SnacksView({ onView }) {
  const [tab, setTab] = useState("crunchy");
  const crunchy = Object.entries(SNACKS_DATA).filter(([, v]) => v.type === "crunchy");
  const treats  = Object.entries(SNACKS_DATA).filter(([, v]) => v.type === "treat");
  const items = tab === "crunchy" ? crunchy : treats;

  return (
    <div style={{ padding: "20px 14px 100px" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 24, fontWeight: 900, color: "#2D1B0A", letterSpacing: -0.5 }}>Snacks & Treats</div>
        <div style={{ fontSize: 13, color: "#B0A090", marginTop: 3 }}>Healthy crunch + occasional joy</div>
      </div>

      {/* Tab switcher */}
      <div style={{ display: "flex", background: "#F5F0EA", borderRadius: 14, padding: 4, marginBottom: 16 }}>
        {[["crunchy", "🍿 Crunchy Picks"], ["treat", "🎁 Tasty Treats"]].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            style={{
              flex: 1, padding: "10px 8px", border: "none", borderRadius: 11,
              background: tab === k ? "#fff" : "transparent",
              fontSize: 13, fontWeight: 700, cursor: "pointer",
              color: tab === k ? "#E65100" : "#B0A090",
              boxShadow: tab === k ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
              transition: "all 0.2s",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "crunchy" && (
        <div style={{ background: "#FFF3DE", border: "1px solid #F5D78E", borderRadius: 12, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "#7A500A", lineHeight: 1.5 }}>
          ⚠️ Portion control is key! These slots are 10:30 AM or 4–5 PM only.
        </div>
      )}
      {tab === "treat" && (
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 12, padding: "10px 14px", marginBottom: 14, fontSize: 13, color: "#1E40AF", lineHeight: 1.5 }}>
          ⭐ Occasional rewards — enjoy mindfully. They're earned!
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map(([k, s]) => (
          <div key={k} style={{
            background: "#fff", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 4px 20px rgba(180,100,20,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid #F0EAE0",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${s.g1}, ${s.g2})`,
              padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            }}>
              <div>
                <div style={{ fontSize: 44, lineHeight: 1, marginBottom: 8 }}>{s.e}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{s.n}</div>
                {s.freq && (
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>📅 {s.freq}</div>
                )}
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.c}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>calories</div>
                {s.crunch > 0 && (
                  <div style={{ marginTop: 8, display: "flex", gap: 3, justifyContent: "flex-end", alignItems: "center" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} style={{ width: 5, height: i <= s.crunch ? 14 : 8, borderRadius: 3, background: i <= s.crunch ? "#fff" : "rgba(255,255,255,0.3)", transition: "height 0.2s" }} />
                    ))}
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", marginLeft: 3, fontWeight: 700 }}>crunch</div>
                  </div>
                )}
              </div>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 13, color: "#6B5E54", lineHeight: 1.55, marginBottom: 10 }}>{s.why}</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }}>
                {s.tags.map((t, i) => (
                  <span key={i} style={{ background: "#FFF3DE", color: "#B45309", borderRadius: 10, padding: "3px 9px", fontSize: 11, fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onView(s)}
                style={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${s.g1}, ${s.g2})`,
                  color: "white", border: "none", borderRadius: 13,
                  padding: "12px", fontSize: 14, fontWeight: 800, cursor: "pointer",
                  boxShadow: `0 4px 14px ${s.g2}44`,
                }}
              >
                ⏱ {s.time} · View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MORNING VIEW ─────────────────────────────────────────────────────────────

function MorningView({ onView }) {
  return (
    <div style={{ padding: "20px 14px 100px" }}>
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 24, fontWeight: 900, color: "#2D1B0A", letterSpacing: -0.5 }}>Morning Ritual</div>
        <div style={{ fontSize: 13, color: "#B0A090", marginTop: 3 }}>Start every day with these powerful drinks</div>
      </div>

      {/* Black Coffee card */}
      <div style={{
        background: "linear-gradient(140deg,#1A2A1A,#2E6A2E)",
        borderRadius: 20, padding: "18px", marginBottom: 16, marginTop: 16,
        boxShadow: "0 6px 24px rgba(30,60,30,0.3)",
      }}>
        <div style={{ fontSize: 38, marginBottom: 8 }}>☕</div>
        <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Black Coffee · Daily</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>
          Plain black coffee (no sugar, no milk) at 7:00 AM. Harvard research: 2+ cups/day reduces liver cirrhosis risk by 44%. Natural appetite suppressant + fat burner.
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          {[["Max 2", "cups/day"], ["~5", "calories"], ["0", "glucose spike"]].map(([val, lbl]) => (
            <div key={lbl} style={{ flex: 1, background: "rgba(255,255,255,0.14)", borderRadius: 12, padding: "9px", textAlign: "center" }}>
              <div style={{ color: "#F9C440", fontSize: 16, fontWeight: 900 }}>{val}</div>
              <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginTop: 2 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sequence guide */}
      <div style={{ fontSize: 13, color: "#7A500A", fontWeight: 700, marginBottom: 16, padding: "10px 13px", background: "#FFF3DE", borderRadius: 12, border: "1px solid #F5D78E" }}>
        ⏱ Sequence: Morning Drink → 15 min → Black Coffee → 30 min → Breakfast
      </div>

      {/* Drink cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {Object.entries(MW).map(([k, mw]) => (
          <div key={k} style={{
            background: "#fff", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 4px 20px rgba(180,100,20,0.10), 0 1px 4px rgba(0,0,0,0.06)",
            border: "1px solid #F0EAE0",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${mw.g1}, ${mw.g2})`,
              padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 46, lineHeight: 1, marginBottom: 8 }}>{mw.emoji}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>{mw.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", marginTop: 5, lineHeight: 1.45 }}>{mw.benefit}</div>
              </div>
              <div style={{ flexShrink: 0, textAlign: "right", marginLeft: 12 }}>
                <div style={{ background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>{mw.time}</div>
                <div style={{ marginTop: 6, background: "rgba(255,255,255,0.22)", color: "#fff", borderRadius: 20, padding: "4px 10px", fontSize: 12, fontWeight: 700 }}>{mw.cal} cal</div>
              </div>
            </div>
            <div style={{ padding: "12px 16px 14px" }}>
              <div style={{ fontSize: 12, color: "#7A500A", background: "#FFFBF0", borderRadius: 10, padding: "8px 11px", marginBottom: 12, lineHeight: 1.5, display: "flex", gap: 6 }}>
                <span>💡</span><span>{mw.note}</span>
              </div>
              <button
                onClick={() => onView(mw)}
                style={{
                  width: "100%",
                  background: `linear-gradient(135deg, ${mw.g1}, ${mw.g2})`,
                  color: "white", border: "none", borderRadius: 13,
                  padding: "12px", fontSize: 14, fontWeight: 800, cursor: "pointer",
                  boxShadow: `0 4px 14px ${mw.g2}44`,
                }}
              >
                View Recipe & Steps
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const initialState = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  })();

  const [view, setView]     = useState(initialState?.view || "today");
  const [day, setDay]       = useState(initialState?.day  || 1);
  const [recipe, setRecipe] = useState(null);
  const [done, setDone]     = useState(() => new Set(initialState?.done || []));

  const navItems = [
    { k: "today",    e: "📅", l: "Today"    },
    { k: "calendar", e: "🗓️", l: "Calendar" },
    { k: "snacks",   e: "🍿", l: "Snacks"   },
    { k: "morning",  e: "🌅", l: "Morning"  },
  ];

  const toggleDone = (key) => {
    setDone((prev) => {
      const n = new Set(prev);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });
  };

  const handleSetDay = (d) => {
    setDay(Math.min(Math.max(d, 1), SCHED.length));
    setView("today");
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ day, view, done: [...done] }));
    } catch {}
  }, [day, view, done]);

  return (
    <div className="app-root">
      {recipe && <RecipeModal key={recipe.n || recipe.name} item={recipe} onClose={() => setRecipe(null)} />}

      <div className="scroll-area">
        {view === "today"    && <TodayView    day={day} setDay={handleSetDay} onView={setRecipe} done={done} onDone={toggleDone} />}
        {view === "calendar" && <CalendarView day={day} setDay={handleSetDay} />}
        {view === "snacks"   && <SnacksView   onView={setRecipe} />}
        {view === "morning"  && <MorningView  onView={setRecipe} />}
      </div>

      <div className="bottom-nav">
        {navItems.map(({ k, e, l }) => (
          <button
            key={k}
            onClick={() => setView(k)}
            aria-label={l}
            aria-pressed={view === k}
            className="nav-button"
          >
            <div style={{ fontSize: view === k ? 22 : 20, transition: "all 0.2s", transform: view === k ? "scale(1.15)" : "scale(1)" }}>
              {e}
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: view === k ? "#E65100" : "#B0A090", letterSpacing: 0.3 }}>
              {l}
            </div>
            {view === k && (
              <div style={{ width: 20, height: 3, background: "#E65100", borderRadius: 2, marginTop: 2 }} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
