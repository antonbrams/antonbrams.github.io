
let intro = 'https://www.youtube-nocookie.com/embed/HMAyucUVoSo?rel=0&amp;controls=0&amp;showinfo=0'
//https://www.youtube-nocookie.com/embed/HMAyucUVoSo?rel=0&amp;controls=0&amp;showinfo=0

let projects = [[
		'YanFeng',
		'Futuristic selfdriving Show Car, UI programming',
		'JavaScript, vvvv',
		'[--|]1.mp4 [-]2.mp4 4.mp4 H [-|]3.mp4',
		'https://meso.design/en/projects/yanfeng-kinetic-seat-and-media-elements-for-autonomous-car-concept'
	],[
		'TimeDNA',
		'The new Shape of Time - Home Project',
		'Three.js',
		'1.mp4 H [|--]3.mp4 [-]4.mp4 2.mp4'
	],[
		'Hyundai',
		'UI Design and Programming for the Showcar',
		'Cordova, JS, IMU, Android, Adobe AE',
		'[--]5.mov H [-]2.jpg [-]4.mov 1.jpg [-|]3.jpg',
		'https://meso.design/en/projects/hyundai-modular-cockpit-for-concept-sports-car'
	],[
		'BASF',
		'Design & Functional Prototype of a Collaborative Tool',
		'web technologies, Adobe AE, Premiere, scenario, illustrator',
		'H [--|]4.mp4 3.mp4 [|]1.mov [-]2.mp4'
	],[
		'OnTime',
		'Interaction Concept to not forget a Pill',
		'Adobe AE',
		'2.mp4 [|--]1.mp4 H [-]3.mp4 [|-]4.mov',
		'https://www.youtube.com/watch?v=-O0U7h2WDmc&frags=pl%2Cwn'
	],[
		'Flux',
		'Typography, Choreography and Generative Design',
		'OpenFrameworks',
		'H [--|]1.mp4 [|-]2.mp4 4.mp4 [-]3.mp4',
		'https://neoanalog.io/flux/'
	],[
		'KUKA',
		'Programming and Storyboards of Presenters',
		'vvvv, Adobe AI',
		'[--|]3.mp4 H [|-]1.jpg [-]6.mov 4.jpg 2.jpg',
		'https://www.tisch13.com/en/projects/kuka-brand-experience/'
	],[
		'ReMind',
		'Experience Design Project at Folkwang',
		'JS, Adobe AE',
		'[--|]7.mov 5.mov H [-]6.mov [-|]4.mov',
		'https://www.youtube.com/watch?v=gL_K9__scvM&frags=pl%2Cwn'
	],[
		'Dance Dj',
		'Bachelor Thesis for Intelligent Suit that composes Music',
		'Cinema 4D, Adobe AE',
		'[|--]1.mp4 H [|-]2.mp4 [-]4.mp4 3.mp4',
		'https://www.youtube.com/watch?v=hTVp_bRUWas'
	],[
		'Kitchen Dj',
		'Folkwang Music Project, fully interactive Kitchen',
		'MaxMSP, Adobe AI, Adobe AE, crafting',
		'1.mp4 [--|]2.mp4 H [-|]4.mp4 [-]3.mp4',
		'https://www.youtube.com/watch?v=WfmR7fv0_Gs'
	],[
		'3D Graphics',
		'Snippets of some 3D Animations from Projects',
		'Cinema 4D',
		'[|--]4.mp4 H 2.mov [-]5.mov [|-]1.mp4'
	],[
		'Fraport',
		'LED Panel Animation',
		'vvvv, Adobe Premiere',
		'H [|--]3.jpg [-]1.jpg 4.jpg [-|]2.jpg',
		'https://meso.design/en/projects/fraport-architectural-light-effect-for-brand-communication-in-international-airport'
	],[
		'Logotype',
		'Home Project, programmed in OpenFrameworks, animated in AE',
		'OpenFrameworks, Adobe AE',
		'[-]4.mov H 1.mov 5.mov [|-]2.mov 3.mov',
		'https://www.youtube.com/watch?v=HMAyucUVoSo'
	],[
		'Teleporto',
		'Folkwang Moviemaking Project',
		'FinalCut, AE',
		'4.mp4 [--|]1.mp4 H [--]2.jpg [-]3.mp4 5.mov',
		'https://www.youtube.com/watch?v=X_ZUUzQBHqo&frags=pl%2Cwn'
	],[
		'Sketches',
		'Industrial Design Sketches',
		'Copic',
		'[||]7.jpg [--]9.jpg H [-]4.jpg [-]5.jpg 1.jpg 3.jpg'
	],[
		'ToolBox',
		'Own project to organize all Instruments at Home',
		'Cordova, JS, Accelerometer, Android',
		'H [|-]2.jpg [|-]6.jpg [|]3.jpg 4.jpg 7.jpg'
	],[
		'Apple Table',
		'Selfmade Table like in Apple Stores',
		'Crafting',
		'[|--]4.jpg H [|]7.jpg [|]1.jpg [-]2.jpg 6.jpg'
]]

let about = [
	{
		body  : `The basis for all my work is the key philosophy that with enough passion and patience a creative person can achieve almost anything they set out to do. Through unrestrained thinking combined with a critical and communicative approach I strive to bring all my products to perfection, even building my own tools along the way to facilitate the process.
		<br><br><div class='divider'></div><br><br>`
	},
	{
		title : 'Experience',
		body  : 
			`3 years of professional experience at
			<a target='blank' href='http://meso.design'>MESO</a>, 
			<a target='blank' href='http://universal-interaction.com'>Universal Interaction</a> 
			and
			<a target='blank' href='http://dreiform.de'>dreiform</a>,
			
			Human Computer Interaction [M.S.] at <a target='blank' href='https://www.uni-weimar.de/en/media/studies/human-computer-interaction-msc/'>Bauhaus</a> and 
			
			Industrial Design [B.A.] at <a target='blank' href='https://www.folkwang-uni.de/home/gestaltung/studiengaenge/industrial-design/industrial-design-ba/'>Folkwang</a>.`
	},
	{
		title : 'Fields', 
		body  : 'Project Managment, Presentation, UI, UX, Prototyping, Engineering, Crafting, Hardware Design, Generative Design, Motion, 3D Modeling, Film, CGI, Music...'
	},
	{
		title : 'Platforms', 
		body  : 'Full Stack Web Technologies, Arduino & Raspberry Pi, Three.js, OpenFrameworks, Unity 3D, Processing, vvvv, MaxMSP...'
	},
	{
		title : 'Coding', 
		body  : 'JavaScript, CSS, HTML, C++, C, Bash, Python, AppleScript, Java, C#...'
	},
	{
		title : 'Tools', 
		body  : 'Wacom, Adobe Products, Rhinoceros, Cinema 4D, Ableton Live...'
	},
	{
		title : 'Languages', 
		body  : 'English [B2], German [C2], Russian [Native].'
	},
	{
		title : 'Secondary Skills', 
		body  : 'Philosophy, Music Composition, Beatbox, Drums, Gymnastics...'
	},
]
