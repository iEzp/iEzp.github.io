const w = ["apple", "ant", "a", "an", "alt", "am", "a.m.", "art", "artist", "ammo", "amazing", "ace", "as", "at", "are", "ambient", "alert", "around", "apex", "among", "arm", "arms", "ate", "axe", "age", "ants", "apples",
    "basic", "back", "bat", "born", "bit", "bad", "bow", "bread", "brave", "big", "beam", "beaf", "beat", "bet", "bag", "bags", "brought", "bought", "buy", "bin", "book", "best", "bug", "bugs", "books", "bring",
    "call", "came", "come", "comes", "can", "canned", "cat", "chat", "chime", "chest", "chestplate", "cent", "century", "cold", "calm", "carry", "carries", "car", "cars", "cinema", "cinematic", "cobweb", "cod", "cow", "child", "children", "corn",
    "duck", "dock", "desk", "doll", "desks", "dell", "dust", "daddy", "dad", "dang", "demon", "demons", "disc", "dog", "dogs", "dirt", "door", "dole", "dope", "dye", "doors", "dolls",
    "eat", "east", "em", "english", "elephant", "eats", "essay", "essays", "effect", "effects", "education", "educations", "edition", "either", "each",
    "fake", "felt", "feel", "fill", "feels", "fan", "fun", "famous", "full", "fart", "fall", "falls", "fail", "fails", "failure", "failed", "fast", "fruit", "funk", "fans", "fire", "fox", "foxes",
    "game", "games", "gem", "gems", "guy", "ghost", "gift", "got", "get", "gets", "german", "germany", "gang", "george", "goat", 
    "hit", "hits", "hop", "hopping", "hitting", "hippo", "hello", "hale", "hole", "host", "hostname", "hell", "hells", "hold", "holds", "hey", "hay", "he", "him", "his", "he's", "her", "hers",
    "i", "is", "if", "it", "it's", "israel", "i'm", "i've", "i'd", "its", "ingot", "ingots", "i'll", "ice", "ices", "iced", 
    "japan", "james", "jake", "jam", "jack", "jail", "joy", "job", "jobs", "june", "july", "just", 
    "kelp", "keep", "kit", "kine", "key", "keys", "koala", "kind", "kinda", 
    "lame", "lingo", "lesson", "lessons", "learn", "learns", "learned", "less", "long", "lost", "lose", 
    "mine", "my", "may", "maybe", "mask", "male", "mag", "mac", "mlit", "mesa", "met", "meet", "meat", "mice",
    "nose", "none", "no", "neon", "nice", "neck", 
    "orange", "oranges", "one", "once", "ones", "only", "oscar", "oink", "online", "on", "off", "offline", "ok", "okay", 
    "pause", "paused", "pull", "push", "pass", "passport", "passes", "party", "partying", "parties", "per", "post", "posts", "paste", "pasted", "paper", "papers", "pane", "plane", "planes", "phone", "pill", "pong", "ping", "pig", "pigs", "pole", "pool", "poor", "pink", "p.m.", "physical", "physics", "pronounce", "pro", "perfect", "p.e.", "punk", "potion",
    "quest",  "quests", "quit", "quote", "quotes", "quick", "quickly", "quake", 
    "star", "stars", "start", "started", "starts", "steal", "stole", "stem", "stay", "stick", "starve", "stayed", "slain", "swap", "sword", "sang", "sand", "sing", "song", "summer", "sure", "sun", "sunny", "sunday", "saturday", "sync", "sine", "shine", "sink", "shrink", "shame", "ship", "ship", "sit", "shop", "shard", "sherd", "she", "she's",
    "task", "tasks", "tas", "time", "timed", "tube", "timing", "times", "tone", "talk", "told", "tell", "tall", "tempo", "tennis", "table", "template", "templates", "three", "tree", "tic", "tac", "toe", "to", "too", "two", "top", "toy", "thing", "think", "thinks", "thought", "thank", "thanked", "thanks", "theme", "the", "tale", "take", "took", "till", "test", "tame", "tamed", 
    "umbrella", "university", "universe", "unit", "usa", "us", "utilities", "unstopped", "undo", "undefined", "undefine", 
    "version", "var", "versions", 
    "war", "were", "where", "who", "what", "when", "wait", "waiting", "west", "well", "wall", "warm", "warn", "ware", "worm", "wake", "woke", "why", 
    "xylophone", "xenom",
    "yacht", "yellow", "yet", "yes", "yeah", "ye", "ya", "you", "y'all", "your", "yours", "young", "yup", "yep", 
    "zoo", "zack", "zone", "zero", "zeroes", "zones"];

const wc = w.length;
var tn = 60;
// ranbdominede " Math.floor(Math.random() * wc) - 1; "
addEventListener("keydown", y);

function y(e) {
    c = e.code;
    k = e.key;
    if (c === "Space") {
        s();
    }
}

function s() {
    tn = 60;
    t = setInterval()
}

function j() {
    st = w[Math.floor(Math.random() * wc) - 1]
    document.getElementById("st").textContent = st;
}