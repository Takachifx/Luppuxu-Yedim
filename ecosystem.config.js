let sunucu = "VRT"
module.exports = {
  apps: [
    {
      name: sunucu+"-Mainframe",
      namespace: "Cyrus",
      script: 'main.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Bots/Main"
    },
     {
       name: sunucu+"-Stats",
       namespace: "Cyrus",
       script: 'main.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Stats"
     },
     {
       name: sunucu+"-Prosecutor",
       namespace: "Cyrus",
       script: 'main.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Prosecutor"
     },
     {
       name: sunucu+"-Guard",
       namespace: "Cyrus",
       script: 'main.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Guard"
     },
     {
       name: sunucu+"-GuardTwo",
       namespace: "Cyrus",
       script: 'main.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/GuardTwo"
     },
     {
       name: sunucu+"-GuardThree",
       namespace: "Cyrus",
       script: 'main.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/GuardThree"
     },
     /*-----------------------------------*/
     {
       name: sunucu+"-WelcomeOne",
       namespace: "Cyrus",
       script: 'welcomeOne.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Welcomes"
     },
     {
       name: sunucu+"-WelcomeTwo",
       namespace: "Cyrus",
       script: 'welcomeTwo.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Welcomes"
     },
     {
       name: sunucu+"-WelcomeThree",
       namespace: "Cyrus",
       script: 'welcomeThree.js',
       watch: false,
       exec_mode: "cluster",
       max_memory_restart: "2G",
       cwd: "./Bots/Welcomes"
     },
     {
      name: sunucu+"-WelcomeFour",
      namespace: "Cyrus",
      script: 'welcomeFour.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Bots/Welcomes"
    },
    {
      name: sunucu+"-WelcomeFive",
      namespace: "Cyrus",
      script: 'welcomeFive.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./Bots/Welcomes"
    }
  ]
};