import { postData, handleSubmit } from "../src/client/js/formHandler.js"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {

    // The test() function has two arguments - a string description, and an actual test as a callback function.  
      test("Testing the handleSubmit() function", async () => {

           // Define the input for the function, if any, in the form of variables/array
          const input ='https://www.nytimes.com/2020/07/21/us/politics/trump-coronavirus-masks.html'

           // Define the expected output, if any, in the form of variables/array
          const output = {
            polarity: 'negative',
            polarity_confidence: 0.8212994337081909,
            subjectivity: 'subjective',
            subjectivity_confidence: 1,
            text: '“Ultimately, our goal is not merely to manage the pandemic but to end it,” he added. “We want to get rid of it as soon as we can.”\n' +       
            'Mr. Trump’s decision to resume televised virus briefings came as the number of new cases soared far above what it was when he was last addressed the country about the pandemic on a daily basis. The United States is recording about 60,000 new infections a day, far more than the increase in tests in some states. The number of deaths, after falling substantially, is up 64 percent over the past two weeks.\n' +
            'The president again insisted the virus would “disappear” but conceded that it remained serious. “We have embers and fires, and we have big fires, and unfortunately now Florida is in a little tough or in a big tough position,” he said.\n' +
            'Weeks after claiming that “99 percent” of coronavirus cases were “totally harmless,” the president sounded less sanguine on Tuesday, calling it “a nasty horrible disease,” although he continued to falsely insist that the mortality rate in the United States was among the lowest in the world.\n' +     
            'Mr. Trump urged Americans to avoid packed bars and offered his most robust endorsement of masks, saying, “When you can, use a mask,” even as he falsely claimed he had always been supportive. “I have no problem with the masks,” he said, holding up a blue one with a presidential seal. “I view it this way: Anything that potentially can help, and that certainly can potentially help, is a good thing. I have no problem. I carry it. I wear it. You saw me wearing it a number of times, and I’ll continue.”\n' +
            'In fact, Mr. Trump has worn a mask in public on only one occasion — during a recent visit to Walter Reed National Military Medical Center in Maryland. Until then, he often disparaged masks: In April, after public health advisers recommended wearing them, he said, “I don’t think I’m going to be doing it.” Mr. Trump mocked Mr. Biden in May for donning one, calling them “a double-edged sword” and even suggesting that wearing a mask was a political statement against him.\n' +
            'He shifted his stance only after many senior Republicans, including Senator Mitch McConnell of Kentucky, the majority leader, and several governors began promoting them more vigorously. By this week, Mr. Trump began saying that it was “patriotic” to wear a mask, in contrast to his supporters, who have claimed that mandating masks is an infringement on their civil liberties.'
            }
            
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher 
         expect(await postData('http://localhost:8081/addData', {formText:input})).toEqual(output)
})
});

