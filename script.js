var auth=document.getElementById('author');
var qu=document.getElementById('quote');
var check=0; 

function generateQuote(){
    var Q=[
        {'quote':'Be yourself; everyone else is already taken',
         'author':'― Oscar Wilde'
        },
        {'quote':'So many books, so little time.',
         'author':'― Frank Zappa'
        },
        {'quote':'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
         'author':'― Albert Einstein'
        },
        {'quote':'Live as if you were to die tomorrow. Learn as if you were to live forever.',
         'author':'― Mahatma Gandhi'
        },
        {'quote':'Those who don\'t believe in magic will never find it.',
         'author':'― Roald Dahl'
        },
        {'quote':'I don\'t hate them...I just feel better when they\'re not around.',
         'author':'― Charles Bukowski, Barfly'
        },
        {'quote':'Don\'t think or judge, just listen.',
         'author':'― Sarah Dessen, Just Listen'
        },
        {'quote':'Whatever you are, be a good one.',
         'author':'― Abraham Lincoln'
        },
        {'quote':'In the middle of difficulty lies opportunity',
         'author':'― Albert Einstein'
        },
        {'quote':'Ask for what you want and be prepared to get it!',
         'author':'― Maya Angelou'
        },
    ];
    var randomN=Math.floor(Math.random()*11);
    while(randomN===check){
        randomN=Math.floor(Math.random()*11);
    }
    check=randomN;
    qu.innerHTML=Q[randomN].quote;
    auth.innerHTML=Q[randomN].author;
}