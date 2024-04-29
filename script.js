const quotes = [
    "“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein", 
    "“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi",
    "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain",
    "“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt",
    "“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale",
    "“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson",
    "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren",
    "“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill",
    "“It is better to fail in originality than to succeed in imitation.” —Herman Melville",
    "“The road to success and the road to failure are almost exactly the same.” —Colin R. Davis",
    "“Success usually comes to those who are too busy to be looking for it.” —Henry David Thoreau",
    "“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie",
    "“Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan -Press On- has solved and always will solve the problems of the human race.” —Calvin Coolidge",
    "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers",
    "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden",
    "“I never dreamed about success. I worked for it.” —Estée Lauder",
    "“Success is getting what you want; happiness is wanting what you get.”―W. P. Kinsella",
    "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” —Winston Churchill",
    "“Don’t let yesterday take up too much of today.” —Will Rogers",
    "“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” —Unknown",
    "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” —Steve Jobs",
    "“Experience is a hard teacher because she gives the test first, the lesson afterward.” ―Vernon Sanders Law",
    "“To know how much there is to know is the beginning of learning to live.” —Dorothy West",
    "“Goal setting is the secret to a compelling future.” —Tony Robbins",
    "“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.” —Alexander Graham Bell",
    "“Either you run the day or the day runs you.” —Jim Rohn",
    "“I’m a great believer in luck, and I find the harder I work, the more I have of it.” —Thomas Jefferson",
    "“When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho",
    "“Opportunity is missed by most people because it is dressed in overalls and looks like work.” —Thomas Edison"

];

const generateButton = document.getElementById('generateButton');
const closeButton = document.getElementById('exit');
const quoteElement = document.getElementById('quote');

generateButton.addEventListener('click', generateRandomQuote);
closeButton.addEventListener('click', closeWindow);

function generateRandomQuote(){
    const randomIndex = Math.floor(Math.random()* quotes.length);
    quoteElement.textContent = quotes[randomIndex];
};

function closeWindow(){
    window.close();
};