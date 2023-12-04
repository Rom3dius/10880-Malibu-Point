/* eslint-disable import/no-anonymous-default-export */
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
                return "About Me.\n---\nmale\n20\nstudent\ninitiald\nbased in switzerland\n---\n"
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
                return "opening discord account...\nif it failed my discord is romedius! i was very lucky"
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english
                    german
                    c#
                    rust
                    lua
                    python
                    js\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    coding
                    overthinking
                    driving
                    problem solving
                    pentesting\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on or am working on.\n---\n
                    'discord-ttt'                    | 'discord bot for gmod ttt (mutes dead players)'   | 'python/lua'
                    'tv-binance-relay'               | 'open trades using signals from tv scripts'       | 'python/pinescript'
                    'thallia-discord'                | 'Discord-Bot'                                     | 'python'
                    'tv-settings-optimizer'          | 'optimizes pine script settings'                  | 'python/pinescript'
                    'swim-api-rs'                    | 'Discord bot and API for SwimAssettoServer'       | 'rust'
                    'SwimAssettoServer'              | 'Modified AssettoServer with custom plugins'      | 'C#/lua'
                    'swim-plate-generator'           | 'Lua script with put custom plates on cars'       | 'lua'
                    '10880 Malibu Point'             | 'this website'                                    | 'react-js'
                    'raptor-retriever'               | 'library for retrieving data from Capser nodes'   | 'rust'

                    There are alot of unmentioned projects, these are the ones I can backup with code I have in my github repositories. \n
                    There are lots of work related projects that I can't mention here, and projects that I've worked on when I was much younger
                    and have been lost to time.
              `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: VSCode\n

                    Editor: Neovim\n
                    Plugins: >70\\n
                                   `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/Rom3dius/10880-Malibu-Point", '_blank')
                return "opening repository..."
            }
        },
        credits: {
            description: 'Credits for this website.',
            usage: 'credits',
            fn: () => {
                return `
                    Credits for this website.\n---\n
                    Rom3dius
                    AshTerm by asrvd
                `
            }
        },
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
