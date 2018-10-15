// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>Let's see how much you learned about productivity techniques and principles.</p>",
        "results": "<p>Check out my sources below to learn more about productivity techniques and principles!</p>",
        "level1":  "Effortlessly Efficient",
        "level2":  "Primarily Productive",
        "level3":  "Somewhat Successful",
        "level4":  "Could Be Capable?",
        "level5":  "Work Ethic Needs Work" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "According to the Eisenhower Method, you should schedule tasks to complete later if they are...",
            "a": [
                {"option": "Important / Urgent",      "correct": false},
                {"option": "Important / Not Urgent",     "correct": true},
                {"option": "Not Important / Urgent",      "correct": false},
                {"option": "Not Important / Not Urgent",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Schedule tasks that are important but not urgent!</p>",
            "incorrect": "<p><span>Nope!</span> It's actually tasks that are important but not urgent that you should schedule.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How long is a standard 'Pomodoro'?",
            "a": [
                {"option": "5 minutes",               "correct": false},
                {"option": "15 minutes",              "correct": false},
                {"option": "25 minutes",              "correct": false},
                {"option": "30 minutes",              "correct": true} // no comma here
            ],
            "correct": "<p><span>Yes!</span> A 'Pomodoro' consists of 25 minutes of work and a 5 minute break.</p>",
            "incorrect": "<p><span>Sorry, no.</span> A 'Pomodoro' actually consists of 25 minutes of work and a 5 minute break.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which principle is Pareto analysis based on?",
            "a": [
                {"option": "10/90 principle",           "correct": false},
                {"option": "20/80 principle",           "correct": true},
                {"option": "30/70 principle",           "correct": false},
                {"option": "50/50 principle",           "correct": false} // no comma here
            ],
            "correct": "<p><span>You got it!</span> 20/80 principle: 20 percent of routines lead to 80 percent of outcomes. </p>",
            "incorrect": "<p><span>Not quite.</span> 20 percent of routines lead to 80 percent of outcomes, remember?</p>" // no comma here
        },
        { // Question 4
            "q": "You need to write an email to your boss by Friday. According to Parkinson's Law, when will you finish?",
            "a": [
                {"option": "In 2 minutes",    "correct": false},
                {"option": "On Thursday",     "correct": false},
                {"option": "On Friday",      "correct": true},
                {"option": "Never",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> You are likely to take as much time as you've allotted for yourself.</p>",
            "incorrect": "<p><span>Wrong.</span> You are likely to take as much time as you've allotted for yourself.</p>" // no comma here
        },
        { // Question 5
            "q": "True or False: The 2-Minute Rule encourages you to finish every task in two minutes.",
            "a": [
                {"option": "True",    "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Nice!</span> You should spend two minutes getting started, but you don't need to finish. </p>",
            "incorrect": "<p><span>Too bad.</span> Not all tasks can be finished in two minutes! But you can spend two minutes getting started.</p>" // no comma here
        } // no comma here
    ]
};
