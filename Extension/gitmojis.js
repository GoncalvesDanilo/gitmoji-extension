const gitmojis = [
  {
    emoji: '🎨',
    color: '#ff7281',
    code: ':art:',
    description: 'Improve structure / format of the code.',
    name: 'art',
    semver: null,
  },
  {
    emoji: '⚡️',
    color: '#40c4ff',
    code: ':zap:',
    description: 'Improve performance.',
    name: 'zap',
    semver: 'patch',
  },
  {
    emoji: '🔥',
    color: '#ff9d44',
    code: ':fire:',
    description: 'Remove code or files.',
    name: 'fire',
    semver: null,
  },
  {
    emoji: '🐛',
    color: '#8cd842',
    code: ':bug:',
    description: 'Fix a bug.',
    name: 'bug',
    semver: 'patch',
  },
  {
    emoji: '🚑️',
    color: '#fb584a',
    code: ':ambulance:',
    description: 'Critical hotfix.',
    name: 'ambulance',
    semver: 'patch',
  },
  {
    emoji: '✨',
    color: '#ffe55f',
    code: ':sparkles:',
    description: 'Introduce new features.',
    name: 'sparkles',
    semver: 'minor',
  },
  {
    emoji: '📝',
    color: '#00e676',
    code: ':memo:',
    description: 'Add or update documentation.',
    name: 'memo',
    semver: null,
  },
  {
    emoji: '🚀',
    color: '#00a9f0',
    code: ':rocket:',
    description: 'Deploy stuff.',
    name: 'rocket',
    semver: null,
  },
  {
    emoji: '💄',
    color: '#80deea',
    code: ':lipstick:',
    description: 'Add or update the UI and style files.',
    name: 'lipstick',
    semver: 'patch',
  },
  {
    emoji: '🎉',
    color: '#f74d5f',
    code: ':tada:',
    description: 'Begin a project.',
    name: 'tada',
    semver: null,
  },
  {
    emoji: '✅',
    color: '#77e856',
    code: ':white_check_mark:',
    description: 'Add or update tests.',
    name: 'white-check-mark',
    semver: null,
  },
  {
    emoji: '🔒️',
    color: '#ffce49',
    code: ':lock:',
    description: 'Fix security issues.',
    name: 'lock',
    semver: 'patch',
  },
  {
    emoji: '🔖',
    color: '#80deea',
    code: ':bookmark:',
    description: 'Release / Version tags.',
    name: 'bookmark',
    semver: null,
  },
  {
    emoji: '🚨',
    color: '#536dfe',
    code: ':rotating_light:',
    description: 'Fix compiler / linter warnings.',
    name: 'rotating-light',
    semver: null,
  },
  {
    emoji: '🚧',
    color: '#ffb74d',
    code: ':construction:',
    description: 'Work in progress.',
    name: 'construction',
    semver: null,
  },
  {
    emoji: '💚',
    color: '#c5e763',
    code: ':green_heart:',
    description: 'Fix CI Build.',
    name: 'green-heart',
    semver: null,
  },
  {
    emoji: '⬇️',
    color: '#ef5350',
    code: ':arrow_down:',
    description: 'Downgrade dependencies.',
    name: 'arrow-down',
    semver: 'patch',
  },
  {
    emoji: '⬆️',
    color: '#00e676',
    code: ':arrow_up:',
    description: 'Upgrade dependencies.',
    name: 'arrow-up',
    semver: 'patch',
  },
  {
    emoji: '📌',
    color: '#39c2f1',
    code: ':pushpin:',
    description: 'Pin dependencies to specific versions.',
    name: 'pushpin',
    semver: 'patch',
  },
  {
    emoji: '👷',
    color: '#64b5f6',
    code: ':construction_worker:',
    description: 'Add or update CI build system.',
    name: 'construction-worker',
    semver: null,
  },
  {
    emoji: '📈',
    color: '#cedae6',
    code: ':chart_with_upwards_trend:',
    description: 'Add or update analytics or track code.',
    name: 'chart-with-upwards-trend',
    semver: 'patch',
  },
  {
    emoji: '♻️',
    color: '#77e856',
    code: ':recycle:',
    description: 'Refactor code.',
    name: 'recycle',
    semver: null,
  },
  {
    emoji: '➕',
    color: '#00e676',
    code: ':heavy_plus_sign:',
    description: 'Add a dependency.',
    name: 'heavy-plus-sign',
    semver: 'patch',
  },
  {
    emoji: '➖',
    color: '#ef5350',
    code: ':heavy_minus_sign:',
    description: 'Remove a dependency.',
    name: 'heavy-minus-sign',
    semver: 'patch',
  },
  {
    emoji: '🔧',
    color: '#ffc400',
    code: ':wrench:',
    description: 'Add or update configuration files.',
    name: 'wrench',
    semver: 'patch',
  },
  {
    emoji: '🔨',
    color: '#ffc400',
    code: ':hammer:',
    description: 'Add or update development scripts.',
    name: 'hammer',
    semver: null,
  },
  {
    emoji: '🌐',
    color: '#e7f4ff',
    code: ':globe_with_meridians:',
    description: 'Internationalization and localization.',
    name: 'globe-with-meridians',
    semver: 'patch',
  },
  {
    emoji: '✏️',
    color: '#ffce49',
    code: ':pencil2:',
    description: 'Fix typos.',
    name: 'pencil2',
    semver: 'patch',
  },
  {
    emoji: '💩',
    color: '#a78674',
    code: ':poop:',
    description: 'Write bad code that needs to be improved.',
    name: 'poop',
    semver: null,
  },
  {
    emoji: '⏪️',
    color: '#56d1d8',
    code: ':rewind:',
    description: 'Revert changes.',
    name: 'rewind',
    semver: 'patch',
  },
  {
    emoji: '🔀',
    color: '#56d1d8',
    code: ':twisted_rightwards_arrows:',
    description: 'Merge branches.',
    name: 'twisted-rightwards-arrows',
    semver: null,
  },
  {
    emoji: '📦️',
    color: '#fdd0ae',
    code: ':package:',
    description: 'Add or update compiled files or packages.',
    name: 'package',
    semver: 'patch',
  },
  {
    emoji: '👽️',
    color: '#c5e763',
    code: ':alien:',
    description: 'Update code due to external API changes.',
    name: 'alien',
    semver: 'patch',
  },
  {
    emoji: '🚚',
    color: '#ef584a',
    code: ':truck:',
    description: 'Move or rename resources (e.g.: files, paths, routes).',
    name: 'truck',
    semver: null,
  },
  {
    emoji: '📄',
    color: '#d9e3e8',
    code: ':page_facing_up:',
    description: 'Add or update license.',
    name: 'page-facing-up',
    semver: null,
  },
  {
    emoji: '💥',
    color: '#f94f28',
    code: ':boom:',
    description: 'Introduce breaking changes.',
    name: 'boom',
    semver: 'major',
  },
  {
    emoji: '🍱',
    color: '#ff5864',
    code: ':bento:',
    description: 'Add or update assets.',
    name: 'bento',
    semver: 'patch',
  },
  {
    emoji: '♿️',
    color: '#00b1fb',
    code: ':wheelchair:',
    description: 'Improve accessibility.',
    name: 'wheelchair',
    semver: 'patch',
  },
  {
    emoji: '💡',
    color: '#ffce49',
    code: ':bulb:',
    description: 'Add or update comments in source code.',
    name: 'bulb',
    semver: null,
  },
  {
    emoji: '🍻',
    color: '#fbb64b',
    code: ':beers:',
    description: 'Write code drunkenly.',
    name: 'beers',
    semver: null,
  },
  {
    emoji: '💬',
    color: '#cedae6',
    code: ':speech_balloon:',
    description: 'Add or update text and literals.',
    name: 'speech-balloon',
    semver: 'patch',
  },
  {
    emoji: '🗃️',
    color: '#c5e763',
    code: ':card_file_box:',
    description: 'Perform database related changes.',
    name: 'card-file-box',
    semver: 'patch',
  },
  {
    emoji: '🔊',
    color: '#23b4d2',
    code: ':loud_sound:',
    description: 'Add or update logs.',
    name: 'loud-sound',
    semver: null,
  },
  {
    emoji: '🔇',
    color: '#e6ebef',
    code: ':mute:',
    description: 'Remove logs.',
    name: 'mute',
    semver: null,
  },
  {
    emoji: '👥',
    color: '#ffce49',
    code: ':busts_in_silhouette:',
    description: 'Add or update contributor(s).',
    name: 'busts-in-silhouette',
    semver: null,
  },
  {
    emoji: '🚸',
    color: '#ffce49',
    code: ':children_crossing:',
    description: 'Improve user experience / usability.',
    name: 'children-crossing',
    semver: 'patch',
  },
  {
    emoji: '🏗️',
    color: '#ffe55f',
    code: ':building_construction:',
    description: 'Make architectural changes.',
    name: 'building-construction',
    semver: null,
  },
  {
    emoji: '📱',
    color: '#40c4ff',
    code: ':iphone:',
    description: 'Work on responsive design.',
    name: 'iphone',
    semver: 'patch',
  },
  {
    emoji: '🤡',
    color: '#ff7281',
    code: ':clown_face:',
    description: 'Mock things.',
    name: 'clown-face',
    semver: null,
  },
  {
    emoji: '🥚',
    color: '#77e856',
    code: ':egg:',
    description: 'Add or update an easter egg.',
    name: 'egg',
    semver: 'patch',
  },
  {
    emoji: '🙈',
    color: '#8bdfe7',
    code: ':see_no_evil:',
    description: 'Add or update a .gitignore file.',
    name: 'see-no-evil',
    semver: null,
  },
  {
    emoji: '📸',
    color: '#00a9f0',
    code: ':camera_flash:',
    description: 'Add or update snapshots.',
    name: 'camera-flash',
    semver: null,
  },
  {
    emoji: '⚗️',
    color: '#7f39fb',
    code: ':alembic:',
    description: 'Perform experiments.',
    name: 'alembic',
    semver: 'patch',
  },
  {
    emoji: '🔍️',
    color: '#ffe55f',
    code: ':mag:',
    description: 'Improve SEO.',
    name: 'mag',
    semver: 'patch',
  },
  {
    emoji: '🏷️',
    color: '#cb63e6',
    code: ':label:',
    description: 'Add or update types.',
    name: 'label',
    semver: 'patch',
  },
  {
    emoji: '🌱',
    color: '#c5e763',
    code: ':seedling:',
    description: 'Add or update seed files.',
    name: 'seedling',
    semver: null,
  },
  {
    emoji: '🚩',
    color: '#ffce49',
    code: ':triangular_flag_on_post:',
    description: 'Add, update, or remove feature flags.',
    name: 'triangular-flag-on-post',
    semver: 'patch',
  },
  {
    emoji: '🥅',
    color: '#c7cb12',
    code: ':goal_net:',
    description: 'Catch errors.',
    name: 'goal-net',
    semver: 'patch',
  },
  {
    emoji: '💫',
    color: '#ffdb3a',
    code: ':dizzy:',
    description: 'Add or update animations and transitions.',
    name: 'animation',
    semver: 'patch',
  },
  {
    emoji: '🗑️',
    color: '#d9e3e8',
    code: ':wastebasket:',
    description: 'Deprecate code that needs to be cleaned up.',
    name: 'wastebasket',
    semver: 'patch',
  },
  {
    emoji: '🛂',
    color: '#4dc6dc',
    code: ':passport_control:',
    description: 'Work on code related to authorization, roles and permissions.',
    name: 'passport-control',
    semver: 'patch',
  },
  {
    emoji: '🩹',
    color: '#fbcfb7',
    code: ':adhesive_bandage:',
    description: 'Simple fix for a non-critical issue.',
    name: 'adhesive-bandage',
    semver: 'patch',
  },
  {
    emoji: '🧐',
    color: '#ffe55f',
    code: ':monocle_face:',
    description: 'Data exploration/inspection.',
    name: 'monocle-face',
    semver: null,
  },
  {
    emoji: '⚰️',
    color: '#d9e3e8',
    code: ':coffin:',
    description: 'Remove dead code.',
    name: 'coffin',
    semver: null,
  },
]