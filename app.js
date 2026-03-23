const SVG_CHARS = {
	warrior: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="wArmor" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#8a9bb0"/>
<stop offset="100%" stop-color="#4a5a70"/>
</linearGradient>
<linearGradient id="wHelm" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#b0bec5"/>
<stop offset="100%" stop-color="#607d8b"/>
</linearGradient>
</defs>
<!-- legs -->
<rect x="42" y="112" width="16" height="34" rx="4" fill="#4a5a70"/>
<rect x="62" y="112" width="16" height="34" rx="4" fill="#4a5a70"/>
<!-- boots -->
<rect x="40" y="136" width="20" height="10" rx="3" fill="#2c3e50"/>
<rect x="60" y="136" width="20" height="10" rx="3" fill="#2c3e50"/>
<!-- body / breastplate -->
<rect x="36" y="68" width="48" height="50" rx="8" fill="url(#wArmor)"/>
<rect x="44" y="74" width="32" height="38" rx="4" fill="#5d7a8a" opacity=".6"/>
<!-- plate lines -->
<line x1="36" y1="90" x2="84" y2="90" stroke="#3a4f60" stroke-width="1.5"/>
<line x1="36" y1="105" x2="84" y2="105" stroke="#3a4f60" stroke-width="1.5"/>
<!-- left arm + shield -->
<rect x="16" y="70" width="22" height="38" rx="6" fill="url(#wArmor)"/>
<!-- shield -->
<path d="M6 74 L24 70 L24 102 Q15 112 6 104 Z" fill="#c0392b"/>
<path d="M10 80 L20 77 L20 100 Q14 107 10 103 Z" fill="#e74c3c" opacity=".5"/>
<line x1="15" y1="71" x2="15" y2="109" stroke="#922b21" stroke-width="2"/>
<line x1="6" y1="90" x2="24" y2="90" stroke="#922b21" stroke-width="2"/>
<!-- right arm + sword -->
<rect x="82" y="70" width="22" height="38" rx="6" fill="url(#wArmor)"/>
<!-- sword -->
<rect x="101" y="28" width="6" height="60" rx="2" fill="#cfd8dc"/>
<rect x="96" y="66" width="16" height="5" rx="2" fill="#f5c842"/>
<rect x="102" y="86" width="5" height="10" rx="2" fill="#8d6e63"/>
<!-- neck -->
<rect x="53" y="60" width="14" height="12" rx="4" fill="#f0c085"/>
<!-- head -->
<ellipse cx="60" cy="50" rx="22" ry="20" fill="#f0c085"/>
<!-- helmet -->
<path d="M38 50 Q38 28 60 26 Q82 28 82 50 L78 50 Q76 36 60 34 Q44 36 42 50 Z" fill="url(#wHelm)"/>
<rect x="38" y="46" width="44" height="8" rx="2" fill="#90a4ae"/>
<!-- visor slit -->
<rect x="46" y="50" width="28" height="5" rx="2" fill="#1a237e" opacity=".7"/>
<!-- beard -->
<ellipse cx="60" cy="65" rx="12" ry="5" fill="#8d6e63" opacity=".5"/>
</svg>`,
	mage: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialGradient id="orb" cx="50%" cy="50%" r="50%">
<stop offset="0%" stop-color="#a78bfa"/>
<stop offset="100%" stop-color="#6d28d9"/>
</radialGradient>
<linearGradient id="robe" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#4c1d95"/>
<stop offset="100%" stop-color="#2e1065"/>
</linearGradient>
</defs>
<!-- staff -->
<rect x="90" y="36" width="5" height="108" rx="2" fill="#8d6e63"/>
<circle cx="92" cy="32" r="10" fill="url(#orb)" opacity=".9"/>
<circle cx="92" cy="32" r="6" fill="#c4b5fd"/>
<!-- robe -->
<path d="M38 80 Q32 100 28 150 L92 150 Q88 100 82 80 Z" fill="url(#robe)"/>
<!-- robe trim -->
<path d="M28 150 L38 100 L82 100 L92 150 Z" fill="#3b0764" opacity=".6"/>
<line x1="60" y1="100" x2="60" y2="150" stroke="#7c3aed" stroke-width="1.5" opacity=".5"/>
<!-- star pattern on robe -->
<text x="48" y="130" font-size="14" fill="#a78bfa" opacity=".5">✦</text>
<text x="64" y="115" font-size="10" fill="#a78bfa" opacity=".4">✦</text>
<!-- body upper -->
<rect x="40" y="70" width="40" height="20" rx="6" fill="#5b21b6"/>
<!-- left arm holding staff -->
<rect x="80" y="72" width="14" height="30" rx="5" fill="#5b21b6"/>
<!-- right arm -->
<rect x="26" y="72" width="14" height="28" rx="5" fill="#5b21b6"/>
<!-- hand -->
<ellipse cx="33" cy="101" rx="6" ry="5" fill="#f0c085"/>
<!-- neck -->
<rect x="54" y="60" width="12" height="14" rx="4" fill="#f0c085"/>
<!-- head -->
<ellipse cx="60" cy="50" rx="18" ry="19" fill="#f0c085"/>
<!-- long beard / hair hint -->
<ellipse cx="60" cy="68" rx="10" ry="4" fill="#dba040" opacity=".4"/>
<!-- eyes -->
<ellipse cx="53" cy="48" rx="4" ry="4" fill="#fff"/>
<ellipse cx="67" cy="48" rx="4" ry="4" fill="#fff"/>
<circle cx="54" cy="49" r="2.5" fill="#6d28d9"/>
<circle cx="68" cy="49" r="2.5" fill="#6d28d9"/>
<!-- glow pupils -->
<circle cx="54" cy="49" r="1" fill="#c4b5fd"/>
<circle cx="68" cy="49" r="1" fill="#c4b5fd"/>
<!-- pointed hat -->
<path d="M60 0 L82 48 L38 48 Z" fill="#3b0764"/>
<rect x="34" y="44" width="52" height="8" rx="3" fill="#4c1d95"/>
<!-- hat star -->
<text x="52" y="32" font-size="14" fill="#f5c842">✦</text>
<!-- cloak -->
<path d="M26 80 Q18 110 22 148 L38 148 Q30 110 40 80 Z" fill="#3b0764" opacity=".7"/>
<path d="M94 80 Q102 110 98 148 L82 148 Q90 110 80 80 Z" fill="#3b0764" opacity=".7"/>
</svg>`,
	rog: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="rLeather" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#1b4332"/>
<stop offset="100%" stop-color="#0d2818"/>
</linearGradient>
</defs>
<!-- legs -->
<rect x="44" y="112" width="14" height="35" rx="4" fill="#1b4332"/>
<rect x="62" y="112" width="14" height="35" rx="4" fill="#1b4332"/>
<!-- boots -->
<rect x="41" y="136" width="19" height="10" rx="3" fill="#0d1b0f"/>
<rect x="60" y="136" width="19" height="10" rx="3" fill="#0d1b0f"/>
<!-- body -->
<rect x="38" y="68" width="44" height="48" rx="8" fill="url(#rLeather)"/>
<!-- belt -->
<rect x="36" y="105" width="48" height="8" rx="3" fill="#2d4a1e"/>
<rect x="56" y="104" width="8" height="10" rx="2" fill="#f5c842"/>
<!-- left arm -->
<rect x="22" y="70" width="18" height="32" rx="5" fill="#1b4332"/>
<!-- right arm -->
<rect x="80" y="70" width="18" height="32" rx="5" fill="#1b4332"/>
<!-- left dagger -->
<rect x="12" y="62" width="4" height="28" rx="2" fill="#b0bec5"/>
<rect x="8" y="72" width="12" height="4" rx="1" fill="#f5c842"/>
<rect x="13" y="86" width="3" height="8" rx="1" fill="#5d4037"/>
<!-- right dagger -->
<rect x="104" y="62" width="4" height="28" rx="2" fill="#b0bec5"/>
<rect x="100" y="72" width="12" height="4" rx="1" fill="#f5c842"/>
<rect x="104" y="86" width="3" height="8" rx="1" fill="#5d4037"/>
<!-- neck -->
<rect x="54" y="58" width="12" height="14" rx="4" fill="#c8a070"/>
<!-- head -->
<ellipse cx="60" cy="48" rx="19" ry="19" fill="#c8a070"/>
<!-- scarf/mask over lower face -->
<path d="M41 56 Q60 62 79 56 L79 50 Q60 56 41 50 Z" fill="#0d2818"/>
<!-- eyes glowing -->
<ellipse cx="53" cy="45" rx="4" ry="3.5" fill="#0d2818"/>
<ellipse cx="67" cy="45" rx="4" ry="3.5" fill="#0d2818"/>
<circle cx="53" cy="45" r="2" fill="#00e676"/>
<circle cx="67" cy="45" r="2" fill="#00e676"/>
<circle cx="53" cy="45" r=".8" fill="#b9f6ca"/>
<circle cx="67" cy="45" r=".8" fill="#b9f6ca"/>
<!-- hood -->
<path d="M60 12 Q42 20 36 46 L84 46 Q78 20 60 12 Z" fill="#0d2818"/>
<ellipse cx="60" cy="46" rx="24" ry="5" fill="#0d2818"/>
<!-- hood shadow -->
<path d="M42 30 Q60 22 78 30 Q74 44 60 44 Q46 44 42 30 Z" fill="#1b4332" opacity=".4"/>
</svg>`,
	robber: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <linearGradient id="rbCloak" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7e5920"/>
        <stop offset="100%" stop-color="#4e3510"/>
    </linearGradient>
    </defs>
    <!-- legs -->
    <rect x="44" y="114" width="14" height="33" rx="4" fill="#4e3510"/>
    <rect x="62" y="114" width="14" height="33" rx="4" fill="#4e3510"/>
    <!-- boots -->
    <rect x="41" y="136" width="19" height="10" rx="3" fill="#2c1810"/>
    <rect x="60" y="136" width="19" height="10" rx="3" fill="#2c1810"/>
    <!-- body / cloak -->
    <path d="M36 72 Q30 100 28 150 L92 150 Q90 100 84 72 Z" fill="url(#rbCloak)"/>
    <!-- inner shirt -->
    <rect x="42" y="70" width="36" height="46" rx="6" fill="#d4a04a"/>
    <!-- belt / rope -->
    <rect x="36" y="106" width="48" height="7" rx="3" fill="#7e5920"/>
    <!-- money bag hanging on belt -->
    <ellipse cx="88" cy="114" rx="9" ry="10" fill="#f5c842"/>
    <rect x="84" y="104" width="8" height="6" rx="2" fill="#c9a227"/>
    <text x="83" y="118" font-size="10" fill="#7e5920">$</text>
    <!-- left arm -->
    <rect x="22" y="72" width="18" height="32" rx="5" fill="#7e5920"/>
    <!-- right arm -->
    <rect x="80" y="72" width="18" height="32" rx="5" fill="#7e5920"/>
    <!-- sack on left shoulder -->
    <ellipse cx="24" cy="68" rx="12" ry="10" fill="#a0845c"/>
    <rect x="20" y="58" width="6" height="12" rx="3" fill="#7a6040"/>
    <!-- neck -->
    <rect x="54" y="58" width="12" height="14" rx="4" fill="#f0c085"/>
    <!-- head -->
    <ellipse cx="60" cy="48" rx="20" ry="19" fill="#f0c085"/>
    <!-- cap -->
    <path d="M40 44 Q40 28 60 26 Q80 28 80 44 Z" fill="#4e3510"/>
    <rect x="37" y="42" width="46" height="6" rx="2" fill="#7e5920"/>
    <!-- eye mask -->
    <path d="M40 47 Q60 42 80 47 L80 54 Q60 50 40 54 Z" fill="#1a1a1a"/>
    <ellipse cx="50" cy="50" rx="6" ry="4" fill="#1a1a1a"/>
    <ellipse cx="70" cy="50" rx="6" ry="4" fill="#1a1a1a"/>
    <!-- eyes through mask -->
    <circle cx="50" cy="50" r="2.5" fill="#e74c3c"/>
    <circle cx="70" cy="50" r="2.5" fill="#e74c3c"/>
    <!-- mouth smirk -->
    <path d="M52 60 Q60 65 68 60" stroke="#c07040" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,
	child: `<svg viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="chShirt" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#60a5fa"/>
<stop offset="100%" stop-color="#2563eb"/>
</linearGradient>
</defs>
<!-- legs -->
<rect x="46" y="116" width="12" height="32" rx="5" fill="#d97706"/>
<rect x="62" y="116" width="12" height="32" rx="5" fill="#d97706"/>
<!-- shoes -->
<ellipse cx="52" cy="149" rx="10" ry="6" fill="#1e3a5f"/>
<ellipse cx="68" cy="149" rx="10" ry="6" fill="#1e3a5f"/>
<!-- shorts -->
<rect x="40" y="108" width="40" height="18" rx="6" fill="#d97706"/>
<!-- body / shirt -->
<rect x="38" y="74" width="44" height="40" rx="10" fill="url(#chShirt)"/>
<!-- shirt star -->
<text x="50" y="100" font-size="18" fill="#fde68a">★</text>
<!-- left arm -->
<rect x="24" y="76" width="15" height="26" rx="6" fill="url(#chShirt)"/>
<!-- right arm -->
<rect x="81" y="76" width="15" height="26" rx="6" fill="url(#chShirt)"/>
<!-- hands -->
<circle cx="31" cy="105" r="6" fill="#fde3b4"/>
<circle cx="89" cy="105" r="6" fill="#fde3b4"/>
<!-- neck -->
<rect x="54" y="62" width="12" height="14" rx="5" fill="#fde3b4"/>
<!-- big round head -->
<circle cx="60" cy="44" r="28" fill="#fde3b4"/>
<!-- rosy cheeks -->
<circle cx="40" cy="52" r="7" fill="#f9a8a8" opacity=".5"/>
<circle cx="80" cy="52" r="7" fill="#f9a8a8" opacity=".5"/>
<!-- eyes big + shiny -->
<ellipse cx="51" cy="42" rx="7" ry="7" fill="#fff"/>
<ellipse cx="69" cy="42" rx="7" ry="7" fill="#fff"/>
<circle cx="52" cy="43" r="4.5" fill="#3b82f6"/>
<circle cx="70" cy="43" r="4.5" fill="#3b82f6"/>
<circle cx="51" cy="42" r="2" fill="#1e3a5f"/>
<circle cx="69" cy="42" r="2" fill="#1e3a5f"/>
<circle cx="53" cy="40" r="1.2" fill="#fff"/>
<circle cx="71" cy="40" r="1.2" fill="#fff"/>
<!-- smile -->
<path d="M50 56 Q60 64 70 56" stroke="#c07040" stroke-width="2" fill="none" stroke-linecap="round"/>
<!-- hair with cow-lick -->
<path d="M32 35 Q36 14 60 16 Q84 14 88 35 Q80 20 60 20 Q40 20 32 35 Z" fill="#92400e"/>
<path d="M60 16 Q65 6 70 14" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
<!-- item: lollipop in hand -->
<rect x="88" y="86" width="3" height="22" rx="1" fill="#d97706"/>
<circle cx="89" cy="84" r="7" fill="#f43f5e"/>
<circle cx="89" cy="84" r="4" fill="#fbbf24" opacity=".7"/>
</svg>`,
};

/*
Class labels for display
*/
const CLASS_LABELS = {
	warrior: "Warrior",
	mage: "Mage",
	rog: "Rog",
	robber: "Robber",
	child: "Child",
};
/*
const $ = document.querySelector("");
*/
const $characterCard = document.querySelector("#characterCard");
const $previewClass = document.querySelector("#previewClass");
const $previewName = document.querySelector("#previewName");
const $previewLife = document.querySelector("#previewLife");
const $previewArt = document.querySelector("#previewArt");
const $previewStr = document.querySelector("#previewStr");
const $inputName = document.querySelector("#inputName");
const $cardClass = document.querySelector("#cardClass");
const $inputLife = document.querySelector("#inputLife");
const $btnCreate = document.querySelector("#btnCreate");
const $btnCancel = document.querySelector("#btnCancel");
const $cardName = document.querySelector("#cardName");
const $cardLife = document.querySelector("#cardLife");
const $inputStr = document.querySelector("#inputStr");
const $charForm = document.querySelector("#charForm");
const $btnClose = document.querySelector("#btnClose");
const $cardArt = document.querySelector("#cardArt");
const $cardStr = document.querySelector("#cardStr");
const $lifeVal = document.querySelector("#lifeVal");
const $Create = document.querySelector("#Create");
const $strVal = document.querySelector("#strVal");
const $dialog = document.querySelector("dialog");

/*
.addEventListener("", () => {})
*/

$inputStr.addEventListener("input", () => {
	$strVal.textContent = $inputStr.value;
	$previewStr.textContent = $inputStr.value;
});

$inputLife.addEventListener("input", () => {
	$lifeVal.textContent = $inputLife.value;
	$previewLife.textContent = $inputLife.value;
});

$btnCreate.addEventListener("click", () => {
	$dialog.showModal();
});

$btnCancel.addEventListener("click", () => cancel_btn());

$btnClose.addEventListener("click", () => cancel_btn());

$charForm.addEventListener("submit", (e) => {
	e.preventDefault();
	$dialog.close();
	const data = new FormData($charForm);
	const name = data.get("inputName");
	const perso = data.get("cls");
	const str = data.get("str");
	const life = data.get("life");
	apearcard(perso, name, str, life);
	$Create.classList.add("none");
});

$charForm.addEventListener("change", () => {
	const data = new FormData($charForm);
	const perso = data.get("cls");
	if (perso == "child") {
		$previewArt.innerHTML = SVG_CHARS.child;
		$previewClass.textContent = CLASS_LABELS.child;
	} else if (perso == "robber") {
		$previewArt.innerHTML = SVG_CHARS.robber;
		$previewClass.textContent = CLASS_LABELS.robber;
	} else if (perso == "rog") {
		$previewArt.innerHTML = SVG_CHARS.rog;
		$previewClass.textContent = CLASS_LABELS.rog;
	} else if (perso == "mage") {
		$previewArt.innerHTML = SVG_CHARS.mage;
		$previewClass.textContent = CLASS_LABELS.mage;
	} else if (perso == "warrior") {
		$previewArt.innerHTML = SVG_CHARS.warrior;
		$previewClass.textContent = CLASS_LABELS.warrior;
	}
});

$inputName.addEventListener("input", () => {
	if ($inputName.value.length === 0) {
		$previewName.textContent = "Herro";
	} else {
		$previewName.textContent = $inputName.value;
	}
});

function cancel_btn() {
	$dialog.close();
	$charForm.reset();
	$previewArt.innerHTML = SVG_CHARS.warrior;
	$previewClass.textContent = CLASS_LABELS.warrior;
}

function apearcard(perso, name, str, life) {
	if (perso == "child") {
		$cardArt.innerHTML = SVG_CHARS.child;
		$cardClass.textContent = CLASS_LABELS.child;
	} else if (perso == "robber") {
		$cardArt.innerHTML = SVG_CHARS.robber;
		$cardClass.textContent = CLASS_LABELS.robber;
	} else if (perso == "rog") {
		$cardArt.innerHTML = SVG_CHARS.rog;
		$cardClass.textContent = CLASS_LABELS.rog;
	} else if (perso == "mage") {
		$cardArt.innerHTML = SVG_CHARS.mage;
		$cardClass.textContent = CLASS_LABELS.mage;
	} else if (perso == "warrior") {
		$cardArt.innerHTML = SVG_CHARS.warrior;
		$cardClass.textContent = CLASS_LABELS.warrior;
	}
	if (name == "") {
		$cardName.textContent = "Herro";
	} else {
		$cardName.textContent = name;
	}
	$cardStr.textContent = str;
	$cardLife.textContent = life;
	$characterCard.classList.add("visible");
}
