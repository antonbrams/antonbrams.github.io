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
			['2.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
			['1.jpg', dummy.title, dummy.description],
			['5.jpg', dummy.title, dummy.description],
			['6.jpg', dummy.title, dummy.description],
			['7.jpg', dummy.title, dummy.description],
		],
		['dark', 'hsl(35, 21%, 50%)'],
	],
	[
		'InfoSight',
		[
			[
				'1.mp4',
				dummy.title,
				`<a
					class="button"
					href="https://youtu.be/HpON28BZiOs"
					target="_blank"
				>
					YouTube
				</a>`,
			],
			['2.mov', dummy.title, dummy.description],
			['3.mov', dummy.title, dummy.description],
			['4.mov', dummy.title, dummy.description],
			['5.mov', dummy.title, dummy.description],
			['6.jpg', dummy.title, dummy.description],
			['7.jpg', dummy.title, dummy.description],
		],
		['light', 'hsl(210, 100%, 84%)', true],
	],
	[
		'YanFeng',
		[
			[
				'1.mp4',
				'Futuristic selfdriving <a href="https://meso.design/en/projects/yanfeng-kinetic-seat-and-media-elements-for-autonomous-car-concept" target="_blank">Show Car</a>. Storyboards and UI Programming.',
				'JavaScript, NodeJS, Leap Motion, VVVV',
			],
			['2.mp4', dummy.title, dummy.description],
			['3.mp4', dummy.title, dummy.description],
			['4.mp4', dummy.title, dummy.description],
		],
		['dark', 'hsl(45, 17%, 19%)', true],
	],
	[
		'Hyundai',
		[
			[
				'5.mov',
				'JavaScript, Cordova, IMU, Android, After Effects',
				'<a href="https://meso.design/en/projects/hyundai-modular-cockpit-for-concept-sports-car" target="_blank">Sport Showcar</a>. UI Design and Programming.',
			],
			['4.mov', dummy.title, dummy.description],
			['2.jpg', dummy.title, dummy.description],
			['3.jpg', dummy.title, dummy.description],
		],
		['dark', 'rgb(43, 65, 108)'],
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
		body: `3 years of professional experience at <a target='blank' href='http://meso.design'>MESO</a>, <a target='blank' href='http://universal-interaction.com'>Universal Interaction</a> and <a target='blank' href='http://dreiform.de'>dreiform</a>. Studied Human-Computer Interaction [M.S.] at <a target='blank' href='https://www.uni-weimar.de/en/media/studies/human-computer-interaction-msc/'>Bauhaus</a> and Industrial Design [B.A.] at <a target='blank' href='https://www.folkwang-uni.de/home/gestaltung/studiengaenge/industrial-design/industrial-design-ba/'>Folkwang</a>.`,
	},
	{
		title: 'Fields',
		body:
			'Project Managment, Presentation, UI, UX, Prototyping, Engineering, Crafting, Hardware Design, Generative Design, Motion, 3D Modeling, Film, CGI, Music...',
	},
	{
		title: 'Platforms',
		body:
			'Full Stack Web Technologies, Arduino & Raspberry Pi, Three.js, OpenFrameworks, Unity 3D, Processing, vvvv, MaxMSP...',
	},
	{
		title: 'Tools',
		body:
			'Wacom, Adobe Products, Rhinoceros, Cinema 4D, Ableton Live...',
	},
	{
		title: 'Programming Languages',
		body:
			'JavaScript, CSS, HTML, C++, C, Bash, Python, AppleScript, Java, C#...',
	},
	{
		title: 'Human Languages',
		body: 'English [B2], German [C2], Russian [Native].',
	},
	{
		title: 'Hobbys',
		body: 'Philosophy, Beatbox, Drums, Gymnastics...',
	},
	{
		title: 'Get in Touch',
		body: `If you have any Questions, just contact me on <a href="mailto:${
			'hello' + '@' + 'antonbrams' + '.' + 'io'
		}">&#104;&#101;&#108;&#108;&#111;&#64;&#97;&#110;&#116;&#111;&#110;&#98;&#114;&#97;&#109;&#115;&#46;&#105;&#111;</a>`,
	},
]
