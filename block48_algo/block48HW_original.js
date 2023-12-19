/* question 1 Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. You need to check the following conditions: 

  The opening brackets: 

- Must match with the corresponding closing brackets of the same type 

- Must be closed in the correct order 

- Should have a corresponding opening bracket of the same type 
Example: 

Input: s = "()" Output: true */

const isValid = function(s) {
    let stack = []; // create an empty stack to store opening brackets
    for (let char of s) { // loop through each character in the string
        if (char === '(' || char === '{' || char === '[') { // if the character is an opening bracket
            stack.push(char); // push it onto the stack
        } else { // if the character is a closing bracket
            if (!stack.length || // if the stack is empty or 
                (char === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (char === '}' && stack[stack.length - 1] !== '{') ||
                (char === ']' && stack[stack.length - 1] !== '[')) {
                return false; // the string is not valid, so return false
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }
    }
    return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                          // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};

/* question 2 There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 

You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 

Each person purchases a ticket in exactly one second. A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. If a person has no more tickets to buy, he or she will leave the line. 

Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 

Example:

Input: tickets = [2,3,2], k = 2
Output: 6 */



const timeRequiredToBuy = function(tickets, k) {
    let count = 0;
    while(tickets[k] > 0){
        for(let i=0;i<tickets.length;i++){
            if(tickets[k] == 0){
               return count;
            }
            if(tickets[i] > 0){
                count++;
                tickets[i]--;
            }
        }
        if(tickets[k] == 0){
            break;
        }
    }
    return count;
};

/* question 3 You are given an array heights representing the heights of students in a class. The students are standing in a line, and their heights are listed in the order they appear from left to right. The school wants to arrange the students in a non-decreasing order by their heights. However, when they rearrange the students, a few may end up in different positions from their original positions.

You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

Example: 

Input: heights = [1,1,4,2,1,3]
Output: 3 */


function heightChecker(heights) {
    // Create a sorted copy of the original array
    const sortedHeights = [...heights].sort((a, b) => a - b);

    // Compare each element in the sorted array with the original array
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }

    return count;
}

/* question 4 You are given a deck of integer arrays. There is a deck of cards with each card having a unique integer, and the integer on the ith card is deck[i].  

You can arrange the deck in any order; all cards in one deck are initially face-down (unrevealed).  

Repeat the following steps until all cards are revealed.  

Step 1: Take out the top card from the deck and reveal it. 

Step 2: If there are still cards in the deck, you should place the next top card at the bottom of the deck. 

Step 3: If any cards remain unseen, return to step 1. Otherwise, proceed to the end. 

Step 4: Return a deck order that reveals the cards in increasing order. 

Example:

Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7] */

function deckRevealedIncreasing(deck) {
    const n = deck.length;
    deck.sort((a, b) => a - b); // Sort the deck in increasing order
    const result = Array(n).fill(0);
    const queue = [];

    // Initialize the queue with indices
    for (let i = 0; i < n; i++) {
        queue.push(i);
    }

    for (const card of deck) {
        // Place the revealed card at the next available position in the result array
        result[queue.shift()] = card;

        // If there are still cards in the deck, move the next top card to the bottom
        if (queue.length > 0) {
            queue.push(queue.shift());
        }
    }

    return result;
}

// Example usage:
const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck)); 