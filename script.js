function saveProgress() {
  localStorage.setItem("discoveredInUnit", JSON.stringify(discoveredInUnit));
  localStorage.setItem("lastUnit", unit);
}

function loadProgress() {
  const savedUnits = localStorage.getItem("discoveredInUnit");
  if (savedUnits) {
    discoveredInUnit = JSON.parse(savedUnits);
  }

  const savedUnit = localStorage.getItem("lastUnit");
  if (savedUnit !== null) {
    unit = parseInt(savedUnit);
  }
}


// const video = document.getElementById("introVideo");
// const wrapper = document.getElementById("videoWrapper");

// function runWipe() {
//   if (!video._wipeRun) {
//     video._wipeRun = true; // prevent double-calls
//     twoPhaseWipe(
//       () => {
//         video.pause();
//         wrapper.remove();
//       },
//       () => {
//         console.log("Transition complete.");
//       }
//     );
//   }
// }

// video.addEventListener("loadedmetadata", () => {
//   const triggerTime = (video.duration - 2) * 1000;

//   setTimeout(() => {
//     runWipe();  // run early wipe (before video ends)
//   }, triggerTime);
// });

// video.addEventListener("ended", runWipe);  // fallback: trigger when video ends


// const skipButton = document.getElementById("skipButton");

// video.addEventListener("loadedmetadata", () => {
//   // Show skip button 3 seconds in
//   setTimeout(() => {
//     skipButton.style.display = "block";
//   }, 3000);
// });

// // When skip is clicked, trigger the wipe early
// skipButton.addEventListener("click", () => {
//   if (!video._wipeRun) {
//     video._wipeRun = true;
//     twoPhaseWipe(
//       () => {
//         video.pause();
//         wrapper.remove();
//       },
//       () => {
//         console.log("Skipped and transitioned.");
//       }
//     );
//   }
// });





let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let playArea = document.getElementById("playArea");
playArea.style.width = windowWidth * 0.65 + "px";
console.log("play", parseFloat(window.getComputedStyle(playArea).getPropertyValue("border-right-width")))
playArea.style.height = windowHeight * 1 + "px";

let overlayLayer = document.getElementById("overlayLayer");
overlayLayer.style.width = windowWidth * 1 + "px";
overlayLayer.style.height = windowHeight * 1 + "px";

last_success = ""
last_element_success = ""

let sideSection = document.getElementById("sideSection");
sideSection.style.width = windowWidth * 0.35 + "px";
console.log("important", parseInt(sideSection.style.left));
sideSection.style.height = windowHeight * 1 + "px";
sideSection.style.border = "black";

let three_buttons_section = parseInt(sideSection.style.width)/22
let three_buttons_width = three_buttons_section*6

let three_buttons_height = parseInt(sideSection.style.height)/13
let three_buttons_top = (windowHeight*0.59) +"px";
console.log(windowHeight);

backgroundNumber = 7;
backgroundC = ["#848871", "#e0829d", "#86b9b0", "#4fa5d8", "#ffdf7c", "#9389bd", "#bed4e9", "#ffddba","#ffbaba"]
backgroundC2 = ["#464b37", "#8f5774", "#4c7273", "#0855b1", "#feb640", "#5e4d9b", "#3373b0", "#d9ae8e","#ff7b7b"]
document.body.style.backgroundColor = backgroundC[backgroundNumber];


let playW = parseFloat(playArea.style.width);



let cloud= document.getElementById("cloud");
cloud.style.width  = playW * 0.3 + "px";
cloud.style.width  = 0 + "px";
cloud.style.height = "auto";
// logo.style.height = playW * ((0.20/3*2)) + "px";
cloud.style.top = 0 - (windowHeight * 0.01) + 'px';
cloud.style.left = parseInt(sideSection.style.width) - (windowWidth * 0.01) + 'px'


let mounta2= document.getElementById("mounta2");
mounta2.style.width  = playW * 0.4   + "px";
mounta2.style.height = "auto";
// logo.style.height = playW * ((0.20/3*2)) + "px";
// mounta2.style.top = 0 - (windowHeight * 0.01) + 500+'px';
// mounta2.style.left = parseInt(sideSection.style.width) + (windowWidth * 0.01) +200+ 'px'
mounta2.style.top =   0 + (windowHeight * 0.55)+'px';
mounta2.style.left = parseInt(sideSection.style.width) + (windowWidth * 0.14)+ 'px';
mounta2.style.position = 'absolute';  // clip only works on positioned elements
mounta2.style.pointerEvents = "none";
// clip: rect( top, right, bottom, left )

function cutter() {
  try {
    let cutX = parseInt(playArea.style.width);
    
    console.log(cutX);
    innerCutter(mounta2,cutX);
  } catch (err){
    console.log("nope")
  }
}

function innerCutter(element, cutX) {
  cutX -= parseInt(element.style.left);
  cutX -= parseFloat(window.getComputedStyle(playArea).getPropertyValue("border-right-width"))
  element.style.clip = `rect(0px, ${cutX}px, ${element.clientHeight}px, 0px)`
}

let mounta3= document.getElementById("mounta4");
mounta3.style.width  = playW * 0.45 + "px";
mounta3.style.height = "auto";
// logo.style.height = playW * ((0.20/3*2)) + "px";
mounta3.style.top = 0 + (windowHeight * 0.42) +'px';
mounta3.style.left = parseInt(sideSection.style.width) - (windowWidth * 0.487) + 'px'
mounta3.style.pointerEvents = "none";

let mounta5= document.getElementById("mounta5");
// mounta5.style.width  = playW * 0.2 + "px";
mounta5.style.width = 1+"px";
mounta5.style.height = "auto";
// logo.style.height = playW * ((0.20/3*2)) + "px";
mounta5.style.top = 0 + (windowHeight * 0.8) +'px';
mounta5.style.left = parseInt(sideSection.style.width) - (windowWidth * 0.03) + 'px'
mounta5.style.pointerEvents = "none";

let percent = parseInt(playArea.style.width);
let new_button_scale = 4;

let button_scale = (1/21)
let BUTTON_WIDTH = parseInt(sideSection.style.width)*button_scale*new_button_scale;
let BUTTON_HEIGHT = BUTTON_WIDTH;

let first_time = [true,true,true,true,true,true,true,true];

let allCharacters = {};
let discoveredCharacters = {};
const btn_list = [
  "mu","bing","shui","huo","shan","shi","tian","ri","yue","qing","bai","yu",
  "lin","bing_two","xue","yan","yan_two","guo","ming","qing_two","quan",
  "ren","yan_three","nu","zi","shou","mu_two","kou","wei","ge","zhi",
  "xiu","xin","cong","hao","kan","wei_three","wu","wo","jian","you",
  "mian","guang","hu","fang","men","wei","tu","jin","che","fu",
  "an","chuang","fang_two","jian_two","qiu","kun","fang_three","zhen","ku",
  "cao","he","mi","dou","cao_two","miao","cai","qiu_two","li_two","shu",
  "dao","bi","gong","mao","ji","gong_two","fang_five","you_two","ba","jin_two","gong_three",
  "chi","nu_three","ji_two","kang","fa","jiang","shou_two","fen","bing_three",
  "you_three","yang","qi","shi","you_four","jiu","qi_two","tang","you_five","zhi_four",
  "chao","kao",
  "xin_two","xin_three","dao_two","jin_three","wang","fei","xiang","gen","ji_three",
  "bao","ding","xi","ren_two","zhi_three","nian","wang_two","pa","bei",
  "xiang_two","hen","ji_four","bao_two","da","shu_two","duo","shuang",
  "yi","cun","zao","da","jie","shi_three","lei","dong","peng"
];

let btn_freq_list = Array(btn_list.length).fill(0);
let interactible_stuff = [];
let btn_state = []
let image_thing_on = false;
let page_number = 0;
let num_pages = 1;
let current = [];
let discovery_undiscovered = [];
let display = [];
let discovered = [];

let radicals_loaded = false;
let characters_loaded = false;

let unit_undiscovered = [["lin", "bing_two", "xue", "yan", "yan_two", "guo", "ming", "qing_two", "quan"], ["xiu", "xin", "cong", "hao", "kan", "wei_three", "wu", "wo", "jian", "you"], ["an","chuang","fang_two","jian_two","qiu","kun","fang_three","zhen","ku"], ["cao_two","miao","cai","lin","guo","qiu_two","li_two","shu","yan"], ["diao","chi","nu_three","ji_two","kang","fa","jiang","shou_two","fen","bing_three"], ["jiu","qi_two","tang","chi","cai","you_five","zhi_four","chao","kao"], ["ren_two","zhi_three","nian","wang_two","pa","bei","xiang_two","hen","ji_four","bao_two","da","shu_two","duo","shuang","fen"], ["ming","zao","da","jie","shi_three","bing_two","lei","dong","yan","peng"] ]
// track discoveries separately
const unitTotals = unit_undiscovered.map(u => u.length);
``
let num_discovered = document.getElementById("num_discovered");
let num_undiscovered = document.getElementById("num_undiscovered");
let undiscovered = discovery_undiscovered

// What starts in the units
let the_unit_content = [["mu", "bing", "shui", "huo", "shan", "shi", "tian", "ri", "yue", "qing", "bai", "yu"], ["ren", "yan_three", "mu","nu", "zi", "shou", "mu_two", "kou", "wei", "ge", "zhi"], ["mian","nu","guang","mu","hu","fang","men","ri","wei","ren","tu","jin","che","fu"], ["cao","tian","mu","he","mi","dou","shui","huo"], ["dao","bi","gong","mao","mu","ji","gong_two","fang_five","shou","ren","ge","he","you_two","ba","jin_two","gong_three"], ["shui","you_three","yang","qi","fang_five","bi","cao","huo","shi","you_four"], ["xin_two","xin_three","shou","kou","dao","zhi","jin_three","wang","bai","fei","xiang","gen","ji_three","bao","ding","xi","you_two","ba"], ["ri","yue","shi","yi","cun","tian","bing","shui","yu","huo","xi"] ]
let unit_content = [];
let per_page = 20;
let mode = "Journey";
let num_units = 8;

let discoveredInUnit = Array(num_units).fill(0).map(() => []);
let unit_completed_frq = Array(num_units).fill(0);
for (let i =0;i<num_units;i++) {
  unit_completed_frq[i] = unit_undiscovered[i].length;
}
console.log("unit completion table", unit_completed_frq);
let unit = 0;

let ety_mode = false;

let shiftIsDown = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    shiftIsDown = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    shiftIsDown = false;
  }
});

let page_button_span = document.createElement('span');
page_button_span.textContent = "hi";
const page_button = document.createElement("button");
page_button.innerText = "";
page_button.onclick = handlePage;3
document.getElementById("overlayLayer").appendChild(page_button);
page_button.style.position = "absolute";
page_button.style.top = parseInt(three_buttons_top)*1.02+three_buttons_height+"px";
page_button.style.left = parseInt(playArea.style.width)+three_buttons_section+"px";
page_button.style.width = parseInt(sideSection.style.width)-(2*three_buttons_section)+"px";
page_button.style.height = (parseInt(sideSection.style.height)*0.06)+"px";
page_button.textContent = "";
page_button.style.fontSize = "25px";
page_button.appendChild(page_button_span);
page_button.style.border = "4px solid rgb(0,0,0)";
page_button.classList.add("unit-button");

page_button.style.fontFamily = "Caveat Brush";

page_button.style.borderRadius = "5px"
page_button.style.backgroundColor = "white";
const ety_zone = document.getElementById("etyZone");
ety_zone.style.top = parseInt(page_button.style.bottom)+"px";
ety_zone.style.height = windowHeight-parseInt(ety_zone.style.top)+"px"
ety_zone.style.left = "0px";
ety_zone.style.width = parseInt(sideSection.style.width)+"px";

// const img = document.createElement("img");
//   img.src           = "Images/ety_section_background.jpg";
//   img.draggable     = false;
//   console.log("THING", ety_zone.style.width)
//   img.style.width   = parseInt(ety_zone.style.width)+"px";
//   img.style.height  = "100%";
//   img.style.objectFit = "cover";
//   img.style.display = "block";
//   // Prevent the <img> stealing pointer events
//   img.style.pointerEvents = "none";
//   ety_zone.appendChild(img);

ety_zone.style.left = "65vw";

function addCenteredText(wrapperId, text) {
  const wrapper = document.getElementById(wrapperId);
  // remove any existing overlay
  // create and append the text div
  const overlay = document.createElement('div');
  overlay.className = 'overlay‐text';
  overlay.textContent = text;
  wrapper.appendChild(overlay);
}

// usage
// addCenteredText('etyZone', 'Hello, world!');

const gpt_button = document.createElement("button");
gpt_button.innerText = "image";
gpt_button.onclick = () => switchModes("gpt");
document.getElementById("overlayLayer").appendChild(gpt_button);
gpt_button.style.position = "absolute";
gpt_button.style.top = three_buttons_top;
gpt_button.style.left = parseInt(playArea.style.width)+(2*three_buttons_width)+(3*three_buttons_section)+"px";
gpt_button.style.width = three_buttons_width+"px";
gpt_button.style.height = three_buttons_height+"px";

gpt_button.style.fontSize = "25px";
gpt_button.style.fontFamily = "Arial, Helvetica, sans-serif";
gpt_button.style.fontWeight = "400"
gpt_button.style.borderRadius = "5px"
gpt_button.style.backgroundColor = "white";
gpt_button.style.border = "4px solid rgb(0,0,0)";
gpt_button.style.fontFamily = "Caveat Brush";
gpt_button.classList.add("unit-button");

const symbol_button = document.createElement("button");
symbol_button.innerText = "symbol";
symbol_button.onclick = () => switchModes("symbol");
document.getElementById("overlayLayer").appendChild(symbol_button);
symbol_button.style.position = "absolute";
symbol_button.style.top = three_buttons_top;
symbol_button.style.left = parseInt(playArea.style.width)+three_buttons_width+(2*three_buttons_section)+"px";
symbol_button.style.width = three_buttons_width+"px";
symbol_button.style.height = three_buttons_height+"px";
symbol_button.style.fontSize = "25px";
symbol_button.style.borderRadius = "5px"
symbol_button.style.backgroundColor = "white";
symbol_button.style.border = "4px solid rgb(0,0,0)";
symbol_button.style.fontFamily = "Caveat Brush";
symbol_button.classList.add("unit-button");

const character_button = document.createElement("button");
character_button.innerText = "character";
character_button.onclick = () => switchModes("character");
document.getElementById("overlayLayer").appendChild(character_button);
character_button.style.position = "absolute";
character_button.style.top = three_buttons_top;
character_button.style.left = parseInt(playArea.style.width)+(1*three_buttons_section)+"px";
character_button.style.width = three_buttons_width+"px";
character_button.style.height =three_buttons_height+"px";
character_button.style.fontSize = "25px";
character_button.style.borderRadius = "5px"
character_button.style.backgroundColor = "white";
character_button.style.border = "4px solid rgb(0,0,0)";

character_button.style.fontFamily = "Caveat Brush";
character_button.classList.add("unit-button");

current_mode = "character"
function switchModes(mode) {
  console.log("hello")
  // Loop over every interactive button
  interactible_stuff.forEach(btn => {
    const [img, img2, img3] = btn.querySelectorAll("img");

    // Hide all by default
    img.style.display  = "none";
    img2.style.display = "none";
    img3.style.display = "none";

    // Un-hide the one for this mode
    if (mode === "character")       img.style.display  = "inline";
    else if (mode === "symbol")   img2.style.display = "inline";
    else if (mode === "gpt") img3.style.display = "inline";
    current_mode = mode;
  });
}

const textBox = document.createElement("input");
textBox.addEventListener("input", displaySearch);
textBox.type = "text";
textBox.placeholder = "Search () items...";
textBox.id = "search_box";
textBox.style.position = "absolute";
textBox.style.left = "1250px";
textBox.style.top = "600px";
textBox.style.width = "200px";
textBox.style.height = "30px";
textBox.style.display = "none";
document.getElementById("overlayLayer").appendChild(textBox);

const mode_span = document.createElement('span');
mode_span.innerText = 'Discovery';

let icon_button_width = windowHeight*0.1;
let icon_button_gap = windowHeight*0.02
const unit_span = document.createElement('span');
unit_span.innerText = '';
const mode_button = document.createElement("button");
mode_button.onclick = e => {
  mode_button.disabled = true;
  // get the center coords of the button
  const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top  + rect.height/2;

  twoPhaseWipe(
    // buildUI: switch back to home
    () => {
      flipMode();
    },
    // onDone: re-enable
    () => {
      mode_button.disabled = false;
    },
    cx, cy
  );
};

document.getElementById("overlayLayer").appendChild(mode_button);


function wipeUpAndContinue(buildUI, onDone, wipeDuration = 400, travelDuration = 400) {
  const bar = document.createElement("div");
  Object.assign(bar.style, {
    position:        "fixed",
    bottom:          "0",
    left:            "0",
    width:           "100vw",
    height:          "100vh",
    backgroundColor: backgroundC2[backgroundNumber],
    transform:       "scaleY(0)",
    transformOrigin: "0% 100%", // grow from bottom
    pointerEvents:   "none",
    zIndex:          "999999",
    transition:      `transform ${wipeDuration}ms cubic-bezier(.42,0,.58,1)`,
  });
  document.body.appendChild(bar);

  // Step 1: Wipe up
  requestAnimationFrame(() => {
    bar.style.transform = "scaleY(1)";
  });

  bar.addEventListener("transitionend", function onWipeUp(evt) {
    if (evt.propertyName !== "transform") return;
    bar.removeEventListener("transitionend", onWipeUp);

    // Step 2: Build UI beneath
    buildUI();

    // Step 3: Slide bar upward off-screen
    Object.assign(bar.style, {
      transition: `transform ${travelDuration}ms ease-in-out`,
      transform: "translateY(-100vh)"
    });

    bar.addEventListener("transitionend", function onSlideAway(evt2) {
      if (evt2.propertyName !== "transform") return;
      bar.removeEventListener("transitionend", onSlideAway);
      bar.remove();
      if (onDone) onDone();
    });
  });
}



const size = window.innerHeight * 0.1;
mode_button.style.position    = "absolute";
mode_button.style.top         = `${window.innerHeight * 0.02}px`;
mode_button.style.left        = `${window.innerHeight * 0.02}px`;
mode_button.style.width       = `${size}px`;
mode_button.style.height      = `${size}px`;
mode_button.style.borderRadius= "50%";
mode_button.style.padding     = "0";
// mode_button.style.border      = "2px solid #000";  // if you want a border
mode_button.style.boxSizing   = "border-box";
mode_button.style.backgroundColor = "white";
mode_button.textContent       = "";  // drop any text


const mode_img = document.createElement("img");
mode_img.src            = "Images/home_icon.png";
mode_img.draggable      = false;
mode_img.style.pointerEvents = "none";
mode_img.style.width    = "80%";
mode_img.style.height   = "80%";
mode_img.style.objectFit= "contain";  // keep the icon fully visible
mode_button.style.justifyContent = 'center';
mode_button.style.alignItems     = 'center';
mode_img.style.display  = "block";
mode_button.style.display        = 'flex';
mode_button.appendChild(mode_img);
mode_button.style.filter = 'invert(1)';


const about_button = document.createElement("button");
document.getElementById("overlayLayer").appendChild(about_button);
about_button.onclick = showMiniWindow;
about_button.style.position = "absolute";
about_button.style.top = (3*icon_button_gap)+(2*icon_button_width)+"px";
about_button.style.left = icon_button_gap+"px";
about_button.style.width = icon_button_width+"px";
about_button.style.height = about_button.style.width;
about_button.style.borderRadius = "50%";

about_button.fontSize = "50px";
// mode_button.appendChild(mode_span);

about_button.fontSize = "50px";

const about_img = document.createElement("img");
about_img.src            = "Images/about_icon.png";
about_img.draggable      = false;
about_img.style.width    = "80%";
about_img.style.height   = "80%";
about_img.style.objectFit= "contain";  // keep the icon fully visible
about_img.style.display  = "block";
about_button.style.display        = 'flex';
about_button.style.justifyContent = 'center';
about_button.style.alignItems     = 'center';
about_button.appendChild(about_img);
about_button.style.filter = 'invert(1)';
// Call showMiniWindow() to open a modal with two tabs; Tab 2 has a 3‐GIF carousel
// Two-tab modal with editable Tab1 and GIF carousel in Tab2 (with headers)
function playSoundEffect(src, volume = 1.0) {
  const audio = new Audio(src);
  audio.volume = volume;  // 0.0 to 1.0
  audio.play().catch(e => console.error("Audio playback failed:", e));
}
function createGifSticker(x, y, gifUrl, duration = 2000) {
  const img = document.createElement('img');
  img.src = gifUrl;
  img.classList.add('sticker');

  img.style.position = 'absolute';       
  img.onload = () => {
    img.style.left = (x - img.width / 2)+(BUTTON_WIDTH/2) + "px";
    img.style.top = (y - img.height / 2) +(BUTTON_WIDTH/2)+ "px";
    playSoundEffect("Resources/Confetti Sounds Effects - FREE No Copyright (mp3cut.net).mp3");
  };
  img.style.zIndex = "1000000";              

  document.getElementById('overlayLayer').appendChild(img);

  // Remove after duration
  setTimeout(() => {
    img.remove();
  }, duration);
}
function showMiniWindow() {
  if (document.getElementById('mini-backdrop')) return;

  // Create backdrop
  const backdrop = document.createElement("div");
  backdrop.id = "mini-backdrop";
  Object.assign(backdrop.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000
  });

  // Create modal
  const modal = document.createElement("div");
  modal.id = "mini-window";
  modal.classList.add("pre-pop"); // initial hidden state
  modal.innerHTML = `
    <div class="mini-content">
      <h2>About Hanzi Forge</h2>
      <p>This is your space to explain the game, the learning goals, and how to play.</p>
      <p>You can include multiple paragraphs, formatting, or images here.</p>
    </div>
  `;
  modal.addEventListener("click", e => e.stopPropagation()); // prevent close on modal click

  // Close on backdrop click
  backdrop.addEventListener("click", () => {
    modal.classList.remove("pop-in");
    modal.classList.add("pop-out");
    setTimeout(() => backdrop.remove(), 300);
  });

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  // Trigger animation in next frame
  requestAnimationFrame(() => {
    modal.classList.remove("pre-pop");
    modal.classList.add("pop-in");
  });
}


function showRemainingWindow() {
  if (document.getElementById('remaining-backdrop')) return;

  const backdrop = document.createElement("div");
  backdrop.id = "remaining-backdrop";
  Object.assign(backdrop.style, {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw", height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000
  });

  const modal = document.createElement("div");
  modal.id = "remaining-window";
  modal.classList.add("pre-pop");

  // Scrollable content
  const content = document.createElement("div");
  content.className = "remaining-content";

  for (let i = 0; i < unit_undiscovered.length; i++) {
    const section = document.createElement("div");
    section.className = "unit-section";

    const title = document.createElement("h3");
    title.textContent = `Unit ${i + 1}`;
    section.appendChild(title);

    const discovered = new Set(discoveredInUnit[i]);
    const undiscovered = unit_undiscovered[i];
    const baseWords = the_unit_content[i];

    // Merge discovered + base (avoid duplicates)
    const allNames = Array.from(new Set([...baseWords, ...discovered, ...undiscovered]));


    allNames.forEach(name => {
      
    const btn = document.createElement("button");
    btn.className = "static-char-btn";

    const data = allRadicals[name] || allCharacters[name];

    if (discovered.has(name) || baseWords.includes(name)) {
      btn.classList.add("discovered");

      const img = document.createElement("img");
      img.src = data?.file || "";
      img.alt = name;
      widthyyyy = windowWidth/20
      img.style.width = widthyyyy+"px";
      img.style.height = widthyyyy+"px";
      img.style.borderRadius = "20%"
      btn.appendChild(img);
      btn.onclick = () => {
        wipeUpAndContinue(() => {
          displayEty(name)
        });
      }
    } else {
      // HINT ICON (use your existing image)
      const img = document.createElement("img");
      img.src = "Images/question-removebg-preview-Photoroom.png";  // replace with your actual hint image
      img.alt = "?";
      widthyyyy = windowWidth/20
      img.style.width = widthyyyy+"px";
      img.style.height = widthyyyy+"px";
      btn.appendChild(img);
      btn.disabled = true;
    }

    section.appendChild(btn);
  });


    content.appendChild(section);
  }

  const header = document.createElement("div");
  header.className = "remaining-header";
  header.textContent = "Discovered Words";
  const scrollContainer = document.createElement("div");
  scrollContainer.className = "remaining-scroll";

  scrollContainer.appendChild(content);
  modal.appendChild(header);
  modal.appendChild(scrollContainer);

  modal.addEventListener("click", e => e.stopPropagation());
  backdrop.addEventListener("click", () => {
    modal.classList.remove("pop-in");
    modal.classList.add("pop-out");
    setTimeout(() => backdrop.remove(), 300);
  });

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);
  requestAnimationFrame(() => {
    modal.classList.remove("pre-pop");
    modal.classList.add("pop-in");
  });
}





// keep header buttons array in closure
const headerBtns = [];

function displayEty(name) {
  ety_mode = true;
  const isRadical  = name in allRadicals;
  const isCompound = name in allCharacters
                  && Array.isArray(allCharacters[name].components)
                  && allCharacters[name].components.length === 2;
  const data = isRadical
    ? allRadicals[name]
    : isCompound
      ? allCharacters[name]
      : null;
  if (!data) return console.error("No data for", name);
  let img_number = 0
  function makeImg(src, size = "150px", bg = "#fff") {
    if (!src) return null;
    const img = document.createElement("img");
    img.src = src;
    Object.assign(img.style, {
      width: size,
      height: size,
      objectFit: "contain",
      backgroundColor: bg,
      padding: "4px",
      borderRadius: "40%",
      
    });
    if ([0,2,4,5, 7, 9, 10, 12, 14].includes(img_number)) {
      img.style.border ="4px solid #000";
    }
    img_number++;
    return img;
  }

  // build overlay
    // Remove any existing ety-overlay if needed
  document.getElementById("ety-overlay")?.remove();

  // Create container
  const wrapper = document.createElement("div");
  wrapper.id = "ety-overlay";
  Object.assign(wrapper.style, {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 200000, // 🔥 put it above any other modal
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  // Build inner overlay
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundColor: backgroundC[backgroundNumber],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    padding: "16px",
    boxSizing: "border-box",
    overflowY: "auto",
    zIndex: 200001,
  });

  overlay.onclick = () => {
    wipeUpAndContinue(() => {
      wrapper.remove(); // ✅ only remove this overlay
      ety_mode = false;
    });
  };

  wrapper.appendChild(overlay);
  document.body.appendChild(wrapper);

  overlay.onclick = () => {
    wipeUpAndContinue(() => {
      wrapper.remove(); // ✅ only remove this overlay
      ety_mode = false;
    });
  };
  

  let bmounta3= document.createElement("img")
  bmounta3.src = "Images/tall_boi.png"; 
  Object.assign(bmounta3.style, {
    position: "absolute",
    src: "Images/tall_boi.png",
    width: playW * 0.45 + "px",
    height: "auto",
    top: 0 + (windowHeight * 0.42) +'px',
    zIndex: 1,
    pointerEvents: "none",
    left: parseInt(sideSection.style.width) - (windowWidth * 0.487) + 'px',
  });
  overlay.appendChild(bmounta3)

  let bmounta2= document.createElement("img")
  bmounta2.src = "Images/mid_biggy.png"; 
  Object.assign(bmounta2.style, {
    position: "absolute",
    src: "Images/mid_biggy.png",
    width: playW * 0.4   + "px",
    height: "auto",
    top: 0 + (windowHeight * 0.55)+'px',
    zIndex: 1,
    pointerEvents: "none",
    left: parseInt(sideSection.style.width) + (windowWidth * 0.5)+ 'px',
  });
  overlay.appendChild(bmounta2)
  // 1️⃣ Meaning title at top
  if (data.meaning) {
    const title = document.createElement("h2");
    title.textContent = "Congratulations! You found: "+data.meaning;
    Object.assign(title.style, {
      margin: "0",
      padding: "16px", // Added padding
      textAlign: "center",
      fontSize: "1.5em",
      fontFamily: "DM Sans",
      color: "#222",
      backgroundColor: "#f0f0f0", // Light grey background
      border: "4px solid rgb(0,0,0)", // Light grey border
      borderRadius: "8px", // Slightly rounded corners
      maxWidth: "fit-content", // Make background fit content
      alignSelf: "center", // Center the box if overlay is a flex container,
      transform: "translateY(10%)",
    });
    overlay.appendChild(title);
  }

  // 2️⃣ Radical
  if (isRadical) {
    const row = document.createElement("div");
    Object.assign(row.style, { display: "flex", gap: "16px", alignItems: "center" });
    [ data.ety, "Images/arrow.png", data.image, "Images/arrow.png", data.file ]
      .map((src, i) => makeImg(src, i % 2 ? "150px" : undefined, i % 2 ? "transparent" : "#fff"))
      .forEach(img => img && row.appendChild(img));
    overlay.appendChild(row);
  }
  // 3️⃣ Compound
  else if (isCompound) {
    const [c1, c2] = data.components;
    const comp1 = allCharacters[c1] || allRadicals[c1] || {};
    const comp2 = allCharacters[c2] || allRadicals[c2] || {};
    const PLUS  = "Images/plus-removebg-preview.png";
    const EQUAL = "Images/equal-removebg-preview.png";
    ["ety","image","file"].forEach(modeKey => {
      const row = document.createElement("div");
      Object.assign(row.style, { display:"flex", gap:"16px", alignItems:"center" });
      [
        comp1[modeKey],
        PLUS,
        comp2[modeKey],
        EQUAL,
        data[modeKey]
      ].map((src, i) => makeImg(src, i % 2 ? "48px" : undefined, i % 2 ? "transparent" : "#fff"))
       .forEach(img => img && row.appendChild(img));
      overlay.appendChild(row);
    });
  }
  // 4️⃣ Fallback
  else {
    ["ety","image","file"].forEach(key => {
      const img = makeImg(data[key]);
      if (img) overlay.appendChild(img);
    });
  }


  
  // 5️⃣ Description under everything
  if (data.description) {
    const desc = document.createElement("p");
    desc.textContent = data.description;
    Object.assign(desc.style, {
      display: "block",                // default for <p>, but just in case
      margin: "16px auto 0",           // top: 16px, horizontally centered
      padding: "16px",
      lineHeight: "1.4",
      textAlign: "center",
      top: "90%",
      color: "#222",
      fontSize: "1.5em",
      fontFamily: "DM Sans",
      backgroundColor: "#f0f0f0",
      border: "4px solid rgb(0,0,0)",
      borderRadius: "8px",
      maxWidth: "60%",         // width fits content
      alignSelf: "center",             // works in flex container
      zIndex: 100,
      transform: "translateY(-10%)",
    });

    overlay.appendChild(desc);
  }

 

  overlay.style.overflow = "hidden";

}

let counter = document.getElementById("counter");
counter.style.top = windowHeight*0 + "px";
counter.style.right = windowWidth*0.35+windowWidth*0.01 + "px";

function flipMode() {
  createJourneyModeMenu();
  undiscovered = unit_undiscovered[unit];
  updateCounters();
  mode_span.innerText = "Journey";
}


function removeAllButtons() {
  for (let i = 0;i<interactible_stuff.length;i++) {
    console.log("removing: ",interactible_stuff[i]);
    interactible_stuff[i].remove();
  }
  btn_state = [];
  interactible_stuff = [];
  current = [];
}
// ────────────────────────────────────────────────────
// (A) The unit-selection overlay
function createJourneyModeMenu() {

  const journey_menu_div = document.createElement("div");
  Object.assign(journey_menu_div.style, {
    position:       "fixed",
    top:            "0",
    left:           "0",
    width:          "100vw",
    height:         "100vh",
    zIndex:         20000,

    backgroundColor: backgroundC[backgroundNumber],
    color:          "#fff",
    padding:        "16px",
    boxSizing:      "border-box",
    overflow:       "auto"
    
  });
  journey_menu_div.classList.add("journey-menu");

  journey_menu_div.style.overflow = "hidden";
  
  let amounta3= document.createElement("img")
  amounta3.src = "Images/tall_boi.png"; 
  Object.assign(amounta3.style, {
    position: "absolute",
    src: "Images/tall_boi.png",
    width: playW * 0.45 + "px",
    height: "auto",
    top: 0 + (windowHeight * 0.42) +'px',
    zIndex: 100000000,
    pointerEvents: "none",
    left: parseInt(sideSection.style.width) - (windowWidth * 0.487) + 'px',
  });
  journey_menu_div.appendChild(amounta3)

  let amounta2= document.createElement("img")
  amounta2.src = "Images/mid_biggy.png"; 
  Object.assign(amounta2.style, {
    position: "absolute",
    src: "Images/mid_biggy.png",
    width: playW * 0.4   + "px",
    height: "auto",
    top: 0 + (windowHeight * 0.55)+'px',
    zIndex: 100000000,
    pointerEvents: "none",
    left: parseInt(sideSection.style.width) + (windowWidth * 0.5)+ 'px',
  });
  journey_menu_div.appendChild(amounta2)
  
  
  let names = ["Elements & Weather","Human Actions","Shelters & Security","Plants & Agriculture","Tools & Weapons","Food & Drink","Abstract Concepts","Time & Cycles",];
  // 1️⃣ Create the full-screen div

  let logo = document.createElement("img");
  logo.style.width  = windowWidth * 0.5 + "px"
  logo.style.height = logo.style.width
  Object.assign(logo.style, {
    transform: `scale(${0.4})`,
    position:       "absolute",
    top:            -(windowHeight*0.3)+"px",
    left:           "25%",
    
  });
  logo.src = "Images/new_logo.png"
  logo.style.backgroundColor= "#ffddba";
  logo.style.borderColor = "none"
  logo.style.borderWidth = "0px"
  logo.style.border = "none";
  logo.style.outline = "none";
  journey_menu_div.appendChild(logo);


  
  // 2️⃣ Banner: total left across all units
  const totalLeft = unit_undiscovered.reduce((sum, arr) => sum + arr.length, 0);


  tree_buttons_height = (windowHeight/10)+"px"
  tree_buttons_width = (windowWidth/10)+"px"

  // 3️⃣ Add to document
  document.body.appendChild(journey_menu_div);

  

  const yt_button = document.createElement("button");
  const yt_img = document.createElement("img");
  document.getElementById("overlayLayer").appendChild(yt_button);
  // about_button.onclick = showMiniWindow2;
  yt_button.style.position = "absolute";
  yt_button.style.top = "85%";
  yt_button.style.left = "34%";
  yt_button.style.width = tree_buttons_width;
  yt_button.style.height = tree_buttons_height;
  yt_button.style.display = 'flex';
  yt_button.style.border = "none";
  yt_img.style.width = tree_buttons_width
  yt_img.style.height = "auto"
  yt_button.appendChild(yt_img);
  yt_img.src            = "Images/youtube__2_-removebg-preview.png";
  yt_img.draggable      = false;
  yt_img.style.pointerEvents = "none";
  yt_img.style.objectFit= "contain";  // keep the icon fully visible
  yt_button.style.justifyContent = 'center';
  yt_button.style.alignItems     = 'center';
  yt_button.style.background = "none";

  journey_menu_div.appendChild(yt_button);

  const text_button = document.createElement("button");
  text_button.textContent = `${totalLeft} remaining`; // ✅ sets the visible label
  text_button.onclick = showRemainingWindow;

  Object.assign(text_button.style, {
    position:       "absolute",
    top:            "90%",
    left:           "50%",

    transform:      "translate(-50%, -50%)",
    padding:        "8px 12px",
    fontFamily:      "Caveat Brush",
    fontSize:       "1.5em",
    textAlign:      "center",
    border:         "6px solid rgb(0,0,0)",
    borderRadius:   "20%",
    background:     "#e0829d",
    color:          "black",
    
    zIndex:         "20001",
    width:          tree_buttons_width,
    height:         tree_buttons_height,
    boxSizing:      "border-box",
  });
  journey_menu_div.appendChild(text_button);

  const about_button = document.createElement("button");
  about_button.textContent = `About`; // ✅ sets the visible label
  about_button.onclick = showMiniWindow;

  Object.assign(about_button.style, {
    position:       "absolute",
    top:            "90%",
    left:           "61%",

    transform:      "translate(-50%, -50%)",
    padding:        "8px 12px",
    fontFamily:      "Caveat Brush",
    fontSize:       "1.5em",
    textAlign:      "center",
    border:         "6px solid rgb(0,0,0)",
    borderRadius:   "20%",
    background:     "#86b9b0",
    color:          "black",
//     backgroundC = ["#848871", "#e0829d", "#86b9b0", "#4fa5d8", "#ffdf7c", "#9389bd", "#bed4e9", "#ffddba","#ffbaba"]
// backgroundC2 = ["#464b37", "#8f5774", "#4c7273", "#0855b1", "#feb640", "#5e4d9b", "#3373b0", "#d9ae8e","#ff7b7b"]
    
    zIndex:         "20001",
    width:          tree_buttons_width,
    height:         tree_buttons_height,
    boxSizing:      "border-box",
  });
  journey_menu_div.appendChild(about_button);



  // 4️⃣ Lay out unit buttons in a grid
  let factor = windowWidth / 21
  let btnSize = factor*4
  let btnSizey = factor*1

  const cols = 4;
  for (let i = 0; i < num_units; i++) {
    // compute row/col
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = factor + col * (btnSize + factor);
    const y = (windowHeight*0.35)+factor + row * (btnSizey+ factor) ; // +40 for banner space

    createUnitButton(x, y, i, journey_menu_div, btnSize, btnSizey, names[i]);
  }
}
big_unit = false;
// ——————————————————————————————————————————————————
/**
 * twoPhaseWipe(buildUI, onDone)
 *
 * 1) Plays a 1s “fill‐in” where black grows in from edges→center.
 * 2) Calls buildUI() so you can swap out your menu for your game.
 * 3) Plays a 1s “clear‐out” where black shrinks from edges←center, revealing the game.
 * 4) Calls onDone() when finished.
 */

function twoPhaseWipe(buildUI, onDone, cx = window.innerWidth/2, cy = window.innerHeight/2, center) {
  // Create a full-screen canvas
  const c = document.createElement("canvas");
  c.width  = window.innerWidth;
  c.height = window.innerHeight;
  Object.assign(c.style, {
    position:      "fixed",
    top:           "0",
    left:          "0",
    zIndex:        "1000000000",
    pointerEvents: "none"
  });
  document.body.appendChild(c);
  const ctx = c.getContext("2d");

  const maxR = Math.hypot(c.width, c.height);
  const DURATION = 750;
  let startTS = null, phase = 0;  // 0 = fill-in, 1 = clear-out

  function step(ts) {
    if (startTS === null) startTS = ts;
    const t = Math.min((ts - startTS) / DURATION, 1);

    // paint black
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = backgroundC2[backgroundNumber];
    ctx.fillRect(0, 0, c.width, c.height);

    // punch hole
    ctx.globalCompositeOperation = "destination-out";
    const r = phase === 0
      ? maxR * (1 - t)   // shrink radius (fill-in)
      : maxR * t;        // grow radius  (clear-out)
    ctx.beginPath();
    if (center) {
      ctx.arc((windowWidth/2), (windowHeight/2), r, 0, Math.PI * 2);
    } else {
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
    }
      
    
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    if (t < 1) {
      requestAnimationFrame(step);
    } else if (phase === 0) {
      // finished fill-in: swap UI
      buildUI();
      phase = 1;
      startTS = null;
      requestAnimationFrame(step);
    } else {
      // finished clear-out
      document.body.removeChild(c);
      onDone && onDone();
    }
  }

  requestAnimationFrame(step);
}



// ─── Your new createUnitButton ───
function createUnitButton(x, y, number, containerDiv, size, size2, name) {
  // 1️⃣ Button
  const btn = document.createElement("button");
  btn.classList.add("unit-button");

  btn.id = `Unit_btn_${number}`;
  btn.innerHTML = `Unit ${number + 1}<br>${name}`;
  Object.assign(btn.style, {
    position:    "absolute",
    top:         `${y}px`,
    left:        `${x}px`,
    width:       `${size}px`,
    height:      `${size2}px`,
    border:      "2px solid black",
    borderRadius:"8px",
    color:       "black",
    cursor:      "pointer",
    fontSize:    "24px",
    textAlign:   "center",
    lineHeight:  "1em",
    
    fontFamily: "Caveat Brush"
  });

  // 2️⃣ Tooltip
  const leftInUnit = unit_undiscovered[number].length;
btn.addEventListener("click", e => {
    // disable while animating
    btn.disabled = true;

    // compute center of this button
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top  + rect.height/2;

    btn.classList.add('selected');

    // run the wipe
    twoPhaseWipe(
      // buildUI: remove menu, init game…
      () => {
        document.querySelector(".journey-menu")?.remove();
        removeAllButtons();
        unit = number;
        unit_content = the_unit_content[unit].slice();
        page_number = 0;
        updateCounters();
        loadPage(0);
        cutter();
      },
      // onDone: re-enable if needed
      () => { btn.disabled = false; },
      cx, cy, true
    );
  });















  // 4️⃣ Append button
  containerDiv.appendChild(btn);

  // 5️⃣ Counter under button
  const discovered = discoveredInUnit[number].length;
  const total      = unitTotals[number];
  const box = document.createElement("input");
  box.type     = "text";
  box.readOnly = true;
  box.value    = `${discovered}/${total}`;
  const textWidth = size * 0.2;
  Object.assign(box.style, {
    position:      "absolute",
    top:           `${y + size2 + 4}px`,
    left:          `${x + (size - textWidth) / 2}px`,
    width:         `${textWidth}px`,
    height:        "24px",
    lineHeight:    "24px",
    fontSize:      "16px",
    fontFamily: "Caveat Brush",
    textAlign:     "center",
    border:        "1px solid transparent",
    padding:       "0 4px",
    boxSizing:     "border-box",
    background:    "transparent",
    color:         "#000",
    pointerEvents: "none",
    whiteSpace:    "nowrap",
    overflow:      "hidden",
    textOverflow:  "ellipsis"

  });
  containerDiv.appendChild(box);

  // 6️⃣ Hover & right-click (unchanged)
  btn.addEventListener("mouseenter", () => console.log("hover unit"));
  btn.addEventListener("mouseleave", () => containerDiv.style.background = backgroundC[backgroundNumber]);
  btn.oncontextmenu = e => {
    e.preventDefault();
    showUnitEtyWindow(number);
  };
}


function displaySearch() {
  const value = textBox.value.toLowerCase();
  display = unit_content.filter(id => id.toLowerCase().includes(value));
  removePageStuff();
  loadPage(0);
  page_number = 0;
  updateCounters();
}

// ─── “Clear Play Area” button ───
const clear_button = document.createElement("button");
document.getElementById("overlayLayer").appendChild(clear_button);
clear_button.style.position = "absolute";
clear_button.style.top = (2*icon_button_gap)+icon_button_width+"px";
clear_button.style.left   = icon_button_gap+"px";
clear_button.style.width  = icon_button_width+"px";
clear_button.style.height = icon_button_width+"px";
clear_button.style.borderRadius = "50%";
const clear_img = document.createElement("img");
clear_img.src            = "Images/clean_icon.png";
clear_img.draggable      = false;
clear_img.style.pointerEvents = "none";
clear_img.style.width    = "80%";
clear_img.style.height   = "80%";
clear_img.style.objectFit= "contain";  // keep the icon fully visible
clear_img.style.display  = "block";
clear_button.style.display        = 'flex';
clear_button.style.justifyContent = 'center';
clear_button.style.alignItems     = 'center';
clear_button.appendChild(clear_img);
clear_button.style.filter = 'invert(1)';
/**
 * wipeRightToLeftThenFade(buildUI, onDone, wipeDuration = 1000, fadeDuration = 500)
 *
 * @param {Function} buildUI
 *   Called once the bar has fully covered the play-area.
 * @param {Function} onDone
 *   Called once the bar has faded out.
 * @param {number} wipeDuration
 *   Milliseconds for the right→left wipe.
 * @param {number} fadeDuration
 *   Milliseconds for the fade-out.
 */
function wipeRightToLeftThenFade(buildUI, onDone, wipeDuration = 1000, fadeDuration = 500) {
  const playArea = document.getElementById("playArea");
  const rect     = playArea.getBoundingClientRect();

  // 1️⃣ Create the full-width bar, squashed at 0 on the right edge
  const bar = document.createElement("div");
  Object.assign(bar.style, {
    position:        "fixed",
    top:             `${rect.top}px`,
    left:            `${rect.left}px`,
    width:           `${rect.width}px`,
    height:          `${rect.height}px`,
    backgroundColor: backgroundC2[backgroundNumber],
    transform:       "scaleX(0)",                   // start invisible
    transformOrigin: "100% 0%",                     // anchor on right edge
    opacity:         "1",
    pointerEvents:   "none",
    zIndex:          "999999",
    transition:      `transform ${wipeDuration}ms cubic-bezier(.42,0,.58,1)`
  });
  document.body.appendChild(bar);

  // 2️⃣ Phase 1: wipe in R→L
  requestAnimationFrame(() => bar.style.transform = "scaleX(1)");

  bar.addEventListener("transitionend", function onWipe(evt) {
    if (evt.propertyName !== "transform") return;
    bar.removeEventListener("transitionend", onWipe);

    // 3️⃣ rebuild your UI underneath
    buildUI();

    // 4️⃣ Phase 2: fade out
    bar.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
    bar.style.opacity    = "0";

    bar.addEventListener("transitionend", function onFade(evt2) {
      if (evt2.propertyName !== "opacity") return;
      bar.removeEventListener("transitionend", onFade);
      bar.remove();
      if (onDone) onDone();
    });
  });
}

// Example hookup:
clear_button.onclick = () => {
  const wipeMs = 600,    // e.g. 1.2s wipe
        fadeMs =  600;    // e.g. 0.6s fade
  wipeRightToLeftThenFade(
    // buildUI
    () => {
      for (let i = interactible_stuff.length - 1; i >= 0; i--) {
        if (btn_state[i] === 'active') {
          interactible_stuff[i].remove();
          interactible_stuff.splice(i, 1);
          btn_state.splice(i, 1);
        }
      }
      updateCounters();
    },
    // onDone
    () => console.log("Done wiping & fading!"),
    wipeMs,
    fadeMs
  );
};






function updateCounters() {
  const discovered = discoveredInUnit[unit].length;
  const remaining  = unit_undiscovered[unit].length;
  const total      = unitTotals[unit];
  num_discovered.textContent   = `${discovered}/${total}`;
}






// Toggle between initial (0) and discovered (1)
function handlePage() {
  page_number = (page_number + 1) % 2;
  textBox.value = "";
  removePageStuff();
  loadPage(page_number);
  updateCounters();
}
let apage_number = 0

function loadPage(page) {
  big_unit = unit_content.length > 12;

  if (page == 0) {
    page_button_span.textContent = "Show discoveries"
  } else {
    page_button_span.textContent = "Show base words"
  }
  // compute button spacing
  let space = parseInt(sideSection.style.width) * button_scale;

  removePageStuff();

  // 2) pick source
  //    page 0 = only the primitives you start with
  //    page 1 = everything in this unit (discovered + undiscovered)
  const source = (page === 0)
    ? the_unit_content[unit]
    : discoveredInUnit[unit].concat(unit_undiscovered[unit]);

  // 3) filter via search
  const term = textBox.value.toLowerCase();
  const filtered = term
    ? source.filter(id => id.toLowerCase().includes(term))
    : source;

  // 4) paginate
  const pageItems = filtered.slice(0, per_page);

  // 5) lay them out
  let row = 0, col = 0;
  pageItems.forEach(key => {
    const data = allRadicals[key] || allCharacters[key];
    if (!data) return;

    if (big_unit) {
      new_button_scale = 4; // or try 3, adjust to taste
      button_scale = (1/26)

    } else {
      new_button_scale = 4;
      button_scale = (1/21)
    }

    space = parseInt(sideSection.style.width) * button_scale

    const x = space + col * space * (new_button_scale + 1);
    const y = space + row * space * (new_button_scale + 1);

    // create the button + its 4 images (img,img2,img3,img4)
    createImageButton(x, y, key, data, 'inactive', 'sideSection', true);

    if (page === 1) {
      // pull it back out and toggle img4
      const btn  = interactible_stuff[interactible_stuff.length - 1];
      const mark = btn.querySelector('img.img4');
      if (unit_undiscovered[unit].includes(key)) {
        // still undiscovered → show question-mark overlay
        mark.style.display = 'inline';
      } else {
        // discovered → hide it
        mark.style.display = 'none';
      }
    }

    col++;
    if (big_unit ? col === 5 : col === 4) {
      col = 0;
      row++;
    }
  });

  // 6) refresh whichever layer (char/symbol/gpt) you’re in
  switchModes(current_mode);
}


function removePageStuff() {
  for (let i = 0; i<current.length;i++) {
    
    element = current[i];
    console.log("removing: ",element.id)
    let index = interactible_stuff.indexOf(element);
    interactible_stuff.splice(index, 1);
    btn_state.splice(index, 1);
    element.remove();
  }
  current = [];
}

function getHighestZIndex() {
  let highest = 0;
  const elements = document.getElementsByTagName("*");

  for (let i = 0; i < elements.length; i++) {
    const z = window.getComputedStyle(elements[i]).zIndex;
    if (!isNaN(z) && z !== 'auto') {
      highest = Math.max(highest, parseInt(z));
    }
  }
  console.log("highest z-index", highest)
  return highest;
}


async function loadCharacters() {
  try {
    const response = await fetch('characters.json');
    allCharacters = await response.json();
    console.log("Characters loaded:", Object.keys(allCharacters).length);
  } catch (err) {
    console.error("Failed to load character data:", err);
  }
}

// Call this function when you want to load the characters
loadCharacters().then(() => {
  console.log("allCharacters", allCharacters);
  loadProgress();

 

  characters_loaded = true;
  if (characters_loaded && radicals_loaded) {
    flipMode();
    displaySearch();
    cutter();
  }
  
});

let allRadicals = {};

async function loadRadicals() {
  try {
    const response = await fetch('radicals.json');
    allRadicals = await response.json();
    console.log("Characters loaded:", Object.keys(allRadicals).length);
  } catch (err) {
    console.error("Failed to load character data:", err);
  }
}

// Call this function when you want to load the characters
loadRadicals().then(() => {
  
  console.log("allradicals", allRadicals);
  discovery_undiscovered = Object.assign({}, allRadicals, allCharacters);
  
  
  radicals_loaded = true;
  if (characters_loaded && radicals_loaded) {
    flipMode();
    displaySearch();
    cutter();
    
  }
});




function mixComponents(comp1, comp2) {
  let successfulMatches = [];  // Create an array to store matching characters at the start
  

  for (const [char, data] of Object.entries(allCharacters)) {
    let comps = data.components;
    
    // Log the character and components for inspection
    // console.log(Character: ${char}, Components: ${JSON.stringify(comps)}, Searching for: ${comp1}, ${comp2});

    // Check if both components are present in the current character's components
    if (comps.includes(comp1)) {
      console.log("comps", comps)
      if (comps.includes(comp2, comps.indexOf(comp1)+1)) {
        successfulMatches.push(char);
        
      } else {
        comps.reverse();
        if (comps.includes(comp2, comps.indexOf(comp1)+1)) {
          successfulMatches.push(char);
        }
      }
    }
       
  }

  console.log("successfulMatches", successfulMatches);
  return successfulMatches;
}


let a_var = document.getElementById("var");
let isMouseDown = document.getElementById("isMouseDown");
let mouseIsDown = false;
let button_counter = 0;

let startX = 0, startY = 0, newX = 0, newY = 0;




let activeMove = null;
let activeUp = null
let activeLeave = null;

function mouseEnter(e, element) {
  if (image_thing_on){
    document.getElementById("img_2_" + element.id).style.display = "inline";
  }
  

  element._activeLeave = (ev) => mouseLeave(ev, element);
  element.addEventListener('mouseleave', element._activeLeave);
}

function mouseLeave(e, element) {
  if (image_thing_on) {
    document.getElementById("img_2_" + element.id).style.display = "none";
  }

  if (element._activeLeave) {
    element.removeEventListener('mouseleave', element._activeLeave);
    element._activeLeave = null;
  }
}

function showHintsPopup(button) {
  // Remove any existing popup
  const old = document.getElementById('hints-popup');
  if (old) old.remove();

  // Create overlay
  const popup = document.createElement('div');
  popup.id = 'hints-popup';
  Object.assign(popup.style, {
    position:      'fixed',
    top:           '50%',
    
    left:          parseInt(playArea.style.width)/2 +"px",
    transform:     'translate(-50%, -50%)',
    background:    'white',
    border:        '2px solid #333',
    borderRadius:  '8px',
    padding:       '16px',
    maxWidth:      '80vw',
    maxHeight:     '80vh',
    overflowY:     'auto',
    zIndex:        100000,
    boxSizing:     'border-box',
  });

  // For each hint slot
  button._hints.forEach((hintText, i) => {
    const btn = document.createElement('button');
    // full-width rows
    Object.assign(btn.style, {
      display:     'block',
      width:       '100%',
      margin:      '8px 0',
      padding:     '8px',
      textAlign:   'center',
      fontSize:    '1em',
      cursor:      'pointer',
    });

    if (button._hintUsage[i]) {
      // Already used → show text
      btn.textContent = hintText;
      btn.disabled    = true;
    } else {
      // Not used → show "Hint N"
      btn.textContent = `Hint ${i+1}`;
      btn.addEventListener('click', () => {
        // record usage
        button._hintUsage[i] = true;
        // swap in the text
        btn.textContent     = hintText;
        btn.disabled        = true;
      });
    }

    popup.appendChild(btn);
  });

  // OK button
  const ok = document.createElement('button');
  ok.textContent = 'OK';
  Object.assign(ok.style, {
    display:     'block',
    width:       '100%',
    marginTop:   '16px',
    padding:     '8px',
    fontSize:    '1em',
    cursor:      'pointer',
    
       // customize color
  });
  ok.addEventListener('click', () => popup.remove());
  popup.appendChild(ok);

  document.body.appendChild(popup);
}



function mouseDown(e, element) {
  // 0) If this button is a “?” placeholder, do nothing but log
  const placeholder = element.querySelector('img.img4');
  if (placeholder && placeholder.style.display !== 'none') {
    showHintsPopup(element);
    return;
  }

  // 1) Hide hover‐preview if active
  if (image_thing_on) {
    const preview = document.getElementById("img_2_" + element.id);
    if (preview) preview.style.display = "none";
  }

  // 2) If Shift is down, show etymology instead of dragging
  if (shiftIsDown) {
    displayEty(element.id.replace(/[0-9]/g, ''));
    return;
  }

  // 3) On first click, turn an “inactive” into an “active” and clone into sideSection
  const idx = interactible_stuff.indexOf(element);
  if (btn_state[idx] === "inactive") {
    btn_state[idx] = "active";
    const key = element.id.replace(/[0-9]/g, '');
    const character = allRadicals[key] || allCharacters[key];
    createImageButton(
      parseInt(element.style.left) - percent,
      parseInt(element.style.top),
      key, character,
      "inactive", "sideSection", false
    );
    // replace the original in current[] so collision detection still works
    current[current.indexOf(element)] = interactible_stuff[interactible_stuff.length - 1];
  }

  // 4) Prevent text selection
  e.preventDefault();

  // 5) Initialize drag start positions
  startX = e.clientX;
  startY = e.clientY;

  // 6) Elevate this element above others
  element.style.position = 'absolute';
  element.style.zIndex = getHighestZIndex() + 1;

  // 7) Hook up move and up listeners
  activeMove = ev => mouseMove(ev, element);
  document.addEventListener('mousemove', activeMove);
  activeUp = ev => mouseUp(ev, element);
  document.addEventListener('mouseup', activeUp);

  mouseIsDown = true;
}


function mouseMove(e, element) {
  newX = e.clientX - startX;
  newY = e.clientY - startY;
  let rect = document.getElementById("playArea").getBoundingClientRect();
  element.style.left = (element.offsetLeft + newX) + 'px';
  element.style.top = (element.offsetTop + newY) + 'px';
    

  

  startX = e.clientX;
  startY = e.clientY;
}

function deleteElement(element) {
  element.remove();
      // cleanup our arrays
      const idx = interactible_stuff.indexOf(element);
      if (idx !== -1) {
        interactible_stuff.splice(idx, 1);
        btn_state.splice(idx, 1);
      } 
}

function mouseUp(e, element) {
  // ─── 1) Tear down drag listeners ───
  document.removeEventListener('mouseup', activeUp);
  document.removeEventListener('mousemove', activeMove);
  activeMove = activeUp = null;
  mouseIsDown = false;

  // ─── 2) Compute the element’s center ───
  const elRect    = element.getBoundingClientRect();
  const centerX   = elRect.left + elRect.width  / 2;
  const centerY   = elRect.top  + elRect.height / 2;

  // ─── 3) “Ety-Zone” detection ───
  const ez = document.getElementById("etyZone");
  if (ez) {
    const z = ez.getBoundingClientRect();
    if (
      centerX >= z.left   &&
      centerX <= z.right  &&
      centerY >= z.top    &&
      centerY <= z.bottom
    ) {
      // remove from DOM
      deleteElement(element)
      // show etymology
      const key = element.id.replace(/[0-9]/g, '');
      wipeUpAndContinue(() => {
        displayEty(key);
      });
      return;
    }
  }

  // ─── 4) “dropped past playArea’s right edge” deletion ───
  const playRect = playArea.getBoundingClientRect();
  if (centerX > playRect.right) {
    element.remove();
    const idx = interactible_stuff.indexOf(element);
    if (idx !== -1) {
      interactible_stuff.splice(idx, 1);
      btn_state.splice(idx, 1);
    }
  }

  // ─── 5) restore hover-preview if still in sideSection ───
  if (image_thing_on) {
    const preview = document.getElementById("img_2_" + element.id);
    if (preview) preview.style.display = "inline";
  }
}





function isColliding(el1, el2) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  // Check if any part of the elements are overlapping
  return !(r1.right <= r2.left || 
           r1.left >= r2.right || 
           r1.bottom <= r2.top || 
           r1.top >= r2.bottom);
}

function checkCollision() {

  if (!mouseIsDown) {
    // Loop through each element
    for (let i = 0; i < interactible_stuff.length; i++) {
      const compared = interactible_stuff[i];
      
      // Check for collisions between every pair of elements
      for (let j = i + 1; j < interactible_stuff.length; j++) {
        if (isColliding(compared, interactible_stuff[j]) && btn_state[interactible_stuff.indexOf(compared)] == "active" && btn_state[interactible_stuff.indexOf(interactible_stuff[j])] == "active") {


          let top1 = getNumericStyleValue(interactible_stuff[i], "top");
          let top2 = getNumericStyleValue(interactible_stuff[j], "top");
          let left1 = getNumericStyleValue(interactible_stuff[i], "left");
          let left2 = getNumericStyleValue(interactible_stuff[j], "left");

          let centerTop = (top1 + top2) / 2;
          let centerLeft = (left1 + left2) / 2;
          console.log("combining "+interactible_stuff[i].id+" and "+interactible_stuff[j].id);
          let success = tryMix(centerLeft, centerTop, (interactible_stuff[i].id).replace(/[0-9]/g, ''), (interactible_stuff[j].id).replace(/[0-9]/g, ''));

          if (success) {
            interactible_stuff[i].remove();
            interactible_stuff[j].remove();

            
            interactible_stuff.splice(j,1);
            interactible_stuff.splice(i,1);
            btn_state.splice(j,1);
            btn_state.splice(i,1);
            displaySearch();

            setTimeout(function() {
              // Code to execute after 1 second
              twoPhaseWipe(
                () => {
                  displayEty(last_success)
                },
                // onDone: re-enable if needed
                () => { 
                  deleteElement(document.getElementById(last_element_success)); 
                },
                centerLeft+(BUTTON_WIDTH/2), centerTop+(BUTTON_WIDTH/2), false
              );
            }, 1000);
            
          }

          
        }
      }
    }
  }
  
  

  // Request the next animation frame
  requestAnimationFrame(checkCollision);
}
function showUnitEtyWindow(unitIndex) {
  // 1️⃣ build overlay
const overlay = document.createElement('div');
Object.assign(overlay.style, {
  position:        'fixed',
  top:             0,
  left:            0,
  width:           '100vw',
  height:          '100vh',
  backgroundColor: 'rgba(255,255,255,0.95)',
  overflowY:       'auto',
  display:         'flex',
  flexDirection:   'column',
  alignItems:      'center',
  padding:         '24px',
  boxSizing:       'border-box',
  zIndex:          99999,
  gap:             '32px',
});

// clicking backdrop closes
overlay.addEventListener('click', () => document.body.removeChild(overlay));

  // 2️⃣ helper to make the image chain
  const arrow = 'Images/arrow.png';
  function makeSingleRow(data) {
    const row = document.createElement('div');
    Object.assign(row.style, { display: 'flex', alignItems: 'center', gap: '16px' });
    [ data.ety, arrow, data.image, arrow, data.file ].forEach(src => {
      if (!src) return;
      const img = document.createElement('img');
      img.src = src;
      Object.assign(img.style, {
        width:        '100px',
        height:       '100px',
        objectFit:    'contain',
        background:   'white',
        padding:      '4px',
        borderRadius: '4px'
      });
      row.appendChild(img);
    });
    return row;
  }

  // 3️⃣ render an item in three columns
  function renderItem(id, isRadical) {
    const data = isRadical ? allRadicals[id] : allCharacters[id];
    if (!data) return;

    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, {
      display:   'flex',
      gap:       '24px',
      width:     '100%',
      maxWidth:  '90%',
      cursor:    'default'
    });
    // prevent clicks inside from closing
    wrapper.addEventListener('click', e => e.stopPropagation());

    // ◼️ Left: meaning
    const left = document.createElement('div');
    left.style.flex = '0 0 20%';
    const title = document.createElement('h3');
    title.textContent = data.meaning || id;
    title.style.margin = '0';
    left.appendChild(title);

    // ◼️ Center: images
    const center = document.createElement('div');
    center.style.flex = '1 1 60%';
    center.appendChild(makeSingleRow(data));

    // ◼️ Right: description
    const right = document.createElement('div');
    right.style.flex = '0 0 20%';
    const desc = document.createElement('p');
    desc.textContent = data.description || '';
    desc.style.margin = '0';
    desc.style.lineHeight = '1.4';
    right.appendChild(desc);

    wrapper.append(left, center, right);
    overlay.appendChild(wrapper);
  }

  // 4️⃣ gather
  const primitives = the_unit_content[unitIndex] || [];
  const discovered = discoveredInUnit[unitIndex] || [];
  const shown      = new Set();

  // 5️⃣ primitives section
  if (primitives.length) {
    const h = document.createElement('h2');
    h.textContent = 'Unit Primitives:';
    overlay.appendChild(h);
    primitives.forEach(id => {
      if (!shown.has(id)) { renderItem(id, true); shown.add(id); }
    });
  }

  // 6️⃣ discovered section
  if (discovered.length) {
    const h = document.createElement('h2');
    h.textContent = 'Discovered So Far:';
    overlay.appendChild(h);
    discovered.forEach(id => {
      if (!shown.has(id)) { renderItem(id, false); shown.add(id); }
    });
  }

  // 7️⃣ fallback
  if (!primitives.length && !discovered.length) {
    const none = document.createElement('div');
    none.textContent = 'Nothing to show in this unit yet.';
    Object.assign(none.style, { fontSize: '1.5em', color: '#333' });
    overlay.appendChild(none);
  }

  // 8️⃣ mount
  document.body.appendChild(overlay);
}







function tryMix(x, y, comp1, comp2) {
  let success = false;
  const matches = mixComponents(comp1, comp2);

  matches.forEach((r,i) => {
    const idx = unit_undiscovered[unit].indexOf(r);
    if (idx !== -1) {
      // remove from undiscovered
      unit_undiscovered[unit].splice(idx,1);

      // record it in this unit’s discovered list
      discoveredInUnit[unit].push(r);
      saveProgress();

      // show the new button
      createImageButton(
        x + i*150, y,
        r, allCharacters[r],
        'active','playArea',false, true
      );

      last_success = r;

      // displayEty(r);
      createGifSticker(x + i*150, y, 'Resources/Wedding Love Sticker by Pops of Pretty.gif', 1800);

      success = true;
    }
  });

  if (success) updateCounters();
  return success;
}



function createImageButton(x, y, name, character, state, windowTarget, isPage, lastThing=false) {
  // 1️⃣ Create button
  console.log("new_button_scale", new_button_scale)
  const btn = document.createElement("button");
  btn.id = name + btn_freq_list[btn_list.indexOf(name)];
  BUTTON_WIDTH = parseInt(sideSection.style.width)*button_scale*new_button_scale;

  try {
    btn._hints = [character.meaning, character.hint1, character.hint2];
  } catch (err) {
    console.log("no hints for u lol")
  }

  btn._hintUsage = [ false, false, false ];

  if (windowTarget === "playArea") {
    btn.classList.add("play-btn");
  }

  // 2️⃣ Circular styling
  btn.style.width           = BUTTON_WIDTH + "px";
  btn.style.height          = BUTTON_WIDTH + "px";
  btn.style.borderRadius    = "40%";
  btn.style.overflow        = "hidden";
  btn.style.padding         = "0";
  btn.style.border          = "4px solid #000";    // customize color
  btn.style.backgroundColor = "#fff";               // or 'none'
  btn.style.display         = "inline-flex";
  btn.style.alignItems      = "center";
  btn.style.justifyContent  = "center";

  // 3️⃣ Ensure the button itself gets mouse events
  btn.style.pointerEvents = "auto";

  // 4️⃣ Main image (fills the circle)
  const img = document.createElement("img");
  img.src           = character.file;
  img.draggable     = false;
  img.style.width   = "100%";
  img.style.height  = "100%";
  img.style.objectFit = "cover";
  img.style.display = "block";
  // Prevent the <img> stealing pointer events
  img.style.pointerEvents = "none";
  btn.appendChild(img);

  // 5️⃣ Hover-preview image
  const img2 = document.createElement("img");
  img2.src           = character.image;
  img2.draggable     = false;
  img2.style.position = "absolute";
  img2.style.top      = "0";
  img2.style.left     = "0";
  img2.style.width    = "100%";
  img2.style.height   = "100%";
  img2.style.objectFit = "cover";
  img2.style.display  = "none";
  img2.style.pointerEvents = "none";
  btn.appendChild(img2);

  // 5️⃣ Hover-preview image
  const img3 = document.createElement("img");
  img3.src           = character.ety;
  img3.draggable     = false;
  img3.style.position = "absolute";
  img3.style.top      = "0";
  img3.style.left     = "0";
  img3.style.width    = "100%";
  img3.style.height   = "100%";
  img3.style.objectFit = "cover";
  img3.style.display  = "none";
  img3.style.pointerEvents = "none";
  btn.appendChild(img3);

  const img4 = document.createElement("img");
  img4.src       = "Images/question.png";      // point at whatever you need
  img4.classList.add('img4');                 // give it a class if you like
  Object.assign(img4.style, {
    position: 'absolute',
    
    top      : "0",
    left     : "0",
    width    : "100%",
    height   : "100%",
    objectFit : "cover",
    display:  'none',   // start hidden
    pointerEvents: 'none'
  });
  btn.appendChild(img4);
  
  // 6️⃣ Track page vs discovery
  if (isPage) current.push(btn);
  btn_freq_list[btn_list.indexOf(name)] += 1;

  // 7️⃣ Append into the overlay (or sideSection)
  const container = windowTarget === "sideSection"
    ? document.getElementById("sideSection")
    : document.getElementById("overlayLayer");
  container.appendChild(btn);

  // 8️⃣ Absolute positioning inside overlay
  btn.style.position = "absolute";
  btn.style.left     = (windowTarget === "sideSection" ? percent + x : x) + "px";
  btn.style.top      = y + "px";
  btn.style.zIndex   = "10001";  // above overlay base

  // 9️⃣ Hook up your drag & hover handlers
  btn.addEventListener("mousedown", e => mouseDown(e, btn));
  btn.addEventListener("mouseenter", e => mouseEnter(e, btn));
  if (lastThing) { last_element_success = btn.id }
  console.log("ID", last_element_success);

  console.log("HELLO");
  interactible_stuff.push(btn);
  btn_state.push(state);

  // expose for debugging
  globalThis[btn.id] = btn;

  switchModes(current_mode);
}


function moveThing(x, y, thing) {
  thing.style.position = "absolute";
  thing.style.top = y+"px";
  thing.style.left = x+"px";
}

function getNumericStyleValue(el, prop) {
  return parseInt(window.getComputedStyle(el)[prop], 10) || 0;
}

// Start the collision checking loop
checkCollision();