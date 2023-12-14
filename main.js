var q=[
    'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.-Albert Einstein',
     'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.',
     "In the depth of winter, I finally learned that within me there lay an invincible summer.-Albert Camus" ,
     "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.-Nikola Tesla" ,
     "You miss 100% of the shots you don't take. -Wayne Gretzky",
     'Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill',
     'Get busy living or get busy dying. — Stephen King',
     'Life is never easy. There is work to be done and obligations to be met obligations to truth, to justice, and to liberty. — John F. Kennedy',
     'My mama always said, life is like a box of chocolates. You never know what you are gonna get. — Forrest Gump' ,
     'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things. — Leonardo Da Vinci',
     'Living an experience, a particular fate, is accepting it fully. — Albert Camus',
     'The more this life teaches me ... The more i know how imperfect my mind was The more I learn from this life ... The more i learn how ignorant i was. —Imam Alshafii',
     'Be yourself; everyone else is already taken.― Oscar Wilde',
     'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment ― Ralph Waldo Emerson',
     'The fool doth think he is wise, but the wise man knows himself to be a fool. ― William Shakespeare',
     'The man who does not read has no advantage over the man who cannot read. ― Mark Twain',
     'A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one. ― George R.R. Martin, A Dance with Dragons',
     'That which does not kill us makes us stronger. ― Friedrich Nietzsche',
     'If you can not explain it to a six year old, you do not understand it yourself. ― Albert Einstein',
     'Life is not about finding yourself. Life is about creating yourself. ― George Bernard Shaw',
     'Logic will get you from A to Z; imagination will get you everywhere. ― Albert Einstein ',
     'Life is like riding a bicycle. To keep your balance, you must keep moving. ― Albert Einstein',
     'a mind needs books as a sword needs a whetstone, if it is to keep its edge. ― George R.R. Martin, A Game of Thrones',


     

]
function quote() {
    var randomIndex = Math.floor(Math.random() * q.length);
    var quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = q[randomIndex];
  }