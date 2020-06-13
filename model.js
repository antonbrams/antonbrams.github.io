const intro =
	'https://www.youtube-nocookie.com/embed/HMAyucUVoSo?rel=0&amp;controls=0&amp;showinfo=0'
//https://www.youtube-nocookie.com/embed/HMAyucUVoSo?rel=0&amp;controls=0&amp;showinfo=0

const dummy = {
	title:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	description:
		"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
}

const projects = [
	[
		'eSkin',
		[
			[
				'2.jpg',
				'Electronic skin for the bidirectional tactile communication between persons',
				'If one person touches his arm, another can feel it. A Bauhaus "Cyborg" HCI project.',
			],
			[
				'3.jpg',
				'The tactile and visual information is transmitted to another persons arm',
				'The eSkin consists out of single tactile pixels',
			],
			[
				'7.jpg',
				'eSkin pixels',
				'Each pixel has a force sensor, led and a vibrational motor. Powered by <i>ATTiny85</i> Chip.',
			],
			[
				'5.jpg',
				'Pixels are connected parallely with the Main Unit',
				'We used <i>I<sup>2</sup>C</i> to communicate with 31 pixel individualy.',
			],
			[
				'4.mp4',
				'One Unit speaks to another. Wirelessly.',
				`The Main Unit based on an <i>Arduino Feather</i> transfers user's touch wirelessly via <i>433Mhz Antenna</i>.`,
			],
			[
				'1.jpg',
				'You can see the touch',
				'eSkin acts as a low res screen, so you can see, where your eSkin partner touches himself.',
			],
			[
				'6.jpg',
				'Materials that feel natural',
				'We used the <i>Dragon Skin</i> Silicon to mimic the human skin. We 3d-printed forms to mold the eSkin casing.',
			],
		],
		['dark', 'hsl(35, 21%, 50%)'],
	],
	[
		'InfoSight',
		[
			[
				'7.jpg',
				'HUD experimental interface for Caretakers controlled by mouth clicks',
				`"Care Robot" HCI project in cooperation with the industrial design department, Bauhaus 2018.`,
			],
			[
				'1.mp4',
				'Keeping track of each Patient can be overwhelming',
				'We tried to reduce the manual paperwork of caretakers, so they can concentrate more on the patient.',
			],
			[
				'2.mov',
				'The system recognizes automatically, who is in a front of the caretaker',
				'We use Bluetooth Low Energy Trackers, to give our system a context.',
			],
			[
				'3.mov',
				'The caretaker sees in the HUD daily routines, that have to be performed on the patient',
				`Depending on the context InfoSight loads the patient's Tasks to the HUD and notifies the caretaker with a haptic pulse.`,
			],
			[
				'4.mov',
				'Caretaker is able to mark Tasks as done with his mouth',
				`Clicking patterns, made by the caretaker's mouth, are catched by the microphone, and intepret by our algorhythm. The associated todo is marked as done.`,
			],
			[
				'5.mov',
				`InfoSight updates the patient's account`,
				'Our prototype utilizes <i>Google Calender</i> to keep track of each patient',
			],
			[
				'6.jpg',
				'The prototype is based on Raspberry Pi',
				`The headset owns a monochromatic <i>LCD</i> with a selfmade lens-system, projecting a picture on a 45&#176; angled transparent mirror. Also we integrated a haptic actuator and a microphone. The headset is connected to a <i>Raspberry Pi</i>. Logic is implemented in <i>Node JS</i>.`,
			],
		],
		['light', 'hsl(210, 100%, 84%)', true],
		['Full Video', 'https://youtu.be/HpON28BZiOs'],
	],
	[
		'YanFeng',
		[
			[
				'1.mp4',
				'Dashboard design and programming for a futuristic selfdriving showcar',
				'This Project was all about the future of the autonomous driving. How could the dashboard interface look like?',
			],
			[
				'2.mp4',
				`Car's environment adapts to different driving modes`,
				'You choose between manual or autonomous drive. In the manual mode you see navigation and a rear camera view. The interface is implemented in <i>VVVV</i>.',
			],
			[
				'5.jpg',
				'The autonomous mode turns the car into a living room',
				'So the dashboard shows media selection. You can control it from the central console.',
			],
			[
				'4.mp4',
				'The ceiling changes its texture. Seats are making more space by moving back.',
				'All the components are controlled via <i>MQTT</i> protocol.',
			],
			[
				'3.mp4',
				'The central console',
				'Everything is controlled via central console, that is easy to access. The interface is implemented in <i>HTML</i> and <i>JavaScript</i>.',
			],
			[
				'6.jpg',
				'Door screens displays from windows control up to fitness statistics',
				'Screens are controlled by <i>Raspberry Pi</i>. Graphical Interfaces are made in <i>HTML</i> and <i>JavaScript</i> running within <i>Electron</i>.',
			],
		],
		['dark', 'hsl(45, 17%, 19%)', true],
		[
			'Full Project',
			'https://meso.design/en/projects/yanfeng-kinetic-seat-and-media-elements-for-autonomous-car-concept',
		],
	],
	[
		'Hyundai',
		[
			[
				'5.mov',
				'JavaScript, Cordova, IMU, Android, After Effects',
				'UI Design and Programming.',
			],
			['4.mov', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
		],
		['dark', 'rgb(43, 65, 108)'],
		[
			'Sport Showcar',
			'https://meso.design/en/projects/hyundai-modular-cockpit-for-concept-sports-car',
		],
	],
	[
		'BASF',
		[
			[
				'4.mp4',
				'Collaborative Tool across Devices. Design & Functional Prototyping.',
				'JavaScript, After Effects, Premiere, CGI, Illustrator',
			],
			['1.mov', dummy.title, dummy.description],
			['2.mp4', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
		],
		['light', 'hsl(232, 7%, 78%)', true],
	],
	[
		'TimeDNA',
		[
			[
				'3.mp4',
				'New Shape of Time. Full realization at Home.',
				'JavaScript, Three.js',
			],
			['2.mp4', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
			['1.mp4', dummy.title, dummy.description],
		],
		['dark', 'hsl(210, 10%, 7%)'],
	],
	[
		'OnTime',
		[
			// [
			// 	'https://www.youtube.com/watch?v=-O0U7h2WDmc&frags=pl%2Cwn',
			// 	dummy.title,
			// 	dummy.description,
			// ],
			[
				'1.mp4',
				'Interaction <a href="https://www.youtube.com/watch?v=-O0U7h2WDmc&frags=pl%2Cwn">Concept</a> to not forget a Pill. Full realization at Bauhaus.',
				'After Effects, Film Making',
			],
			['2.mp4', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
			['4.mov', dummy.title, dummy.description],
		],
		['dark', 'hsl(352, 100%, 70%)'],
	],
	[
		'KUKA',
		[
			[
				'3.mp4',
				'Presenters for the Showroom. UI Storyboards and <a href="https://www.tisch13.com/en/projects/kuka-brand-experience/">Programming</a>.',
				'VVVV, Illustrator',
			],
			['6.mov', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['4.jpg', dummy.title, dummy.description],
			['1.jpg', dummy.title, dummy.description],
		],
		['dark', '#9D3300'],
	],
	[
		'Fraport',
		[
			[
				'1.jpg',
				'LED Panel Animation. Opening Animation & <a href="https://meso.design/en/projects/fraport-architectural-light-effect-for-brand-communication-in-international-airport">Intros</a>.',
				'VVVV, Premiere',
			],
			['3.jpg', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['4.jpg', dummy.title, dummy.description],
		],
		['light', 'hsl(234, 13%, 85%)'],
	],
	[
		'Flux',
		[
			[
				'1.mp4',
				'Ambient live Decoration in a Bank. Typography, Choreography and <a href="https://neoanalog.io/flux/">Generative</a> Design.',
				'OpenFrameworks, C++',
			],
			['3.mp4', dummy.title, dummy.description],
			['2.mp4', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
		],
		['dark', '#73522C'],
	],
	[
		'ReMind',
		[
			[
				'7.mov',
				'Software remake of physical Calendar against Procrastination. Full realization at <a href="https://www.youtube.com/watch?v=gL_K9__scvM&frags=pl%2Cwn">Folkwang</a>.',
				'JavaScript, After Effects',
			],
			['1.jpg', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
			['6.mov', dummy.title, dummy.description],
			['4.mov', dummy.title, dummy.description],
			['5.mov', dummy.title, dummy.description],
		],
		['dark', 'hsl(216, 100%, 2%)', true],
	],
	[
		'Dance Dj',
		[
			[
				'1.mp4',
				'Bachelor Thesis for Intelligent Suit that composes Music. Full realization in <a href="https://www.youtube.com/watch?v=hTVp_bRUWas">Folkwang</a>.',
				'C++, Ableton Live',
			],
			['4.mp4', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
			['2.mp4', dummy.title, dummy.description],
		],
		['light', 'hsl(185, 100%, 87%)', true],
	],
	[
		'Kitchen Dj',
		[
			[
				'2.mp4',
				'Make music with cooking. Full realisation in <a href="https://www.youtube.com/watch?v=WfmR7fv0_Gs">Folkwang</a>.',
				'MaxMSP, Garage Band, Illustrator, After Effects, Crafting',
			],
			['1.mp4', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
		],
		['dark', 'hsl(240, 51%, 17%)'],
	],
	[
		'3D Graphics',
		[
			[
				'4.mp4',
				'Snippets of some 3D Animations from Projects.',
				'Cinema 4D',
			],
			['5.mov', dummy.title, dummy.description],
			['1.mp4', dummy.title, dummy.description],
			['2.mov', dummy.title, dummy.description],
		],
		['dark', 'hsl(212, 13%, 49%)'],
	],
	[
		'Logotype',
		[
			[
				'2.mov',
				'<a href="https://www.youtube.com/watch?v=HMAyucUVoSo">Home</a> Project, programmed in OpenFrameworks, animated in AE.',
				'OpenFrameworks, After Effects',
			],
			['5.mov', dummy.title, dummy.description],
			['4.mov', dummy.title, dummy.description],
			['3.mov', dummy.title, dummy.description],
			['1.mov', dummy.title, dummy.description],
		],
		['light', 'hsl(0, 0%, 83%)'],
	],
	[
		'Teleporto',
		[
			[
				'1.mp4',
				'Moviemaking Project. Full realization in <a href="https://www.youtube.com/watch?v=X_ZUUzQBHqo&frags=pl%2Cwn">Folkwang</a>.',
				'Final Cut, After Effects',
			],
			['5.mov', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
		],
		['dark', 'hsl(132, 10%, 18%)'],
	],
	[
		'Sketches',
		[
			[
				'9.jpg',
				'Industrial Design Sketches.',
				'Copic, Rhinoceros',
			],
			['5.jpg', dummy.title, dummy.description],
			['4.jpg', dummy.title, dummy.description],
			['7.jpg', dummy.title, dummy.description],
			['1.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
		],
		['light', 'hsl(201, 100%, 81%)'],
	],
	[
		'ToolBox',
		[
			[
				'2.jpg',
				'Own project to organize all Instruments at Home.',
				'Crafting',
			],
			['6.jpg', dummy.title, dummy.description],
			['7.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
			['4.jpg', dummy.title, dummy.description],
		],
		['light', '#FFECAC'],
	],
	[
		'Apple Table',
		[
			[
				'2.jpg',
				'Selfmade Table like in Apple Stores.',
				'Crafting',
			],
			['4.jpg', dummy.title, dummy.description],
			['5.jpg', dummy.title, dummy.description],
			['7.jpg', dummy.title, dummy.description],
			['1.jpg', dummy.title, dummy.description],
			['6.jpg', dummy.title, dummy.description],
		],
		['dark', 'hsl(39, 100%, 31%)'],
	],
]

const about = [
	{
		title: 'Experience',
		body: `3 years in total at <a target="blank" href="https://www.uni-weimar.de/en/media/chairs/computer-science-department/human-computer-interaction/research/hci-lab/">Interface Development Lab</a>, <a target="blank" href="http://meso.design">MESO</a>, <a target="blank" href="http://universal-interaction.com">Universal Interaction</a> and <a target="blank" href="http://dreiform.de">dreiform</a>. Studied Human-Computer Interaction [M.S.] at <a target='blank' href='https://www.uni-weimar.de/en/media/studies/human-computer-interaction-msc/'>Bauhaus</a> and Industrial Design [B.A.] at <a target='blank' href='https://www.folkwang-uni.de/home/gestaltung/studiengaenge/industrial-design/industrial-design-ba/'>Folkwang</a>.`,
	},
	{
		title: 'Fields',
		body:
			'Vision, Concept Development, Usability, UX, UI, Modeling, Mechanics, Software Engineering, Hardware Design, Generative Design, Presentation, Motiongraphics, Film, CGI, Sound Design, Choreography...',
	},
	{
		title: 'Tools',
		body:
			'React, Node JS, Sketching, Figma, Photoshop, After Effects, Premiere, Arduino, Raspberry Pi, PCB Development, 3D Printing, Three JS, OpenFrameworks, Processing, Unity 3D, Rhinoceros, Cinema 4D, Ableton Live, GIT, Workshop Tools...',
	},
	{
		title: 'Languages',
		body:
			'English [B2], German [C2], Russian [Native], JavaScript, JSX, HTML, CSS, C++, Bash, passive usage of other general-purpose languages...',
	},
]
