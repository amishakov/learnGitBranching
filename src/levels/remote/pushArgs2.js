exports.level = {
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C6\",\"id\":\"main\",\"remoteTrackingBranchID\":\"o/main\"},\"foo\":{\"target\":\"C4\",\"id\":\"foo\",\"remoteTrackingBranchID\":\"o/foo\"},\"o/main\":{\"target\":\"C4\",\"id\":\"o/main\",\"remoteTrackingBranchID\":null},\"o/foo\":{\"target\":\"C5\",\"id\":\"o/foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"main\":{\"target\":\"C4\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C5\",\"id\":\"foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}}",
  "solutionCommand": "git push origin main^:foo;git push origin foo:main",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C6\",\"id\":\"main\",\"remoteTrackingBranchID\":\"o/main\"},\"foo\":{\"target\":\"C4\",\"id\":\"foo\",\"remoteTrackingBranchID\":\"o/foo\"},\"o/main\":{\"target\":\"C1\",\"id\":\"o/main\",\"remoteTrackingBranchID\":null},\"o/foo\":{\"target\":\"C1\",\"id\":\"o/foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C2\",\"C3\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C2\"],\"id\":\"C5\"},\"C6\":{\"parents\":[\"C5\"],\"id\":\"C6\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"},\"originTree\":{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"foo\":{\"target\":\"C1\",\"id\":\"foo\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}}",
  "name": {
    "en_US": "Git push arguments -- Expanded!",
    "zh_CN": "Git push 参数 2",
    "zh_TW": "git push 的參數，延伸討論！",
    "es_AR": "¡Más! Parámetros de git push",
    "es_ES": "¡Más! Parámetros de git push",
    "pt_BR": "Parâmetros do git push -- expandido",
    "gl": "Parámetros de git push -- ampliado",
    "de_DE": "Optionen für Git Push -- noch mehr!",
    "ja": "Git pushの引数 -- 拡張編!",
    "fr_FR": "Arguments de git push -- toujours plus !",
    "ro": "Argumente git push -- Continuarea!",
    "ru_RU": "Аргументы для push -- расширенная версия!",
    "ko": "git push 인자 -- 확장판!",
    "uk": "Розширені аргументи git push!",
    "vi": "Tham số git push -- bản mở rộng!",
    "sl_SI": "Git push argumenti -- Razširjeni!",
    "pl": "Argumenty git push -- Głębiej!",
    "it_IT": "Parametri di git push - Espansione!",
    "tr_TR": "Git push argümanları -- Genişletilmiş!"
  },
  "hint": {
    "en_US": "Remember you can admit defeat and type in \"show solution\" :P",
    "zh_CN": "如果你认输的话，可以通过“show solution”查看解决方案 :P",
    "zh_TW": "如果你失敗了，可以利用 \"show solution\" 來找到解答:P",
    "es_AR": "Recordá que podés admitir tu derrota y tipear \"show solution\" para ver la solución :P",
    "es_ES": "Recuerda que puedes admitir tu derrota y escribir \"show solution\" para ver la solución :P",
    "pt_BR": "Lembre-se que você pode admitir que foi derrotado e digitar \"show solution\" :P",
    "gl": "Lembrate que podes admitir que fuches derrotado e escribir \"show solution\" para amosala solución :P",
    "de_DE": "Vergiss nicht dass du aufgeben kannst, indem du \"show solution\" eingibst :P",
    "ja": "降参して解説を見るには\"show solution\"を実行できるのをお忘れなく",
    "fr_FR": "N'oubliez pas que vous pouvez toujours déclarer forfait avec \"show solution\" :P",
    "ro": "Nu uita că îți poți admite înfrângerea și tasta \"show solution\" pentru a vedea soluția :P",
    "ru_RU": "Помните, Вы всегда можете признать своё поражение, набрав команду \"show solution\" (показать решение) :P",
    "ko": "혹시 아세요? 패배를 인정하고 \"show solution\"을 입력할 수 있다는 걸요 :P",
    "uk": "Пам'ятай, ти завжди можеш визнати поразку і підглянути рішення командою \"show solution\" :P",
    "vi": "Nhớ rằng, bạn có thể thừa nhận thất bại và gõ \"show solution\" :P",
    "sl_SI": "Vedno se lahko predaš in napišeš \"show solution\". :P",
    "pl": "Pamiętaj, że możesz się poddać i zobaczyć gotowe rozwiązanie, wpisując \"show solution\" :P",
    "it_IT": "Puoi sempre ammettere la tua sconfitta e digitare \"show solution\" :P",
    "tr_TR": "Unutma, teslim olabileceğini ve \"show solution\" yazabileceğini :P"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>` argument details",
              "",
              "Remember from the previous lesson that when we specified `main` as the place argument for git push, we specified both the *source* of where the commits would come from and the *destination* of where the commits would go.",
              "",
              "You might then be wondering -- what if we wanted the source and destination to be different? What if you wanted to push commits from the `foo` branch locally onto the `bar` branch on remote?",
              "",
              "Well unfortunately that's impossible in git... just kidding! Of course it's possible :)... git has tons and tons of flexibility (almost too much).",
              "",
              "Let's see how in the next slide..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "In order to specify both the source and the destination of `<place>`, simply join the two together with a colon:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "This is commonly referred to as a colon refspec. Refspec is just a fancy name for a location that git can figure out (like the branch `foo` or even just `HEAD~1`).",
              "",
              "Once you are specifying both the source and destination independently, you can get quite fancy and precise with remote commands. Let's see a demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Remember, `source` is any location that git will understand:"
            ],
            "afterMarkdowns": [
              "Woah! That's a pretty trippy command but it makes sense -- git resolved `foo^` into a location, uploaded whatever commits that weren't present yet on the remote, and then updated destination."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "What if the destination you want to push doesn't exist? No problem! Just give a branch name and git will create the branch on the remote for you."
            ],
            "afterMarkdowns": [
              "Sweet, that's pretty slick :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "For this level, try to get to the end goal state shown in the visualization, and remember the format of:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## L'argument `<place>` dans le détail",
              "",
              "Rappelez-vous de notre dernière leçon : quand vous passiez `main` comme argument `<place>` à git push, cela spécifiait à la fois la *source* de provenance des commits et leur *destination*.",
              "",
              "Vous vous demandez peut-être donc : et si nous voulions avoir une source et une destination différentes ? Et si vous voulez envoyez des commits de la branche locale `foo` dans la branche distante `bar` ?",
              "",
              "Malheureusement ce n'est pas possible avec Git... Mais non, je plaisante ! Bien sûr que c'est possible :)... Git a des tonnes de flexibilité (presque trop).",
              "",
              "Voyons cela au prochain slide..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pour spécifier la source et la destination dans `<place>`, on les joint simplement par deux points :",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "On en parle souvent comme d'un \"refspec\". Refspec est juste un nom exotique pour un emplacement que Git peut résoudre (comme la branche `foo` ou juste `HEAD~1`)",
              "",
              "Lorsque vous utilisez cette notation permettant de préciser la source et la destination indépendamment, vous pouvez produire des commandes à la fois très sophistiquées et très précises pour travailler avec les dépôts distants. Faisons une démo !"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Rappelez-vous, `source` peut être n'importe quel emplacement que Git peut résoudre :"
            ],
            "afterMarkdowns": [
              "Woahou ! C'est une commande très alambiquée mais qui a du sens : Git résoud `foo^` en un emplacement, envoie tous les commits qui n'étaient pas encore présents sur le dépôt distant, et met ensuite à jour la branche de destination."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Que se passe-t-il quand la destination du push n'existe pas encore ? Pas de problème ! Donnez simplement un nom de branche et Git va créer la branche distante pour vous."
            ],
            "afterMarkdowns": [
              "Cool, c'est habile :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pour ce niveau, essayez d'atteindre l'état montré dans la fenêtre d'objectif, et souvenez-vous du format :",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Detalles sobre el parámetro `<lugar>`",
              "",
              "Acordate de la lección anterior que cuando especificamos `main` como el parámetro lugar de git push, especificamos tanto el *origen* del que sacar los commits como el *destino* al que enviarlos.",
              "",
              "Podrías estar preguntándote ¿Y si quisiéramos que el origen y el destino sean distintos? ¿Si quisieras pushear los commits de la rama local `foo` a la rama `bar` del remote?",
              "",
              "Bueno, lamentablemente eso no se puede hacer en git... ¡Bazinga! Claro que se puede :)... git es extremadísimamente flexible (casi casi que demasiado).",
              "",
              "Veamos cómo hacerlo a continuación..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para especificar tanto el origen como el destino de `<lugar>`, simplemente unilos usando un dos puntos:",
              "",
              "`git push origin <origen>:<destino>`",
              "",
              "Esto se lo suele llamar refspec con dos puntos. Refspec es simplemente un nombre cool para una ubicación que git puede entender (como la rama `foo`, o incluso `HEAD~1`)",
              "",
              "Una vez que especificás tanto el origen como el destino independientemente, podés ponerte bastante elegante y detallista con los comandos remotos. ¡Veamos una demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Recordá: `origen` es cualquier ubicación que git pueda entender:"
            ],
            "afterMarkdowns": [
              "¡Woow! Ese commando es bastante loco, pero tiene sentido: git resolvió `foo^` a una ubicación, subió cualquier commit de ahí que aún no estuviera en el remoto, y luego actualizó el destino."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Y qué hay si el destino al que querés pushear no existe? ¡No hay drama! Simplemente dale un nombre al branch y git se va a encargar de creártelo en el remoto."
            ],
            "afterMarkdowns": [
              "Genial, simplemente fluye :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para este nivel, tratá de llegar al objetivo final, y acordate del formato:",
              "",
              "`<origen>:<destino>`"
            ]
          }
        }
      ]
    },
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Detalles sobre el parámetro `<lugar>`",
              "",
              "Recuerda de la lección anterior que cuando especificamos `main` como el parámetro lugar de git push, especificamos tanto el *origen* del que sacar los commits como el *destino* al que enviarlos.",
              "",
              "Podrías estar preguntándote ¿Y si quisiéramos que el origen y el destino fuesen distintos? ¿Si quisieras hacer push de los commits de la rama local `foo` a la rama `bar` del remote?",
              "",
              "Bueno, lamentablemente eso no se puede hacer en git... ¡zasca! Claro que se puede :)... git es extremadamente flexible (casi casi que demasiado).",
              "",
              "Veamos cómo hacerlo a continuación..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para especificar tanto el origen como el destino de `<lugar>`, simplemente únelos usando el signo `dos puntos`:",
              "",
              "`git push origin <origen>:<destino>`",
              "",
              "A esto se le suele llamar refspec con dos puntos. Refspec es simplemente un nombre genial para una ubicación que git puede entender (como la rama `foo`, o incluso `HEAD~1`)",
              "",
              "Una vez que especificas tanto el origen como el destino independientemente, puedes ponerte bastante cómodo y preciso con los comandos remotos. ¡Veamos una demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Recuerda: `origen` es cualquier ubicación que git pueda entender:"
            ],
            "afterMarkdowns": [
              "¡Vaya! Ese commando es bastante rompedor, pero tiene sentido: git resolvió `foo^` a una ubicación, subió cualquier commit de ahí que aún no estuviera en el remoto, y luego actualizó el destino."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿Y qué ocurre si el destino al que quieres hacer push no existe? ¡Sin problema! Simplemente dale un nombre a la rama y git se va a encargar de creártelo en el remoto."
            ],
            "afterMarkdowns": [
              "Genial, simplemente fluye :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para este nivel, trata de llegar al objetivo final, y recuerda el formato:",
              "",
              "`<origen>:<destino>`"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Detalhes sobre `<lugar>`",
              "",
              "Lembra que na lição anterior especificamos `main` como o parâmetro lugar para o git push? Lá definimos tanto a *origem* de onde os commits viriam quanto o *destino* para onde os commits foram.",
              "",
              "Você pode estar se perguntando -- e se eu quisesse que a origem e o destino fossem diferentes? E se eu quisesse enviar commits do ramo local `foo` para o ramo remoto `bar`?",
              "",
              "Bem, infelizmente isso é impossível no Git... só brincando! Claro que é possível :)... o Git tem muita flexibilidade (até mais do que deveria).",
              "",
              "Veremos como fazê-lo no próximo slide..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para especificar tanto a origem como o destino do `<lugar>`, simplesmente juntamos os dois usando dois-pontos:",
              "",
              "`git push origin <origem>:<destino>`",
              "",
              "Isso é geralmente chamado de \"colon refspec\" (especificação de referência com dois-pontos). Refspec é só um nome extravagante para um local que o Git consiga entender (como o ramo `foo` ou mesmo `HEAD~1`)",
              "",
              "Uma vez que você está especificando tanto a origem como o destino independentemente, você pode ser bastante preciso nos comandos relacionados a repositórios remotos. Vejamos uma demonstração!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lembre-se, `origem` é qualquer lugar que o Git possa entender:"
            ],
            "afterMarkdowns": [
              "Uau! Esse comando é bastante viajado, mas ele faz sentido -- o Git entendeu a referência `foo^`, enviou quaisquer commits que não estavam presentes no repositório remoto, e então atualizou o destino."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "E se o destino para o qual você quiser fazer push não existir? Sem problemas! Dê um nome de ramo e o Git criará o ramo no repositório remoto para você."
            ],
            "afterMarkdowns": [
              "Doce, isso é muito bom :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para este nível, tente chegar ao estado do objetivo mostrado na visualização, e lembre-se do formato:",
              "",
              "`<origem>:<destino>`"
            ]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Detalles sobre o parámetro `<lugar>`",
              "",
              "Lémbrate da lección anterior cando especificamos `main` como o parámetro lugar de git push, especificamos tanto a *orixe* do que sacar os commits como o *destino* ó que envialos.",
              "",
              "Poderías estar a preguntarte ¿E se quixéramos que a orixe  e o destino sexan distintos? ¿Se quixéramos empurrar os commits da  rama local `foo` á rama `bar` do remoto?",
              "",
              "Bueno, esto non se pode facer en git... ¡Caramboliñas! Claro que se pode :D. git é extremadísimamente flexibe (case case que de máis).",
              "",
              "Vexamos cómo facelo a continuación..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para especificar tanto a orixe como o destino de `<lugar>`, sinxelamente úneos empregando dous puntos:",
              "",
              "`git push origin <orixe>:<destino>`",
              "",
              "Esto pódeselle chamar refspec con dous puntos. Refspec é sinxelamente un nome cool para unha ubicación que git pode entender (como a rama `foo`, ou incluso `HEAD~1`)",
              "",
              "Unha vez que especificas a orixe e o destino independientemente, podes poñerte cómodo e preciso cos  comandos remotos. ¡Vexamos a demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Lembra: `orixe` é calquera ubicación que git poida entender:"
            ],
            "afterMarkdowns": [
              "¡Woow! Ese commando é unha tolemia, pero ten sentido: git resolveu `foo^` a unha ubicación, subiu calquera commit de ahí que aún non estivera no remoto, e logo actualizou o destino."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¿E qué hai se o destino ó que queres empurrar non existise? ¡Non pasa nada! Sinxelamente dalle un nome á rama e git vaise encargar de crealo no remoto."
            ],
            "afterMarkdowns": [
              "Xenial, sinxelamente tira para adiante."
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Para este nivel, intenta chegar o obxectivo final, e lembrate do formato:",
              "",
              "`<orixe>:<destino>`"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>` 這個參數的細節",
              "",
              "回想一下，我們在之前的課程中提到，當我們用 `git push` 並且把 `main`  當作 `<place>` 這個參數的時候，我們就相當於告訴 git 我們的所要更新的 commit 要*從哪裡來*（source） 並且要 *往哪裡去*（destination）。",
              "",
              "你可能會很好奇，當我們的 source 以及 destination 是不同的時候，應該怎麼做？當你想要 push `foo` branch 上面的 commit 到 remote 的 `bar` branch 的時候，應該怎麼做？",
              "",
              "很遺憾地，對於 git 來說這是不可能的...開玩笑的啦！當然是有可能的:)... git 有非常非常大的彈性（太超過了啦）。",
              "",
              "讓我們來看看下一頁..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "為了要指定 `<place>` 的 source 以及 destination，只要利用一個冒號將這兩個連在一起：",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "這通常被稱為一個 colon （冒號） refspec，refspec 只是一個表示 location （位置） 的花俏的名稱，這個位置可以被 git 辨別（例如 `foo` branch 或是 `HEAD~1`）。",
              "",
              "一旦你單獨指定了 source 以及 destination，你可以看到花俏且準確的指令。讓我來來看一個例子！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "記住， `source` 表示任意可以被 git 辨識的位置："
            ],
            "afterMarkdowns": [
              "哇!這實在是一個很花俏的指令但是確很合理，git 把 `foo^` 解讀成一個位置，並且 push 該位置的 commit 到目前 remote 的 main branch。"
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果你想要 push 的 destination 不存在怎麼辦？沒有問題！只要給一個 branch 的名稱，git 就會在 remote 幫你建立。"
            ],
            "afterMarkdowns": [
              "太讚了，實在非常地簡單:D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "對於這個關卡，想辦法達到這個視覺化的目標，而且要記得格式：",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>`参数详解",
              "",
              "还记得之前课程说的吧，当为 git push 指定 place 参数为 `main` 时，我们同时指定了提交记录的来源和去向。",
              "",
              "你可能想问 —— 如果来源和去向分支的名称不同呢？比如你想把本地的 `foo` 分支推送到远程仓库中的 `bar` 分支。",
              "",
              "哎，很遗憾 Git 做不到…… 开个玩笑，别当真！当然是可以的啦 :) Git 拥有超强的灵活性（有点过于灵活了）",
              "",
              "接下来咱们看看是怎么做的……"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "要同时为源和目的地指定 `<place>` 的话，只需要用冒号 `:` 将二者连起来就可以了：",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "这个参数实际的值是个 refspec，“refspec” 是一个自造的词，意思是 Git 能识别的位置（比如分支 `foo` 或者 `HEAD~1`）",
              "",
              "一旦你指定了独立的来源和目的地，就可以组织出言简意赅的远程操作命令了，让我们看看演示！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "记住，`source` 可以是任何 Git 能识别的位置："
            ],
            "afterMarkdowns": [
              "这是个令人困惑的命令，但是它确实是可以运行的 —— Git 将 `foo^` 解析为一个位置，上传所有未被包含到远程仓库里 `main` 分支中的提交记录。"
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果你要推送到的目的分支不存在会怎么样呢？没问题！Git 会在远程仓库中根据你提供的名称帮你创建这个分支！"
            ],
            "afterMarkdowns": [
              "很赞吧！它是不是很聪明？！ :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "在这个关卡中，试着完成目标窗口展示的提交树，记住参数格式哟：",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Details zum `<Ort>`-Parameter",
              "",
              "Du erinnerst dich von dem vorherigen Level, dass, als wir `main` als \"Ort\" beim `git push` angegeben haben, daraus sowohl die *Quelle* als auch das *Ziel* für die Operation abgeleitet wurden.",
              "",
              "Daher fragst du dich vielleicht -- was wäre, wenn wir möchten, dass Quelle und Ziel verschieden voneinander sind? Was wäre, wenn du Commits von einem lokalen Branch `foo` in den Branch `bar` auf einem Server schieben möchtest?",
              "",
              "Tja, leider ist das in Git unmöglich .... ein Scherz! Natürlich ist das möglich. Git besitzt tonnenweise Flexibilität (eher zu viel, als zu wenig).",
              "",
              "Und gleich sehen wir, wie das geht ..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Um sowohl Quelle als auch Ziel im `<Ort>`-Parameter anzugeben, gib sie einfach verbunden mit einem Doppelpunkt ein:",
              "",
              "`git push origin <Quelle>:<Ziel>`",
              "",
              "Das wird üblicherweise Refspec (Referenz-Spezifikation) genannt. Refspec ist nur ein anderer Name für einen Ort, mit dem Git etwas anfangen kann (wie mit Branch `foo` oder mit `HEAD~2`).",
              "",
              "Sobald du Quelle und Ziel separat angibst, kannst du flexibel und präzise entfernte Branches ansteuern. Hier eine Demo:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vergiss nicht, `Quelle` ist jeder mögliche Ort, mit dem Git etwas anfangen kann:"
            ],
            "afterMarkdowns": [
              "Boah! Das ist ein ziemlich abgefahrener Befehl gewesen, aber er ist sinnvoll -- Git hat `foo^` zu einem Commit aufgelöst, alle Commits, die bis zu einschließlich diesem noch nicht auf dem Server waren, hochgeladen und dann dort das Ziel aktualisiert."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Was wäre wenn das Ziel des `push` gar nicht existiert? Kein Problem! Wenn das Ziel ein Branch-Name ist, wird Git den Branch auf dem Server einfach anlegen."
            ],
            "afterMarkdowns": [
              "Schick, das ist ziemlich praktisch. :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Um dieses Level zu schaffen versuche den dargestellten Zielzustand zu erreichen und vergiss nicht das Format:",
              "",
              "`<Quelle>:<Ziel>`"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>` 引数",
              "",
              "前のレッスンでmainブランチをpushする際に、pushするコミットがどこから来て(source)、どこへ行くのか(destination)を`<place>`引数で指定したことを思い出してください",
              "",
              "では、sourceとdestinationを別々のブランチにしたい場合はどうすればよいのでしょうか？",
              "",
              "ローカルのfooブランチに存在するコミットをリモートのbarブランチにpushするにはどうすればよいのでしょうか？",
              "",
              "残念ながら、Gitでそれをしようと思っても不可能なのです... ",
              "",
              "というのは冗談です！もちろん可能ですし、Gitはすごく柔軟ですから！（正直過剰な程に）",
              "",
              "次の説明に移りましょう"
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "`<place>`引数でsourceとdestinationを指定するのはとても簡単です。次のようにコロンで連結すればよいのです！",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "この書式は一般的にコロンRefspecと呼ばれています。Refspecとは、ブランチや、HEAD~1等といったGitが解決できる場所を表す名称です。",
              "",
              "sourceとdestinationを別々に指定すると、よりきめ細やかなブランチ操作がリモートコマンドで行うことができます。",
              "",
              "それでは実際にデモを見ていきましょう!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "sourceはgitが解決できる場所であればどこでも良いことを思い出してください。"
            ],
            "afterMarkdowns": [
              "うわぁ！これはかなり奇抜な見た目のコマンドです...が実は理にかなっています。",
              "",
              "Gitはfoo^の場所を解決し、リモートに存在していないコミットをアップロードして、destinationに指定されたmainブランチを更新しました。"
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "存在していないブランチにpushしようとするとどうなると思いますか？心配ご無用です！",
              "",
              "Gitは与えられた名前を利用してリモート上にブランチを作成してくれます！"
            ],
            "afterMarkdowns": [
              "うん、とても良いですね。"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "このレベルでは、ゴールで示されている状態になるように挑戦してください。困ったときはこの書き方を思い出してくださいね。",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Detalii a argumentului `<locatie>`",
              "",
              "Îți amintești din lecția anterioară că atunci când am specificat `main` ca argument pentru git push, am specificat atât *sursa* de unde vor veni commit-urile cât și *destinația* unde vor merge.",
              "",
              "Te-ai putea întreba -- dar ce se întâmplă dacă vrem ca sursa și destinația să fie diferite? Ce se întâmplă dacă vrei să împingi commit-uri din ramura locală `foo` în ramura `bar` de pe remote?",
              "",
              "Ei bine, din păcate asta este imposibil în git... glumesc! Sigur că este posibil :)... git are o flexibilitate extrem de mare (poate chiar prea mare).",
              "",
              "Vom vedea cum în următorul slide..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pentru a specifica atât sursa cât și destinația pentru `<locatie>`, pur și simplu le unești folosind două puncte:",
              "",
              "`git push origin <sursa>:<destinatie>`",
              "",
              "Acest lucru este adesea denumit refspec cu două puncte. Refspec este doar un nume fain pentru o locație pe care git o poate înțelege (cum ar fi ramura `foo` sau chiar `HEAD~1`)",
              "",
              "Odată ce specifici atât sursa cât și destinația în mod independent, poți deveni foarte elegant și precis cu comenzile pentru remote. Hai să vedem o demonstrație!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Amintește-ți, `sursa` este orice locație pe care git o poate înțelege:"
            ],
            "afterMarkdowns": [
              "Wow! Aceasta este o comandă destul de ciudată, dar are sens -- git a rezolvat `foo^` într-o locație, a încărcat toate commit-urile care nu erau deja prezente pe remote și apoi a actualizat destinația."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ce se întâmplă dacă destinația în care vrei să faci push nu există? Nicio problemă! Doar dă un nume de ramură și git va crea ramura pe remote pentru tine."
            ],
            "afterMarkdowns": [
              "Super, asta e foarte fain :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pentru acest nivel, încearcă să ajungi la starea finală a obiectivului afișată în vizualizare și amintește-ți formatul:",
              "",
              "`<sursa>:<destinatie>`"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Подробности аргумента `<пункт назначения>`",
              "",
              "Помните, когда в прошлом занятии мы указали в качестве аргумента ветку `main` для команды git push, мы указали совместно *источник*, откуда будут приходить коммиты, и *пункт назначения (получатель)*, куда коммиты будут уходить.",
              "",
              "Однако, вы, наверное, задаётесь вопросом - а что, если я хочу, чтобы мои источник и получатель коммитов были различными? Что, если мы хотим запушить коммиты из локальной ветки `foo` в ветку `bar` на удалённом репозитории?",
              "",
              "К огромному сожалению, это невозможно сделать средствами git... Да ладно! Я пошутил! Конечно, это возможно :)... git сам по себе достаточно гибок (даже слишком).",
              "",
              "Мы увидим, как именно, на следующем слайде..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "В том случае, когда вам необходимо разделить источник и получатель аргумента `<пункт назначения>`, соедините их вместе, используя двоеточие:",
              "",
              "`git push origin <источник>:<получатель>`",
              "",
              "Обычно это называется `refspec`. Refspec — это всего лишь модное имя для определения местоположения, которое git может распознать (например, ветка `foo` или просто `HEAD~1`)",
              "",
              "Как только вы указали источник и получатель независимо друг от друга, вы можете довольно причудливо и точно использовать команды для работы с удалёнными ветками и репозиториями. Давайте взглянем на демонстрацию!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Помните, `источник` - всего лишь местоположение, которое git должен понять:"
            ],
            "afterMarkdowns": [
              "Вау! Это довольно нетривиальная команда, однако она имеет смысл - git видит в `foo^` не что иное, как местоположение, закачивает все коммиты, которые не присутствуют на удалённом репозитории, и затем обновляет получателя."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "А что если пункт назначения, в который вы хотите запушить, не существует? Без проблем! Укажите имя ветки, и git сам создаст ветку на удалённом репозитории для вас."
            ],
            "afterMarkdowns": [
              "Класс! Довольно легко! :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Для выполнения данного уровня попытайтесь привести своё дерево к такому же виду, как на визуализации. И не забудьте о формате:",
              "",
              "`<источник>:<получатель>`"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>` 인자에 대한 세부사항들",
              "",
              "",
              "기억하세요? 이전 강의에서 우리는 `main`를 커밋의 근원이되는 *source*와 목적지가 되는 *destination*으로 명령어의 인자로 넣어줌으로써 지정해줬습니다.",
              "여러분은 이런 생각이 들 수 있어요 -- 내가 source와 destination이 다르길 원하면 어떻게 해야되지? 로컬의 `foo` 브랜치에서 원격의 `bar` 브랜치로 커밋을 push하고 싶으면 어떻게 해야 되지?",
              "",
              "사실 git에서는 그게 불가능합니다... 네 농담이고! 당연 가능합니다 :)... git의 어마무시하게 유연합니다(지나칠정도로요).",
              "",
              "어떻게 하는지는 다음 슬라이드에서 확인해봅시다..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "source와 destination을 모두 지정하기 위해서는, 이렇게 간단히 두개를 콜론을 사이에 두고 표현하면 됩니다.",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "이것을 일반적으로 colon refspec(콜론 참조스펙)이라고 부릅니다. 참조스펙은 그냥 \"git이 알아낼 수 있는 위치\"를 이름 붙여서 말하는거에요 (브랜치 'foo'라든가 HEAD~1 라든가)",
              "",
              "source와 destination을 따로 지정할 수 있게 되면서, 이제 원격관련 명령어를 좀 멋지고 정확히 사용할수 있게 되었어요. 데모를 봅시다!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "기억하세요, `source`는 git이 이해하는 아무 위치를 말합니다.:"
            ],
            "afterMarkdowns": [
              "워 뭔가 잘 안쓸것 같은 명령이지만 잘 됩니다 -- git은 `foo^`의 위치를 알아내서 원격 저장소에 아직 반영되지 않은 커밋들을 업로드하고 destination 브랜치를 갱신했습니다."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "만약 여러분이 push하고 싶은 destination(목적지)가 없으면 어떻게하죠? 아무 문제 없어요! git이 만들 새 브랜치 이름을 지어주면 git이 원격 저장소에 새 브랜치를 만들어 줄거에요."
            ],
            "afterMarkdowns": [
              "좋네요, 번지르르 삐까뻔쩍 :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "이번 레벨에서는, goal 시각화에 나오는 것처럼 만들어 주세요 인자의 형식은 다음과 같다는걸 기억하세요:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "uk": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Детальніше про аргумент `<place>`",
              "",
              "З попереднього уроку нам відомо, що коли ми вказуємо `main` в якості аргумента place для git push, ми задаємо і гілку, *з якої* брати нові коміти, і гілку *до якої* їх буде перенесено.",
              "",
              "Тут ти можеш задуматись, а чи можуть гілки, звідки беремо, і куди переносимо, бути різними? Що, коли потрібно коміти з локальної гілки `foo` перенести у віддалену гілку `bar`?",
              "",
              "Нажаль в git це неможливо... жартую! Звісно, що можливо :)... git просто неймовірно гнучкий (іноді аж занадто).",
              "",
              "Подивімося як це робиться..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Для того, щоб в одному аргументі `<place>` вказати і місце звідки і куди, треба їх просто розділити двокрапкою:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "Такий запис називають \"colon refspec\". Тут refspec - це просто зручна назва місця, яке git може ідентифікувати (наприклад, гілка `foo` чи просто `HEAD~1`)",
              "",
              "Можливість вказати два різних місця дає велику свободу і гнучкість в роботі з віддаленим репозиторієм. Подивімось демонстрацію!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Пам'ятай, `source` -- це будь-яка назва місця, зрозуміла гіту:"
            ],
            "afterMarkdowns": [
              "Овва! Це доволі незвична команда, але тут все має сенс -- git, знаючи куди вказує `foo^`, завантажив на віддалену сторону ще відсутні там коміти і оновив місце призначення."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "А що, коли вказаного місця призначення не існує? Нема проблем! Просто вкажи назву гілки і гіт створить її на віддаленому сервері."
            ],
            "afterMarkdowns": [
              "Спритно, еге-ж? :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "На цьому рівні спробуй досягти стану ропозиторію, показаного у візуалізації і пам'ятай про формат запису з двокрапкою:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Chi tiết về tham số `<vị trí>`",
              "",
              "Nhớ lại học trước, khi chỉ định tham số `<vị trí>` là `main` cho lệnh `git push`, ta cũng đã chỉ định nguồn và đích cho các commit.",
              "",
              "Có thể bạn sẽ thắng mắc -- Nếu như ta muốn nguồn và đích khác đi thì sao? Nếu như ta muốn đẩy commit từ nhánh cục bộ `foo` lên nhánh từ xa `bar` thì sao?",
              "",
              "Chà đáng tiếc là điều này là bất khả thi tron Git... đùa thôi! Tất nhiên là làm được chứ :)... Git có nhiều và rất nhiều lựa chọn linh động (có lẽ là quá nhiều)",
              "",
              "Hãy xem cách nó hoạt động..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Để chỉ định `<vị trí>` cho cả nguồn và đích, chỉ cần sử dụng dấu hai chấm `:` để kết nối cả hai:",
              "",
              "`git push origin <nguồn>:<đích>`",
              "",
              "Giá trị thực của tham số này là một refspec, \"refspec\" là một từ tự tạo, nghĩa là một vị trí Git có thể nhận ra (chẳng hạn như nhánh `foo` hoặc `HEAD ~ 1`).",
              "",
              "Một khi bạn đã chỉ định các nguồn và đích độc lập, bạn có thể thao tác với kho chứa từ xa một cách khá thú vị và chính xác, hãy xem bản demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nhớ rằng, `nguồn` là bất kỳ vị trí nào mà Git hiểu:"
            ],
            "afterMarkdowns": [
              "Wao! Lệnh này khá phức tạp, nhưng mà hợp lý -- Git diễn giải `foo^` thành một vị trí, tải lên tất cả các commit từ đó trở về trước mà chưa có trên nhánh đích rồi cập nhật nó."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nếu như đích đến mà bạn muốn không tồn tại thì sao? Chẳng sao cả! Đơn giản hãy gõ tên nhánh và Git sẽ tạo nhánh đó trên kho chứa từ xa cho bạn."
            ],
            "afterMarkdowns": [
              "Tuyệt vời, thấy Git thú vị không :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ở cấp độ này, hãy hoàn thành mục tiêu được mô tả, và hãy nhớ cấu trúc:",
              "",
              "`<nguồn>:<đích>`"
            ]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Podrobnosti `<place>` argumenta",
              "",
              "Spomni se prejšnje lekcije, kjer smo določili `main` kot place argument za git push, določili smo *izvor* iz kje bodo commiti prišli in *destinacijo*, kamor bodo commiti odšli.",
              "",
              "Morda se sprašuješ -- kaj če želimo, da sta izvor in destinacija različna? Kaj če želiš pushati commite iz lokalnega `foo` brancha na oddaljen `bar` branch?",
              "",
              "Nažalost to v gitu ni možno ... hecam se! Seveda je možno :) ... git ima ogromno opcij (skoraj preveč).",
              "",
              "Poglejmo kako v naslednjem razdelku ..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Da bi določili in izvor in destinacijo `<place-a>`, preprosto združimo oba skupaj z dvopičjem:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "To je pogosto omenjeno kot dvopična referenca. Ta referenca je samo ime za lokacijo, ki jo lahko git razvozla (kot je branch `foo` ali samo `HEAD~1`).",
              "",
              "Ko enkrat določiš izvor in destinacijo neodvisno, lahko oddaljene ukaze uporabljaš zelo natačno in učinkovito. Poglejmo si primer!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Pomni, `source` je bilokatera lokacija, ki jo git razume:"
            ],
            "afterMarkdowns": [
              "Woah! To je kar zanimiv ukaz, ampak ima smisel -- git je razrešil `foo^` v lokacijo, naložil commite, ki še niso bili prisotni v oddaljenem repotu in nato posodobil destinacijo."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Kaj če destinacija kamor želiš pushati ne obstaja? Ni problem! Samo podaj ime brancha in git bo naredil branch na oddaljenem repotu zate."
            ],
            "afterMarkdowns": [
              "Lepa, to je kar kul :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Za to stopnjo poizkusi priti v ciljno stanje, prikazano v vizualizaciji in si zapomni obliko:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Szczegóły argumentu `<place>`",
              "",
              "Przypomnij sobie, że na poprzedniej lekcji określając `main` jako argument miejsca dla polecenia git push, wybraliśmy zarówno *źródło*, z którego mają pochodzić commity, jak i *cel*, do którego mają trafić.",
              "",
              "No i może zastanawiasz się teraz -- co by było, gdybyśmy chcieli, żeby źródło i cel były różne od siebie? Co, gdybyśmy chcieli wypchać commity z lokalnej gałęzi `foo` do zdalnej gałęzi `bar`?",
              "",
              "Cóż... niestety w Gicie nie da się tego zrobić... Żart! Jasne, że się da :) Git jest bardzo, bardzo elastyczny (może aż za bardzo).",
              "",
              "Zobaczmy, jak bardzo, na następnym slajdzie..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Aby określić zarówno źródło, jak i cel dla `<place>`, po prostu połącz je dwukropkiem:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "To nic innego jak refspec z dwukropkiem. Refspec to tylko wymyślny termin oznaczający lokalizację, którą Git potrafi zidentyfikować (na przykład gałąź `foo` albo po prostu `HEAD~1`).",
              "",
              "Kiedy już zaczniesz określać niezależnie źródła i cele, to możesz trochę zaszaleć na zdalnych repozytoriach. Zobaczmy demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Pamiętaj, że `source` (źródło) to dowolna lokalizacja, którą Git zrozumie:"
            ],
            "afterMarkdowns": [
              "Łaaał! Niezły odlot, ale jest w tym poleceniu jakiś sens -- Git zinterpretował `foo^` jako konkretną lokalizację, wrzucił tam wszystkie commity, jakich brakowało jeszcze w zdalnym repo, i na koniec zaktualizował cel."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "A co, jeśli miejsce, do którego chcesz zrobić push, nie istnieje? Żaden problem! Wybierz tylko nazwę dla gałęzi, a Git stworzy ją dla ciebie w zdalnym repozytorium."
            ],
            "afterMarkdowns": [
              "Pięknie! Całkiem sprytne! :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Na tym poziomie postaraj się uzyskać drzewo takie jak na wizualizacji, i pamiętaj o formacie:",
              "",
              "`<źródło>:<cel>`"
            ]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Dettagli sul parametro `<place>`",
              "",
              "Ricorderai dalle lezioni precedenti che quando abbiamo specificato `main` come parametro place per git push, abbiamo specificato sia la *fonte* di provenienza dei commit che la *destinazione* d'arrivo.",
              "",
              "Potresti star pensando -- e se volessimo che la fonte e la destinazione fossero distinte? Se volessi caricare con push dei commit dal ramo locale `foo` verso il ramo remoto `bar`?",
              "",
              "Sfortunatamente ciò non è possibile in git... scherzetto! Ovviamente lo possiamo fare :)... git è davvero molto flessibile (forse troppo).",
              "",
              "Vediamo come nella prossima slide..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Per specificare sia la fonte che la destinazione di `<place>`, basta unire le due tramite i due punti:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "Questo è comunemente conosciuto come colon refspec (*colon* sono i due punti). Refspec è solo un nome complicato per riferirsi ad una posizione che git può interpretare (come il ramo `foo` o anche solo `HEAD~1`).",
              "",
              "Potendo specificare sia fonte che destinazione in maniera indipendente, puoi sfruttare i comandi remoti in maniera molto precisa. Vediamo una demo!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ricorda, `source` può essere una qualsiasi posizione che git può capire:"
            ],
            "afterMarkdowns": [
              "Wow! Un comando bello contorto ma sensato -- git ha interpretato `foo^` come una posizione, caricato i commit che non erano presenti nel repository remoto, e poi aggiornato la destinazione."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "E se la destinazione alla quale vuoi caricare i dati non esiste? Nessun problema! Basta specificare il nome di un ramo e git lo creerà sul remoto per te."
            ],
            "afterMarkdowns": [
              "Facile così :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Per questo livello, prova a raggiungere lo stato finale mostrato nella finestra obiettivo, e ricorda il formato:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## `<place>` argümanı detayları",
              "",
              "Önceki dersten hatırlayacağınız gibi, `git push` komutunda `main`'i yer argümanı olarak belirttiğimizde, commitlerin nereden geleceğini (kaynak) ve nereye gideceğini (hedef) belirlemiştik.",
              "",
              "O zaman şöyle bir soru aklınıza gelebilir: Eğer kaynak ve hedef farklı olursa ne olur? Örneğin, yerel `foo` dalındaki commitleri uzaktaki `bar` dalına itmek isterseniz?",
              "",
              "Ne yazık ki, git'te bu imkansız... Şaka yapıyorum! Tabii ki mümkün :)... Git, oldukça fazla esneklik sunar (belki de fazla).",
              "",
              "Bir sonraki slaytta nasıl yapılacağını görelim..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Hem kaynak hem de hedefi belirtmek için, her ikisini iki nokta ile birleştirmeniz yeterlidir:",
              "",
              "`git push origin <source>:<destination>`",
              "",
              "Bu, genellikle iki noktalı refspec olarak adlandırılır. Refspec, git'in anlayabileceği bir konum için kullanılan havalı bir terimdir (örneğin `foo` dalı ya da sadece `HEAD~1`).",
              "",
              "Her iki argümanı bağımsız olarak belirttiğinizde, uzaktaki komutlarla oldukça detaylı ve hassas işlemler yapabilirsiniz. Hadi bir demo görelim!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Hatırlayın, `source` git'in anlayacağı herhangi bir konum olabilir:"
            ],
            "afterMarkdowns": [
              "Vay canına! Oldukça karmaşık bir komut ama mantıklı -- git, `foo^`'u bir konuma çözümlüyor, uzak sunucuda henüz bulunmayan commitleri yüklüyor ve sonra hedefi güncelliyor."
            ],
            "command": "git push origin foo^:main",
            "beforeCommand": "git clone; go -b foo; git commit; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Peki ya hedef dalı yoksa ne olur? Sorun değil! Sadece bir dal adı verin, git sizin için bu dalı uzak sunucuda oluşturacaktır."
            ],
            "afterMarkdowns": [
              "Vay, bu oldukça havalı :D"
            ],
            "command": "git push origin main:newBranch",
            "beforeCommand": "git clone; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Bu seviyede, görsellemede gösterilen hedef duruma ulaşmaya çalışın ve şu formatı hatırlayın:",
              "",
              "`<source>:<destination>`"
            ]
          }
        }
      ]
    }
  }
};