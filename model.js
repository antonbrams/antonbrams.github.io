const Model = {
	intro: [
		`Experience design down to zeros and ones`,
		`I develop concepts.
		<br/><br/>

		My superpower is multi&shy;disciplinarity. From aesthetics, down to bits and bytes, I bring various aspects of the product in harmony.
		<br/><br/>

		An eye for detail, and the ability to drill down to the very essence of things make my design simple, functional and emotional.
		<br/><br/>

		My passion keeps me up late at night exploring useful mechanisms. I  integrate them into my design framework to stay at the cutting edge of innovation.`,
	],
	about: [
		[
			'Experience',
			`3 years work experience at <a target="blank" href="https://www.uni-weimar.de/en/media/chairs/computer-science-department/human-computer-interaction/research/hci-lab/">Interface Development Lab</a>, <a target="blank" href="http://meso.design">MESO</a>, <a target="blank" href="http://universal-interaction.com">Universal Interaction</a> and <a target="blank" href="http://dreiform.de">dreiform</a>. Studied Human-Computer Interaction [M.S.] at <a target='blank' href='https://www.uni-weimar.de/en/media/studies/human-computer-interaction-msc/'>Bauhaus</a> and Industrial Design [B.A.] at <a target='blank' href='https://www.folkwang-uni.de/home/gestaltung/studiengaenge/industrial-design/industrial-design-ba/'>Folkwang</a>.`,
		],
		[
			'Fields',
			'Vision, concept development, usability, UX, UI, modeling, mechanics, software engineering, hardware design, generative design, presentation, motion graphics, film, CGI, sound design, choreography...',
		],
		[
			'Tools',
			'React, Node JS, Sketching, Figma, Photoshop, After Effects, Premiere, Arduino, Raspberry Pi, PCB Development, 3D Printing, Three JS, OpenFrameworks, Processing, Unity 3D, Rhinoceros, Cinema 4D, Ableton Live, GIT, workshop tools...',
		],
		[
			'Languages',
			'English [B2], German [C2], Russian [Native], JavaScript, JSX, HTML, CSS, C++, Bash, passive usage of other general-purpose languages...',
		],
	],

	projects: [
		[
			'eSkin',
			[
				[
					'2.jpg',
					'Electronic skin for the bidirectional tactile communication between people',
					'If one person touches his arm, another can feel it. "Cyborg" HCI project. <span>Idea, PCB design, SMD soldering and software at Bauhaus in 2019</span>',
				],
				[
					'3.jpg',
					`The tactile and visual information is transmitted to another person's arm`,
					'The eSkin consists of single tactile pixels',
				],
				[
					'7.jpg',
					'eSkin pixels',
					'Each pixel has a force sensor, led and a vibrational motor, powered by <i>ATTiny85</i> Chip.',
				],
				[
					'5.jpg',
					'Pixels are connected parallely with the Main Unit',
					'We used <i>I<sup>2</sup>C</i> to communicate with 31 pixels individually.',
				],
				[
					'4.mp4',
					'One Unit speaks to another, wirelessly.',
					`The Main Unit based on an <i>Arduino Feather</i> transfers user's touch wirelessly via <i>433Mhz Antenna</i>.`,
				],
				[
					'1.jpg',
					'You can see the touch',
					'eSkin acts as a low res screen, so you can see where your eSkin partner touches himself.',
				],
				[
					'6.jpg',
					'Materials that feel natural',
					'We used the <i>Dragon Skin</i> Silicone to mimic the human skin. We 3d-printed forms to mold the eSkin casing.',
				],
			],
			['dark', 'rgb(209, 112, 67)', false, false],
		],
		[
			'InfoSight',
			[
				[
					'7.jpg',
					'HUD experimental interface for caretakers controlled by mouth clicks',
					'"Care Robot" HCI project in cooperation with the industrial design department. The functional prototype was built in just 3 days. <span>Idea, industrial design, hardware and software at Bauhaus in 2018</span>',
				],
				[
					'1.mp4',
					'Keeping track of each Patient can be overwhelming',
					'We tried to reduce the manual paperwork of caretakers, so they can concentrate more on the patient.',
				],
				[
					'2.mov',
					'The system recognizes automatically, who is in front of the caretaker',
					'We use Bluetooth Low Energy Trackers, to give our system a context.',
				],
				[
					'3.mov',
					'The caretaker sees in the HUD the daily routines, that have to be performed on the patient',
					`Depending on the context InfoSight loads the patient's tasks to the HUD and notifies the caretaker with a haptic pulse.`,
				],
				[
					'4.mov',
					'Caretaker is able to mark tasks as done using his mouth',
					`No hands or voice commands are required. Silent clicking patterns, made by the caretaker's mouth, are catched by the microphone, and interpreted by our algorithm. The associated "todo" is marked as done.`,
				],
				[
					'5.mov',
					`InfoSight updates the patient's account`,
					'Our prototype utilizes <i>Google Calendar</i> to keep track of each patient',
				],
				[
					'6.jpg',
					'The prototype is based on Raspberry Pi',
					`The headset owns a monochromatic <i>LCD</i> with a selfmade lens-system, projecting a picture on a 45&#176; angled transparent mirror. Also we integrated a haptic actuator and a microphone. The headset is connected to a <i>Raspberry Pi</i>. The logic is implemented in <i>Node JS</i>.`,
				],
			],
			['light', 'rgb(200, 208, 215)', true, false],
			['Full Video', 'https://youtu.be/HpON28BZiOs'],
		],
		[
			'YanFeng',
			[
				[
					'1.mp4',
					'Dashboard design and programming for a futuristic self driving showcar',
					'This Project was all about the future of autonomous driving. How could the dashboard interface look like? <span>Concept, graphic design and software at MESO in 2017</span>',
				],
				[
					'2.mp4',
					`Car's environment adapts to different driving modes`,
					'The user chooses between manual or autonomous drive. In the manual, the user sees navigation and a rear camera view. The interface is implemented in <i>VVVV</i>.',
				],
				[
					'5.jpg',
					'The autonomous mode turns the car into a living room',
					'So, the dashboard shows media selection. The user can control it from the central console.',
				],
				[
					'4.mp4',
					'The ceiling changes its texture. Seats make more space by rearranging themselves.',
					'All the components are controlled via <i>MQTT</i> protocol.',
				],
				[
					'3.mp4',
					'The central console',
					'Everything is controlled via a central console that is easy to access. The interface is implemented in <i>HTML</i> and <i>JavaScript</i>.',
				],
				[
					'6.jpg',
					'Door screens display from window control up to fitness statistics',
					'Screens are controlled by <i>Raspberry Pi</i>. Graphical Interfaces are made in <i>HTML</i> and <i>JavaScript</i> running within <i>Electron</i>.',
				],
			],
			['dark', 'rgb(120, 95, 73)', true, true],
			[
				'Project Page',
				'https://meso.design/en/projects/yanfeng-kinetic-seat-and-media-elements-for-autonomous-car-concept',
			],
		],
		[
			'Hyundai',
			[
				[
					'5.mov',
					'Modular cockpit for concept sports car Hyundai RN30',
					'The display systems simulate a lap on the Nürburgring based on real telemetric data. <span>Generative design and software at MESO in 2016</span>',
				],
				[
					'3.jpg',
					'The mobile interface design seamlessly blends into the interior design of the vehicle',
					'Each module consists of a <i>Samsung Galaxy S6</i> smartphone and a power converter.',
				],
				[
					'2.mp4',
					'The first smartphone module is attached behind the steering wheel',
					'It shows the gear, velocity, current rotation speed, and other critical car information.',
				],
				[
					'4.mov',
					'The steering wheel UI stays always up!',
					`The second module displays an interactive route simulation of the Nürburgring with the car's position, based on real telemetric data and conveys the feeling of a racing experience.`,
				],
				[
					'6.mp4',
					'Generative Design',
					`The real telemetric data has been used to drive screen animations in <i>Adobe After Effects</i>. The resulting footage was playbacked in <i>Cordova</i> web sandbox on the <i>Android</i> system and rotated by the smartphone's IMU.`,
				],
			],
			['dark', 'rgb(105, 127, 152)', false, true],
			[
				'Project Page',
				'https://meso.design/en/projects/hyundai-modular-cockpit-for-concept-sports-car',
			],
		],
		[
			'BASF',
			[
				[
					'4.mp4',
					'Intuitive digital system for collective brainstomings using multiple devices',
					'BASF provides expert support for their customers in selecting the best materials for their application. Therefore, it comes to collective brainstomings. <span>Concept, software prototyping, filmmaking and CGI at MESO in 2018</span>',
				],
				[
					'1.mov',
					'The customer scans the material, shares and discusses',
					'By walking in the BASF Material Gallery, the customer scans materials and shares them on the wall',
				],
				[
					'2.mp4',
					'The coach logs in and the brainstoming starts',
					'The system reads <i>RFID</i> tags, and automatically logs participants into the meeting room.',
				],
				[
					'3.mp4',
					'brainstoming happens directly on the wall or from your device',
					'The movie mockup was made with <i>green screen</i> technique, <i>2D tracking</i>, <i>Adobe After Effects</i> and <i>Adobe Premiere</i>. The functional prototype was implemented in <i>JavaScript</i> and <i>Node Js</i>, communicating via <i>WebSocket</i>.',
				],
			],
			['light', 'rgb(217, 217, 217)', true, true],
		],
		[
			'TimeDNA',
			[
				[
					'3.mp4',
					'The experimental way to represent time and data in Virtual Reality',
					'60 seconds are 1 minute. 60 minutes are 1 hour. If seconds were a helix, it would wrap around minutes. Minutes would wrap around hours... <span>Idea and software at Bauhaus in 2017</span>',
				],
				[
					'2.mp4',
					'You see the perspective of time',
					'The interface provides an easy navigation in 3D, using VR controller',
				],
				[
					'4.mp4',
					'You see the data in the past and future',
					'The dataset did mockup a temperature change over the year timespan. You can read it by clicking on the radial graph.',
				],
				[
					'1.mp4',
					'You can fly through time',
					'The interface utilizes <i>Three JS</i> framework and runs in the <i>Electron</i> application. <i>Integral map</i> algorithm (learned in the <i>Image Analysis and Recognition</i> course) has been utilized to drastically reduce the loading time of the mockup data.',
				],
			],
			['dark', 'rgb(23, 23, 23)', false, false],
		],
		[
			'OnTime',
			[
				[
					'1.mp4',
					'Tangible interface to not forget a pill',
					'Some people have a whole set of pills that have to be taken in different intervals. The radial interface might help you to setup alarms the intuitive way. This ring scans the packaging, so it knows the medicine. <span>Idea, filmmaking and CGI at Bauhaus in 2017</span>',
				],
				[
					'2.mp4',
					'The tangible interface is almost alive',
					'The ring blinks and vibrates to get your attention. As you lift it, it displays the name of the drug.',
				],
				[
					'3.mp4',
					'Take it everywhere',
					'It might be shaped as a fitness band, so you can wear it. And yes... we used a tape for the mockup &#129323;',
				],
				[
					'4.mov',
					'It will never leave you in peace, until you scan the package',
					'The video has been made with <i>After Effects</i> and lots of manual tracking',
				],
			],
			['dark', 'rgb(235, 77, 92)', false, false],
			['Full Video', 'https://youtu.be/-O0U7h2WDmc'],
		],
		[
			'KUKA',
			[
				[
					'3.jpg',
					'Digital presenter for the industry brand showroom',
					`MESO and Tisch13 designed a massive showroom with a lot of interactive exhibits. <span>Concept, storyboards and software at MESO in 2016</span>`,
				],
				[
					'1.jpg',
					'Orange Intelligenz presenter',
					`This presenter combines analog and digital. The tangible ring-pointer is made in the shape of the brand logo and is tracked by the table's touchscreen.`,
				],
				[
					'4.jpg',
					'Move to select, rotate to scroll',
					'The visitor can move the ring on the category of interest and get additional information. Once selected, by rotating a ring, the visitor can list between topics',
				],
				[
					'2.mov',
					'Debug mode',
					`Floating categories shouldn't collide, so a custom collision detection was programmed, besides the actual application logic. This was my first project with MESO and also my very first experience with the famous <i>VVVV</i> software, which is, by the way, was co-created by MESO back in the days.`,
				],
			],
			['dark', 'rgb(175, 48, 0)', false, true],
			[
				'Project Page',
				'https://www.tisch13.com/en/projects/kuka-brand-experience/',
			],
		],
		[
			'Fraport',
			[
				[
					'1.jpg',
					'Digital brand communication for Frankfurt International Airport',
					'MESO developed an adaptive real-time media data feed for the 435m LED stripe to form a harmonic impression with the advertisment.<span>Generative animation and video cut at MESO in 2016',
				],
				[
					'5.mp4',
					'Opening ceremony',
					`My part in this big project was a montage of the footage, shown on the opening ceremony of Fraport's new redesign. The footage was composed in <i>Adobe Premiere</i>`,
				],
				[
					'2.jpg',
					'LED opening animation',
					'Animation sequences were created for the LED stripe and synced to the ceremony footage. The generative animation was done in <i>VVVV</i>.',
				],
			],
			['dark', 'rgb(38, 43, 88)', false, true],
			[
				'Project Page',
				'https://meso.design/en/projects/fraport-architectural-light-effect-for-brand-communication-in-international-airport',
			],
		],
		[
			'Flux',
			[
				[
					'1.mp4',
					'Permanent installation in Volksbank',
					'Natural phenomena invites visitors to dive into an immersive experience for all senses. <span>Typography, choreography and generative design at Neoanalog in 2015',
				],
				[
					'3.mp4',
					'Walls, screens, orchestra',
					'Beautiful walls open a window into various worlds of nature, created with generative design. The whole experience is supported by a settled generative background sound.',
				],
				[
					'2.mp4',
					'Water, wind, light',
					`Flux can dynamically switch between three themes. I've been helping Neoanalog team to program some parts of this beautiful generative installation. Flux was implemented in <i>OpenFrameworks</i>.`,
				],
				[
					'4.mp4',
					'Digital Posters',
					'Posters show opening times, events and news. Depending on the content, the typographical layout adapts generativity. All the posters are animated in sync. So the system for layout and choreography was also my duty.',
				],
			],
			['light', 'rgb(215, 188, 140)', false, true],
			['Project Page', 'https://neoanalog.io/flux/'],
		],
		[
			'ReMind',
			[
				[
					'7.mov',
					'Calendar against procrastination',
					'This interface was a digital remake of a tangible object, created in a research, led by prof. dr. Marc Hassenzahl. It was realized as a video concept and a Progressive Web App using <i>JavaScript</i>. <span>Idea, CGI, software at Folkwang in 2014</span>',
				],
				[
					'1.jpg',
					'Ring rotates, pucks are falling',
					`Pucks are user's todos, and the ring is a "one month" clock. Once the right day hits, the puck falls on the floor and forces you to engage into the decision process - do it now or later. ReMind in depth <a href="http://www.pleasurabletroublemakers.com/remind-en" target="blank">here</a>.`,
				],
				[
					'2.jpg',
					'Visual inspiration',
					'The movie "Oblivion" inspired me to use simple geometry and advance animations to translate the ReMind concept on the flat screen.',
				],
				[
					'3.jpg',
					'Bluescreen',
					'Once the ReMind concept was adapted, it was time to express it in a video. It was the first time using bluescreen in this context. <i>Adobe After Effects</i> was used to create the concept video.',
				],
				[
					'6.mov',
					'You just put pucks on the timeline, like in reality',
					'Zoomable timeline allows users to overcome constraints of the small smartphone viewport.',
				],
				[
					'4.mov',
					`If it's time, it falls`,
					'Outdated pucks are falling in the "dock" behind the bottom screen area.',
				],
				[
					'5.mov',
					'Filter, put it back, do it again',
					'Done/undone pucks can be accessed in the "dock" and can be put back to the timeline.',
				],
			],
			['dark', 'rgb(37, 37, 37)', true, false],
			['Full Video', 'https://youtu.be/gL_K9__scvM'],
		],
		[
			'Dance Dj',
			[
				[
					'1.mp4',
					'Bachelor Thesis: Smart suit produces music to your dance moves',
					'Imagine, you could play music without mastering an instrument. But what could be the interface? We all have it - our body. <span>Idea, software, music, filmmaking, CGI at Folkwang in 2015</span>',
				],
				[
					'4.mp4',
					'You dance, you compose the music',
					'Selfmade generative algorithm interprets your body expressions and composes structured music. Like if you were listening to the radio.',
				],
				[
					'3.mp4',
					`Disco, Funk, Electro...Halftime, Doubletime...`,
					`I've used a pseudo random noise generator, with current time as a seed, fed through math formulas, based on modulo operation, to generate cyclic loops. These formulas described probable occurrence of a note in time and pitch for a particular genre. So drums, bass lines, chords and solos can be generated with infinite variations.`,
				],
				[
					'2.mp4',
					'Setup',
					`The suit based on <i>Arduino Mega</i> sends user's motion data via <i>Bluetooth</i> to the <i>C++</i> application. Selfmade algorithm matches rhythm, harmony and genre to dance moves. It generates composition note for note as <i>MIDI</i> commands and send them to <i>Ableton Live</i>. So music comes to life.`,
				],
			],
			['light', 'rgb(215, 239, 255)', true, false],
			['Full Video', 'https://youtu.be/hTVp_bRUWas'],
		],
		[
			'Kitchen Dj',
			[
				[
					'2.mp4',
					'Make music while cooking',
					`Modern life is about acceleration. But sometimes you want to enjoy the process. Location - kitchen, task - deceleration. What about DJ'ing while cooking? Project was made in cooperation with Siemens and Bosch. <span>Idea, software, hardware, music, filmmaking, CGI at Folkwang in 2014</span>`,
				],
				[
					'1.mp4',
					'The whole kitchen is your DJ set',
					'Food items are instruments. Tools are modifiers. The final dish is the highest point in the composition. Can you play solo with your knife? What happens, if you close the pot?',
				],
				[
					'4.mp4',
					'Get Lucky',
					'The kitchen mockup is out of wood and cardboard. 12 sensors are integrated into kitchentools and furniture. <i>Arduino Mega</i> read user data and sends it to the laptop running <i>MaxMSP</i>. We recreated composition "Get Lucky" by Daft Punk with help of <i>Garage Band</i>, so we can control each instrument individually.',
				],
				[
					'3.mp4',
					'Filmmaking and CGI',
					`We've filmed the video during the night. The cut was made in <i>Final Cut Pro</i>. In order to show exactly what's under the hood of the <i>MaxMSP</i> patch, i've put explanational graphics onto the concept video, made with <i>Illustrator</i> and <i>After Effects</i>.`,
				],
			],
			['dark', 'rgb(38, 43, 88)', false, false],
			['Full Video', 'https://youtu.be/WfmR7fv0_Gs'],
		],
		[
			'3D Graphics',
			[
				[
					'4.mp4',
					'Snippets from various projects showing my skills in 3D',
					'3M explanational video snippet revealing construction of the chemical reaction chamber. Animation made in <i>Cinema 4D</i>. <span>3D animation at dreiform in 2014</span>',
				],
				[
					'3.jpg',
					'What if Apple Inc. would reinvent a power socket?',
					'Exercise using <i>Rhinoceros</i> for modeling, <i>Keyshot</i> for texturing and <i>Photoshop</i> for layout. Full size <a href="./projects/3D Graphics/3_full.jpg" target="blank">here</a>. <span>3D animation at Folkwang in 2012</span>',
				],
				[
					'5.mov',
					'Opening animation for the summit of Boehringer Ingelheim',
					'Custom materials were made to let the glob appear more realistic. Animation in <i>Cinema 4D</i>, composing in <i>Adobe After Effects</i>. <span>3D animation and composing at MESO in 2017</span>',
				],
				[
					'2.mov',
					'Starship',
					'Homeproject. Doors, and landing gears are controlled by moving control sliders. Modeled and programmed with node-based approach in <i>Cinema 4D</i>. <span>3D animation at home in 2014</span>',
				],
				[
					'1.mp4',
					'Union Investment popup animation',
					'This popup effect was achieved by using node-based programming in <i>Cinema 4D</i> <span>3D animation at dreiform in 2014</span>',
				],
			],
			['light', 'rgb(200, 208, 215)', false, false],
		],
		[
			'Logotype',
			[
				[
					'2.mov',
					'Generative grids and motion graphics',
					'Some logotypes are using grid systems for consistency and precision. These grids are static. Can we make a storytelling of grid creation? Or even create your own framework to make the design process easier and faster?<span>Software and motion graphics at home in 2014</span>',
				],
				[
					'4.mov',
					'Mathematical universe',
					`The animation shows the creation process of my very first logotype. I've tried to reflect the way I see the world, something like a mathematical universe.`,
				],
				[
					'3.mov',
					'Aesthetic universe',
					'Choreography in sync with the soundtrack and camera moves expresses the beauty of math.',
				],
				[
					'5.mov',
					'Reward at the end',
					'The video finally resolves into a logotype and the viewer understands what was it about.',
				],
				[
					'1.mov',
					'Grid Factory',
					'I even programmed my own framework in <i>OpenFrameworks</i> to create geometrically precise grids for logotype manufacturing programmatically. The source code was like a cooking recipe for a logo. Moreover I could change any circle position and radius that caused change in logotype proportion or stroke width.',
				],
			],
			['light', 'rgb(233, 233, 233)', false, false],
			['Full Video', 'https://youtu.be/HMAyucUVoSo'],
		],
		[
			'Teleporto',
			[
				[
					'1.mp4',
					'Filmmaking class',
					'We had to make a promo video about an artificial product. Here we go! <span>Acting, filmmaking, CGI at Folkwang in 2013</span>',
				],
				[
					'5.mov',
					'First CGI in my life',
					`At this point I didn't really know the methods of digital special effects. So we just used common sense and <i>Final Cut Pro</i>. Yes, all the effects and compositing are without AE.`,
				],
				[
					'3.mp4',
					'First motion graphics too',
					`The effect of depth of field was imitated with a blur effect. Due to the lag of experience for the ring rotation i've used <i>KeyShot</i>, key out the background and put in <i>Final Cut Pro</i>.`,
				],
				[
					'2.jpg',
					'Script',
					'You might recognize one or another shot in the script. Acrobatic fails are not included &#128551;',
				],
			],
			['dark', 'hsl(132, 10%, 18%)', false, false],
			['Full Video', 'https://youtu.be/X_ZUUzQBHqo'],
		],
		[
			'Sketches',
			[
				[
					'9.jpg',
					'A bit of analog craft',
					'Shaver with soap inside for men and women. These are the results after one week of <i>Wacom</i> usage. <span>Sketching at Folkwang in 2014</span>',
				],
				[
					'5.jpg',
					'Nude drawing class',
					'It was a challenge to get all proportions right &#128563; I think, skinny people are the hardest to draw because they have so many details. <span>Sketching at Folkwang in 2014</span>',
				],
			],
			['dark', 'rgb(138, 90, 162)', false, false],
		],
		[
			'ToolBox',
			[
				[
					'2.jpg',
					'Container system for tool organization',
					`I didn't have a proper system to store all my tools in a small apartment. So I decided to make my own.<span>Crafting at home in 2014</span>`,
				],
				[
					'1.jpg',
					'Multiplex',
					`I've built 3 different box sizes for different kinds of stuff. Holes on both sides of the box allow you to handle the box comfortably.`,
				],
				[
					'5.jpg',
					'Miter cut',
					'It allows you to stack boxes on top of each other. The floor of the top box is a cover for the bottom one. Additionally, the locks fix the stack, allowing you to use the stack as a whole.',
				],
				[
					'7.jpg',
					'Cover',
					'It interacts tightly with the miter cut. The cover is made for the very top box to close the stack. It also has an additional functionality - carrying it.',
				],
				[
					'6.jpg',
					'Pencils, soldering iron, camera rigs...',
					`For small stuff I've put separators to keep order inside. For bigger stuff like cameras, I've cut negativ foam forms to protect hardware from shaking.`,
				],
				[
					'3.jpg',
					'Carrying a whole stack around?',
					`I've created a transport module for the heavy stack in case I want to move some tools to the lab for a bigger project.`,
				],
				[
					'4.jpg',
					'Trolley',
					`A trolley from eBay <br/> has been utilized for this duty.`,
				],
			],
			['light', 'rgb(250, 220, 112)', false, false],
		],
		[
			'Apple Store Table',
			[
				[
					'4.jpg',
					'Selfmade replica of the Table from Apple Stores.',
					`As I've seen it for the first time, I wanted one. Massive wooden table costs thousands of dollars. So I've decided to create my own. <span>Crafting at home in 2013</span>`,
				],
				[
					'6.jpg',
					'No CAD',
					`I've been building this table since the very beginning of my industrial design study. At that time I didn't have any experience in CAD engineering, so pensil, paper and a bit of math were my tools.`,
				],
				[
					'5.jpg',
					'Final touches',
					'After building the table, it was polished and oiled. It dries and waits to be disassembled and brought home.',
				],
				[
					'2.jpg',
					'Extra large',
					'With 2 meter wide this table is just huge, so it can handle a lot of disorder and creativity. But in case of transport, you can just disassemble the legs.',
				],
				[
					'7.jpg',
					'Right ergonomy',
					'The thick table top plate at wrong height could be the danger for ergonomy, because it creates space between forearms and thighs and influences angles. The hight of this table has been chosen correctly, so I can work for hours.',
				],
				[
					'1.jpg',
					'Surprise inside',
					`In reality, the table is built out of multiplex and is not massive but hollow. So the obvious choice was to use the inner space for cables and hardware that shouldn't be seen all the time.`,
				],
			],
			['light', 'rgb(200, 208, 215)', false, false],
		],
	],
}
