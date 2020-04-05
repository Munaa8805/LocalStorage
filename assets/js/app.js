//// variables
const tweetList = document.getElementById("tweet-list");

////event listeners
eventListeners();
function eventListeners() {
  //// form submision
  document.querySelector("#form").addEventListener("submit", newTweet);
  //// remove tweet from the list
  tweetList.addEventListener("click", removeTweet);
  ///// documnet
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}
///functions\
function newTweet(e) {
  e.preventDefault();

  ///Read the textarea value
  const tweet = document.getElementById("tweet").value;
  ///// create remove btn
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  //// create an li element
  const li = document.createElement("li");
  li.textContent = tweet;

  //// ADD TEH REMOVE BUTTON TO EACH TWEET
  li.appendChild(removeBtn);
  //// add to the list
  tweetList.appendChild(li);

  //// add
  addTweetLocalStorage(tweet);
}
//// removes
function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }
  //// remove from storage
  removeTweetLocalStorage(e.target.parentElement.textContent);
}
//// function
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();
  //// add the tweets ubti the array

  tweets.push(tweet);
  //// convert tweet array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
function getTweetsFromStorage() {
  let tweets;
  const tweetLS = localStorage.getItem("tweets");
  ///(l// get values , if null is returned then we
  if (tweetLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetLS);
  }
  return tweets;
}
/// print local storages data
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();
  //// loop through storage and then print
  tweets.forEach(function (tweet) {
    ///// create remove btn
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    //// create an li element
    const li = document.createElement("li");
    li.textContent = tweet;

    //// ADD TEH REMOVE BUTTON TO EACH TWEET
    li.appendChild(removeBtn);
    //// add to the list
    tweetList.appendChild(li);
  });
}
//// remove the tweet from local storage
function removeTweetLocalStorage(tweet) {
  /// get tweets from storage
  let tweets = getTweetsFromStorage();
  //// remove the X from the tweet
  const tweetDelete = tweet.substring(0, tweet.length - 1);
  //// loop throught the tweets and remove the tweet that's equal
  tweets.forEach(function (tweetLS) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });
  //// save the data
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
