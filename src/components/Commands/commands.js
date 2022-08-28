/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        whois: {
            description: 'About Me.',
            usage: 'whois',
            fn: () => {
                return "About Me.\n---\nmale\n19\nstudent\nworking at numeus\ninitiald\nbased in switzerland\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                /* window.open('https://twitter.com/_asheeshh', '_blank') */
                return "don't have twitter... maybe in the future"
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Rom3dius', '_blank')
                return "opening github account..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'discord',
            fn: () => {
                window.open('https://discordapp.com/users/178721879878533120', '_blank')
                return "opening discord account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 100%
                    german           - 65%
                    python           - 80%
                    javascript       - 20%
                    rust             - 10%
                    c++              - 5%\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    pentesting       - 30%
                    studying         - 5%
                    overthinking     - 100%
                    driving          - 60%
                    problem solving  - 40%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'discord-ttt'                    | 'discord bot for gmod ttt (mutes dead players)'   | 'python/lua'
                    'tv-binance-relay'               | 'open trades using signals from tv scripts'       | 'python/pinescript'
                    'thallia-discord'                | 'Discord-Bot'                                     | 'python'
                    'tv-settings-optimizer'          | 'optimizes pine script settings'                  | 'python/pinescript'
                    'pl-translate'                   | 'pig latin translator'                            | 'C++'
                    Cool projects I'm working on. \n---\n
                    's3cr3t-stuff'                   | 'for my awesome employers at NUMEUS'              | 'python/C++'
                    'hyperion'                       | 'trading passion project'                         | 'rust'
                    '10880 Malibu Point'             | 'this website'                                    | 'react-js'
              `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Neovim\n
                    Plugins: >70\n
                                   `
            }
        },
        /* repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/asrvd/AshTerm", '_blank')
                return "opening repository..."
            }
        }, */
        credits: {
            description: 'Credits for this website.',
            usage: 'credits',
            fn: () => {
                return `
                    Credits for this website.\n---\n
                    numeus.xyz
                    AshTerm by asrvd
                `
            }
        },
        spotify: {
            description: 'Get info about my recently played song.',
            usage: 'spotify',
            fn: async () => {
                const item = await getnp()
                return `Not implemented yet! Check back later.`
              /* return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `  */
            }
        }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        getcat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
