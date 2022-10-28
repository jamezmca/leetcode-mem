export const questions = {
    easy: {
        1: {
            "link": "https://leetcode.com/problems/two-sum/",
            "question_img": "https://i.imgur.com/4E1rTSg.png",
            "answer_link": "https://i.imgur.com/KUacWx0.png",
            "explanation": "First we define a cache (dictionary), where the key is remainder (target - number), and the value is the index of that number. Then, if we encouter a number already exists as a key in the dictionary, we know that we have a pair that adds up to the target, and we can return the value in the dictionary corresponding to the stored remainder, and the index of the current value.",
            "time_complexity": "O(n)"
        },
        20: {
            "link": "https://leetcode.com/problems/valid-parentheses/",
            "question_img": "https://i.imgur.com/70lLtRB.png",
            "answer_link": "https://i.imgur.com/nxH8HhR.png",
            "explanation": "We start by defining a cache that corresponds an opening bracket (key) with it's equivalent closing bracket (value). Next we define a stack that will be used to push and pop brackets that we encounter from. For the solution to be valid, we need the bracket ordering to act like a reversable staircase - for every step we take down (every opening bracket), we must take a perfectly ordered inversed step back up. If we reach ground level, the outcome is true. And we can emulate this behavior by pushing every opening bracket to a stack, and for every closing bracket we encounter, we should expect to see the bracket at the top of the stack be the opposite kind, and we can consequently pop the bracket at the top of the stack back off into oblivion. If we finish with an empty stack, then it was a true outcome.",
            "time_complexity": ""
        },
        21: {
            "link": "https://leetcode.com/problems/merge-two-sorted-lists/",
            "question_img": "https://i.imgur.com/mClsnYW.png",
            "answer_link": "https://i.imgur.com/N5YWUQC.png",
            "explanation": "",
            "time_complexity": ""
        },
        121: {
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "question_img": "https://i.imgur.com/YMiyZ9O.png",
            "answer_link": "https://i.imgur.com/O5KXk16.png",
            "explanation": "",
            "time_complexity": ""
        },
        125: {
            "link": "https://leetcode.com/problems/valid-palindrome/",
            "question_img": "https://i.imgur.com/k2qD7m2.png",
            "answer_link": "https://i.imgur.com/zy1i6Er.png",
            "explanation": "",
            "time_complexity": ""
        },
        226: {
            "link": "https://leetcode.com/problems/invert-binary-tree/",
            "question_img": "https://i.imgur.com/BXMHTYO.png",
            "answer_link": "https://i.imgur.com/6nlLKlL.png",
            "explanation": "",
            "time_complexity": ""
        },
        242: {
            "link": "https://leetcode.com/problems/valid-anagram/",
            "question_img": "https://i.imgur.com/eAEKvaP.png",
            "answer_link": "https://i.imgur.com/FhLEW08.png",
            "explanation": "",
            "time_complexity": ""
        },
        704: {
            "link": "https://leetcode.com/problems/binary-search/",
            "question_img": "https://i.imgur.com/kZf8Ex1.png",
            "answer_link": "https://i.imgur.com/PA8q32t.png",
            "explanation": "",
            "time_complexity": ""
        },
        733: {
            "link": "https://leetcode.com/problems/flood-fill/",
            "question_img": "https://i.imgur.com/RZbtGAo.png",
            "answer_link": "https://i.imgur.com/cdGGG0y.png",
            "explanation": "",
            "time_complexity": ""
        },
        235: {
            "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            "question_img": "https://i.imgur.com/tc2hgzU.jpg",
            "answer_link": "https://i.imgur.com/tc2hgzU.jpg",
            "explanation": "",
            "time_complexity": ""
        },
        110: {
            "link": "https://leetcode.com/problems/balanced-binary-tree/",
            "question_img": "https://i.imgur.com/6qrHSi2.jpg",
            "answer_link": "https://i.imgur.com/zJjT8E3.jpg",
            "explanation": "",
            "time_complexity": ""
        },
        141: {
            "link": "https://leetcode.com/problems/linked-list-cycle/",
            "question_img": "https://i.imgur.com/Id12AxR.jpg",
            "answer_link": "https://i.imgur.com/lSb0Wjr.png",
            "explanation": "",
            "time_complexity": ""
        },
        232: {
            "link": "https://leetcode.com/problems/implement-queue-using-stacks/",
            "question_img": "https://i.imgur.com/fvAn4Hn.png",
            "answer_link": "https://i.imgur.com/bUvr4uY.png",
            "explanation": "",
            "time_complexity": ""
        },
        278: {
            "link": "https://leetcode.com/problems/first-bad-version/",
            "question_img": "https://i.imgur.com/szl9Ao8.png",
            "answer_link": "https://i.imgur.com/7G2rJHo.png",
            "explanation": "",
            "time_complexity": ""
        },
        383: {
            "link": "https://leetcode.com/problems/ransom-note/",
            "question_img": "https://i.imgur.com/7n6Thqh.png",
            "answer_link": "https://i.imgur.com/RH2Gd5v.png",
            "explanation": "",
            "time_complexity": ""
        },
        70: {
            "link": "https://leetcode.com/problems/climbing-stairs/",
            "question_img": "https://i.imgur.com/wNWJ8uv.png",
            "answer_link": "https://i.imgur.com/npIXgFT.png",
            "explanation": "",
            "time_complexity": ""
        },
        409: {
            "link": "https://leetcode.com/problems/longest-palindrome/",
            "question_img": "https://i.imgur.com/IqZzr3H.png",
            "answer_link": "https://i.imgur.com/QKurIUX.png",
            "explanation": "",
            "time_complexity": ""
        },
        206: {
            "link": "https://leetcode.com/problems/reverse-linked-list/",
            "question_img": "https://i.imgur.com/hooztqc.jpg",
            "answer_link": "https://i.imgur.com/eZTHkUK.png",
            "explanation": "",
            "time_complexity": ""
        },
        169: {
            "link": "https://leetcode.com/problems/majority-element/",
            "question_img": "https://i.imgur.com/TmmE8Tu.png",
            "answer_link": "https://i.imgur.com/rsvip3y.png",
            "explanation": "",
            "time_complexity": ""
        },
        67: {
            "link": "https://leetcode.com/problems/add-binary/",
            "question_img": "https://i.imgur.com/2mbZfyl.png",
            "answer_link": "https://i.imgur.com/9RjwzxB.png",
            "explanation": "",
            "time_complexity": ""
        },
        543: {
            "link": "https://leetcode.com/problems/diameter-of-binary-tree/",
            "question_img": "https://i.imgur.com/nzKpjZc.png",
            "answer_link": "https://i.imgur.com/qsIwS6U.png",
            "explanation": "",
            "time_complexity": ""
        },
        876: {
            "link": "https://leetcode.com/problems/middle-of-the-linked-list/",
            "question_img": "https://i.imgur.com/lvyqrIi.png",
            "answer_link": "https://i.imgur.com/N1JJW1w.png",
            "explanation": "",
            "time_complexity": ""
        },
        104: {
            "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            "question_img": "https://i.imgur.com/FiyZ3VA.png",
            "answer_link": "https://i.imgur.com/0VUE2CT.png",
            "explanation": "",
            "time_complexity": ""
        },
        217: {
            "link": "https://leetcode.com/problems/contains-duplicate/",
            "question_img": "https://i.imgur.com/EDkrb4z.png",
            "answer_link": "https://i.imgur.com/i7MSY08.png",
            "explanation": "",
            "time_complexity": ""
        },
    },
    medium: {
        53: {
            "link": "https://leetcode.com/problems/maximum-subarray/",
            "question_img": "https://i.imgur.com/JWrOqRq.png",
            "answer_link": "https://i.imgur.com/Lu4zWlF.png",
            "explanation": "",
            "time_complexity": ""
        },
        57: {
            "link": "https://leetcode.com/problems/insert-interval/",
            "question_img": "https://i.imgur.com/bdeDcAY.png",
            "answer_link": "https://i.imgur.com/KgXO10X.png",
            "explanation": "We start by initializing a new array. We then loop through every index in the intervals array to check for three cases. If the upper bound of the new interval is less than the lower bound of the current interval at index i, then we know that the new interval has no overlap and can just be added to our new array before we add the interval at the current index. We can then return everything because it has been added. If the lower bound of the new interval is greater than the upper bound of the current interval, then we still have no overlap, we just haven't found the right spot for the new interval and so we just append the current interval and keep moving. If neither of these two conditions are met, then we have an overlap. So we can update the newInterval so that it simply represents the outer bounds of the overlapping current and new intervals, by taking the min and max values. We don't append this new interval, because the next one may have an overlap. Our previous code will naturally decide when to add this updated new interval. If we reach the end of the loop and it hasn't been added yet, then it belongs at the end, so we can append it and return the result. ",
            "time_complexity": "O(n)"
        },  
        542: {
            "link": "https://leetcode.com/problems/01-matrix/",
            "question_img": "https://i.imgur.com/jm02tKk.jpg",
            "answer_link": "https://i.imgur.com/AJuOoD1.png",
            "explanation": "We start by initializing a matrix of equivalent dimensions to the input matrix, with initial values of 10,000 at every coordinate. Then we create a double for loop (nested), the iterates over every column in every row, and set the value of the matrix at [i,j] to one of the following values. If the value of the input matrix at [i,j] is equal to 0, then we set our own matrix value at that coordinate to 0. Otherwise, we set it to the minimum of the current value of [i,j] in our matrix and the value horizontally behind plus 1 (we add one because it is one space away), and then we repeat the minimum calculation for the value at that index and the value vertically above plus 1. Then we run a double for loop in reversed order, this time setting the value at the current [i,j] coordinates to the minimum of the value at that coordinate and the value horizontally below plus 1, and then repeat for the value at that coordinate and the value vertically below plus 1. We run the loop twice because the first nested loop series is unable to backwards update values - once a value is calculated it can only affect future values. Running the loops forwards and then backwards means we can confirm the answer is a minimum in all horizontal and vertical directions.",
            "time_complexity": "O(n*m)"
        },
        973: {
            "link": "https://leetcode.com/problems/k-closest-points-to-origin/",
            "question_img": "https://i.imgur.com/QyE2qF8.jpg",
            "answer_link": "https://i.imgur.com/b7cq4NL.png",
            "explanation": "For this solution we capitalize on Python's built in sorting function. We provide it a lambda function to use as the sorting criteria, and we input the vector magnitude calculation as said metric. Finally we return the first k number of indexes in the sorted array.",
            "time_complexity": "O(n*log(n))"
        },
        3: {
            "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "question_img": "https://i.imgur.com/7b05bMw.png",
            "answer_link": "https://i.imgur.com/9HrqsoV.png",
            "explanation": "To solve this question, we use a sliding window technique, where the window tracks the valid longest substring pertaining to a particular character as we loop through the array. We initialize a left index pointer to 0, a res which is a maximum length parameter and a character set. Now we loop through every index of the input string, and see if the character is unique (not already in our charset). If it is, then we add it to our charSet and increment our res (max tracker), and if it is inside of our character set, then we start clearing out our character set using the left index pointer. We use a while loop to remove the left most character, increment the left index pointer, repeat our currect character in charSet check, and if it is still in then we continue this process until our current character is now unique in the character set. This finds all the different windows of valid sub-strings and we can just keep the maximum length of any substring, where the length is the current index less the left index pointer plus 1.",
            "time_complexity": "O(n)"
        },
        15: {
            "link": "https://leetcode.com/problems/3sum/",
            "question_img": "https://i.imgur.com/MoLRQb7.png",
            "answer_link": "https://i.imgur.com/26DiIH3.png",
            "explanation": "We begin by sorting our array and creating a result array. We solve this problem by completing two-sum for every value in the original nums array. So we initialize a for loop to loop through every value, and if the current number is equal to the previous number, we skip over it as every solution has to be unique. We then initialize a left and right variable, where the left value is the current index + 1 and the right value is the end of the array. We then adjust the left and right pointers using a while loop to find triplets that are both unique and sum to zero. Since the array is sorted, if the sum is greater than 0, we shift the right pointer one space to the left, and if the sum is less than 0, we shift the left pointer one to the right. If we find a valid triplet, we add it to the result array and we shift the left pointer using a while loop, adjusting it in increments of one until it takes a new value. This ensures we find all two sum combinations that also fulfill the three sum requirement.",
            "time_complexity": "O(n^2)"
        },
        102: {
            "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            "question_img": "https://i.imgur.com/f7Z6DS5.png",
            "answer_link": "https://i.imgur.com/8ueCyBL.png",
            "explanation": "To solve this problem we use a breadth first search which utilizes a queue that we initialize along with a results array. We first append the root node to the queue, and when we use a while loop that checks to see if the queue is not None. If it isnt, then we take a snapshot of the length of the queue (representative of the number of nodes in at this level in the tree). We also define an array that will hold all the values in that particular level, and then we use a for loop in range of the snapshotted length of the queue, and for that number of loops, we pop the left most node, save the value to our result, and add the left and right child nodes to the end of the queue. For every level we traverse, we add the array of values to our result array and finally return our result array.",
            "time_complexity": "O(n)"
        },
        133: {
            "link": "https://leetcode.com/problems/clone-graph/",
            "question_img": "https://i.imgur.com/qN3j2WQ.jpg",
            "answer_link": "https://i.imgur.com/HRjZcWU.png",
            "explanation": "First we begin by defining a cache to prevent repeated work as our method for solving this problem is recursion. Then we define the recursive function that takes in a node, and first checks if the node is already saved in our cache. If it is, we simply return the cached value, and otherwise, we make a copy of the node, initializing a new node with node.val equal to the original node value. Then we add the original node to the cache, where the value is the copy. And then we loop through all the neighbors of the original node, call our recusive function on the neighbor, and append this value to our new copy. We finish by returning the copy from the recursive function and returning the recursive function call on the original node from our top level function.",
            "time_complexity": "O(n) or O(edges + vertices)"
        },
        150: {
            "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
            "question_img": "https://i.imgur.com/ZOhlwtT.png",
            "answer_link": "https://i.imgur.com/4l6kaCo.png",
            "explanation": "We begin by initializing a stack that is going to be used to house all of our numerical values and calculations. Next we loop through every character in the array, and if the value is numeric, then we add it to our stack. The isnumeric() method only works on positive values so we have to modify the string to remove any starting negative to ensure it accurately checks if the character is numeric. If the character is not numeric, then we make two pop operations from the end of the stack. The first pop corresponds to the second value and the second pop is the first value in the operating. We then construct a string in the format of first value -> operator -> second value, and use the eval method to have python evaluate that operation. We then append the evaluated result to our stack to be later popped/reused in any following evaluations/operations. At the end of the sequence, we should only have the final value from all the operations remaining in our stack at index 0, and we can return this value from the function.",
            "time_complexity": "O(n)"
        },
        207: {
            "link": "https://leetcode.com/problems/course-schedule/",
            "question_img": "https://i.imgur.com/oDDYg7p.png",
            "answer_link": "https://i.imgur.com/HJVClCQ.png",
            "explanation": "We use an adjacency list (hashmap) and recursive DFS to resolve this question. We begin by creating a dictionary that has a each course number as a key and the value is an array of dependencies specific to that course number. Then we define a visited set which we will use to track items that we have visited on a particular DFS tree (this ensures that we don't end up looping in a circle). Now we define our recursive function that takes a course number as an argument, and then we define our base cases. The first base case is a check to see whether or not we have already visited this node. If it exists inside of our visited set, then we have visited it and we can return False, as we know the problem is unsolvable. The second base case is a check for the course in the adjacency map. If the course has no dependencies, then we can return True, because this particular prereq is possible. If neither of these conditions are true, then we add our current course to the visited set, and then loop over every dependency that this particular course has, called our DFS on each of them. If we don't return False from any of those dependency searches, then we know this course is possibly to take and so we can set it's dependency array to an empty list, as we have confirmed that we can take it. We then remove it from the visited list and return True from the DFS function. Finally, we loop over every course number and run our DFS search on each of them. If none of the DFS calls return False, then we know we have not encountered any impossible course configurations and we can return true from the top level function.",
            "time_complexity": "O(num_courses+num_prerequisites)"
        },
        208: {
            "link": "https://leetcode.com/problems/implement-trie-prefix-tree/",
            "question_img": "https://i.imgur.com/LZrkpEB.png",
            "answer_link": "https://i.imgur.com/rAIuDyh.png",
            "explanation": "",
            "time_complexity": "We can solve this question by initializing a new class, TrieNode. TrieNode has two parameters, children and endOfWord. In the Trie class, we define a property of this class - root, where root is the top level TrieNode. For the insert function, we begin by assigning the self.root to a variable, current. We can then loop over every character in the string, checking if the character is already a child of the root node. If it does not exist, we initialize it as a child TrieNode in the the children dictionary of current. We then set current equal to said child TrieNode. This breaks down the string into a tree the organizes the letters from top down. When we finish the loop, current should be equal to the final letter which itself should have been initialized as a TrieNode. We can then set the endOfWord parameter of that final TrieNode to true as it is the end of the word. For the search function, we run a similar sequence of code, starting by setting the current variable to the root. Then we loop over every character, ensuring that it is a child in it's parent's letters TrieNode. If all letters are indeed included in our Trie, then current should be set to the final character TrieNode and we can return the endOfWord boolean value from that node. The starts with function is exactly the same, except that we don't have to return the endOfWord parameter. If we can confirm that each letter is contained in the correct parent -> child sequence within our Trie, then we can return True, and otherwise False."
        },
        322: {
            "link": "https://leetcode.com/problems/coin-change/",
            "question_img": "https://i.imgur.com/Ncbh0J0.png",
            "answer_link": "https://i.imgur.com/3kZEw5Y.png",
            "explanation": "This is a dynamic programming solution. We begin by initializing an array of length equal to amount + 1, where each value in the array is also set to amount + 1. We do this because it would be impossible to reach that number of coins with the smallest demonination without overflowing the target amount. Next we initialize the 0th index of the array to 0, because it takes a total of zero coins to sum to that amount. In this array, the index represents an arbitrary amount, and the value represents the minimum number of coins that we need to sum to that amount. Now we loop through every amount/index in that array, and within each iteration of this loop, have a nest loop of each coin amount, and check if the index amount less the coin amount is great than zero. This is to ensure that we have a possibly solution. For example, if we are targeting amount 12, and we're at an index value of 6. If six less the coin value is still greater than zero, then we have a possibility of finding a solution further down the line. If the amount less the coin value is indeed greater than zero, then we set the number of coins needed to reach said amount equal to the minimum of whatever the current value is and 1 coin on top of whatever number of coins was required for an amount equal to the current index amount less the coin value. So if the current index amount is 7, and the coin value is three, then we want to take the minimum of either the current number of coins needed to reach 7, or 1 coin for the current coin value in our loop plus the number of coins required to reach the compliment of that amount. Say the current coin value was 3, then we need to check how many coins was required to reach a value of 4, so we check out dictionary, take that value, and add one for the current coin we just used to amount to the index value. Finally, and after the loop has finished executing, we can return the number of coins required to reach our input amount so long as the number of coins is not equal to the default value. If it is, then no solution was able to be found in which case we can return -1.",
            "time_complexity": "O(amount * len(coins))"
        },
        238: {
            "link": "https://leetcode.com/problems/product-of-array-except-self/",
            "question_img": "https://i.imgur.com/WB0d4Uk.png",
            "answer_link": "https://i.imgur.com/9CTub2N.png",
            "explanation": "For this solution, we begin by constructing an answers array of length equal to the input nums array, where all values in the array are initialized to 0. We then define a previous multiplier value with initial value equal to one. And then we loop over every index in range of the length of the input nums array. For every index, we make the answers value at that particular index equal to the previous multiplier which is equivalent to all the values prior to this index multiplier together. We then define a post values multiplier with initial value equal to one and then we loop through all index values in reversed order, and multiply the currently indexed value in our answers array by the previous multipler, which is equivalent to all values after a particular index in the array being multiplied together. This means that the final value at any index in the array is the product of all values prior to and follow, but not including, the current index value.",
            "time_complexity": "O(n)"
        },
        155: {
            "link": "https://leetcode.com/problems/min-stack/",
            "question_img": "https://i.imgur.com/S30UcFW.png",
            "answer_link": "https://i.imgur.com/LzoP0MY.png",
            "explanation": "We begin by defining at __init__ function that sets some self parameters specific to our class. We initialize two arrays, one for all values and the other for minValues. For our push method, we append the push value to our array. Our minstack is used to track the minimum value up to a certain value. So the value at a particular index in the stack means that this is the minimum value for all values up to this point. We initialize a variable that takes the minimum of the value at the end of the min stack and the current value, and also append that to the end of thre minstack. Our pop method simply sets both arrays equal to the value of the arrays up until this point, less the final index. The top method returns the final index of our regular array. And the getMin method returns the end value of the minStack array. ",
            "time_complexity": ""
        },
        98: {
            "link": "https://leetcode.com/problems/validate-binary-search-tree/",
            "question_img": "https://i.imgur.com/2aUmh0n.jpg",
            "answer_link": "https://i.imgur.com/mm2Eh7X.png",
            "explanation": "To solve this problem we define a recursive function called valid that takes three arguments. The first argument is a node, the second is a left bound, and the third is a right bound. If the node is None, we return True. If the value of the node is less than the left bound or greater than the right bound, then we return false. These are both base cases. If neither of these conditions is met, then we return the AND boolean of the valid recursive function called on both the left and right children of the current node. For the left child, the outer left bound remains the same as the parent node and the new right bound is the value of the parent node (the current node). For the right child, the outer left bound becomes the value of the current node and the right node is the same as the parent node. We then call the valid recursive function on the original node, passing in float negative infinity as the left bound for the original node, and positive infinity for the right bound and return whatever is returned from this recursive search. ",
            "time_complexity": "O(n)"
        },
        200: {
            "link": "https://leetcode.com/problems/number-of-islands/",
            "question_img": "https://i.imgur.com/S5pvKm1.png",
            "answer_link": "https://i.imgur.com/W2slUGk.png",
            "explanation": "",
            "time_complexity": ""
        },
        994: {
            "link": "https://leetcode.com/problems/rotting-oranges/",
            "question_img": "https://i.imgur.com/t53Z0Tv.png",
            "answer_link": "https://i.imgur.com/yXfkTlB.png",
            "explanation": "",
            "time_complexity": ""
        },
        33: {
            "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            "question_img": "https://i.imgur.com/y6Px8EM.png",
            "answer_link": "https://i.imgur.com/dbL352P.png",
            "explanation": "We can utilize the .index function in python to return the index of the target. If the target is not in the nums array, we return -1.",
            "time_complexity": "O(n)"
        },
        39: {
            "link": "https://leetcode.com/problems/combination-sum/",
            "question_img": "https://i.imgur.com/pWP9Uyy.png",
            "answer_link": "https://i.imgur.com/dDYcVvl.png",
            "explanation": "This question requires a depth first search recursive algorithm to be solved where at each recursive step, we make two two branches; one, where we add the current index onto the solution, and two, we do not add the current value to the solution array. We begin by initializing a result array, and then defining our dfs function. Our dfs function takes three arguments, the first is the index value, the second is the array for that particular branch, and the third is the total sum. If we find that the total is equal to the target, we append a copy of the array to our result variable. If the index is greater than the length of the input candidates array or the total is greater than the target, we simply return and end that particular branch. And finally, if neither of the other two base cases is met, we create our new branchs. First, we append the current value at the given index to our branch array, and then we call the dfs, passing in the same index as we are currently at (because we can include the same value multiple times), the new array containing the added value, and the new total, which is the previous total + the candidate at the current index. Then we pop the recently added candidate off the array, and create our second branch by again calling the dfs function. We pass in an incremented index (as this second branch should skip adding the current value), the branch array which is the same as the input, and the target, which is also the same. This ultimately acts to create a bi-decision tree at every node, where we either do include the current value, or we do not. And we do this for every value, until we find all possible solutions. And then we call our dfs method, passing in an initial index of 0, an empty array, and a total of 0. Then we return our result array which has been modified by the use of our recursive function.",
            "time_complexity": "O(2^target)"
        },
        46: {
            "link": "https://leetcode.com/problems/permutations/",
            "question_img": "https://i.imgur.com/KDHVUaT.png",
            "answer_link": "https://i.imgur.com/z8PeuB8.png",
            "explanation": "We will use a recursive depth first search to solve this problem. We begin by defining a result array to store our solutions. Then we initialize our depth first search algorithm, and it takes an array of parents and the parent array as arguments. The parent array is the combination of numbers that has lead to a particular node in a branch, and the first array is an array containing all the unused integers. We first define our base cases, which check to see if either the len of the array is 0 (in which case we have used all digits and should append our result to the results array), or there is one remaining character (in which case we can append that last character to the parents array and add that to the result array). If neither base case is met, then we loop over every index in the array of remaining characters, and for each iteration, we isolate the value at the current index, and add it to the parents array. We also conjoin the remaining digits on the left and right side of the value at the current index into a new array, and finally call the dfs function, passing into it the newly constructed array of remaining values, and the updated parent array which now contains the value at the current index. Finally, we call the dfs function, passing in the input nums array and an empty parent array, and then return the result array after the dfs function has finished executing.",
            "time_complexity": "Good question"
        },
        56: {
            "link": "https://leetcode.com/problems/merge-intervals/",
            "question_img": "https://i.imgur.com/EML3iaa.png",
            "answer_link": "https://i.imgur.com/Leh9xux.png",
            "explanation": "",
            "time_complexity": ""
        },
        236: {
            "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            "question_img": "https://i.imgur.com/kWDrMho.jpg",
            "answer_link": "https://i.imgur.com/kWDrMho.jpg",
            "explanation": "",
            "time_complexity": ""
        },
        981: {
            "link": "https://leetcode.com/problems/time-based-key-value-store/",
            "question_img": "https://i.imgur.com/Mveau3h.png",
            "answer_link": "https://i.imgur.com/R7suyUp.png",
            "explanation": "",
            "time_complexity": ""
        },
        // 721: {
        //     "link": "https://leetcode.com/problems/accounts-merge/",
        //     "question_img": "https://i.imgur.com/3gVbYt3.jpg",
        //     "answer_link": "",
        //     "explanation": "",
        //     "time_complexity": ""
        // },
        75: {
            "link": "https://leetcode.com/problems/sort-colors/",
            "question_img": "https://i.imgur.com/ShUWUb2.png",
            "answer_link": "https://i.imgur.com/v0LG3aj.png",
            "explanation": "",
            "time_complexity": ""
        },
        139: {
            "link": "https://leetcode.com/problems/word-break/",
            "question_img": "https://i.imgur.com/MReWRV3.png",
            "answer_link": "https://i.imgur.com/Qm15y9E.png",
            "explanation": "",
            "time_complexity": ""
        },
        416: {
            "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
            "question_img": "https://i.imgur.com/NKszkBb.png",
            "answer_link": "https://i.imgur.com/20jHZRk.png",
            "explanation": "",
            "time_complexity": ""
        },
        8: {
            "link": "https://leetcode.com/problems/string-to-integer-atoi/",
            "question_img": "https://i.imgur.com/131L4jN.jpg",
            "answer_link": "https://i.imgur.com/PmwkuqC.png",
            "explanation": "",
            "time_complexity": ""
        },
        54: {
            "link": "https://leetcode.com/problems/spiral-matrix/",
            "question_img": "https://i.imgur.com/7s6Y3V3.jpg",
            "answer_link": "https://i.imgur.com/Sge2Y6Z.png",
            "explanation": "",
            "time_complexity": ""
        },
        78: {
            "link": "https://leetcode.com/problems/subsets/",
            "question_img": "https://i.imgur.com/H48f2j7.png",
            "answer_link": "https://i.imgur.com/2Y5UF6I.png",
            "explanation": "",
            "time_complexity": ""
        },
        199: {
            "link": "https://leetcode.com/problems/binary-tree-right-side-view/",
            "question_img": "https://i.imgur.com/2QpBb5x.png",
            "answer_link": "https://i.imgur.com/yaNqvT0.png",
            "explanation": "",
            "time_complexity": ""
        },
        5: {
            "link": "https://leetcode.com/problems/longest-palindromic-substring/",
            "question_img": "https://i.imgur.com/EXuEqDG.png",
            "answer_link": "https://i.imgur.com/mGSlm1T.png",
            "explanation": "",
            "time_complexity": ""
        },
        62: {
            "link": "https://leetcode.com/problems/unique-paths/",
            "question_img": "https://i.imgur.com/nGGwm2G.png",
            "answer_link": "https://i.imgur.com/sLCBIxy.png",
            "explanation": "",
            "time_complexity": ""
        },
        105: {
            "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            "question_img": "https://i.imgur.com/Bw9RPIS.png",
            "answer_link": "https://i.imgur.com/f3LebKx.png",
            "explanation": "",
            "time_complexity": ""
        },
        11: {
            "link": "https://leetcode.com/problems/container-with-most-water/",
            "question_img": "https://i.imgur.com/bFekYqO.png",
            "answer_link": "https://i.imgur.com/c26AvGg.png",
            "explanation": "",
            "time_complexity": ""
        },
        17: {
            "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            "question_img": "https://i.imgur.com/UxcymZD.png",
            "answer_link": "https://i.imgur.com/kOyeYl9.png",
            "explanation": "",
            "time_complexity": ""
        },
        79: {
            "link": "https://leetcode.com/problems/word-search/",
            "question_img": "https://i.imgur.com/exT8llx.jpg",
            "answer_link": "https://i.imgur.com/bbgZyG2.png",
            "explanation": "",
            "time_complexity": ""
        },
        438: {
            "link": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
            "question_img": "https://i.imgur.com/MN6XRGw.png",
            "answer_link": "https://i.imgur.com/EjhmOAV.png",
            "explanation": "",
            "time_complexity": ""
        },
        // 310: {
        //     "link": "https://leetcode.com/problems/minimum-height-trees/",
        //     "question_img": "https://i.imgur.com/bY5KfqE.jpg",
        //     "answer_link": "",
        //     "explanation": "",
        //     "time_complexity": ""
        // },
        621: {
            "link": "https://leetcode.com/problems/task-scheduler/",
            "question_img": "https://i.imgur.com/sUpjm8M.png",
            "answer_link": "https://i.imgur.com/bddCG9i.png",
            "explanation": "",
            "time_complexity": ""
        },
        146: {
            "link": "https://leetcode.com/problems/lru-cache/",
            "question_img": "https://i.imgur.com/ypN49Ep.png",
            "answer_link": "https://i.imgur.com/wKoFw52.png",
            "explanation": "",
            "time_complexity": ""
        },
        230: {
            "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "question_img": "https://i.imgur.com/xv89v1f.jpg",
            "answer_link": "https://i.imgur.com/9jcyWD0.png",
            "explanation": "",
            "time_complexity": ""
        },
    }, 
    hard: {

    }
}